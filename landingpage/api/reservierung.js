/**
 * POST /api/reservierung — Reservierung des CAIO-Handbuchs (Briefing v3, Abschnitt 4)
 *
 * - Idempotent über formtoken (Abschnitt 4.2, 9)
 * - Prüft E-Mail, Paket-Whitelist, Datenschutz-Checkbox, ALTCHA-Lösung (SHA-256)
 * - Reservierungs-ID CAIO-R-xxxxx (Format gehärtet)
 * - Sendet Bestätigung an Kunden + interne Mail (Resend, wenn RESEND_API_KEY gesetzt)
 * - Lead an Meta Conversions API (nur mit meta_ok; event_id = Reservierungs-ID)
 * - GET ?storno=<id> → storniert (Link aus der Bestätigungs-Mail), Redirect auf Danke
 *
 * Sicherheitsarchitektur:
 *  - Alle User-Felder: Whitelist + Längenlimit + esc() in HTML-Ausgaben
 *  - Redirect-Ziele: konstante Pfade, Parameter encodeURIComponent
 *  - fetch-Ziele: NUR Konstanten (api.resend.com, graph.facebook.com) bzw. die
 *    beim Start validierte Upstash-Env-URL; Pfade whitelist-geprüft über safeKey()
 *  - Kein User-Input erreicht jemals eine URL, einen Header-Wert oder HTML unescaped
 *
 * Env (alle optional, Funktion degradiert sauber):
 *   RESEND_API_KEY, MAIL_FROM, MAIL_TO (default kontakt@caio-institut.de)
 *   STORE = "upstash" | "memory"  (+ UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN)
 *   CONVERSION_TRANSPORT, META_DATASET_ID, META_CAPI_TOKEN, META_TEST_EVENT_CODE, STAPE_ENDPOINT
 */
const crypto = require('crypto');
const { sendConversion } = require('./_lib/conversions.js');
const { storeSetResv, storeGetResv, storeSetToken, storeGetToken, neueId } = require('./_lib/store.js');

const PAKETE = {
  buch: { label: 'Buch', preis: 17.5 },
  buch_hoerbuch: { label: 'Buch + Hörbuch', preis: 27.5 },
  komplett: { label: 'Komplett-Paket', preis: 61.5 }
};
const ALTCHA = {
  algorithm: 'SHA-256',
  challenge: 'f5a65af59cb73c0083c25f41e4ee758bf9a9ecbd0d59d32086f6195e119cffd4',
  salt: '3d091ff821c14aa431b5851e29f4f644',
  maxnumber: 100000
};
const MAIL_TO = process.env.MAIL_TO || 'kontakt@caio-institut.de';
const MAIL_FROM = process.env.MAIL_FROM || 'CAIO Institut <reservierung@caio-institut.de>';
const BASIS = 'https://www.caio-institut.de';

// ID-Formate — strikt, bevor sie einen Storage-Key oder Redirect erreichen
const ID_RE = /^caio-r-[a-z0-9]{3,12}$/;
const KEY_RE = /^(resv|tok):[a-z0-9-]{3,80}$/;

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ── Speicher-Adapter: komplett ausgelagert nach _lib/store.js ──
// (diese Datei enthält keinen Outbound-Fetch für den Speicher mehr;
//  SSRF-Guard inkl. DNS-/privater-IP-Prüfung liegt in _lib/store.js)

// ── ALTCHA serverseitig prüfen (Abschnitt 4.2) ──
function altchaOk(payloadB64) {
  try {
    const raw = Buffer.from(String(payloadB64).slice(0, 2000), 'base64').toString('utf8');
    const data = JSON.parse(raw);
    if (data.algorithm !== 'SHA-256') return false;
    if (data.challenge !== ALTCHA.challenge) return false;
    if (data.salt !== ALTCHA.salt) return false;
    const n = Number(data.number);
    if (!Number.isInteger(n) || n < 0 || n > ALTCHA.maxnumber) return false;
    const hash = crypto.createHash('sha256').update(data.salt + n).digest('hex');
    return hash === ALTCHA.challenge;
  } catch (e) {
    return false;
  }
}

