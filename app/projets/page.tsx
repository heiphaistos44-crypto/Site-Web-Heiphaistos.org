"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Clock, CheckCircle2, Circle, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FORGE_EASE } from "@/lib/easing";
import type { OngoingProject, Contributor } from "@/lib/projects";
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
  {
    name: "SecuScan AI",
    tagline: "Scanner sécurité offensif/défensif pour Windows",
    description:
      "Analyse SAST, secrets, binaires PE, règles YARA et correction automatique via IA. Batch Fix intégré (Claude/Gemini), export HTML/TXT, suggestions anti-faux-positifs.",
    tech: ["Tauri v2", "Rust", "YARA", "PE Analysis", "LLM API"],
    href: "https://github.com/heiphaistos44-crypto/SecuScan",
    url: "https://github.com/heiphaistos44-crypto/SecuScan",
    external: true,
    visibility: "public" as const,
  },
  {
    name: "AllRename",
    tagline: "Renommeur multimédia intelligent pour Plex",
    description:
      "Renomme films, séries et sous-titres automatiquement via TMDB. Intégration qBittorrent et Transmission. Rollback LIFO, clés chiffrées DPAPI.",
    tech: ["C# 12", ".NET 8", "WPF", "TMDB API", "DPAPI"],
    href: "https://github.com/heiphaistos44-crypto/AllRename",
    url: "https://github.com/heiphaistos44-crypto/AllRename",
    external: true,
    visibility: "public" as const,
  },
  {
    name: "PureUpdate",
    tagline: "Gestionnaire de mises à jour Windows tout-en-un",
    description:
      "Centralise Windows Update, Winget, Chocolatey et Scoop. Health Score, tray icon, point de restauration automatique, onglet erreurs, planificateur.",
    tech: ["C# 12", ".NET 8", "WPF-UI Fluent", "WUAPI", "Winget"],
    href: "https://github.com/heiphaistos44-crypto/PureUpdate-",
    url: "https://github.com/heiphaistos44-crypto/PureUpdate-",
    external: true,
    visibility: "public" as const,
  },
  {
    name: "FileScanner",
    tagline: "Analyseur de sécurité fichiers avec ClamAV natif",
    description:
      "Pipeline complet hash→MIME→PE→YARA→ClamAV→VirusTotal. Quarantaine XOR, auto-update signatures ClamAV, virtual scroll IoC, export multi-format.",
    tech: ["Tauri v2", "Rust", "Vue 3", "ClamAV", "YARA", "VirusTotal"],
    href: "https://github.com/heiphaistos44-crypto/FileScanner",
    url: "https://github.com/heiphaistos44-crypto/FileScanner",
    external: true,
    visibility: "public" as const,
  },
];

interface ReleaseInfo {
  tag: string;
  assetName: string;
  downloadUrl: string;
  size: number;
}

interface GitHubData {
  stars: number;
  pushedAt: string;
  release?: ReleaseInfo;
}

type GHAsset = { name: string; browser_download_url: string; size: number };

function pickBestAsset(assets: GHAsset[]): GHAsset | undefined {
  const SKIP = [".sig", ".sha256", ".sha256.txt", ".asc"];
  const valid = assets.filter((a) => !SKIP.some((ext) => a.name.endsWith(ext)));
  if (!valid.length) return undefined;
  return (
    valid.find((a) => /setup|installer|_x64|_x86/i.test(a.name) && a.name.endsWith(".exe")) ??
    valid.find((a) => a.name.endsWith(".exe")) ??
    valid.find((a) => /\.(zip|7z|msi)$/.test(a.name)) ??
    valid[0]
  );
}

function useGitHubRepo(githubUrl?: string): GitHubData | null {
  const [data, setData] = useState<GitHubData | null>(null);
  useEffect(() => {
    if (!githubUrl) return;
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/\s]+)/);
    if (!match) return;
    const [, owner, repo] = match;
    const key = `gh2_${owner}_${repo}`;
    try {
      const cached = sessionStorage.getItem(key);
      if (cached) { setData(JSON.parse(cached)); return; }
    } catch {}
    const headers = { Accept: "application/vnd.github+json" };
    Promise.allSettled([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, { headers }),
    ]).then(async ([repoRes, releaseRes]) => {
      let stars = 0, pushedAt = "";
      if (repoRes.status === "fulfilled" && repoRes.value.ok) {
        const d = await repoRes.value.json() as { stargazers_count: number; pushed_at: string };
        stars = d.stargazers_count;
        pushedAt = d.pushed_at;
      }
      let release: ReleaseInfo | undefined;
      if (releaseRes.status === "fulfilled" && releaseRes.value.ok) {
        const r = await releaseRes.value.json() as { tag_name: string; assets: GHAsset[] };
        const picked = pickBestAsset(r.assets ?? []);
        if (picked) release = { tag: r.tag_name, assetName: picked.name, downloadUrl: picked.browser_download_url, size: picked.size };
      }
      if (!stars && !pushedAt && !release) return;
      const result: GitHubData = { stars, pushedAt, release };
      try { sessionStorage.setItem(key, JSON.stringify(result)); } catch {}
      setData(result);
    }).catch(() => {});
  }, [githubUrl]);
  return data;
}

