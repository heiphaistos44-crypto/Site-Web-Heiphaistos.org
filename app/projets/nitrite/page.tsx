import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";

export const metadata: Metadata = { title: "Nitrite — Heiphaistos IT" };

const project = {
  title: "Nitrite",
  tagline: "Suite complète de diagnostic et maintenance Windows",
  description:
    "Nitrite est une application desktop Windows complète dédiée au diagnostic, à la maintenance et à la réparation de systèmes. Elle regroupe des dizaines d'outils organisés par catégorie : gestion des processus, pilotes, registre, réseau, récupération de données, désinstallation propre, et même un mode WinPE pour les interventions hors système. Développée en Tauri v2 + Rust + Vue.js.",
  tags: ["Tauri v2", "Rust", "Vue.js", "Windows", "WinPE"],
  externalUrl: "https://nitrite.heiphaistos.org",
  features: [
    "Diagnostic complet matériel et logiciel",
    "Gestion des processus, services et tâches planifiées",
    "Nettoyage et optimisation du registre",
    "Récupération de données et copies shadow",
    "Désinstallation propre avec détection des résidus",
    "Mode WinPE pour interventions hors système",
    "Export de rapport de diagnostic complet",
    "Interface modulaire avec 47+ outils",
  ],
};

export default function Page() {
  return <ProjectDetailPage project={project} />;
}
