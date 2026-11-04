import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyCard({ study, priority = false }: { study: CaseStudy; priority?: boolean }) {
  const href = `/case-studies/${study.slug}`;
  return (
    <article className="group">
      <Link
        href={href}
        aria-label={study.title}
        className="block rounded-[32px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F05827]"
      >
        <div className="relative aspect-[3/2] overflow-hidden rounded-[32px] bg-[#EDE4D0]">
          <Image
            src={study.cover}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1280px) 612px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/60 bg-black/20 px-5 py-5 text-white backdrop-blur-md">
            <p className="text-lg font-medium">{study.author}</p>
            <p className="mt-1 text-sm">
              <time dateTime={study.date}>{formatDate(study.date)}</time>
            </p>
          </div>
        </div>
      </Link>

      <h2 className="mt-6 text-2xl text-[#051012] dark:text-white">
        <Link href={href} className="hover:text-[#F05827]">
          {study.title}
        </Link>
      </h2>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-2 text-lg text-[#051012] hover:text-[#F05827] dark:text-white"
      >
        Read Post <ArrowUpRight size={20} aria-hidden />
      </Link>
    </article>
  );
}
