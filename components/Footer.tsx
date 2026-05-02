import Link from "next/link";
import { Flame } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-forge-border py-8 px-6"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-forge-orange" />
          <span className="font-heading tracking-[0.3em] text-forge-muted text-base">
            HEIPHAISTOS
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-sans text-forge-muted justify-center">
          <Link
            href="/mentions-legales"
            className="hover:text-forge-orange transition-colors duration-200 uppercase tracking-[0.12em]"
          >
            Mentions Légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="hover:text-forge-orange transition-colors duration-200 uppercase tracking-[0.12em]"
          >
            Confidentialité
          </Link>
          <Link
            href="/conditions-dutilisation"
            className="hover:text-forge-orange transition-colors duration-200 uppercase tracking-[0.12em]"
          >
            CGU
          </Link>
        </nav>

        <p className="font-sans text-xs text-forge-muted/60">
          © {year} Heiphaistos. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
