import Image from "next/image";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { feedbacks, sectionCopy, type Feedback } from "./careerData";

function FeedbackCard({ f }: { f: Feedback }) {
  const dark = !!f.featured;
  return (
    <figure
      className={`flex min-h-[180px] w-full flex-col justify-between rounded-3xl p-4 xl:w-[492px] ${
        dark ? "bg-[#051012] text-white dark:bg-white/15" : "bg-white text-[#051012] dark:bg-[#1f2121] dark:text-white"
      }`}
    >
      <div>
        <figcaption className="flex items-center justify-between gap-3">
          <span className="flex min-w-0 items-center gap-2">
            <Image
              src={f.avatar}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <span className={`truncate font-semibold ${dark ? "text-base" : "text-sm"}`}>{f.name}</span>
          </span>
          <span className="flex shrink-0 gap-0.5" role="img" aria-label={`${f.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                aria-hidden
                className={i < f.rating ? "fill-[#FFD500] text-[#FFD500]" : "fill-transparent text-[#FFD500]/40"}
              />
            ))}
          </span>
        </figcaption>
        <blockquote
          className={`mt-4 line-clamp-3 leading-6 ${dark ? "text-white/80" : "text-[#3C3C3C] dark:text-[#B9B9B9]"}`}
        >
          {f.text}
        </blockquote>
      </div>

      <p className="mt-3 flex items-center justify-between gap-3 text-sm">
        {f.role ? <span className="font-semibold">{f.role}</span> : <span />}
        <span className={dark ? "text-white/60" : "text-[#051012] dark:text-[#B9B9B9]"}>{f.team}</span>
      </p>
    </figure>
  );
}

export default function EmployeeFeedback() {
  return (
    <section
      aria-labelledby="feedback-title"
      className="relative overflow-x-clip bg-gradient-to-b from-transparent via-transparent to-[#F5D5C7] py-16 lg:py-24 dark:to-[#F05827]/15"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 xl:px-0">
        <SectionHeading id="feedback-title" title={sectionCopy.feedback.title} description={sectionCopy.feedback.description} />

        {/*
          Desktop (xl): staggered 2 × 2 layout from the design
          (row 1 starts at x=40, row 2 is shifted +130px). Below xl it collapses to 2 / 1 columns.
        */}
        <ul className="mx-auto mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:mt-[80px] xl:max-w-[1152px] xl:grid-cols-[492px_492px] xl:justify-start xl:gap-x-[38px] xl:gap-y-[34px] xl:pl-0">
          {feedbacks.map((f, i) => (
            <li key={f.name} className={i >= 2 ? "xl:translate-x-[130px]" : undefined}>
              <FeedbackCard f={f} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
