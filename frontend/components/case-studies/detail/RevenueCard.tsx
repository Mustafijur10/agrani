import { useId } from "react";
import Link from "next/link";
import type { CaseStudyDetail } from "@/lib/caseStudies";

type Card = CaseStudyDetail["insights"]["card"];

const W = 250;
const H = 130;
const PAD = 2; // keeps the stroke from being clipped

/** Smooth line through the points (Catmull-Rom → cubic Bézier). */
function smooth(pts: [number, number][]) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(2)} ${c1[1].toFixed(2)} ${c2[0].toFixed(2)} ${c2[1].toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return d;
}

export default function RevenueCard({ card }: { card: Card }) {
  const id = useId().replace(/:/g, "");
  const max = Math.max(...card.series);
  const min = Math.min(...card.series);
  const span = max - min || 1;
  const pts: [number, number][] = card.series.map((v, i) => [
    (i / (card.series.length - 1)) * W,
    H - PAD - ((v - min) / span) * (H - PAD * 2),
  ]);
  const line = smooth(pts);
  const area = `${line}L${W} ${H}L0 ${H}Z`;

  return (
    <div className="w-full max-w-[400px] rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:bg-[#1f2121]">
      <p className="text-base text-[#051012] dark:text-white">{card.label}</p>
      <p className="mt-1 text-3xl font-normal leading-9 text-[#051012] dark:text-white">{card.amount}</p>

      <p className="mt-5 text-sm text-[#051012] dark:text-white">
        <span className="text-[#16A34A]">{card.change}</span> {card.period}
      </p>
      <Link
        href={card.reportHref}
        className="mt-5 inline-block text-sm text-[#F05827] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05827]"
      >
        {card.reportLabel}
      </Link>

      <svg
        role="img"
        aria-label={`${card.label} trend chart, rising`}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="mt-2 h-[130px] w-full overflow-visible"
      >
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22C55E" stopOpacity="0.28" />
            <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${id}-fill)`} />
        <path
          d={line}
          fill="none"
          stroke="#16B364"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
