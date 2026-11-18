import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AiBubble from "@/components/AiBubble";

export const metadata: Metadata = {
    title: "Chief AI Officer (CAIO) – Berufsbild: Aufgaben, Gehalt, Chancen",
    description: "Was ein CAIO tut: 6 Handlungsfelder, Pro & Contra, Studienzahlen und Gehaltsspannen (90–500 T€) – jede Angabe mit Quelle. Mit Weg zur Rolle in 4 Stufen.",
};

export default function Page() {
  return (
    <PageLayout ort="Berufsbild" home={false} adStyle={false} minimal={false} altcha={false}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "CAIO Institut", "item": "https://www.caio-institut.de/"}, {"@type": "ListItem", "position": 2, "name": "Berufsbild CAIO", "item": "https://www.caio-institut.de/berufsbild"}]} }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "Occupation", "name": "Chief AI Officer (CAIO)", "description": "Der Chief AI Officer verankert K\u00fcnstliche Intelligenz im Unternehmen: Er plant die KI-Strategie, priorisiert Use Cases, steuert Dienstleister, wacht \u00fcber EU AI Act und DSGVO und macht KI-Einsatz in Umsatz, Kosten und Risiko messbar.", "estimatedSalary": {"@type": "MonetaryAmountDistribution", "minValue": 90000, "maxValue": 130000, "currency": "EUR", "unitText": "YEAR"}, "occupationLocation": {"@type": "Country", "name": "Deutschland"}, "skills": "KI-Strategie, EU AI Act (Art. 4), DSGVO, Business Cases, Dienstleistersteuerung, Ver\u00e4nderungsmanagement, Kennzahlen", "relevantOccupation": [{"@type": "Occupation", "name": "Chief Information Officer (CIO)"}, {"@type": "Occupation", "name": "Head of AI"}]} }}
      />
      <>


{/* HERO */}
<header id="top" data-ort="Berufsbild" className="max-w-[1120px] mx-auto px-5 pt-12 pb-8 md:px-8 md:pt-16">
  <p className="font-head font-medium text-licht text-sm tracking-widest uppercase">Berufsbild</p>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,44px)] leading-tight mt-3 max-w-[24ch]">
    Chief AI Officer: die Rolle, die Unternehmen gerade neu erfinden.
  </h1>
  <p className="mt-4 max-w-[72ch]">Diese Seite bündelt, was die Rolle ausmacht: sechs Handlungsfelder, die ehrliche Pro-&-Contra-Debatte, Zahlen aus Studien und Gehaltsspannen. Jede Angabe mit Quelle.</p>
  <div className="mt-7 flex flex-col sm:flex-row gap-3">
    <a href="/#test" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold text-lg shadow-card">
      Selbsttest starten
    </a>
    <a href="/" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-ofen underline underline-offset-4">
      Zurück zur Übersicht
    </a>
  </div>
  <figure className="mt-8 overflow-hidden rounded-2xl shadow-card">
    <picture><source type="image/webp" srcSet="assets/img-opt/hero-berufsbild-800.webp 800w, assets/img-opt/hero-berufsbild.webp 1600w" sizes="100vw" /><img src="/img-opt/hero-berufsbild.webp" alt="Erfahrene Führungskraft mit Tablet im modernen Büro — der CAIO zwischen Strategie und Technologie" className="w-full aspect-[16/7] object-cover" width="1600" height="700" fetchPriority="high" decoding="async" /></picture>
  </figure>
</header>

