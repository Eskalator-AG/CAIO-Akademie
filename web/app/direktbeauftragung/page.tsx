import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AiBubble from "@/components/AiBubble";
import { ProjectForm } from "@/components/Forms";

export const metadata: Metadata = {
    title: "Direktbeauftragung – Digitalisierung &amp; KI-Projekte umsetzen",
    description: "Digitalisierung und KI-Integration als Projekt: Roadmap, innerbetriebliche Digitalisierung, Pflichtschulung nach EU AI Act, CRM, Plattformen, Datensilos vernetzen. Direkt beauftragen — Ist, Ziel, Dauer, Team.",
};

export default function Page() {
  return (
    <PageLayout ort="Direktbeauftragung" home={false} adStyle={false} minimal={false} altcha={true}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.caio-institut.de/"}, {"@type": "ListItem", "position": 2, "name": "Direktbeauftragung", "item": "https://www.caio-institut.de/direktbeauftragung"}]} }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "Service", "name": "Digitalisierungs- und KI-Umsetzungsprojekte (Direktbeauftragung)", "serviceType": "Digitalisierung, KI-Integration, EU-AI-Act-Pflichtschulung, CRM- und Plattformprojekte", "provider": {"@id": "https://www.caio-institut.de/#org"}, "areaServed": [{"@type": "Country", "name": "Deutschland"}, {"@type": "Country", "name": "Schweiz"}, {"@type": "Country", "name": "Irland"}], "description": "Umsetzungsprojekte rund um smarte Digitalisierung und KI-Integration: Roadmap-Entwurf, innerbetriebliche Digitalisierung, Art.-4-Pflichtschulung, Projektmanagementsysteme, CRM, eigene Plattformen und Kunden-Integration, Vernetzung bestehender Datensilos und verteilter Softwaresysteme.", "hasOfferCatalog": {"@type": "OfferCatalog", "name": "Typische Projektbausteine", "itemListElement": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Digitalisierungs- und KI-Roadmap (Entwurf)"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Innerbetriebliche Digitalisierung"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pflichtschulung nach EU AI Act Art. 4"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Projektmanagementsysteme einrichten"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CRM-Systeme ausw\u00e4hlen und integrieren"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Eigene Plattformen und Kunden-Integration"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Datensilos und verteilte Softwaresysteme vernetzen"}}]}} }}
      />
      <>


{/* HERO */}
<header className="max-w-[1120px] mx-auto px-5 md:px-8 pt-12 pb-8 md:pt-16">
  <p className="font-head font-medium text-licht text-sm tracking-widest uppercase">Direktbeauftragung · Umsetzung</p>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,44px)] leading-tight mt-3 max-w-[24ch]">Sie beschreiben Ist und Ziel. Wir setzen das Projekt um.</h1>
  <p className="mt-4 text-base text-espresso/85 max-w-[76ch]">Das CAIO Institut ist nicht nur Bildungsanbieter: Wir setzen Digitalisierungs- und KI-Projekte direkt um — von der Roadmap über die Art.-4-Pflichtschulung bis zur Integration von CRM, Plattformen und bislang getrennten Systemen. Sie schildern in der Anfrage, wie Ihre Situation heute aussieht, wie sie sein sollte, wie lange die Umsetzung dauern darf und wie viele Personen eingebunden werden.</p>
  <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
    <a href="#anfrage" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold text-lg shadow-card">Projektanfrage stellen — 5 Minuten</a>
    <span className="text-xs text-espresso/60">Kostenfrei &amp; unverbindlich · Ansprechpartner für Deutschland: WissensReich Academy</span>
  </div>
</header>

