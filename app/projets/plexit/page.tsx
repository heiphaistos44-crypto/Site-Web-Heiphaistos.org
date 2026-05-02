import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";

export const metadata: Metadata = { title: "Plexit — Heiphaistos IT" };

const project = {
  title: "Plexit",
  tagline: "Tableau de bord Plex nouvelle génération",
  description:
    "Plexit est une application web qui enrichit l'expérience Plex avec des statistiques avancées, des visualisations de bibliothèque et des outils de gestion de contenu. Développé avec Tautulli comme source de données, il s'adresse aux utilisateurs Plex qui veulent une vue claire et détaillée de leur médiathèque — historique de lecture, films les plus vus, résumé des utilisateurs.",
  tags: ["Vue.js", "Cloudflare Pages", "Tautulli API", "D1 Database"],
  externalUrl: "https://plexit.heiphaistos.org",
  features: [
    "Statistiques de lecture en temps réel",
    "Historique complet de la bibliothèque",
    "Classement des médias les plus regardés",
    "Gestion multi-utilisateurs",
    "Interface responsive dark mode",
    "Hébergé sur Cloudflare Pages",
  ],
};

export default function Page() {
  return <ProjectDetailPage project={project} />;
}