// ── Mails (Resend per fetch — keine npm-Abhängigkeit) ──
function mailBodyBestaetigung(r, sie) {
  const anrede = sie ? 'Ihre' : 'Deine';
  const zusammen = sie ? 'bekommen Sie' : 'bekommst du';
  const klartext = sie ? 'Sie' : 'du';
  const besitz = sie ? 'Ihres' : 'deines';
  const verb = sie ? 'buchen' : 'buchst';
  const hoeren = sie ? 'Sie hören' : 'Du hörst';
  return `<!doctype html><html><body style="margin:0;background:#FAF6EF;font-family:Arial,Helvetica,sans-serif;color:#171310">
  <div style="max-width:560px;margin:0 auto;padding:24px">
    <div style="background:#0D1B2A;border-radius:14px;padding:26px 30px;margin-bottom:18px">
      <div style="color:#D4A94B;font-weight:bold;letter-spacing:3px;font-size:12px">CAIO INSTITUT</div>
      <h1 style="color:#F2EEE6;margin:12px 0 6px;font-size:24px;line-height:1.25">${anrede} Reservierung ist da.</h1>
      <p style="color:rgba(242,238,230,.8);margin:0;font-size:15px">Das CAIO-Handbuch — 85 Seiten, integriertes Workbook.</p>
    </div>
    <div style="background:#FFFFFF;border-radius:14px;padding:26px 30px;border:1px solid rgba(23,19,16,.08)">
      <p style="margin:0 0 6px;font-size:14px;color:#6B6258">Reservierungsnummer</p>
      <p style="margin:0 0 18px;font-size:22px;font-weight:bold;color:#16425B;font-family:monospace">${esc(r.id)}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 0;color:#6B6258">Paket</td><td style="text-align:right;font-weight:bold">${PAKETE[r.paket].label}</td></tr>
        <tr><td style="padding:6px 0;color:#6B6258">Preis später</td><td style="text-align:right;font-weight:bold">${PAKETE[r.paket].preis.toFixed(2).replace('.', ',')} € inkl. MwSt.</td></tr>
        <tr><td style="padding:6px 0;color:#6B6258">Status</td><td style="text-align:right">Reserviert</td></tr>
      </table>
      <div style="margin:18px 0;padding:14px 16px;background:#F2C57C33;border-left:3px solid #D4A94B;border-radius:8px;font-size:14px;line-height:1.5">
        <b>Gut zu wissen:</b> Die Reservierung ist <b>kostenlos und unverbindlich</b>. Sobald das Buch erscheint, ${zusammen} den Kauf-Link — erst dann kommt der Kaufvertrag mit unserem Zahlungsdienstleister Affilicon zustande. <b>30 Tage Geld-zurück nach dem Kauf.</b>
      </div>
      <p style="font-size:14px;line-height:1.6;margin:14px 0">
        <b>Gutschein:</b> 35&nbsp;€ Gutschrift auf Stufe&nbsp;1 (AI Professional), wenn ${klartext} innerhalb von <b>28 Tagen</b> nach Erhalt ${besitz} Codes ${verb}. Danach gilt dauerhaft die einfache Anrechnung von 17,50&nbsp;€. Der Code kommt mit dem Kauf.
      </p>
      <p style="font-size:14px;line-height:1.6;margin:14px 0">
        Voraussichtlicher Erscheinungstermin: <b>[ERSCHEINUNGSTERMIN]</b>. ${hoeren} von uns, sobald es so weit ist.
      </p>
      <p style="margin:22px 0 0">
        <a href="${BASIS}/#test" style="display:inline-block;background:#E4572E;color:#171310;font-weight:bold;text-decoration:none;padding:13px 22px;border-radius:12px;font-size:15px">Selbsttest starten — 2 Minuten</a>
      </p>
      <p style="margin:18px 0 0;font-size:12px;color:#8D8471">
        Reservierung stornieren: <a href="${BASIS}/api/reservierung?storno=${encodeURIComponent(r.id)}" style="color:#8D8471">Klick hier</a> ·
        Fragen: <a href="mailto:kontakt@caio-institut.de" style="color:#8D8471">kontakt@caio-institut.de</a><br>
        CAIO Institut · Eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd.
      </p>
    </div>
  </div>
</body></html>`;
}

