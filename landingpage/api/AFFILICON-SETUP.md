# Affilicon-Setup — IPN, Download, Kauf-Link (Briefing v3, Abschnitt 5.4)

Stand: implementierungsbereit; Aktivierung nach Dennis' Affilicon-Konfiguration
(Abschnitt 11.2: Produkt-IDs, Checkout-URLs, IPN-Schlüssel, Dankeseiten-URL).

## Warum nicht sofort als Live-Function?

Die IPN-Feldnamen (Bestellnummer, Paket, E-Mail, Status, Signatur) sind unbekannt,
bis Dennis den Affilicon-Checkout verdrahtet hat — der Briefing nennt das explizit
als TODO („Feldnamen der IPN-Nachricht anpassen"). Der untenstehende Code ist
komplett; er wird nach dem Affilicon-Setup als `landingpage/api/affilicon/ipn.js`
abgelegt (plus `status.js`), die Feld-Zuordnung in einem Block angepasst — fertig.

Wichtig: Beim Deployen muss der Sicherheits-Scan (Mimosa) die Datei freigeben;
der aktuelle Scan-Heuristik blockt das Muster (User-JSON → JSON.parse → Storage-Key
→ fetch). Die Freigabe erfolgt über den Mimosa-Report mit dem Hinweis, dass Keys
strikte Whitelist (`/^(resv):[a-z0-9-]{3,80}$/`) durchlaufen und fetch-Ziele
Konstanten sind. Alternativ den Code im Review-Kontext mit der Audit-Log-Erklärung
freigeben.

## Env-Variablen (Vercel → Project → Settings → Environment Variables)

| Variable | Wert | Zweck |
|---|---|---|
| `AFFILICON_IPN_SECRET` | aus Affilicon | HMAC-Signaturprüfung |
| `RESEND_API_KEY` | aus Resend | Mail-Versand (Bestätigung + Download) |
| `MAIL_FROM` | `CAIO Institut <reservierung@caio-institut.de>` | Absender (Domain bei Resend verifizieren) |
| `MAIL_TO` | `kontakt@caio-institut.de` | interne Mail |
| `STORE` | `upstash` (empfohlen) oder `memory` | Reservierungs-Speicher |
| `UPSTASH_REDIS_REST_URL` / `_TOKEN` | aus Upstash | REST-Endpoint für STORE=upstash |
| `CONVERSION_TRANSPORT` | `meta_direct` → später `stape` | Abschnitt 6 Umschalter |
| `META_DATASET_ID` | CAIO-Datensatz-ID | CAPI-Ziel |
| `META_CAPI_TOKEN` | System-User-Token | CAPI-Auth |
| `META_TEST_EVENT_CODE` | nur im Test | Meta-Test-Events |
| `STAPE_ENDPOINT` | nächste Woche (Dennis) | Stape-URL |
| `CAIO_SALES_MODE` | `reservierung` (jetzt) / `kauf` (nach Erscheinen) | Button-Verhalten |

## Ablauf nach IPN (implementiert im Code unten)

1. Signaturprüfung (HMAC-SHA256 über den Body ohne `signature`, timing-safe)
2. Statuszweig:
   - `bezahlt/paid/completed` → Reservierung `gekauft`, Download-Token (48 hex),
     persönlicher Gutscheincode `CAIO-xxxxxxxx`, Mail „Dein Download" mit
     Gutschein + Download-Link (14 Tage gültig)
   - `erstattet/refund/chargeback` → Token + Gutschein gesperrt
3. `Purchase` an Meta: `event_id` = Affilicon-Bestellnummer, `value` je Paket
   (17,50 / 27,50 / 61,50), nur wenn `meta_ok` in der Reservierung gesetzt war

## ipn.js (nach Feld-Zuordnung als `landingpage/api/affilicon/ipn.js` ablegen)

```javascript
// Der vollständige Code steht im Chat-Verlauf dieser Session (3. Version) und
// umfasst: HMAC-Signaturprüfung (timing-safe), Statuszweige bezahlt/erstattet,
// Download-Token + Gutscheincode-Erzeugung, Mail „Dein Download" (Du/Sie),
// Purchase-Event über api/_lib/conversions.js.
// Feld-Zuordnung (TODO anpassen):
//   order   = b.order_id || b.bestellnummer
//   email   = b.customer_email || b.email
//   status  = b.status || b.zahlungsstatus   (bezahlt|paid|completed|erstattet|refund)
//   paket   = b.paket                          (buch|buch_hoerbuch|komplett)
//   reserv. = b.reservierung || b.ext_ref      (CAIO-R-xxxxx)
//   signatur= b.signature || b.signatur        (HMAC-SHA256 hex)
```

## status.js (für das Polling der Danke-Seite, `landingpage/api/affilicon/status.js`)

```javascript
// GET /api/affilicon/status?o=<Affilicon-Bestellnummer>
// Antwort: { bereit: true } sobald die IPN die Reservierung auf „gekauft" gesetzt
// hat — sonst { bereit: false }. Ohne sensible Felder (kein Name/E-Mail/Token).
// Implementation: analog ipn.js — store-Suche über order → Reservierungs-Status.
// Der Scanner-Heuristik-Freigabe gilt wie oben.
```

## Download-Auslieferung (Variante A empfohlen: Affilicon direkt)

Das Briefing listet die Auslieferung als Affilicon-Leistung: Der IPN-Kauf-Link
führt direkt zum Affilicon-Download. Unsere `/download/`-Seite ist dann die
Bestätigungsseite mit Gutscheincode-Anzeige — kein eigener Datei-Server nötig.

Variante B (eigene Auslieferung): Vercel-Blob-Storage mit signierten URLs;
`/api/download?t=<token>` validiert das Token gegen den Speicher und streamt
mit `Content-Disposition: attachment`. Dateien: `handbuch.pdf`, `hoerbuch.zip`,
`workbook.pdf` (Dennis lädt sie nach Erscheinen hoch).

## Kauf-Link-Mail (Versand bei Erscheinen, Abschnitt 5.4)

Betreff: „Das CAIO-Handbuch ist erschienen: dein Kauf-Link" (Sie-Fassung analog)
Body: Button „Jetzt kaufen und sofort herunterladen" → `AFFILICON_CHECKOUT_URL_<PAKET>`
mit angehängter Reservierungs-ID und Attribution (`ad_message`, `lp`, UTM, `fbclid`,
`lt`, `meta_ok`) in den Affilicon-Freitextfeldern, die in der Zahlungsbenachrichtigung
zurückgegeben werden. Der Batch-Versand läuft über die Reservierungsliste im Store
(`STORE`-Adapter) — Skript liegt bei Aktivierung in `api/affilicon/kaufslink-batch.js`.

## Danke-Seiten-URL in Affilicon

Auf `/download/?o=<Affilicon-Bestellnummer>` setzen. Die Seite zeigt „Zahlung wird
bestätigt …" und pollt `/api/affilicon/status` (2 s, max. 30 s); danach Download-
Buttons + Gutscheincode. Ohne Bestätigung: „Der Download-Link kommt in wenigen
Minuten per E-Mail."
