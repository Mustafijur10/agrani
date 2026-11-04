import Image from "next/image";
import type { CaseStudyDetail } from "@/lib/caseStudies";

export default function ExecutionSection({ data }: { data: CaseStudyDetail["execution"] }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[520px_1fr] lg:items-stretch">
      {/* tall image stretches to the height of the right column */}
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-[#EDE4D0]">
        <Image
          src={data.tall.src}
          alt={data.tall.alt}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <div className="relative aspect-[2/1] overflow-hidden rounded-[32px] bg-[#EDE4D0]">
          <Image
            src={data.wide.src}
            alt={data.wide.alt}
            fill
            sizes="(min-width: 1024px) 680px, 100vw"
            className="object-cover"
          />
        </div>
        <h2 className="mt-10 text-xl font-medium text-[#051012] dark:text-white">{data.heading}</h2>
        <p className="mt-4 max-w-[600px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{data.text}</p>
      </div>
    </section>
  );
}
