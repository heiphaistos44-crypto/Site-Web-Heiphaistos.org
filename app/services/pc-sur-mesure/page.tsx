import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "PC Sur-Mesure — Heiphaistos IT" };

const service = {
  iconName: "cpu" as const,
  title: "PC Sur-Mesure",
  tagline: "Ton PC idéal — conçu, monté et configuré selon tes besoins",
  description:
    "Accompagnement complet pour la création de ton PC sur mesure : du choix des composants en fonction de ton budget et de tes usages, jusqu'à l'assemblage et la configuration finale. Gaming, création vidéo, streaming, IA locale — chaque build est réfléchi pour maximiser le rapport performance/prix.",
  features: [
    "Conseil personnalisé selon ton budget et ton usage",
    "Sélection et sourcing des composants optimaux",
    "Devis détaillé avant achat",
    "Montage professionnel",
    "Test de stabilité (stress test CPU/GPU/RAM)",
    "Installation et configuration de l'OS",
    "Installation des logiciels et pilotes",
    "Suivi post-montage (30 jours)",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
