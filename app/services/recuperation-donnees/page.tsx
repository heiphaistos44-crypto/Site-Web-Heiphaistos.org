import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "Récupération de Données — Heiphaistos IT" };

const service = {
  iconName: "hard-drive" as const,
  title: "Récupération de Données",
  tagline: "Fichiers perdus sur SSD ou HDD — récupération professionnelle",
  description:
    "Intervention sur SSD et HDD pour récupérer des fichiers supprimés, perdus suite à un formatage, ou inaccessibles après une corruption de partition. Je réalise une analyse logicielle approfondie du support avant toute intervention pour évaluer la faisabilité et le taux de récupération probable. Aucun frais si la récupération s'avère impossible.",
  features: [
    "Récupération après formatage accidentel",
    "Fichiers supprimés de la Corbeille",
    "Partitions endommagées ou inaccessibles",
    "Photos, vidéos, documents, bases de données",
    "Analyse de l'état du disque avant intervention",
    "Rapport détaillé des fichiers récupérables",
    "Compatible SSD NVMe, SATA et HDD 2.5\"/3.5\"",
    "Aucun frais si la récupération est impossible",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
