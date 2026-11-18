import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AiBubble from "@/components/AiBubble";
import CountUp from "@/components/CountUp";
import Selbsttest from "@/components/Selbsttest";
import { KontaktForm } from "@/components/Forms";

export const metadata: Metadata = {
    title: "CAIO Institut – KI-Kompetenz & Chief-AI-Officer-Ausbildung in 4 Stufen",
    description: "Ausbildung zum Chief AI Officer: 4 Stufen (AIP, AIO, AIA, CAIO), über 32 Stunden Fundament, förderfähig mit 30–100 % Zuschuss. Jetzt Selbsttest in 2 Minuten.",
};

export default function Page() {
  return (
    <PageLayout ort="Start" home={true} adStyle={false} minimal={false} altcha={true}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "F\u00fcr wen ist die CAIO Institut?", "acceptedAnswer": {"@type": "Answer", "text": "F\u00fcr Fachkr\u00e4fte mit Technik-Affinit\u00e4t, Teamleiter:innen und angehende KI-Verantwortliche \u2014 und f\u00fcr deren Chefs. F\u00fcr Menschen wie Ren\u00e9, die die Arbeit bereits machen. Und f\u00fcr Unternehmen, die aus der KI-Pflicht einen Vorsprung machen wollen."}}, {"@type": "Question", "name": "Muss ich Vorkenntnisse mitbringen?", "acceptedAnswer": {"@type": "Answer", "text": "F\u00fcr Stufe 1 (AI Professional, AIP) brauchst du keine Vorkenntnisse. F\u00fcr Stufe 2 (AI Officer, AIO) gen\u00fcgt Stufe 1 \u2014 oder 6+ Punkte im Selbsttest."}}, {"@type": "Question", "name": "Wie viel Zeit muss ich einplanen?", "acceptedAnswer": {"@type": "Answer", "text": "Stufe 1: \u00fcber 32 Stunden Fundament. Stufe 2: 4\u20136 Wochen mit 4\u20136 Stunden pro Woche. Stufe 3: 3 Monate (exakt) am echten Fall. Stufe 4: 7 Monate (inkl. AIA) mit Governance-Verantwortung."}}, {"@type": "Question", "name": "Sind die Angebote f\u00f6rderf\u00e4hig?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, grunds\u00e4tzlich \u2014 je nach Zielgruppe und Programm sind 30 bis 100 % Zuschuss m\u00f6glich. Die individuelle Quote ermitteln wir im kostenfreien Erstgespr\u00e4ch. Das Institut ist eine Gemeinschaftsinitiative der WissensReich Academy, Eskalator AG und Grenzenlos Ltd.; Tr\u00e4ger und Ansprechpartner f\u00fcr Deutschland ist die AZAV-zertifizierte Wissensreich Academy."}}, {"@type": "Question", "name": "Welche Nachweise erhalte ich?", "acceptedAnswer": {"@type": "Answer", "text": "Jede Stufe endet mit einem Nachweis: Basis-Zertifikat (AIP), gepr\u00fcfter Business Case (AIO), Meisterst\u00fcck-Projekt (AIA) und das CAIO-Zertifikat in Stufe 4."}}, {"@type": "Question", "name": "Was hat der EU AI Act damit zu tun?", "acceptedAnswer": {"@type": "Answer", "text": "Artikel 4 verlangt seit Februar 2025 KI-Kompetenz in den Belegschaften. Stufe 1 erf\u00fcllt diese Basis. Wir machen aus der Pflicht einen Vorsprung."}}, {"@type": "Question", "name": "F\u00fcr wen ist das Institut nicht geeignet?", "acceptedAnswer": {"@type": "Answer", "text": "F\u00fcr alle, die fertige L\u00f6sungen kaufen wollen, statt Kompetenz aufzubauen. Wer eine Umsetzung einkauft, ist bei einer Agentur besser aufgehoben."}}, {"@type": "Question", "name": "Was kostet die Teilnahme?", "acceptedAnswer": {"@type": "Answer", "text": "Die Kosten h\u00e4ngen von Stufe und F\u00f6rderung ab. Deshalb kl\u00e4ren wir beides im Erstgespr\u00e4ch: erst der Zuschuss, dann das Budget."}}, {"@type": "Question", "name": "Gibt es einen kostenlosen Einstieg?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, zwei: den Selbsttest (2 Minuten, sofortiges Ergebnis mit Kurs-Empfehlung) und das kostenfreie Erstgespr\u00e4ch mit Stufen-Empfehlung und F\u00f6rder-Check."}}, {"@type": "Question", "name": "K\u00f6nnen ganze Teams oder Unternehmen teilnehmen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Firmen qualifizieren einzelne Mitarbeitende oder ganze Teams \u2014 von der AIP-Basisqualifizierung bis zur CAIO-Verantwortung."}}, {"@type": "Question", "name": "Was bedeutet CAIO?", "acceptedAnswer": {"@type": "Answer", "text": "Chief AI Officer \u2014 auf Deutsch: der leitende Beauftragte f\u00fcr K\u00fcnstliche Intelligenz. Chief = leitend, Teil der C-Ebene. AI = K\u00fcnstliche Intelligenz. Officer = Amtstr\u00e4ger mit Verantwortung."}}, {"@type": "Question", "name": "Welchen Schwerpunkt hat welche Stufe?", "acceptedAnswer": {"@type": "Answer", "text": "Jede Stufe erzwingt einen gro\u00dfen Schwerpunkt: AIP \u2192 Menschen & Change \u00b7 AIO \u2192 Wirtschaftlichkeit \u00b7 AIA \u2192 Technologie & Daten \u00b7 CAIO \u2192 Sicherheit & Recht."}}, {"@type": "Question", "name": "Wie l\u00f6se ich den Konflikt zwischen KI-Einsatz und Datenschutz?", "acceptedAnswer": {"@type": "Answer", "text": "Indem man ihn managt: Ziel zuerst, Risiko einordnen, Anbieter pr\u00fcfen (Wo liegen die Daten?), dokumentieren \u2014 im Spannungsfeld von Performance-Wunsch, DSGVO, EU AI Act, US CLOUD Act, Kundenw\u00fcnschen und Wirtschaftlichkeit."}}, {"@type": "Question", "name": "Wer steht hinter dem CAIO Institut?", "acceptedAnswer": {"@type": "Answer", "text": "Eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd. mit Partnern in Deutschland, der Schweiz und Irland. Ansprechpartner f\u00fcr Deutschland: die WissensReich Academy (AZAV-zertifiziert, ISO 9001 & ISO 56002, \u00fcber 10 Jahre F\u00f6rdermittel-Expertise, 13 Dozenten und Praxis-Experten)."}}]} }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@graph": [{"@type": "EducationalOrganization", "@id": "https://www.caio-institut.de/#org", "name": "CAIO Institut", "alternateName": "CAIO Akademie", "url": "https://www.caio-institut.de/", "logo": "https://www.caio-institut.de/assets/logo-mark.svg", "description": "Ausbildung zum Chief AI Officer (CAIO) in vier Stufen \u2013 eine Gemeinschaftsinitiative der WissensReich Academy, Eskalator AG und Grenzenlos Ltd. F\u00f6rderf\u00e4hig mit 30\u2013100 % Zuschuss.", "parentOrganization": {"@type": "Organization", "name": "Wissensreich Academy", "url": "https://wissensreich.academy"}, "sameAs": ["https://wissensreich.academy"], "address": {"@type": "PostalAddress", "streetAddress": "Weinsbergstra\u00dfe 190", "postalCode": "50825", "addressLocality": "K\u00f6ln", "addressCountry": "DE"}, "contactPoint": {"@type": "ContactPoint", "email": "kontakt@caio-institut.de", "contactType": "customer service", "availableLanguage": ["de"]}, "areaServed": [{"@type": "Country", "name": "Deutschland"}, {"@type": "Country", "name": "\u00d6sterreich"}, {"@type": "Country", "name": "Schweiz"}]}, {"@type": "WebSite", "@id": "https://www.caio-institut.de/#website", "url": "https://www.caio-institut.de/", "name": "CAIO Institut", "inLanguage": "de-DE", "publisher": {"@id": "https://www.caio-institut.de/#org"}}, {"@type": "WebPage", "@id": "https://www.caio-institut.de/#webpage", "url": "https://www.caio-institut.de/", "name": "CAIO Institut \u2013 KI-Kompetenz & Chief-AI-Officer-Ausbildung in 4 Stufen", "isPartOf": {"@id": "https://www.caio-institut.de/#website"}, "about": {"@id": "https://www.caio-institut.de/#org"}, "inLanguage": "de-DE", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"]}}, {"@type": "Course", "name": "AI Professional (AIP) \u2013 Stufe 1", "description": "Bereitet das Fundament vor: \u00fcber 32 Stunden KI-Grundlagen mit Schwerpunkt Menschen & Change, Art.-4-konforme Basis. Nachweis: Basis-Zertifikat.", "provider": {"@id": "https://www.caio-institut.de/#org"}, "timeRequired": "PT32H", "educationalCredentialAwarded": "Basis-Zertifikat", "inLanguage": "de", "courseCode": "AIP", "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online", "location": {"@type": "VirtualLocation", "url": "https://www.caio-institut.de/"}}}, {"@type": "Course", "name": "AI Officer (AIO) \u2013 Stufe 2", "description": "Sch\u00e4rft das Urteil: 4\u20136 Wochen, Business Cases priorisieren, Dienstleister-Gespr\u00e4che. Nachweis: gepr\u00fcfter Business Case. Schwerpunkt: Wirtschaftlichkeit.", "provider": {"@id": "https://www.caio-institut.de/#org"}, "timeRequired": "P6W", "educationalCredentialAwarded": "Gepr\u00fcfter Business Case", "inLanguage": "de", "courseCode": "AIO", "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online", "location": {"@type": "VirtualLocation", "url": "https://www.caio-institut.de/"}}}, {"@type": "Course", "name": "AI Architekt (AIA) \u2013 Stufe 3", "description": "Baut Projekte: 3 Monate (exakt) am echten Fall KI-B\u00e4ckerei. Nachweis: Meisterst\u00fcck-Projekt mit Business Case. Schwerpunkt: Technologie & Daten.", "provider": {"@id": "https://www.caio-institut.de/#org"}, "timeRequired": "P4M", "educationalCredentialAwarded": "Meisterst\u00fcck-Projekt", "inLanguage": "de", "courseCode": "AIA", "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online", "location": {"@type": "VirtualLocation", "url": "https://www.caio-institut.de/"}}}, {"@type": "Course", "name": "Chief AI Officer (CAIO) \u2013 Stufe 4", "description": "Tr\u00e4gt Verantwortung: 7 Monate (inkl. AIA) Governance & Portfolio, EU AI Act, ISO 42001. Nachweis: CAIO-Zertifikat. Schwerpunkt: Sicherheit & Recht.", "provider": {"@id": "https://www.caio-institut.de/#org"}, "timeRequired": "P9M", "educationalCredentialAwarded": "CAIO-Zertifikat", "inLanguage": "de", "courseCode": "CAIO", "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online", "location": {"@type": "VirtualLocation", "url": "https://www.caio-institut.de/"}}}]} }}
      />
      <>


