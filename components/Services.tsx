"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, HardDrive, KeyRound, Wrench, Cpu, Code2, Lightbulb } from "lucide-react";
import Link from "next/link";
import { FORGE_EASE } from "@/lib/easing";

const SERVICES = [
  {
    icon: Monitor,
    title: "Installation Système",
    description: "Windows, Linux, MacOS — Installation complète, configuration et optimisation bureautique ou gaming.",
    href: "/services/installation-systeme",
  },
  {
    icon: HardDrive,
    title: "Récupération de Données",
    description: "Récupération de fichiers perdus sur SSD et HDD — partitions endommagées, formatage accidentel.",
    href: "/services/recuperation-donnees",
  },
  {
    icon: KeyRound,
    title: "Récupération de Comptes",
    description: "Accès perdu à Gmail, Orange, SFR, Bouygues ou Free — procédures officielles et assistance dédiée.",
    href: "/services/recuperation-comptes",
  },
  {
    icon: Wrench,
    title: "Diagnostic & Réparation",
    description: "Diagnostic complet matériel et logiciel. Réparation hors microsoudure — dysfonctionnements identifiés et corrigés.",
    href: "/services/diagnostic-reparation",
  },
  {
    icon: Cpu,
    title: "PC Sur-Mesure",
    description: "Conseil, sélection des composants et montage de PC personnalisés — gaming, création, bureautique.",
    href: "/services/pc-sur-mesure",
  },
  {
    icon: Code2,
    title: "VibeCoding",
    description: "Création de sites web et d'applications avec l'IA comme levier — prototypes rapides et solutions sur mesure.",
    href: "/services/vibecoding",
  },
  {
    icon: Lightbulb,
    title: "Conseil",
    description: "Recommandations personnalisées en matériel, gaming et intelligence artificielle.",
    href: "/services/conseil",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: FORGE_EASE },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)" }}
    >
      {/* Forge glow top-left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(249,115,22,0.08) 0%, transparent 65%)" }}
      />
      {/* Forge glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(220,38,38,0.07) 0%, transparent 65%)" }}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.5em] mb-4 font-medium">
            Ce que je fais
          </p>
          <h2
            className="font-heading gradient-text leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            MES SERVICES
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative bg-forge-card border border-forge-border rounded-xl p-5 sm:p-6 transition-colors duration-300 hover:border-forge-orange/40 card-glow flex flex-col ${
                i === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #f97316, #dc2626, transparent)" }}
              />

              <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                <service.icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="font-heading text-xl tracking-wider text-forge-text mb-3 group-hover:text-forge-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-forge-muted leading-relaxed font-light flex-1">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-1.5 text-forge-orange font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:gap-3 transition-all duration-200 w-fit"
              >
                En savoir plus
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
