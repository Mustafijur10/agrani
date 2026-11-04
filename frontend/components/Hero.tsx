import Image from "next/image";
import { Star, Search } from "lucide-react";
import { GradientButton, container } from "./ui";

export default function Hero() {
  return (
    <section className={`${container} pb-10`}>
      <div className="relative min-h-[560px] md:min-h-[736px]">
        {/* Photo (masked in globals.css to leave room for the pill) */}
        <div className="hero-notch absolute inset-0 overflow-hidden rounded-[40px] bg-[#161818]">
          <Image src="/hero.jpg" alt="Developer working in a bright office" fill priority sizes="1440px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-[#051012]/40 to-transparent" />
        </div>

        {/* Floating tabs pill sitting inside the cut-out */}
        <ul className="absolute right-0 top-0 hidden h-16 w-[398px] items-center justify-center gap-12 rounded-[32px] bg-white text-[17px] text-[#3C3C3C] md:flex dark:bg-[#1f2121] dark:text-white">
          {["Define", "Design", "Development"].map((t) => <li key={t}>+{t}</li>)}
        </ul>

        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-8 p-6 text-white md:flex-row md:items-end md:pb-5">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm">
              <Star size={20} className="fill-[#F05827] text-[#F05827]" /> 4.9 Reviews
            </p>
            <h1 className="max-w-[660px] text-4xl font-medium leading-[1.2] sm:text-5xl lg:text-[64px]">
              Innovative IT Solutions for a Smarter Bangladesh
            </h1>
          </div>
          <div className="md:w-[320px] md:pr-0">
            <p className="mb-5 text-lg leading-8 text-white/90">
              Branding<br />Mobile &amp; Web App Agency<br />for Startups and Giants
            </p>
            <div className="flex items-center">
              <GradientButton href="/services" className="h-16 flex-1 border border-white/30 text-lg">
                Explore Our Services
              </GradientButton>
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/30 bg-[#30140A]" aria-hidden>
                <Search size={22} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
