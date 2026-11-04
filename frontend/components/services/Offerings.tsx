"use client";
import { useRef, useState } from "react";
import { CircleCheck } from "lucide-react";
import { GradientButton, container } from "../ui";
import { services, products, type Offering } from "./offerings";

const tabs = [
  { id: "services", label: "Services", data: services },
  { id: "products", label: "Products", data: products },
] as const;
type TabId = (typeof tabs)[number]["id"];

export default function Offerings() {
  const [active, setActive] = useState<TabId>("services");
  const [open, setOpen] = useState(0);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  function select(id: TabId) {
    setActive(id);
    setOpen(0); // first row opens by default, as in the design
  }
  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = tabs[(i + dir + tabs.length) % tabs.length];
    select(next.id);
    refs.current[next.id]?.focus();
  }

  return (
    <section className={`${container} pb-20`}>
      <div role="tablist" aria-label="Services and products" className="flex gap-12 border-b border-black/15 dark:border-white/20">
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
              onClick={() => select(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`-mb-px border-b-2 pb-3 text-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F05827] ${
                on ? "border-[#F05827] text-[#F05827]" : "border-transparent text-[#6B6B6B] hover:text-[#F05827] dark:text-[#B9B9B9]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 max-w-[1240px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
        With over 12 years of experience in the ICT industry, Agrani Technologies is backed by a team of highly skilled
        and experienced professionals’ resources dedicated to delivering the following services to effectively meet
        customers&apos; diverse requirements:
      </p>

      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== t.id} className="mt-10 space-y-2">
          {t.data.map((o, i) => (
            <Row key={o.title} o={o} index={i} id={`${t.id}-${i}`} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      ))}
    </section>
  );
}

function Row({ o, index, id, isOpen, onToggle }: { o: Offering; index: number; id: string; isOpen: boolean; onToggle: () => void }) {
  const letter = String.fromCharCode(65 + index);
  const expandable = !!o.items?.length;
  const show = expandable && isOpen;

  const shell = `rounded-[40px] border transition-colors ${
    show
      ? "border-black/30 bg-[#F05827] text-white dark:border-white/30"
      : "border-black/10 bg-white text-[#051012] dark:border-white/15 dark:bg-[#1f2121] dark:text-white"
  }`;
  const head = (
    <>
      <span className="pt-2 text-sm sm:pt-3">{letter}</span>
      <h3 className="text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">{o.title}</h3>
    </>
  );
  const grid = "grid grid-cols-[32px_1fr] items-start gap-x-4 px-6 sm:grid-cols-[200px_1fr] sm:px-10";

  return (
    <div className={shell}>
      {expandable ? (
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`row-${id}`}
          className={`${grid} w-full rounded-[40px] py-12 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05827] ${show ? "pb-4" : ""}`}
        >
          {head}
        </button>
      ) : (
        <div className={`${grid} py-12`}>{head}</div>
      )}

      {expandable && (
        <div id={`row-${id}`} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden" inert={!isOpen}>
            <div className="grid grid-cols-[32px_1fr] gap-x-4 px-6 pb-10 sm:grid-cols-[200px_1fr] sm:px-10">
              <div className="col-start-2">
                <ul className="flex flex-wrap gap-x-5 gap-y-4 text-[15px]">
                  {o.items!.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <CircleCheck size={22} strokeWidth={1.5} aria-hidden className="shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <GradientButton href="/contact" className="mt-8 border border-white/70 !py-3">
                  Let’s Discuss Project
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
