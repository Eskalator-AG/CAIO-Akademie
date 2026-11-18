import type { NextConfig } from "next";

/**
 * CAIO Institut — Next.js-Konfiguration
 *
 * Static Export: baut reines HTML/CSS/JS (Deployment auf Vercel wie bisher),
 * mit vollem TypeScript-Stack. Ein Wechsel auf Server-Features (Server Actions,
 * Auth, Zahlungs-Webhooks) ist später durch Entfernen von `output` möglich.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