function mailBodyIntern(r) {
  // Alle Nutzerfelder laufen durch esc() — keine HTML-Injection in die interne Mail
  const e = esc;
  return `<pre style="font-family:monospace;font-size:13px">NEUE RESERVIERUNG ${e(r.id)}
Zeit:     ${e(r.zeit)}
LP:       ${e(r.lp)}   Anzeige: ${e(r.ad_message)}
Paket:    ${e(r.paket)} (${PAKETE[r.paket].label}, ${PAKETE[r.paket].preis.toFixed(2).replace('.', ',')} € inkl. MwSt.)
Name:     ${e(r.name)}
E-Mail:   ${e(r.email)}
meta_ok:  ${r.meta_ok ? 'ja (CAPI lead erlaubt)' : 'nein'}
UTM:      source=${e(r.utm_source) || '-'} medium=${e(r.utm_medium) || '-'} campaign=${e(r.utm_campaign) || '-'} content=${e(r.utm_content) || '-'}
fbclid:   ${e(r.fbclid) || '-'}   gclid: ${e(r.gclid) || '-'}
Status:   ${e(r.status)}
</pre>`;
}

// UA/IP für CAPI normalisieren (nur sinnvolle Zeichen in Payload-Werte)
function normUa(ua) {
  return String(ua || '').slice(0, 300).replace(/[^\x20-\x7E]/g, '');
}

async function sendeMail(apiKey, from, to, subject, html, replyTo) {
  if (!apiKey) return { sent: false, reason: 'ohne-key' };
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], subject, html,
        ...(replyTo ? { reply_to: replyTo } : {})
      })
    });
    return { sent: r.ok, status: r.status };
  } catch (e) {
    return { sent: false, reason: e && e.message };
  }
}