{/* 1. HERO */}
<header id="top" data-ort="Start" className="max-w-[1120px] mx-auto px-5 pt-14 pb-10 md:px-8 md:pt-20">
  <p className="font-head font-medium text-licht text-sm tracking-widest uppercase">CAIO Institut · Eine Gemeinschaftsinitiative</p>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,44px)] leading-tight mt-3 max-w-[22ch]">
    Wir machen aus KI-Pflicht KI-Kompetenz.
  </h1>
  <p className="mt-4 max-w-[72ch]">Vier Stufen. Ein echter Fall. Über 32 Stunden Fundament bis zur Verantwortung für das ganze Unternehmen — förderfähig mit 30 bis 100&nbsp;% Zuschuss.</p>
  <div className="mt-7 flex flex-col sm:flex-row gap-3">
    <a href="#stufen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold text-lg shadow-card">
      Die vier Stufen ansehen
    </a>
    <a href="#test" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-ofen underline underline-offset-4">
      Selbsttest — 2 Minuten
    </a>
  </div>
</header>

{/* 1b. WAS IST EIN CAIO (Einschub) */}
<section data-ort="Was ist ein CAIO?" className="max-w-[1120px] mx-auto px-5 md:px-8 py-6">
  <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 border-l-4 border-orange">
    <p className="font-head font-bold text-ofen text-lg">Was ist ein CAIO?</p>
    <p className="mt-2 text-[15px] max-w-[80ch]">CAIO steht für <strong>Chief AI Officer</strong> — auf Deutsch: <strong>der leitende Beauftragte für Künstliche Intelligenz</strong>. Drei Bausteine, bewusst auseinandergenommen:</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
      <div className="bg-mehl rounded-xl p-4">
        <p className="font-head font-bold text-ofen">Chief</p>
        <p className="mt-1">„Leitend". Er sitzt in der Führungsetage — der C-Ebene, direkt neben CEO, CFO und CTO. Er berichtet an die Geschäftsführung.</p>
      </div>
      <div className="bg-mehl rounded-xl p-4">
        <p className="font-head font-bold text-ofen">AI</p>
        <p className="mt-1">„Artificial Intelligence" — Künstliche Intelligenz. Er verantwortet, wo KI im Unternehmen sinnvoll, sicher und wirtschaftlich eingesetzt wird.</p>
      </div>
      <div className="bg-mehl rounded-xl p-4">
        <p className="font-head font-bold text-ofen">Officer</p>
        <p className="mt-1">„Beauftragter mit Verantwortung". Kein Berater, kein Werkzeug-Administrator — ein Amt mit Entscheidungsbefugnis und Rechenschaft.</p>
      </div>
    </div>
    <ul className="mt-4 text-[15px] space-y-1.5 max-w-[80ch]">
      <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Teil des Managements:</strong> Der CAIO gehört zur C-Level-Riege — eine feste Führungsrolle mit echtem Mitspracherecht.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Extremes Aufstiegspotenzial:</strong> Ein neues Berufsbild, in dem die Positionen noch fast unbesetzt sind. Wer jetzt einsteigt, prägt die Rolle für alle Nachfolgenden.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Vernetzung:</strong> CAIOs arbeiten mit Geschäftsführung, IT, Recht, Vertrieb und externen Anbietern — ein Netzwerk, das sonst Jahrzehnte braucht.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Puls der Zeit:</strong> Wer KI verantwortet, gestaltet, wie das Unternehmen morgen arbeitet — statt den Wandel nur zu erleben.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-orange font-bold">→</span><span><strong>Gehalt:</strong> selten nur fünfstellig — je nach Unternehmensgröße häufig im sechsstelligen Bereich. <a className="underline underline-offset-2 text-ofen" href="/berufsbild#gehalt">Details mit Quellen →</a></span></li>
    </ul>
    <p className="mt-4 text-sm"><a className="font-semibold text-ofen underline underline-offset-2" href="/berufsbild">Das Berufsbild im Detail: Aufgaben, Zahlen, Gehalt →</a></p>
  </div>
</section>

