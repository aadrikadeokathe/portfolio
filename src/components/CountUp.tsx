"use client";

import { useEffect, useRef, useState } from "react";

// Counts up any numeric portion of a string when it enters the viewport,
// preserving prefixes/suffixes (e.g. "29.7%", "₹82–394 Cr", "8,000+").
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  // find the first number in the string
  const match = value.match(/[\d,.]+/);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[0].replace(/,/g, ""));
    const decimals = (match[0].split(".")[1] || "").length;
    const hasComma = match[0].includes(",");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1300;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              const cur = target * eased;
              let num = decimals ? cur.toFixed(decimals) : Math.round(cur).toString();
              if (hasComma) num = Number(num).toLocaleString("en-US");
              setDisplay(value.replace(match[0], num));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
