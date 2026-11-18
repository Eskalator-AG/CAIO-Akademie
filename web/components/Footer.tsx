import Link from "next/link";
import { LogoMark } from "./Nav";

const FOOTER_LINK =
  "underline underline-offset-2 hover:text-espresso";

export interface FooterProps {
  /** Ad-Landingpages: keine Navigation, nur Rechtslinks. */
  adStyle?: boolean;
}

/** Fußzeile mit Rechtslinks — Initiativen-Nennung überall identisch. */
export default function Footer({ adStyle = false }: FooterProps) {
  if (adStyle) {
    return (
      <footer className="max-w-[1120px] mx-auto px-5 md:px-8 py-8 border-t border-espresso/10">
        <p className="text-xs text-espresso/60 text-center">
          © 2026 CAIO Institut · Eine Gemeinschaftsinitiative der WissensReich
          Academy, der Eskalator AG und der Grenzenlos Ltd.
        </p>
        <p className="mt-2 text-xs text-espresso/60 text-center">
          <Link className={FOOTER_LINK} href="/impressum">Impressum</Link> ·{" "}
          <Link className={FOOTER_LINK} href="/datenschutz">Datenschutz</Link> ·{" "}
          <Link className={FOOTER_LINK} href="/widerruf">Widerruf</Link> ·{" "}
          <Link className={FOOTER_LINK} href="/agb">AGB</Link> ·{" "}
          <Link className={FOOTER_LINK} href="/verbraucherinformationen">
            Verbraucherinformationen
          </Link>
        </p>
      </footer>
    );
  }

  return (
    <footer className="max-w-[1120px] mx-auto px-5 md:px-8 py-8 border-t border-espresso/10">
      <div className="flex items-center gap-3">
        <LogoMark className="h-9 w-9" />
        <div>
          <p className="font-head font-bold text-ofen">CAIO Institut</p>
          <p className="text-xs text-espresso/60">
            Eine Gemeinschaftsinitiative der WissensReich Academy, der
            Eskalator AG und der Grenzenlos Ltd.
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs text-espresso/60 leading-relaxed">
        CAIO Institut · Ein Projekt der WissensReich Akademie —{" "}
        <Link className={FOOTER_LINK} href="/ueber-uns">
          Leitbild, Zahlen &amp; Menschen
        </Link>
      </p>
      <p className="mt-2 text-xs text-espresso/60">
        <Link className={FOOTER_LINK} href="/">Startseite</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/ueber-uns">Über uns</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/berufsbild">Berufsbild CAIO</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/glossar">Glossar</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/direktbeauftragung">
          Direktbeauftragung
        </Link>{" "}
        · <Link className={FOOTER_LINK} href="/buch">Das Buch</Link> ·{" "}
        <Link className={FOOTER_LINK} href="https://wissensreich.academy/impressum" target="_blank" rel="noopener noreferrer nofollow">
          Impressum
        </Link>{" "}
        · <Link className={FOOTER_LINK} href="/datenschutz">Datenschutz</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/agb">AGB</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/widerruf">Widerruf</Link> ·{" "}
        <Link className={FOOTER_LINK} href="/verbraucherinformationen">
          Verbraucherinformationen
        </Link>
      </p>
    </footer>
  );
}
