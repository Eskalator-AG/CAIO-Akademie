"use client";

import { useRef, useState } from "react";

/** ALTCHA-Challenge (statisch, serverlos) — überall identisch. */
export const ALTCHA_CHALLENGE =
  '{"algorithm":"SHA-256","challenge":"f5a65af59cb73c0083c25f41e4ee758bf9a9ecbd0d59d32086f6195e119cffd4","salt":"3d091ff821c14aa431b5851e29f4f644","signature":"abab7ff5993b701f555fe2975467ebe5c4d865434a43349b5c168bc02e31e5ea","maxnumber":100000}';

export const ALTCHA_STRINGS =
  '{"label":"Ich bin kein Roboter","verifying":"Prüfen …","verified":"Bestätigt"}';

/** Prüft, ob das ALTCHA-Widget ein gelöstes Payload trägt. */
export function altchaSolved(widget: HTMLElement | null): boolean {
  const hidden = widget?.querySelector<HTMLInputElement>('input[type="hidden"]');
  return !!(hidden && hidden.value);
}

/** Hinweis-Element-Muster (kleiner Helfer für Formulare). */
export function useHinweis() {
  const [msg, setMsg] = useState<string | null>(null);
  return { msg, setMsg, hinweisNode: msg ? <p className="text-xs text-rose-600">{msg}</p> : null };
}

/** Formular-Feld-Stile (einheitlich). */
export const FIELD =
  "w-full min-h-[48px] px-4 rounded-xl border border-espresso/20 bg-mehl text-base";

/** Einfaches Kontaktformular (mailto → danke). */
export function KontaktForm() {
  const { msg, setMsg, hinweisNode } = useHinweis();
  const form = useRef<HTMLFormElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const f = form.current!;
    const dsgvo = f.querySelector<HTMLInputElement>("#kontakt-dsgvo");
    if (!dsgvo?.checked) return setMsg("Bitte bestätige die Datenschutzerklärung.");
    const w = f.querySelector<HTMLElement>("altcha-widget");
    if (!altchaSolved(w)) return setMsg("Bitte schließe die Anti-Spam-Prüfung ab.");
    const name = (f.querySelector('input[aria-label="Dein Name"]') as HTMLInputElement).value.trim();
    const mail = (f.querySelector('input[type=email]') as HTMLInputElement).value.trim();
    const stufe = (f.querySelector("select") as HTMLSelectElement).value;
    const nachricht = (f.querySelector("textarea") as HTMLTextAreaElement).value.trim();
    const body =
      "Name: " + name + "\nE-Mail: " + mail + "\nPriorisierte Weiterbildung: " + stufe +
      "\n\n" + nachricht + "\n\n—Gesendet über die Landingpage des CAIO Instituts";
    location.href =
      "mailto:kontakt@caio-institut.de?subject=" +
      encodeURIComponent("Anfrage CAIO Institut: " + stufe) +
      "&body=" + encodeURIComponent(body);
    setTimeout(() => (location.href = "danke/?r=kontakt"), 600);
  }

  return (
    <form ref={form} id="kontakt" className="mt-4 grid gap-3" onSubmit={submit}>
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <input required placeholder="Dein Name" aria-label="Dein Name" className={FIELD} />
        <input required type="email" placeholder="Deine E-Mail" aria-label="Deine E-Mail" className={FIELD} />
      </div>
      <label htmlFor="kontakt-stufe" className="text-sm font-semibold text-espresso/70">
        Deine priorisierte Weiterbildung
      </label>
      <select id="kontakt-stufe" className={FIELD}>
        <option>Stufe 1 · AI Professional (AIP) — Basis-Zertifikat</option>
        <option>Stufe 2 · AI Officer (AIO) — geprüfter Business Case</option>
        <option>Stufe 3 · AI Architekt (AIA) — Meisterstück-Projekt</option>
        <option>Stufe 4 · Chief AI Officer (CAIO) — Governance &amp; Portfolio</option>
        <option>Noch unsicher — Beratung zum passenden Einstieg</option>
      </select>
      <textarea
        rows={4}
        placeholder="Deine Nachricht (optional): Situation, Ziel, Fragen …"
        aria-label="Deine Nachricht"
        className="w-full px-4 py-3 rounded-xl border border-espresso/20 bg-mehl text-base"
      />
      <label className="flex items-start gap-2 text-xs text-espresso/70">
        <input type="checkbox" id="kontakt-dsgvo" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#E4572E]" />
        <span>
          Ich habe die <a className="underline underline-offset-2" href="/datenschutz">Datenschutzerklärung</a> gelesen und bin mit der Kontaktaufnahme einverstanden.
        </span>
      </label>
      <altcha-widget challengejson={ALTCHA_CHALLENGE} name="altcha-kontakt" strings={ALTCHA_STRINGS} />
      <button type="submit" className="min-h-[48px] rounded-xl bg-orange text-espresso font-head font-bold">
        Nachricht senden
      </button>
      {hinweisNode}
    </form>
  );
}

