"use client";

import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, ArrowRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import Link from "next/link";

const LINKS = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Rejoins la communauté — support, échanges, annonces et projets en cours.",
    href: "https://discord.gg/gygfkCTNsv",
    external: true,
    cta: "Rejoindre",
    accentHex: "#5865f2",
    bgAlpha: "rgba(88,101,242,0.1)",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    description: "Code source des projets open-source, outils et expérimentations.",
    href: "https://github.com/heiphaistos44-crypto",
    external: true,
    cta: "Voir le profil",
    accentHex: "#f97316",
    bgAlpha: "rgba(249,115,22,0.08)",
  },
  {
    icon: ExternalLink,
    title: "Plexit",
    description: "Application Plex avancée — gestion et statistiques de bibliothèque multimédia.",
    href: "/projets/plexit",
    external: false,
    cta: "Découvrir",
    accentHex: "#f97316",
    bgAlpha: "rgba(249,115,22,0.08)",
  },
  {
    icon: ExternalLink,
    title: "Nitrite",
    description: "Suite complète d'outils de diagnostic et maintenance Windows.",
    href: "/projets/nitrite",
    external: false,
    cta: "Découvrir",
    accentHex: "#f97316",
    bgAlpha: "rgba(249,115,22,0.08)",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.5em] mb-4 font-medium">
            Communauté &amp; Projets
          </p>
          <h2
            className="font-heading gradient-text leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            ÉCOSYSTÈME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {LINKS.map((link, i) => {
            const cardClasses =
              "group relative bg-forge-card border border-forge-border rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-forge-orange/40 card-glow transition-colors duration-300";
            const inner = (
              <>
                <div
                  className="inline-flex p-3 rounded-lg w-fit transition-transform duration-300 group-hover:scale-110"
                  style={{ background: link.bgAlpha }}
                >
                  <link.icon className="w-5 h-5" style={{ color: link.accentHex }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl tracking-wider text-forge-text mb-2 group-hover:text-forge-orange transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="font-sans text-sm text-forge-muted leading-relaxed font-light">
                    {link.description}
                  </p>
                </div>
                <span
                  className="font-sans text-xs font-semibold uppercase tracking-[0.15em] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300"
                  style={{ color: link.accentHex }}
                >
                  {link.cta}
                  <ArrowRight className="w-3 h-3 flex-shrink-0" />
                </span>
              </>
            );

            return link.external ? (
              <motion.a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={cardClasses}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={cardClasses}
              >
                <Link href={link.href} className="flex flex-col gap-4 flex-1">
                  {inner}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
