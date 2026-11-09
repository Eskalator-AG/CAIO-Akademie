/**
 * CAIO Institut — Ad-Tracking für Angebots-Landingpages (/angebot-a, /angebot-b)
 *
 * Zentraler Konfigurationspunkt. Beim Aktivieren des Meta-Pixels hier NUR
 * META_PIXEL_ID setzen und die consent.js-Einbindung in den LP-Headern
 * einkommentieren (Pixel feuert erst nach Marketing-Einwilligung).
 *
 * Für Affilicon: CHECKOUT_URL setzen — dann leitet der Bestell-Button
 * dorthin weiter (mit UTM-Parametern) statt ein E-Mail-Programm zu öffnen.
 */
(function () {
  'use strict';

  var CONFIG = {
    // Z.B. 'https://caio-institut.affilicon.de/...' — leer = Reservierung per E-Mail
    CHECKOUT_URL: '',
    // Meta-Pixel-ID — leer = Pixel inaktiv
    META_PIXEL_ID: ''
  };

  // ── 1. UTM + Click-IDs erfassen und persistieren ──
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];
  function captureUtms() {
    try {
      var q = new URLSearchParams(location.search);
      var stored = JSON.parse(localStorage.getItem('caio-utm') || '{}');
      var changed = false;
      KEYS.forEach(function (k) {
        var v = q.get(k);
        if (v) { stored[k] = v; changed = true; }
      });
      if (!stored.ts) { stored.ts = new Date().toISOString(); changed = true; }
      // Landingpage-Pfad merken (welche Variante konvertiert?)
      if (!stored.lp) { stored.lp = location.pathname; changed = true; }
      if (changed) localStorage.setItem('caio-utm', JSON.stringify(stored));
      return stored;
    } catch (e) { return {}; }
  }
  var utm = captureUtms();

  // ── 2. Marketing-Einwilligung (aus consent.js: Kategorie 'marketing') ──
  function marketingOk() {
    try {
      var c = JSON.parse(localStorage.getItem('caio-consent') || 'null');
      return !!(c && c.marketing);
    } catch (e) { return false; }
  }

  // ── 3. Meta-Pixel-Stomp (inaktiv bis META_PIXEL_ID gesetzt) ──
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

  function track(evt) {
    if (CONFIG.META_PIXEL_ID && window.fbq && marketingOk()) {
      try { fbq('track', evt); } catch (e) {}
    }
  }

  // ── 4. Bestell-Formular übernehmen (auf beiden Angebots-LPs identisch) ──
  var form = document.getElementById('bestell-form');
  if (!form) return;

  // Klick auf Bestell-Button = InitiateCheckout (vor Validierung ok)
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var hinweis = document.getElementById('bestell-hinweis');
    var dsgvo = document.getElementById('bestell-dsgvo');
    if (!dsgvo.checked) {
      hinweis.textContent = 'Bitte bestätige die Datenschutzerklärung.';
      hinweis.classList.remove('hidden');
      return;
    }

    track('InitiateCheckout');

    var name = form.querySelector('input[aria-label="Dein Name"]').value.trim();
    var mail = form.querySelector('input[type=email]').value.trim();
    var paket = document.getElementById('bestell-paket').value;

    // Affilicon-Checkout (sobald eingerichtet): UTM-Parameter durchreichen
    if (CONFIG.CHECKOUT_URL) {
      var url = CONFIG.CHECKOUT_URL
        + (CONFIG.CHECKOUT_URL.indexOf('?') === -1 ? '?' : '&')
        + 'name=' + encodeURIComponent(name)
        + '&email=' + encodeURIComponent(mail)
        + '&paket=' + encodeURIComponent(paket);
      Object.keys(utm).forEach(function (k) { url += '&' + k + '=' + encodeURIComponent(utm[k]); });
      location.href = url;
      return;
    }

    // Reservierung per E-Mail (bis Affilicon live ist)
    var quelle = 'Quelle: ' + (utm.utm_source || 'direkt')
      + (utm.utm_campaign ? ' / Kampagne: ' + utm.utm_campaign : '')
      + (utm.utm_content ? ' / Variante: ' + utm.utm_content : '')
      + (utm.fbclid ? ' / fbclid: ja' : '')
      + ' / LP: ' + (utm.lp || location.pathname);
    var body = 'Reservierung: Das CAIO-Handbuch\n\nName: ' + name
      + '\nE-Mail: ' + mail + '\nPaket: ' + paket
      + '\n\nBitte sendet mir den Zahlungslink, sobald das Buch erscheint.'
      + '\n\n' + quelle;
    location.href = 'mailto:kontakt@caio-institut.de?subject='
      + encodeURIComponent('Reservierung CAIO-Handbuch: ' + paket)
      + '&body=' + encodeURIComponent(body);
    setTimeout(function () { location.href = 'danke/buch/'; }, 600);
  });
})();
