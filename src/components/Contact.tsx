"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";
import { identity } from "@/lib/content";

const ContactOrb = dynamic(() => import("./three/ContactOrb"), { ssr: false });

export default function Contact() {
  const socials = [
    { label: "Email", href: `mailto:${identity.email}` },
    { label: "LinkedIn", href: identity.linkedin },
    { label: "GitHub", href: identity.github },
    ...(identity.instagram ? [{ label: "Instagram", href: identity.instagram }] : []),
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-night py-[clamp(90px,16vh,180px)] text-ivory">
      {/* dark entry gradient from the light body */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ivory to-transparent" />

      <div className="shell relative z-10 flex flex-col items-center text-center">
        {/* orb */}
        <a
          href={`mailto:${identity.email}`}
          data-cursor="EMAIL"
          className="relative block h-[300px] w-[300px] sm:h-[380px] sm:w-[380px]"
          aria-label="Email Aadrika"
        >
          <ContactOrb />
        </a>

        <Reveal>
          <h2 className="-mt-6 font-serif text-[clamp(40px,9vw,120px)] leading-[0.9] tracking-[-0.04em]">
            Let&apos;s build
            <br />
            <span className="italic text-accent">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <a
            href={`mailto:${identity.email}`}
            data-cursor="COPY"
            className="mt-10 inline-block border-b-2 border-accent pb-1 font-serif text-[clamp(20px,3.5vw,36px)] tracking-tight transition-colors hover:text-accent"
          >
            {identity.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="rounded-full border border-ivory/20 bg-ivory/[0.04] px-6 py-3 text-[14px] font-semibold text-ivory backdrop-blur transition-all hover:-translate-y-1 hover:border-ivory hover:bg-ivory/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-10 font-mono text-[12px] uppercase tracking-[0.16em] text-ivory/50">
            {identity.based}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
