"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Wrench } from "lucide-react";
import Link from "next/link";
import { FORGE_EASE } from "@/lib/easing";

const EMBER_COUNT = 22;

export default function Hero() {
  const [embers] = useState(() =>
    Array.from({ length: EMBER_COUNT }, (_, i) => ({
      id: i,
      left: `${5 + (i / EMBER_COUNT) * 90}%`,
      size: `${1.5 + Math.random() * 3.5}px`,
      duration: `${5 + Math.random() * 7}s`,
      delay: `${Math.random() * 8}s`,
      drift: `${(Math.random() - 0.5) * 120}px`,
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-forge-black" />

      {/* Forge radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(249,115,22,0.18) 0%, rgba(220,38,38,0.1) 40%, transparent 70%)",
          animation: "forge-glow-pulse 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(249,115,22,0.3) 0%, transparent 65%)",
        }}
      />

      {/* Horizontal divider line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.4) 30%, rgba(249,115,22,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {embers.map((ember) => (
          <div
            key={ember.id}
            className="absolute bottom-0 rounded-full"
            style={
              {
                left: ember.left,
                width: ember.size,
                height: ember.size,
                background:
                  "radial-gradient(circle, #fde68a 0%, #f97316 60%, #dc2626 100%)",
                animation: `ember-rise ${ember.duration} ease-out ${ember.delay} infinite`,
                "--drift": ember.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-6 sm:pt-2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-forge-orange text-xs uppercase tracking-[0.5em] mb-6 font-medium"
        >
          Technicien Informatique
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: FORGE_EASE }}
          className="font-heading leading-none mb-5 gradient-text"
          style={{ fontSize: "clamp(3rem, 14vw, 14rem)" }}
        >
          HEIPHAISTOS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.95, ease: FORGE_EASE }}
          className="flex justify-center mb-6"
        >
          <div className="forge-logo-wrap">
            <div className="forge-glow-base" />
            <div className="forge-ring-fire" />
            <div className="forge-ring-warm" />
            <div className="forge-ring-arc" />
            <div className="forge-logo-clip w-40 h-40 sm:w-56 sm:h-56">
              <img src="/logo.png" alt="Heiphaistos" />
            </div>
            <div className="forge-logo-shimmer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="w-24 h-px mx-auto mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, #f97316, #dc2626, transparent)",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-sans text-forge-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Maintenance &amp; Solutions Informatiques — Diagnostic, réparation,
          récupération de données et solutions sur mesure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://discord.gg/gygfkCTNsv"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs rounded transition-all duration-300 forge-glow-btn hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Rejoindre le Discord
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-forge-orange/60 text-forge-orange hover:bg-forge-orange/10 hover:border-forge-orange font-sans font-semibold uppercase tracking-[0.2em] text-xs rounded transition-all duration-300"
          >
            <Wrench className="w-4 h-4" />
            Mes Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-forge-muted/50"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
