import Reveal from "./Reveal";

export default function ChapterLabel({
  index,
  title,
  align = "left",
}: {
  index: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[13px] tracking-[0.14em] text-accent">{index}</span>
        <span className="h-px w-10 bg-border" />
        <span className="mono-label text-graphite">{title}</span>
      </div>
    </Reveal>
  );
}
