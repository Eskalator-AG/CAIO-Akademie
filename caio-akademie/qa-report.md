# QA-Report – CAIO-Akademie Landingpage

**Datum:** 30.10.2026
**Live-URL:** https://dennis343.github.io/CAIO-Akademie/
**Repo:** dennis343/CAIO-Akademie (Branch `main`, Commit `akademie: deploy-workflow für GitHub Pages`)
**Geprüft in:** Echtem Browser (Chromium-basiert, In-App), Viewport 360 × 740 px, gegen die Live-Seite nach Deployment.

---

## Ergebnisübersicht

| # | Prüfpunkt | Ergebnis |
|---|-----------|----------|
| 1 | Mobil 360px: kein horizontales Scrollen | ✔ |
| 1 | Stepper vertikal, Matrix als Akkordeon-Karten | ✔ |
| 2 | Selbsttest: 5 Fragen klickbar, Punkte 0–15 | ✔ |
| 2 | Alle 3 Ergebnisbänder erreichbar, Ergebnis-URL gesetzt | ✔ |
| 2 | E-Mail-Feld im Ergebnis vorhanden | ✔ |
| 3 | Sticky-CTA ab ~50 % Scrolltiefe sichtbar, darüber versteckt | ✔ |
| 4 | Kontrast: CTA-Text Espresso auf Orange (nicht Weiß) | ✔ |
| 4 | Fokus-Ring sichtbar bei Tab-Navigation | ✔ |
| 5 | Alle 9 Landingpage-Sektionen vorhanden | ✔ |
| 5 | Keine Wetter-/PR-#2-Reste | ✔ |
| 6 | `prefers-reduced-motion` respektiert | ✔ (statisch) |

**Gesamt: 12/12 ✔** — keine offenen Fehler.

---

## Details je Prüfpunkt

### 1. Mobil 360px
- `document.documentElement.scrollWidth` = 360 = `window.innerWidth` → **kein horizontales Scrollen**. Kein Element ragt über den Viewport.
- Selbsttest-Stepper: eine Frage pro Schritt, untereinander (`grid gap-2`), Fortschrittsbalken oberhalb — **vertikal**.
- Kompetenzmatrix: 6 Akkordeon-Karten (`<details>`) sichtbar, Desktop-Tabelle (`hidden md:block`) bei 360px **versteckt**.
- Visueller Screenshot-Check (360px): einspaltiges Layout, keine Überlappungen, keine abgeschnittenen Wörter.

### 2. Selbsttest
Drei vollständige Durchläufe mit echten Klicks gegen die Live-Seite:

| Lauf | Antworten | Punkte | Badge | Ergebnis-URL |
|------|-----------|--------|-------|--------------|
| 1 | 5 × 0-Punkt-Antwort | 0/15 | KI-Entdecker 🌱 | `?r=entdecker` |
| 2 | 1+2+1+2+2 | 8/15 | Versteckter Navigator 🧭 | `?r=navigator` |
| 3 | 5 × 3-Punkt-Antwort | 15/15 | Versteckter CAIO 👑 | `?r=caio` |

