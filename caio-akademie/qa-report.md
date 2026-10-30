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
2. **Keine echten Fehler an der Landingpage gefunden.** Es gab nichts zu fixen; der aus Anhang A übernommene Code wurde unverändert deployt.

## URL-Testergebnis

- Workflow-Run „Deploy Landingpage": **success** (GitHub Actions).
- `https://dennis343.github.io/CAIO-Akademie/` → **HTTP 200**, HTTPS, 20 230 Bytes, enthält „Selbsttest starten" (2 Vorkommen: Hero-CTA + Sticky-CTA).

## Anmerkungen zur Umgebung (Abweichung vom Briefing)

- Das Briefing (JOB 1) beschreibt einen offenen PR #2 „Wetterdaten-Integration" mit Branch `feature/wetterdaten` auf `dennis343/KI-baeckerei`. Dieser Stand existierte nicht: Das Repo wurde zur Eskalator-AG transferiert, PR #2 ist dort bereits gemergt (SEO-Landingpage), ein Wetter-Branch existierte nie, ebenso wenig `config.py`/`produkte.py`. JOB 1 ist damit obsolet; die DoD „kein Wetter-Code im Repo" ist durch Neuanlage des Repos `dennis343/CAIO-Akademie` erfüllt. Der gemergte PR #2 im Eskalator-AG-Repo wurde bewusst nicht angetastet.
- Aus gleichem Grund wurde — nach Freigabe des Auftraggebers — die Landingpage in das neue Repo `dennis343/CAIO-Akademie` committet statt in das Transfer-Repo. Die Pages-URL weicht daher vom Briefing ab: `https://dennis343.github.io/CAIO-Akademie/` statt `…/KI-baeckerei/`.
- **Offen:** Die Anhänge B–J (9 Markdown-Dateien für `caio-akademie/`) lagen dem Briefing nicht bei und wurden nicht selbst erfinden (Briefing-Regel). Sie werden vom Auftraggeber nachgereicht und unter den im Briefing JOB 2 genannten Pfaden ergänzt. `landingpage/index.html` ist wortidentisch zu Anhang A (352 Zeilen, exakt).
