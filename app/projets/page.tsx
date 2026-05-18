"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Clock, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FORGE_EASE } from "@/lib/easing";
import type { OngoingProject } from "@/app/admin/dashboard/page";

const PUBLISHED = [
  {
    name: "Nitrite",
    tagline: "Suite Windows de diagnostic & maintenance",
    description:
      "47+ outils intégrés — processus, drivers, registre, récupération de données, mode WinPE.",
    tech: ["Tauri v2", "Rust", "Vue.js", "Windows", "WinPE"],
    href: "/projets/nitrite",
    url: "https://nitrite.heiphaistos.org",
    external: false,
  },
  {
    name: "Plexit",
    tagline: "Dashboard avancé pour Plex",
    description:
      "Statistiques en temps réel, historique bibliothèque, top médias, multi-utilisateurs.",
    tech: ["Vue.js", "Cloudflare Pages", "Tautulli API", "D1"],
    href: "/projets/plexit",
    url: "https://plexit.heiphaistos.org",
    external: false,
  },
];

// Gérable via /admin/dashboard — mis à jour manuellement ou depuis localStorage
const ONGOING_DEFAULT: OngoingProject[] = [
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
    next: [
      "Finitions UX multi-session",
      "Build release auto-hébergé",
    ],
    since: "Déc. 2025",
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
    next: [
      "Documentation utilisateur",
      "Support formats supplémentaires",
    ],
    since: "Fév. 2026",
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
    next: [
      "README et documentation",
      "Release GitHub officielle",
      "Tests de non-régression",
    ],
    since: "Fév. 2026",
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
    next: [
      "Release stable + documentation",
      "Intégration métadonnées TMDB/OpenSubtitles",
      "Corrections de stabilité en cours",
    ],
    since: "Avr. 2026",
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
    next: [
      "Contenu tutoriels à remplir",
      "Fonctionnalités avancées (quiz, progression)",
      "SEO et optimisations de performance",
    ],
    since: "Avr. 2026",
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
    next: [
      "Documentation complète",
      "Publication de release GitHub",
      "Authentification API renforcée",
      "Tests et couverture",
    ],
    since: "Nov. 2025",
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
    next: [
      "Stabilisation et tests",
      "Documentation administrateur",
      "Intégration RSSDI",
    ],
    since: "Nov. 2025",
  },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="relative h-1.5 bg-forge-border rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: FORGE_EASE, delay: 0.3 }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: "linear-gradient(90deg, #f97316, #dc2626)" }}
      />
    </div>
  );
}

export default function ProjetsPage() {
  const [ongoing, setOngoing] = useState<OngoingProject[]>(ONGOING_DEFAULT);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("hph_ongoing_projects");
      if (stored) setOngoing(JSON.parse(stored));
    } catch {}
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#050505" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #050505 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: FORGE_EASE }}
        >
          <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.5em] mb-4 font-medium">
            Ce que je construis
          </p>
          <h1
            className="font-heading gradient-text leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            MES PROJETS
          </h1>
          <p className="font-sans text-forge-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Applications desktop, outils Windows et plateformes web — développés en solo.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-28">
        {/* Section: Publiés */}
        <section className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-sans text-xs font-semibold uppercase tracking-wider flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Publiés
            </span>
            <div className="flex-1 h-px bg-forge-border" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PUBLISHED.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: FORGE_EASE }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-forge-card border border-forge-border rounded-xl p-6 hover:border-forge-orange/40 card-glow transition-colors duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #f97316, #dc2626, transparent)",
                  }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading text-3xl tracking-wider text-forge-text group-hover:text-forge-orange transition-colors duration-300">
                      {project.name}
                    </h2>
                    <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.2em] mt-1 font-medium">
                      {project.tagline}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-forge-muted hover:text-forge-orange transition-colors duration-200 flex-shrink-0"
                    aria-label={`Voir ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="font-sans text-sm text-forge-muted leading-relaxed font-light flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-sans text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border border-forge-border text-forge-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-forge-orange font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:gap-3 transition-all duration-200 w-fit"
                  >
                    Voir le projet
                    <ArrowRight className="w-3 h-3 flex-shrink-0" />
                  </a>
                ) : (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1.5 text-forge-orange font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:gap-3 transition-all duration-200 w-fit"
                  >
                    Voir le projet
                    <ArrowRight className="w-3 h-3 flex-shrink-0" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section: En cours */}
        {ongoing.length > 0 && (
          <section className="py-12 sm:py-16 border-t border-forge-border">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-forge-orange font-sans text-xs font-semibold uppercase tracking-wider flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-forge-orange animate-pulse" />
                En cours
              </span>
              <div className="flex-1 h-px bg-forge-border" />
            </motion.div>

            <div className="flex flex-col gap-5">
              {ongoing.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: FORGE_EASE }}
                  className="group relative bg-forge-card border border-forge-border rounded-xl p-6 sm:p-8 hover:border-forge-orange/30 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h2 className="font-heading text-3xl sm:text-4xl tracking-wider text-forge-text">
                        {project.name}
                      </h2>
                      <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.2em] mt-1 font-medium">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Clock className="w-3 h-3 text-forge-muted" />
                      <span className="font-sans text-forge-muted text-xs">
                        Depuis {project.since}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-forge-muted leading-relaxed font-light mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border border-forge-border text-forge-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-xs text-forge-muted uppercase tracking-wider">
                        Avancement
                      </span>
                      <span className="font-heading text-lg text-forge-orange tracking-wider">
                        {project.progress}%
                      </span>
                    </div>
                    <ProgressBar value={project.progress} />
                    <p className="font-sans text-[11px] text-forge-muted mt-2 uppercase tracking-wider">
                      {project.statusLabel}
                    </p>
                  </div>

                  {/* Done / Next */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-forge-border">
                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-forge-muted mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Terminé
                      </p>
                      <ul className="space-y-2">
                        {project.done.map((item) => (
                          <li
                            key={item}
                            className="font-sans text-xs text-forge-muted font-light flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-green-500/60 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-forge-muted mb-3 flex items-center gap-1.5">
                        <Circle className="w-3 h-3 text-forge-orange" />
                        À venir
                      </p>
                      <ul className="space-y-2">
                        {project.next.map((item) => (
                          <li
                            key={item}
                            className="font-sans text-xs text-forge-muted font-light flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-forge-orange/40 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-forge-muted text-sm mb-6 font-light">
            Code source disponible sur GitHub.
          </p>
          <a
            href="https://github.com/heiphaistos44-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-forge-border text-forge-text hover:border-forge-orange/40 hover:text-forge-orange font-sans font-semibold text-xs uppercase tracking-[0.15em] rounded transition-all duration-200"
          >
            Voir GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
