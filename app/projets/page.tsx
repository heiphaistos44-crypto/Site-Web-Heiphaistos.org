"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Clock, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FORGE_EASE } from "@/lib/easing";
import type { OngoingProject } from "@/lib/projects";
import { ONGOING_DEFAULT, mergeWithDefaults } from "@/lib/projects";
import ProjectIcon from "@/components/ProjectIcon";

const PUBLISHED = [
  {
    name: "Nitrite",
    tagline: "Suite Windows de diagnostic & maintenance",
    description:
      "47+ outils intégrés — processus, drivers, registre, récupération de données, mode WinPE.",
    tech: ["Tauri v2", "Rust", "Vue.js", "Windows", "WinPE"],
    href: "/projets/nitrite",
    url: "https://github.com/heiphaistos44-crypto/NITriTe-2.0",
    external: false,
    visibility: "public" as const,
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
    visibility: "private" as const,
  },
];

function VisibilityBadge({ visibility }: { visibility?: "public" | "private" }) {
  if (!visibility) return null;
  const pub = visibility === "public";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-sans text-[9px] font-semibold uppercase tracking-wider border ${
        pub
          ? "bg-green-500/10 border-green-500/30 text-green-400"
          : "bg-red-500/10 border-red-500/30 text-red-400"
      }`}
    >
      <span className={`w-1 h-1 rounded-full ${pub ? "bg-green-400" : "bg-red-400"}`} />
      {pub ? "Public" : "Privé"}
    </span>
  );
}

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
      if (stored) {
        const parsed: OngoingProject[] = JSON.parse(stored);
        setOngoing(mergeWithDefaults(parsed, ONGOING_DEFAULT));
      }
    } catch {}
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#050505" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #050505 100%)" }}
      >
        {/* Orange glow top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.14) 0%, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: FORGE_EASE }}
          className="relative z-10"
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
          <p className="font-sans text-[#b0b0b0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Applications desktop, outils Windows et plateformes web — développés en solo.
          </p>
        </motion.div>
        {/* Orange bottom separator */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.35) 30%, rgba(249,115,22,0.35) 70%, transparent 100%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[60px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center bottom, rgba(249,115,22,0.18) 0%, transparent 70%)" }}
        />
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
                  style={{ background: "linear-gradient(90deg, transparent, #f97316, #dc2626, transparent)" }}
                />

                {/* Logo + header */}
                <div className="flex items-start gap-4 mb-4">
                  <ProjectIcon name={project.name} className="w-14 h-14" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h2 className="font-heading text-2xl tracking-wider text-forge-text group-hover:text-forge-orange transition-colors duration-300">
                        {project.name}
                      </h2>
                      <VisibilityBadge visibility={project.visibility} />
                    </div>
                    <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.2em] font-medium">
                      {project.tagline}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#888] hover:text-forge-orange transition-colors duration-200 flex-shrink-0"
                    aria-label={`Voir ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="font-sans text-sm text-[#c8c8c8] leading-relaxed font-light flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-sans text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border border-forge-border text-[#999]"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ongoing.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: FORGE_EASE }}
                  className="group relative bg-forge-card border border-forge-border rounded-xl p-5 sm:p-6 hover:border-forge-orange/30 transition-colors duration-300 flex flex-col"
                >
                  {/* Header with icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <ProjectIcon name={project.name} className="w-14 h-14 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-forge-text leading-none">
                          {project.name}
                        </h2>
                        <VisibilityBadge visibility={project.visibility} />
                      </div>
                      <p className="font-sans text-forge-orange text-[10px] uppercase tracking-[0.2em] font-medium mt-1">
                        {project.tagline}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Clock className="w-2.5 h-2.5 text-[#888]" />
                        <span className="font-sans text-[#888] text-[10px]">Depuis {project.since}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#c0c0c0] leading-relaxed font-light mb-4">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-[9px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-forge-border text-[#999]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-sans text-[10px] text-[#888] uppercase tracking-wider">
                        Avancement
                      </span>
                      <span className="font-heading text-base text-forge-orange tracking-wider">
                        {project.progress}%
                      </span>
                    </div>
                    <ProgressBar value={project.progress} />
                    <p className="font-sans text-[10px] text-[#888] mt-1.5 uppercase tracking-wider">
                      {project.statusLabel}
                    </p>
                  </div>

                  {/* Done / Next */}
                  <div className="grid grid-cols-1 gap-4 pt-4 border-t border-forge-border flex-1">
                    <div>
                      <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#888] mb-2 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                        Terminé
                      </p>
                      <ul className="space-y-1">
                        {project.done.map((item) => (
                          <li key={item} className="font-sans text-[10px] text-[#b8b8b8] font-light flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-green-500/60 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#888] mb-2 flex items-center gap-1">
                        <Circle className="w-2.5 h-2.5 text-forge-orange" />
                        À venir
                      </p>
                      <ul className="space-y-1">
                        {project.next.map((item) => (
                          <li key={item} className="font-sans text-[10px] text-[#b8b8b8] font-light flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-forge-orange/40 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* GitHub link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-4 border-t border-forge-border flex items-center gap-1.5 text-[#888] hover:text-forge-orange transition-colors duration-200 font-sans text-[10px] uppercase tracking-wider w-fit"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Voir sur GitHub
                    </a>
                  )}
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
          <p className="font-sans text-[#888] text-sm mb-6 font-light">
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
