import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "Diagnostic & Réparation — Heiphaistos IT" };

const service = {
  iconName: "wrench" as const,
  title: "Diagnostic & Réparation",
  tagline: "Identifier et corriger les pannes — matériel et logiciel",
  description:
    "Diagnostic complet et méthodique des dysfonctionnements matériels et logiciels. Je teste chaque composant individuellement pour isoler la source du problème : RAM, disque dur/SSD, processeur, carte graphique, alimentation. Les réparations sont effectuées hors microsoudure. Un devis est toujours fourni avant toute intervention payante.",
  features: [
    "Test et diagnostic RAM, SSD/HDD, CPU, GPU",
    "Analyse des températures et comportements thermiques",
    "Nettoyage physique + renouvellement de la pâte thermique",
    "Remplacement de composants défectueux",
    "Réinstallation système après panne logicielle",
    "Diagnostic réseau Wi-Fi et Ethernet",
    "Rapport de diagnostic complet fourni",
    "Devis gratuit avant toute réparation",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
