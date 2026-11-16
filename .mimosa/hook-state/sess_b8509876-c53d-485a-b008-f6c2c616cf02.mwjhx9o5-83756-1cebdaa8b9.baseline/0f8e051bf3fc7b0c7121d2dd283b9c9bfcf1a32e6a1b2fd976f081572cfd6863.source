/**
 * CAIO Institut — Consent-Management-System
 * DSGVO-konform: Kein Tracking ohne Einwilligung.
 * Blockiert externe Dienste, bis Einwilligung erteilt wird.
 * 
 * API für zukünftige Dienste:
 *   ConsentManager.on('analytics', function() { /* Analytics-Code *​/ });
 *   ConsentManager.on('marketing', function() { /* Pixel-Code *​/ });
 */
(function() {
  'use strict';

  var STORAGE_KEY = 'caio-consent-v1';
  var STORAGE_EXPLICIT_KEY = 'caio-consent-explicit-v1';

  // Verfügbare Kategorien
  var CATEGORIES = {
    essential: {
      label: 'Notwendig',
      description: 'Für den Betrieb der Seite erforderlich. Kann nicht abgewählt werden.',
      required: true,
      // Enthält: Tailwind CSS (Stylesheet), ALTCHA (Spamschutz), lokale Fonts
    },
    analytics: {
      label: 'Statistik',
      description: 'Hilft uns zu verstehen, wie Besucher die Seite nutzen. Alle Daten werden anonymisiert.',
      required: false,
      // Zukünftig: Google Analytics, Plausible, etc.
    },
    marketing: {
      label: 'Marketing',
      description: 'Wird verwendet, um Ihnen relevante Inhalte anzuzeigen. Diese Dienste können Ihr Nutzungsverhalten auf anderen Websites verfolgen.',
      required: false,
      // Zukünftig: Meta Pixel, Google Ads, etc.
    }
  };

  // Gespeicherte Einwilligung lesen
  function getConsent() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    return null;
  }

  // Prüfe ob bereits explizit entschieden wurde
  function hasExplicitConsent() {
    try {
      return localStorage.getItem(STORAGE_EXPLICIT_KEY) === 'true';
    } catch(e) {}
    return false;
  }

  // Einwilligung speichern
  function setConsent(prefs, explicit) {
    var consent = {
      essential: true, // Immer aktiv
      analytics: !!prefs.analytics,
      marketing: !!prefs.marketing,
      timestamp: new Date().toISOString(),
      version: '1'
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      if (explicit) {
        localStorage.setItem(STORAGE_EXPLICIT_KEY, 'true');
      }
    } catch(e) {}
    executeCallbacks(consent);
    return consent;
  }

  // Callback-Registry für Dienst-Integration
  var callbacks = {};
  function on(category, fn) {
    if (!callbacks[category]) callbacks[category] = [];
    callbacks[category].push(fn);
    // Sofort ausführen, wenn bereits eingewilligt
    var c = getConsent();
    if (c && c[category]) fn();
  }

  function executeCallbacks(consent) {
    Object.keys(callbacks).forEach(function(cat) {
      if (consent[cat]) {
        callbacks[cat].forEach(function(fn) {
          try { fn(); } catch(e) { console.error('Consent callback error:', e); }
        });
      }
    });
  }

  // Do Not Track respektieren
  function respectsDNT() {
    return navigator.doNotTrack === '1' || 
           window.doNotTrack === '1' || 
           navigator.msDoNotTrack === '1';
  }

  // ═══════════════════════════════════════════════
  // UI: Banner + Einstellungs-Dialog
  // ═══════════════════════════════════════════════

  var banner, dialog, backdrop;

  function createBanner() {
    if (banner) return;

    banner = document.createElement('div');
    banner.id = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-label', 'Datenschutz-Einstellungen');
    banner.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:9999',
      'background:#171310', 'color:#FAF6EF',
      'padding:16px 20px', 'font-family:Inter,-apple-system,Arial,sans-serif',
      'font-size:14px', 'line-height:1.5',
      'box-shadow:0 -4px 20px rgba(0,0,0,.3)',
      'transform:translateY(100%)', 'transition:transform .3s ease',
      ''  // Leerer Eintrag für sauberes Joining
    ].join(';');

    banner.innerHTML = [
      '<div style="max-width:1120px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:12px;">',
      '  <div style="flex:1;min-width:260px;">',
      '    <p style="margin:0 0 4px;font-weight:600;font-family:\'Space Grotesk\',Arial,sans-serif;">Datenschutz bei CAIO Institut</p>',
      '    <p style="margin:0;font-size:13px;opacity:.85;">',
      '      Wir setzen <strong>keine Tracking-Cookies</strong>. Schriften werden lokal geladen.',
      '      Optionale Dienste (Statistik/Marketing) werden erst nach Ihrer Einwilligung geladen.',
      '      <a href="https://wissensreich.academy/datenschutz" target="_blank" rel="noopener noreferrer" style="color:#F2C57C;text-decoration:underline;">Datenschutzerklärung</a>',
      '    </p>',
      '  </div>',
      '  <div style="display:flex;gap:8px;flex-shrink:0;">',
      '    <button id="consent-reject" style="min-height:44px;padding:0 16px;border:1px solid rgba(250,246,239,.4);background:transparent;color:#FAF6EF;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;">Nur notwendige</button>',
      '    <button id="consent-settings" style="min-height:44px;padding:0 16px;border:1px solid rgba(250,246,239,.4);background:transparent;color:#FAF6EF;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;">Einstellungen</button>',
      '    <button id="consent-accept" style="min-height:44px;padding:0 20px;border:none;background:#E4572E;color:#171310;border-radius:8px;font-size:13px;cursor:pointer;font-weight:700;font-family:\'Space Grotesk\',Arial,sans-serif;">Alle akzeptieren</button>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(banner);

    // Animiert einblenden
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        banner.style.transform = 'translateY(0)';
      });
    });

    // Buttons verbinden
    banner.querySelector('#consent-accept').addEventListener('click', function() {
      setConsent({ analytics: true, marketing: true }, true);
      hideBanner();
    });

    banner.querySelector('#consent-reject').addEventListener('click', function() {
      setConsent({ analytics: false, marketing: false }, true);
      hideBanner();
    });

    banner.querySelector('#consent-settings').addEventListener('click', function() {
      showSettingsDialog();
    });
  }

  function hideBanner() {
    if (!banner) return;
    banner.style.transform = 'translateY(100%)';
    setTimeout(function() {
      if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
      banner = null;
    }, 300);
  }

  function showSettingsDialog() {
    if (dialog) return;

    backdrop = document.createElement('div');
    backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(23,19,16,.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';

    dialog = document.createElement('div');
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-label', 'Datenschutz-Einstellungen');
    dialog.style.cssText = [
      'background:#FAF6EF', 'color:#171310', 'border-radius:16px',
      'max-width:560px', 'width:100%', 'max-height:85vh', 'overflow-y:auto',
      'padding:28px', 'font-family:Inter,Arial,sans-serif', 'font-size:14px'
    ].join(';');

    var currentConsent = getConsent() || { analytics: false, marketing: false };

    var categoriesHtml = Object.keys(CATEGORIES).map(function(key) {
      var cat = CATEGORIES[key];
      var checked = key === 'essential' ? true : (currentConsent[key] || false);
      var disabled = cat.required ? 'disabled' : '';
      return [
        '<div style="display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid rgba(23,19,16,.1);">',
        '  <input type="checkbox" id="consent-cat-' + key + '" ' + (checked ? 'checked' : '') + ' ' + disabled + ' style="width:20px;height:20px;margin-top:2px;accent-color:#E4572E;cursor:' + (cat.required ? 'default' : 'pointer') + ';">',
        '  <div style="flex:1;">',
        '    <label for="consent-cat-' + key + '" style="font-weight:600;font-size:15px;cursor:pointer;">' + cat.label + (cat.required ? ' <span style="font-size:11px;opacity:.6;">(immer aktiv)</span>' : '') + '</label>',
        '    <p style="margin:4px 0 0;font-size:13px;color:rgba(23,19,16,.7);">' + cat.description + '</p>',
        '  </div>',
        '</div>'
      ].join('');
    }).join('');

    dialog.innerHTML = [
      '<h2 style="font-family:\'Space Grotesk\',Arial,sans-serif;font-size:20px;margin:0 0 8px;color:#16425B;">Datenschutz-Einstellungen</h2>',
      '<p style="margin:0 0 16px;font-size:13px;color:rgba(23,19,16,.7);">W\u00e4hlen Sie, welche Dienste wir nutzen d\u00fcrfen. Ihre Auswahl wird gespeichert und kann jederzeit \u00fcber den Button unten links ge\u00e4ndert werden.</p>',
      categoriesHtml,
      '<div style="display:flex;gap:10px;margin-top:20px;">',
      '  <button id="consent-save" style="flex:1;min-height:44px;background:#E4572E;color:#171310;border:none;border-radius:8px;font-size:14px;cursor:pointer;font-weight:700;font-family:\'Space Grotesk\',Arial,sans-serif;">Auswahl speichern</button>',
      '  <button id="consent-close" style="min-height:44px;padding:0 16px;border:1px solid rgba(23,19,16,.2);background:transparent;color:#171310;border-radius:8px;font-size:14px;cursor:pointer;font-family:inherit;">Abbrechen</button>',
      '</div>'
    ].join('');

    backdrop.appendChild(dialog);
    document.body.appendChild(backdrop);

    dialog.querySelector('#consent-save').addEventListener('click', function() {
      var prefs = {
        analytics: dialog.querySelector('#consent-cat-analytics').checked,
        marketing: dialog.querySelector('#consent-cat-marketing').checked
      };
      setConsent(prefs, true);
      closeDialog();
      hideBanner();
    });

    dialog.querySelector('#consent-close').addEventListener('click', closeDialog);
    backdrop.addEventListener('click', function(e) {
      if (e.target === backdrop) closeDialog();
    });

    // ESC schlie\u00dft Dialog
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeDialog();
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  function closeDialog() {
    if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    backdrop = null;
    dialog = null;
  }

  // ═══════════════════════════════════════════════
  // Initialisierung
  // ═══════════════════════════════════════════════

  function init() {
    var existing = getConsent();
    var explicit = hasExplicitConsent();

    if (explicit && existing) {
      // Bereits entschieden: Callbacks ausf\u00fchren, kein Banner
      executeCallbacks(existing);
    } else if (respectsDNT()) {
      // Do Not Track: Standardm\u00e4ssig ablehnen, kein Banner
      setConsent({ analytics: false, marketing: false }, false);
    } else {
      // Noch keine Entscheidung: Banner zeigen nach kurzer Verz\u00f6gerung
      setTimeout(function() {
        if (!hasExplicitConsent()) {
          createBanner();
        }
      }, 1200);
    }

    // Callbacks f\u00fcr bereits gespeicherte Einwilligungen ausf\u00fchren
    if (existing) {
      executeCallbacks(existing);
    }
  }

  // \u00d6ffentliche API
  window.ConsentManager = {
    on: on,
    getConsent: getConsent,
    setConsent: setConsent,
    showSettings: showSettingsDialog,
    hasExplicitConsent: hasExplicitConsent
  };

  // Bei DOM-Ready initialisieren
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
