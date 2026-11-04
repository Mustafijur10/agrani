import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import Contact from "@/components/Contact";
import { container } from "@/components/ui";
import { formatDate, getPost, placeholderBody, posts, type Block } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agranitechbd.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: `${post.title} | Agrani Blog`, description: post.excerpt };
}

function renderBlock(b: Block, i: number) {
  const text = "text-[15px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]";
  switch (b.type) {
    case "h2":
      return <h2 key={i} className="pt-4 text-3xl text-[#051012] first:pt-0 dark:text-white">{b.text}</h2>;
    case "lead":
      return <p key={i} className="text-[15px] italic leading-7 text-[#051012] dark:text-white">{b.text}</p>;
    case "quote":
      return <blockquote key={i} className="border-l-2 border-[#3C3C3C]/50 pl-5 italic leading-7 text-[#051012] dark:text-white">{b.text}</blockquote>;
    case "image":
      return (
        <div key={i} className="relative my-4 aspect-[2.35/1] overflow-hidden rounded-3xl bg-[#EDE4D0]">
          <Image src={b.src} alt={b.alt} fill sizes="710px" unoptimized={b.src.endsWith(".svg")} className="object-cover" />
        </div>
      );
    default:
      return <p key={i} className={text}>{b.text}</p>;
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = encodeURIComponent(`${SITE}/blog/${post.slug}`);
  const title = encodeURIComponent(post.title);
  const shares = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: "Twitter", href: `https://twitter.com/intent/tweet?url=${url}&text=${title}` },
    { label: "Linkedin", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
  ];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="relative overflow-x-clip pb-16">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-24 hidden h-20 w-40 rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -left-48 top-[700px] h-[420px] w-[560px] rotate-[35deg] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${container} relative`}>
          <header className="mx-auto max-w-[768px] text-center">
            <p className="text-sm text-[#051012] dark:text-white">
              <time dateTime={post.date}>{formatDate(post.date, "short")}</time> <span aria-hidden>•</span> {post.readMinutes} min read
            </p>
            <h1 className="mt-2 text-4xl leading-tight text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">{post.title}</h1>
          </header>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[32px] bg-[#EDE4D0] md:aspect-[2.06/1] lg:mt-14">
            <Image src={post.cover} alt="" fill priority sizes="1240px" unoptimized={post.cover.endsWith(".svg")} className="object-cover" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_710px] lg:gap-16">
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="flex items-center gap-3">
                <Image src={post.author.avatar} alt="" width={44} height={44} unoptimized className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-xl text-[#051012] dark:text-white">{post.author.name}</p>
                  <p className="text-sm text-[#8A8A8A]">{post.author.role}</p>
                </div>
              </div>
              <p className="mt-8 font-medium text-[#051012] dark:text-white">Share this post</p>
              <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                {shares.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#3C3C3C] hover:text-[#F05827] dark:text-[#B9B9B9]">
                      {s.label} <ArrowUpRight size={16} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="space-y-5">{(post.body ?? placeholderBody).map(renderBlock)}</div>
          </div>
        </div>
      </article>

      <section aria-labelledby="similar-title" className={`${container} pb-20`}>
        <h2 id="similar-title" className="text-4xl text-[#051012] sm:text-5xl dark:text-white">Few more similar blog</h2>
        <div className="mt-10 grid gap-x-7 gap-y-16 md:grid-cols-2">
          {related.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-lg text-[#051012] hover:text-[#F05827] dark:text-white">Back to all posts</Link>
        </div>
      </section>
      <Contact />
    </>
  );
}
