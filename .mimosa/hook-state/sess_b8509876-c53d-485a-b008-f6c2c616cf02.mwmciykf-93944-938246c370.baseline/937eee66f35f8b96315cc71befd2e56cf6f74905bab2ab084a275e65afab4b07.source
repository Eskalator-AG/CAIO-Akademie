import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";


export const metadata: Metadata = {
    title: "Danke",
    description: "Danke für dein Interesse am CAIO Institut.",
};

export default function Page() {
  return (
    <PageLayout ort="Danke" home={false} adStyle={false} minimal={true} altcha={false}>
      <>

  <figure className="mb-8 overflow-hidden rounded-2xl shadow-card">
    <picture><source type="image/webp" srcSet="../assets/img-opt/hero-danke-800.webp 800w, ../assets/img-opt/hero-danke.webp 1600w" sizes="100vw" /><img src="/img-opt/hero-danke.webp" alt="Händedruck vor einem Laptop — Danke für deine Nachricht" className="w-full aspect-[16/7] object-cover" width="1600" height="700" fetchPriority="high" decoding="async" /></picture>
  </figure>
  <div className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange/15 ring-1 ring-orange/40">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-orange" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
  </div>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,42px)] mt-6">Danke!</h1>
  <p id="danke-text" className="mt-3 max-w-[46ch] mx-auto">Danke für dein Interesse am CAIO Institut.</p>

  <div id="danke-ergebnis" className="hidden mt-8 bg-white rounded-2xl shadow-card p-6 md:p-8 text-left">
    <p className="text-xs font-semibold uppercase tracking-widest text-espresso/50">Dein Ergebnis noch einmal</p>
    <p id="danke-badge" className="inline-block mt-3 px-4 py-1.5 rounded-full font-head font-bold text-sm"></p>
    <p id="danke-kurs" className="mt-3 text-[15px]"></p>
  </div>

    <div className="mt-8 bg-white rounded-2xl shadow-card border-l-4 border-sand p-6 text-left">
    <p className="font-head font-bold text-ofen text-lg">Tipp: Der Einstieg für 14&nbsp;€</p>
    <p className="mt-1 text-[15px]">„Das CAIO-Playbook" (Arbeitstitel) — 41 Kapitel, 12 Anhänge, 10 Arbeitsbücher: der Beweis-Fahrplan zur CAIO-Rolle. Reserviere zum Einführungspreis, zahle erst mit Erscheinen.</p>
    <a href="/buch" className="mt-4 inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold">Das Buch ansehen →</a>
  </div>

  <div className="mt-8 grid gap-3 text-left">
    <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
      <span className="font-head font-bold text-orange">1</span>
      <p className="text-[15px]">Schau dir deine <a className="underline underline-offset-2 text-ofen" href="/#stufen">passende Stufe im Detail</a> an.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
      <span className="font-head font-bold text-orange">2</span>
      <p className="text-[15px]">Lies das <a className="underline underline-offset-2 text-ofen" href="/berufsbild">Berufsbild CAIO</a> — Aufgaben, Zahlen, Gehalt.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
      <span className="font-head font-bold text-orange">3</span>
      <p className="text-[15px]">Fragen offen? Schreib uns: <a className="underline underline-offset-2 text-ofen" href="mailto:kontakt@caio-institut.de">kontakt@caio-institut.de</a></p>
    </div>
  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
    <a href="/" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold shadow-card">Zurück zur Startseite</a>
    <a href="/glossar" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-ofen underline underline-offset-4">Ins Glossar</a>
  </div>

  <p className="mt-8 text-xs text-espresso/50">Hinweis: Deine Eingaben bleiben in deinem Browser. Der eventuelle E-Mail-Versand läuft über dein eigenes E-Mail-Programm.</p>

      </>
    </PageLayout>
  );
}
