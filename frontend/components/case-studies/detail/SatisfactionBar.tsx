import type { CaseStudyDetail } from "@/lib/caseStudies";

export default function SatisfactionBar({ data }: { data: CaseStudyDetail["satisfaction"] }) {
  const { value, label, text } = data;
  return (
    <section className="flex min-h-[300px] flex-col justify-between gap-10 rounded-3xl bg-[#051012] p-6 text-white sm:p-8 lg:min-h-[390px]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-12">
        <p className="text-5xl font-light leading-none lg:text-[56px]">{value}%</p>
        <p className="max-w-[760px] leading-6 text-white/90 sm:pt-1">{text}</p>
      </div>

      <div>
        <p className="text-sm font-semibold">{label}</p>
        <div role="img" aria-label={`${value} out of 100 percent`} className="mt-4">
          <div className="flex h-8 items-end">
            {/* tick marks for the filled part */}
            <div
              className="h-full"
              style={{
                width: `${value}%`,
                backgroundImage: "repeating-linear-gradient(90deg,#C99A86 0 4px,transparent 4px 9px)",
              }}
            />
            {/* solid line for the remainder */}
            <div className="h-1.5 flex-1 bg-[#F05827]" />
          </div>
          <div aria-hidden className="relative mt-2 h-4 text-[10px]">
            <span className="absolute left-0">0%</span>
            <span className="absolute -translate-x-1/2" style={{ left: `${value}%` }}>
              {value}%
            </span>
            <span className="absolute right-0">100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
