# CAIO Institut — Paket-Visualisierungen

Drei einheitliche Produkt-Darstellungen im Cover-Stil (Navy #0D1B2A · Gold #D4A94B ·
Cyan #41C9FF · Studio-Hellgrau). Zahlen aktuell: 85 Seiten · 18 Kapitel · 4 Teile ·
8 Praxis-Anhänge · 5 Vorlagen.

## Dateien je Paket

| Paket | Basis | Vektor (editierbar) | Druck/Zoom 2× |
|---|---|---|---|
| 1 · Handbuch (17,50 €) | `paket-buch.jpg` (1536×1024) | `paket-buch.svg` | `paket-buch@2x.jpg` (3072×2048) |
| 2 · Handbuch + Hörbuch (27,50 €) | `paket-hoerbuch.jpg` | `paket-hoerbuch.svg` | `paket-hoerbuch@2x.jpg` |
| 3 · Komplett (61,50 €) | `paket-komplett.jpg` | `paket-komplett.svg` | `paket-komplett@2x.jpg` |

Dazu je Paket die **HTML-Quelldatei** (bearbeitbar, dann neu rendern, s. u.).

## Einsatz

- **Web/Landingpage**: `../landingpage/assets/img-opt/paket-*.webp` (480/768/1536, srcset eingebaut in `buch.html`)
- **Affilicon/Shop-Produktbilder**: die JPGs (Basis oder 2×)
- **Social Media/Anzeigen**: JPGs; Zuschnitt 1:1/4:5 aus dem 2×-JPG
- **Print/Flyer**: SVG (verlustfrei skalierbar) oder 2×-JPG
- **Anpassungen** (Preis, Texte): SVG direkt im Design-Tool editieren — oder HTML-Quelle
  ändern und neu rendern:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --window-size=1536,1024 \
  --screenshot="paket-buch.png" "file://$PWD/paket-buch.html"
```

## Schriften

SVG/HTML nutzen »Space Grotesk« (Display) + »Inter« (Text); ohne Installation
fällt der Browser/Editor auf Arial zurück. Die Schriften liegen unter
`../landingpage/assets/fonts/` (self-hosted, DSGVO-konform).
