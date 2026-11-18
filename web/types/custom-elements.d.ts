import type { NextConfig } from "next";

// ALTCHA-Web-Component für JSX typisieren
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        challengejson?: string;
        strings?: string;
        name?: string;
      };
    }
  }
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __caioThemeToggle?: () => void;
  }
}
