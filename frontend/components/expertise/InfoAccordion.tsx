"use client";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import IconBadge from "./IconBadge";
import { infraIntro, infraItems } from "./expertiseData";

export default function InfoAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      aria-labelledby="infra-title"
      className="grid items-start gap-10 lg:grid-cols-[minmax(0,495px)_minmax(0,685px)] lg:justify-between"
    >
      <div>
        <h2 id="infra-title" className="text-4xl font-normal leading-[1.2] text-[#051012] lg:text-[48px] dark:text-white">
          {infraIntro.title}
        </h2>
        <p className="mt-6 max-w-[495px] text-sm leading-5 text-[#3C3C3C] dark:text-[#B9B9B9]">
          {infraIntro.description}
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {infraItems.map((it, i) => {
          const isOpen = open === i;
          return (
            <li
              key={it.id}
              className={`rounded-3xl border transition-colors ${
                isOpen
                  ? "border-transparent bg-[#051012] text-white dark:bg-white/15"
                  : "border-black/10 bg-white text-[#051012] dark:border-white/10 dark:bg-[#1f2121] dark:text-white"
              }`}
            >
              <h3>
                <button
                  id={`infra-btn-${it.id}`}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`infra-panel-${it.id}`}
                  className="flex w-full items-center gap-4 rounded-3xl p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05827]"
                >
                  <IconBadge src={it.icon} onDark={isOpen} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl leading-7">{it.title}</span>
                    <span className={`mt-1 block text-xs ${isOpen ? "text-white/60" : "text-[#5A5A5A] dark:text-[#B9B9B9]"}`}>
                      {it.subtitle}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>

              <div
                id={`infra-panel-${it.id}`}
                role="region"
                aria-labelledby={`infra-btn-${it.id}`}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-4 px-6 pb-6 pt-1">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                        <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                          <Check size={14} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