{/* 1c. AUF EINEN BLICK (GEO-Kernfakten) */}
<section id="auf-einen-blick" data-ort="Auf einen Blick" className="max-w-[1120px] mx-auto px-5 md:px-8 py-6">
  <div className="bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl">
    <p className="font-head font-bold text-lg">Das CAIO Institut auf einen Blick</p>
    <ul className="mt-4 grid gap-2 text-[15px]">
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">1</span><span>Das CAIO Institut bildet in vier Stufen zum Chief AI Officer aus: AIP → AIO → AIA → CAIO.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">2</span><span>Stufe 1 (AI Professional) bereitet in über 32 Stunden das Fundament vor — ganz ohne Vorkenntnisse.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">3</span><span>Alle Angebote sind förderfähig: 30–100 % Zuschuss sind möglich; die Bewilligungsquote begleiteter Anträge liegt bei bis zu 95 %.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">4</span><span>Träger und Ansprechpartner für Deutschland ist die AZAV-zertifizierte Wissensreich Academy (ISO 9001 &amp; ISO 56002) aus Köln — das Institut ist eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd., verankert in Deutschland, der Schweiz und Irland.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">5</span><span>Seit Februar 2025 verlangt Art. 4 des EU AI Act KI-Kompetenz in den Belegschaften — Stufe 1 erfüllt diese Pflicht.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">6</span><span>13 Dozenten und Praxis-Experten begleiten; Praxisfall ist durchgängig die KI-Bäckerei.</span></li>
      <li className="flex gap-2"><span aria-hidden="true" className="text-sand font-bold">7</span><span>Der Einstieg kostet nichts: Selbsttest (2 Minuten) oder kostenfreies Erstgespräch mit Förder-Check.</span></li>
    </ul>
  </div>
</section>

{/* 2. STORY */}
<section data-ort="René-Story" className="max-w-[1120px] mx-auto px-5 md:px-8 py-8">
  <figure className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-6 md:p-8">
    <blockquote className="font-story italic text-xl md:text-2xl leading-snug text-ofen">
      „René ist 34. Sie arbeitet im Einkauf. Sie hat die Bestellprognose mit KI verbessert.
      Niemand hat ihr dafür eine Rolle gegeben. Sie hat sich die Rolle selbst gebaut."
    </blockquote>
    <figcaption className="mt-3 text-sm text-espresso/60">Aus dem <a className="underline underline-offset-2 hover:text-espresso" href="/ueber-uns#leitbild">Leitbild des CAIO Instituts</a></figcaption>
  </figure>
</section>

