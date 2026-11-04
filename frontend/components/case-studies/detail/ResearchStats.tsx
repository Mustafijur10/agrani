import Image from "next/image";
import RichText from "./RichText";
import type { CaseStudyDetail } from "@/lib/caseStudies";

const PEACH = "#FFD9CC";

export default function ResearchStats({ data }: { data: CaseStudyDetail["research"] }) {
  return (
    <>
      <section aria-labelledby="research-title">
        <h2 id="research-title" className="max-w-[760px] text-4xl font-light leading-[1.3] text-[#051012] lg:text-[56px] dark:text-white">
          <RichText segs={data.title} strong="font-normal" />
        </h2>

        <ul className="mt-12 grid gap-12 md:grid-cols-3 lg:mt-16">
          {data.stats.map((s) => (
            <li key={s.value} className="flex flex-col items-center text-center">
              {/* pie: conic-gradient, decorative. The figure + text below carry the meaning */}
              <div
                aria-hidden
                className="h-48 w-48 rounded-full lg:h-[250px] lg:w-[250px]"
                style={{
                  background: `conic-gradient(from ${s.from}deg, ${s.color} 0 ${s.value}%, ${PEACH} ${s.value}% 100%)`,
                }}
              />
              <p className="mt-8 text-5xl font-light text-[#051012] dark:text-white">{s.value}%</p>
              <p className="mt-4 max-w-[300px] text-sm leading-5 text-[#3C3C3C] dark:text-[#B9B9B9]">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid items-center gap-10 lg:mt-[100px] lg:grid-cols-[500px_1fr] lg:gap-16">
        <div className="relative aspect-[500/490] overflow-hidden rounded-[32px] bg-[#EDE4D0]">
          <Image
            src={data.spotlight.image.src}
            alt={data.spotlight.image.alt}
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="max-w-[560px] text-2xl leading-[1.4] text-[#051012] sm:text-3xl lg:text-[32px] dark:text-white">
          <RichText segs={data.spotlight.text} />
        </p>
      </section>
    </>
  );
}
