import Image from "next/image";
import type { CaseStudyDetail } from "@/lib/caseStudies";

export default function ClosingSection({ data }: { data: CaseStudyDetail["closing"] }) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1fr_520px]">
      <div>
        <h2 className="text-6xl font-light leading-none text-[#051012] sm:text-8xl lg:text-[128px] dark:text-white">
          {data.title}
        </h2>
        <p className="mt-6 text-3xl font-normal text-[#051012] lg:text-5xl dark:text-white">{data.subtitle}</p>
      </div>
      <div className="relative aspect-[520/620] overflow-hidden rounded-[32px] bg-[#EDE4D0]">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
