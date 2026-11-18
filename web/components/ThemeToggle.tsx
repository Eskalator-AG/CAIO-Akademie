"use client";

import { useEffect, useState } from "react";

/**
 * Hell/Dunkel-Umschalter. Persistenz in localStorage ("caio-theme"),
 * Standard: Hell. Läuft ohne Flash (Inline-Vorskript im Layout).
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("caio-theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next ? "#0F1218" : "#FAF6EF");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"}
      title={dark ? "Heller Modus" : "Dunkler Modus"}
      className="inline-flex items-center justify-center min-w-[36px] min-h-[36px] p-2 rounded-lg cursor-pointer"
    >
      {/* Mond (im hellen Modus sichtbar) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ display: dark ? "none" : "inline" }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* Sonne (im dunklen Modus sichtbar) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ display: dark ? "inline" : "none" }}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </button>
  );
}
