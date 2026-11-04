import type { Metadata } from "next";
import ReviewsGrid from "@/components/customer-experience/ReviewsGrid";
import { hero } from "@/components/customer-experience/customerData";
import Contact from "@/components/Contact";
import { Pill } from "@/components/ui";

export const metadata: Metadata = {
  title: "Customer Experience | Agrani Technologies & Services Limited",
  description: "Read what clients say about working with Agrani Technologies & Services Limited.",
};

// Design frame: 1440px wide with 100px side margins → 1240px content width.
const wrap = "mx-auto w-full max-w-[1240px] px-5 xl:px-0";

export default function CustomerExperiencePage() {
  return (
    <>
      <section aria-labelledby="cx-title" className="relative overflow-x-clip pb-16 lg:pb-24">
        {/* soft decorative glows (purely visual) */}
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-[360px] hidden h-[100px] w-[156px] rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-[560px] h-[420px] w-[360px] rounded-full bg-[#F05827]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[820px] h-[360px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-[1200px] h-[420px] w-[360px] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${wrap} relative`}>
          <header className="mx-auto max-w-[840px] text-center">
            <Pill>{hero.pill}</Pill>
            <h1
              id="cx-title"
              className="mt-6 text-4xl font-normal leading-[1.2] text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white"
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{hero.description}</p>
          </header>

          <div className="mt-14 lg:mt-[150px]">
            <ReviewsGrid />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
