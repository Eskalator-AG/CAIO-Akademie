"use client";

import { useEffect } from "react";
import { captureUtms, initPixel } from "@/lib/track";

/**
 * Client-Bootstrap für UTM-Erfassung + Pixel-Vorbereitung
 * (nach Hydration, damit localStorage verfügbar ist).
 */
export function UtmBootstrap() {
  useEffect(() => {
    captureUtms();
    initPixel();
  }, []);
  return null;
}
