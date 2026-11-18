import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";


export const metadata: Metadata = {
    title: "Buch reserviert",
    description: "Deine Buchreservierung ist notiert. Dein Guthaben: 14 € — voll anrechenbar auf Stufe 1 (AI Professional).",
};

export default function Page() {
  return (
    <PageLayout ort="Danke" home={false} adStyle={false} minimal={true} altcha={false}>
      <>

  <div className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange/15 ring-1 ring-orange/40">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-orange" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
  </div>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,42px)] mt-6">Reservierung notiert!</h1>
  <p className="mt-3 max-w-[46ch] mx-auto">Du kannst diese Bestellung innerhalb von 14 Tagen widerrufen. Die <a href="/widerruf" style={{color: '#F2C57C', textDecoration: 'underline'}}>Widerrufsbelehrung</a> findest du hier.
    Deine E-Mail ist vorbereitet — absenden genügt. Sobald das Buch erscheint, erhältst du den Zahlungslink und deine Ausgabe als Erste.</p>

  {/* BUCH-GUTSCHRIFT: Der nächste Schritt (Stufe 1 mit 14 € Gutschrift) */}
  <div className="mt-8 bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl text-left">
    <p className="text-xs font-semibold uppercase tracking-widest text-sand">Dein Vorteil als Buch-Käufer</p>
    <p className="font-head font-bold text-xl mt-2">Dein Funnel-Vorteil: 35&nbsp;€ — doppelte Anrechnung auf Stufe 1.</p>
    <p className="mt-2 text-[15px] text-mehl/85">Als Buch-Käufer bekommst du deine <strong>17,50&nbsp;€ doppelt gutgeschrieben</strong> — als <strong>35-€-Gutschein für Stufe 1 · AI Professional (AIP)</strong>: über 32 Stunden Fundament, Art.-4-konform, mit Basis-Zertifikat, förderfähig mit 30–100&nbsp;% Zuschuss. <strong>Dazu: ein 1:1-KI-Consulting-Call (ca. 45 Minuten), frei buchbar während deiner Betreuung.</strong></p>
    <div className="mt-4 bg-mehl/10 border border-sand/40 rounded-xl px-4 py-3 text-sm">
      <p><strong className="text-sand">Dein Gutschein:</strong> Code <strong>CAIO35</strong> — 35&nbsp;€ auf Stufe 1.</p>
      <p className="mt-1 text-mehl/70">Gültig <strong>14 Tage</strong> nach Erhalt deines persönlichen Codes mit der Buchauslieferung. Danach greift automatisch die einfache Anrechnung (17,50&nbsp;€) — ohne Zeitlimit, auch später einlösbar.</p>
    </div>
    <div className="mt-5 flex flex-col sm:flex-row gap-3">
      <a href="/#stufen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold">Stufe 1 mit 35&nbsp;€-Gutschein ansehen</a>
      <a href="/#test" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-mehl underline underline-offset-4">Erst Selbsttest — 2 Minuten</a>
    </div>
    <p className="mt-3 text-xs text-mehl/60">Gutscheincode bei der Stufen-Buchung eingeben (Affilicon-Checkout) oder kurz erwähnen — wir rechnen ab. Förderfähigkeit klären wir im Erstgespräch.</p>
  </div>

  <div className="mt-8 grid gap-3 text-left">
    <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
      <span className="font-head font-bold text-orange">1</span>
      <p className="text-[15px]">E-Mail im Programm absenden — damit ist deine Reservierung verbindlich.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
      <span className="font-head font-bold text-orange">2</span>
      <p className="text-[15px]">Du erhältst den Zahlungslink, sobald die deutsche Ausgabe erscheint — erst dann wird bezahlt.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
      <span className="font-head font-bold text-orange">3</span>
      <p className="text-[15px]">Lies los, baue deine ersten Beweise — „Fundament bereiten" ist deine Phase. Der 35-€-Gutschein bringt dich danach in die Betreuung von Stufe 1.</p>
    </div>
  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
    <a href="/" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold shadow-card">Zurück zur Startseite</a>
    <a href="/berufsbild" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-ofen underline underline-offset-4">Berufsbild CAIO lesen</a>
  </div>

      </>
    </PageLayout>
  );
}
