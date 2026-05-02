import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "VibeCoding — Heiphaistos IT" };

const service = {
  iconName: "code2" as const,
  title: "VibeCoding",
  tagline: "Sites web et apps créés avec l'IA — rapide, efficace, sur mesure",
  description:
    "Développement accéléré par l'IA de sites web, d'applications web et d'outils personnalisés. De la landing page au projet complexe, je combine les dernières technologies (Next.js, React, Rust, Tauri) et les modèles d'IA pour créer des solutions performantes dans des délais réduits — quelques jours là où d'autres comptent en semaines.",
  features: [
    "Sites vitrine et landing pages (comme ce site)",
    "Applications web (React, Next.js, Vue.js)",
    "Outils de bureau (Tauri + Rust)",
    "Automatisation et scripts",
    "Intégrations API et webhooks",
    "Déploiement sur Cloudflare Pages, Vercel, VPS",
    "Design responsive mobile-first",
    "Livraison rapide — quelques jours",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
