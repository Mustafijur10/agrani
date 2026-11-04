import Image from "next/image";
import { Star } from "lucide-react";
import type { Review } from "./customerData";

export default function ReviewCard({ r }: { r: Review }) {
  const dark = !!r.featured;
  return (
    <figure
      className={`flex min-h-[180px] w-full flex-col justify-between rounded-3xl p-4 xl:w-[492px] ${
        dark ? "bg-[#051012] text-white dark:bg-white/15" : "bg-white text-[#051012] dark:bg-[#1f2121] dark:text-white"
      }`}
    >
      <div>
        <figcaption className="flex items-center justify-between gap-3">
          <span className="flex min-w-0 items-center gap-2">
            <Image src={r.avatar} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full object-cover" />
            <span className={`truncate font-semibold ${dark ? "text-base" : "text-sm"}`}>{r.name}</span>
          </span>
          <span className="flex shrink-0 gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                aria-hidden
                className={i < r.rating ? "fill-[#FFD500] text-[#FFD500]" : "fill-transparent text-[#FFD500]/40"}
              />
            ))}
          </span>
        </figcaption>
        <blockquote className={`mt-4 line-clamp-3 leading-6 ${dark ? "text-white/80" : "text-[#3C3C3C] dark:text-[#B9B9B9]"}`}>
          {r.text}
        </blockquote>
      </div>

      <p className="mt-3 flex items-center justify-between gap-3 text-sm">
        {r.role ? <span className="font-semibold">{r.role}</span> : <span />}
        <span className={dark ? "text-white/60" : "text-[#051012] dark:text-[#B9B9B9]"}>{r.team}</span>
      </p>
    </figure>
  );
}
