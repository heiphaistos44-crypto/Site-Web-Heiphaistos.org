"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  Save,
  LogOut,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
} from "lucide-react";

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
}

const STORAGE_KEY = "hph_ongoing_projects";

const DEFAULT_PROJECT: OngoingProject = {
  name: "",
  tagline: "",
  description: "",
  tech: [],
  progress: 0,
  statusLabel: "En développement actif",
  done: [],
  next: [],
  since: "",
};

function ProjectForm({
  project,
  onChange,
  onDelete,
  index,
}: {
  project: OngoingProject;
  onChange: (p: OngoingProject) => void;
  onDelete: () => void;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  const inputCls =
    "w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg px-3 py-2.5 font-sans text-sm text-[#e5e5e5] outline-none focus:border-orange-500/60 transition-colors placeholder:text-[#333]";
  const labelCls = "font-sans text-[10px] uppercase tracking-[0.3em] text-[#666] mb-1 block";
  const textareaCls = `${inputCls} resize-none`;

  return (
    <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#141414] transition-colors"
      >
        <span className="font-sans font-semibold text-sm text-[#e5e5e5]">
          {project.name || `Projet ${index + 1}`}
          <span className="ml-3 text-orange-500 font-normal">{project.progress}%</span>
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="p-1.5 text-[#444] hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {open ? <ChevronUp className="w-4 h-4 text-[#444]" /> : <ChevronDown className="w-4 h-4 text-[#444]" />}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-[#1a1a1a]" style={{ paddingTop: "1.25rem" }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Nom</label>
              <input
                className={inputCls}
                value={project.name}
                onChange={(e) => onChange({ ...project, name: e.target.value })}
                placeholder="GhostHandDesk"
              />
            </div>
            <div>
              <label className={labelCls}>Depuis</label>
              <input
                className={inputCls}
                value={project.since}
                onChange={(e) => onChange({ ...project, since: e.target.value })}
                placeholder="Déc. 2025"
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Tagline</label>
            <input
              className={inputCls}
              value={project.tagline}
              onChange={(e) => onChange({ ...project, tagline: e.target.value })}
              placeholder="Bureau à distance WebRTC peer-to-peer"
            />
          </div>

          <div>
            <label className={labelCls}>Description</label>
            <textarea
              className={textareaCls}
              rows={3}
              value={project.description}
              onChange={(e) => onChange({ ...project, description: e.target.value })}
              placeholder="Description complète du projet..."
            />
          </div>

          <div>
            <label className={labelCls}>Stack (séparés par virgule)</label>
            <input
              className={inputCls}
              value={project.tech.join(", ")}
              onChange={(e) =>
                onChange({
                  ...project,
                  tech: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                })
              }
              placeholder="Rust, Tauri v2, Go, Vue.js"
            />
          </div>

          <div>
            <label className={labelCls}>Avancement — {project.progress}%</label>
            <input
              type="range"
              min={0}
              max={100}
              value={project.progress}
              onChange={(e) => onChange({ ...project, progress: Number(e.target.value) })}
              className="w-full accent-orange-500"
            />
          </div>

          <div>
            <label className={labelCls}>Statut</label>
            <input
              className={inputCls}
              value={project.statusLabel}
              onChange={(e) => onChange({ ...project, statusLabel: e.target.value })}
              placeholder="En développement actif"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Terminé (une ligne = un item)</label>
              <textarea
                className={textareaCls}
                rows={5}
                value={project.done.join("\n")}
                onChange={(e) =>
                  onChange({
                    ...project,
                    done: e.target.value.split("\n").filter(Boolean),
                  })
                }
                placeholder={"Stream vidéo WebRTC\nSignaling server Go"}
              />
            </div>
            <div>
              <label className={labelCls}>À venir (une ligne = un item)</label>
              <textarea
                className={textareaCls}
                rows={5}
                value={project.next.join("\n")}
                onChange={(e) =>
                  onChange({
                    ...project,
                    next: e.target.value.split("\n").filter(Boolean),
                  })
                }
                placeholder={"Build release\nTests e2e"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<OngoingProject[]>([]);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("hph_admin_auth") !== "1") {
      router.replace("/admin");
      return;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProjects(JSON.parse(stored));
    } catch {}
  }, [router]);

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function logout() {
    sessionStorage.removeItem("hph_admin_auth");
    router.push("/admin");
  }

  function addProject() {
    setProjects([...projects, { ...DEFAULT_PROJECT }]);
  }

  function updateProject(i: number, p: OngoingProject) {
    const next = [...projects];
    next[i] = p;
    setProjects(next);
  }

  function deleteProject(i: number) {
    setProjects(projects.filter((_, idx) => idx !== i));
  }

  function copyCode() {
    const code = `const ONGOING = ${JSON.stringify(projects, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: "#050505" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1
              className="font-heading tracking-[0.3em] text-3xl"
              style={{ color: "#e5e5e5", fontFamily: "var(--font-bebas)" }}
            >
              PROJETS EN COURS
            </h1>
            <p className="font-sans text-[#666] text-xs mt-1">
              Modifications sauvegardées localement.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 px-4 py-2 border border-[#1e1e1e] hover:border-[#333] text-[#666] hover:text-[#e5e5e5] font-sans text-xs uppercase tracking-wider rounded-lg transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copié" : "Exporter"}
            </button>
            <button
              onClick={save}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-lg transition-all"
            >
              {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              {saved ? "Sauvegardé" : "Sauvegarder"}
            </button>
            <button
              onClick={logout}
              className="p-2 text-[#444] hover:text-[#e5e5e5] transition-colors"
              title="Déconnexion"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          {projects.map((p, i) => (
            <ProjectForm
              key={i}
              index={i}
              project={p}
              onChange={(updated) => updateProject(i, updated)}
              onDelete={() => deleteProject(i)}
            />
          ))}

          <button
            onClick={addProject}
            className="flex items-center justify-center gap-2 py-4 border border-dashed border-[#1e1e1e] hover:border-orange-500/40 text-[#444] hover:text-orange-500 rounded-xl font-sans text-sm transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            Ajouter un projet
          </button>
        </div>

        <p className="font-sans text-[#333] text-xs text-center mt-10">
          Les changements sont visibles sur{" "}
          <a href="/projets" target="_blank" className="text-[#555] hover:text-orange-500 transition-colors">
            /projets
          </a>{" "}
          dans ce navigateur.
        </p>
      </div>
    </div>
  );
}