/** Bestell-/Reservierungsformular für das CAIO-Handbuch (buch + Angebots-LPs). */
export function OrderForm({ id = "bestell-form" }: { id?: string }) {
  const { msg, setMsg, hinweisNode } = useHinweis();
  const form = useRef<HTMLFormElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const f = form.current!;
    const dsgvo = f.querySelector<HTMLInputElement>("#bestell-dsgvo");
    if (!dsgvo?.checked) return setMsg("Bitte bestätige die Datenschutzerklärung.");
    const w = f.querySelector<HTMLElement>("altcha-widget");
    if (!altchaSolved(w)) return setMsg("Bitte schließe die Anti-Spam-Prüfung ab.");
    const name = (f.querySelector('input[aria-label="Dein Name"]') as HTMLInputElement).value.trim();
    const mail = (f.querySelector('input[type=email]') as HTMLInputElement).value.trim();
    const paket = (f.querySelector("select") as HTMLSelectElement).value;
    import("@/lib/track").then(({ captureUtms, trackEvent, quelleForMail, TRACKING }) => {
      trackEvent("InitiateCheckout");
      const utm = captureUtms();
      if (TRACKING.CHECKOUT_URL) {
        const url =
          TRACKING.CHECKOUT_URL +
          (TRACKING.CHECKOUT_URL.includes("?") ? "&" : "?") +
          "name=" + encodeURIComponent(name) +
          "&email=" + encodeURIComponent(mail) +
          "&paket=" + encodeURIComponent(paket) +
          Object.entries(utm).map(([k, v]) => "&" + k + "=" + encodeURIComponent(String(v))).join("");
        location.href = url;
        return;
      }
      const body =
        "Reservierung: Das CAIO-Handbuch\n\nName: " + name + "\nE-Mail: " + mail +
        "\nPaket: " + paket +
        "\n\nBitte sendet mir den Zahlungslink, sobald das Buch erscheint.\n\n" +
        quelleForMail(utm);
      location.href =
        "mailto:kontakt@caio-institut.de?subject=" +
        encodeURIComponent("Reservierung CAIO-Handbuch: " + paket) +
        "&body=" + encodeURIComponent(body);
      setTimeout(() => (location.href = "/danke/buch/"), 600);
    });
  }

  return (
    <form ref={form} id={id} className="mt-4 grid gap-3" onSubmit={submit}>
      <div className="grid sm:grid-cols-2 gap-3">
        <input required placeholder="Dein Name" aria-label="Dein Name" className={FIELD} />
        <input required type="email" placeholder="Deine E-Mail" aria-label="Deine E-Mail" className={FIELD} />
      </div>
      <label htmlFor="bestell-paket" className="text-sm font-semibold text-espresso/70">
        Dein Paket
      </label>
      <select id="bestell-paket" className={FIELD}>
        <option>Buch — 17,50 € inkl. MwSt.</option>
        <option>Buch + Hörbuch — 27,50 € inkl. MwSt.</option>
        <option>Komplett-Paket — 61,50 € inkl. MwSt.</option>
      </select>
      <label className="flex items-start gap-2 text-xs text-espresso/70">
        <input type="checkbox" id="bestell-widerruf" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#E4572E]" />
        <span>
          Ich habe die <a className="underline underline-offset-2" href="/widerruf">Widerrufsbelehrung</a> gelesen. Ich weiß, dass das Widerrufsrecht bei digitalen Inhalten mit dem Download erlischt.
        </span>
      </label>
      <label className="flex items-start gap-2 text-xs text-espresso/70">
        <input type="checkbox" id="bestell-dsgvo" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#E4572E]" />
        <span>
          Ich habe die <a className="underline underline-offset-2" href="/datenschutz">Datenschutzerklärung</a> gelesen und bin mit der Kontaktaufnahme zur Reservierung einverstanden.
        </span>
      </label>
      <button type="submit" className="min-h-[48px] rounded-xl bg-orange text-espresso font-head font-bold text-lg">
        Kostenpflichtig bestellen
      </button>
      {hinweisNode}
      <p className="text-xs text-espresso/50">
        Mit Klick auf „Kostenpflichtig bestellen“ schließen Sie einen Kaufvertrag ab. Alle
        Pflichtinformationen finden Sie in den{" "}
        <a className="underline underline-offset-2" href="/verbraucherinformationen">Verbraucherinformationen</a>.
        Die Reservierung öffnet Ihr E-Mail-Programm; bezahlt wird erst mit Lieferung per Zahlungslink.
      </p>
    </form>
  );
}

