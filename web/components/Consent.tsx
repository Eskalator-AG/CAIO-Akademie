"use client";

import { useEffect, useState } from "react";

/**
 * Consent-Management: Banner, Einstellungs-Dialog und Trigger-Button.
 * Speichert { essential, analytics, marketing } unter "caio-consent-v1",
 * Explizit-Marker unter "caio-consent-explicit-v1". Kein Tracking aktiv —
 * Einwilligungen wirken erst mit Aktivierung entsprechender Dienste.
 */
export default function Consent() {
  const [banner, setBanner] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    try {
      const explicit =
        localStorage.getItem("caio-consent-explicit-v1") === "true";
      setBanner(!explicit);
      setTrigger(explicit);
      const stored = JSON.parse(localStorage.getItem("caio-consent-v1") || "null");
      if (stored) setPrefs({ analytics: !!stored.analytics, marketing: !!stored.marketing });
    } catch {}
  }, []);

  function save(next: { analytics: boolean; marketing: boolean }) {
    const consent = {
      essential: true,
      analytics: !!next.analytics,
      marketing: !!next.marketing,
      timestamp: new Date().toISOString(),
      version: "1",
    };
    try {
      localStorage.setItem("caio-consent-v1", JSON.stringify(consent));
      localStorage.setItem("caio-consent-explicit-v1", "true");
    } catch {}
    setBanner(false);
    setDialog(false);
    setTrigger(true);
  }

  const btn =
    "min-h-[44px] px-4 rounded-xl font-head font-bold text-sm cursor-pointer border";

  return (
    <>
      {/* Banner */}
      {banner && !dialog && (
        <div
          id="consent-banner"
          role="dialog"
          aria-label="Datenschutz-Einstellungen"
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
        >
          <div className="max-w-[1120px] mx-auto bg-[#171310] text-[#FAF6EF] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-card">
            <p className="text-xs leading-relaxed flex-1">
              Wir nutzen keine Cookies und kein Tracking. Optionale
              Marketing-Messung (z. B. Meta-Pixel) läuft nur mit Ihrer
              Einwilligung. Details:{" "}
              <a href="/datenschutz" className="underline underline-offset-2">
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                className={`${btn} border-[#FAF6EF]/30 text-[#FAF6EF] bg-transparent`}
                onClick={() => setDialog(true)}
              >
                Einstellungen
              </button>
              <button
                className={`${btn} border-[#E4572E] bg-[#E4572E] text-[#171310]`}
                onClick={() => save({ analytics: false, marketing: false })}
              >
                Nur notwendige
              </button>
              <button
                className={`${btn} border-[#E4572E] bg-[#E4572E] text-[#171310]`}
                onClick={() => save({ analytics: true, marketing: true })}
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Einstellungs-Dialog */}
      {dialog && (
        <div className="fixed inset-0 z-[10000] bg-[rgba(23,19,16,.6)] flex items-center justify-center p-5">
          <div
            role="dialog"
            aria-label="Datenschutz-Einstellungen im Detail"
            className="bg-[#171310] text-[#FAF6EF] rounded-2xl p-7 max-w-md w-full"
          >
            <h2 className="font-head font-bold text-lg">
              Ihre Datenschutz-Einstellungen
            </h2>
            <p className="mt-2 text-xs opacity-80">
              Speicherung erfolgt lokal in Ihrem Browser; Sie können die Wahl
              jederzeit über den „Datenschutz"-Button ändern.
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked disabled className="mt-1 accent-[#E4572E]" />
                <span>
                  <b>Notwendig</b> — immer aktiv (Seitenfunktion, Speicherung
                  Ihrer Auswahl).
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                  }
                  className="mt-1 accent-[#E4572E]"
                />
                <span>
                  <b>Statistik</b> — anonyme Reichweitenmessung (derzeit kein
                  Dienst aktiv).
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                  }
                  className="mt-1 accent-[#E4572E]"
                />
                <span>
                  <b>Marketing</b> — Erfolgsmessung unserer Anzeigen
                  (Meta-Pixel, erst nach Aktivierung wirksam).
                </span>
              </label>
            </div>
            <div className="mt-5 flex gap-2">
              <button
                className={`${btn} border-[#FAF6EF]/30 text-[#FAF6EF] bg-transparent`}
                onClick={() => setDialog(false)}
              >
                Abbrechen
              </button>
              <button
                className={`${btn} border-[#E4572E] bg-[#E4572E] text-[#171310] flex-1`}
                onClick={() => save(prefs)}
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger (nach Entscheidung sichtbar) */}
      {trigger && (
        <button
          id="consent-trigger"
          aria-label="Datenschutz-Einstellungen ändern"
          onClick={() => setDialog(true)}
          className="fixed bottom-4 left-4 z-[9500] bg-[#171310] text-[#FAF6EF] border-none rounded-lg px-3.5 py-2 text-xs cursor-pointer font-[Inter,Arial,sans-serif]"
        >
          Datenschutz
        </button>
      )}
    </>
  );
}
