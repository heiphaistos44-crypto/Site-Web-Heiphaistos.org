import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projets — Heiphaistos Informatique",
  description:
    "13 projets open-source et outils Windows : Nitrite, Plexit, SecuScan AI, OmniPlayer, PureRemove, AllRename, PureUpdate, FileScanner et plus. Rust, Tauri v2, .NET 8, Next.js.",
  openGraph: {
    title: "Projets — Heiphaistos Informatique",
    description: "Outils desktop, sécurité, multimédia et web — développés en Rust, Tauri, .NET 8 et Next.js.",
    url: "https://forgeinformatique.heiphaistos.org/projets",
    siteName: "Heiphaistos Informatique",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ProjetsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
