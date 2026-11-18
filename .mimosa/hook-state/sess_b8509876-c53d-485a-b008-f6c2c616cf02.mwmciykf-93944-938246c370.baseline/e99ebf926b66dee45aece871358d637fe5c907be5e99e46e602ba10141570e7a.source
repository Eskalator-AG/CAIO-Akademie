"use client";

import { useState } from "react";
import { ALTCHA_CHALLENGE, ALTCHA_STRINGS, altchaSolved } from "./Forms";

const QUIZ: { q: string; o: [string, number][] }[] = [
  { q: "Gibt es eine Aufgabe, die du mit KI schon besser machst?", o: [["Nein, noch nicht.", 0], ["Ich habe es ausprobiert.", 1], ["Ich nutze KI regelmäßig.", 2], ["Ich habe einen Prozess damit verbessert.", 3]] },
  { q: "Ein Anbieter zeigt dir ein KI-Demo-Dashboard. Was schaust du als Erstes?", o: [["Das Design.", 0], ["Die Funktionen.", 1], ["Die Datenquellen.", 2], ["Was passiert, wenn die Daten fehlen oder falsch sind.", 3]] },
  { q: "Ein KI-Projekt startet in deinem Unternehmen. Was willst du zuerst wissen?", o: [["Cool – wann geht es los?", 0], ["Was kostet es?", 1], ["Wer haftet, wenn es schiefgeht?", 2], ["Was bringt es – messbar, ab wann?", 3]] },
  { q: "Ein Kollege lädt Kundendaten in ein kostenloses KI-Tool. Deine Reaktion?", o: [["Keine. Macht er eben.", 0], ["Ich hoffe, das geht gut.", 1], ["Ich sage ihm, dass er das lassen soll.", 2], ["Ich kenne die Regeln und stoße es richtig an.", 3]] },
  { q: "Wofür soll KI in deinem Unternehmen sorgen?", o: [["Das entscheidet die IT.", 0], ["Für Effizienz, glaube ich.", 1], ["Für ein klar benanntes Ziel.", 2], ["Für Wachstum – ich kann die Hebel benennen.", 3]] },
];

const BANDS: { max: number; cls: string; titel: string; text: string; kurse: string[] }[] = [
  { max: 5, cls: "bg-sand/60", titel: "KI-Entdecker 🌱", text: "Du bist neugierig. Das ist der beste Startpunkt. Stufe 1 bereitet dein Fundament vor – in über 32 Stunden. Bis zu 90 % Förderung für viele möglich.", kurse: ["AI Professional (AIP)"] },
  { max: 10, cls: "bg-licht/30", titel: "Versteckter Navigator 🧭", text: "Du denkst schon weiter als viele. Dir fehlt das Urteil in Struktur. Stufe 2 macht aus deinem Blick ein Bewertungsinstrument.", kurse: ["AI Officer (AIO)", "AI Architekt (AIA)"] },
  { max: 15, cls: "bg-gold/50", titel: "Versteckter CAIO 👑", text: "Du machst die Arbeit bereits. Es fehlen nur der Name und der Nachweis. Sprich mit uns – wir verkürzen den Weg.", kurse: ["AI Officer (AIO) — verkürzt", "AI Architekt (AIA) — verkürzt"] },
];

