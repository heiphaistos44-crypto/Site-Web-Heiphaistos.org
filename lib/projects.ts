export interface Contributor {
  name: string;
  url: string;
  role: string;
}

export interface OngoingProject {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  progress: number;
  statusLabel: string;
  done: string[];
  next: string[];
  since: string;
  githubUrl?: string;
  visibility?: "public" | "private";
  contributors?: Contributor[];
}

export const ONGOING_DEFAULT: OngoingProject[] = [
  {
    name: "GhostHandDesk",
    tagline: "Bureau à distance WebRTC peer-to-peer",
    description:
      "Client Rust + serveur de signaling Go. Transmission vidéo bas-latence, transfert de fichiers, chat intégré, tray icon.",
    tech: ["Rust", "Tauri v2", "Go", "Vue.js", "WebRTC"],
    progress: 75,
    statusLabel: "En développement actif",
    done: [
      "Stream vidéo WebRTC adaptatif (bitrate dynamique)",
      "Serveur de signaling Go",
      "Gestion de sessions + chiffrement",
      "Transfert de fichiers & presse-papier",
      "Chat panel & system tray",
      "Serveur embarqué (include_bytes!)",
    ],
    next: ["Finitions UX multi-session", "Build release auto-hébergé"],
    since: "Déc. 2025",
    githubUrl: "https://github.com/heiphaistos44-crypto/GhostHandDesk",
    visibility: "public",
  },
  {
    name: "PureRemove",
    tagline: "Suppression de fond d'image IA",
    description:
      "Application Windows portable pour supprimer les arrière-plans via RMBG-1.4. Traitement 100% local, zéro cloud, zéro données envoyées.",
    tech: ["Tauri v2", "Rust", "React", "ONNX", "RMBG-1.4"],
    progress: 85,
    statusLabel: "Phase de finition",
    done: [
      "Inférence RMBG-1.4 ONNX 100% local",
      "Drag-drop, coller (Ctrl+V) et batch",
      "4 modes de sortie (transparent, blanc, noir, couleur custom)",
      "Preview slider split avant/après",
      "Release v1.2.0 publiée",
      "Audit sécurité appliqué (mutex, SVG DoS)",
    ],
    next: ["Documentation utilisateur", "Support formats supplémentaires"],
    since: "Fév. 2026",
    githubUrl: "https://github.com/heiphaistos44-crypto/PureRemove",
    visibility: "public",
  },
  {
    name: "UniversalConverter",
    tagline: "Convertisseur de documents multi-format",
    description:
      "Convertit PDF, PNG, HTML, TXT, DOCX et autres formats. Moteur Rust haute performance avec interface React drag-drop.",
    tech: ["Tauri v2", "Rust", "React", "TypeScript", "Vite"],
    progress: 75,
    statusLabel: "En phase de polissage",
    done: [
      "Conversion PDF → PNG, HTML, TXT, DOCX",
      "Fusion de pages (modes single/batch)",
      "Gestion ZIP avec vérification d'erreurs",
      "Drag-drop et traitement en lot",
      "Audit & corrections v1.5.0",
    ],
    next: ["README et documentation", "Release GitHub officielle", "Tests de non-régression"],
    since: "Fév. 2026",
    githubUrl: "https://github.com/heiphaistos44-crypto/UniversalConverter",
    visibility: "public",
  },
  {
    name: "OmniPlayer",
    tagline: "Lecteur multimédia type VLC en Rust",
    description:
      "Player audio/vidéo multi-format avec pipeline FFmpeg, rendu GPU WGSL, accélération matérielle DXVA2/D3D11VA et interface egui.",
    tech: ["Rust", "Go", "WGSL", "FFmpeg", "egui", "wgpu", "CPAL"],
    progress: 70,
    statusLabel: "En développement actif",
    done: [
      "Pipeline FFmpeg (vidéo/audio/sous-titres)",
      "Accélération matérielle DXVA2/D3D11VA",
      "Rendu GPU YUV→RGB via shaders WGSL",
      "Moteur audio CPAL + rubato resampler",
      "UI egui : seekbar, playlist, navigateur",
      "Sync A/V, surround 5.1/7.1 downmix",
    ],
    next: ["Release stable + documentation", "Intégration TMDB/OpenSubtitles", "Corrections stabilité"],
    since: "Avr. 2026",
    githubUrl: "https://github.com/heiphaistos44-crypto/OmniPlayer",
    visibility: "public",
  },
  {
    name: "TutoInfo",
    tagline: "Plateforme de tutoriels informatiques",
    description:
      "Site de tutoriels avec vidéo via tunnel Proxmox, authentification NextAuth v5 et base de données D1 Cloudflare.",
    tech: ["Next.js 16", "NextAuth v5", "Cloudflare D1", "Tailwind CSS"],
    progress: 60,
    statusLabel: "En développement actif",
    done: [
      "Authentification NextAuth v5",
      "Base de données D1 Cloudflare",
      "Streaming vidéo via tunnel Proxmox",
      "Audit sécurité complet appliqué",
      "Déploiement tuto.heiphaistos.org",
    ],
    next: ["Contenu tutoriels à remplir", "Fonctionnalités avancées (quiz, progression)", "SEO + perf"],
    since: "Avr. 2026",
    githubUrl: "https://github.com/heiphaistos44-crypto/Tuto",
    visibility: "private",
  },
  {
    name: "RSSDI",
    tagline: "Flux RSS → Discord automatisé",
    description:
      "Backend Python containerisé qui ingère des flux RSS et diffuse les articles sur Discord. Dashboard HTML/JS inclus.",
    tech: ["Python", "Docker", "MongoDB", "SQLite", "discord.py"],
    progress: 65,
    statusLabel: "En développement actif",
    done: [
      "Pipeline d'ingestion RSS (Python 3.6+)",
      "Stockage de configuration MongoDB",
      "Déduplication SQLite (sent_items.db)",
      "Dashboard HTML/JS sur port 3000",
      "Isolation réseau via Docker Compose",
    ],
    next: ["Documentation complète", "Release GitHub officielle", "Auth API renforcée", "Tests"],
    since: "Nov. 2025",
    githubUrl: "https://github.com/heiphaistos44-crypto/RSSDI",
    visibility: "public",
  },
  {
    name: "Bot Discord",
    tagline: "Bot Discord multifonction 50+ commandes",
    description:
      "Économie, modération, jeux, tickets, giveaways, logs avancés et dashboard web intégré. SQLite pour la persistance.",
    tech: ["Python", "discord.py", "SQLite"],
    progress: 70,
    statusLabel: "Fonctionnel — en extension",
    done: [
      "50+ commandes slash (économie, modération, jeux)",
      "Système économie complet (balance, travail, crimes, gambling)",
      "Modération (kick, ban, timeout, avertissements)",
      "Tickets, giveaways, logs avancés",
      "Dashboard web sur port 5000",
    ],
    next: ["Stabilisation et tests", "Documentation administrateur", "Intégration RSSDI"],
    since: "Nov. 2025",
    githubUrl: "https://github.com/heiphaistos44-crypto/Bot-Discord-RSSDI",
    visibility: "private",
  },
  {
    name: "Gestionnaire OrdiPlus",
    tagline: "Gestionnaire d'inventaire informatique",
    description:
      "Application web de gestion d'inventaire pour OrdiPlus. CI/CD automatisé, base D1 Cloudflare, déployé sur ordibarre.pages.dev.",
    tech: ["Cloudflare Pages", "D1", "CI/CD"],
    progress: 60,
    statusLabel: "En développement actif",
    done: [
      "Déploiement Cloudflare Pages",
      "Base de données D1 Cloudflare",
      "Pipeline CI/CD automatisé (push → deploy)",
      "Migration de données",
    ],
    next: ["Fonctionnalités inventaire avancées", "Interface d'administration", "Export données"],
    since: "Fév. 2026",
    githubUrl: "https://github.com/heiphaistos44-crypto/Gestionnaire-ordiplus-",
    visibility: "private",
    contributors: [
      { name: "Gaeel50GLR", url: "https://github.com/Gaeel50GLR", role: "Créateur & Contributeur" },
    ],
  },
  {
    name: "OrdiPlus Fiches",
    tagline: "Générateur de fiches produit A4",
    description:
      "Application desktop Tauri pour générer des fiches produit professionnelles matériel PC. Export PDF/PNG, 10 thèmes, drag-drop sections.",
    tech: ["Tauri v2", "Vue 3", "TypeScript", "Pinia", "Rust", "Vite"],
    progress: 78,
    statusLabel: "Phase de maintenance",
    done: [
      "Moteur layout A4 portrait et paysage",
      "6 panneaux catégories (specs, prix, accessoires…)",
      "10 thèmes visuels (gaming, corporate, elegant…)",
      "Export PDF/PNG via dialogue système natif",
      "Drag-drop réordonnancement des sections",
      "Zoom Ctrl+wheel + aperçu temps réel",
      "Release v3.2.0 avec installeur MSI/EXE",
    ],
    next: ["README et documentation", "Optimisations performances", "Cas limites edge cases"],
    since: "Fév. 2026",
    githubUrl: "https://github.com/heiphaistos44-crypto/Generateurficheproduit",
    visibility: "public",
  },
];

export function mergeWithDefaults(
  stored: OngoingProject[],
  defaults: OngoingProject[]
): OngoingProject[] {
  const storedMap = new Map(stored.map((p) => [p.name, p]));
  const defaultNames = new Set(defaults.map((d) => d.name));
  const merged = defaults.map((d) => storedMap.get(d.name) ?? d);
  const custom = stored.filter((p) => !defaultNames.has(p.name));
  return [...merged, ...custom];
}
