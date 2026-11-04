import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import ProjectOverview from "@/components/case-studies/detail/ProjectOverview";
import ProblemSolutions from "@/components/case-studies/detail/ProblemSolutions";
import ResearchStats from "@/components/case-studies/detail/ResearchStats";
import SatisfactionBar from "@/components/case-studies/detail/SatisfactionBar";
import ScreensGallery from "@/components/case-studies/detail/ScreensGallery";
import ExecutionSection from "@/components/case-studies/detail/ExecutionSection";
import InsightsSection from "@/components/case-studies/detail/InsightsSection";
import ClosingSection from "@/components/case-studies/detail/ClosingSection";
import { caseStudies, defaultDetail, getCaseStudy } from "@/lib/caseStudies";

type Props = { params: Promise<{ slug: string }> };

// Design frame: 1440px wide with 100px side margins → 1240px content width.
const wrap = "mx-auto w-full max-w-[1240px] px-5 xl:px-0";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: `${study.title} | Agrani Case Studies`,
    description: "Project overview, problem and solutions, research results and final design.",
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const d = study.detail ?? defaultDetail; // every study uses the Styli layout until it has its own content

  return (
    <>
      {/* Overview + Problem & Solutions (page background) */}
      <div className="relative overflow-x-clip pb-20 lg:pb-28">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-[170px] hidden h-[100px] w-[156px] rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[1150px] h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-[1300px] h-[420px] w-[420px] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${wrap} relative space-y-20 lg:space-y-0`}>
          <ProjectOverview title={study.title} data={d.overview} />
          <div className="lg:mt-[120px]">
            <ProblemSolutions data={d.problemSolutions} />
          </div>
        </div>
      </div>

      {/* Research (white band) */}
      <div className="bg-white py-16 lg:py-24 dark:bg-[#161818]">
        <div className={wrap}>
          <ResearchStats data={d.research} />
        </div>
      </div>

      {/* Satisfaction → gallery → execution → insights → thanks */}
      <div className="overflow-x-clip py-16 lg:py-24">
        <div className={`${wrap} space-y-16 lg:space-y-[100px]`}>
          <SatisfactionBar data={d.satisfaction} />
          <ScreensGallery images={d.gallery} />
          <ExecutionSection data={d.execution} />
          <InsightsSection data={d.insights} />
          <ClosingSection data={d.closing} />
        </div>
      </div>

      <Contact />
    </>
  );
}