/** Selbsttest: 5 Fragen, animierter Balken (transform), Ergebnis + Empfehlungsformular. */
export default function Selbsttest() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  const band = BANDS.find((b) => score <= b.max) ?? BANDS[BANDS.length - 1];

  function answer(punkte: number) {
    const s = score + punkte;
    const n = step + 1;
    setScore(s);
    if (n >= QUIZ.length) setDone(true);
    else setStep(n);
  }

  function submitErgebnis(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!(f.querySelector("#ergebnis-dsgvo") as HTMLInputElement)?.checked)
      return setHint("Bitte bestätige die Datenschutzerklärung.");
    if (!altchaSolved(f.querySelector("altcha-widget")))
      return setHint("Bitte schließe die Anti-Spam-Prüfung ab.");
    const name = (f.querySelector('input[aria-label="Dein Name"]') as HTMLInputElement).value.trim();
    const mail = (f.querySelector('input[type=email]') as HTMLInputElement).value.trim();
    const body =
      "Selbsttest-Ergebnis: " + band.titel + " (" + score + "/15 Punkte)\n" +
      "Empfohlene Stufe(n): " + band.kurse.join(", ") +
      "\n\nName: " + name + "\nE-Mail: " + mail +
      "\n\nBitte kontaktet mich zum Ergebnis.\n\n—Gesendet über den Selbsttest des CAIO Instituts";
    location.href =
      "mailto:kontakt@caio-institut.de?subject=" +
      encodeURIComponent("Selbsttest-Ergebnis: " + band.titel) +
      "&body=" + encodeURIComponent(body);
    setTimeout(() => (location.href = "/danke/?r=selbsttest"), 600);
  }

  return (
    <div className="mt-6 bg-white rounded-2xl shadow-card p-6">
      {/* Fortschrittsbalken (transform-basiert, GPU-freundlich) */}
      <div className="h-1.5 rounded-full bg-espresso/10 overflow-hidden">
        <div
          className="h-full w-full bg-orange origin-left transition-transform duration-200"
          style={{ transform: "scaleX(" + (done ? 1 : step / QUIZ.length) + ")" }}
        />
      </div>

      {!done ? (
        <div id="quiz" className="mt-5">
          <p className="font-head font-bold text-lg">
            {step + 1}/{QUIZ.length} · {QUIZ[step].q}
          </p>
          <div className="mt-4 grid gap-2">
            {QUIZ[step].o.map(([label, punkte]) => (
              <button
                key={label}
                type="button"
                onClick={() => answer(punkte)}
                className="text-left min-h-[48px] px-4 py-2 rounded-xl border border-espresso/15 bg-mehl hover:border-orange transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div id="result" className="mt-5 grid gap-3">
          <p id="rtitle" className="font-head font-bold text-lg">
            Dein Ergebnis: {score} von 15 Punkten
          </p>
          <span
            id="badge"
            className={"inline-block px-4 py-1.5 rounded-full font-head font-bold text-sm self-start " + band.cls}
          >
            {band.titel}
          </span>
          <p id="rtext" className="text-[15px] text-espresso/85">{band.text}</p>
          <p id="rkurs" className="text-[15px] text-espresso/85">
            Sehr wahrscheinlich für dich passend:{" "}
            {band.kurse.map((k, i) => (
              <span key={k}>
                {i > 0 && " und "}<strong>{k}</strong>
              </span>
            ))}
          </p>
          <form className="mt-2 grid gap-3" onSubmit={submitErgebnis}>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Dein Name" aria-label="Dein Name" className="w-full min-h-[48px] px-4 rounded-xl border border-espresso/20 bg-mehl text-base" />
              <input required type="email" placeholder="Deine E-Mail" aria-label="Deine E-Mail" className="w-full min-h-[48px] px-4 rounded-xl border border-espresso/20 bg-mehl text-base" />
            </div>
            <label className="flex items-start gap-2 text-xs text-espresso/70">
              <input type="checkbox" id="ergebnis-dsgvo" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#E4572E]" />
              <span>
                Ich habe die <a className="underline underline-offset-2" href="/datenschutz">Datenschutzerklärung</a> gelesen und willige in den Erhalt von Institut-Infos ein. Jederzeit abbestellbar.{" "}
                <a className="underline underline-offset-2" href="/widerruf">Widerrufsbelehrung</a>
              </span>
            </label>
            <altcha-widget challengejson={ALTCHA_CHALLENGE} name="altcha-ergebnis" strings={ALTCHA_STRINGS} />
            <button type="submit" className="min-h-[48px] rounded-xl bg-orange text-espresso font-head font-bold">
              Ergebnis an mich &amp; Beratung anfordern
            </button>
            {hint && <p className="text-xs text-rose-600">{hint}</p>}
          </form>
        </div>
      )}
    </div>
  );
}
