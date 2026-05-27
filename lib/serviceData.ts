import type { ServiceData } from "@/components/ServiceDetailPage";

export interface ServiceEntry extends ServiceData {
  slug: string;
  metaTitle: string;
}

export const SERVICE_DATA: ServiceEntry[] = [
  {
    slug: "installation-systeme",
    metaTitle: "Installation Système — Heiphaistos IT",
    iconName: "monitor",
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
  },
  {
    slug: "recuperation-donnees",
    metaTitle: "Récupération de Données — Heiphaistos IT",
    iconName: "hard-drive",
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
  },
  {
    slug: "recuperation-comptes",
    metaTitle: "Récupération de Comptes — Heiphaistos IT",
    iconName: "key-round",
    title: "Récupération de Comptes",
    tagline: "Gmail, Orange, SFR, Bouygues, Free — retrouve l'accès à tes comptes",
    description:
      "Assistance pour retrouver l'accès à des comptes bloqués, e-mails oubliés ou désactivés. J'accompagne dans les procédures officielles de récupération chez les principaux opérateurs et services en ligne. Tout se fait dans le strict respect des règles des plateformes — sans contournement des systèmes de sécurité.",
    features: [
      "Récupération de compte Gmail / Google Workspace",
      "Comptes Orange, SFR, Bouygues Telecom, Free",
      "Guidance dans les procédures officielles",
      "Constitution du dossier de vérification d'identité",
      "Déblocage suite à une activité suspecte détectée",
      "Sécurisation post-récupération (2FA, mot de passe fort)",
      "Support à distance ou en présentiel",
    ],
  },
  {
    slug: "diagnostic-reparation",
    metaTitle: "Diagnostic & Réparation — Heiphaistos IT",
    iconName: "wrench",
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
  },
  {
    slug: "pc-sur-mesure",
    metaTitle: "PC Sur-Mesure — Heiphaistos IT",
    iconName: "cpu",
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
  },
  {
    slug: "vibecoding",
    metaTitle: "VibeCoding — Heiphaistos IT",
    iconName: "code2",
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
  },
  {
    slug: "conseil",
    metaTitle: "Conseil Informatique — Heiphaistos IT",
    iconName: "lightbulb",
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
  },
];

export const SERVICE_MAP: Record<string, ServiceEntry> = Object.fromEntries(
  SERVICE_DATA.map((s) => [s.slug, s])
);
