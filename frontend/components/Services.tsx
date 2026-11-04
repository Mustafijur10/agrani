"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pill, container } from "./ui";

const services = [
  { title: "Software Development", icon: "/icons/software.svg", text: "We build custom web and mobile applications, ERP systems, e-commerce platforms, and more, tailored to your specific business needs." },
  { title: "IT Consultancy", icon: "/icons/consultancy.svg", text: "We help organizations plan smarter technology strategies, navigate digital transformation, and optimize existing systems for better performance." },
  { title: "System Integration", icon: "/icons/integration.svg", text: "We connect your existing platforms and infrastructure into a unified, seamless ecosystem, reducing friction and improving operational efficiency." },
  { title: "Cloud & Infrastructure", icon: "/icons/cloud.svg", text: "We design, migrate, and manage secure cloud environments that scale with your business and keep your systems reliable." },
];

export default function Services() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

  return (
    <section id="services" className="relative py-16 dark:bg-[#161818]">
      <div className={container}>
        <Pill>Our Product and Services</Pill>
        <div className="mt-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl text-[#051012] sm:text-5xl dark:text-white">Committed to Empower Your Vision</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#051012]"><ChevronLeft /></button>
            <button onClick={() => scroll(1)} aria-label="Next" className="grid h-14 w-14 place-items-center rounded-full bg-[#F05827] text-white"><ChevronRight /></button>
          </div>
        </div>
      </div>

      <ul ref={track} className="mx-auto mt-10 flex max-w-[1440px] snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:px-0">
        {services.map((s) => (
          <li key={s.title} className="flex min-h-[390px] w-[85%] shrink-0 snap-start flex-col justify-between rounded-[32px] bg-white/80 p-7 shadow-sm sm:w-[400px] dark:bg-white/5">
            <div>
              <span className="grid h-16 w-16 place-items-center rounded-full bg-[#FFE4DB]">
                <Image src={s.icon} alt="" width={32} height={32} />
              </span>
              <h3 className="mt-6 max-w-[10ch] text-3xl leading-tight text-[#2A0F3F] dark:text-white">{s.title}</h3>
            </div>
            <p className="leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