{/* 2c. DIE AKADEMIE IN ZAHLEN */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-6">
  <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="font-head font-bold text-ofen">Das Institut in Zahlen</p>
      <a href="/ueber-uns" className="text-sm font-semibold text-ofen underline underline-offset-2">Leitbild, Zahlen &amp; Dozenten: Über uns →</a>
    </div>
    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div>
        <span className="font-head font-bold text-2xl text-orange"><CountUp to={10} suffix="+" /></span>10+
        <p className="text-xs text-espresso/70 mt-1">Jahre Fördermittel-Expertise</p>
      </div>
      <div>
        <span className="font-head font-bold text-2xl text-orange"><CountUp to={95} prefix="bis " suffix=" %" /></span>bis 95 %
        <p className="text-xs text-espresso/70 mt-1">Bewilligungsquote bei Begleitung (eigene Auswertung)</p>
      </div>
      <div>
        <span className="font-head font-bold text-2xl text-orange"><CountUp to={13} /></span>13
        <p className="text-xs text-espresso/70 mt-1">Dozenten &amp; Praxis-Experten</p>
      </div>
      <div>
        <p className="font-head font-bold text-2xl text-orange">AZAV · ISO</p>
        <p className="text-xs text-espresso/70 mt-1">Zertifizierte Qualität (9001 &amp; 56002)</p>
      </div>
    </div>
  </div>
</section>

{/* 2b. WAS IST EIN CAIO */}
<section id="rolle" data-ort="Was ist ein CAIO?" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Was ist ein CAIO?</h2>
  <p className="mt-3 max-w-[75ch]">Denk an ein Bauprojekt. Der Bauherr zahlt und entscheidet. Die Handwerker mauern, verlegen Rohre, setzen Fenster. Der Architekt übersetzt den Wunsch in einen Plan, begleitet die Baustelle und nimmt ab. Er mauert nicht selbst.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-ofen">Bauherr</p>
      <p className="mt-1 text-sm">= Geschäftsführung. Zahlt. Entscheidet.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-ofen">Handwerker</p>
      <p className="mt-1 text-sm">= KI-Dienstleister. Liefern ihr Gewerk. Verkaufen ihre Leistung.</p>
    </div>
    <div className="bg-orange/10 border border-orange/30 rounded-2xl p-6">
      <p className="font-head font-bold text-orange">Architekt</p>
      <p className="mt-1 text-sm">= CAIO. Plant, steuert, prüft, nimmt ab. Mauert nicht.</p>
    </div>
  </div>
  <div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
    <p className="font-head font-bold text-ofen text-lg">In einem Satz</p>
    <p className="font-story italic text-xl mt-2 text-ofen">„Der CAIO ist der Architekt der KI im Unternehmen. Er plant, steuert, prüft und nimmt ab. Er mauert nicht."</p>
    <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm">
      <div>
        <p className="font-semibold">Er tut:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Fragt zuerst nach Unternehmensvision und KI-Strategie</li>
          <li>Baut Business Cases</li>
          <li>Prüft Risiko &amp; Recht — und wahrt die Daten-Souveränität</li>
          <li>Steuert externe Dienstleister: klare Anforderungen, klare Abnahme</li>
          <li>Identifiziert Effizienzpotenziale und fördert ihre Umsetzung</li>
          <li>Nimmt Ergebnisse ab</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Er tut nicht:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Kauft Tools, weil sie modern sind</li>
          <li>Verspricht Rendite ohne Zahl</li>
          <li>Programmiert die Lösung selbst</li>
          <li>Ersetzt Datenschutz &amp; Juristen</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mt-6 bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl">
    <p className="font-head font-bold text-lg">Die Handlungsfelder im Überblick</p>
    <div className="mt-3 flex flex-wrap gap-2 text-sm">
      <span className="px-3 py-1.5 rounded-full bg-white/10">Strategie &amp; Business Cases</span>
      <span className="px-3 py-1.5 rounded-full bg-white/10">Technologie &amp; Daten</span>
      <span className="px-3 py-1.5 rounded-full bg-white/10">Sicherheit, Recht &amp; Ethik</span>
      <span className="px-3 py-1.5 rounded-full bg-white/10">Integration &amp; Konnektivität</span>
      <span className="px-3 py-1.5 rounded-full bg-white/10">Customer Excellence</span>
      <span className="px-3 py-1.5 rounded-full bg-white/10">Menschen &amp; Change</span>
    </div>
    <p className="mt-4 text-sm text-mehl/80">Aufgaben, Pro &amp; Contra, Studienzahlen und Gehaltsspannen: <a className="underline underline-offset-2 font-semibold text-mehl" href="/berufsbild">das Berufsbild CAIO im Detail →</a></p>
  </div>
</section>

{/* 3. DIE LÜCKE */}
<section data-ort="Die Lücke" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Die Lücke</h2>
  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">Regulatorik</p>
      <p className="mt-2">Seit Februar 2025 verlangt der EU AI Act KI-Kompetenz. Die Pflicht steht im Gesetz. Die Umsetzung fehlt meist.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">Komplexität</p>
      <p className="mt-2">Der Anbietermarkt wächst schneller als das Urteil. Chefs kaufen zu spät. Oder das Falsche.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-orange">Talent</p>
      <p className="mt-2">Die Kompetenz sitzt schon im Haus. Sie heißt nur nicht CAIO. Das ändern wir.</p>
    </div>
  </div>
</section>

{/* 4. STUFENLEITER — Produktvergleichsmatrix */}
<section id="stufen" data-ort="Vier Stufen" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Vier Rollen. Ein Pfad.</h2>
  <p className="mt-3">Unser Rahmen: <strong>„Vom Beweis zur Verantwortung“</strong> — jede Stufe baut auf der vorherigen auf. Vergleichen Sie alle vier auf einen Blick.</p>

  {/* DESKTOP: Vergleichstabelle */}
  <div className="hidden md:block mt-8 bg-white rounded-2xl shadow-card overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead>
        <tr>
          <th className="p-4 bg-ofen text-mehl font-head">Vergleich</th>
          <th className="p-4 bg-sand text-espresso font-head">Professional<br /><span className="text-xs font-normal opacity-70">AIP</span></th>
          <th className="p-4 bg-orange text-espresso font-head">Officer<br /><span className="text-xs font-normal opacity-70">AIO</span></th>
          <th className="p-4 bg-licht text-mehl font-head">Architekt<br /><span className="text-xs font-normal opacity-70">AIA</span></th>
          <th className="p-4 bg-nacht text-mehl font-head">Chief Officer<br /><span className="text-xs font-normal opacity-70">CAIO</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Dauer</td>
          <td className="p-3 bg-sand/10">Über 32 Stunden</td>
          <td className="p-3 bg-orange/5">4–6 Wochen</td>
          <td className="p-3 bg-licht/5">Exakt 3 Monate</td>
          <td className="p-3 bg-nacht/5">Exakt 7 Monate (inkl. AIA)</td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Förderung</td>
          <td className="p-3 bg-sand/10"><strong>Bis 90 %</strong></td>
          <td className="p-3 bg-orange/5"><strong>Durchschn. 80 %</strong></td>
          <td className="p-3 bg-licht/5"><strong>Bis 100 %</strong></td>
          <td className="p-3 bg-nacht/5"><strong>Bis 100 %</strong></td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Schwerpunkt</td>
          <td className="p-3 bg-sand/10">Menschen &amp; Change</td>
          <td className="p-3 bg-orange/5">Wirtschaftlichkeit</td>
          <td className="p-3 bg-licht/5">Technologie &amp; Daten</td>
          <td className="p-3 bg-nacht/5">Sicherheit &amp; Recht</td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Format</td>
          <td className="p-3 bg-sand/10">Selbstlernen + Live-Termine + Praxisauftrag</td>
          <td className="p-3 bg-orange/5">Team-Qualifizierung: bis 3 Mitarbeitende aus einer Firma an konkreten Projekten</td>
          <td className="p-3 bg-licht/5">Projektarbeit am echten Fall (KI-Bäckerei)</td>
          <td className="p-3 bg-nacht/5">Governance &amp; Portfolio, baut auf Architekt auf</td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Nachweis</td>
          <td className="p-3 bg-sand/10">Basis-Zertifikat</td>
          <td className="p-3 bg-orange/5">Geprüfter Business Case</td>
          <td className="p-3 bg-licht/5">Meisterstück-Projekt</td>
          <td className="p-3 bg-nacht/5">CAIO-Zertifikat</td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Vorteil<br />Mitarbeiter</td>
          <td className="p-3 bg-sand/10 text-xs">KI-Grundverständnis, Art.-4-konform, Handlungssicherheit im Alltag, 1:1-Call inklusive</td>
          <td className="p-3 bg-orange/5 text-xs">Business Cases priorisieren, Dienstleister beurteilen, Projektvorschläge strukturieren, im Team arbeiten</td>
          <td className="p-3 bg-licht/5 text-xs">Echte Projekte planen, umsetzen und messen; Ergebnis-Notizen schreiben, die überzeugen</td>
          <td className="p-3 bg-nacht/5 text-xs">Governance-Verantwortung tragen, Recht und Risiko ordnen, Geschäftsführung beraten, KI-Portfolio steuern</td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Vorteil<br />Unternehmen</td>
          <td className="p-3 bg-sand/10 text-xs">Belegschaft wird Art.-4-konform; gemeinsame Sprache; geringe Einstiegshürde</td>
          <td className="p-3 bg-orange/5 text-xs">Bis 3 Mitarbeitende qualifizieren sich parallel an internen Projekten; Fehlkäufe sinken</td>
          <td className="p-3 bg-licht/5 text-xs">Ein echtes KI-Projekt entsteht mit messbarem Ergebnis (Vorher/Nachher)</td>
          <td className="p-3 bg-nacht/5 text-xs">Verankerte KI-Verantwortung im Haus; unabhängig von Agenturen; Rechtssicherheit</td>
        </tr>
        <tr>
          <td className="p-3 font-semibold bg-mehl/50">Bonus</td>
          <td className="p-3 bg-sand/10 text-xs">1:1-KI-Consulting-Call während der Betreuung</td>
          <td className="p-3 bg-orange/5 text-xs">Arbeit an konkreten Projekten der eigenen Firma</td>
          <td className="p-3 bg-licht/5 text-xs">Meisterstück dokumentiert als Arbeitsprobe</td>
          <td className="p-3 bg-nacht/5 text-xs">Chief AI Officer enthält den vollständigen AI Architekten</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* MOBIL: Gestapelte Karten mit gleichen Kategorien */}
  <div className="md:hidden mt-8 grid gap-4">
    <details className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-5" open>
      <summary className="font-head font-bold text-ofen text-lg">Professional <span className="text-sm opacity-60">AIP</span></summary>
      <div className="mt-4 space-y-2 text-sm">
        <p><b>Dauer:</b> Über 32 Stunden</p>
        <p><b>Förderung:</b> Bis 90 %</p>
        <p><b>Schwerpunkt:</b> Menschen &amp; Change</p>
        <p><b>Nachweis:</b> Basis-Zertifikat</p>
        <p><b>Vorteil Mitarbeiter:</b> KI-Grundverständnis, Handlungssicherheit, 1:1-Call inklusive</p>
        <p><b>Vorteil Unternehmen:</b> Belegschaft wird Art.-4-konform, gemeinsame Sprache</p>
        <p><b>Bonus:</b> 1:1-KI-Consulting-Call</p>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card border-l-4 border-orange p-5">
      <summary className="font-head font-bold text-ofen text-lg">Officer <span className="text-sm opacity-60">AIO</span></summary>
      <div className="mt-4 space-y-2 text-sm">
        <p><b>Dauer:</b> 4–6 Wochen</p>
        <p><b>Förderung:</b> Durchschn. 80 %</p>
        <p><b>Schwerpunkt:</b> Wirtschaftlichkeit</p>
        <p><b>Format:</b> Team-Qualifizierung (bis 3 Mitarbeitende)</p>
        <p><b>Nachweis:</b> Geprüfter Business Case</p>
        <p><b>Vorteil Mitarbeiter:</b> Business Cases priorisieren, Dienstleister beurteilen</p>
        <p><b>Vorteil Unternehmen:</b> 3 Mitarbeitende parallel qualifizieren an internen Projekten</p>
        <p><b>Bonus:</b> Arbeit an konkreten Projekten der eigenen Firma</p>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card border-l-4 border-licht p-5">
      <summary className="font-head font-bold text-ofen text-lg">Architekt <span className="text-sm opacity-60">AIA</span></summary>
      <div className="mt-4 space-y-2 text-sm">
        <p><b>Dauer:</b> Exakt 3 Monate</p>
        <p><b>Förderung:</b> Bis 100 %</p>
        <p><b>Schwerpunkt:</b> Technologie &amp; Daten</p>
        <p><b>Nachweis:</b> Meisterstück-Projekt</p>
        <p><b>Vorteil Mitarbeiter:</b> Echte Projekte planen, umsetzen und messen</p>
        <p><b>Vorteil Unternehmen:</b> Ein echtes KI-Projekt entsteht mit messbarem Ergebnis</p>
        <p><b>Bonus:</b> Meisterstück als Arbeitsprobe dokumentiert</p>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card border-l-4 border-nacht p-5">
      <summary className="font-head font-bold text-ofen text-lg">Chief Officer <span className="text-sm opacity-60">CAIO</span></summary>
      <div className="mt-4 space-y-2 text-sm">
        <p><b>Dauer:</b> Exakt 7 Monate (inkl. AIA)</p>
        <p><b>Förderung:</b> Bis 100 %</p>
        <p><b>Schwerpunkt:</b> Sicherheit &amp; Recht</p>
        <p><b>Nachweis:</b> CAIO-Zertifikat</p>
        <p><b>Vorteil Mitarbeiter:</b> Governance-Verantwortung, Geschäftsführung beraten</p>
        <p><b>Vorteil Unternehmen:</b> Verankerte KI-Verantwortung, unabhängig von Agenturen</p>
        <p><b>Bonus:</b> Enthält den vollständigen AI Architekten</p>
      </div>
    </details>
  </div>

  {/* CTA direkt unter der Matrix */}
  <div className="mt-8 bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl text-center">
    <p className="font-head font-bold text-lg">Welche Rolle passt zu Ihnen?</p>
    <p className="mt-2 text-sm text-mehl/80">20 Minuten. Kostenlos. Fördermittel-Check. Schriftliche Empfehlung.</p>
    <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
      <a href="#test" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-xl bg-orange text-espresso font-head font-bold shadow-card">Karriere-Booster-Gespräch buchen</a>
      <a href="#test" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-xl bg-mehl text-espresso font-head font-bold shadow-card">Selbsttest — 2 Minuten</a>
    </div>
  </div>
