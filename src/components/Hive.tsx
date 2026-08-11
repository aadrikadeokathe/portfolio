"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import CountUp from "./CountUp";
import { hive } from "@/lib/content";

const HiveNetwork = dynamic(() => import("./three/HiveNetwork"), { ssr: false });

export default function Hive() {
  return (
    <section id="build" className="relative bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index={hive.chapter} title={hive.chapterLabel} />

        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* left: type + meta */}
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(64px,13vw,180px)] leading-[0.82] tracking-[-0.04em]">
                Hive
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-[30ch] font-serif text-[clamp(22px,2.6vw,32px)] leading-[1.2] tracking-tight">
                {hive.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mono-label mt-6 text-accent">{hive.status}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-graphite">
                {hive.description}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {hive.stats?.map((s) => (
                  <div key={s.label} className="border-l-2 border-accent pl-3">
                    <div className="font-serif text-[clamp(20px,2.4vw,30px)] leading-none">
                      <CountUp value={s.value} />
                    </div>
                    <div className="mt-2 text-[12px] leading-tight text-graphite">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {hive.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/60 px-3 py-1.5 text-[12px] text-graphite"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right: 3D network + mockup */}
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-0">
                <HiveNetwork />
              </div>
            </div>
            <Reveal delay={0.1}>
              <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/70">
                Creators ↔ Projects ↔ Brands ↔ Payments — the Hive loop
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
