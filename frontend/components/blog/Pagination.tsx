import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = { page: number; totalPages: number; hrefFor: (page: number) => string };

function pageList(page: number, total: number): (number | "…")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, 2, 3, page, total]);
  const nums = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  nums.forEach((n, i) => {
    if (i && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

export default function Pagination({ page, totalPages, hrefFor }: Props) {
  const prev = page > 1;
  const next = page < totalPages;
  const nav = "flex items-center gap-3 text-lg";
  return (
    <nav aria-label="Pagination" className="mt-16 flex items-center justify-between gap-4">
      {prev ? (
        <Link href={hrefFor(page - 1)} className={`${nav} text-[#051012] hover:text-[#F05827] dark:text-white`}>
          <ArrowLeft size={24} aria-hidden /> <span className="hidden sm:inline">Previous Page</span>
        </Link>
      ) : (
        <span aria-disabled className={`${nav} text-[#8A8A8A]`}><ArrowLeft size={24} aria-hidden /> <span className="hidden sm:inline">Previous Page</span></span>
      )}

      <ol className="flex items-center gap-4 text-lg">
        {pageList(page, totalPages).map((n, i) =>
          n === "…" ? (
            <li key={`gap-${i}`} aria-hidden className="text-[#8A8A8A]">…</li>
          ) : (
            <li key={n}>
              <Link
                href={hrefFor(n)}
                aria-current={n === page ? "page" : undefined}
                className={n === page ? "text-[#051012] dark:text-white" : "text-[#8A8A8A] hover:text-[#F05827]"}
              >
                {n}
              </Link>
            </li>
          )
        )}
      </ol>

      {next ? (
        <Link href={hrefFor(page + 1)} className={`${nav} text-[#051012] hover:text-[#F05827] dark:text-white`}>
          <span className="hidden sm:inline">Next Page</span> <ArrowRight size={24} aria-hidden />
        </Link>
      ) : (
        <span aria-disabled className={`${nav} text-[#8A8A8A]`}><span className="hidden sm:inline">Next Page</span> <ArrowRight size={24} aria-hidden /></span>
      )}
    </nav>
  );
}
