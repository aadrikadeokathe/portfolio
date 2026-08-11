"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { hero, identity } from "@/lib/content";

const HeroCube = dynamic(() => import("./three/HeroCube"), { ssr: false });

const faces = ["Product", "Tech", "Data", "Build"];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-night text-ivory">
      {/* atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 70% 40%, rgba(184,199,255,0.18), transparent 60%), radial-gradient(45% 45% at 25% 75%, rgba(255,77,46,0.14), transparent 60%)",
        }}
      />

      <div className="shell relative z-10 grid min-h-[100svh] grid-cols-1 items-center gap-10 pb-24 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left: statement */}
        <div>
          <motion.p
            className="mono-label mb-8 flex items-center gap-3 text-ivory/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <span className="h-px w-7 bg-accent" />
            {identity.role}
          </motion.p>

          <h1 className="font-serif text-[clamp(38px,7vw,96px)] leading-[0.98] tracking-[-0.03em]">
            {hero.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? "text-accent italic" : "text-ivory"}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.65 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] uppercase tracking-[0.18em] text-ivory/70"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
          >
            {hero.triad.map((t, i) => (
              <span key={t} className="flex items-center gap-4">
                {i > 0 && <span className="text-accent">×</span>}
                {t}
              </span>
            ))}
          </motion.div>

          <motion.a
            href="#build"
            data-cursor="SCROLL"
            className="mt-14 inline-flex flex-col items-start gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ivory/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            Scroll to explore ↓
            <span className="relative h-11 w-px overflow-hidden bg-gradient-to-b from-accent to-transparent">
              <span
                className="absolute left-0 h-1/2 w-full bg-ivory"
                style={{ animation: "scrolldot 1.8s ease-in-out infinite" }}
              />
            </span>
          </motion.a>
        </div>

        {/* right: 3D cube (desktop) / flat card (mobile) */}
        <motion.div
          className="relative h-[340px] sm:h-[440px] lg:h-[560px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 3D — hidden on small screens for performance */}
          <div className="absolute inset-0 hidden md:block">
            <HeroCube />
          </div>

          {/* face labels ring */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <span className="absolute left-1/2 top-2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/40">
              {faces[0]}
            </span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/40">
              {faces[1]}
            </span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/40">
              {faces[2]}
            </span>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/40">
              {faces[3]}
            </span>
          </div>

          {/* mobile: flat interactive glass card */}
          <div className="flex h-full items-center justify-center md:hidden">
            <div className="grid aspect-square w-[68%] grid-cols-2 gap-2 rounded-3xl border border-white/12 bg-white/[0.04] p-2 backdrop-blur-md">
              {faces.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-center justify-center rounded-2xl border border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] ${
                    i === 0 ? "bg-accent/15 text-accent" : "bg-white/[0.03] text-ivory/70"
                  }`}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* dark → light transition band */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ivory" />
    </section>
  );
}
