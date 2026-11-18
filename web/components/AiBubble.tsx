"use client";

import { useState } from "react";

/**
 * „Mit deiner KI zusammenfassen": kopiert einen Seiten-Prompt mit der
 * aktuellen URL und öffnet den gewählten Chat.
 */
export default function AiBubble() {
  const [open, setOpen] = useState(false);
  const [hinweis, setHinweis] = useState(false);

  async function ziel(chat: "chatgpt" | "claude") {
    const prompt =
      "Fasse diese Seite zusammen und sag mir, für wen sie passt: " + location.href;
    try {
      await navigator.clipboard.writeText(prompt);
      setHinweis(true);
      setTimeout(() => setHinweis(false), 2200);
    } catch {}
    const url =
      chat === "chatgpt"
        ? "https://chatgpt.com/?q=" + encodeURIComponent(prompt)
        : "https://claude.ai/new?q=" + encodeURIComponent(prompt);
    window.open(url, "_blank", "noopener");
  }

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col items-end gap-2">
      {open && (
        <div className="bg-white rounded-2xl shadow-card border border-espresso/10 p-4 w-72 max-w-[calc(100vw-2rem)]">
          <p className="font-head font-bold text-ofen text-sm">
            Mit deiner KI zusammenfassen
          </p>
          <p className="mt-1 text-xs text-espresso/60">
            Der Prompt mit dieser Seiten-URL wird kopiert und der Chat vorbereitet:
          </p>
          <div className="mt-3 grid gap-2">
            <button
              data-ai="chatgpt"
              onClick={() => ziel("chatgpt")}
              className="flex items-center gap-2 min-h-[44px] px-4 rounded-xl border border-espresso/15 bg-mehl hover:border-orange text-sm font-semibold text-left"
            >
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#10a37f] flex-shrink-0" />
              ChatGPT öffnen
            </button>
            <button
              data-ai="claude"
              onClick={() => ziel("claude")}
              className="flex items-center gap-2 min-h-[44px] px-4 rounded-xl border border-espresso/15 bg-mehl hover:border-orange text-sm font-semibold text-left"
            >
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#d97757] flex-shrink-0" />
              Claude öffnen
            </button>
          </div>
          {hinweis && (
            <p className="mt-2 text-xs text-emerald-600">
              Prompt kopiert — im Chat einfügen oder direkt abgesendet.
            </p>
          )}
        </div>
      )}
      <button
        id="ai-bubble"
        aria-expanded={open}
        aria-controls="ai-popover"
        aria-label="Diese Seite mit deiner KI zusammenfassen"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-full bg-ofen text-mehl shadow-card font-head font-bold text-sm hover:bg-nacht max-w-[calc(100vw-2rem)] transition-bubble"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
          <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z" />
        </svg>
        <span className="whitespace-nowrap">
          <span className="sm:hidden">Mit KI zusammenfassen</span>
          <span className="hidden sm:inline">Diese Seite mit KI zusammenfassen</span>
        </span>
      </button>
    </div>
  );
}
