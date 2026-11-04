import type { Seg } from "@/lib/caseStudies";

/** Renders bold / italic segments. `strong` lets headings use a lighter "bold" (e.g. font-normal over font-light). */
export default function RichText({ segs, strong = "font-semibold" }: { segs: Seg[]; strong?: string }) {
  return (
    <>
      {segs.map((s, i) => {
        const cls = [s.b ? strong : "", s.i ? "italic" : ""].filter(Boolean).join(" ");
        return cls ? (
          <span key={i} className={cls}>
            {s.t}
          </span>
        ) : (
          <span key={i}>{s.t}</span>
        );
      })}
    </>
  );
}