/** Projektanfrage (Direktbeauftragung): Ist/Soll/Dauer/Team. */
export function ProjectForm() {
  const { msg, setMsg, hinweisNode } = useHinweis();
  const form = useRef<HTMLFormElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const f = form.current!;
    const dsgvo = f.querySelector<HTMLInputElement>("#p-dsgvo");
    if (!dsgvo?.checked) return setMsg("Bitte bestätige die Datenschutzerklärung.");
    const w = f.querySelector<HTMLElement>("altcha-widget");
    if (!altchaSolved(w)) return setMsg("Bitte schließe die Anti-Spam-Prüfung ab.");
    const name = (f.querySelector('input[aria-label="Ihr Name"]') as HTMLInputElement).value.trim();
    const mail = (f.querySelector('input[type=email]') as HTMLInputElement).value.trim();
    const firma = (f.querySelector('input[aria-label="Unternehmen"]') as HTMLInputElement)?.value.trim() ?? "";
    const ist = (document.getElementById("p-ist") as HTMLTextAreaElement).value.trim();
    const soll = (document.getElementById("p-soll") as HTMLTextAreaElement).value.trim();
    const dauer = (document.getElementById("p-dauer") as HTMLSelectElement).value;
    const team = (document.getElementById("p-team") as HTMLSelectElement).value;
    const body =
      "Projektanfrage Direktbeauftragung\n\nName: " + name + "\nE-Mail: " + mail +
      (firma ? "\nUnternehmen: " + firma : "") +
      "\n\nIST-SITUATION:\n" + ist + "\n\nZIELBILD:\n" + soll +
      "\n\nDauer: " + dauer + "\nTeamgröße: " + team +
      "\n\n—Gesendet über die Direktbeauftragung-Seite des CAIO Instituts";
    location.href =
      "mailto:kontakt@caio-institut.de?subject=" +
      encodeURIComponent("Projektanfrage Digitalisierung/KI: " + name) +
      "&body=" + encodeURIComponent(body);
    setTimeout(() => (location.href = "/danke/?r=projekt"), 600);
  }

  return (
    <form ref={form} id="projekt-form" className="mt-4 grid gap-3" onSubmit={submit}>
      <div className="grid sm:grid-cols-2 gap-3">
        <input required placeholder="Ihr Name" aria-label="Ihr Name" className={FIELD} />
        <input required type="email" placeholder="Ihre E-Mail" aria-label="Ihre E-Mail" className={FIELD} />
      </div>
      <input placeholder="Unternehmen (optional)" aria-label="Unternehmen" className={FIELD} />
      <label htmlFor="p-ist" className="text-sm font-semibold text-espresso/70">
        Wie sieht Ihre Situation heute aus? *
      </label>
      <textarea id="p-ist" required rows={4}
        placeholder="Was läuft aktuell wie — welche Programme, Papiere, Umwege, Engstellen?"
        className="w-full px-4 py-3 rounded-xl border border-espresso/20 bg-mehl text-base" />
      <label htmlFor="p-soll" className="text-sm font-semibold text-espresso/70">
        Wie sollte es danach aussehen? *
      </label>
      <textarea id="p-soll" required rows={4}
        placeholder="Was soll am Ende anders sein — schneller, digital, messbar, vernetzt?"
        className="w-full px-4 py-3 rounded-xl border border-espresso/20 bg-mehl text-base" />
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="p-dauer" className="text-sm font-semibold text-espresso/70">
            Wie lange darf die Umsetzung dauern?
          </label>
          <select id="p-dauer" className={FIELD + " mt-1"}>
            <option>So schnell wie möglich</option>
            <option>1–3 Monate</option>
            <option>3–6 Monate</option>
            <option>6–12 Monate</option>
            <option>Zeitlich flexibel</option>
          </select>
        </div>
        <div>
          <label htmlFor="p-team" className="text-sm font-semibold text-espresso/70">
            Wie viele Personen sollen eingebunden werden?
          </label>
          <select id="p-team" className={FIELD + " mt-1"}>
            <option>1–5 Personen</option>
            <option>6–20 Personen</option>
            <option>21–50 Personen</option>
            <option>Mehr als 50 Personen</option>
            <option>Noch unklar</option>
          </select>
        </div>
      </div>
      <label className="flex items-start gap-2 text-xs text-espresso/70">
        <input type="checkbox" id="p-dsgvo" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#E4572E]" />
        <span>
          Ich habe die <a className="underline underline-offset-2" href="/datenschutz">Datenschutzerklärung</a> gelesen und bin mit der Kontaktaufnahme zur Projektanfrage einverstanden.
        </span>
      </label>
      <altcha-widget challengejson={ALTCHA_CHALLENGE} name="altcha-projekt" strings={ALTCHA_STRINGS} />
      <button type="submit" className="min-h-[48px] rounded-xl bg-orange text-espresso font-head font-bold text-lg">
        Projektanfrage senden
      </button>
      {hinweisNode}
      <p className="text-xs text-espresso/50">
        Beim Senden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Anfrage an
        kontakt@caio-institut.de. Kostenfrei, unverbindlich — und Sie behalten die Kontrolle:
        Nichts passiert ohne Ihr Go.
      </p>
    </form>
  );
}