- Ergebnis-UI: Badge, Titel („Dein Ergebnis: X von 15 Punkten"), Text, **E-Mail-Feld** (`input[type=email]`, required) und Senden-Button vorhanden.
- Fortschrittsbalken: 0 % → 100 % über die 5 Fragen.

### 3. Sticky-CTA
Deterministisch gemessen (Scroll mit `behavior: 'instant'`, Messung nach 450 ms Transition-Zeit):

| Scrolltiefe | Sichtbar |
|-------------|----------|
| 0 % | nein ✔ |
| 45 % | nein ✔ |
| 55 % | ja ✔ |
| 100 % | ja ✔ |

Erscheint also exakt ab der ~50-%-Schwelle. Visuell im Screenshot bestätigt (orangefarbener Vollzeit-Button am unteren Rand).

### 4. Kontrast & Fokus
- Hero-CTA „Selbsttest starten": Hintergrund `rgb(228, 87, 46)` = **#E4572E (Krustenorange)**, Text `rgb(23, 19, 16)` = **#171310 (Espresso)** — niemals Weiß. Gleiche Werte für Sticky-CTA und Ergebnis-Button.
- Button-Höhen ≥ 48 px (Sticky-CTA exakt 48 px).
- Fokus-Ring nach Tab-Navigation: `outline: solid 3px rgb(46, 134, 171)` = **#2E86AB (Ofenlicht)** mit 2px Offset — sichtbar.

### 5. Inhalte
Alle 9 Sektionen im gerenderten DOM nachgewiesen: Hero, Story (Miriam-Zitat), „Was ist ein CAIO?" (Architekten-Analogie), „Die Lücke", Stufenleiter (`#stufen`), Kompetenzmatrix, „Unser Rückgrat", Selbsttest (`#test`), Footer.
Keine Wetter-Inhalte, kein PR-#2-Bezug (Repo wurde neu angelegt; siehe Hinweis unten).

### 6. `prefers-reduced-motion`
CSS-Regel vorhanden und global wirksam:
```css
@media (prefers-reduced-motion: reduce){ *{transition:none!important;animation:none!important} }
```
Damit sind alle Transitionen (Progressbar, Sticky-CTA, Hover) deaktiviert. Statisch geprüft — eine Emulation des Media-Query im In-App-Browser stand nicht bereit; die Regel greift pauschal für `*`.

---

## Gefundene Auffälligkeiten und deren Auflösung

1. **Sticky-CTA-Erstmessung widersprüchlich** (Tiefen 60–81 % scheinbar „falsch"): Verursacht durch `scroll-smooth` auf `<html>` — die Messung griff mitten in der Scroll-Animation. **Kein Seitenfehler.** Auflösung: Nachmessung mit `behavior: 'instant'` + Transition-Wartezeit → korrektes Verhalten (Tabelle oben).
2. **Keine echten Fehler an der Landingpage gefunden.** Der aus Anhang A übernommene Code wurde unverändert deployt.
3. **Tippfehler „Das ändert wir."** (Sektion „Die Lücke", Karte „Talent") — vom Auftraggeber nach dem Go-live angemerkt. Behoben zu „Das ändern wir." und erneut deployt; Live-Prüfung bestätigt den korrekten Text.

## URL-Testergebnis

- Workflow-Run „Deploy Landingpage": **success** (GitHub Actions).
- `https://dennis343.github.io/CAIO-Akademie/` → **HTTP 200**, HTTPS, 20 230 Bytes, enthält „Selbsttest starten" (2 Vorkommen: Hero-CTA + Sticky-CTA).

---

## Nachtrag: Finalisierung (31.10.2026)

Anlass: Auftraggeber sah „nur die Selbsttestseite". Diagnose: Die Seite war vollständig (alle 9 Sektionen, 3 609 px hoch) — der Browser-Viewport stand nach dem Selbsttest (`?r=caio`) am unteren Seitenende. Es fehlte eine Navigation zur Orientierung. Finalisiert wurde daraufhin (Commit `akademie: homepage finalisierung — navigation, impressum, datenschutz, meta-tags`):

| Ergänzung | Prüfergebnis |
|---|---|
| Sticky Hauptnavigation (Wortmarke + Rolle/Stufen/Selbsttest, `hidden sm:inline-flex` für „Rolle" mobil) | ✔ sticky, 57 px, 360 px ohne horizontales Scrollen (scrollWidth 360) |
| Anchor-Sprünge mit `scroll-margin-top: 72px` | ✔ Klick „Stufen" (360 px) und „Rolle" (1 280 px): Sektion landet exakt bei top = 72 px, nicht unter der Nav versteckt |
| Impressum (`impressum.html`, Betreiberdaten WissensReich Academy UG) | ✔ HTTP 200, noindex |
| Datenschutzerklärung (`datenschutz.html`: kein Tracking, externe Dienste offengelegt, Selbsttest rein lokal, Betroffenenrechte) | ✔ HTTP 200, noindex |
| Footer-Rechtslinks (Impressum · Datenschutz) | ✔ beide Links vorhanden |
| Meta-Tags (theme-color, Open Graph, Favicon als SVG-Data-URI) | ✔ im DOM |
| Sticky-CTA unten + Selbsttest unverändert | ✔ (keine Regression; erneute CTA-Farbmessung: Text `rgb(23,19,16)` Espresso auf `rgb(228,87,46)` Orange — eine Bildanalyse-Lesefehlermeldung „weißer Text" wurde per computed style widerlegt) |

**Hinweis zur Prüfung:** Betreiberangaben im Impressum (WissensReich Academy UG, Köln) wurden der bestehenden Wissensreich-Site entnommen und sollten vom Auftraggeber rechtlich gegengeprüft werden.

---

## Nachtrag: Berufsbild-Unterseite (31.10.2026)

Anlass: Auftraggeber-Recherche zu Quellen wie Kienbaum („Chief AI Officer: Pro & Contra CAIO"). Umgesetzt (Commit `akademie: berufsbild-unterseite (recherchierte quellen) + handlungsfelder auf der startseite`):

| Prüfpunkt | Ergebnis |
|---|---|
| `berufsbild.html` live, HTTP 200, indexierbar (kein noindex) | ✔ |
| 7 Sektionen: Handlungsfelder, Pro & Contra, Zahlen, Gehalt, Beispiele, Weg zur Rolle, Quellen | ✔ alle IDs vorhanden |
| 6 Handlungsfeld-Karten (entsprechen den 6 Matrix-Dimensionen) | ✔ |
| 360 px ohne horizontales Scrollen (scrollWidth 360) | ✔ |
| Visueller Screenshot-Check (Nav, Hero, CTA, Karten, Typografie) | ✔ keine Blocker |
| Startseite: neuer Handlungsfelder-Block in „Was ist ein CAIO?" (6 Pills + Link zur Unterseite, Ofenblau-Karte mit Mehlweiß-Text) | ✔ verifiziert, 360 px fit |
| 4 externe Quellen-Links erreichbar (Kienbaum 200, Bitkom 200, stellenmarkt.de 200, Business Insider 301→folgt) | ✔ |
| Quellenangaben mit Datum und Autoren (Kienbaum: Cescatti/Lüscher/Spisa, 25.02.2025) | ✔ |
| Gehaltsangaben mit Quellenbenennung und „ohne Gewähr"-Hinweis | ✔ |

Verwendete Quellen: Kienbaum-Blog (25.02.2025), Bitkom-Pressemitteilung (25.09.2024), stellenmarkt.de-Berufsporträt, Business Insider/Gruenderszene, EU AI Act Art. 4. Reale CAIO-Beispiele: SAP (Philipp Herzig), Deutsche Bahn (Dr. Michael Drass) — laut Bitkom/Presseberichterstattung.

---

## Nachtrag: Ausbaustufe 4 (31.10.2026, Commits `3ed724e` + `25fda53`)

| Anforderung (Auftraggeber) | Umsetzung | Prüfergebnis |
|---|---|---|
| Zweite Navigationsebene: Sektionstitel beim Scrollen in der Leiste anzeigen | „Du bist hier:"-Strip unter der Hauptnav, aktualisiert per Scroll-Listener auf `data-ort`-Attribute | ✔ 5/5 Sektionen korrekt (Start, Rolle, Stufen, Spannungsfeld, Selbsttest) |
| Stufen einheitlich benennen | Umbenennung in AI Professional (AIP) / AI Officer (AIO) / AI Architekt (AIA) / Chief AI Officer (CAIO); Badgenamen (Sandguss/Kupfer/Silber/Gold) und Altnamen (AI Aware/AI Navigator/AI Architect) vollständig entfernt — auch Matrixkopf (S1 · AIP …) und Berufsbild-Seite | ✔ grep-Konsistenzcheck: keine Altnamen in `landingpage/` |
| Direkte Kontaktmöglichkeit neben Selbsttest, inkl. Auswahl der priorisierten Weiterbildung | Kontakt-Karte unter dem Selbsttest: Name, E-Mail, Stufen-Auswahl (AIP/AIO/AIA/CAIO/Beratung), Nachricht; Button baut `mailto:` an concierge@wissensreich.academy — kein Datenversand über die Seite (DSGVO-konsistent, transparent ausgewiesen) | ✔ Handler live getestet (Bestätigungstext erscheint) |
| Sektion Spannungsfeld (Digitalisierungs-/Performance-Wunsch vs. DSGVO, EU AI Act, US CLOUD Act, Kundenwünsche, Wirtschaftlichkeit) | Neue Sektion `#spannungsfeld` (6 Kraft-Karten mit „zieht nach / setzt Grenzen" + Auflösungsblock „Klartext statt Schwarz-Weiß" mit 4 Regeln + Glossar-Link), inkl. Ortsanzeige-Label | ✔ 6 Karten vorhanden, 360 px fit |
| Glossar als Unterseite (SEO + Themenklärung) | `glossar.html`: 34 Begriffe in 4 Abschnitten (A–D/E–K/L–R/S–Z) mit Schnellsprung, Stufen-Kürzeln AIP/AIO/AIA/CAIO, Rechts- und Tech-Begriffen (DSGVO, EU AI Act, Art. 4, CLOUD Act, AVV, LLM, RAG …), SEO-Meta, interne Links auf Stufen/Berufsbild/Selbsttest; verlinkt aus Footer (alle Seiten) und Spannungsfeld-Sektion | ✔ HTTP 200, 34 `<dt>`, kein Overflow |
| Fix: Sticky-CTA verdeckt Footer-Links | Footer-Padding `pb-28` auf Seiten mit Sticky-CTA (Startseite, Berufsbild); Rechtsseiten-Footer um Glossar-Link ergänzt | ✔ Footer-Links liegen 112 px über Seitenende, nicht verdeckt |

**Gefundener und behobener Fehler:** Das Kontakt-Select hatte keine Breitenbegrenzung; die längste Option („Stufe 4 · Chief AI Officer (CAIO) — Governance & Portfolio") erzeugte horizontales Scrollen bei 360 px. Behoben per `w-full` auf allen Formularfeldern (Commit `25fda53`); danach scrollWidth = 360 = innerWidth, Select 272 px breit.

**Hinweis:** Interne Curriculum-Dokumente (`caio-akademie/*.md`) verwenden weiterhin die bisherigen Stufennamen (AI Aware/AI Navigator/AI Architect) — die Umbenennung wurde auf Wunsch des Auftraggebers auf allen öffentlichen Seiten umgesetzt; die Markdown-Dokumente können bei Bedarf nachgezogen werden.

---

## Nachtrag: Selbsttest-Feinschliff (31.10.2026, Commit `2b83764`)

| Änderung | Prüfergebnis |
|---|---|
| Intro-Text neu: „Fünf Fragen. 2 Minuten. Direkt orientiert sein." | ✔ live |
| Kurs-Empfehlung in der Auswertung („Sehr wahrscheinlich für dich passend: …") je Band: 0–5 P. → AI Professional (AIP) · 6–10 P. → AI Officer (AIO) und AI Architekt (AIA) · 11–15 P. → AIO und AIA, jeweils verkürzt | ✔ alle 3 Bänder live durchgeklickt und verifiziert |
| Sticky-CTAs auf „– 2 Minuten" vereinheitlicht (Startseite + Berufsbild) | ✔ live |
| 360 px weiterhin ohne horizontales Scrollen | ✔ |

Hinweis zum Test: Erste Browserprüfungen liefen auf die gecachte Vorversion (GitHub-Pages-Cache, max-age=600); Verifikation daher mit Cache-Buster gegen den Serverbestand wiederholt.

---

## Nachtrag: Fundament & Schwerpunkte (31.10.2026, Commit `f329da9`)

| Änderung | Prüfergebnis |
|---|---|
| AI Professional (AIP) aufgewertet: Tagline „Baut das Fundament.", Umfang „Über 32 Stunden" (statt „~20"), Detailzeile „Schwerpunkt: Menschen & Change" — auf Startseite, Berufsbild-Seite, Glossar und im Selbsttest-Bandtext | ✔ live, keine „20 Stunden"/„Öffnet die Augen"-Reste (grep) |
| Kompetenzmatrix: je Stufe ein forcierter Schwerpunkt mit ★ markiert — AIP → Menschen & Change (offen reden) · AIO → Wirtschaftlichkeit (Business Case prüfen) · AIA → Technologie & Daten (Mitgestalten) · CAIO → Sicherheit & Recht (Governance führen); Desktop-Zellen orange hinterlegt, Mobile-Chips mit Stern-Ring, Legende unter der Matrix | ✔ 4 Desktop-★-Zellen + 4 Mobile-★-Chips + Legende live |
| Alle 4 Stufenkarten (Startseite + Berufsbild) führen jetzt ihre Schwerpunkt-Zeile | ✔ |
| 360 px weiterhin ohne horizontales Scrollen | ✔ |

---

## Nachtrag: Feinschliff Stufen & Matrix (31.10.2026, Commit `6bdbf45`)

| Änderung | Prüfergebnis |
|---|---|
| AIP-Tagline präzisiert: „Bereitet das Fundament vor." (statt „baut") — Stufenkarte, Selbsttest-Band, Berufsbild, Glossar | ✔ live |
| Matrixzellen verständlicher: „Nutzen an Beispielen einschätzen" (statt „verstehen"), „★ Business Cases priorisieren", „★ Regeln setzen und Einhaltung prüfen" (statt „Governance führen"), „Kundenerlebnis messbar machen" (statt „CX als KPI"), „★ Potenziale identifizieren & Chancen begreiflich machen" (statt „offen reden") | ✔ alle Zellen live |
| AIO-Schärfung: Stufenkarte ergänzt „Konzipiert Projekte und überwacht den Fortschritt"; Berufsbild-Karte entsprechend | ✔ |
| Fremd-Abkürzungen entfernt: „CX als KPI" ersetzt; Contra-Liste (Berufsbild) „CDO und CTO" → „bestehende Rollen in Data und IT" | ✔ grep: keine Alt-Texte |
| Stufen-Icons (Inline-SVG, Outline-Stil): AIP Buch · AIO Kompass · AIA Lineal · CAIO Schild mit Haken — in Stufenfarbe neben dem Titel | ✔ 4/4 Icons live |
| Matrix farbcodiert nach Stufenfarben: Spaltenköpfe Sand/Orange/Lichtblau/Nachtblau, Zellen je Spalte leicht getönt, ★-Zellen verstärkt | ✔ Spaltenfarben computed verifiziert |
| Neuer Absatz Förderfähigkeit (nach der Stufenleiter): grundsätzlich förderfähig, Ermittlung im individuellen Gespräch, 30–100 % Zuschuss möglich | ✔ live |
| 360 px ohne horizontales Scrollen | ✔ |

---

## Nachtrag: Selbsttest-Titel, Formular-Absicherung & Dankesseite (31.10.2026, Commits `eb1bfd4`–`2269469`)

| Anforderung | Umsetzung | Prüfergebnis |
|---|---|---|
| Testtitel neu | H2: „Wie viel KI-Kompetenz steckt schon in mir?" | ✔ live |
| DSGVO-Checkbox in beiden Formularen | Pflicht-Checkbox mit Link zur Datenschutzerklärung (Selbsttest + Kontakt); Datenschutzerklärung um ALTCHA-Absatz ergänzt | ✔ live, Pflichtfeld wirksam |
| ALTCHA in beiden Formularen | ALTCHA-Widget „Ich bin kein Roboter" (Proof of Work). Erst altcha.org-CDN, dann jsDelivr (altcha.org in Teilstücken der Welt blockiert). **Finale Lösung: statisch eingebettete Challenge (SHA-256, lokal generiert und gegenrechnet) — Verifizierung läuft komplett im Browser, ohne externe API** | ✔ E2E: beide Widgets lösen lokal → „Bestätigt", Payload 332 Zeichen |
| Redirect auf Dankesseite `/danke` | Neue Seite `danke/index.html` (pretty URL `/CAIO-Akademie/danke/`), personalisiert per `?r=`: Selbsttest-Ergebnis (Badge + Kurs-Empfehlung) bzw. Kontakt-Text; drei nächste Schritte + CTAs; noindex | ✔ E2E Selbsttest: `/danke/?r=caio` zeigt „Versteckter CAIO 👑" + Kursempfehlung. E2E Kontakt: mailto wird gebaut, Redirect `/danke/?r=kontakt` mit Kontakttext |
| Submit-Gate | Absenden erst nach DSGVO-Haken + ALTCHA-Verifizierung; sonst roter Hinweis. Gate prüft das Verifizierungs-Input (das `state`-Property existiert in der eingesetzten Widget-Version nicht — Fehler gefunden und behoben, Commit `2269469`) | ✔ |

**Fehler und Fixes dieser Stufe:** (1) altcha.org-CDN netzwerkseitig blockert → jsDelivr; (2) Challenge-API ebenfalls blockiert → statische lokale Challenge; (3) `w.state`-Property fehlend → Gate prüft verstecktes Verifizierungs-Input. **Hinweis:** Die statische Challenge ist ein rein clientseitiges Puzzle (Spam-Vermeidung ohne Tracking); sobald ein Formular-Backend existiert (Backlog), sollte auf serverseitig generierte Challenges umgestellt werden.

---

## Nachtrag: Über-uns-Seite, Hero-Neuausrichtung & externe Rechtslinks (31.10.2026, Commit `1596fc9`)

| Anforderung | Umsetzung | Prüfergebnis |
|---|---|---|
| „Leitbild"-Verweis einlösbar machen | Neue Seite `ueber-uns.html` mit echtem Leitbild (Miriam-Story + Warum/Woran/Versprechen/Für wen, weitgehend wortidentisch zu Anhang B); figcaption auf der Startseite verlinkt jetzt auf `ueber-uns.html#leitbild` | ✔ live |
| Highlights der Über-uns-Seite auf der Startseite | Neues Band „Die Akademie in Zahlen" unter der Story: 10+ Jahre Förder-Expertise · bis 95 % Bewilligungsquote · 18 Dozenten & Experten · AZAV/ISO — plus Link „Über uns →" | ✔ live |
| Hero auf Befähigung (statt Selbsttest-Fokus) | Neuer Hero: Eyebrow „Ein Projekt der Wissensreich Academy", H1 „Wir machen aus KI-Pflicht KI-Kompetenz.", Primär-CTA „Die vier Stufen ansehen", Sekundär „Selbsttest — 2 Minuten" | ✔ live verifiziert |
| Zahlen/Daten/Fakten Dozenten & Unterstützer | Über-uns-Seite: Zahlen-Karten (10+ Jahre, bis 95 %, 30–100 %, 4 Stufen), Zertifikate mit Original-Siegelbildern (AZAV/ISO 9001, ISO 56002:2019, BVMW), Awards (Top 100 Speakers 2026, German Brand Award), Presse-Zeile (Spiegel · Handelsblatt · WAZ · Funke · Hamburg1), Dozenten-Grid mit 18 Fotos + Namen aus dem Wissensreich-Bestand (Rollen nur wo belegt: GF Fürstenau/Domin; Bakir, Beilharz, Löhr mit Themen von der Live-Site) | ✔ 18 Karten, Bilder laden (lazy, HTTP 200) |
| Impressum/Datenschutz extern auf Wissensreich Academy | Alle Footer- und Formular-Links auf `https://wissensreich.academy/impressum` bzw. `/datenschutz`, jeweils `target="_blank" rel="noopener"`; lokale Rechtsseiten gelöscht (404 bestätigt), README aktualisiert | ✔ |
| Navigation | „Über uns" in Nav (Startseite + alle Unterseiten + Dankeseite) und allen Footern | ✔ |
| 360 px ohne horizontales Scrollen (Start + Über-uns) | ✔ |

**Quellen der Fakten:** Live-Site wissensreich.academy (10+ Jahre, bis 90–95 % Bewilligungsquote, Zertifikate, Awards, Dozenten-Themen, GF) und Asset-Bestand des Wissensreich-Repos (18 Dozenten-Fotos, Siegel, Awards). Keine Rollen oder Zahlen erfunden — unbelegte Dozenten heißen neutral „Praxis-Experte/-in".

---

## Nachtrag: Conversion-Paket nach Maximus-Analyse (31.10.2026, Commit `ff7cb19`)

Auftraggeber-Freigabe: P1–P6 + O1/O2 (O3 WhatsApp entfallen — im Wissensreich-Bestand exists keine Messenger-Nummer; Telefon +49 208 377 695 71 verfügbar als Alternative).

| Maßnahme | Umsetzung | Prüfergebnis |
|---|---|---|
| P1 FAQ | 10 Akkordeon-Fragen (`#faq`) + FAQPage-JSON-LD für Rich-Snippets | ✔ 10 Details, JSON-LD im DOM |
| P2 Erstgesprächs-Ablauf | Karte „So läuft das kostenfreie Erstgespräch" (3 Schritte + 4 Takeaways) unter der Kontakt-Karte | ✔ |
| P3 Vergleichstabelle | „Drei Wege zur KI-Kompetenz": Tool-Schulung · KI-Agentur · CAIO-Akademie (Desktop-Tabelle, mobil 3 Akkordeon-Karten) | ✔ |
| P4 CTA-Frequenz | 6 dezente Sekundär-CTAs nach Matrix, Spannungsfeld, Ökosystem u. a. | ✔ |
| P5 Stimmen & Praxisfall | 3 echte Google-Rezensionen (Thaller, Augner Seminare, Zijlstra — wörtliche Zitate von wissensreich.academy) + Praxisfall KI-Bäckerei | ✔ 3 Figuren, Praxisfall vorhanden |
| P6 Förder-Topbar | Dezente Leiste über der Navigation: „Förderfähig: 30–100 % Zuschuss — im kostenfreien Erstgespräch ermitteln" | ✔ |
| O1 Zahlen-Counter | Zahlen-Band zählt beim ersten Sichtbarwerden (IntersectionObserver, 900 ms, reduced-motion = Sofortwert) | ✔ Endwerte 10+ / bis 95 % / 18 |
| O2 Passt-zu-dir | 4 ehrliche Ja-Kriterien + ehrliche 0–2-Ja-Empfehlung (Erstgespräch statt Test) | ✔ 4 Karten |
| Ortsanzeige | Neue Labels: Vergleich · Stimmen · Passt zu dir? · FAQ | ✔ |
| 360 px ohne horizontales Scrollen | ✔ |

**Bewusst nicht übernommen** (Tonalitätsregel „Nie Angst machen"): künstliche Verknappung/„Nur diesen Monat", anonyme Siegel, Rezessions-Angst-Appell, verschleierte Preise.

---

## Nachtrag: Ortsanzeige auf allen Unterseiten & Logo (31.10.2026, Commit `d1cadbe`)

| Anforderung | Umsetzung | Prüfergebnis |
|---|---|---|
| Zweite Navigationsebene („Du bist hier:") auf allen Unterseiten | Strip in der Navigation aller 5 Seiten + Scroll-Spy-Skript + `data-ort`-Labels: Berufsbild (Berufsbild · Handlungsfelder · Pro & Contra · Zahlen · Gehalt · Beispiele · Weg zur Rolle · Quellen), Über uns (Über uns · Leitbild · Zahlen & Fakten · Zertifikate & Awards · Dozenten), Glossar (Glossar · A–D · E–K · L–R · S–Z), Danke (statisch „Danke"); Scroll-Offset auf 104 px vereinheitlicht | ✔ Berufsbild 4/4 Sektionen korrekt, Glossar 3/3 korrekt (echtes Scrollen, instant) |
| Logo entwickeln | Handgezeichnetes SVG-Mark „Ofenbogen mit vier Stufen": Ofenblauer Grundstein (Bogen = Praxisfall KI-Bäckerei/Ofen), vier aufsteigende Stufen (AIP→CAIO), oberste Stufe in Krustenorange; dazu Wortmarke „CAIO-Akademie" (Space Grotesk) mit Claim „Ausbildung zum Chief AI Officer" | ✔ Nav-Wortmarke 28 px, Footer-Lockup 40 px mit Claim, auf allen Seiten |
| Favicon | Das Mark als URL-kodiertes SVG-Favicon auf allen Seiten (ersetzt das generische „C") | ✔ im DOM verifiziert |
| Asset-Ablage | `assets/logo-mark.svg` für externe Nutzung (OG-Bild, Print etc.) | ✔ |
| 360 px ohne horizontales Scrollen | ✔ | |

**Design-Begründung (nicht generisch, kein KI-Slop):** geometrische Konstruktion aus zwei Bedeutungsträgern (Backofen-Bogen = handwerklicher Praxisfall; Stufenleiter = 4-stufiger Ausbildungspfad in den echten Stufenakzenten), auf 16 px Favicon-Größe lesbar reduziert, flach ohne Verläufe/Glow.

---

## Nachtrag: Umbenennung zu „CAIO Institut" (31.10.2026, Commit `3d6247f`)

| Prüfpunkt | Ergebnis |
|---|---|
| „CAIO-Akademie" → „CAIO Institut" auf allen 5 Seiten, inkl. Grammatik-Fälle („Glossar des CAIO Instituts", „Leitbild des CAIO Instituts", „Interesse am CAIO Institut", „Das CAIO Institut baut auf …") | ✔ |
| Standalone-„Akademie"-Begriffe vereinheitlicht („Das Institut in Zahlen", „Passt das Institut zu dir?", „Institut-Infos", „Kontakt zum Institut") | ✔ |
| Titel-Tags: Startseite jetzt „CAIO Institut – Wir machen aus KI-Pflicht KI-Kompetenz" | ✔ |
| Live-Check: 16× „CAIO Institut", 0× „Akademie" auf der Startseite | ✔ |
| README mit umbenannt | ✔ |

**Anlass:** Die Domains www.caio-institut.de und www.caio-ausbildung.de sind für diesen Auftritt reserviert. Domain-Anbindung dokumentiert (GitHub Pages oder Vercel). **Offen nach DNS-Umzug:** og:url-Angaben enthalten noch die github.io-URL und sind bei Aktiv-Domain zu aktualisieren.

---

## Nachtrag: Domain-Go-Live www.caio-institut.de (31.10.2026)

| Schritt | Prüfergebnis |
|---|---|
| Ursachenanalyse: CYON-DNS-Records korrekt, aber Registry (DENIC) führte nur einen Nsentry (A → CYON-Parking-IP) statt Nameserver-Delegation → Aktivierung von cyonDNS durch Auftraggeber | ✔ Whois danach: ns1/ns2.cyon.ch |
| Zwischenfall: github.io-URL leitete auf die noch nicht auflösbare Domain um (Seite offline) → Custom-Domain temporär entfernt, Seite sofort wieder online | ✔ HTTP 200 |
| Nach Delegation: Custom-Domain `www.caio-institut.de` erneut gesetzt, Deployment aktualisiert | ✔ https 200, Inhalt vollständig |
| HTTPS-Zwang aktiviert (Zertifikat automatisch ausgestellt) | ✔ http → 301 → https |
| og:urls auf `https://www.caio-institut.de/…` umgestellt (inkl. Korrektur eines URL-Pfadfehlers aus der Umbenennung) | ✔ live verifiziert |
| github.io-URL bleibt als Adresse erreichbar; E2E-Formulare/Selbsttest unberührt (relative Pfade) | ✔ |

**Offen:** `caio-ausbildung.de` — 301-Weiterleitung beim Registrar/CYON auf `https://www.caio-institut.de` einrichten (Zweitdomain, keine eigene Ausspielung nötig).

---

## Nachtrag: CAIO-Erklär-Einschub, Hero-Bilder & KI-Bubble (31.10.2026, Commits `4fb6bd3` + `f38e454`)

| Anforderung | Umsetzung | Prüfergebnis |
|---|---|---|
| Einschub „Was ist ein CAIO?" ganz oben auf der Startseite | Karte direkt unter dem Hero: Begriffszzerlegung **Chief / AI / Officer** einzeln auf Deutsch erklärt; C-Level-Riege (neben CEO/CFO/CTO), extremes Aufstiegspotenzial, Vernetzung, Puls der Zeit, Gehalt „selten nur fünfstellig — häufig sechsstelllig" mit Link zur Gehalts-Sektion (Quellen); Ortsanzeige-Label ergänzt | ✔ live (6 Merkmale verifiziert), 360 px fit |
| Emotionale Hero-Bilder auf allen Unterseiten | Echte kuratierte Stockfotos (Unsplash, freie Lizenz, 1600 px quer, `aspect-16/7`, `fetchpriority=high`): Berufsbild = erfahrene Führungskraft mit Tablet · Über uns = warme Bäckerei (Praxisfall) · Glossar = offenes Buch im warmen Licht · Danke = Händedruck vor Laptop. Bewusst echte Fotos statt KI-Generierung (Realismus, kein KI-Slop) | ✔ 4/4 geladen (HTTP 200, naturalWidth > 0); Bildanalyse: 8,5/10 bzw. 8/10 („authentisch, keine KI-Artefakte") |
| Sticky Conversion-Bubble „Diese Seite mit deiner KI zusammenfassen lassen" | Floating-Bubble rechts unten (bottom-24, über der Sticky-CTA) auf allen 5 Seiten; Popover mit ChatGPT / Claude / Z.ai; Prompt inkl. Seiten-URL wird in die Zwischenablage kopiert, ChatGPT & Claude öffnen mit vorausgefüllter Frage (`?q=`), Z.ai öffnet Chat mit Einfüge-Hinweis; Outside-Click schließt; aria-expanded/controls | ✔ Popover öffnet, 3 Anbieter, kein Overflow, keine Kollision mit Sticky-CTA, auf allen 5 Seiten live |

## Anmerkungen zur Umgebung (Abweichung vom Briefing)

- Das Briefing (JOB 1) beschreibt einen offenen PR #2 „Wetterdaten-Integration" mit Branch `feature/wetterdaten` auf `dennis343/KI-baeckerei`. Dieser Stand existierte nicht: Das Repo wurde zur Eskalator-AG transferiert, PR #2 ist dort bereits gemergt (SEO-Landingpage), ein Wetter-Branch existierte nie, ebenso wenig `config.py`/`produkte.py`. JOB 1 ist damit obsolet; die DoD „kein Wetter-Code im Repo" ist durch Neuanlage des Repos `dennis343/CAIO-Akademie` erfüllt. Der gemergte PR #2 im Eskalator-AG-Repo wurde bewusst nicht angetastet.
- Aus gleichem Grund wurde — nach Freigabe des Auftraggebers — die Landingpage in das neue Repo `dennis343/CAIO-Akademie` committet statt in das Transfer-Repo. Die Pages-URL weicht daher vom Briefing ab: `https://dennis343.github.io/CAIO-Akademie/` statt `…/KI-baeckerei/`.
- **Nachtrag 30.10.2026:** Die Anhänge B–J wurden nachgereicht und am gleichen Tag wortidentisch committet (`00-leitbild.md`, `01-strategie.md`, `02-die-rolle.md`, `03-stufe-navigator.md`, `selbsttest.md`, 3 Templates, `README.md`). Damit ist JOB 2 vollständig: alle 10 Pfade vorhanden. Einzige bewusste Abweichung von der Wortidentität: die README-URL wurde auf die real existierende Live-URL `https://dennis343.github.io/CAIO-Akademie/` korrigiert (die im Anhang J genannte `…/KI-baeckerei/`-URL existiert nach dem Repo-Wechsel nicht). `landingpage/index.html` entspricht Anhang A (352 Zeilen) zzgl. der freigegebenen Typo-Korrektur.
