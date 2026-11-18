"use client";

import { useEffect, useState } from "react";

/** Mobiler Sticky-CTA: erscheint beim Scrollen, komplett unten. */
export default function StickyCta() {
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const p =
        scrollY /
        Math.max(1, document.body.scrollHeight - innerHeight);
      const test = document.getElementById("test");
      const testDa =
        test && test.getBoundingClientRect().top < innerHeight &&
        test.getBoundingClientRect().bottom > 0;
      setSichtbar(p > 0.04 && p < 0.92 && !testDa);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="sticky"
      className={
        "fixed inset-x-0 bottom-0 z-50 p-3 bg-mehl/95 backdrop-blur border-t border-espresso/10 transition-transform duration-200 " +
        (sichtbar ? "translate-y-0" : "translate-y-full")
      }
    >
      <a
        href="#test"
        className="flex items-center justify-center min-h-[48px] rounded-xl bg-orange text-espresso font-head font-bold"
      >
        Selbsttest starten – 2 Minuten
      </a>
    </div>
  );
}