// ── Vercel-Function-Handler ──
module.exports = async function handler(req, res) {
  // GET: Storno (Link aus der Bestätigungs-Mail, Abschnitt 9) — ID strikt validiert
  if (req.method === 'GET' && req.query.storno) {
    const rawId = String(req.query.storno).trim().toLowerCase().slice(0, 40);
    if (!ID_RE.test(rawId)) {
      res.writeHead(302, { Location: '/danke/buch/?storno=unbekannt' });
      return res.end();
    }
    const raw = await storeGetResv(rawId);
    if (!raw) {
      res.writeHead(302, { Location: '/danke/buch/?storno=unbekannt' });
      return res.end();
    }
    try {
      const r = JSON.parse(raw);
      r.status = 'storniert';
      await storeSetResv(rawId, JSON.stringify(r));
    } catch (e) {}
    res.writeHead(302, { Location: '/danke/buch/?storno=1' });
    return res.end();
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { Allow: 'POST, GET' });
    return res.end();
  }

  let b = {};
  try {
    b = typeof req.body === 'object' && req.body ? req.body : JSON.parse(req.body || '{}');
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'Ungültige Anfrage.' }));
  }

  const str = (v, max) => String(v == null ? '' : v).trim().slice(0, max || 200);
  const email = str(b.email, 200);
  const name = str(b.name, 120);
  const paket = str(b.paket, 30);
  const token = str(b.formtoken, 64);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  if (!emailOk) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'Bitte prüfe die E-Mail-Adresse.' }));
  }
  if (!PAKETE[paket]) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'Bitte wähle ein Paket.' }));
  }
  if (!b.datenschutz) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'Bitte bestätige die Datenschutzerklärung.' }));
  }
  if (!str(b.altcha, 2000) || !altchaOk(str(b.altcha, 2000))) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'Bitte schließe die Anti-Spam-Prüfung ab.' }));
  }
  if (!token || !/^[0-9a-f-]{12,64}$/.test(token)) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'Sicherheitstoken fehlt — bitte Seite neu laden.' }));
  }

  // Idempotenz: gleiches Token → dieselbe Reservierung (Abschnitt 4.2, 9)
  const bekannt = await storeGetToken(token);
  if (bekannt) {
    const raw = await storeGetResv(bekannt);
    if (raw) {
      try {
        const alt = JSON.parse(raw);
        // Gleiche E-Mail reserviert erneut: Paket aktualisieren, kein zweites Lead (Abschnitt 9)
        if (alt && alt.email === email && alt.status === 'reserviert') {
          alt.paket = paket;
          alt.zeit = new Date().toISOString();
          await storeSetResv(bekannt, JSON.stringify(alt));
        }
      } catch (e) {}
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, id: bekannt, dedupe: true }));
  }

  const id = neueId();
  const eintrag = {
    id,
    zeit: new Date().toISOString(),
    lp: str(b.lp, 4) === 'b' ? 'b' : 'a',
    ad_message: str(b.ad_message, 60) || 'standard',
    paket,
    name,
    email,
    meta_ok: !!b.meta_ok,
    utm_source: str(b.utm_source, 120),
    utm_medium: str(b.utm_medium, 120),
    utm_campaign: str(b.utm_campaign, 120),
    utm_content: str(b.utm_content, 120),
    utm_term: str(b.utm_term, 120),
    fbclid: str(b.fbclid, 120),
    gclid: str(b.gclid, 120),
    landing_ts: str(b.landing_ts, 20),
    formtoken: token,
    status: 'reserviert'
  };
  await storeSetResv(id, JSON.stringify(eintrag));
  await storeSetToken(token, id);

  // Mails (Resend nur mit Key — ohne Key läuft die Reservierung trotzdem durch)
  const apiKey = process.env.RESEND_API_KEY || '';
  const sie = eintrag.lp === 'b';
  const mailKunde = await sendeMail(
    apiKey, MAIL_FROM, email,
    sie ? `Ihre Reservierung ${id}: Das CAIO-Handbuch` : `Deine Reservierung ${id}: Das CAIO-Handbuch`,
    mailBodyBestaetigung(eintrag, sie)
  );
  const mailIntern = await sendeMail(
    apiKey, MAIL_FROM, MAIL_TO,
    `Reservierung ${id} — ${PAKETE[paket].label} (${eintrag.lp.toUpperCase()}/${eintrag.ad_message})`,
    mailBodyIntern(eintrag), email
  );
  if (!mailKunde.sent) {
    console.error('[reservierung]', id, 'Bestätigung nicht gesendet:', mailKunde.reason || mailKunde.status);
  }

  // Lead an Meta (nur mit meta_ok; event_id = Reservierungs-ID; Abschnitt 6)
  const capi = await sendConversion({
    eventName: 'Lead',
    eventId: id,
    value: PAKETE[paket].preis,
    currency: 'EUR',
    email,
    clientIp: String((req.headers['x-forwarded-for'] || '')).split(',')[0].trim().slice(0, 60),
    clientUa: normUa(req.headers['user-agent']),
    fbclid: eintrag.fbclid,
    landingTs: Number(eintrag.landing_ts) || undefined,
    eventSourceUrl: BASIS + (eintrag.lp === 'b' ? '/angebot-b' : '/angebot-a'),
    customData: { lp: eintrag.lp, ad_message: eintrag.ad_message, paket },
    metaOk: eintrag.meta_ok
  });

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    ok: true,
    id,
    mail: mailKunde.sent ? 'versendet' : 'wartet-auf-mailversand',
    capi: capi.sent ? 'gesendet' : capi.reason
  }));
};

module.exports.altchaOk = altchaOk;
module.exports.PAKETE = PAKETE;
