import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AiBubble from "@/components/AiBubble";

export const metadata: Metadata = {
    title: "Über uns & Leitbild | Wissensreich Academy",
    description: "Leitbild mit René-Story, Zahlen & Fakten (10+ Jahre Förder-Expertise, bis 95 % Bewilligungsquote), AZAV/ISO-Zertifikate, Awards und 18 Dozenten.",
};

export default function Page() {
  return (
    <PageLayout ort="Über uns" home={false} adStyle={false} minimal={false} altcha={false}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "CAIO Institut", "item": "https://www.caio-institut.de/"}, {"@type": "ListItem", "position": 2, "name": "\u00dcber uns & Leitbild", "item": "https://www.caio-institut.de/ueber-uns"}]} }}
      />
      <>


{/* HERO */}
<header id="top" data-ort="Über uns" className="max-w-[1120px] mx-auto px-5 pt-12 pb-8 md:px-8 md:pt-16">
  <p className="font-head font-medium text-licht text-sm tracking-widest uppercase">Über uns</p>
  <h1 className="font-head font-bold text-ofen text-[clamp(28px,6vw,44px)] leading-tight mt-3 max-w-[24ch]">
    Eine Gemeinschaftsinitiative — aus Deutschland, der Schweiz und Irland.
  </h1>
  <p className="mt-4 max-w-[72ch]">Das CAIO Institut ist eine Gemeinschaftsinitiative der WissensReich Academy, der Eskalator AG sowie der Grenzenlos Ltd. und bündelt internationale Ansätze mit dem Ziel, KI, AI und SI als wertschöpfenden Bestandteil unserer Gesellschaft zu integrieren. Ansprechpartner für Deutschland ist die WissensReich Academy. Dazu kommt das Rückgrat eines Bildungshauses: über 10 Jahre Fördermittel-Expertise, AZAV-zertifizierte Qualität und Praxis-Dozenten aus der Wirtschaft.</p>
  <figure className="mt-8 overflow-hidden rounded-2xl shadow-card">
    <picture><source type="image/webp" srcSet="assets/img-opt/hero-ueber-uns-800.webp 800w, assets/img-opt/hero-ueber-uns.webp 1600w" sizes="100vw" /><img src="/img-opt/hero-ueber-uns.webp" alt="Warme Bäckerei voller frischer Backwaren — unser Praxisfall: die KI-Bäckerei" className="w-full aspect-[16/7] object-cover" width="1600" height="700" fetchPriority="high" decoding="async" /></picture>
  </figure>
</header>

{/* LEITBILD */}
<section id="leitbild" data-ort="Leitbild" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Unser Leitbild</h2>
  <div className="mt-6 bg-white rounded-2xl shadow-card border-l-4 border-sand p-6 md:p-8">
    <blockquote className="font-story italic text-xl md:text-2xl leading-snug text-ofen">
      „René ist 34. Sie arbeitet im Einkauf. Sie hat die Bestellprognose mit KI verbessert.
      Niemand hat ihr dafür eine Rolle gegeben. Sie hat sich die Rolle selbst gebaut."
    </blockquote>
    <p className="mt-3 text-sm text-espresso/60">Aus dem Leitbild des CAIO Instituts</p>
    <p className="mt-4 text-[15px] max-w-[75ch]">Diese Rolle hat heute einen Namen: <strong>Chief AI Officer</strong>. René weiß das nicht. Ihr Vorstand auch nicht. Genau hier setzen wir an.</p>
  </div>

  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-ofen text-lg">Warum wir existieren</p>
      <p className="mt-2 text-[15px]">KI ist längst im Mittelstand angekommen. Die Kompetenz, sie zu steuern, ist selten dort, wo Entscheidungen fallen. Der Markt ist voller Versprechen. Chefs hören zu und verstehen die Hälfte. Menschen wie René liefern trotzdem Ergebnisse. Ihnen fehlt der Rahmen. Und der Name für ihre Arbeit. Wir geben ihnen beides.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-ofen text-lg">Woran wir glauben</p>
      <p className="mt-2 text-[15px]">KI entscheidet nicht über Erfolg. Menschen mit KI tun es. Jedes Unternehmen braucht eine Person, die KI zur Strategie macht. Nicht ein Tool. Eine Person. Diese Person nennen wir CAIO. Wir bilden sie aus. Gestuft. Nachweisbar. Am echten Fall.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-ofen text-lg">Unser Versprechen</p>
      <p className="mt-2 text-[15px]">Wir übertreiben nicht. Nach Stufe 2 bewertest du Vorschläge wie ein Profi. Nach Stufe 3 führst du ein Projekt mit Business Case. Nach Stufe 4 trägst du die Rolle — mit Namen, mit Titel, mit Nachweis. Immer mit Praxis. Nie nur mit Folien.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6">
      <p className="font-head font-bold text-ofen text-lg">Für wen das ist</p>
      <p className="mt-2 text-[15px]">Für Menschen wie René. Für Chefs, die einen Übersetzer im Haus brauchen. Für Teams, die mitarbeiten wollen. Für Unternehmen, die aus der KI-Pflicht einen Vorsprung machen.</p>
    </div>
  </div>