</section>

{/* PROJEKTE: DIREKTBEAUFTRAGUNG (nach Stufen) */}
<section id="projekte" data-ort="Projekte" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Nicht warten, bis das Team bereit ist: Projekte direkt beauftragen</h2>
  <p className="mt-3 max-w-[76ch] text-[15px] text-espresso/85">Ausbildung baut Kompetenz auf — und wer sofort Ergebnisse braucht, beauftragt das Ergebnis direkt: Das CAIO Institut setzt Digitalisierungs- und KI-Projekte um, von der KI-Roadmap über die Art.-4-Pflichtschulung bis zur Vernetzung Ihrer Datensilos. Weil wir täglich ausbilden, können wir dafür auch passende Kandidaten benennen — Lernen und Umsetzung aus einem Haus. Beweis statt Versprechen: <b>Deal Maker CRM</b>, <b>Zuschussradar</b> und diese Plattform selbst sind eigene Entwicklungen — im laufenden Betrieb.</p>
  <div className="mt-5 grid gap-3 sm:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-5"><p className="font-head font-bold text-ofen">Roadmap &amp; Umsetzung</p><p className="mt-1 text-sm text-espresso/70">KI-Roadmap entwerfen, innerbetriebliche Digitalisierung, KI in bestehende Prozesse — messbar.</p></div>
    <div className="bg-white rounded-2xl shadow-card p-5"><p className="font-head font-bold text-ofen">Schulung (EU AI Act)</p><p className="mt-1 text-sm text-espresso/70">Benutzer- und Pflichtschulung nach Art. 4 — mit Nachweis für Ihre Belegschaft.</p></div>
    <div className="bg-white rounded-2xl shadow-card p-5"><p className="font-head font-bold text-ofen">Systeme &amp; Integration</p><p className="mt-1 text-sm text-espresso/70">Projektmanagementsysteme, CRM, eigene Plattformen und Kunden-Integration.</p></div>
    <div className="bg-white rounded-2xl shadow-card p-5"><p className="font-head font-bold text-ofen">Vernetzung</p><p className="mt-1 text-sm text-espresso/70">Datensilos und verteilte Softwaresysteme verbinden — ein Datenfluss statt fünf Inseln.</p></div>
  </div>
  <div className="mt-6">
    <a href="/direktbeauftragung" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-espresso text-mehl font-head font-bold shadow-card">Direktbeauftragung — Ihr Projekt anfragen →</a>
  </div>
</section>

{/* 4b. FÖRDERFÄHIGKEIT */}
<div className="max-w-[1120px] mx-auto px-5 md:px-8 pb-6">
  <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 border-l-4 border-orange">
    <p className="font-head font-bold text-ofen text-lg">Förderfähigkeit</p>
    <p className="mt-2 text-[15px] max-w-[80ch]">Alle Angebote sind förderfähig. S1: bis 90 %. S2: durchschnittlich 80 % (als Team-Qualifizierung). S3+S4: bis 100 % für Beschäftigte. Wie hoch der Zuschuss in Ihrem Fall ausfällt, ermitteln wir im individuellen Gespräch — 30 bis 100&nbsp;% Zuschuss sind für viele Kunden möglich.</p>
  </div>
</div>

{/* 5. KOMPETENZMATRIX */}
<section data-ort="Kompetenzmatrix" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Sechs Dimensionen. Vier Tiefen.</h2>
  <div className="hidden md:block mt-6 bg-white rounded-2xl shadow-card overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="bg-ofen text-mehl font-head">
        <tr><th className="p-4 bg-ofen">Dimension</th><th className="p-4 bg-sand text-espresso">Professional<br /><span className="text-xs font-normal">AIP</span></th><th className="p-4 bg-orange text-espresso">Officer<br /><span className="text-xs font-normal">AIO</span></th><th className="p-4 bg-licht text-mehl">Architekt<br /><span className="text-xs font-normal">AIA</span></th><th className="p-4 bg-nacht text-mehl">Chief Officer<br /><span className="text-xs font-normal">CAIO</span></th></tr>
      </thead>
      <tbody className="[&_td]:p-4 [&_tr]:border-t [&_tr]:border-espresso/10">
        <tr><td className="font-semibold">Wirtschaftlichkeit</td><td className="bg-sand/15">Nutzen an Beispielen einschätzen</td><td className="bg-orange/30 font-semibold">★ Business Cases priorisieren</td><td className="bg-licht/15">Business Case bauen</td><td className="bg-nacht/15">Portfolio steuern</td></tr>
        <tr><td className="font-semibold">Technologie &amp; Daten</td><td className="bg-sand/15">Grundbegriffe</td><td className="bg-orange/15">Machbarkeit einschätzen</td><td className="bg-licht/30 font-semibold">★ Mitgestalten</td><td className="bg-nacht/15">Roadmap führen</td></tr>
        <tr><td className="font-semibold">Sicherheit &amp; Recht</td><td className="bg-sand/15">Risiken kennen</td><td className="bg-orange/15">Red Flags sehen</td><td className="bg-licht/15">Compliance einbauen</td><td className="bg-nacht/30 font-semibold">★ Regeln setzen und Einhaltung prüfen</td></tr>
        <tr><td className="font-semibold">Konnektivität</td><td className="bg-sand/15">Schnittstellen verstehen</td><td className="bg-orange/15">Bedarf benennen</td><td className="bg-licht/15">Integration gestalten</td><td className="bg-nacht/15">Landschaft orchestrieren</td></tr>
        <tr><td className="font-semibold">Customer Excellence</td><td className="bg-sand/15">Nutzen denken</td><td className="bg-orange/15">Versprechen bewerten</td><td className="bg-licht/15">Erlebnis gestalten</td><td className="bg-nacht/15">Kundenerlebnis messbar machen</td></tr>
        <tr><td className="font-semibold">Menschen &amp; Change</td><td className="bg-sand/50 font-semibold">★ Potenziale identifizieren &amp; Chancen begreiflich machen</td><td className="bg-orange/15">Adoptionsrisiken sehen</td><td className="bg-licht/15">Team befähigen</td><td className="bg-nacht/15">Kultur steuern</td></tr>
      </tbody>
    </table>
  </div>
  <div className="md:hidden mt-6 grid gap-3">
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wirtschaftlichkeit</summary>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-full bg-sand/60">Nutzen einschätzen</span>
        <span className="px-3 py-1.5 rounded-full bg-orange/20 ring-2 ring-orange/70 font-semibold">★ Cases priorisieren</span>
        <span className="px-3 py-1.5 rounded-full bg-licht/25">Case bauen</span>
        <span className="px-3 py-1.5 rounded-full bg-nacht text-mehl">steuern</span>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Technologie &amp; Daten</summary>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-full bg-sand/60">Grundbegriffe</span>
        <span className="px-3 py-1.5 rounded-full bg-orange/20">Machbarkeit</span>
        <span className="px-3 py-1.5 rounded-full bg-licht/25 ring-2 ring-orange/70 font-semibold">★ mitgestalten</span>
        <span className="px-3 py-1.5 rounded-full bg-nacht text-mehl">Roadmap</span>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Sicherheit &amp; Recht</summary>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-full bg-sand/60">Risiken kennen</span>
        <span className="px-3 py-1.5 rounded-full bg-orange/20">Red Flags</span>
        <span className="px-3 py-1.5 rounded-full bg-licht/25">Compliance</span>
        <span className="px-3 py-1.5 rounded-full bg-nacht text-mehl ring-2 ring-orange/70 font-semibold">★ Regeln setzen</span>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Konnektivität</summary>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-full bg-sand/60">Schnittstellen</span>
        <span className="px-3 py-1.5 rounded-full bg-orange/20">Bedarf</span>
        <span className="px-3 py-1.5 rounded-full bg-licht/25">Integration</span>
        <span className="px-3 py-1.5 rounded-full bg-nacht text-mehl">Landschaft</span>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Customer Excellence</summary>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-full bg-sand/60">Nutzen</span>
        <span className="px-3 py-1.5 rounded-full bg-orange/20">Versprechen</span>
        <span className="px-3 py-1.5 rounded-full bg-licht/25">Erlebnis</span>
        <span className="px-3 py-1.5 rounded-full bg-nacht text-mehl">Kundenerlebnis messbar</span>
      </div>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Menschen &amp; Change</summary>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-full bg-sand/60 ring-2 ring-orange/70 font-semibold">★ Potenziale &amp; Chancen begreiflich machen</span>
        <span className="px-3 py-1.5 rounded-full bg-orange/20">Risiken</span>
        <span className="px-3 py-1.5 rounded-full bg-licht/25">befähigen</span>
        <span className="px-3 py-1.5 rounded-full bg-nacht text-mehl">Kultur</span>
      </div>
    </details>
  </div>
  <p className="mt-4 text-sm text-espresso/60">★ = großer Schwerpunkt der jeweiligen Stufe: AIP → Menschen &amp; Change · AIO → Wirtschaftlichkeit · AIA → Technologie &amp; Daten · CAIO → Sicherheit &amp; Recht.</p>
  <p className="mt-3 text-sm"><a className="font-semibold text-ofen underline underline-offset-2" href="#stufen">Passt zu dir? Die vier Stufen im Detail ansehen →</a></p>
