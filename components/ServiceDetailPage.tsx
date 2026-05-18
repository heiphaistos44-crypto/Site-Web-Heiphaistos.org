"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Monitor, HardDrive, KeyRound, Wrench, Cpu, Code2, Lightbulb } from "lucide-react";
import Link from "next/link";

const ICONS = {
  monitor: Monitor,
  "hard-drive": HardDrive,
  "key-round": KeyRound,
  wrench: Wrench,
  cpu: Cpu,
  code2: Code2,
  lightbulb: Lightbulb,
} as const;

export type ServiceIconName = keyof typeof ICONS;

export interface ServiceData {
  iconName: ServiceIconName;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export default function ServiceDetailPage({ service }: { service: ServiceData }) {
  const Icon = ICONS[service.iconName];

  return (
    <div className="min-h-screen bg-forge-black">
      {/* Hero */}
      <div className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-80 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.22) 0%, rgba(220,38,38,0.1) 45%, transparent 72%)" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.35) 0%, transparent 65%)", filter: "blur(20px)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-sans text-forge-muted hover:text-forge-orange transition-colors text-xs uppercase tracking-[0.2em] mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Tous les services
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-6">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1
              className="font-heading gradient-text leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              {service.title}
            </h1>
            <p className="font-sans text-forge-muted text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <div
            className="h-px w-full mb-10"
            style={{ background: "linear-gradient(90deg, #f97316 0%, #dc2626 50%, transparent 100%)" }}
          />

          <p className="font-sans text-forge-text text-sm sm:text-base leading-relaxed mb-10 max-w-3xl">
            {service.description}
          </p>

          <h2 className="font-heading text-2xl sm:text-3xl text-forge-text tracking-wider mb-6">
            CE QUI EST INCLUS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 bg-forge-card border border-forge-border rounded-lg px-4 py-3">
                <Check className="w-4 h-4 text-forge-orange mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-forge-text leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          <div
            className="border border-forge-border rounded-xl p-6 sm:p-8 text-center"
            style={{ background: "rgba(249,115,22,0.04)" }}
          >
            <p className="font-heading text-2xl sm:text-3xl gradient-text mb-2 tracking-wider">INTÉRESSÉ ?</p>
            <p className="font-sans text-sm text-forge-muted mb-6 font-light">
              Contacte-moi directement sur Discord pour discuter de ton projet.
            </p>
            <a
              href="https://discord.gg/gygfkCTNsv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs rounded transition-all duration-300 forge-glow-btn hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Contacter sur Discord
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
