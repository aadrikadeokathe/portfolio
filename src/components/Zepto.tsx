import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import CountUp from "./CountUp";
import TiltImage from "./TiltImage";
import { zepto } from "@/lib/content";

export default function Zepto() {
  return (
    <section id="analyze" className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index={zepto.chapter} title={zepto.chapterLabel} />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(40px,7vw,86px)] leading-[0.9] tracking-[-0.03em]">
                Zepto Review
                <br />
                Intelligence
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-[42ch] font-serif text-[clamp(20px,2.4vw,28px)] leading-[1.25] tracking-tight text-graphite">
                {zepto.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
                {zepto.stats?.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-[clamp(30px,4.5vw,52px)] leading-none tracking-tight text-accent">
                      <CountUp value={s.value} />
                    </div>
                    <div className="mt-2 max-w-[16ch] text-[13px] leading-tight text-graphite">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-10 max-w-[56ch] text-[16px] leading-relaxed text-graphite">
                {zepto.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {zepto.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/60 px-3 py-1.5 text-[12px] text-graphite"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                {zepto.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition-all ${
                      l.primary
                        ? "bg-ink text-ivory hover:bg-accent"
                        : "border border-ink/20 text-ink hover:border-ink"
                    }`}
                  >
                    {l.label}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ animation: "floaty 7s ease-in-out infinite" }}>
              <TiltImage src={zepto.image} alt="Zepto Review Intelligence dashboard" accent />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
