import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import CountUp from "./CountUp";
import { leadership } from "@/lib/content";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink"
    >
      <div className="shell">
        <ChapterLabel index="06" title="Where I've led" />
        <Reveal>
          <h2 className="mt-6 font-serif text-[clamp(34px,6vw,72px)] leading-none tracking-[-0.03em]">
            Off the clock, still building.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.role} delay={i * 0.06}>
              <div
                data-cursor="LED"
                className="group h-full rounded-2xl border border-border bg-white/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-serif text-[clamp(40px,6vw,64px)] leading-none tracking-tight text-accent">
                    <CountUp value={l.stat} />
                  </div>
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">
                    {l.year}
                  </span>
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-graphite">
                  {l.statLabel}
                </div>
                <h3 className="mt-6 font-serif text-[clamp(20px,2.4vw,26px)] leading-tight tracking-tight">
                  {l.role}
                </h3>
                <div className="mt-1 text-[13px] font-medium text-graphite">{l.org}</div>
                <p className="mt-4 text-[14px] leading-relaxed text-graphite/90">{l.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
