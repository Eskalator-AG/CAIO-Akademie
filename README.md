# KI-Bäckerei & CAIO Institut

Ein Repo. Zwei Bausteine. Ein Ziel: KI-Kompetenz, die im Alltag arbeitet.

## 1. KI-Bäckerei – Bestellvorhersage (MVP, Python)

Automatische Bestellvorhersage für den Großhandel. Die allgemein gültigen Mengen bilden die Grundlage.

- `config.py` – zentrale Konfiguration (Mengen, Faktoren)
- `produkte.py` – Produktdaten (12 Produkte, Basismenge pro KW, Uhrzeit der Bestellung)
- Berechnung: Tagesfaktor (1 / 1.25 / 0.75) × Basismenge pro KW, gestaffelt über KW 1–4
- Wochenlogik: vor dem Sonntag +25 %, am Montag −25 %

## 2. CAIO Institut

Gestufte Ausbildung zur Rolle „Chief AI Officer" in 4 Stufen.
Praxisfall über alle Stufen: die KI-Bäckerei.

| Datei | Inhalt |
|---|---|
| `caio-akademie/00-leitbild.md` | Warum wir existieren – Leitbild mit Miriam-Story |
| `caio-akademie/01-strategie.md` | Markt, Zielgruppen, Message House, Tonalität |
| `caio-akademie/02-die-rolle.md` | Der CAIO greifbar: die Architekten-Analogie |
| `caio-akademie/03-stufe-navigator.md` | Curriculum Stufe 2 inkl. Navigator-Raster |
| `caio-akademie/selbsttest.md` | Spezifikation des Lead-Magneten |
| `caio-akademie/templates/` | Business Case, Vergleichsbogen, Raster |

**Kernsatz:** Der CAIO ist der Architekt der KI im Unternehmen. Er plant, steuert, prüft und nimmt ab. Er mauert nicht.

## Landingpage

- Pflicht: `landingpage/index.html`
- Unterseiten: `berufsbild.html`, `ueber-uns.html` (Leitbild, Zahlen, Dozenten), `glossar.html`, `danke/` (Dankesseite nach Formular)
- Impressum/Datenschutz: verlinkt extern auf wissensreich.academy (neuer Tab)
- Deployment: GitHub Pages (Workflow `.github/workflows/deploy.yml`)
- URL: https://dennis343.github.io/CAIO Institut/

## Regeln für Beiträge

- Tonalität und Zielgruppen: siehe `caio-akademie/01-strategie.md`
- Keine Wetter-Integration (PR #2 wurde verworfen und bleibt verworfen)
- Python-Dateien der Bestellvorhersage nicht ohne Absprache ändern