{/* WIEDERERKENNUNG: IST-SPIEGELUNG */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Erkennen Sie sich wieder?</h2>
  <div className="mt-6 grid gap-3 sm:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-5 text-[15px] text-espresso/85">Die eine Excel-Datei, die nur eine Person versteht — und niemand wagt es, sie anzufassen.</div>
    <div className="bg-white rounded-2xl shadow-card p-5 text-[15px] text-espresso/85">Drei Systeme, dieselben Kunden dreimal eingepflegt — und niemand weiß, welcher Stand gerade gilt.</div>
    <div className="bg-white rounded-2xl shadow-card p-5 text-[15px] text-espresso/85">Der Monatsbericht, der jeden Monat von Hand entsteht — zehn Stunden Arbeit, null Erkenntnisgewinn.</div>
    <div className="bg-white rounded-2xl shadow-card p-5 text-[15px] text-espresso/85">Der Beratungsauftrag, der in 80 Folien endete — und in Ihrem Betrieb passierte: nichts.</div>
  </div>
  <p className="mt-5 text-[15px] text-espresso/85 max-w-[76ch]"><b className="text-ofen">Das ist kein Kompetenzproblem. Das ist ein Umsetzungsproblem.</b> Und Umsetzung ist genau das, was wir tun — jeden Tag, in eigenen Systemen und in Projekten bei Kunden.</p>
</section>

{/* LEISTUNGSBAUSTEINE */}
<section id="bausteine" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Was wir umsetzen — typische Bausteine</h2>
  <p className="mt-2 max-w-[76ch] text-[15px] text-espresso/85">Kein Baustein hier ist Theorie: Jeder wurde schon gefahren — bei uns selbst oder in Kundenprojekten. Ihr Projekt kann daraus bestehen, davon abweichen oder mehr vereinen.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Digitalisierungs- &amp; KI-Roadmap</p>
      <p className="mt-2 text-[15px] text-espresso/85">Der Entwurf Ihrer Ziellinie: Nutzenfälle priorisiert, messbar gemacht, in eine Reihenfolge gebracht — mit Business Case je Schritt statt Wunschdenken.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Innerbetriebliche Digitalisierung</p>
      <p className="mt-2 text-[15px] text-espresso/85">Abläufe, die heute auf Papier, E-Mail und Ablagen leben, bekommen einen digitalen Fluss: Aufnahmen, Freigaben, Übergaben, Nachweise.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">KI-Integration in bestehende Prozesse</p>
      <p className="mt-2 text-[15px] text-espresso/85">KI dort, wo sie messbar hilft — eingebaut in Ihren Ablauf, nicht daneben. Mit Vorher-Nachher-Messung und klaren Abnahmekriterien.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Benutzer- &amp; Pflichtschulung nach EU AI Act</p>
      <p className="mt-2 text-[15px] text-espresso/85">Artikel 4 verlangt KI-Kompetenz in der Belegschaft — wir schulen Ihre Menschen und machen die Erfüllung nachweisbar (Dokumentation inklusive).</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Projektmanagementsysteme</p>
      <p className="mt-2 text-[15px] text-espresso/85">Ein innerbetriebliches System für Aufgaben, Boards und Berichte — eingerichtet, an Ihre Abläufe angepasst und vom Team angenommen.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">CRM-Systeme</p>
      <p className="mt-2 text-[15px] text-espresso/85">Auswahl, Einrichtung und Integration in Vertrieb und Service — so, dass Ihr Team das System tatsächlich benutzt und die Daten sauber bleiben.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Eigene Plattformen &amp; Kunden-Integration</p>
      <p className="mt-2 text-[15px] text-espresso/85">Kundenportal, Login, Bestell- oder Servicebereich — Ihre eigene Plattform, verbunden mit den Prozessen dahinter.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Datensilos &amp; verteilte Systeme vernetzen</p>
      <p className="mt-2 text-[15px] text-espresso/85">Programme, die nebeneinander statt miteinander arbeiten, bekommen Schnittstellen und einen gemeinsamen Datenfluss — ein Stand statt fünf.</p>
    </div>
  </div>
  <p className="mt-4 text-[15px] text-espresso/70 max-w-[76ch]">Darüber hinaus: Automatisierung wiederkehrender Abläufe, Berichte und Dokumente, Kennzahlen-Reporting und KI-gestützte Entwürfe für Texte, Angebote und Auswertungen — immer in Ihrem Prozess, immer messbar.</p>
</section>

{/* EIGENBAU-BEWEISE */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Beweis statt Versprechen: selbst gebaut, im laufenden Betrieb</h2>
  <p className="mt-2 max-w-[76ch] text-[15px] text-espresso/85">Bevor wir in Ihrem Unternehmen umsetzen, haben wir es bei uns selbst getan. Vier Systeme aus dem eigenen Haus — alle im täglichen Einsatz:</p>
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-5">
      <p className="font-head font-bold text-ofen">Deal Maker CRM</p>
      <p className="mt-2 text-[15px] text-espresso/85">Das CRM des Verbunds: Kundenbeziehungen, Pipeline und Unternehmensbewertung in einem System — gebaut für den daily use, nicht für die Schublade.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-5">
      <p className="font-head font-bold text-ofen">Zuschussradar</p>
      <p className="mt-2 text-[15px] text-espresso/85">Fördermittlung neu gedacht — der „Fördermitteltinder": Vorhaben rein, passende Förderprogramme gematcht. Damit kein Zuschuss mehr unentdeckt bleibt.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-5">
      <p className="font-head font-bold text-ofen">Interne Projektmanagement-Plattform</p>
      <p className="mt-2 text-[15px] text-espresso/85">Die Koordination rund um Dozenten und Unternehmensberater: Termine, Einsatzplanung und Nachweise — ein System statt vier Tabellen.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-5">
      <p className="font-head font-bold text-ofen">Das CAIO Institut selbst</p>
      <p className="mt-2 text-[15px] text-espresso/85">Die Plattform, auf der Sie gerade sind, ist Eigenbau: Lernpfade, Selbsttest und Anfrage-Systeme — selbst entwickelt, selbst betrieben.</p>
    </div>
  </div>
  <p className="mt-4 text-[15px] text-espresso/70 max-w-[76ch]">Dazu kommen zahlreiche <b>Individualentwicklungen für spezialisierte Kunden und anspruchsvolle Dienstleister</b> — vom internen Werkzeug bis zur Kundenschnittstelle. Wir zeigen sie gern im Erstgespräch, live.</p>
</section>

{/* POSITIONIERUNG: AUSBILDUNG + SOURCING */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <div className="bg-ofen rounded-2xl p-6 md:p-8 text-mehl">
    <h2 className="font-head font-bold text-mehl text-[clamp(22px,4vw,32px)]">Ein Anbieter mit zwei Hebeln: umsetzen und ausbilden</h2>
    <p className="mt-3 text-[15px] leading-relaxed">Die meisten Berater schreiben Konzepte — und lassen die Umsetzung bei Ihnen hängen. Wir bauen selbst: CRM, Förder-Tools, Projektmanagement, diese Plattform. Dieselbe Kraft setzen wir in Ihrem Projekt ein: Das CAIO Institut ist eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd. (verankert in Deutschland, der Schweiz und Irland). Wir bilden täglich Fachkräfte in vier Stufen aus — und können für Ihr Projekt daher ideale Kandidaten benennen und einbinden: Menschen, die Beweis-Leiter, KI-Richtlinien und messbare Umsetzung aus der Ausbildung kennen.</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <p className="text-[15px]"><b>Umsetzung aus einem Haus:</b> Konzept, Build, Schulung und Nachweis bei einem Ansprechpartner.</p>
      <p className="text-[15px]"><b>Personal von der eigenen Ausbildung:</b> auf Wunsch mit geprüften Kandidaten aus unseren Stufen.</p>
    </div>
  </div>
</section>

{/* ABLAUF */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">So läuft die Direktbeauftragung ab</h2>
  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-orange text-2xl">1</p>
      <p className="mt-1 font-semibold">Sie schildern</p>
      <p className="mt-1 text-sm text-espresso/70">Ist-Zustand, Zielbild, Dauer, Teamgröße — im Formular unten, in fünf Minuten.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-orange text-2xl">2</p>
      <p className="mt-1 font-semibold">Wir melden uns</p>
      <p className="mt-1 text-sm text-espresso/70">Rückfragen oder ein Erstgespräch — kostenfrei und unverbindlich.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-orange text-2xl">3</p>
      <p className="mt-1 font-semibold">Konzept &amp; Plan</p>
      <p className="mt-1 text-sm text-espresso/70">Vorgehen, Meilensteine und Aufwand — zum Entscheiden, nicht zum Bewundern.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-orange text-2xl">4</p>
      <p className="mt-1 font-semibold">Umsetzung</p>
      <p className="mt-1 text-sm text-espresso/70">Mit messbaren Zwischenschritten und Schulung Ihrer Menschen an der eigenen Lösung.</p>
    </div>
  </div>
</section>

{/* ANFRAGE-FORMULAR */}
<section id="anfrage" className="max-w-[760px] mx-auto px-5 md:px-8 py-10">
  <div className="bg-white rounded-2xl shadow-card p-5">
    <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Projektanfrage — Ihr Projekt, in Ihren Worten</h2>
    <p className="mt-1 text-sm text-espresso/70">Kostenfrei und unverbindlich. Je konkreter Ist und Ziel, desto präziser unsere Rückmeldung.</p>
    <ProjectForm />
  </div>
</section>

{/* FAQ */}
<section className="max-w-[760px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Häufige Fragen zur Direktbeauftragung</h2>
  <div className="mt-6 grid gap-3">
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Was kostet ein Umsetzungsprojekt?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Das hängt von Ist-Zustand, Zielbild, Dauer und Teamgröße ab — genau die vier Angaben, die Sie im Anfrageformular machen. Daraus entsteht ein konkreter Vorschlag mit Aufwand und Meilensteinen; Sie entscheiden dann, ob und in welcher Form Sie beauftragen.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Arbeiten Sie mit unseren bestehenden Systemen?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja. Ziel ist Integration, nicht Neuanschaffung: Wir vernetzen, was da ist — und schlagen nur dort Neues vor, wo das Bestehende ein Ziel blockiert.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wie steht die Pflichtschulung im Zusammenhang mit der Ausbildung?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Die Art.-4-Schulung erfüllt die gesetzliche Pflicht (KI-Kompetenz in der Belegschaft) mit Nachweis. Wer danach weitermachen will, kann in die Stufen ausbilden — beides aus einem Haus, aufeinander aufgebaut.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wo arbeiten Sie?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Die Initiative ist in Deutschland, der Schweiz und Irland verankert; Ihr Ansprechpartner für Deutschland ist die WissensReich Academy in Köln.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Können Kandidaten aus Ihrer Ausbildung ins Projekt einsteigen?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja — auf Wunsch benennen wir passende Kandidaten aus unseren Stufen, die dieselben Methoden (Beweis-Leiter, KI-Richtlinie, messbare Umsetzung) mitbringen und in Ihr Projekt eingebunden werden.</p>
    </details>
  </div>
</section>

{/* FINAL CTA */}
<section className="max-w-[760px] mx-auto px-5 md:px-8 pb-10">
  <div className="bg-orange rounded-2xl p-5 text-center text-espresso">
    <h2 className="font-head font-bold text-espresso text-[clamp(22px,4vw,32px)]">Ihr Projekt beginnt mit fünf Minuten.</h2>
    <p className="mt-2 text-[15px] text-espresso/85">Situation schildern, Ziel nennen, Dauer und Team angeben — wir melden uns mit einem konkreten Vorschlag.</p>
    <a href="#anfrage" className="mt-4 inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-espresso text-mehl font-head font-bold text-lg">Jetzt Projektanfrage stellen</a>
    <p className="mt-3 text-xs text-espresso/70">Kostenfrei &amp; unverbindlich · kontakt@caio-institut.de</p>
  </div>
</section>

{/* FOOTER */}
      <AiBubble />

      </>
    </PageLayout>
  );
}
