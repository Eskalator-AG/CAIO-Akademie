/**
 * CAIO-Institut Ad-Tracking & Reservierung (Briefing v3, 21.11.2026)
 *
 * - UTM/fbclid werden NUR im Speicher gehalten (kein localStorage ohne Einwilligung).
 * - Reservierung per fetch POST /api/reservierung (kein mailto, kein localStorage).
 * - Meta-Browser-Pixel nur mit Marketing-Einwilligung; META_PIXEL_ID oben setzen.
 * - lp/ad_message kommen aus window.CAIO_MM (assets/message-match.js).
 */
(function () {
  'use strict';

  var CONFIG = {
    // Meta-Pixel-ID — leer = Pixel inaktiv (Abschnitt 11, Dennis)
    META_PIXEL_ID: ''
  };

  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

  // ── UTM: nur im Speicher (Abschnitt 4.3) ──
  var utm = (function () {
    var state = {};
    try {
      var q = new URLSearchParams(location.search);
      KEYS.forEach(function (k) {
        var v = q.get(k);
        if (v) state[k] = v.slice(0, 200);
      });
    } catch (e) {}
    return state;
  })();

  function marketingOk() {
    try {
      var c = JSON.parse(localStorage.getItem('caio-consent-v1') || 'null');
      return !!(c && c.marketing);
    } catch (e) { return false; }
  }

  // ── Meta-Browser-Pixel (nur mit Einwilligung; inaktiv ohne META_PIXEL_ID) ──
  if (CONFIG.META_PIXEL_ID && marketingOk() && !window.fbq) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    fbq('init', CONFIG.META_PIXEL_ID);
    fbq('track', 'PageView');
  }

  function track(evt, params, eventId) {
    if (!(CONFIG.META_PIXEL_ID && window.fbq && marketingOk())) return;
    try {
      var opts = eventId ? { eventID: eventId } : undefined;
      if (params) fbq('track', evt, params, opts); else fbq('track', evt, {}, opts);
    } catch (e) {}
  }

  // ── InitiateCheckout: Paketwechsel oder erstes Formularfeld-Fokus (Abschnitt 6) ──
  var icGefeuert = false;
  function fireInitiateCheckout() {
    if (icGefeuert) return;
    icGefeuert = true;
    track('InitiateCheckout', { content_name: 'caio-handbuch' });
  }

  var form = document.getElementById('bestell-form');
  if (!form) return;

  // Paket-Vorwahl ?paket=hoerbuch|komplett (Abschnitt 5.1) — nur bekannte Werte
  try {
    var p = new URLSearchParams(location.search).get('paket');
    var mapPaket = { hoerbuch: 'buch_hoerbuch', komplett: 'komplett', buch: 'buch' };
    if (p && mapPaket[p]) {
      var r = form.querySelector('input[name="paket"][value="' + mapPaket[p] + '"]');
      if (r) r.checked = true;
    }
  } catch (e) {}

  form.addEventListener('change', function (e) {
    if (e.target && e.target.name === 'paket') fireInitiateCheckout();
  });
  form.addEventListener('focusin', function () { fireInitiateCheckout(); }, { once: false });

  // Formular-Token (Idempotenz, Abschnitt 4.2) — kryptografisch starke Zufälle
  var tokenInput = form.querySelector('input[name="formtoken"]');
  if (tokenInput && !tokenInput.value) {
    try {
      if (crypto.randomUUID) tokenInput.value = crypto.randomUUID();
      else {
        var bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        tokenInput.value = Array.from(bytes).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
      }
    } catch (e) {
      tokenInput.value = 't' + Date.now(); // letzte Notfall-Stufe, Server dedupliziert zusätzlich
    }
  }

  // Nach Sprung auf #bestellen: Fokus auf Namensfeld (Abschnitt 5.1)
  document.querySelectorAll('a[href="#bestellen"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var name = form.querySelector('input[type="text"], input:not([type=radio]):not([type=checkbox]):not([type=hidden]):not([type=email])');
      setTimeout(function () {
        if (name) try { name.focus({ preventScroll: true }); } catch (e) {}
      }, 450);
    });
  });

  // ── Submit: fetch POST /api/reservierung (Abschnitt 4.3) ──
  var hinweis = document.getElementById('bestell-hinweis');
  var button = form.querySelector('button[type="submit"]');
  var buttonText = button ? button.innerHTML : '';

  function zeigeFehler(msg) {
    if (hinweis) { hinweis.textContent = msg; hinweis.classList.remove('hidden'); }
    if (button) { button.disabled = false; button.innerHTML = buttonText; }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (hinweis) hinweis.classList.add('hidden');

    var dsgvo = document.getElementById('bestell-dsgvo');
    if (!dsgvo || !dsgvo.checked) return zeigeFehler('Bitte bestätige die Datenschutzerklärung.');

    var nameEl = form.querySelector('input[aria-label="Dein Name"]') || form.querySelector('input[aria-label="Ihr Name"]');
    var mailEl = form.querySelector('input[type=email]');
    var paketEl = form.querySelector('input[name="paket"]:checked');
    var metaOk = document.getElementById('bestell-meta');
    var w = form.querySelector('altcha-widget');
    var altchaHidden = w && w.querySelector('input[type=hidden]');
    if (!altchaHidden || !altchaHidden.value) return zeigeFehler('Bitte schließe die Anti-Spam-Prüfung ab.');

    var payload = {
      name: (nameEl && nameEl.value || '').trim().slice(0, 120),
      email: (mailEl && mailEl.value || '').trim().slice(0, 200),
      paket: paketEl ? paketEl.value : 'buch',
      datenschutz: dsgvo.checked,
      meta_ok: !!(metaOk && metaOk.checked),
      altcha: (altchaHidden.value || '').slice(0, 2000),
      formtoken: (tokenInput && tokenInput.value || ''),
      lp: (window.CAIO_MM && window.CAIO_MM.lp) || (document.body.getAttribute('data-lp') || ''),
      ad_message: (window.CAIO_MM && window.CAIO_MM.key) || 'standard',
      landing_ts: Date.now(),
      utm_source: utm.utm_source || '',
      utm_medium: utm.utm_medium || '',
      utm_campaign: utm.utm_campaign || '',
      utm_content: utm.utm_content || '',
      utm_term: utm.utm_term || '',
      fbclid: utm.fbclid || '',
      gclid: utm.gclid || ''
    };

    if (button) { button.disabled = true; button.textContent = 'Wird gesendet …'; }

    fetch('/api/reservierung', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().then(function (j) { return { ok: r.ok, j: j }; });
    }).then(function (res) {
      if (!res.ok || !res.j.ok) {
        return zeigeFehler((res.j && res.j.error) || 'Das hat leider nicht geklappt. Bitte versuch es erneut oder schreib an kontakt@caio-institut.de.');
      }
      // Server sendet Lead (event_id = Reservierungs-ID). Browser-Pixel dedupliziert:
      if (window.fbq && CONFIG.META_PIXEL_ID && marketingOk() && res.j.id) {
        track('Lead', { content_name: 'caio-handbuch', value: 17.5, currency: 'EUR' }, res.j.id);
      }
      location.href = '/danke/buch/?r=' + encodeURIComponent(res.j.id) +
        (payload.lp ? '&lp=' + encodeURIComponent(payload.lp) : '');
    }).catch(function () {
      zeigeFehler('Netzwerkfehler — bitte prüfe deine Verbindung und versuch es erneut.');
    });
  });
})();
