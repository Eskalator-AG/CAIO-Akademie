import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { OrderForm } from "@/components/Forms";

export const metadata: Metadata = {
    title: "EU AI Act: KI-Kompetenz ist Pflicht – der Nachweis für Ihr Unternehmen",
    description: "Seit Februar 2025 schreibt Art. 4 EU AI Act KI-Kompetenz in Unternehmen gesetzlich vor. Das CAIO-Handbuch macht daraus in 30 Tagen einen messbaren Nachweis: 25 Nutzenfälle, Reifegrad-Check, 20 Kennzahlen. 17,50 € inkl. MwSt.",
};

export default function Page() {
  return (
    <PageLayout ort="Angebot" home={false} adStyle={true} minimal={false} altcha={true}>
      <>


{/* HERO: Message Match zur Anzeige + CTA ohne Scrollen */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 pt-8 pb-10">
  <div className="max-w-[760px]">
    <p className="text-xs font-semibold tracking-wide uppercase text-ofen">Das CAIO-Handbuch · Für Verantwortliche</p>
    <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,44px)] leading-tight mt-3">KI-Kompetenz ist seit Februar 2025 Pflicht. Dieses Handbuch macht daraus in 30 Tagen Ihren Nachweis.</h1>
    <p className="mt-4 text-[15px] text-espresso/85 text-base">Art. 4 des EU AI Act verlangt KI-Kompetenz in Belegschaften — Aufsichtsbehörden prüfen seit Anfang 2026. Das Handbuch liefert Geschäftsführung und Verantwortlichen den <b>Fahrplan von der Pflicht zum Nachweis</b>: 25 Nutzenfälle, Reifegrad-Check, 20 Kennzahlen, integriertes Workbook.</p>
    <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <a href="#bestellen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold text-lg shadow-card">Handbuch sichern — 17,50&nbsp;€ inkl.&nbsp;MwSt.</a>
      <span className="text-xs text-espresso/60">30 Tage Geld-zurück · inkl. MwSt. · sofort nutzbar</span>
    </div>
  </div>
  <figure className="mt-8 max-w-[640px]">
    <picture>
      <source type="image/webp" srcSet="assets/img-opt/buch-cover-2-480.webp 480w, assets/img-opt/buch-cover-2-768.webp 768w, assets/img-opt/buch-cover-2.webp 1536w" sizes="(max-width:768px) 100vw, 640px" />
      <img src="/img-opt/buch-cover-2.webp" alt="Das CAIO-Handbuch mit Workbook-Set — Fahrplan für KI-Verantwortung im Unternehmen" className="w-full aspect-[3/2] object-cover rounded-2xl shadow-card" width="1536" height="1024" fetchPriority="high" decoding="async" />
    </picture>
  </figure>
</section>

{/* BEWEIS: Zahlen mit Quellen */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Warum die Pflicht jetzt ernst wird</h2>
  <div className="mt-6 grid sm:grid-cols-2 gap-4">
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen text-2xl">90.000–130.000&nbsp;€</p>
      <p className="mt-1 text-[15px] text-espresso/70">Wer KI-Verantwortung trägt, verdient 90.000–130.000&nbsp;€ im Mittelstand — Unternehmen konkurrieren um diese wenigen Personen.</p>
      <p className="mt-2 text-xs text-espresso/50">Quellen: Kienbaum 02/2025; Stellenmarkt-Analysen; Wirtschafts­presse</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen text-2xl">30–100&nbsp;% Förderung</p>
      <p className="mt-1 text-[15px] text-espresso/70">Qualifizierung zu KI-Kompetenz ist förderfähig: 30–100 % Zuschuss — Nachschulung kostet Ihr Unternehmen sonst ein Vielfaches.</p>
      <p className="mt-2 text-xs text-espresso/50">AIP bis 90 % · AIO Ø 80 % · AIA/CAIO bis 100 %</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen text-2xl">Seit 02/2025</p>
      <p className="mt-1 text-[15px] text-espresso/70">Art. 4 EU AI Act (in Kraft seit 02/2025) macht KI-Kompetenz zur Pflicht — für Unternehmen jeder Größe, auch ohne KI-Einsatz.</p>
      <p className="mt-2 text-xs text-espresso/50">Verordnung (EU) 2024/1689, Art. 4</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen text-2xl">30 Tage</p>
      <p className="mt-1 text-[15px] text-espresso/70">Von der Pflicht zum Nachweis: 25 Nutzenfälle, Reifegrad-Check und 20 Kennzahlen machen KI-Kompetenz in Ihrem Unternehmen sichtbar.</p>
      <p className="mt-2 text-xs text-espresso/50">Integriertes Workbook, 5 schreibfertige Vorlagen</p>
    </div>
  </div>
  <div className="mt-8 text-center">
    <a href="#bestellen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold text-lg shadow-card">Jetzt Handbuch sichern — 17,50&nbsp;€ inkl.&nbsp;MwSt.</a>
  </div>
</section>

{/* KONTRAST-STORY */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Zwei Unternehmen, dieselbe Pflicht</h2>
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Unternehmen A</p>
      <p className="mt-2 text-[15px] text-espresso/85">„Wir nutzen hier und da ein KI-Tool.“ Bei der Nachfrage der Aufsicht gibt es keine Belege: keine Nutzenfälle, keine Messung, keine Richtlinie. Die Prüfung wird teuer — und der Wettbewerber lächelt.</p>
    </div>
    <div className="bg-mehl rounded-2xl border border-espresso/10 p-5">
      <p className="font-head font-bold text-ofen">Unternehmen B</p>
      <p className="mt-2 text-[15px] text-espresso/85">Hat 25 geprüfte Nutzenfälle durchgesehen, den Reifegrad in 7 Bereichen eingestuft, eine KI-Richtlinie beschlossen — alles dokumentiert. Auf die Frage „Wie erfüllen Sie Art. 4?“ gibt es eine Antwort mit Zahlen. <b>Dasselbe Gesetz, ein anderes Ergebnis.</b></p>
    </div>
  </div>
  <p className="mt-6 text-[15px] text-espresso/85 max-w-[760px]">Genau dieser Unterschied ist das Thema des Handbuchs: Kapitel 11 liefert das Rechts-Rückgrat (EU AI Act, DSGVO), Anhang B den <b>Reifegrad-Check für 7 Unternehmensbereiche</b>, Anhang A die 25 Nutzenfälle — in 30 Tagen zu einem belegbaren Stand.</p>
</section>

{/* WAS DU BEKOMMST */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Was in den 17,50&nbsp;€ steckt</h2>
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">Für die Geschäftsleitung (85 Seiten)</p>
      <ul className="mt-2 space-y-2 text-[15px] text-espresso/85">
        <li>→ 18 Kapitel: von der Chance über die Beweis-Leiter bis zur Verantwortung</li>
        <li>→ 5 schreibfertige Vorlagen: Vorher-Nachher-Analyse, Anbieter-Prüfung, KI-Richtlinie u.&nbsp;a.</li>
        <li>→ EU AI Act &amp; DSGVO verständlich — das Rechts-Rückgrat für Ihre Belegschaft</li>
        <li>→ Fördermittel-Einordnung: 30–100 % Zuschuss für Qualifizierung</li>
      </ul>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-5">
      <p className="font-head font-bold text-ofen">8 Praxis-Anhänge (der Nachweis-Teil)</p>
      <ul className="mt-2 space-y-2 text-[15px] text-espresso/85">
        <li>→ 25 Nutzenfälle, die heute schon funktionieren</li>
        <li>→ Reifegrad-Check für 7 Unternehmensbereiche</li>
        <li>→ Werkzeug-Landschaft mit Auswahlfragen</li>
        <li>→ Die ersten 10 Gespräche: Team, Anbieter, Betriebsrat, Geschäftsführung</li>
        <li>→ Kennzahlen-Bibliothek: 20 Messgrößen</li>
        <li>→ Branchen-Überblick: wo KI zuerst wirkt</li>
      </ul>
    </div>
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-card p-5">
    <p className="text-[15px] text-espresso/85"><b className="text-ofen">Plus:</b> Ihre 17,50&nbsp;€ werden als <b>35&nbsp;€ Gutschrift auf Stufe&nbsp;1 (AI Professional)</b> angerechnet — ideal, um einen Verantwortlichen qualifizieren zu lassen (bis 90 % Förderung). 30 Tage Geld-zurück inklusive.</p>
  </div>
  <div className="mt-8 text-center">
    <a href="#bestellen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold text-lg shadow-card">Alles sichern — 17,50&nbsp;€ inkl.&nbsp;MwSt.</a>
  </div>
</section>

{/* BESTELL-FORMULAR */}
<section id="bestellen" className="max-w-[760px] mx-auto px-5 md:px-8 py-10">
  <div className="bg-white rounded-2xl shadow-card p-5">
    <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Handbuch für Ihr Unternehmen reservieren</h2>
    <p className="mt-1 text-sm text-espresso/70">17,50&nbsp;€ inkl.&nbsp;MwSt. · 30 Tage Geld-zurück · 35&nbsp;€ Gutschrift auf Stufe&nbsp;1</p>
    <OrderForm />
  </div>
</section>

{/* EINWÄNDE: FAQ */}
<section className="max-w-[760px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Deine Fragen — ehrlich beantwortet</h2>
  <div className="mt-6 grid gap-3">
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wir nutzen KI noch gar nicht. Ist das dann schon relevant?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja — Art. 4 EU AI Act gilt für Unternehmen jeder Größe unabhängig vom aktuellen KI-Einsatz. Das Handbuch zeigt, wie Sie den Pflicht-Nachweis strukturieren, bevor es eine Prüfung gibt: Reifegrad-Check zuerst, Nutzenfälle danach.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wann bekomme ich das Buch?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Die Ausgabe ist final gesetzt (85 Seiten) und erscheint in Kürze. Du reservierst jetzt — Reservierungen werden in Eingangsreihenfolge beliefert, und bezahlt wird erst mit der Lieferung per Zahlungslink.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Ersetzt das Buch eine Schulung?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Nein — und das ist Absicht. Das Handbuch ist der schnellste Weg zu Plan und Nachweis; die Schulung (Stufe 1, bis 90 % förderfähig) baut die Kompetenz im Team auf. Ihre 17,50&nbsp;€ werden dabei als 35&nbsp;€ Gutschrift angerechnet. Viele starten mit dem Handbuch und qualifizieren anschließend eine verantwortliche Person.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Kann ich widerrufen?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja. Für Verbraucher gilt ein 14-tägiges gesetzliches Widerrufsrecht (dazu 30 Tage Geld-zurück vom CAIO Institut). Wichtig: Bei digitalen Inhalten erlischt das Widerrufsrecht mit dem Download — das steht transparent in der Widerrufsbelehrung.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Wer steht hinter dem CAIO Institut?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG und der Grenzenlos Ltd. — mit Partnern in Deutschland, der Schweiz und Irland. Ansprechpartner für Deutschland ist die WissensReich Academy: AZAV-zertifiziert, über 10 Jahre Fördermittel-Expertise.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Warum nur 17,50&nbsp;€?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Weil der Preis der Türöffner ist, nicht das Argument. Lesen Sie, nutzen Sie die 25 Nutzenfälle und den Reifegrad-Check — überzeugt der Inhalt, entscheiden Sie später über Qualifizierung und Ausbildung. Deshalb haben Sie kein Risiko: 30 Tage Geld-zurück.</p>
    </details>
    <details className="bg-white rounded-2xl shadow-card p-5">
      <summary className="font-semibold">Gibt es das Buch auch als Hörbuch?</summary>
      <p className="mt-2 text-[15px] text-espresso/85">Ja — als Paket „Buch + Hörbuch“ für 27,50&nbsp;€ inkl.&nbsp;MwSt. oder das Komplett-Paket mit separatem Workbook für 61,50&nbsp;€ inkl.&nbsp;MwSt. Beides im Bestellformular wählbar.</p>
    </details>
  </div>
</section>

{/* FINALER CTA */}
<section className="max-w-[760px] mx-auto px-5 md:px-8 pb-10">
  <div className="bg-orange rounded-2xl p-5 text-center text-espresso">
    <h2 className="font-head font-bold text-espresso text-[clamp(22px,4vw,32px)]">In 30 Tagen haben Sie den Nachweis auf dem Tisch.</h2>
    <p className="mt-2 text-[15px] text-espresso/85">85 Seiten · 25 Nutzenfälle · Reifegrad-Check · 20 Kennzahlen · KI-Richtlinie als Vorlage.</p>
    <a href="#bestellen" className="mt-4 inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-espresso text-mehl font-head font-bold text-lg">Nachweis sichern — 17,50&nbsp;€ inkl.&nbsp;MwSt.</a>
    <p className="mt-3 text-xs text-espresso/70">30 Tage Geld-zurück · inkl. MwSt. · Kontakt: kontakt@caio-institut.de</p>
  </div>
</section>

{/* RECHTS-FOOTER (Pflichtlinks, keine Navigation) */}

      </>
    </PageLayout>
  );
}
