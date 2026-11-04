import Image from "next/image";
import RichText from "./RichText";
import type { CaseStudyDetail } from "@/lib/caseStudies";

export default function ProjectOverview({ title, data }: { title: string; data: CaseStudyDetail["overview"] }) {
  return (
    <section aria-labelledby="overview-title" className="text-center">
      <p className="text-sm text-[#051012] dark:text-white">Case study Details</p>
      <h1
        id="overview-title"
        className="mt-3 text-4xl leading-[1.2] text-[#051012] lg:text-[48px] dark:text-white"
      >
        <span className="sr-only">{title}: </span>
        <span className="font-light">Project</span> <span className="font-normal">Overview</span>
      </h1>

      <p className="mx-auto mt-10 max-w-[780px] text-2xl leading-[1.4] text-[#051012] sm:text-3xl lg:mt-12 lg:text-[36px] dark:text-white">
        <RichText segs={data.headline} />
      </p>

      <Image
        src={data.hero.src}
        alt={data.hero.alt}
        width={data.hero.width}
        height={data.hero.height}
        priority
        sizes="(min-width: 1024px) 1000px, 100vw"
        className="mx-auto mt-10 h-auto w-full max-w-[1000px] lg:mt-12"
      />

      <div className="mx-auto mt-16 max-w-[720px] space-y-8 leading-6 text-[#3C3C3C] lg:mt-[100px] dark:text-[#B9B9B9]">
        {data.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
