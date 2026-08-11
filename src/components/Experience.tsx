"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink"
    >
      <div className="shell">
        <ChapterLabel index="05" title="Where I've worked" />
        <Reveal>
          <h2 className="mt-6 font-serif text-[clamp(34px,6vw,72px)] leading-none tracking-[-0.03em]">
            An operating timeline
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-6 sm:pl-8">
          {/* animated progress line */}
          <motion.span
            className="absolute left-0 top-0 w-[2px] origin-top bg-accent/70"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          {experience.map((xp, i) => (
            <Reveal key={xp.org} delay={i * 0.05}>
              <div className="group relative border-b border-border pb-10 pt-2 last:border-0">
                {/* node */}
                <span className="absolute -left-[26px] top-4 h-3 w-3 rounded-full border-2 border-accent bg-ivory transition-colors group-hover:bg-accent sm:-left-[34px]" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.7fr_2fr]">
                  <div>
                    <div className="font-serif text-[clamp(24px,3vw,34px)] leading-none tracking-tight">
                      {xp.year}
                    </div>
                    <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-graphite">
                      {xp.when}
                    </div>
                    <div className="text-[12px] text-graphite/70">{xp.loc}</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-[clamp(22px,2.6vw,30px)] leading-tight tracking-tight">
                      {xp.role}
                    </h3>
                    <div className="mt-1 text-[14px] font-semibold text-accent">{xp.org}</div>
                    <ul className="mt-4 space-y-2">
                      {xp.points.map((p) => (
                        <li key={p} className="relative pl-5 text-[15px] leading-relaxed text-graphite">
                          <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-ink/40" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
