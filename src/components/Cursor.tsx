"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      rx = mx,
      ry = my,
      raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      const t = e.target as HTMLElement;
      const hot = t.closest("[data-cursor]");
      setLabel(hot ? hot.getAttribute("data-cursor") || "" : null);
    };
    const follow = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(follow);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(follow);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[95] h-[7px] w-[7px] rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[95] flex items-center justify-center rounded-full font-mono text-[9px] uppercase tracking-[0.18em] transition-[width,height,background,color] duration-200 ${
          label !== null
            ? "h-16 w-16 bg-accent/90 text-white"
            : "h-9 w-9 border border-white/60 text-transparent mix-blend-difference"
        }`}
      >
        {label}
      </div>
    </>
  );
}
