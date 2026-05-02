import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "Installation Système — Heiphaistos IT" };

const service = {
  iconName: "monitor" as const,
  title: "Installation Système",
  tagline: "Windows, Linux, MacOS — Installation complète et optimisation",
  description:
    "Service d'installation de systèmes d'exploitation sur tous types de machines. Réinstallation suite à une panne, upgrade vers Windows 11, migration vers Linux ou configuration d'un Mac — je prends en charge l'intégralité du processus : partitionnement, installation des pilotes, configuration réseau et optimisation selon l'usage (bureautique, gaming, création).",
  features: [
    "Installation Windows 10/11, Linux (Ubuntu, Debian, Arch…), MacOS",
    "Configuration et installation des pilotes matériels",
    "Optimisation dédiée gaming ou bureautique",
    "Partitionnement et gestion des disques",
    "Configuration dual-boot (ex: Windows + Linux)",
    "Migration des données depuis l'ancien système",
    "Activation et configuration des licences",
    "Installation des logiciels essentiels",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
