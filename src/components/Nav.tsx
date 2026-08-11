"use client";

import { useEffect, useState } from "react";
import { identity } from "@/lib/content";

const links = [
  { href: "#build", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#about", label: "About" },
  { href: "#next", label: "Next" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [clock, setClock] = useState("—");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.7);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const tick = () => {
      try {
        setClock(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date()) + " IST"
        );
      } catch {
        setClock("IST");
      }
    };
    tick();
    const iv = setInterval(tick, 15000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(iv);
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[70] h-[2px] bg-accent"
        style={{ width: `${progress}%` }}
      />
      <nav
        className={`fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-[var(--gutter)] transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-ivory/70 py-3 text-ink backdrop-blur-xl"
            : "border-b border-transparent py-5 text-ivory"
        }`}
      >
        <a href="#top" data-cursor="TOP" className="font-serif text-lg tracking-tight">
          {identity.first}
          <span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-7">
          <div className="hidden gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="VIEW"
                className={`text-[13px] font-medium transition-opacity hover:opacity-100 ${
                  scrolled ? "text-graphite" : "text-ivory/70"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div
            className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${
              scrolled ? "text-graphite" : "text-ivory/60"
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animation: "pulse 2.4s infinite" }}
            />
            <span className="hidden sm:inline">Indore</span>
            <span className={scrolled ? "text-ink" : "text-ivory/85"}>{clock}</span>
          </div>
        </div>
      </nav>
    </>
  );
}
