"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import GithubIcon from "@/components/icons/GithubIcon";
import { FORGE_EASE } from "@/lib/easing";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: FORGE_EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forge-black/90 backdrop-blur-xl border-b border-forge-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <img
            src="/logo.png"
            alt="Heiphaistos"
            className="h-9 w-9 rounded-full object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-heading text-base sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-forge-text truncate">
            HEIPHAISTOS IT
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="font-sans text-xs text-forge-muted hover:text-forge-orange transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Services
          </Link>
          <Link
            href="/projets"
            className="font-sans text-xs text-forge-muted hover:text-forge-orange transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Projets
          </Link>
          <a
            href="https://github.com/heiphaistos44-crypto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-forge-muted hover:text-forge-orange transition-colors duration-200"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://discord.gg/gygfkCTNsv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-sans font-semibold text-xs uppercase tracking-[0.15em] rounded transition-all duration-200 hover:scale-105"
          >
            Discord
          </a>
        </div>

        <button
          className="md:hidden text-forge-muted hover:text-forge-text transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-forge-dark/95 backdrop-blur-xl border-b border-forge-border overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-4">
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-forge-text uppercase tracking-[0.2em] hover:text-forge-orange transition-colors py-1"
              >
                Services
              </Link>
              <Link
                href="/projets"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-forge-text uppercase tracking-[0.2em] hover:text-forge-orange transition-colors py-1"
              >
                Projets
              </Link>
              <a
                href="https://github.com/heiphaistos44-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-forge-text uppercase tracking-[0.2em] hover:text-forge-orange transition-colors py-1"
              >
                GitHub
              </a>
              <a
                href="https://discord.gg/gygfkCTNsv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-sans font-semibold text-sm uppercase tracking-[0.15em] text-center rounded mt-1"
              >
                Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
