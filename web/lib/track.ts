/**
 * Ad-Tracking & Conversion-Vorbereitung (DSGVO-konform).
 *
 * Zentrale Konfiguration. Beim Aktivieren des Meta-Pixels NUR
 * META_PIXEL_ID setzen — der Pixel feuert ausschließlich nach
 * erteilter Marketing-Einwilligung (caio-consent-v1).
 *
 * Für Affilicon: CHECKOUT_URL setzen — dann leitet der Bestell-Button
 * dorthin weiter (mit UTM-Parametern) statt ein E-Mail-Programm zu öffnen.
 */
export const TRACKING = {
  CHECKOUT_URL: "",
  META_PIXEL_ID: "",
} as const;

export interface UtmState {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  ts?: string;
  lp?: string;
}

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

/** UTM + Click-IDs erfassen und persistent im localStorage ablegen. */
export function captureUtms(): UtmState {
  if (typeof window === "undefined") return {};
  try {
    const q = new URLSearchParams(window.location.search);
    const stored = JSON.parse(
      localStorage.getItem("caio-utm") || "{}"
    ) as UtmState;
    let changed = false;
    for (const k of KEYS) {
      const v = q.get(k);
      if (v) {
        stored[k] = v;
        changed = true;
      }
    }
    if (!stored.ts) {
      stored.ts = new Date().toISOString();
      changed = true;
    }
    if (!stored.lp) {
      stored.lp = window.location.pathname;
      changed = true;
    }
    if (changed) localStorage.setItem("caio-utm", JSON.stringify(stored));
    return stored;
  } catch {
    return {};
  }
}

/** Marketing-Einwilligung aus dem Consent-Speicher lesen. */
export function marketingOk(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const c = JSON.parse(localStorage.getItem("caio-consent-v1") || "null");
    return !!(c && c.marketing);
  } catch {
    return false;
  }
}

/** Meta-Pixel-Stomp (inaktiv, bis META_PIXEL_ID gesetzt ist). */
export function initPixel(): void {
  if (!TRACKING.META_PIXEL_ID || !marketingOk() || window.fbq) return;
  /* eslint-disable */
  const w = window as unknown as Record<string, any>;
  !(function (f: any, b: any, e: any, v: any) {
    if (f.fbq) return;
    const n = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e);
    t.async = true;
    t.src = v;
    b.getElementsByTagName(e)[0].parentNode.insertBefore(t, b.getElementsByTagName(e)[0]);
  })(w, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  w.fbq("init", TRACKING.META_PIXEL_ID);
  w.fbq("track", "PageView");
  /* eslint-enable */
}

/** Conversion-Event (feuert nur mit Pixel + Consent). */
export function trackEvent(event: string): void {
  if (TRACKING.META_PIXEL_ID && window.fbq && marketingOk()) {
    try {
      window.fbq("track", event);
    } catch {
      /* Pixel nicht geladen — ignorieren */
    }
  }
}

/** Quelldaten-Zeile für Reservierungs-E-Mails. */
export function quelleForMail(utm: UtmState): string {
  const quelle =
    "Quelle: " +
    (utm.utm_source || "direkt") +
    (utm.utm_campaign ? " / Kampagne: " + utm.utm_campaign : "") +
    (utm.utm_content ? " / Variante: " + utm.utm_content : "") +
    (utm.fbclid ? " / fbclid: ja" : "") +
    " / LP: " +
    (utm.lp || (typeof window !== "undefined" ? window.location.pathname : "?"));
  return quelle;
}
