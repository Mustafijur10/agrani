"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GradientButton, Pill } from "./ui";

const items = [
  { q: "Experienced & Professional", a: "A team of 100+ professionals with over a decade of experience delivering software for businesses across Bangladesh." },
  { q: "Trusted technology", a: "We build on proven, secure technology stacks that are maintained, documented, and ready to scale." },
  { q: "End-to-end solutions", a: "From first consultation to launch and ongoing support, one team handles every step." },
  { q: "Software development to cybersecurity", a: "Custom software, integration, cloud, and security services under one roof." },
];

export default function WhyChoose() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-5 py-20 text-center dark:bg-[#161818]">
      <Pill>Why Choose Agrani</Pill>
      <h2 className="mx-auto mt-6 max-w-[920px] text-3xl leading-snug text-[#051012] sm:text-5xl sm:leading-[1.5] dark:text-white">
        Delivering trusted solutions with quality, innovation, and customer-first service.
      </h2>

      <div className="mx-auto mt-10 max-w-[892px] text-left">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className="border-b border-black/20 py-5 first:pt-0 last:border-0 dark:border-white/20">
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between text-left text-xl text-[#051012] dark:text-white"
                >
                  {it.q}
                  <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </h3>
              <div id={`faq-${i}`} className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <p className="max-w-[600px] overflow-hidden text-[#3C3C3C] dark:text-[#B9B9B9]">{it.a}</p>
              </div>
            </div>
          );
        })}
      </div>
      <GradientButton href="/contact" className="mt-8">Contact Us</GradientButton>
    </section>
  );
}
