"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import { skills, certs } from "@/lib/content";

const categories = Object.keys(skills) as (keyof typeof skills)[];

export default function Skills() {
  const [active, setActive] = useState<keyof typeof skills>("Product");

  return (
    <section className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index="07" title="The toolkit" />
        <Reveal>
          <h2 className="mt-6 font-serif text-[clamp(34px,6vw,72px)] leading-none tracking-[-0.03em]">
            A constellation, not a wall.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* radial category selector */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            {/* rings */}
            <div className="absolute inset-[8%] rounded-full border border-border" />
            <div className="absolute inset-[24%] rounded-full border border-border/60" />
            {/* center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="font-serif text-[clamp(20px,3vw,30px)] leading-none tracking-tight">
                Aadrika
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                {active}
              </div>
            </div>
            {/* nodes */}
            {categories.map((cat, i) => {
              const angle = (i / categories.length) * 2 * Math.PI - Math.PI / 2;
              const r = 42; // percent radius
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onMouseEnter={() => setActive(cat)}
                  onFocus={() => setActive(cat)}
                  onClick={() => setActive(cat)}
                  data-cursor="HOVER"
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all ${
                    isActive
                      ? "scale-110 border-accent bg-accent text-white shadow-lg"
                      : "border-border bg-white/70 text-graphite hover:border-ink/30"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* active skills */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mono-label text-accent">{active}</div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {skills[active].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/15 bg-white/60 px-4 py-2.5 text-[15px] text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <Reveal delay={0.1}>
              <div className="mt-12 border-t border-border pt-8">
                <div className="mono-label mb-4 text-graphite">Certifications</div>
                <div className="flex flex-wrap gap-2">
                  {certs.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-white/50 px-3 py-1.5 text-[13px] text-graphite"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
