import type { Metadata } from "next";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import Pagination from "@/components/blog/Pagination";
import Contact from "@/components/Contact";
import { Pill } from "@/components/ui";
import { CASE_STUDIES_PAGE_SIZE, caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Agrani Technologies & Services Limited",
  description: "Real-world projects delivered by the Agrani team: the problems, the solutions and the results.",
};

// Design frame: 1440px wide with 100px side margins → 1240px content width.
const wrap = "mx-auto w-full max-w-[1240px] px-5 xl:px-0";
export const instant = false;
export default async function CaseStudiesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const sp = await searchParams;
  const totalPages = Math.max(1, Math.ceil(caseStudies.length / CASE_STUDIES_PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(sp.page) || 1), totalPages);
  const visible = caseStudies.slice((page - 1) * CASE_STUDIES_PAGE_SIZE, page * CASE_STUDIES_PAGE_SIZE);
  const hrefFor = (n: number) => `/case-studies${n > 1 ? `?page=${n}` : ""}`;

  return (
    <>
      <section aria-labelledby="cs-title" className="relative overflow-x-clip pb-20">
        {/* soft decorative glows (purely visual) */}
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-[330px] hidden h-[100px] w-[156px] rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[1100px] h-[420px] w-[520px] -rotate-[30deg] rounded-full bg-[#F05827]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-[1300px] h-[420px] w-[420px] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${wrap} relative`}>
          <header className="mx-auto max-w-[840px] text-center">
            <Pill>Case Studies</Pill>
            <h1 id="cs-title" className="mt-6 text-4xl font-normal leading-[1.2] text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
              Real-World Solutions
            </h1>
            {/* TODO: placeholder copy from the Blog page in the Figma */}
            <p className="mx-auto mt-6 max-w-[640px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">
              Stories &amp; Insights That Sparks Ideas: From tech updates to business tips, explore our latest blogs that are sure to spark new ideas and fuel your growth.
            </p>
          </header>

          {visible.length ? (
            <div className="mt-14 grid gap-x-4 gap-y-14 md:grid-cols-2 lg:mt-[150px] lg:gap-y-[76px]">
              {visible.map((s, i) => (
                <CaseStudyCard key={s.slug} study={s} priority={i < 2} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-[#3C3C3C] dark:text-[#B9B9B9]">No case studies yet. Check back soon.</p>
          )}

          {totalPages > 1 && <Pagination page={page} totalPages={totalPages} hrefFor={hrefFor} />}
        </div>
      </section>
      <Contact />
    </>
  );
}