</section>

{/* ZAHLEN */}
<section id="zahlen-fakten" data-ort="Zahlen &amp; Fakten" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Zahlen, Daten, Fakten</h2>
  <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
    <div className="bg-white rounded-2xl shadow-card p-6 text-center">
      <p className="font-head font-bold text-3xl text-orange">10+</p>
      <p className="mt-1 text-sm">Jahre Fördermittel-Expertise im Rückgrat des Instituts</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 text-center">
      <p className="font-head font-bold text-3xl text-orange">bis 95 %</p>
      <p className="mt-1 text-sm">Bewilligungsquote bei begleiteten Anträgen</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 text-center">
      <p className="font-head font-bold text-3xl text-orange">30–100 %</p>
      <p className="mt-1 text-sm">Förderzuschuss — ermitteln wir im individuellen Gespräch</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 text-center">
      <p className="font-head font-bold text-3xl text-orange">4 Stufen</p>
      <p className="mt-1 text-sm">Vom Fundament (32+ Stunden) bis zur CAIO-Verantwortung</p>
    </div>
  </div>
</section>

{/* ZERTIFIKATE & AUSZEICHNUNGEN */}
<section id="zertifikate" data-ort="Zertifikate &amp; Awards" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Zertifikate &amp; Auszeichnungen</h2>
  <p className="mt-3 max-w-[75ch]">Getragen von der Gemeinschaftsinitiative aus WissensReich Academy, Eskalator AG und Grenzenlos Ltd. — mit Partnern in Deutschland, der Schweiz und Irland. AZAV-zertifiziert, geprüfte Qualitäts- und Innovationsstandards, anerkannt für geförderte Weiterbildung. Ansprechpartner für Deutschland ist die WissensReich Academy.</p>
  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white rounded-2xl shadow-card p-6 flex items-center gap-4">
      <img src="/siegel/certqua-azav-iso9001.webp" alt="CERTQUA — AZAV und ISO 9001" className="h-14 w-14 object-contain flex-shrink-0" loading="lazy" />
      <div><p className="font-head font-bold text-ofen">AZAV · ISO 9001</p><p className="text-sm text-espresso/70">Anerkennung als Träger geförderter Weiterbildung (CERTQUA)</p></div>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 flex items-center gap-4">
      <img src="/siegel/iso-56002-2019.webp" alt="ISO 56002:2019 Innovationsmanagement" className="h-14 w-14 object-contain flex-shrink-0" loading="lazy" />
      <div><p className="font-head font-bold text-ofen">ISO 56002:2019</p><p className="text-sm text-espresso/70">Zertifiziertes Innovationsmanagement</p></div>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 flex items-center gap-4">
      <img src="/siegel/bvmw-mitglied.png" alt="BVMW Mitglied" className="h-14 w-14 object-contain flex-shrink-0" loading="lazy" />
      <div><p className="font-head font-bold text-ofen">BVMW-Mitglied</p><p className="text-sm text-espresso/70">Verband des Mittelstands — unser Zielgruppen-Zuhause</p></div>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 flex items-center gap-4">
      <img src="/awards/top100-speakers-2026.webp" alt="Top 100 Speakers 2026 Excellence Member" className="h-14 w-14 object-contain flex-shrink-0" loading="lazy" />
      <div><p className="font-head font-bold text-ofen">Top 100 Speakers 2026</p><p className="text-sm text-espresso/70">Excellence Member — für Bühnen-Kompetenz im Verbund</p></div>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 flex items-center gap-4">
      <img src="/awards/german-brand-award.png" alt="German Brand Award Winner" className="h-14 w-14 object-contain flex-shrink-0" loading="lazy" />
      <div><p className="font-head font-bold text-ofen">German Brand Award</p><p className="text-sm text-espresso/70">Winner — Marken-Auszeichnung des Verbunds</p></div>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-6 flex items-center gap-4">
      <div className="h-14 w-14 rounded-xl bg-ofen text-mehl flex items-center justify-center flex-shrink-0 font-head font-bold text-lg">§</div>
      <div><p className="font-head font-bold text-ofen">Förderzugänge</p><p className="text-sm text-espresso/70">BAFA-zugelassen · INQA-akkreditiert · ESF/KOMPASS</p></div>
    </div>
  </div>
  <p className="mt-4 text-sm text-espresso/60">Bekannt aus: Spiegel · Handelsblatt · WAZ · Funke · Hamburg1</p>
</section>