{/* DIE ROLLE IN EINEM SATZ */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-8">
  <div className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-6 md:p-8">
    <p className="font-story italic text-xl md:text-2xl leading-snug text-ofen">
      „Der CAIO ist der Architekt der KI im Unternehmen. Er plant, steuert, prüft und nimmt ab. Er mauert nicht."
    </p>
    <p className="mt-3 text-sm text-espresso/60">Das Leitbild des CAIO Instituts — der Architekt übersetzt den Auftrag in einen Plan und trägt die Verantwortung fürs Ganze.</p>
  </div>
</section>

{/* HANDLUNGSFELDER */}
<section id="handlungsfelder" data-ort="Handlungsfelder" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Sechs Handlungsfelder</h2>
  <p className="mt-3 max-w-[75ch]">Sie entsprechen den sechs Dimensionen unserer Kompetenzmatrix. Kienbaum beschreibt die Rolle ähnlich: „visionärer Leader und technischer Experte in Personalunion".</p>
  <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">1 · Strategie &amp; Wirtschaftlichkeit</p>
      <p className="mt-2 text-[15px]">Er entwickelt die KI-Strategie und die Roadmap — im Dienst der Unternehmensvision. Er identifiziert, wo KI Mehrwert schafft und Effizienzpotenziale hebt. Er priorisiert das Portfolio nach Nutzen, Aufwand und Risiko.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">2 · Technologie &amp; Daten</p>
      <p className="mt-2 text-[15px]">Er bewertet KI-Technologien und Lösungen. Er erkennt, wo betriebliche Automatisierung Zeit und Fehler spart. Er prüft Machbarkeit und Datenqualität und entscheidet über Bauen oder Kaufen.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">3 · Sicherheit, Recht &amp; Ethik</p>
      <p className="mt-2 text-[15px]">Er setzt Rahmen für Datenschutz, Bias-Vermeidung und Transparenz. Er ordnet Anwendungen in die Risikoklassen des EU AI Act ein, wahrt die Daten-Souveränität und behält die Haftung im Blick.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">4 · Integration &amp; Konnektivität</p>
      <p className="mt-2 text-[15px]">Er verhindert Insellösungen und orchestriert Schnittstellen zwischen Bestandssystemen und KI-Diensten. Er steuert externe Dienstleister — klare Anforderungen, klare Abnahme. So fließen Daten und Systeme arbeiten zusammen.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">5 · Customer Excellence</p>
      <p className="mt-2 text-[15px]">Er prüft jeden Einsatz am Kundennutzen. Er gestaltet KI-Erlebnisse, die Kunden annehmen. Er macht Kundenzufriedenheit zur Kennzahl — nicht zum Nebeneffekt.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">6 · Menschen, Führung &amp; Change</p>
      <p className="mt-2 text-[15px]">Er leitet KI-Teams und fördert abteilungsübergreifende Zusammenarbeit. Er befähigt, schult und nimmt Widerstände ernst. Er macht KI-Kompetenz zur normalen Arbeitsroutine.</p>
    </div>
  </div>
</section>

{/* PRO & CONTRA */}
<section id="pro-contra" data-ort="Pro &amp; Contra" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Die ehrliche Debatte: Pro &amp; Contra</h2>
  <p className="mt-3 max-w-[75ch]">Kienbaum führt die Argumente beider Seiten (Februar 2025). Wir verheimlichen keine Seite. Wer die Rolle besetzen will, muss beide kennen.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-emerald-500">
      <p className="font-head font-bold text-ofen text-lg">Pro — dafür spricht</p>
      <ul className="mt-3 space-y-2 text-[15px] list-disc pl-5">
        <li>Zentrale Koordination verhindert Insellösungen und Doppelarbeit.</li>
        <li>Systematische Steuerung steigert Effizienz der KI-Initiativen.</li>
        <li>Innovation wird gefördert statt dem Zufall überlassen.</li>
        <li>Governance minimiert Risiken — besonders relevant seit dem EU AI Act.</li>
      </ul>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-rose-500">
      <p className="font-head font-bold text-ofen text-lg">Contra — dagegen spricht</p>
      <ul className="mt-3 space-y-2 text-[15px] list-disc pl-5">
        <li>Die Abgrenzung zu bestehenden Rollen in Data und IT ist oft unklar.</li>
        <li>KI ist bereichsübergreifend — manche Unternehmen bevorzugen dezentrale Zuständigkeit.</li>
        <li>Die Technologie entwickelt sich schneller, als eine Einzelperson folgen kann.</li>
        <li>Viele Unternehmen stecken noch im Experimentierstadium — der Mehrwert einer C-Level-Rolle ist dann unbewiesen.</li>
      </ul>
    </div>
  </div>
  <div className="mt-4 bg-licht/10 border border-licht/30 rounded-2xl p-6">
    <p className="font-head font-bold text-ofen">Unsere Antwort auf die Debatte</p>
    <p className="mt-2 text-[15px]">Beides ist richtig — für Konzerne. Im Mittelstand entsteht die Rolle ohnehin: dezentral, ohne Titel, getragen von Leuten wie René. Unsere Antwort ist deshalb keine C-Level-Diskussion, sondern eine gestufte Befähigung. Jede Stufe endet mit einem Nachweis. Ob daraus am Ende ein Titel wird, entscheidet das Unternehmen.</p>
  </div>
</section>

{/* ZAHLEN */}
<section id="zahlen" data-ort="Zahlen" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Zahlen mit Quelle</h2>
  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-2xl text-orange">89 %</p>
      <p className="mt-1 text-[15px]">der deutschen Unternehmen ab 500 Beschäftigten halten KI für die wichtigste Zukunftstechnologie. <span className="text-espresso/60">(Bitkom, September 2024)</span></p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-2xl text-orange">85 %</p>
      <p className="mt-1 text-[15px]">der Führungskräfte stufen KI als geschäftskritisch ein. <span className="text-espresso/60">(Kienbaum, Februar 2025)</span></p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-2xl text-orange">seit 02/2025</p>
      <p className="mt-1 text-[15px]">verlangt der EU AI Act (Art. 4) KI-Kompetenz der Belegschaft. Die Pflicht steht im Gesetz. <span className="text-espresso/60">(EU AI Act)</span></p>
    </div>
  </div>
  <p className="mt-4 text-[15px] text-espresso/80 max-w-[80ch]">Kienbaum nennt zudem Praxisbeispiele: 20–30 % Produktionseffizienz durch dediziertes KI-Management, −40 % Entwicklungszeit bei BASF-Materialien, −45 % Ausschussraten in der Qualitätskontrolle, 60 % weniger Compliance-Verstöße durch KI-Governance.</p>
</section>

{/* GEHALT */}
<section id="gehalt" data-ort="Gehalt" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Was die Rolle wert ist</h2>
  <div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
    <p className="text-[15px] max-w-[80ch]">Öffentliche Stellenmarkt-Analysen nennen für Deutschland eine Spanne von rund <strong>90.000 bis 130.000 €</strong> im Jahr. In Konzernen und Scale-ups liegt die Gesamtvergütung deutlich höher — Business Insider berichtet von hohen sechsstelligen Beträgen bis etwa <strong>500.000 €</strong>. Die Spanne ist weit. Sie hängt von Branche, Unternehmensgröße und Verantwortung ab.</p>
    <p className="mt-3 text-sm text-espresso/60">Quellen: stellenmarkt.de (Berufsporträt CAIO), Business Insider / Gruenderszene. Angaben ohne Gewähr; der Markt bildet sich gerade erst.</p>
  </div>
</section>

{/* WER ES SCHON MACHT */}
<section id="beispiele" data-ort="Beispiele" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Wer die Rolle schon besetzt</h2>
  <ul className="mt-6 divide-y divide-espresso/10 rounded-2xl bg-white shadow-card">
    <li className="p-5"><strong className="font-head">SAP</strong> – Philipp Herzig als Chief AI Officer: die Rolle im Herzen des Produktgeschäfts.</li>
    <li className="p-5"><strong className="font-head">Deutsche Bahn</strong> – Dr. Michael Drass als CAIO: KI-Verantwortung für einen Konzern mit Millionen Kundenkontakten.</li>
    <li className="p-5"><strong className="font-head">Der Mittelstand</strong> – besetzt die Rolle meist ohne Titel. Genau dort setzt die CAIO Institut an.</li>
  </ul>
</section>

{/* FÜR ARBEITNEHMER & ARBEITGEBER */}
<section id="fuer-wen" data-ort="Für Arbeitnehmer &amp; Arbeitgeber" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Was eine CAIO-Ausbildung Ihnen — und dir — einzigartig bringt</h2>
  <p className="mt-3 max-w-[75ch]">Zwei Perspektiven, ein Pfad. Arbeitnehmer gewinnen Sichtbarkeit und Zukunft; Arbeitgeber gewinnen Steuerung und Unabhängigkeit.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-2">

    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 border-t-4 border-orange">
      <p className="font-head font-bold text-ofen text-lg">Für Arbeitnehmer:innen — dein Aufstieg</p>
      <ul className="mt-4 space-y-3 text-[15px]">
        <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Lass dich von den Gehaltszahlen nicht abschrecken.</strong> Die hohen Summen sind das Ende des Pfads, nicht sein Anfang. Jede Stufe zahlt sich sofort aus — du startest mit über 32 Stunden Fundament, nicht mit einem Sechsstellen-Anspruch.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Dein Wissen zählt.</strong> Du bringst Fachwissen aus Einkauf, Vertrieb, Produktion oder Verwaltung mit — die Ausbildung gibt ihm Rahmen, Namen und Nachweis. Genau wie bei René.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Nähe zur Geschäftsführung.</strong> Als CAIO arbeitest du direkt mit der Führungsetage — eine Sichtbarkeit, für die andere Jahrzehnte brauchen.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Dein Urteil zählt.</strong> Du sprichst mit Anbietern, IT und Geschäftsführung auf Augenhöhe — und triffst Entscheidungen, die sonst jemand von außerhalb trifft.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Karriere mit Nachweis.</strong> Zertifikat je Stufe (AIP bis CAIO) — dokumentiert, portabel, übertragbar auf jeden Arbeitgeber.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>KI macht dich nicht überflüssig.</strong> Derjenige, der KI steuert, wird wichtiger — nicht ersetzbar.</span></li>
      </ul>
      <a href="/#test" className="mt-5 inline-flex items-center justify-center min-h-[48px] px-6 w-full sm:w-auto rounded-xl bg-orange text-espresso font-head font-bold">Selbsttest — wo stehst du gerade?</a>
    </div>

    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 border-t-4 border-nacht">
      <p className="font-head font-bold text-ofen text-lg">Für Arbeitgeber — Ihre Wirkung</p>
      <ul className="mt-4 space-y-3 text-[15px]">
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>Direkter Draht zur Führung.</strong> Ihr ausgebildeter Mensch arbeitet eng mit der Geschäftsführung — Entscheidungen ohne Agenturkette, ohne Warteschleife.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>Zusätzliche Wirkung über alle Abteilungen.</strong> Ein CAIO orchestriert Marketing, Vertrieb, Service und Prozesse — mehr Output, ohne ein neues Team einzustellen.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>Know-how bleibt im Haus.</strong> Sie bauen einen Architekten auf statt Handwerker zu mieten — Kompetenz, die nicht mit dem Projekt endet.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>Rechtssicherheit.</strong> Art. 4 EU AI Act verlangt KI-Kompetenz der Belegschaft — Stufe 1 erfüllt die Pflicht, nachweisbar.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>Weniger Fehlkäufe.</strong> Ein Navigator prüft Business Cases und Anbieter, bevor Budget fließt — statt danach.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>Talente binden statt verlieren.</strong> Sie geben Ihrer „René" einen Namen, einen Pfad und Perspektive — das hält Leistungsträger im Haus.</span></li>
        <li className="flex gap-2"><span aria-hidden="true" className="text-nacht font-bold">→</span><span><strong>30–100 % Zuschuss.</strong> Die Förderfähigkeit klären wir im kostenfreien Erstgespräch — der Staat übernimmt einen Gutteil.</span></li>
      </ul>
      <a href="/#test" className="mt-5 inline-flex items-center justify-center min-h-[48px] px-6 w-full sm:w-auto rounded-xl bg-espresso text-mehl font-head font-bold">Erstgespräch mit Förder-Check anfragen</a>
    </div>

  </div>
</section>

{/* WEG ZUR ROLLE */}
<section id="weg" data-ort="Weg zur Rolle" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Der Weg zur Rolle</h2>
  <p className="mt-3 max-w-[75ch]">Vier Stufen. Ein Pfad — „Vom Beweis zur Verantwortung". Jede Stufe erzwingt einen Schwerpunkt und endet mit einem Nachweis: Fundament bereiten · Urteil schärfen · Projekte bauen · Verantwortung tragen. Einstieg ohne Vorkenntnisse oder mit dem <a className="underline underline-offset-2 text-ofen" href="/buch">CAIO-Handbuch</a>.</p>
  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-[15px]">
    <div className="bg-white rounded-2xl shadow-card p-5 border-l-4 border-sand">
      <p className="font-head font-bold text-ofen">Stufe 1 · AI Professional (AIP)</p>
      <p className="mt-1">Bereitet das Fundament vor. Über 32 Stunden.</p>
      <p className="mt-1 text-sm text-espresso/60">Schwerpunkt: Menschen &amp; Change</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 border-l-4 border-orange">
      <p className="font-head font-bold text-ofen">Stufe 2 · AI Officer (AIO)</p>
      <p className="mt-1">Schärft das Urteil. Konzipiert Projekte, überwacht den Fortschritt.</p>
      <p className="mt-1 text-sm text-espresso/60">Schwerpunkt: Wirtschaftlichkeit</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 border-l-4 border-licht">
      <p className="font-head font-bold text-ofen">Stufe 3 · AI Architekt (AIA)</p>
      <p className="mt-1">Baut Projekte. Meisterstück am echten Fall.</p>
      <p className="mt-1 text-sm text-espresso/60">Schwerpunkt: Technologie &amp; Daten</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5 border-l-4 border-nacht">
      <p className="font-head font-bold text-ofen">Stufe 4 · Chief AI Officer (CAIO)</p>
      <p className="mt-1">Trägt Verantwortung. Governance &amp; Portfolio.</p>
      <p className="mt-1 text-sm text-espresso/60">Schwerpunkt: Sicherheit &amp; Recht</p>
    </div>
  </div>
  <div className="mt-8 flex flex-col sm:flex-row gap-3">
    <a href="/#test" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold shadow-card">Selbsttest starten – 5 Minuten</a>
    <a href="/#stufen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-ofen underline underline-offset-4">Alle Stufen im Detail</a>
  </div>
</section>

{/* QUELLEN */}
<section id="quellen" data-ort="Quellen" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <p className="mt-2 max-w-[75ch]">Hinter dem CAIO Institut steht Eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd. — mit Partnern in Deutschland, der Schweiz und Irland. Ansprechpartner für Deutschland ist die AZAV-zertifizierte WissensReich Academy. Mehr: <a className="underline underline-offset-2 text-ofen" href="/ueber-uns">Über uns</a>.</p>
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Quellen</h2>
  <ul className="mt-6 space-y-2 text-[15px] bg-white rounded-2xl shadow-card p-6 list-disc pl-9">
    <li>Kienbaum: <a className="underline underline-offset-2 text-ofen" href="https://www.kienbaum.com/blog/chief-ai-officer-pro-contra-caio/" target="_blank" rel="noopener noreferrer nofollow">„Chief AI Officer: Pro &amp; Contra CAIO"</a> (25.02.2025, Autoren: Cescatti, Lüscher, Spisa)</li>
    <li>Bitkom: <a className="underline underline-offset-2 text-ofen" href="https://www.bitkom.org/Presse/Presseinformation/KI-in-Deutschland-wichtigste-Zukunftstechnologie" target="_blank" rel="noopener noreferrer nofollow">„KI in Deutschland: wichtigste Zukunftstechnologie"</a> (25.09.2024)</li>
    <li>stellenmarkt.de: <a className="underline underline-offset-2 text-ofen" href="https://www.stellenmarkt.de/berufe/chief-ai-officer-caio" target="_blank" rel="noopener noreferrer nofollow">Berufsporträt Chief AI Officer</a></li>
    <li>Business Insider / Gruenderszene: <a className="underline underline-offset-2 text-ofen" href="https://www.businessinsider.de/gruenderszene/endlich-c-level/was-macht-ein-chief-ai-officer-gehalt" target="_blank" rel="noopener noreferrer nofollow">„Was macht ein Chief AI Officer? Gehalt"</a></li>
    <li>EU AI Act, Art. 4 — KI-Kompetenzpflicht seit Februar 2025 (Rechtsakt der Europäischen Union)</li>
  </ul>
  <p className="mt-3 text-sm text-espresso/60">Alle Quellen zuletzt abgerufen am 31.10.2026.</p>
</section>
      <AiBubble />

      </>
    </PageLayout>
  );
}
