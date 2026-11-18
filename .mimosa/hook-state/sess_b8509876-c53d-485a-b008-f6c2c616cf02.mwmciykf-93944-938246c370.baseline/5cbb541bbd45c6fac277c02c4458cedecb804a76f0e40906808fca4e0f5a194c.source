import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caio-institut.de"),
  title: {
    default:
      "CAIO Institut – KI-Kompetenz & Chief-AI-Officer-Ausbildung in 4 Stufen",
    template: "%s | CAIO Institut",
  },
  description:
    "Ausbildung zum Chief AI Officer: 4 Stufen (AIP, AIO, AIA, CAIO), über 32 Stunden Fundament, förderfähig mit 30–100 % Zuschuss. Jetzt Selbsttest in 2 Minuten.",
  robots: { index: false, follow: false, nocache: true, nosnippet: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6EF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Theme vor dem ersten Paint anwenden (kein Flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('caio-theme')==='dark'){document.documentElement.classList.add('dark');var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content','#0F1218');}}catch(e){}`,
          }}
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https://altcha.org; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://altcha.org; worker-src 'self' blob:; img-src 'self' data:; font-src 'self'; connect-src 'self' https://altcha.org"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%2316425B'/%3E%3Cpath d='M12 38V22a12 12 0 0 1 24 0v16' fill='none' stroke='%23FAF6EF' stroke-width='3' stroke-linecap='round'/%3E%3Crect x='16' y='32' width='4' height='6' fill='%23FAF6EF'/%3E%3Crect x='21' y='28' width='4' height='10' fill='%23FAF6EF'/%3E%3Crect x='26' y='24' width='4' height='14' fill='%23FAF6EF'/%3E%3Crect x='31' y='20' width='4' height='18' fill='%23E4572E'/%3E%3C/svg%3E"
        />
      </head>
      <body className="bg-mehl text-espresso antialiased">{children}</body>
    </html>
  );
}
