import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Consent from "./Consent";
import { UtmBootstrap } from "./UtmBootstrap";

export interface PageLayoutProps {
  children: ReactNode;
  ort?: string;
  home?: boolean;
  minimal?: boolean;
  adStyle?: boolean;
  /** ALTCHA laden (Seiten mit Formularen). */
  altcha?: boolean;
}

/**
 * Seitenlayout: Navigation, Content, Footer, Consent.
 * UTM-Erfassung + Pixel-Vorbereitung laufen clientseitig (UtmBootstrap).
 */
export default function PageLayout({
  children,
  ort = "Start",
  home = false,
  minimal = false,
  adStyle = false,
  altcha = false,
}: PageLayoutProps) {
  return (
    <>
      {!adStyle && <Nav ort={ort} home={home} minimal={minimal} />}
      <main>{children}</main>
      <Footer adStyle={adStyle} />
      <Consent />
      <UtmBootstrap />
      {altcha && (
        <script
          async
          type="module"
          src="/vendor/altcha/altcha.min.js"
        />
      )}
    </>
  );
}
