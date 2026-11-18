import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AiBubble from "@/components/AiBubble";

export const metadata: Metadata = {
    title: "Glossar KI & Digitalisierung – 44 Begriffe auf Deutsch",
    description: "KI, DSGVO, EU AI Act, CLOUD Act, AZAV bis Zuschuss: 40 Fachbegriffe kurz und klar auf Deutsch erklärt – inklusive der Stufen-Kürzel AIP, AIO, AIA, CAIO.",
};

export default function Page() {
  return (
    <PageLayout ort="Glossar" home={false} adStyle={false} minimal={false} altcha={false}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "CAIO Institut", "item": "https://www.caio-institut.de/"}, {"@type": "ListItem", "position": 2, "name": "Glossar", "item": "https://www.caio-institut.de/glossar"}]} }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "DefinedTermList", "name": "Glossar KI & Digitalisierung \u2014 44 Begriffe auf Deutsch", "description": "Deutsche Begriffserkl\u00e4rungen rund um K\u00fcnstliche Intelligenz, EU AI Act, DSGVO und die CAIO-Rolle.", "url": "https://www.caio-institut.de/glossar", "hasDefinedTerm": [{"@type": "DefinedTerm", "name": "AI Professional (AIP)", "description": "Stufe 1 unserer Ausbildung. Bereitet das Fundament vor: \u00fcber 32 Stunden, bis zu 90 % F\u00f6rderung mit Schwerpunkt \u201eMenschen &amp; Change\", Art.-4-konforme Basis, Nachweis per Basis-Zertifikat. Zu den Stufen \u2192"}, {"@type": "DefinedTerm", "name": "AI Officer (AIO)", "description": "Stufe 2. Sch\u00e4rft das Urteil: 4\u20136 Wochen als Team-Qualifizierung (bis 3 Mitarbeitende), durchschnittlich 80 % F\u00f6rderung, Bewertungsraster, Dienstleister-Gespr\u00e4che, Nachweis per gepr\u00fcftem Business Case. Schwerpunkt der Stufe: Wirtschaftlichkeit."}, {"@type": "DefinedTerm", "name": "AI Architekt (AIA)", "description": "Stufe 3. Baut Projekte: exakt 3 Monate am echten Fall, bis 100 % F\u00f6rderung f\u00fcr Besch\u00e4ftigte. (KI-B\u00e4ckerei), Nachweis per Meisterst\u00fcck-Projekt mit Business Case. Schwerpunkt der Stufe: Technologie &amp; Daten."}, {"@type": "DefinedTerm", "name": "API (Schnittstelle)", "description": "Programmierschnittstelle. Sie l\u00e4sst Systeme miteinander sprechen. Wer APIs kennt, kann einsch\u00e4tzen, wie gut sich ein KI-Dienst ins Bestehende einbauen l\u00e4sst."}, {"@type": "DefinedTerm", "name": "Art. 4 EU AI Act", "description": "Der Paragraf, der seit Februar 2025 KI-Kompetenz der Belegschaft verlangt. Aus der Pflicht machen wir einen Vorsprung: unsere Stufen 1 und 2 erf\u00fcllen die Basis."}, {"@type": "DefinedTerm", "name": "AVV (Auftragsverarbeitungsvertrag)", "description": "Vertrag, den die DSGVO verlangt, wenn ein Dienstleister personenbezogene Daten verarbeitet. Fehlt er, darf die Datenweitergabe nicht starten."}, {"@type": "DefinedTerm", "name": "Automatisierung (betrieblich)", "description": "Abl\u00e4ufe so gestalten, dass sie ohne manuelle Schritte laufen. Betriebliche Automatisierung erledigt Wiederholarbeit schneller und fehler\u00e4rmer \u2014 ihr Nutzen steht und f\u00e4llt mit der Prozessqualit\u00e4t davor."}, {"@type": "DefinedTerm", "name": "AZAV", "description": "Anerkennungs- und Zulassungsverordnung Weiterbildung. Wer nach ihr als Tr\u00e4ger anerkannt ist (wie die Wissensreich Academy), darf gef\u00f6rderte Weiterbildung anbieten \u2014 die Grundlage f\u00fcr Zusch\u00fcsse von 30 bis 100 %."}, {"@type": "DefinedTerm", "name": "Beweis-Leiter", "description": "F\u00fcnf dokumentierte Arbeitsproben in 30 Tagen (Vorher-Nachher, Anbieter-Pr\u00fcfung, KI-Richtlinie, Bewertungsraster, Ergebnis-Notiz) \u2014 \u201edatiert, gemessen, unterschrieben\". Kern des CAIO-Handbuchs und der \u00dcberzeugung: Du hast kein K\u00f6nnens-Problem, du hast ein Nachweis-Problem."}, {"@type": "DefinedTerm", "name": "Bias (Verzerrung)", "description": "Systematische Schieflage in Daten oder Modellen. KI kann bestehende Vorurteile verst\u00e4rken. Pr\u00fcfen statt vertrauen \u2014 deshalb geh\u00f6rt Bias zur Dimension \u201eSicherheit &amp; Recht\"."}, {"@type": "DefinedTerm", "name": "Business Case", "description": "Nutzen, Kosten und Payback eines Vorhabens auf einer Seite. Wer nicht streichen kann, hat nicht verstanden. Kernteil der Stufe 2."}, {"@type": "DefinedTerm", "name": "C-Level (C-Ebene)", "description": "Die oberste F\u00fchrungsetage: Chief Executive Officer (CEO), Chief Financial Officer (CFO), Chief Technology Officer (CTO) \u2014 und zunehmend der Chief AI Officer (CAIO). Deutsch schlicht: die Gesch\u00e4ftsleitung."}, {"@type": "DefinedTerm", "name": "Chief AI Officer (CAIO)", "description": "Stufe 4 \u2014 baut auf dem AI Architekten auf, exakt 7 Monate (inkl. 3 Monate AIA), bis 100 % F\u00f6rderung. Der Architekt der KI im Unternehmen. Er plant, steuert, pr\u00fcft und nimmt ab. Er mauert nicht. Zum Berufsbild \u2192"}, {"@type": "DefinedTerm", "name": "CLOUD Act (USA)", "description": "US-Gesetz von 2018. Es erlaubt US-Beh\u00f6rden, bei US-Anbietern gespeicherte Daten zu verlangen \u2014 auch wenn sie in Europa liegen. Deshalb ist die Cloud-Wahl eine Datenschutz-Entscheidung."}, {"@type": "DefinedTerm", "name": "CX (Customer Experience)", "description": "Kundenerlebnis \u00fcber alle Ber\u00fchrungspunkte. F\u00fcr den CAIO ist CX eine Kennzahl, kein Nebeneffekt."}, {"@type": "DefinedTerm", "name": "Datensparsamkeit", "description": "Grundsatz der DSGVO: Erhebe nur Daten, die du wirklich brauchst. Die faulste KI-L\u00f6sung ist oft die sicherste."}, {"@type": "DefinedTerm", "name": "Daten-Souver\u00e4nit\u00e4t", "description": "Die F\u00e4higkeit eines Unternehmens, selbst zu bestimmen, wo seine Daten liegen und wer sie nutzt. Wer KI-Dienste einkauft, entscheidet damit \u00fcber Souver\u00e4nit\u00e4t \u2014 Stichwort US CLOUD Act und europ\u00e4ische Alternativen."}, {"@type": "DefinedTerm", "name": "DSGVO", "description": "Datenschutz-Grundverordnung der EU, seit 2018. Sie regelt Verarbeitung personenbezogener Daten: Rechtsgrundlage, Auskunft, L\u00f6schung, AVV."}, {"@type": "DefinedTerm", "name": "EU AI Act", "description": "Das KI-Gesetz der EU. Es stuft Anwendungen nach Risiko ein (verboten, Hochrisiko, begrenzt, minimal) und verlangt Transparenz sowie KI-Kompetenz (Art. 4)."}, {"@type": "DefinedTerm", "name": "Fine-Tuning", "description": "Nachtraining eines bestehenden Modells mit eigenen Daten. Aufwendig und meist unn\u00f6tig \u2014 oft reicht gutes Prompting oder RAG."}, {"@type": "DefinedTerm", "name": "F\u00f6rderzug\u00e4nge (BAFA \u00b7 INQA \u00b7 ESF/KOMPASS)", "description": "Wege, mit denen Weiterbildung bezuschusst wird: BAFA (Beratungszusch\u00fcsse des Bundes), INQA-Coaching (Initiative Neue Qualit\u00e4t der Arbeit) sowie ESF-/KOMPASS-Programme des Europ\u00e4ischen Sozialfonds. Welcher Zugang passt, kl\u00e4ren wir im Erstgespr\u00e4ch."}, {"@type": "DefinedTerm", "name": "Generative KI", "description": "KI, die neue Inhalte erzeugt: Texte, Bilder, Code. Sie schreibt nicht ab, sie erzeugt \u2014 deshalb pr\u00fcft man ihre Ausgaben."}, {"@type": "DefinedTerm", "name": "Governance", "description": "Regeln, Rollen und Prozesse, mit denen ein Unternehmen KI steuert. Ohne Governance wird jede KI-Strategie zum Zufallsprodukt."}, {"@type": "DefinedTerm", "name": "Halluzination", "description": "Wenn ein KI-Modell \u00fcberzeugend Falsches erfindet. Gegenmittel: Quellen pr\u00fcfen, Ausgaben kontrollieren, Verantwortung benennen."}, {"@type": "DefinedTerm", "name": "KI (K\u00fcnstliche Intelligenz)", "description": "Oberbegriff f\u00fcr Systeme, die Aufgaben l\u00f6sen, f\u00fcr die man fr\u00fcher Menschen brauchte: erkennen, vorhersagen, formulieren, sortieren."}, {"@type": "DefinedTerm", "name": "KI-Kompetenz", "description": "F\u00e4higkeit von Belegschaften, KI sachgerecht zu nutzen und ihre Risiken einzusch\u00e4tzen. Seit Februar 2025 gesetzlich gefordert (Art. 4 EU AI Act)."}, {"@type": "DefinedTerm", "name": "KI-Assistent (Chatbot)", "description": "Ein Dialogprogramm auf Basis von Sprachmodellen \u2014 wie ChatGPT, Claude oder Z.ai. Gut f\u00fcr Fragen und Entw\u00fcrfe; Ergebnisse pr\u00fcft trotzdem der Mensch."}, {"@type": "DefinedTerm", "name": "KI-Reifegrad", "description": "Gibt an, wie weit ein Unternehmen mit KI ist: von ersten Versuchen bis zu Governance und Portfolio-Steuerung. Unsere Stufen bauen ihn systematisch auf."}, {"@type": "DefinedTerm", "name": "KPI (Kennzahl)", "description": "Messbare Gr\u00f6\u00dfe f\u00fcr Erfolg. \u201eKI einf\u00fchren\" ist keine KPI. \u201eAusschuss \u221220 % bis Q4\" ist eine."}, {"@type": "DefinedTerm", "name": "LLM (Large Language Model)", "description": "Sprachmodell, das auf riesigen Textmengen trainiert wurde. Die Technik hinter Chatbots und Textgenerierung. Gute Eingaben entscheiden \u00fcber gute Ausgaben."}, {"@type": "DefinedTerm", "name": "Machine Learning (maschinelles Lernen)", "description": "Verfahren, bei dem Systeme aus Daten Muster lernen, statt Regeln vorgegeben zu bekommen. Basis der meisten KI-Anwendungen."}, {"@type": "DefinedTerm", "name": "On-Premise", "description": "Betrieb im eigenen Haus, auf eigener Hardware. Maximale Kontrolle, h\u00f6herer Aufwand. Gegenteil der Cloud."}, {"@type": "DefinedTerm", "name": "Pilot", "description": "Klein gestarteter Testlauf mit festen Erfolgskriterien. Im Navigator-Raster das Urteil zwischen GO und REWORK: erst zeigen, dann skalieren."}, {"@type": "DefinedTerm", "name": "Prompt / Prompt Engineering", "description": "Die Eingabe an ein KI-System \u2014 und die Kunst, sie pr\u00e4zise zu formulieren. Rolle, Ziel, Kontext, Format: Wer gut fragt, bekommt bessere Antworten."}, {"@type": "DefinedTerm", "name": "RAG (Retrieval-Augmented Generation)", "description": "KI antwortet nicht aus dem Ged\u00e4chtnis, sondern aus bereitgestellten Dokumenten. Reduziert Halluzinationen \u2014 wenn die Dokumente stimmen."}, {"@type": "DefinedTerm", "name": "Risikoklasse", "description": "Die Einstufung einer KI-Anwendung nach dem EU AI Act: verboten, Hochrisiko, begrenzt oder minimal. Sie bestimmt, welche Pr\u00fcf- und Transparenzpflichten gelten \u2014 Kern unserer Spannungsfeld-Sektion und des CAIO-Schwerpunkts \u201eSicherheit &amp; Recht\"."}, {"@type": "DefinedTerm", "name": "Roadmap (Fahrplan)", "description": "Zeitliche Abfolge geplanter Schritte. Eine gute Roadmap nennt Verantwortliche, Meilensteine und Abbruchkriterien."}, {"@type": "DefinedTerm", "name": "SaaS (Software as a Service)", "description": "Software aus der Cloud im Abo. Schnell startklar \u2014 aber Lizenzmodell, Datenort und Ausstieg pr\u00fcfen. Jahr 2 und 3 kosten anders als Jahr 1."}, {"@type": "DefinedTerm", "name": "Schnittstelle", "description": "Verbindung zwischen Systemen (siehe API). Nicht benannte Schnittstellen sind der h\u00e4ufigste Grund, warum KI-Projekte teurer werden als geplant."}, {"@type": "DefinedTerm", "name": "Trainingsdaten", "description": "Die Daten, aus denen ein Modell lernt. Ihre Qualit\u00e4t entscheidet \u00fcber die Qualit\u00e4t der Ausgaben. \u201eGarbage in, garbage out.\""}, {"@type": "DefinedTerm", "name": "Use Case (Anwendungsfall)", "description": "Ein konkretes Vorhaben mit Nutzen, Aufwand und Verantwortlichem. Erst der Use Case, dann das Tool \u2014 nie umgekehrt."}, {"@type": "DefinedTerm", "name": "Stufenmodell (\u201eVom Beweis zur Verantwortung\")", "description": "Der durchg\u00e4ngige Rahmen des CAIO Instituts: Fundament bereiten (AIP, Menschen &amp; Change) \u00b7 Urteil sch\u00e4rfen (AIO, Wirtschaftlichkeit) \u00b7 Projekte bauen (AIA, Technologie &amp; Daten) \u00b7 Verantwortung tragen (CAIO, Sicherheit &amp; Recht). Das CAIO-Handbuch f\u00fchrt bis Stufe 1 und z"}, {"@type": "DefinedTerm", "name": "Zustimmung (Consent)", "description": "Einwilligung der Betroffenen zur Datenverarbeitung. Sie muss freiwillig, informiert und widerrufbar sein. Ein vorangekreuztes K\u00e4stchen gen\u00fcgt nicht."}, {"@type": "DefinedTerm", "name": "Zuschuss (F\u00f6rderzuschuss)", "description": "Der Anteil der Weiterbildungskosten, den ein Tr\u00e4ger \u00fcbernimmt. Bei uns sind 30 bis 100 % m\u00f6glich \u2014 die individuelle Quote ermitteln wir im kostenfreien Erstgespr\u00e4ch. Bei begleiteten Antr\u00e4gen liegt die Bewilligungsquote bei bis zu 95 %."}]} }}
      />
      <>


