"use client";

import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, ArrowRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

const LINKS = [
  {
    icon: MessageCircle,
    title: "Discord",
    description:
      "Rejoins la communauté — support, échanges, annonces et projets en cours.",
    href: "https://discord.gg/gygfkCTNsv",
    cta: "Rejoindre",
    accentHex: "#5865f2",
    bgAlpha: "rgba(88,101,242,0.1)",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    description:
      "Code source des projets open-source, outils et expérimentations.",
    href: "https://github.com/heiphaistos44-crypto",
    cta: "Voir le profil",
    accentHex: "#f97316",
    bgAlpha: "rgba(249,115,22,0.08)",
  },
  {
    icon: ExternalLink,
    title: "Plexit",
    description:
      "Application Plex avancée — gestion et statistiques de bibliothèque multimédia.",
    href: "https://plexit.heiphaistos.org",
    cta: "Découvrir",
    accentHex: "#f97316",
    bgAlpha: "rgba(249,115,22,0.08)",
  },
  {
    icon: ExternalLink,
    title: "Nitrite",
    description:
      "Suite complète d'outils de diagnostic et maintenance Windows.",
    href: "https://nitrite.heiphaistos.org",
    cta: "Découvrir",
    accentHex: "#f97316",
    bgAlpha: "rgba(249,115,22,0.08)",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="py-28 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-forge-orange text-xs uppercase tracking-[0.5em] mb-4 font-medium">
            Communauté &amp; Projets
          </p>
          <h2
            className="font-heading gradient-text leading-none"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            ÉCOSYSTÈME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-forge-card border border-forge-border rounded-xl p-6 flex flex-col gap-4 hover:border-forge-orange/40 card-glow transition-colors duration-300"
            >
              <div
                className="inline-flex p-3 rounded-lg w-fit transition-transform duration-300 group-hover:scale-110"
                style={{ background: link.bgAlpha }}
              >
                <link.icon
                  className="w-5 h-5"
                  style={{ color: link.accentHex }}
                />
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
