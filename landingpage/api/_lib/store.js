/**
 * Speicher-Adapter für Reservierungen (Briefing v3, Abschnitt 11.3).
 *
 * Aktuelle Ausbaustufe: In-Memory-Speicher pro Function-Instanz.
 * Bewusst KEIN outbound-fetch in dieser Datei — damit existiert in der
 * Reservierungs-Verarbeitung kein SSRF-Sink; der Nachweis einer Reservierung
 * läuft über die beiden versendeten Mails (Kunden- + interne Kopie).
 *
 * Persistenz-Ausbau (dokumentiert in api/AFFILICON-SETUP.md): Upstash-REST
 * mit URL-Allowlist + DNS-Fresh-Check. Aktivierung erst nach Freigabe durch
 * einen vollständigen Mimosa-Scan (der statische Scanner stuft jede
 * Handler-Wert → Storage-Fetch-Kette pauschal als SSRF ein, siehe
 * scan-2026-11-21T10-04-45.796Z-6da1bea0326a).
 *
 * Idempotenz: formtoken → Reservierungs-ID (in-memory); gleiche E-Mail mit
 * neuem Token aktualisiert das Paket (Abschnitt 9).
 */
const crypto = require('crypto');
const memStore = { resv: new Map(), tokens: new Map(), ids: new Set() };

const KEY_RE = /^(resv|tok):[a-f0-9]{32}$/;
function keyOk(key) {
  if (!KEY_RE.test(key)) throw new Error('unsafe key');
  return key;
}

function storeSetResv(id, json) {
  const key = keyOk('resv:' + sha32(id));
  memStore.resv.set(key, json);
}
function storeGetResv(id) {
  return memStore.resv.get(keyOk('resv:' + sha32(id))) || null;
}
function storeSetToken(token, id) {
  const key = keyOk('tok:' + sha32(token));
  memStore.tokens.set(key, id);
}
function storeGetToken(token) {
  return memStore.tokens.get(keyOk('tok:' + sha32(token))) || null;
}
function neueId() {
  // CAIO-R-xxxxx — Zeichen-Whitelist passend zum Mail-Link und ID-Regex
  const alphabet = 'abcdefghjkmnpqrstuvwxyz23456789';
  let id;
  do {
    id = 'CAIO-R-' + Array.from(crypto.randomBytes(5))
      .map((b) => alphabet[b % alphabet.length]).join('');
  } while (memStore.ids.has(id));
  memStore.ids.add(id);
  return id;
}
function sha32(v) {
  return crypto.createHash('sha256').update(String(v == null ? '' : v)).digest('hex').slice(0, 32);
}

module.exports = { storeSetResv, storeGetResv, storeSetToken, storeGetToken, neueId };
