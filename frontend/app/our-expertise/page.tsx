import type { Metadata } from "next";
import TechnicalTeam from "@/components/expertise/TechnicalTeam";
import TechStack from "@/components/expertise/TechStack";
import InfoAccordion from "@/components/expertise/InfoAccordion";
import { hero } from "@/components/expertise/expertiseData";
import Contact from "@/components/Contact";
import { Pill } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Expertise | Agrani Technologies & Services Limited",
  description:
    "Meet Agrani's 100+ professionals and explore the languages, frameworks, databases, cloud and security technologies we work with.",
};

// Design frame: 1440px wide with 100px side margins → 1240px content width.
const wrap = "mx-auto w-full max-w-[1240px] px-5 xl:px-0";

export default function OurExpertisePage() {
  return (
    <>
      <div className="relative overflow-x-clip pb-16 lg:pb-24">
        {/* soft decorative glows (purely visual) */}
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-[360px] hidden h-[100px] w-[156px] rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-[800px] h-[420px] w-[360px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[1100px] h-[360px] w-[420px] rounded-full bg-[#F05827]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-20 top-[2000px] h-[600px] w-[700px] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${wrap} relative`}>
          <header className="mx-auto max-w-[840px] text-center">
            <Pill>{hero.pill}</Pill>
            <h1 className="mt-6 text-4xl font-normal leading-[1.2] text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{hero.description}</p>
          </header>

          <div className="mt-14 space-y-20 lg:mt-[150px] lg:space-y-[120px]">
            <TechnicalTeam />
            <TechStack />
            <InfoAccordion />
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
