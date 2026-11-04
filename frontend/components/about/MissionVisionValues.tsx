"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Check, Star, Lightbulb, Users, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { container } from "../ui";

const tabs = [
  { id: "mission", label: "Our Mission" },
  { id: "vision", label: "Our Vision" },
  { id: "values", label: "Our Values" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const heading = "Coding for a Better Future: Empowering Ideas, Inspiring Innovation";

// TODO: confirm final mission wording with the client; the design only showed Vision and Values.
const checklists: Record<"mission" | "vision", { image: string; alt: string; items: string[] }> = {
  mission: {
    image: "/about/team-coding.jpg",
    alt: "Two developers working at their desks",
    items: [
      "Be a transformative force in building a smarter, seamlessly connected, and digitally empowered Bangladesh.",
    ],
  },
  vision: {
    image: "/about/team-coding.jpg",
    alt: "Two developers working at their desks",
    items: [
      "To deliver high-quality, reliable, and cost-effective IT services tailored to local and national needs.",
      "To drive digital transformation across sectors through innovative and user-focused solutions.",
      "To build long-term partnerships through integrity, transparency, and customer satisfaction.",
      "To foster continuous learning and technical excellence within our team.",
      "To contribute to national development by supporting digital governance and technology access.",
    ],
  },
};

const values = [
  { icon: Lightbulb, title: "Innovation", text: "We embrace change and strive to introduce next-generation technologies." },
  { icon: Users, title: "Teamwork", text: "We collaborate internally and externally to achieve common goals." },
  { icon: ShieldCheck, title: "Integrity", text: "We act with honesty and uphold the highest standards of professionalism." },
  { icon: HeartHandshake, title: "Customer Centricity", text: "We listen, understand, and deliver solutions that meet real-world challenges." },
  { icon: Award, title: "Excellence", text: "We pursue quality in everything we do—from code to customer service." },
];

export default function MissionVisionValues() {
  const [active, setActive] = useState<TabId>("vision");
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Arrow-key navigation per the WAI-ARIA tabs pattern
  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = tabs[(index + dir + tabs.length) % tabs.length];
    setActive(next.id);
    refs.current[next.id]?.focus();
  }

  return (
    <section aria-labelledby="mvv-title" className="bg-white py-16 lg:py-24 dark:bg-transparent">
      <div className={container}>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 id="mvv-title" className="text-4xl leading-tight text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
            Driven by purpose, guided by Mission, vision, defined by values
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
            What we set out to do, where we&apos;re headed, and the principles we work by every day.
          </p>
        </div>

        <div role="tablist" aria-label="Mission, vision and values" className="mt-16 flex gap-10 overflow-x-auto border-b border-black/15 sm:gap-24 dark:border-white/20">
          {tabs.map((t, i) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                ref={(el) => { refs.current[t.id] = el; }}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={on}
                aria-controls={`panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`-mb-px whitespace-nowrap border-b-2 pb-3 text-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F05827] ${
                  on ? "border-[#F05827] text-[#F05827]" : "border-transparent text-[#6B6B6B] hover:text-[#F05827] dark:text-[#B9B9B9]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {tabs.map((t) => (
          <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== t.id} className="pt-10 lg:pt-14">
            {t.id === "values" ? <ValuesPanel /> : <ChecklistPanel data={checklists[t.id]} />}
          </div>
        ))}
      </div>
    </section>
  );
}

function ChecklistPanel({ data }: { data: (typeof checklists)["vision"] }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-24">
      <div className="relative aspect-[588/430] overflow-hidden rounded-[32px] bg-[#F8F8F8]">
        <Image src={data.image} alt={data.alt} fill sizes="(min-width: 1024px) 588px, 100vw" className="object-cover" />
      </div>
      <div>
        <h3 className="text-3xl leading-snug text-[#051012] dark:text-white">{heading}</h3>
        <ul className="mt-8 space-y-5">
          {data.items.map((t) => (
            <li key={t} className="flex gap-4 text-[#3C3C3C] dark:text-[#B9B9B9]">
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded bg-[#F05827]/15 text-[#F05827]" aria-hidden>
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="leading-7">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ValuesPanel() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div className="flex flex-col justify-between gap-10">
        <div>
          <h3 className="text-3xl leading-snug text-[#051012] dark:text-white">{heading}</h3>
          <p className="mt-4 max-w-[400px] text-sm leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">
            Be a transformative force in building a smarter, seamlessly connected, and digitally empowered Bangladesh.
          </p>
        </div>

        <div className="max-w-[480px] rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:bg-[#1f2121]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3" aria-hidden>
              {["#F05827", "#30140A", "#F4A84F"].map((c) => (
                <span key={c} className="h-9 w-9 rounded-full border-2 border-white dark:border-[#1f2121]" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} className="fill-[#F05827] text-[#F05827]" />)}
              </div>
              <p className="text-xs text-[#3C3C3C] dark:text-[#B9B9B9]">Trusted across Bangladesh</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#051012] dark:text-white">
            We built Agrani with a simple goal: to help organizations spend less time on technology so they can focus on
            serving their customers and citizens.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-4">
            {[
              { n: "10+", l: "Years in Operation" },
              { n: "100+", l: "Professionals" },
            ].map((s) => (
              <div key={s.l}>
                <dd className="text-4xl text-[#051012] dark:text-white">{s.n}</dd>
                <dt className="mt-1 text-sm text-[#051012] dark:text-white">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F05827]/15 text-[#F05827]" aria-hidden>
              <Icon size={22} />
            </span>
            <div className="mt-4 border-t border-dashed border-black/25 pt-4 dark:border-white/25">
              <h4 className="text-[#051012] dark:text-white">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