{/* DOZENTEN */}
<section id="dozenten" data-ort="Dozenten" className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <h2 className="font-head font-bold text-ofen text-[clamp(22px,4vw,32px)]">Dozenten &amp; Praxis-Experten</h2>
  <p className="mt-3 max-w-[75ch]">13 namentlich genannte Dozenten und Experten stehen hinter den Programmen des Verbunds — aus Marketing, Vertrieb, Produkt, Strategie und KI-Praxis.</p>
  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/hermann-fuerstenau.webp" alt="Hermann Fürstenau" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Hermann Fürstenau</p>
      <p className="text-xs text-espresso/60">Geschäftsführung</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/img-opt/doz-florian-domin.webp" srcSet="assets/img-opt/doz-florian-domin-320.webp 320w, assets/img-opt/doz-florian-domin.webp 350w" sizes="160px" alt="Florian Domin" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Florian Domin</p>
      <p className="text-xs text-espresso/60">Geschäftsführung</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/dennis-bakir.jpeg" alt="Dr.-Ing. Dennis Bakir" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Dr.-Ing. Dennis Bakir</p>
      <p className="text-xs text-espresso/60">Solopreneurship &amp; Geschäftsmodelle</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/felix-beilharz.jpeg" alt="Felix Beilharz" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Felix Beilharz</p>
      <p className="text-xs text-espresso/60">Digital- &amp; Social-Media-Marketing</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/img-opt/doz-joerg-loehr.webp" srcSet="assets/img-opt/doz-joerg-loehr-320.webp 320w, assets/img-opt/doz-joerg-loehr.webp 500w" sizes="160px" alt="Jörg Löhr" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Jörg Löhr</p>
      <p className="text-xs text-espresso/60">Persönlichkeits- &amp; Verkaufstraining</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/rené-betancourt.jpeg" alt="René Betancourt" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">René Betancourt</p>
      <p className="text-xs text-espresso/60">Praxis-Experte</p>
    </div>
    
    
    
    
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/gerhard-honsbein.jpeg" alt="Gerhard Honsbein" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Gerhard Honsbein</p>
      <p className="text-xs text-espresso/60">Praxis-Experte</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center"><img src="/dozenten/robin-bakir.jpeg" alt="Robin Bakir" className="w-full aspect-square object-cover rounded-xl" loading="lazy" /><p className="font-head font-bold text-ofen text-sm mt-2">Robin Bakir</p><p className="text-xs text-espresso/60">Praxis-Experte</p></div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center"><img src="/dozenten/sven-bendig.jpeg" alt="Sven Bendig" className="w-full aspect-square object-cover rounded-xl" loading="lazy" /><p className="font-head font-bold text-ofen text-sm mt-2">Sven Bendig</p><p className="text-xs text-espresso/60">Praxis-Experte</p></div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center"><img src="/dozenten/patrick-starkmann.jpeg" alt="Patrick Starkmann" className="w-full aspect-square object-cover rounded-xl" loading="lazy" /><p className="font-head font-bold text-ofen text-sm mt-2">Patrick Starkmann</p><p className="text-xs text-espresso/60">Praxis-Experte</p></div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center"><img src="/dozenten/leo-gaertner.jpeg" alt="Leo Gaertner" className="w-full aspect-square object-cover rounded-xl" loading="lazy" /><p className="font-head font-bold text-ofen text-sm mt-2">Leo Gaertner</p><p className="text-xs text-espresso/60">Praxis-Experte</p></div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/bernd-rudmann.jpeg" alt="Bernd Rudmann" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Bernd Rudmann</p>
      <p className="text-xs text-espresso/60">Praxis-Experte</p>
    </div>
    <div className="bg-white rounded-2xl shadow-card p-4 text-center">
      <img src="/dozenten/maik-besso.jpeg" alt="Maik Besso" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
      <p className="font-head font-bold text-ofen text-sm mt-2">Maik Besso</p>
      <p className="text-xs text-espresso/60">Praxis-Experte</p>
    </div>
  </div>

</section>

{/* CTA */}
<section className="max-w-[1120px] mx-auto px-5 md:px-8 py-10">
  <div className="bg-ofen rounded-2xl shadow-card p-6 md:p-8 text-mehl text-center">
    <p className="font-head font-bold text-lg">Der erste Schritt ist klein.</p>
    <p className="mt-2 text-[15px] max-w-[72ch] mx-auto">Fünf Fragen. 2 Minuten. Du weißt sofort, wo du stehst.</p>
    <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
      <a href="/#test" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-orange text-espresso font-head font-bold">Selbsttest starten</a>
      <a href="/#stufen" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-head font-medium text-mehl underline underline-offset-4">Die vier Stufen ansehen</a>
    </div>
  </div>
</section>
      <AiBubble />

      </>
    </PageLayout>
  );
}
