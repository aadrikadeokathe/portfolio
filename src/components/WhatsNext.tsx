import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import { whatsNext } from "@/lib/content";

export default function WhatsNext() {
  return (
    <section id="next" className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index="09" title="What's next" />

        <Reveal>
          <h2 className="mt-8 max-w-[16ch] font-serif text-[clamp(40px,8vw,110px)] leading-[0.86] tracking-[-0.04em]">
            What&apos;s next?
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-8 max-w-[46ch] text-[clamp(18px,2.2vw,24px)] leading-snug text-graphite">
            I&apos;m looking for opportunities where I can work across:
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {whatsNext.roles.map((r, i) => (
            <Reveal key={r} delay={i * 0.05}>
              <div
                data-cursor="→"
                className="group flex items-center justify-between rounded-2xl border border-border bg-white/50 px-7 py-6 transition-all hover:-translate-y-1 hover:border-ink/25 hover:bg-white"
              >
                <span className="font-serif text-[clamp(22px,3vw,34px)] tracking-tight">{r}</span>
                <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 font-serif text-[clamp(20px,2.6vw,30px)] italic leading-snug tracking-tight">
            {whatsNext.blurb}
          </p>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.16em] text-graphite">
            {whatsNext.timeline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
