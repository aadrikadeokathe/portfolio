import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import CountUp from "./CountUp";
import TiltImage from "./TiltImage";
import { signlang } from "@/lib/content";

export default function SignLanguage() {
  return (
    <section className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index={signlang.chapter} title={signlang.chapterLabel} />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(36px,6.4vw,76px)] leading-[0.92] tracking-[-0.03em]">
                Sign Language
                <br />
                Recognition
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-[40ch] font-serif text-[clamp(20px,2.4vw,28px)] leading-[1.25] tracking-tight text-graphite">
                {signlang.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
                {signlang.stats?.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-[clamp(28px,4vw,48px)] leading-none tracking-tight text-accent">
                      <CountUp value={s.value} />
                    </div>
                    <div className="mt-2 max-w-[16ch] text-[13px] leading-tight text-graphite">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* architecture pipeline */}
            <Reveal delay={0.14}>
              <div className="mt-10">
                <p className="mono-label mb-3 text-graphite">Architecture</p>
                <div className="flex flex-wrap items-center gap-2">
                  {signlang.arch?.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span
                        className={`rounded-lg border px-3 py-2 font-mono text-[12px] tracking-tight ${
                          i === (signlang.arch?.length || 0) - 1
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-border bg-white/60 text-ink"
                        }`}
                      >
                        {step}
                      </span>
                      {i < (signlang.arch?.length || 0) - 1 && (
                        <span className="text-graphite/50">↓</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {signlang.stack.map((s) => (
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

          <Reveal delay={0.1}>
            <div style={{ animation: "floaty 7.5s ease-in-out infinite" }}>
              <TiltImage src={signlang.image} alt="Sign language recognition system" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
