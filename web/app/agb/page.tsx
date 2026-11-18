import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";


export const metadata: Metadata = {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    description: "AGB des CAIO Instituts mit Verbraucherklauseln, Widerrufsrecht und Streitbeilegung.",
};

export default function Page() {
  return (
    <PageLayout ort="AGB" home={false} adStyle={false} minimal={true} altcha={false}>
      <>

<h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,42px)]">Allgemeine Geschäftsbedingungen</h1>
<p className="mt-2 text-espresso/60">Stand: November 2026</p>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 1 Geltungsbereich</h2>
<p className="mt-2 text-[15px]">Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Wissensreich Academy UG (haftungsbeschränkt), Weinsbergstraße 190, 50825 Köln (nachfolgend „Anbieterin"), und ihren Kundinnen und Kunden (nachfolgend „Vertragspartner").</p>
<p className="mt-2 text-[15px]">Vertragspartner können sowohl Unternehmer (§ 14 BGB) als auch Verbraucher (§ 13 BGB) sein. Für Verbraucher gelten zusätzlich die gesetzlichen Vorschriften über Fernabsatzverträge, insbesondere die §§ 312b ff. BGB.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 2 Vertragsgegenstand</h2>
<p className="mt-2 text-[15px]">Die Anbieterin bietet digitale Produkte (E-Books, Hörbücher, Workbooks) sowie Bildungsleistungen (Ausbildungen, Kurse, Coaching) an.</p>
<p className="mt-2 text-[15px]">Der konkrete Vertragsgegenstand ergibt sich aus der jeweiligen Produktbeschreibung auf der Website des CAIO Instituts.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 3 Vertragsschluss bei Verbrauchern</h2>
<p className="mt-2 text-[15px]">Bei Verbrauchern kommt der Vertrag durch Anklicken des Buttons „Kostenpflichtig bestellen" zustande. Vor diesem Schritt erhält der Verbraucher alle wesentlichen Informationen einschließlich der Widerrufsbelehrung.</p>
<p className="mt-2 text-[15px]">Die Anbieterin kann den Antrag auf Vertragsschluss innerhalb von 14 Tagen annehmen. Bei digitalen Produkten erfolgt die Annahme in der Regel unmittelbar.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 4 Preise und Zahlung</h2>
<p className="mt-2 text-[15px]">Alle Preise verstehen sich in Euro und verstehen sich <strong>inklusive der gesetzlichen Mehrwertsteuer</strong>. Es fallen keine zusätzlichen Lieferkosten an (digitale Lieferung).</p>
<p className="mt-2 text-[15px]">Die Zahlung erfolgt über den Zahlungsdienstleister Affilicon. Verfügbare Zahlungsmethoden werden im Bestellprozess angezeigt.</p>
<p className="mt-2 text-[15px]">Bei Förderfähigkeit übernimmt möglicherweise ein Kostenträger einen Teil oder die Gesamtkosten. Die Klärung erfolgt individuell im Karriere-Booster-Gespräch.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 5 Widerrufsrecht für Verbraucher</h2>
<p className="mt-2 text-[15px]">Verbraucher haben ein vierzehntägiges Widerrufsrecht. Die vollständige Widerrufsbelehrung finden Sie <a href="/widerruf" className="underline text-ofen">hier</a>.</p>
<p className="mt-2 bg-sand/20 border border-sand rounded-lg p-4 text-[15px]"><strong>Wichtig bei digitalen Inhalten:</strong> Das Widerrufsrecht erlischt, sobald Sie ausdrücklich zugestimmt haben, dass mit der Ausführung vor Ablauf der Widerrufsfrist begonnen wird, und Sie den Download gestartet haben.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 6 Lieferung und Verfügbarkeit</h2>
<p className="mt-2 text-[15px]">Digitale Produkte werden nach Zahlungseingang per E-Mail-Download-Link zur Verfügung gestellt. Die Lieferung erfolgt in der Regel innerhalb von 24 Stunden nach Zahlungseingang.</p>
<p className="mt-2 text-[15px]">Bei Bildungsleistungen (Ausbildungen, Kurse) beginnt die Durchführung nach dem im jeweiligen Vertrag genannten Termin.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 7 Gewährleistung</h2>
<p className="mt-2 text-[15px]">Es gelten die gesetzlichen Gewährleistungsrechte.</p>
<p className="mt-2 text-[15px]">Bei digitalen Produkten besteht die Gewährleistung in der Mangelfreiheit der Inhalte. Für die technische Verfügbarkeit auf Endgeräten übernimmt die Anbieterin keine Gewähr, da diese von Faktoren abhängt, die außerhalb ihres Einflussbereichs liegen.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 8 Haftung</h2>
<p className="mt-2 text-[15px]">Die Anbieterin haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.</p>
<p className="mt-2 text-[15px]">Bei einfacher Fahrlässigkeit haftet die Anbieterin nur bei Verletzung einer wesentlichen Vertragspflicht. Die Haftung ist auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.</p>
<p className="mt-2 text-[15px]">Die Anbieterin haftet nicht für Inhalte externer Links, auf die in den digitalen Produkten verwiesen wird.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 9 Abmeldung / Newsletter</h2>
<p className="mt-2 text-[15px]">Sie können sich jederzeit von E-Mail-Informationen abmelden. Nutzen Sie dafür den Abmeldelink in jeder E-Mail oder schreiben Sie an <a href="mailto:kontakt@caio-institut.de" className="underline text-ofen">kontakt@caio-institut.de</a>.</p>
<p className="mt-2 text-[15px]">Die Abmeldung ist kostenlos und hat keine Auswirkungen auf laufende Verträge.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 10 Freiwillige 30-Tage-Geld-zurück-Zusage</h2>
<p className="mt-2 text-[15px]">Für das CAIO-Handbuch und zugehörige digitale Pakete gewähren wir über das gesetzliche Widerrufsrecht hinaus eine freiwillige Geld-zurück-Zusage: Erklären Sie innerhalb von 30 Tagen ab Bereitstellung (Download-Link per E-Mail) gegenüber kontakt@caio-institut.de, dass Sie mit dem Produkt nicht zufrieden sind, erstatten wir den vollen Kaufpreis auf das von Ihnen genutzte Zahlungsmittel.</p>
<p className="mt-2 text-[15px]">Die Zusage gilt einmal pro Kunde und Produkt, ist freiwillig und unabhängig vom gesetzlichen Mängelhaftungsrecht; dieses bleibt unberührt. Ein Motivnachweis wird nicht verlangt. Das gesetzliche 14-tägige Widerrufsrecht bleibt von der Zusage unabhängig bestehen (siehe Widerrufsbelehrung).</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 11 Gutschrift bei weiterführender Qualifizierung (Code CAIO35)</h2>
<p className="mt-2 text-[15px]">Käuferinnen und Käufer des CAIO-Handbuchs erhalten bei Buchung von Stufe 1 der Ausbildung (AI Professional) eine Gutschrift von 35&nbsp;€ auf die Teilnahmegebühr. Die Gutschrift ist personengebunden (an die bei der Reservierung genannte E-Mail-Adresse), nicht auszahlbar, nicht übertragbar und befristet derzeit nicht — sie verfällt nicht. Sie ist nicht mit anderen Gutscheinaktionen kombinierbar und gilt pro Person nur einmal. Angaben dazu in Marketingmaterialien sind unverbindliche Kostenvoransichten; maßgeblich ist diese Regelung.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 12 Streitbeilegung</h2>
<p className="mt-2 text-[15px]">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer nofollow" className="underline text-ofen">https://ec.europa.eu/consumers/odr</a></p>
<p className="mt-2 text-[15px]">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
</div>

<div className="agb-para">
<h2 className="font-head font-bold text-ofen text-lg">§ 13 Schlussbestimmungen</h2>
<p className="mt-2 text-[15px]">Es gilt das Recht der Bundesrepublik Deutschland. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz zwingender Rechtsvorschriften des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.</p>
<p className="mt-2 text-[15px]">Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
</div>

      </>
    </PageLayout>
  );
}
