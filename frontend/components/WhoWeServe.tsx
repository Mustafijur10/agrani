import Image from "next/image";
import { Pill, container } from "./ui";

type Sector = { title: string; text: string; image?: string; className?: string };

// Set `image` (e.g. "/sectors/government.jpg") once you export the photos.
const sectors: Sector[] = [
  {
    title: "Government",
    text: "We build secure, scalable digital platforms, ERP systems, and e-governance solutions that help public institutions serve citizens faster and more transparently.",
    className: "md:row-span-3",
  },
  { title: "Private Sector", text: "Custom web and mobile applications, ERP systems, and e-commerce platforms tailored to your business growth." },
  { title: "NGOs", text: "Reliable, cost-effective technology that helps non-profits manage programs, data, and impact at scale." },
  { title: "Education", text: "Modern learning platforms and management systems that make teaching, administration, and learning easier." },
];

export default function WhoWeServe() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 dark:bg-[#161818]">
      <div aria-hidden className="pointer-events-none absolute -bottom-20 left-0 h-72 w-full bg-[radial-gradient(ellipse_at_center,rgba(240,88,39,0.15),transparent_70%)]" />

      <div className={`${container} relative`}>
        <div className="text-center">
          <Pill>Who We Serve</Pill>
          <h2 className="mt-6 text-3xl leading-snug text-[#051012] sm:text-5xl sm:leading-[1.25] dark:text-white">
            Our Services:<br />Crafted to Empower Your Vision
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:auto-rows-[minmax(280px,auto)]">
          {sectors.map((s) => (
            <article
              key={s.title}
              className={`flex min-h-[320px] flex-col overflow-hidden rounded-3xl bg-white pt-9 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:bg-white/5 ${s.className ?? ""}`}
            >
              <div className="px-7 sm:px-9">
                <h3 className="text-3xl text-[#051012] dark:text-white">{s.title}</h3>
                <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{s.text}</p>
              </div>
              {/* Image sits flush with the card bottom, inset at the sides */}
              <div className="relative mx-7 mt-8 min-h-[80px] flex-1 overflow-hidden rounded-t-[40px] bg-[#E8E8E8] sm:mx-9 dark:bg-white/10">
                {s.image && <Image src={s.image} alt="" fill sizes="(min-width:768px) 600px, 100vw" className="object-cover" />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
