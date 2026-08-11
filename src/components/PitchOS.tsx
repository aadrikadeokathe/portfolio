import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import TiltImage from "./TiltImage";
import { pitchos } from "@/lib/content";

export default function PitchOS() {
  return (
    <section id="ship" className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index={pitchos.chapter} title={pitchos.chapterLabel} />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* floating slide stack */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[460px]">
              <div className="absolute -left-4 -top-4 h-full w-full rotate-[-5deg] rounded-2xl border border-border bg-white/50" />
              <div className="absolute -right-3 top-3 h-full w-full rotate-[4deg] rounded-2xl border border-border bg-white/40" />
              <div className="relative" style={{ animation: "floaty 8s ease-in-out infinite" }}>
                <TiltImage src={pitchos.image} alt="PitchOS deck analyzer" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(44px,7vw,86px)] leading-[0.9] tracking-[-0.03em]">
                PitchOS
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-[40ch] font-serif text-[clamp(20px,2.4vw,28px)] leading-[1.25] tracking-tight text-graphite">
                {pitchos.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mono-label mt-6 text-accent">{pitchos.status}</p>
            </Reveal>

            {/* product flow */}
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {pitchos.arch?.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-border bg-white/60 px-3 py-2 font-mono text-[12px] tracking-tight text-ink">
                      {step}
                    </span>
                    {i < (pitchos.arch?.length || 0) - 1 && <span className="text-accent">→</span>}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-8 max-w-[54ch] text-[16px] leading-relaxed text-graphite">
                {pitchos.description}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-8 border-l-2 border-accent pl-5 font-serif text-[clamp(22px,3vw,34px)] italic leading-[1.2] tracking-tight">
                “I needed a better pitch. So I built the tool I needed.”
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-2">
                {pitchos.stack.map((s) => (
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
        </div>
      </div>
    </section>
  );
}
