import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "Conseil Informatique — Heiphaistos IT" };

const service = {
  iconName: "lightbulb" as const,
  title: "Conseil",
  tagline: "Le bon matériel, les bonnes décisions — avant d'acheter ou de changer",
  description:
    "Conseil neutre et expert pour t'aider à faire les bons choix technologiques : upgrade d'un PC existant, achat d'une nouvelle machine, configuration optimale pour le gaming ou la création, adoption d'outils IA dans ton quotidien. Pas de biais commercial — uniquement ce qui correspond à tes besoins réels.",
  features: [
    "Conseil achat PC, laptop, périphériques",
    "Upgrade optimal (RAM, SSD, GPU)",
    "Configurations gaming (60fps, 144fps, 4K)",
    "Outils IA : setup local et cloud (LLM, Stable Diffusion)",
    "Comparatif composants et rapport qualité/prix",
    "Conseil hébergement web et outils SaaS",
    "Session de conseil (30-60 min) via Discord",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