<header className="max-w-[1120px] mx-auto px-5 pt-12 pb-6 md:px-8 md:pt-16">
  <p className="font-head font-medium text-licht text-sm tracking-widest uppercase">Glossar</p>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,44px)] leading-tight mt-3 max-w-[26ch]">
    Begriffe, die im KI-Alltag zählen.
  </h1>
  <p className="mt-4 max-w-[72ch]">Künstliche Intelligenz, Digitalisierung, Datenschutz — und unsere Stufen-Kürzel. Alles kurz und auf Deutsch erklärt. Für Gespräche auf Augenhöhe.</p>
  <nav aria-label="Glossar-Schnellsprung" className="mt-6 flex flex-wrap gap-2 text-sm">
    <a href="#a-d" className="px-3 py-1.5 rounded-full bg-white shadow-card font-head font-medium">A–D</a>
    <a href="#e-k" className="px-3 py-1.5 rounded-full bg-white shadow-card font-head font-medium">E–K</a>
    <a href="#l-r" className="px-3 py-1.5 rounded-full bg-white shadow-card font-head font-medium">L–R</a>
    <a href="#s-z" className="px-3 py-1.5 rounded-full bg-white shadow-card font-head font-medium">S–Z</a>
  </nav>
  <figure className="mt-8 overflow-hidden rounded-2xl shadow-card">
    <picture><source type="image/webp" srcSet="assets/img-opt/hero-glossar-800.webp 800w, assets/img-opt/hero-glossar.webp 1600w" sizes="100vw" /><img src="/img-opt/hero-glossar.webp" alt="Offenes Buch auf einem Schreibtisch im warmen Licht — Begriffe klären, Verständnis aufbauen" className="w-full aspect-[16/7] object-cover" width="1600" height="700" fetchPriority="high" decoding="async" /></picture>
  </figure>
