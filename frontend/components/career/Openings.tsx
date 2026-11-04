import Image from "next/image";
import SectionHeading from "./SectionHeading";
import JobCard from "./JobCard";
import type { Job } from "./careerData";

type Props = {
  id: string;
  title: string;
  description: string;
  jobs: Job[];
};

export default function Openings({ id, title, description, jobs }: Props) {
  return (
    <section aria-labelledby={id} className="mx-auto w-full max-w-[1240px] px-5 py-12 lg:py-16 xl:px-0">
      <SectionHeading id={id} title={title} description={description} />

      {jobs.length > 0 ? (
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:mt-[48px] xl:grid-cols-4 xl:gap-2">
          {jobs.map((job) => (
            <li key={job.id} className="flex">
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      ) : (
        /* Empty state (Figma frame 18) */
        <div className="mt-10 flex flex-col items-center text-center">
          <Image
            src="/career/no-openings.svg"
            alt=""
            width={180}
            height={180}
            className="h-auto w-[140px] sm:w-[180px]"
          />
          <p className="mt-4 text-[#3C3C3C] dark:text-[#B9B9B9]">
            No openings at the moment. Please check back soon.
          </p>
        </div>
      )}
    </section>
  );
}
