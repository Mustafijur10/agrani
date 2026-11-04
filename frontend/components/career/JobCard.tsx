import Link from "next/link";
import type { Job } from "./careerData";

const fmt = (n: number) => n.toLocaleString("en-US");

export default function JobCard({ job }: { job: Job }) {
  const href =
    job.applyHref ??
    `mailto:info@agranitechbd.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`;
  const external = !href.startsWith("/");
  const btn =
    "inline-flex items-center justify-center rounded-full bg-[#FF5A1F] px-[18px] py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05827]";

  return (
    <article className="flex min-h-[264px] w-full flex-col rounded-[32px] border border-black/10 bg-[#F8F8F8] p-8 dark:border-white/10 dark:bg-white/5">
      <p className="text-[#F23A1B]">{job.department}</p>
      <h3 className="mt-2 text-2xl font-semibold leading-8 text-[#051012] dark:text-white">{job.title}</h3>

      <ul aria-label="Job details" className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#5A5A5A] dark:text-[#B9B9B9]">
        {job.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <p className="mt-auto pt-8 text-[#051012] dark:text-white">
        <span className="text-lg font-semibold">
          {fmt(job.salary.min)} - {fmt(job.salary.max)}
        </span>{" "}
        <span className="text-xs">{job.salary.unit ?? "BDT/Month"}</span>
      </p>

      <div className="mt-4">
        {external ? (
          <a href={href} className={btn} aria-label={`Apply for ${job.title}`}>
            Apply Here
          </a>
        ) : (
          <Link href={href} className={btn} aria-label={`Apply for ${job.title}`}>
            Apply Here
          </Link>
        )}
      </div>
    </article>
  );
}
