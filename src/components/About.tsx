import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative border-t border-border bg-ivory py-[clamp(80px,12vh,150px)] text-ink">
      <div className="shell">
        <ChapterLabel index="08" title="Who I am" />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(44px,8vw,110px)] leading-[0.82] tracking-[-0.04em]">
                About
                <span className="italic text-accent"> me</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 rounded-2xl border border-border bg-white/50 p-7">
                <div className="mono-label mb-4 text-graphite">Currently</div>
                <ul className="space-y-3">
                  {about.currently.map((c) => (
                    <li key={c.text} className="flex items-center gap-3 text-[15px] text-ink">
                      <span className="text-[18px]">{c.icon}</span>
                      {c.text}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="max-w-[28ch] font-serif text-[clamp(24px,3.2vw,40px)] leading-[1.2] tracking-tight">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-10 space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="max-w-[62ch] text-[17px] leading-relaxed text-graphite">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
