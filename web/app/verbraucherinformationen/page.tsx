import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";


export const metadata: Metadata = {
    title: "Verbraucherinformationen",
    description: "Pflichtinformationen f\u00fcr Verbraucher nach § 312d BGB: Anbieter, Preise, Zahlung, Lieferung, Widerrufsrecht.",
};

export default function Page() {
  return (
    <PageLayout ort="Verbraucherinformationen" home={false} adStyle={false} minimal={true} altcha={false}>
      <>

<h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,42px)]">Verbraucherinformationen</h1>
<p className="mt-2 text-espresso/60">Pflichtangaben nach \u00a7 312d Abs. 1 BGB und Art. 246a EGBGB</p>

<div className="mt-8 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">1. Identit\u00e4t des Unternehmers</h2>
<table>
<tr><td style={{width: '35%', fontWeight: '600'}}>Anbieterin</td><td>Wissensreich Academy UG (haftungsbeschr\u00e4nkt)</td></tr>
<tr><td style={{fontWeight: '600'}}>Vertreten durch</td><td>Hermann F\u00fcrstenau, Florian Domin</td></tr>
<tr><td style={{fontWeight: '600'}}>Anschrift</td><td>Weinsbergstra\u00dfe 190, 50825 K\u00f6ln, Deutschland</td></tr>
<tr><td style={{fontWeight: '600'}}>Register</td><td>HRB 123436, Amtsgericht K\u00f6ln</td></tr>
<tr><td style={{fontWeight: '600'}}>USt-IdNr.</td><td>DE456244964</td></tr>
<tr><td style={{fontWeight: '600'}}>Telefon</td><td>+49 221 800 06195</td></tr>
<tr><td style={{fontWeight: '600'}}>E-Mail</td><td>kontakt@caio-institut.de</td></tr>
</table>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">2. Wesentliche Merkmale der Ware/Dienstleistung</h2>
<p className="mt-3 text-[15px]"><b>CAIO-Handbuch Edition:</b> Digitales Buch (PDF), 62 Seiten, 18 Kapitel in 4 Teilen, mit integriertem Workbook (5 schreibfertige Vorlagen). Inhalt: Ausbildung zum Chief AI Officer von Grundlagen bis Verantwortung. Eigenst\u00e4ndige deutsche Fassung f\u00fcr den europ\u00e4ischen Markt.</p>
<p className="mt-2 text-[15px]"><b>CAIO-Ausbildung (AIP–CAIO):</b> Gestaufte Weiterbildung in 4 Stufen, je Stufe mit Zertifikat. Details auf der Startseite.</p>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">3. Gesamtpreis einschlie\u00dflich aller Steuern</h2>
<table>
<tr><th>Produkt</th><th>Preis (inkl. gesetzl. MwSt., zzgl. 0 € Lieferkosten)</th></tr>
<tr><td>CAIO-Handbuch Edition (PDF)</td><td>17,50 \u20ac</td></tr>
<tr><td>CAIO-Handbuch + H\u00f6rbuch</td><td>27,50 \u20ac</td></tr>
<tr><td>Komplett-Paket (Buch + H\u00f6rbuch + Aufstiegs-Mappe)</td><td>61,50 \u20ac</td></tr>
<tr><td>Ausbildung Stufe 1 (AIP)</td><td>auf Anfrage (f\u00f6rderf\u00e4hig)</td></tr>
</table>
<p className="mt-3 text-[15px]">Es fallen keine zus\u00e4tzlichen Lieferkosten an (digitale Lieferung per Download-Link).</p>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">4. Zahlung und Lieferung</h2>
<table>
<tr><td style={{width: '35%', fontWeight: '600'}}>Zahlungsmethoden</td><td>\u00dcber Affilicon (Kreditkarte, PayPal, SEPA-Lastschrift)</td></tr>
<tr><td style={{fontWeight: '600'}}>Lieferzeit</td><td>Digital: innerhalb 24 Stunden nach Zahlungseingang per Download-Link</td></tr>
<tr><td style={{fontWeight: '600'}}>Lieferart</td><td>E-Mail mit Download-Link (PDF)</td></tr>
</table>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">5. Widerrufsrecht</h2>
<p className="mt-3 text-[15px]">Verbraucher haben ein vierzehnt\u00e4giges Widerrufsrecht. Die vollst\u00e4ndige Widerrufsbelehrung mit Muster-Widerrufsformular finden Sie <a href="/widerruf" className="underline text-ofen font-semibold">hier \u2192</a>.</p>
<div className="mt-3 bg-sand/20 border border-sand rounded-lg p-4 text-[15px]">
<strong>Wichtig bei digitalen Inhalten:</strong> Das Widerrufsrecht erlischt, sobald Sie den Download starten und damit der Ausf\u00fchrung des Vertrags zugestimmt haben. Wir weisen Sie vor dem Download explizit darauf hin.
</div>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">6. Gew\u00e4hrleistung und Garantie</h2>
<p className="mt-3 text-[15px]">Es gelten die gesetzlichen Gew\u00e4hrleistungsrechte (\u00a7\u00a7 434 ff. BGB). Zus\u00e4tzlich bieten wir eine 30-Tage-Geld-zur\u00fcck-Garantie: Wenn Sie mit dem CAIO-Handbuch nicht zufrieden sind, erstatten wir Ihnen den vollen Kaufpreis zur\u00fcck — ohne Angabe von Gr\u00fcnden. Eine kurze E-Mail gen\u00fcgt.</p>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">7. Vertragsschluss und Sprache</h2>
<p className="mt-3 text-[15px]">Der Vertrag kommt durch Anklicken des Buttons „Kostenpflichtig bestellen" zustande. Der Vertragstext wird in deutscher Sprache abgefasst und steht Ihnen nach Vertragsschluss zur Verf\u00fcgung.</p>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">8. Streitbeilegung</h2>
<p className="mt-3 text-[15px]">Die Europ\u00e4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer nofollow" className="underline text-ofen">https://ec.europa.eu/consumers/odr</a></p>
<p className="mt-2 text-[15px]">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
</div>

<div className="mt-6 bg-white rounded-2xl shadow-card p-6 md:p-8">
<h2 className="font-head font-bold text-ofen text-lg">9. Abmeldung / Newsletter</h2>
<p className="mt-3 text-[15px]">Sie k\u00f6nnen E-Mail-Informationen jederzeit \u00fcber den Abmeldelink in jeder E-Mail oder per Nachricht an <a href="mailto:kontakt@caio-institut.de" className="underline text-ofen">kontakt@caio-institut.de</a> abbestellen.</p>
</div>

      </>
    </PageLayout>
  );
}
