import Image from "next/image";
import { Pill } from "../ui";
import { sectionCopy } from "./careerData";

export default function CareerHero() {
  return (
    <section aria-labelledby="career-title" className="relative overflow-x-clip pb-16 lg:pb-24">
      {/* soft decorative glows (purely visual) */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-0 top-[364px] hidden h-[100px] w-[158px] rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-[520px] h-[420px] w-[360px] rounded-full bg-[#F05827]/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 xl:px-0">
        <div className="mx-auto max-w-[840px] text-center">
          <Pill>Career</Pill>
          <h1
            id="career-title"
            className="mx-auto mt-6 max-w-[620px] text-4xl font-normal leading-[1.2] text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white"
          >
            {sectionCopy.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[820px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">
            {sectionCopy.hero.description}
          </p>
        </div>

        {/* Photo: 1240 × 576, radius 32 */}
        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[32px] sm:aspect-[2/1] lg:mt-[100px] lg:aspect-[1240/576]">
          <Image
            src="/career/hero.jpg"
            alt="Smiling Agrani team member working on a laptop in a bright office"
            fill
            priority
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
