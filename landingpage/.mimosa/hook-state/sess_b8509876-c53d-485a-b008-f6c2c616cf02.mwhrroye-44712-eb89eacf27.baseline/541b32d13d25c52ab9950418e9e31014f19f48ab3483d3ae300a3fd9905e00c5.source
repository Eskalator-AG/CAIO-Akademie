/**
 * CAIO Institut — Theme Switcher (Hell ↔ Dunkel)
 * Speichert Pr\u00e4ferenz in localStorage. Standard: Hell.
 */
(function() {
  'use strict';
  
  var KEY = 'caio-theme';
  
  function getTheme() {
    try { return localStorage.getItem(KEY) || 'light'; } catch(e) { return 'light'; }
  }
  
  function setTheme(mode) {
    try { localStorage.setItem(KEY, mode); } catch(e) {}
    apply(mode);
  }
  
  function apply(mode) {
    var root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Button-Icon aktualisieren
    updateButton(mode);
    // Meta theme-color
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', mode === 'dark' ? '#0F1218' : '#FAF6EF');
    }
  }
  
  function toggle() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }
  
  function updateButton(mode) {
    var btns = document.querySelectorAll('.theme-toggle');
    btns.forEach(function(btn) {
      var sun = btn.querySelector('.icon-sun');
      var moon = btn.querySelector('.icon-moon');
      if (!sun || !moon) return;
      if (mode === 'dark') {
        sun.style.display = 'inline';
        moon.style.display = 'none';
        btn.setAttribute('aria-label', 'Zum hellen Modus wechseln');
        btn.title = 'Heller Modus';
      } else {
        sun.style.display = 'none';
        moon.style.display = 'inline';
        btn.setAttribute('aria-label', 'Zum dunklen Modus wechseln');
        btn.title = 'Dunkler Modus';
      }
    });
  }
  
  // \u00d6ffentliche API
  window.ThemeToggle = { toggle: toggle, getTheme: getTheme, setTheme: setTheme };
  
  // Beim Laden anwenden (vor Paint, um Flash zu vermeiden)
  var saved = getTheme();
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  }
  
  // Nach DOM-Ready Button-Icons setzen
  function init() { apply(getTheme()); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
