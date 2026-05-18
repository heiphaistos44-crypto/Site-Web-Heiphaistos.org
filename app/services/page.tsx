"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  HardDrive,
  KeyRound,
  Wrench,
  Cpu,
  Code2,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { FORGE_EASE } from "@/lib/easing";

const SERVICES = [
  {
    icon: Monitor,
    title: "Installation Système",
    description:
      "Windows, Linux, MacOS — Installation complète, configuration et optimisation bureautique ou gaming.",
    href: "/services/installation-systeme",
    tags: ["Windows", "Linux", "macOS"],
  },
  {
    icon: HardDrive,
    title: "Récupération de Données",
    description:
      "Récupération de fichiers perdus sur SSD et HDD — partitions endommagées, formatage accidentel.",
    href: "/services/recuperation-donnees",
    tags: ["SSD", "HDD", "Partitions"],
  },
  {
    icon: KeyRound,
    title: "Récupération de Comptes",
    description:
      "Accès perdu à Gmail, Orange, SFR, Bouygues ou Free — procédures officielles et assistance dédiée.",
    href: "/services/recuperation-comptes",
    tags: ["Gmail", "FAI", "2FA"],
  },
  {
    icon: Wrench,
    title: "Diagnostic & Réparation",
    description:
      "Diagnostic complet matériel et logiciel. Réparation hors microsoudure — dysfonctionnements identifiés et corrigés.",
    href: "/services/diagnostic-reparation",
    tags: ["Hardware", "Software", "Thermique"],
  },
  {
    icon: Cpu,
    title: "PC Sur-Mesure",
    description:
      "Conseil, sélection des composants et montage de PC personnalisés — gaming, création, bureautique.",
    href: "/services/pc-sur-mesure",
    tags: ["Gaming", "Création", "Montage"],
  },
  {
    icon: Code2,
    title: "VibeCoding",
    description:
      "Création de sites web et d'applications avec l'IA comme levier — prototypes rapides et solutions sur mesure.",
    href: "/services/vibecoding",
    tags: ["Web", "Apps", "IA"],
  },
  {
    icon: Lightbulb,
    title: "Conseil",
    description:
      "Recommandations personnalisées en matériel, gaming et intelligence artificielle.",
    href: "/services/conseil",
    tags: ["Matériel", "Gaming", "IA"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: FORGE_EASE },
  }),
};

export default function ServicesPage() {
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
            Ce que je fais
          </p>
          <h1
            className="font-heading gradient-text leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            MES SERVICES
          </h1>
          <p className="font-sans text-forge-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Maintenance, réparation, récupération et développement — des solutions adaptées à chaque
            problème informatique.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative bg-forge-card border border-forge-border rounded-xl p-5 sm:p-6 transition-colors duration-300 hover:border-forge-orange/40 card-glow flex flex-col ${
                  i === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #f97316, #dc2626, transparent)",
                  }}
                />

                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                  <service.icon className="w-5 h-5 text-white" />
                </div>

                <h2 className="font-heading text-2xl tracking-wider text-forge-text mb-2 group-hover:text-forge-orange transition-colors duration-300">
                  {service.title}
                </h2>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border border-forge-border text-forge-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 text-center"
          >
            <p className="font-sans text-forge-muted text-sm mb-6 font-light">
              Un besoin non listé ? Contacte-moi directement.
            </p>
            <a
              href="https://discord.gg/gygfkCTNsv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-sans font-semibold text-xs uppercase tracking-[0.15em] rounded transition-all duration-200 hover:scale-105 forge-glow-btn"
            >
              Contacter sur Discord
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
