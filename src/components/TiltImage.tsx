"use client";

import Image from "next/image";
import { useRef } from "react";

// Floating mockup that tilts in 3D toward the cursor with a soft shadow + parallax glow.
export default function TiltImage({
  src,
  alt,
  accent = false,
}: {
  src: string;
  alt: string;
  accent?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current;
    const card = inner.current;
    if (!el || !card) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * 14;
    const ry = (px - 0.5) * 16;
    card.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    card.style.setProperty("--gx", `${px * 100}%`);
    card.style.setProperty("--gy", `${py * 100}%`);
  };
  const reset = () => {
    if (inner.current) inner.current.style.transform = "perspective(1100px) rotateX(0) rotateY(0)";
  };

  return (
    <div ref={wrap} onPointerMove={onMove} onPointerLeave={reset} className="[perspective:1100px]">
      <div
        ref={inner}
        data-cursor="VIEW"
        className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
          priority={accent}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(340px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.35), transparent 45%)",
          }}
        />
      </div>
    </div>
  );
}
