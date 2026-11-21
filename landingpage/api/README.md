# API-Endpunkte — Setup & offene Punkte

## Endpunkte

| Route | Zweck | Status |
|---|---|---|
| `POST /api/reservierung` | Reservierung speichern, Mails, Lead (Abschnitt 4) | **live** |
| `GET /api/reservierung?storno=<id>` | Storno aus Bestätigungs-Mail (Abschnitt 9) | **live** |
| `POST /api/affilicon/ipn` | Zahlungsnachricht → Download + Gutschein + Purchase (5.4) | nach Affilicon-Setup (siehe `AFFILICON-SETUP.md`) |
| `GET /api/affilicon/status?o=<nr>` | Polling der Download-Seite | nach Affilicon-Setup |
| `GET /api/download?t=<token>` | Datei-Auslieferung (Variante B) | optional, siehe SETUP.md |

## Env-Variablen (Vercel → Settings → Environment Variables)

Minimal für Start (Reservierung funktioniert sofort, Mails nach Key):
- `RESEND_API_KEY` (Resend; Domain caio-institut.de dort verifizieren)
- `MAIL_FROM` = `CAIO Institut <reservierung@caio-institut.de>`
- `MAIL_TO` = `kontakt@caio-institut.de`
- `STORE` = `upstash` + `UPSTASH_REDIS_REST_URL`/`_TOKEN` (empfohlen; ohne Speicher läuft eine in-memory Instanz — Reservierungen überleben keinen Cold Start, für den Test-Modus ok)

Für Meta (Abschnitt 6, Abschnitt 11.1):
- `CONVERSION_TRANSPORT` = `meta_direct` (jetzt) → `stape` (nächste Woche)
- `META_DATASET_ID`, `META_CAPI_TOKEN`, `META_TEST_EVENT_CODE` (nur Test)
- `META_PIXEL_ID` steht in `assets/adtrack.js` (oben) — Abschnitt 11.1

Für Affilicon (Abschnitt 11.2): `AFFILICON_IPN_SECRET`, `AFFILICON_CHECKOUT_URL_BUCH/_HOERBUCH/_KOMPLETT`, Dankeseiten-URL → Details in `AFFILICON-SETUP.md`.

## Offene Punkte Dennis (Abschnitt 11)

1. Datensatz-ID, `META_PIXEL_ID`, CAPI-Token im neuen CAIO-Werbekonto; Stape-Endpunkt nächste Woche
2. Affilicon: Produkt-IDs und Checkout-URLs je Paket, IPN-Schlüssel, Dankeseiten-URL
3. ~~Speicherort der Reservierungen~~ → gelöst: Upstash REST (env-gesteuert), memory als Fallback
4. **Voraussichtlicher Erscheinungstermin** → Placeholder `[ERSCHEINUNGSTERMIN]` in `api/reservierung.js` (mailBodyBestaetigung) ersetzen
5. DSA-Angaben im Werbekonto: Begünstigter WissensReich Academy UG; Zahler je nach Kontobezahlung
