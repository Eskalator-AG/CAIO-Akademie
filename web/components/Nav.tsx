import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

/** Logo-Marke (Ofenbogen mit vier Stufen) — überall identisch. */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={`${className} flex-shrink-0`}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="10" fill="#16425B" />
      <path
        d="M12 38V22a12 12 0 0 1 24 0v16"
        fill="none"
        stroke="#FAF6EF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="16" y="32" width="4" height="6" fill="#FAF6EF" />
      <rect x="21" y="28" width="4" height="10" fill="#FAF6EF" />
      <rect x="26" y="24" width="4" height="14" fill="#FAF6EF" />
      <rect x="31" y="20" width="4" height="18" fill="#E4572E" />
    </svg>
  );
}

const NAV_LINK =
  "inline-flex items-center min-h-[48px] px-2.5 sm:px-3 rounded-lg text-sm font-medium text-espresso/80 hover:text-espresso hover:bg-espresso/5";

export interface NavProps {
  /** Anker/Ort für die Brotkrume; auf Unterseiten z. B. "Über uns". */
  ort?: string;
  /** Startseiten-Variante der Links (Anker statt Pfade). */
  home?: boolean;
  /** Reduzierte Navigation (nur Start + Toggle) für Rechtsseiten. */
  minimal?: boolean;
}

/** Hauptnavigation: sticky, mit Ortsanzeige + Theme-Toggle. */
export default function Nav({ ort = "Start", home = false, minimal = false }: NavProps) {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="sticky top-0 z-40 bg-mehl/95 backdrop-blur border-b border-espresso/10"
    >
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 flex items-center justify-between min-h-[56px]">
        <Link
          href="/"
          className="flex items-center gap-2 min-h-[48px] font-head font-bold text-ofen text-[15px] sm:text-base whitespace-nowrap"
          aria-label="CAIO Institut — zur Startseite"
        >
          <LogoMark />
          CAIO Institut
        </Link>
        {!minimal && (
          <div className="flex items-center gap-0.5 sm:gap-1">
            <Link href="/berufsbild" className={`${NAV_LINK} hidden md:inline-flex`}>
              Berufsbild
            </Link>
            <Link href="/ueber-uns" className={`${NAV_LINK} hidden sm:inline-flex`}>
              Über uns
            </Link>
            <Link href="/#stufen" className={`${NAV_LINK} hidden sm:inline-flex`}>
              Stufen
            </Link>
            <Link href="/direktbeauftragung" className={NAV_LINK}>
              Projekte
            </Link>
            <Link href="/buch" className={`${NAV_LINK} hidden sm:inline-flex`}>
              Handbuch
            </Link>
            <Link href="/#test" className={NAV_LINK}>
              Selbsttest
            </Link>
          </div>
        )}
      </div>
      <div className="border-t border-espresso/5 bg-white/40">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 min-h-[32px] flex items-center gap-2 text-xs text-espresso/60">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-orange inline-block flex-shrink-0"
          />
          <span>{home ? "Du bist hier:" : "Zurück zur Übersicht:"}</span>
          <span className="font-semibold text-espresso/80 truncate">{ort}</span>
          <span className="ml-auto">
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