</section>

{/* 5b. SPANNUNGSFELD */}
<section id="spannungsfeld" data-ort="Spannungsfeld" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Das Spannungsfeld</h2>
  <p className="mt-3 max-w-[75ch]">Jedes KI-Vorhaben wird von mehreren Kräften gleichzeitig gezogen. Wer nur einer folgt, scheitert an der anderen. Der CAIO hält die Spannung aus — und macht sie berechenbar.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-orange">
      <p className="font-head font-bold text-ofen">Performance-Wunsch</p>
      <p className="mt-1 text-sm font-semibold text-orange">zieht nach: Tempo</p>
      <p className="mt-2 text-[15px]">Digitalisierung soll liefern: schneller, effizienter, mehr Output. Das Tempo verführt zu Freitools und ungeprüftem Datenzugriff.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-ofen">
      <p className="font-head font-bold text-ofen">DSGVO</p>
      <p className="mt-1 text-sm font-semibold text-ofen">setzt Grenzen: Datenschutz</p>
      <p className="mt-2 text-[15px]">Datensparsamkeit, Rechtsgrundlage, Auftragsverarbeitung. Kundendaten gehören nicht in jedes Tool — auch nicht in das schnellste.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-nacht">
      <p className="font-head font-bold text-ofen">EU AI Act</p>
      <p className="mt-1 text-sm font-semibold text-nacht">setzt Grenzen: Risiko &amp; Pflicht</p>
      <p className="mt-2 text-[15px]">Risikoklasse prüfen, Transparenz herstellen, KI-Kompetenz nachweisen (Art. 4, seit Februar 2025). Hochrisiko-Anwendungen brauchen Kontrollen.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-licht">
      <p className="font-head font-bold text-ofen">US CLOUD Act</p>
      <p className="mt-1 text-sm font-semibold text-licht">setzt Grenzen: Datenzugriff</p>
      <p className="mt-2 text-[15px]">US-Behörden können von US-Anbietern gespeicherte Daten verlangen — auch außerhalb der USA. Die Cloud-Wahl ist eine Datenschutz-Entscheidung.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-sand">
      <p className="font-head font-bold text-ofen">Kundenwünsche</p>
      <p className="mt-1 text-sm font-semibold text-licht">ziehen nach: Erlebnis</p>
      <p className="mt-2 text-[15px]">Kunden erwarten Personalisierung, Geschwindigkeit, Erreichbarkeit. Dieselben Kunden erwarten Datensparsamkeit und Transparenz. Beides zugleich.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-espresso/30">
      <p className="font-head font-bold text-ofen">Wirtschaftlichkeit</p>
      <p className="mt-1 text-sm font-semibold text-espresso/70">setzt Grenzen: Budget</p>
      <p className="mt-2 text-[15px]">Jeder Euro für KI muss sich rechnen. Compliance und Sicherheit kosten Geld — Fehlkäufe, Stillstand und Bußgelder kosten mehr.</p>
    </div>
  </div>
  <div className="mt-4 bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl">
    <p className="font-head font-bold text-lg">Die Auflösung: Klartext statt Schwarz-Weiß</p>
    <div className="mt-3 grid gap-3 md:grid-cols-4 text-sm">
      <p><strong className="font-head">1 · Ziel zuerst.</strong> Was bringt es — messbar, ab wann?</p>
      <p><strong className="font-head">2 · Risiko einordnen.</strong> AI-Act-Klasse, DSGVO, Daten-Souveränität.</p>
      <p><strong className="font-head">3 · Anbieter steuern.</strong> Wo liegen die Daten? Wer kann zugreifen — und wer entscheidet?</p>
      <p><strong className="font-head">4 · Dokumentieren.</strong> Entscheidungen nachvollziehbar machen.</p>
    </div>
    <p className="mt-4 text-sm text-mehl/80">Begriffe wie DSGVO, CLOUD Act oder Risikoklassen erklärt unser <a className="underline underline-offset-2 font-semibold text-mehl" href="/glossar">Glossar →</a></p>
  </div>
  <p className="mt-4 text-sm"><a className="font-semibold text-ofen underline underline-offset-2" href="#test">Unklar, welche Regeln Ihr Vorhaben betreffen? Kostenfreies Erstgespräch anfragen →</a></p>
</section>

