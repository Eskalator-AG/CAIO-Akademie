(function () {
  'use strict';
  var MESSAGES = window.CAIO_MESSAGES || {};
  function resolve(map, ad, utm) {
    var clean = function (s) { return String(s).trim().toLowerCase().slice(0, 200); };
    var has = function (k) { return Object.prototype.hasOwnProperty.call(map, k); };
    if (ad && has(clean(ad))) return clean(ad);
    if (utm) {
      var segs = clean(utm).split(/[_\-\s]+/);
      for (var i = 0; i < segs.length; i++) if (segs[i] && has(segs[i])) return segs[i];
    }
    return null;
  }
  var lp = document.body.getAttribute('data-lp');
  var map = MESSAGES[lp] || {};
  var q = new URLSearchParams(location.search);
  var key = resolve(map, q.get('ad'), q.get('utm_content'));
  window.CAIO_MM = { lp: lp, key: key || 'standard' };
  if (!key) return;
  var m = map[key];
  var h1 = document.querySelector('[data-mm="h1"]');
  var sub = document.querySelector('[data-mm="sub"]');
  if (h1) {
    h1.textContent = '';
    h1.appendChild(document.createTextNode(m.h1Pre));
    var em = document.createElement('span');
    em.className = 'text-orange';   // bestehende Hervorhebungsklasse der Seite
    em.textContent = m.h1Em;
    h1.appendChild(em);
    h1.appendChild(document.createTextNode(m.h1Post || ''));
  }
  if (sub) sub.textContent = m.sub;
})();
