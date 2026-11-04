import { BellRing, CalendarCheck, User } from "lucide-react";
import type { CaseStudyDetail, IconKey } from "@/lib/caseStudies";

const icons = { user: User, calendar: CalendarCheck, bell: BellRing } as const;

function Icon({ k, onAccent }: { k: IconKey; onAccent: boolean }) {
  const I = icons[k];
  return (
    <span
      aria-hidden
      className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${
        onAccent ? "bg-white text-[#F05827]" : "bg-[#F05827] text-white"
      }`}
    >
      <I size={24} />
    </span>
  );
}

/**
 * Connector line between cards (xl+ only). Fades in from the left and ends solid orange at the next card.
 * Geometry matches the 1240px frame: cards are 610 × 530, column gap 20, row gap 96.
 */
function Connector({ id, className, style }: { id: string; className?: string; style: React.CSSProperties }) {
  const W = 190;
  const H = 375;
  const r = 64;
  return (
    <svg
      aria-hidden
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      className={`pointer-events-none absolute z-0 hidden xl:block ${className ?? ""}`}
      style={style}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F05827" stopOpacity="0" />
          <stop offset="0.45" stopColor="#F05827" stopOpacity="0.25" />
          <stop offset="1" stopColor="#F05827" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d={`M0 1.5H${W - r - 1.5}A${r} ${r} 0 0 1 ${W - 1.5} ${r + 1.5}V${H}`}
        stroke={`url(#${id})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProblemSolutions({ data }: { data: CaseStudyDetail["problemSolutions"] }) {
  const card = "relative z-10 flex min-h-[420px] flex-col justify-between rounded-[32px] p-8 xl:h-[530px]";
  const light = "bg-white text-[#051012] dark:bg-[#1f2121] dark:text-white";

  return (
    <section aria-labelledby="ps-title">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-16">
        <h2 id="ps-title" className="text-4xl font-normal leading-[1.2] text-[#051012] lg:text-[56px] dark:text-white">
          Problem &amp;
          <br />
          Solutions
        </h2>
        <div className="space-y-6 leading-6 text-[#3C3C3C] lg:pt-2 dark:text-[#B9B9B9]">
          {data.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="relative mt-12 grid gap-4 lg:mt-[100px] lg:grid-cols-2 lg:gap-x-5 lg:gap-y-24">
        {/* Problem */}
        <article className={`${card} bg-[#F05827] text-white lg:col-start-1 lg:row-start-1`}>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-normal leading-8">{data.problem.title}</h3>
            <Icon k={data.problem.icon} onAccent />
          </div>
          <div className="mt-10 space-y-5 leading-6">
            {data.problem.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        {/* Solutions */}
        {data.solutions.map((s, i) => (
          <article
            key={s.title}
            className={`${card} ${light} ${
              i % 2 === 0 ? "lg:col-start-2 lg:row-start-2" : "lg:col-start-1 lg:row-start-3"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-normal leading-8">{s.title}</h3>
              <Icon k={s.icon} onAccent={false} />
            </div>
            <div className="mt-10">
              <p className="max-w-[420px] text-2xl leading-8">{s.heading}</p>
              <p className="mt-6 max-w-[420px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{s.text}</p>
            </div>
          </article>
        ))}

        {/* connectors: problem → solution 1 (left→right), solution 1 → solution 2 (right→left) */}
        <Connector id="cs-conn-a" style={{ left: 770, top: 251 }} />
        <Connector id="cs-conn-b" className="-scale-x-100" style={{ left: 284, top: 877 }} />
      </div>
    </section>
  );
}