{/* 5c. VERGLEICH */}
<section id="vergleich" data-ort="Vergleich" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Drei Wege zur KI-Kompetenz</h2>
  <p className="mt-3 max-w-[75ch]">Es gibt mehrere Wege. Sie unterscheiden sich vor allem darin, was am Ende in Ihrem Unternehmen bleibt.</p>
  <div className="hidden md:block mt-6 bg-white rounded-2xl shadow-card overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="bg-ofen text-mehl font-head">
        <tr><th className="p-4 bg-ofen">Kriterium</th><th className="p-4 bg-sand/70 text-espresso">Tool-Schulung</th><th className="p-4 bg-orange/70 text-espresso">KI-Agentur</th><th className="p-4 bg-nacht">CAIO Institut</th></tr>
      </thead>
      <tbody className="[&_td]:p-4 [&_tr]:border-t [&_tr]:border-espresso/10">
        <tr><td className="font-semibold">Ziel</td><td>Bedienung einzelner Tools</td><td>Gelieferte Lösungen</td><td className="bg-nacht/15 font-semibold">Eigenständige Urteils- und Umsetzungskompetenz</td></tr>
        <tr><td className="font-semibold">Was im Haus bleibt</td><td>Tool-Wissen, das veraltet</td><td>Abhängigkeit, Blackbox</td><td className="bg-nacht/15 font-semibold">Kompetenz — der Architekt statt des Handwerkers</td></tr>
        <tr><td className="font-semibold">Zeithorizont</td><td>Tage</td><td>Wochen bis Monate</td><td className="bg-nacht/15 font-semibold">Gestuft: 32+ Stunden bis 12 Monate</td></tr>
        <tr><td className="font-semibold">Förderfähigkeit</td><td>Selten</td><td>Selten</td><td className="bg-nacht/15 font-semibold">30–100 % Zuschuss möglich (AZAV-zertifiziert)</td></tr>
        <tr><td className="font-semibold">Ergebnis</td><td>Zertifikat für ein Programm</td><td>Fremd umgesetztes Projekt</td><td className="bg-nacht/15 font-semibold">Nachweise je Stufe: AIP · AIO · AIA · CAIO</td></tr>
      </tbody>
    </table>
  </div>
  <div className="md:hidden mt-6 grid gap-3">
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Tool-Schulung</summary>
      <ul className="mt-2 text-sm space-y-1 text-espresso/80 list-disc pl-5">
        <li>Ziel: Bedienung einzelner Tools</li><li>Bleibt: Tool-Wissen, das veraltet</li><li>Zeit: Tage</li><li>Förderung: selten</li>
      </ul>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">KI-Agentur</summary>
      <ul className="mt-2 text-sm space-y-1 text-espresso/80 list-disc pl-5">
        <li>Ziel: gelieferte Lösungen</li><li>Bleibt: Abhängigkeit, Blackbox</li><li>Zeit: Wochen bis Monate</li><li>Förderung: selten</li>
      </ul>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5 border-2 border-nacht/30">
      <summary className="font-semibold text-ofen">CAIO Institut</summary>
      <ul className="mt-2 text-sm space-y-1 text-espresso/80 list-disc pl-5">
        <li>Ziel: eigenständige Kompetenz</li><li>Bleibt: der Architekt statt des Handwerkers</li><li>Zeit: gestuft, 32+ Stunden bis 12 Monate</li><li>Förderung: 30–100 % möglich</li><li>Nachweise: AIP · AIO · AIA · CAIO</li>
      </ul>
    </details>
  </div>
</section>

{/* 6. ÖKOSYSTEM */}
<section data-ort="Ökosystem" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Unser Rückgrat</h2>
  <ul className="mt-6 divide-y divide-espresso/10 rounded-2xl bg-white shadow-card">
    <li className="p-5"><strong className="font-head">Conversion-Day</strong> – bringt die Menschen zusammen.</li>
    <li className="p-5"><strong className="font-head">Wissensreich Academy</strong> – bringt ihnen das Handwerk bei.</li>
    <li className="p-5"><strong className="font-head">Deal-Maker</strong> – zeigt, was Unternehmen wert sind.</li>
    <li className="p-5"><strong className="font-head">Grenzenlos</strong> – trägt das Modell über Grenzen.</li>
    <li className="p-5"><strong className="font-head">KI-Bäckerei</strong> – zeigt bei all dem: So sieht Praxis aus.</li>
  </ul>
  <p className="mt-3 text-[15px] text-espresso/70">Hinter all dem steht die Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd. — verankert in Deutschland, der Schweiz und Irland.</p>
  <p className="mt-4 text-sm"><a className="font-semibold text-ofen underline underline-offset-2" href="#test">Bereit durchzustarten? Selbsttest — 2 Minuten →</a></p>
</section>

{/* 6b. STIMMEN & PRAXISFALL */}
<section id="stimmen" data-ort="Stimmen" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Stimmen &amp; Praxisfall</h2>
  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <figure className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
      <blockquote className="text-[15px] italic">„Der Kurs und die Unterstützung war wirklich top: freundlich, schnell und jederzeit erreichbar."</blockquote>
      <figcaption className="mt-3 text-sm text-espresso/60 mt-auto">Thomas Thaller · Google-Rezension zur Wissensreich Academy</figcaption>
    </figure>
    <figure className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
      <blockquote className="text-[15px] italic">„Die Unterstützung war grandios, ich wurde wunderbar durch die (komplizierten) Antragsprozesse geführt und begleitet."</blockquote>
      <figcaption className="mt-3 text-sm text-espresso/60 mt-auto">Augner Seminare · Google-Rezension zur Wissensreich Academy</figcaption>
    </figure>
    <figure className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
      <blockquote className="text-[15px] italic">„Die Unterstützung beim Förderantrag war großartig — von der Antragstellung bis zur Auszahlung."</blockquote>
      <figcaption className="mt-3 text-sm text-espresso/60 mt-auto">Lantijn Zijlstra · Google-Rezension zur Wissensreich Academy</figcaption>
    </figure>
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-card border-l-4 border-sand p-6 md:p-8">
    <p className="font-head font-bold text-ofen text-lg">Der Praxisfall: die KI-Bäckerei</p>
    <p className="mt-2 text-[15px] max-w-[80ch]">Alle Stufen arbeiten an einem echten Fall: einer Bäckerei-Gruppe, deren Einkauf die Bestellprognose mit KI verbessert. Das Ergebnis: weniger Ausschuss, weniger leere Regale — dokumentiert, mit Zahlen, von einer Fachkraft ohne formalen KI-Titel. Genau diese Arbeit macht das Institut sichtbar, benennbar und wiederholbar.</p>
  </div>
</section>

{/* 6c. PASST ZU DIR? */}
<section id="passt" data-ort="Passt zu dir?" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Passt das Institut zu dir?</h2>
  <p className="mt-3 max-w-[75ch]">Vier ehrliche Fragen. Ehrlich beantwortet — in beide Richtungen.</p>
  <div className="mt-6 grid gap-3 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-5 flex gap-3"><span className="font-head font-bold text-orange">1</span><p className="text-[15px]">Du willst verstehen und entscheiden — nicht nur bedienen.</p></div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex gap-3"><span className="font-head font-bold text-orange">2</span><p className="text-[15px]">Dein Unternehmen hat reale Aufgaben, an denen du arbeiten kannst.</p></div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex gap-3"><span className="font-head font-bold text-orange">3</span><p className="text-[15px]">Du kannst 4–6 Stunden pro Woche investieren.</p></div>
    <div className="bg-white rounded-2xl shadow-card p-5 flex gap-3"><span className="font-head font-bold text-orange">4</span><p className="text-[15px]">Deine Führung unterstützt das Vorhaben.</p></div>
  </div>
  <p className="mt-4 text-[15px]"><strong>Viermal Ja?</strong> Dann starte mit dem Selbsttest. <strong>Null bis zweimal Ja?</strong> Dann kläre im Erstgespräch, ob jetzt der richtige Zeitpunkt ist — auch das ist ein Ergebnis.</p>
</section>

{/* 6d. BUCH-TEASER (Tripwire-Einstieg) */}
<section id="buch-teaser" data-ort="Das Buch" className="max-w-[1120px] mx-auto px-5 md:px-8 py-6">
  <div className="bg-white rounded-2xl shadow-card border-l-4 border-sand p-6 flex flex-col md:flex-row md:items-center gap-4">
    <div className="flex-1">
      <p className="font-head font-bold text-ofen text-lg">Noch nicht bereit für eine Stufe? Starte mit dem Buch.</p>
      <p className="mt-1 text-[15px] max-w-[75ch]">„Das CAIO-Handbuch": 18 Kapitel, 8 Praxis-Anhänge, 1 Begleit-Workbook — der Beweis-Fahrplan zur CAIO-Rolle in 30 Tagen, als Klammer um unsere Ausbildung. Einführungspreis <strong>17,50&nbsp;€</strong> — <strong>doppelt anrechenbar (35&nbsp;€)</strong> auf Stufe 1.</p>
    </div>
    <a href="/buch" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold flex-shrink-0">Jetzt für 17,50 € sichern →</a>
  </div>
</section>

