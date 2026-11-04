import Image from "next/image";
import { Star } from "lucide-react";

type T = { name: string; role: string; text: string; featured?: boolean; avatar?: string };

// TODO: replace with real client testimonials (placeholder copy from the Figma).
const text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.";
const row1: T[] = [
  { name: "Steve Smith", avatar: "/testimonials/steve-smith.svg", role: "Director", text, featured: true },
  { name: "Albert Flores", avatar: "/testimonials/albert-flores.svg", role: "CEO", text },
  { name: "Robert Fox", avatar: "/testimonials/robert-fox.svg", role: "Businessman", text },
  { name: "Jenny Wilson", avatar: "/testimonials/jenny-wilson.svg", role: "Manager", text },
];
const row2: T[] = [
  { name: "Darlene Robertson", avatar: "/testimonials/darlene-robertson.svg", role: "President of Sales", text },
  { name: "Kathryn Murphy", avatar: "/testimonials/kathryn-murphy.svg", role: "Head of Operations", text },
  { name: "Marvin McKinney", avatar: "/testimonials/marvin-mckinney.svg", role: "Global Director", text },
  { name: "Cody Fisher", avatar: "/testimonials/cody-fisher.svg", role: "Founder", text },
];

const marqueeCss = `
@keyframes marquee-x { to { transform: translateX(-50%); } }
.marquee-track { animation: marquee-x 40s linear infinite; will-change: transform; }
.marquee-reverse { animation-direction: reverse; }
.marquee:hover .marquee-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
`;

function Card({ t }: { t: T }) {
  const initials = t.name.split(" ").map((w) => w[0]).join("");
  return (
    <figure
      className={`w-[320px] shrink-0 rounded-3xl p-6 sm:w-[470px] ${
        t.featured ? "bg-[#051012] text-white dark:bg-white/15" : "bg-white text-[#051012] dark:bg-[#1f2121] dark:text-white"
      }`}
    >
      <figcaption className="flex items-center gap-3">
        {t.avatar ? (
          <Image src={t.avatar} alt="" width={56} height={56} unoptimized={t.avatar.endsWith(".svg")} className="h-14 w-14 rounded-full object-cover" />
        ) : (
          <span aria-hidden className="grid h-14 w-14 place-items-center rounded-full bg-[#F05827] text-lg font-medium text-white">{initials}</span>
        )}
        <span>
          <span className="block text-lg">{t.name}</span>
          <span className={`block text-sm ${t.featured ? "text-white/70" : "text-[#3C3C3C] dark:text-[#B9B9B9]"}`}>{t.role}</span>
        </span>
      </figcaption>
      <blockquote className={`mt-5 leading-6 ${t.featured ? "text-white/85" : "text-[#3C3C3C] dark:text-[#B9B9B9]"}`}>{t.text}</blockquote>
      <div className="mt-5 flex gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} className="fill-[#FFC400] text-[#FFC400]" />)}
      </div>
    </figure>
  );
}

function Row({ items, reverse = false, duration = 40, offset = 0 }: { items: T[]; reverse?: boolean; duration?: number; offset?: number }) {
  return (
    <div className="marquee overflow-hidden motion-reduce:overflow-x-auto">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${duration}s`, animationDelay: `-${offset}s` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1 || undefined}>
            {items.map((t) => <Card key={`${copy}-${t.name}`} t={t} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-labelledby="trust-title" className="bg-[#F8F8F8] py-16 lg:py-24 dark:bg-[#161818]">
      <div className="mx-auto max-w-[820px] px-5 text-center">
        <h2 id="trust-title" className="text-4xl leading-tight text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
          Trusted by the best
          <br />
          in our industry
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
          Hear from the clients and partners who rely on Agrani to deliver.
        </p>
      </div>
      <style>{marqueeCss}</style>
      <div className="mt-12 space-y-6">
        <Row items={row1} duration={40} />
        <Row items={row2} reverse duration={46} offset={18} />
      </div>
    </section>
  );
}