</header>

<main className="max-w-[880px] mx-auto px-5 md:px-8 pb-16 space-y-12">

  <section id="a-d" data-ort="A–D" className="scroll-mt-24">
    <h2 className="font-head font-bold text-ofen text-2xl">A–D</h2>
    <dl className="mt-4 grid gap-3">
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">AI Professional (AIP)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Stufe 1 unserer Ausbildung. Bereitet das Fundament vor: über 32 Stunden, bis zu 90 % Förderung mit Schwerpunkt „Menschen &amp; Change", Art.-4-konforme Basis, Nachweis per Basis-Zertifikat. <a className="underline underline-offset-2 text-ofen" href="/#stufen">Zu den Stufen →</a></dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">AI Officer (AIO)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Stufe 2. Schärft das Urteil: 4–6 Wochen als Team-Qualifizierung (bis 3 Mitarbeitende), durchschnittlich 80 % Förderung, Bewertungsraster, Dienstleister-Gespräche, Nachweis per geprüftem Business Case. Schwerpunkt der Stufe: Wirtschaftlichkeit.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">AI Architekt (AIA)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Stufe 3. Baut Projekte: exakt 3 Monate am echten Fall, bis 100 % Förderung für Beschäftigte. (KI-Bäckerei), Nachweis per Meisterstück-Projekt mit Business Case. Schwerpunkt der Stufe: Technologie &amp; Daten.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">API (Schnittstelle)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Programmierschnittstelle. Sie lässt Systeme miteinander sprechen. Wer APIs kennt, kann einschätzen, wie gut sich ein KI-Dienst ins Bestehende einbauen lässt.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Art. 4 EU AI Act</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Der Paragraf, der seit Februar 2025 KI-Kompetenz der Belegschaft verlangt. Aus der Pflicht machen wir einen Vorsprung: unsere Stufen 1 und 2 erfüllen die Basis.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">AVV (Auftragsverarbeitungsvertrag)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Vertrag, den die DSGVO verlangt, wenn ein Dienstleister personenbezogene Daten verarbeitet. Fehlt er, darf die Datenweitergabe nicht starten.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Automatisierung (betrieblich)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Abläufe so gestalten, dass sie ohne manuelle Schritte laufen. Betriebliche Automatisierung erledigt Wiederholarbeit schneller und fehlerärmer — ihr Nutzen steht und fällt mit der Prozessqualität davor.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">AZAV</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Anerkennungs- und Zulassungsverordnung Weiterbildung. Wer nach ihr als Träger anerkannt ist (wie die Wissensreich Academy), darf geförderte Weiterbildung anbieten — die Grundlage für Zuschüsse von 30 bis 100 %.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Beweis-Leiter</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Fünf dokumentierte Arbeitsproben in 30 Tagen (Vorher-Nachher, Anbieter-Prüfung, KI-Richtlinie, Bewertungsraster, Ergebnis-Notiz) — „datiert, gemessen, unterschrieben". Kern des CAIO-Handbuchs und der Überzeugung: Du hast kein Könnens-Problem, du hast ein Nachweis-Problem.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Bias (Verzerrung)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Systematische Schieflage in Daten oder Modellen. KI kann bestehende Vorurteile verstärken. Prüfen statt vertrauen — deshalb gehört Bias zur Dimension „Sicherheit &amp; Recht".</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Business Case</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Nutzen, Kosten und Payback eines Vorhabens auf einer Seite. Wer nicht streichen kann, hat nicht verstanden. Kernteil der Stufe 2.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">C-Level (C-Ebene)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Die oberste Führungsetage: Chief Executive Officer (CEO), Chief Financial Officer (CFO), Chief Technology Officer (CTO) — und zunehmend der Chief AI Officer (CAIO). Deutsch schlicht: die Geschäftsleitung.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Chief AI Officer (CAIO)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Stufe 4 — baut auf dem AI Architekten auf, exakt 7 Monate (inkl. 3 Monate AIA), bis 100 % Förderung. Der Architekt der KI im Unternehmen. Er plant, steuert, prüft und nimmt ab. Er mauert nicht. <a className="underline underline-offset-2 text-ofen" href="/berufsbild">Zum Berufsbild →</a></dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">CLOUD Act (USA)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">US-Gesetz von 2018. Es erlaubt US-Behörden, bei US-Anbietern gespeicherte Daten zu verlangen — auch wenn sie in Europa liegen. Deshalb ist die Cloud-Wahl eine Datenschutz-Entscheidung.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">CX (Customer Experience)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Kundenerlebnis über alle Berührungspunkte. Für den CAIO ist CX eine Kennzahl, kein Nebeneffekt.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Datensparsamkeit</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Grundsatz der DSGVO: Erhebe nur Daten, die du wirklich brauchst. Die faulste KI-Lösung ist oft die sicherste.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Daten-Souveränität</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Die Fähigkeit eines Unternehmens, selbst zu bestimmen, wo seine Daten liegen und wer sie nutzt. Wer KI-Dienste einkauft, entscheidet damit über Souveränität — Stichwort US CLOUD Act und europäische Alternativen.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">DSGVO</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Datenschutz-Grundverordnung der EU, seit 2018. Sie regelt Verarbeitung personenbezogener Daten: Rechtsgrundlage, Auskunft, Löschung, AVV.</dd>
      </div>
    </dl>
  </section>

  <section id="e-k" data-ort="E–K" className="scroll-mt-24">
    <h2 className="font-head font-bold text-ofen text-2xl">E–K</h2>
    <dl className="mt-4 grid gap-3">
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">EU AI Act</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Das KI-Gesetz der EU. Es stuft Anwendungen nach Risiko ein (verboten, Hochrisiko, begrenzt, minimal) und verlangt Transparenz sowie KI-Kompetenz (Art. 4).</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Fine-Tuning</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Nachtraining eines bestehenden Modells mit eigenen Daten. Aufwendig und meist unnötig — oft reicht gutes Prompting oder RAG.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Förderzugänge (BAFA · INQA · ESF/KOMPASS)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Wege, mit denen Weiterbildung bezuschusst wird: BAFA (Beratungszuschüsse des Bundes), INQA-Coaching (Initiative Neue Qualität der Arbeit) sowie ESF-/KOMPASS-Programme des Europäischen Sozialfonds. Welcher Zugang passt, klären wir im Erstgespräch.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Generative KI</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">KI, die neue Inhalte erzeugt: Texte, Bilder, Code. Sie schreibt nicht ab, sie erzeugt — deshalb prüft man ihre Ausgaben.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Governance</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Regeln, Rollen und Prozesse, mit denen ein Unternehmen KI steuert. Ohne Governance wird jede KI-Strategie zum Zufallsprodukt.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Halluzination</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Wenn ein KI-Modell überzeugend Falsches erfindet. Gegenmittel: Quellen prüfen, Ausgaben kontrollieren, Verantwortung benennen.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">KI (Künstliche Intelligenz)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Oberbegriff für Systeme, die Aufgaben lösen, für die man früher Menschen brauchte: erkennen, vorhersagen, formulieren, sortieren.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">KI-Kompetenz</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Fähigkeit von Belegschaften, KI sachgerecht zu nutzen und ihre Risiken einzuschätzen. Seit Februar 2025 gesetzlich gefordert (Art. 4 EU AI Act).</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">KI-Assistent (Chatbot)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Ein Dialogprogramm auf Basis von Sprachmodellen — wie ChatGPT, Claude oder Z.ai. Gut für Fragen und Entwürfe; Ergebnisse prüft trotzdem der Mensch.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">KI-Reifegrad</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Gibt an, wie weit ein Unternehmen mit KI ist: von ersten Versuchen bis zu Governance und Portfolio-Steuerung. Unsere Stufen bauen ihn systematisch auf.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">KPI (Kennzahl)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Messbare Größe für Erfolg. „KI einführen" ist keine KPI. „Ausschuss −20 % bis Q4" ist eine.</dd>
      </div>
    </dl>
  </section>

  <section id="l-r" data-ort="L–R" className="scroll-mt-24">
    <h2 className="font-head font-bold text-ofen text-2xl">L–R</h2>
    <dl className="mt-4 grid gap-3">
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">LLM (Large Language Model)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Sprachmodell, das auf riesigen Textmengen trainiert wurde. Die Technik hinter Chatbots und Textgenerierung. Gute Eingaben entscheiden über gute Ausgaben.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Machine Learning (maschinelles Lernen)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Verfahren, bei dem Systeme aus Daten Muster lernen, statt Regeln vorgegeben zu bekommen. Basis der meisten KI-Anwendungen.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">On-Premise</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Betrieb im eigenen Haus, auf eigener Hardware. Maximale Kontrolle, höherer Aufwand. Gegenteil der Cloud.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Pilot</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Klein gestarteter Testlauf mit festen Erfolgskriterien. Im Navigator-Raster das Urteil zwischen GO und REWORK: erst zeigen, dann skalieren.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Prompt / Prompt Engineering</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Die Eingabe an ein KI-System — und die Kunst, sie präzise zu formulieren. Rolle, Ziel, Kontext, Format: Wer gut fragt, bekommt bessere Antworten.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">RAG (Retrieval-Augmented Generation)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">KI antwortet nicht aus dem Gedächtnis, sondern aus bereitgestellten Dokumenten. Reduziert Halluzinationen — wenn die Dokumente stimmen.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Risikoklasse</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Die Einstufung einer KI-Anwendung nach dem EU AI Act: verboten, Hochrisiko, begrenzt oder minimal. Sie bestimmt, welche Prüf- und Transparenzpflichten gelten — Kern unserer Spannungsfeld-Sektion und des CAIO-Schwerpunkts „Sicherheit &amp; Recht".</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Roadmap (Fahrplan)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Zeitliche Abfolge geplanter Schritte. Eine gute Roadmap nennt Verantwortliche, Meilensteine und Abbruchkriterien.</dd>
      </div>
    </dl>
  </section>

  <section id="s-z" data-ort="S–Z" className="scroll-mt-24">
    <h2 className="font-head font-bold text-ofen text-2xl">S–Z</h2>
    <dl className="mt-4 grid gap-3">
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">SaaS (Software as a Service)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Software aus der Cloud im Abo. Schnell startklar — aber Lizenzmodell, Datenort und Ausstieg prüfen. Jahr 2 und 3 kosten anders als Jahr 1.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Schnittstelle</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Verbindung zwischen Systemen (siehe API). Nicht benannte Schnittstellen sind der häufigste Grund, warum KI-Projekte teurer werden als geplant.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Trainingsdaten</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Die Daten, aus denen ein Modell lernt. Ihre Qualität entscheidet über die Qualität der Ausgaben. „Garbage in, garbage out."</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Use Case (Anwendungsfall)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Ein konkretes Vorhaben mit Nutzen, Aufwand und Verantwortlichem. Erst der Use Case, dann das Tool — nie umgekehrt.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Stufenmodell („Vom Beweis zur Verantwortung")</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Der durchgängige Rahmen des CAIO Instituts: Fundament bereiten (AIP, Menschen &amp; Change) · Urteil schärfen (AIO, Wirtschaftlichkeit) · Projekte bauen (AIA, Technologie &amp; Daten) · Verantwortung tragen (CAIO, Sicherheit &amp; Recht). Das CAIO-Handbuch führt bis Stufe 1 und zeigt den ganzen Weg.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Zustimmung (Consent)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Einwilligung der Betroffenen zur Datenverarbeitung. Sie muss freiwillig, informiert und widerrufbar sein. Ein vorangekreuztes Kästchen genügt nicht.</dd>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-5">
        <dt className="font-head text-ofen">Zuschuss (Förderzuschuss)</dt>
        <dd className="mt-1 text-[15px] text-espresso/85">Der Anteil der Weiterbildungskosten, den ein Träger übernimmt. Bei uns sind 30 bis 100 % möglich — die individuelle Quote ermitteln wir im kostenfreien Erstgespräch. Bei begleiteten Anträgen liegt die Bewilligungsquote bei bis zu 95 %.</dd>
      </div>
    </dl>
  </section>

  <div className="bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl text-center">
    <p className="font-head font-bold text-lg">Fehlt ein Begriff?</p>
    <p className="mt-2 text-[15px] max-w-[72ch] mx-auto">Schreib ihn uns — wir erweitern das Glossar laufend. <a className="underline underline-offset-2 font-semibold" href="/#test">Direkter Kontakt zum Institut →</a></p>
  </div>
      <AiBubble />

      </>
    </PageLayout>
  );
}