{/* 7. SELBSTTEST */}
<section id="test" data-ort="Selbsttest" className="max-w-[640px] mx-auto px-5 md:px-8 py-12">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Wie viel KI-Kompetenz steckt schon in mir?</h2>
  <p className="mt-2">Fünf Fragen. 2 Minuten. Direkt orientiert sein.</p>
  <Selbsttest />
  <div className="mt-6 bg-white rounded-2xl shadow-card p-6 border-t-4 border-orange">
    <p className="font-head font-bold text-ofen text-lg">Lieber direkt sprechen?</p>
    <p className="mt-1 text-[15px]">Kein Test, einfach Kontakt. Wähle deine priorisierte Weiterbildung — wir melden uns.</p>
    <KontaktForm />
  </div>
  <div className="mt-6 bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl">
    <p className="font-head font-bold text-lg">So läuft das kostenfreie Erstgespräch</p>
    <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
      <p><strong className="font-head">1 · Anfrage.</strong> Formular oben oder direkt an kontakt@caio-institut.de.</p>
      <p><strong className="font-head">2 · Termin.</strong> 20 Minuten Telefon oder Video — passend zu deinem Kalender.</p>
      <p><strong className="font-head">3 · Ergebnis.</strong> Du erhältst schriftlich: Empfehlung, Förder-Check, nächste Schritte.</p>
    </div>
    <div className="mt-5 pt-4 border-t border-mehl/20">
      <p className="text-sm font-semibold">Das nimmst du mit — kostenfrei und unverbindlich:</p>
      <ul className="mt-2 grid gap-1.5 text-sm list-disc pl-5">
        <li>Stufen-Empfehlung: AIP, AIO, AIA oder CAIO — inklusive Begründung</li>
        <li>Förder-Check: deine individuelle Quote zwischen 30 und 100 %</li>
        <li>Realistischer Zeitplan für dein Vorhaben</li>
        <li>Die drei nächsten Schritte — schriftlich</li>
      </ul>
    </div>
  </div>
</section>

{/* 8. FAQ */}
<section id="faq" data-ort="FAQ" className="max-w-[760px] mx-auto px-5 md:px-8 py-12">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Häufige Fragen</h2>
  <div className="mt-6 grid gap-3">
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Was bedeutet CAIO?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Chief AI Officer — auf Deutsch: der leitende Beauftragte für Künstliche Intelligenz. Chief = leitend, Teil der C-Ebene. AI = Künstliche Intelligenz. Officer = Amtsträger mit Verantwortung. Er plant, steuert, prüft und nimmt ab — er mauert nicht selbst. <a className="underline underline-offset-2 text-ofen" href="/berufsbild">Zum Berufsbild →</a></p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Für wen ist das CAIO Institut?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Für Fachkräfte mit Technik-Affinität, Teamleiter:innen und angehende KI-Verantwortliche — und für deren Chefs. Für Menschen wie René, die die Arbeit bereits machen. Und für Unternehmen, die aus der KI-Pflicht einen Vorsprung machen wollen.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Muss ich Vorkenntnisse mitbringen?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Für Stufe 1 (AI Professional, AIP) brauchst du keine Vorkenntnisse. Für Stufe 2 (AI Officer, AIO) genügt Stufe 1 — oder 6+ Punkte im Selbsttest.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wie viel Zeit muss ich einplanen?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Stufe 1: über 32 Stunden Fundament. Stufe 2: 4–6 Wochen mit 4–6 Stunden pro Woche. Stufe 3: 3 Monate (exakt) am echten Fall. Stufe 4: 7 Monate (inkl. AIA) mit Governance-Verantwortung.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Welchen Schwerpunkt hat welche Stufe?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Jede Stufe erzwingt einen großen Schwerpunkt: AIP → Menschen &amp; Change · AIO → Wirtschaftlichkeit · AIA → Technologie &amp; Daten · CAIO → Sicherheit &amp; Recht. Alle sechs Dimensionen werden in jeder Stufe mitentwickelt.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Sind die Angebote förderfähig?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja, grundsätzlich — je nach Zielgruppe und Programm sind 30 bis 100 % Zuschuss möglich. Die individuelle Quote ermitteln wir im kostenfreien Erstgespräch. Das Institut ist eine Gemeinschaftsinitiative (WissensReich Academy · Eskalator AG · Grenzenlos Ltd., Deutschland–Schweiz–Irland); Träger und Ansprechpartner für Deutschland ist die AZAV-zertifizierte Wissensreich Academy — bei begleiteten Anträgen liegt die Bewilligungsquote bei bis zu 95 %.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Welche Nachweise erhalte ich?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Jede Stufe endet mit einem Nachweis: Basis-Zertifikat (AIP), geprüfter Business Case (AIO), Meisterstück-Projekt (AIA) und das CAIO-Zertifikat in Stufe 4.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Was hat der EU AI Act damit zu tun?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Artikel 4 verlangt seit Februar 2025 KI-Kompetenz in den Belegschaften. Stufe 1 erfüllt diese Basis. Wir machen aus der Pflicht einen Vorsprung — nicht umgekehrt.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wie löse ich den Konflikt zwischen KI-Einsatz und Datenschutz?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Indem man ihn nicht leugnet, sondern managt. Jedes Vorhaben steht im Spannungsfeld von Performance-Wunsch, DSGVO, EU AI Act, US CLOUD Act, Kundenwünschen und Wirtschaftlichkeit. Unsere Antwort: Ziel zuerst, Risiko einordnen, Anbieter prüfen (Wo liegen die Daten?), dokumentieren. Details zeigt unsere <a className="underline underline-offset-2 text-ofen" href="#spannungsfeld">Spannungsfeld-Sektion</a>.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Für wen ist das Institut nicht geeignet?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Für alle, die fertige Lösungen kaufen wollen, statt Kompetenz aufzubauen. Wer eine Umsetzung einkauft, ist bei einer Agentur besser aufgehoben — das sagen wir offen.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Was kostet die Teilnahme?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Die Kosten hängen von Stufe und Förderung ab. Deshalb klären wir beides im Erstgespräch: erst der Zuschuss, dann das Budget. So planst du mit echten Zahlen.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Gibt es einen kostenlosen Einstieg?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja, zwei: den Selbsttest (2 Minuten, sofortiges Ergebnis mit Kurs-Empfehlung) und das kostenfreie Erstgespräch mit Stufen-Empfehlung und Förder-Check.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wer steht hinter dem CAIO Institut?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd. — mit Partnern in Deutschland, der Schweiz und Irland. Ansprechpartner für Deutschland ist die WissensReich Academy: AZAV-zertifiziert (ISO 9001 &amp; ISO 56002), über 10 Jahre Fördermittel-Expertise, bis 95 % Bewilligungsquote bei begleiteten Anträgen, 13 Dozenten und Praxis-Experten. <a className="underline underline-offset-2 text-ofen" href="/ueber-uns">Leitbild, Zahlen und Menschen →</a></p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Können ganze Teams oder Unternehmen teilnehmen?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja. Firmen qualifizieren einzelne Mitarbeitende oder ganze Teams — von der AIP-Basisqualifizierung bis zur CAIO-Verantwortung. Sprechen Sie uns an, wir skizzieren den Pfad.</p>
    </details>
  </div>
</section>

{/* 9. SCHLUSS-CTA */}
<section id="schluss" data-ort="Jetzt starten" className="max-w-[1120px] mx-auto px-5 md:px-8 pb-14">
  <div className="bg-orange rounded-2xl shadow-card p-6 md:p-10 text-center">
    <p className="font-head font-bold text-espresso text-[clamp(22px,4vw,32px)] leading-tight">Bereit, aus KI-Pflicht KI-Kompetenz zu machen?</p>
    <p className="mt-3 text-espresso/80 max-w-[72ch] mx-auto">Zwei Minuten Selbsttest — oder direkt das kostenfreie Erstgespräch mit Stufen-Empfehlung und Förder-Check.</p>
    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <a href="#test" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-xl bg-espresso text-mehl font-head font-bold shadow-card">Selbsttest starten — 2 Minuten</a>
      <a href="#test" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-xl bg-mehl text-espresso font-head font-bold shadow-card">Erstgespräch anfragen</a>
    </div>
    <p className="mt-4 text-sm text-espresso/70">Förderfähig: 30–100 % Zuschuss · unverbindlich · kontakt@caio-institut.de</p>
  </div>
</section>
      <AiBubble />

      </>
    </PageLayout>
  );
}
