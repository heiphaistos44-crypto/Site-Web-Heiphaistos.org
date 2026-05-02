"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectData {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  externalUrl: string;
  features: string[];
}

export default function ProjectDetailPage({ project }: { project: ProjectData }) {
  return (
    <div className="min-h-screen bg-forge-black">
      {/* Hero */}
      <div className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#ecosystem"
              className="inline-flex items-center gap-2 font-sans text-forge-muted hover:text-forge-orange transition-colors text-xs uppercase tracking-[0.2em] mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Tous les projets
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              className="font-heading gradient-text leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
            >
              {project.title}
            </h1>
            <p className="font-sans text-forge-muted text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-6">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs px-3 py-1 rounded-full border border-forge-border text-forge-muted uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="h-px w-full mb-10"
            style={{ background: "linear-gradient(90deg, #f97316 0%, #dc2626 50%, transparent 100%)" }}
          />

          <p className="font-sans text-forge-text text-sm sm:text-base leading-relaxed mb-10 max-w-3xl">
            {project.description}
          </p>

          {project.features.length > 0 && (
            <>
              <h2 className="font-heading text-2xl sm:text-3xl text-forge-text tracking-wider mb-6">
                FONCTIONNALITÉS
              </h2>
              <ul className="space-y-3 mb-12">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-sm text-forge-muted">
                    <span className="w-1 h-1 rounded-full bg-forge-orange mt-2 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div
            className="border border-forge-border rounded-xl p-6 sm:p-8 text-center"
            style={{ background: "rgba(249,115,22,0.04)" }}
          >
            <p className="font-heading text-2xl sm:text-3xl gradient-text mb-2 tracking-wider">
              VOIR LE PROJET
            </p>
            <p className="font-sans text-sm text-forge-muted mb-6 font-light">
              Accède directement à l'application en ligne.
            </p>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs rounded transition-all duration-300 forge-glow-btn hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Ouvrir {project.title}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
