import RevenueCard from "./RevenueCard";
import RichText from "./RichText";
import type { CaseStudyDetail } from "@/lib/caseStudies";

export default function InsightsSection({ data }: { data: CaseStudyDetail["insights"] }) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
      <RevenueCard card={data.card} />
      <p className="max-w-[560px] text-2xl leading-[1.4] text-[#051012] sm:text-3xl lg:text-[32px] dark:text-white">
        <RichText segs={data.text} />
      </p>
    </section>
  );
}
