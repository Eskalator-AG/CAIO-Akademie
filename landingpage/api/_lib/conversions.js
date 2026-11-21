/**
 * Conversions API (Briefing v3, Abschnitt 6) — Transport mit Umschalter.
 * CONVERSION_TRANSPORT = "meta_direct" | "stape" | "off"  (Env, Server only)
 *
 * meta_direct → POST https://graph.facebook.com/v24.0/${META_DATASET_ID}/events?access_token=${META_CAPI_TOKEN}
 * stape       → POST ${STAPE_ENDPOINT} mit identischem Payload
 *
 * Es wird NUR gesendet, wenn das Event `meta_ok` trägt (opt-in Checkbox).
 * Je event_id nur einmal (Dedupe, Browser-Pixel + Server deduplizieren).
 */
const crypto = require('crypto');

const TRANSPORT = (process.env.CONVERSION_TRANSPORT || 'off').toLowerCase();
const META_DATASET_ID = process.env.META_DATASET_ID || '';
const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN || '';
const STAPE_ENDPOINT = process.env.STAPE_ENDPOINT || '';
const META_TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || '';

// Dedupe-Speicher (Function-Instanz; Upstabst/Redis optional via STORE-Adapter)
const gesendet = new Set();

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * sendConversion(ev) — ev: { eventName, eventId, value, currency, email,
 * clientIp, clientUa, fbc, fbclid, landingTs, eventSourceUrl, customData, metaOk }
 * Liefert { sent, skipped, reason } — wirft nie (asynchron, 1 Retry, Log).
 */
async function sendConversion(ev) {
  try {
    if (TRANSPORT === 'off') return { sent: false, skipped: true, reason: 'transport-off' };
    if (!ev.metaOk) return { sent: false, skipped: true, reason: 'kein-meta-ok' };
    if (!ev.eventId) return { sent: false, skipped: true, reason: 'ohne-event-id' };
    if (gesendet.has(ev.eventId)) return { sent: false, skipped: true, reason: 'dedupe' };

    const payload = {
      data: [
        {
          event_name: ev.eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: ev.eventId,
          event_source_url: ev.eventSourceUrl,
          action_source: 'website',
          user_data: {
            em: ev.email ? [sha256(String(ev.email).trim().toLowerCase())] : undefined,
            client_ip_address: ev.clientIp || undefined,
            client_user_agent: ev.clientUa || undefined,
            fbc: ev.fbc ||
              (ev.fbclid && ev.landingTs
                ? 'fb.1.' + Math.floor(Number(ev.landingTs) / 1000 || Date.now() / 1000) + '.' + ev.fbclid
                : undefined)
          },
          custom_data: Object.assign(
            { content_name: 'caio-handbuch', currency: ev.currency || 'EUR' },
            ev.value != null ? { value: ev.value } : {},
            ev.customData || {}
          )
        }
      ]
    };
    if (META_TEST_EVENT_CODE) payload.test_event_code = META_TEST_EVENT_CODE;

    let url;
    if (TRANSPORT === 'stape') {
      if (!STAPE_ENDPOINT) return { sent: false, skipped: true, reason: 'stape-ohne-endpoint' };
      url = STAPE_ENDPOINT;
    } else {
      if (!META_DATASET_ID || !META_CAPI_TOKEN) {
        return { sent: false, skipped: true, reason: 'meta-direct-ohne-credentials' };
      }
      url = 'https://graph.facebook.com/v24.0/' + META_DATASET_ID + '/events?access_token=' + encodeURIComponent(META_CAPI_TOKEN);
    }

    for (let versuch = 0; versuch < 2; versuch++) {
      try {
        const r = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (r.ok) {
          gesendet.add(ev.eventId);
          if (gesendet.size > 5000) gesendet.clear(); // grober Schutz gegen Wachstum
          console.log('[conversions]', ev.eventName, ev.eventId, 'gesendet via', TRANSPORT);
          return { sent: true, skipped: false };
        }
        console.error('[conversions] HTTP', r.status, await r.text().catch(() => ''));
      } catch (err) {
        console.error('[conversions] Fehler (Versuch ' + (versuch + 1) + '):', err && err.message);
      }
      if (versuch === 0) await new Promise((res) => setTimeout(res, 800)); // 1 Retry
    }
    return { sent: false, skipped: true, reason: 'http-fehler' };
  } catch (err) {
    console.error('[conversions] unerwarteter Fehler:', err && err.message);
    return { sent: false, skipped: true, reason: 'fehler' };
  }
}

module.exports = { sendConversion, sha256, TRANSPORT };
