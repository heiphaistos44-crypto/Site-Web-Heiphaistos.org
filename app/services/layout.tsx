import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Heiphaistos Informatique",
  description:
    "Installation système, récupération de données, diagnostic & réparation, PC sur mesure, récupération de comptes, VibeCoding et conseil. Technicien informatique indépendant.",
  openGraph: {
    title: "Services — Heiphaistos Informatique",
    description: "Tous les services informatiques : installation, réparation, récupération, PC sur-mesure et développement web rapide.",
    url: "https://forgeinformatique.heiphaistos.org/services",
    siteName: "Heiphaistos Informatique",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
