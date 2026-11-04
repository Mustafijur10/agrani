import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block rounded-[32px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F05827]" aria-label={post.title}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[32px] bg-[#EDE4D0] sm:aspect-[612/508]">
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(min-width: 1024px) 612px, 100vw"
            unoptimized={post.cover.endsWith(".svg")}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/60 bg-black/20 px-5 py-5 text-white backdrop-blur-md">
            <p className="text-lg font-medium">{post.author.name}</p>
            <p className="mt-1 text-sm">{formatDate(post.date)}</p>
          </div>
        </div>
      </Link>

      <h2 className="mt-8 text-2xl text-[#051012] dark:text-white">
        <Link href={`/blog/${post.slug}`} className="hover:text-[#F05827]">{post.title}</Link>
      </h2>
      <p className="mt-4 max-w-[600px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-lg text-[#051012] hover:text-[#F05827] dark:text-white">
        Read Post <ArrowUpRight size={20} aria-hidden />
      </Link>
    </article>
  );
}
