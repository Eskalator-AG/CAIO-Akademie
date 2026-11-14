# Design: CAIO Institut

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

Genre: modern-minimal. Theme: custom (vibe: „Bäckerei-Wärme trifft Vorstandsetage — creme, ofenblau, ein oranger Impuls“). Locking this as the project's system.

## System
- Genre: modern-minimal (B2B-Bildungsanbieter, deutsch, Sie-Form für Entscheider, Du-Form für Lernende)
- Shape of the first page: editorial long-form mit Stufen-Matrix (Produktvergleich), Selbsttest und FAQ
- Theme: custom — die Marke ist fest; keine Katalog-Themes dealen, keine Paletten erfinden
- Axes: warm paper / grotesk display / orange accent · posture: grounded, versprechend ohne Superlative

## Tokens
Source of truth: `assets/theme.css` (light + dark via `.dark`) und `assets/tw.css` (kompilierte Utilities). Die Rollen:

```css
:root {
  --c-bg: #FAF6EF;        /* mehl — Seitenhintergrund */
  --c-bg-card: #FFFFFF;   /* Karten */
  --c-text: #171310;      /* espresso */
  --c-text-muted: rgba(23,19,16,.6);
  --c-heading: #16425B;   /* ofen — alle Überschriften */
  --c-accent: #E4572E;    /* orange — CTAs, Impulse */
  --c-border: rgba(23,19,16,.1);
  --c-focus: #2E86AB;     /* licht — Fokusringe */
  --c-shadow: 0 2px 8px rgba(23,19,16,.06);
}
.dark { /* Überschreibungen in theme.css, nie inline */
  --c-bg: #0F1218; --c-bg-card: #1A1E28; --c-text: #E8E4DD;
  --c-heading: #7BB5DC; --c-accent: #FF6B3D; --c-focus: #5BA8D0;
}
```

- Fonts (self-hosted, assets/fonts/ — nie Google Fonts): **Space Grotesk** (display/head), **Inter** (body), **Fraunces italic** (story, Zitate, Charakter-Sätze)
- Stufen-Farbcodes (nur inhaltlich): sand #F2C57C = AIP · orange #E4572E = AIO · licht #2E86AB = AIA · nacht #0E3A53 = CAIO
- Radius: Karten 16px (rounded-2xl), Buttons/Inputs 12px (rounded-xl), Pills full
- Schatten: nur --c-shadow; nie mehrschichtige Glows

## Controls
- Primary: bg-orange, Text espresso ( hell: dunkler Text auf orange), rounded-xl, min-height 48px, font-head bold
- Secondary: border-2 border-ofen, Text ofen, gleiches Radius/Height
- Tertiary: Text-Link ofen, underline offset-4
- Tap-Targets ≥ 44–48px; Consent-/Form-Inputs ≥ 16px Schrift (iOS-Zoom-Schutz)

## Motion
- Character: calm. transform/opacity only; nie transition: all; nie width/height/top/left animieren (Fortschrittsbalken = transform: scaleX)
- Eine Reveal-Animation höchstens; prefers-reduced-motion: alles sofort Endzustand (steht bereits in allen Seiten)

## Sprache & Inhalte (Teil des Systems)
- Preise immer „inkl. MwSt.“; keine Countdowns, keine künstliche Knappheit, keine unbelegten Zahlen (Quelle angeben: Kienbaum 02/2025, EU AI Act Art. 4 …)
- Kontakt: kontakt@caio-institut.de · Footer: „CAIO Institut · Ein Projekt der WissensReich Akademie“
- Rechtsseiten (/impressum, /datenschutz, /widerruf, /agb, /verbraucherinformationen) sind verpflichtend verlinkt
- Keine Anglizismen (Ausnahmen: KI, Landingpage, CRM, Game-Changer); Stufen als Rollennamen (Professional AIP … Chief Officer CAIO), nie „Stufe 1–4“ als Header
- Jede Seite: dark-mode-kompatibel (Klassen aus tw.css/theme.css nutzen, keine Inline-Farben ohne .dark-Pendant)

## Exports
`assets/theme.css` (Tokens + Dark) und `assets/tw.css` (Utilities) in diesem Projekt. Neu baut, wer eine neue Seite braucht: bestehende Seiten als Muster (angebot-a.html ist das kompakte Muster, index.html das volle Muster).
