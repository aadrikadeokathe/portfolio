import { marqueeItems } from "@/lib/content";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-wrap overflow-hidden border-y border-border bg-ivory py-6">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-7 font-serif text-[clamp(20px,3vw,34px)] tracking-tight ${
                i % 3 === 0 ? "text-ink" : "text-graphite/60"
              }`}
            >
              {item}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
