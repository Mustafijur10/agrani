import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import Pagination from "@/components/blog/Pagination";
import Contact from "@/components/Contact";
import { Pill, container } from "@/components/ui";
import { categories, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Agrani Technologies & Services Limited",
  description: "Tech updates, business tips and industry insights from the Agrani team.",
};

const PAGE_SIZE = 8;
export const instant = false;
export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string; page?: string }> }) {
  const sp = await searchParams;
  const category = categories.find((c) => c.slug === sp.category) ?? categories[0];
  const filtered = posts.filter((p) => p.categories.includes(category.slug));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(sp.page) || 1), totalPages);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hrefFor = (n: number) => `/blog?category=${category.slug}${n > 1 ? `&page=${n}` : ""}`;

  return (
    <>
      <section className="relative overflow-x-clip pb-20">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-40 hidden h-20 w-40 rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[900px] h-[420px] w-[520px] -rotate-[30deg] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${container} relative`}>
          <div className="text-center">
            <Pill>Blog</Pill>
            <h1 className="mt-6 text-4xl text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">Recent Highlights</h1>
            <p className="mx-auto mt-6 max-w-[840px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
              Stories &amp; Insights That Sparks Ideas: From tech updates to business tips, explore our latest blogs that are sure to spark new ideas and fuel your growth.
            </p>
          </div>

          <nav aria-label="Blog categories" className="mt-16 flex gap-10 overflow-x-auto border-b border-black/15 lg:mt-24 lg:gap-16 dark:border-white/20">
            {categories.map((c) => {
              const on = c.slug === category.slug;
              return (
                <Link
                  key={c.slug}
                  href={`/blog?category=${c.slug}`}
                  aria-current={on ? "page" : undefined}
                  className={`-mb-px whitespace-nowrap border-b-2 pb-3 text-lg transition-colors ${
                    on ? "border-[#F05827] text-[#F05827]" : "border-transparent text-[#6B6B6B] hover:text-[#F05827] dark:text-[#B9B9B9]"
                  }`}
                >
                  {c.label}
                </Link>
              );
            })}
          </nav>

          {visible.length ? (
            <div className="mt-12 grid gap-x-7 gap-y-16 md:grid-cols-2">
              {visible.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          ) : (
            <p className="mt-16 text-center text-[#3C3C3C] dark:text-[#B9B9B9]">No posts in this category yet. Check back soon.</p>
          )}

          <Pagination page={page} totalPages={totalPages} hrefFor={hrefFor} />
        </div>
      </section>
      <Contact />
    </>
  );
}