function formatRelative(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days === 0) return "aujourd'hui";
  if (days === 1) return "hier";
  if (days < 7) return `il y a ${days}j`;
  if (days < 30) return `il y a ${Math.floor(days / 7)}sem`;
  if (days < 365) return `il y a ${Math.floor(days / 30)}mois`;
  return `il y a ${Math.floor(days / 365)}an`;
}

function GitHubStats({ githubUrl }: { githubUrl?: string }) {
  const data = useGitHubRepo(githubUrl);
  if (!data || (!data.stars && !data.pushedAt)) return null;
  return (
    <div className="flex items-center gap-3 mt-1.5">
      {data.stars > 0 && (
        <span className="inline-flex items-center gap-1 font-sans text-[9px] text-[#888]">
          <svg className="w-2.5 h-2.5 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {data.stars}
        </span>
      )}
      {data.pushedAt && (
        <span className="inline-flex items-center gap-1 font-sans text-[9px] text-[#888]">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Push {formatRelative(data.pushedAt)}
        </span>
      )}
    </div>
  );
}

function DownloadButton({ githubUrl }: { githubUrl?: string }) {
  const data = useGitHubRepo(githubUrl);
  if (!data?.release) return null;
  const { tag, downloadUrl, size } = data.release;
  const sizeMB = size > 0 ? `${(size / 1048576).toFixed(1)} MB` : null;
  return (
    <a
      href={downloadUrl}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f97316]/10 border border-[#f97316]/30 hover:bg-[#f97316]/20 hover:border-[#f97316]/60 transition-all duration-200"
    >
      <Download className="w-3 h-3 text-[#f97316] flex-shrink-0" />
      <span className="font-sans text-[10px] font-bold text-[#f97316] uppercase tracking-wider">
        Télécharger {tag}
      </span>
      {sizeMB && <span className="font-sans text-[9px] text-[#888]">{sizeMB}</span>}
    </a>
  );
}

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

function ContributorBadge({ contributors }: { contributors: Contributor[] }) {
  if (!contributors?.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-1">
      {contributors.map((c) => (
        <a
          key={c.name}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/8 hover:border-[#fbbf24]/60 hover:bg-[#fbbf24]/15 transition-all duration-200 group"
        >
          <svg className="w-3 h-3 text-[#fbbf24]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="font-sans text-[9px] font-semibold uppercase tracking-wider text-[#fbbf24]">
            {c.role}
          </span>
          <span className="font-sans text-[9px] text-[#fbbf24]/80 font-medium">
            {c.name}
          </span>
        </a>
      ))}
    </div>
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

                <p className="font-sans text-sm text-[#c8c8c8] leading-relaxed font-light flex-1 mb-3">
                  {project.description}
                </p>

                <GitHubStats githubUrl={project.url.includes("github.com") ? project.url : undefined} />

                <div className="flex flex-wrap gap-1.5 mb-5 mt-3">
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
                <div className="mt-3">
                  <DownloadButton githubUrl={project.url.includes("github.com") ? project.url : undefined} />
                </div>
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
                      <GitHubStats githubUrl={project.githubUrl} />
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#c0c0c0] leading-relaxed font-light mb-3">
                    {project.description}
                  </p>

                  <ContributorBadge contributors={project.contributors ?? []} />

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

                  {/* GitHub link + download */}
                  {project.githubUrl && (
                    <div className="mt-4 pt-4 border-t border-forge-border flex flex-wrap items-center gap-3">
                      <DownloadButton githubUrl={project.githubUrl} />
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#888] hover:text-forge-orange transition-colors duration-200 font-sans text-[10px] uppercase tracking-wider"
                      >
                        <ExternalLink className="w-3 h-3" />
                        GitHub
                      </a>
                    </div>
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
