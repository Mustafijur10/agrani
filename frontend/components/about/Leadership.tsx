import Image from "next/image";
import { container } from "../ui";

type Leader = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  /** Which side the photo sits on at lg+ */
  photoSide: "left" | "right";
  /** Text alignment of the bio block (the design right-aligns the Finance Director) */
  align?: "left" | "right";
  large?: boolean;
};

const leaders: Leader[] = [
  {
    name: "Kamrul Islam",
    role: "Managing Director (25+ yrs experience)",
    photo: "/team/kamrul-islam.jpg",
    photoSide: "right",
    large: true,
    bio: "Kamrul Islam is the Managing Director of Agrani Technologies and Services Limited, bringing over 25 years of extensive experience in the IT sector both in Bangladesh and internationally. Under his leadership, the company continues to grow as a trusted name in delivering innovative technology solutions. His deep industry knowledge and strategic vision have been instrumental in driving the organization’s success and commitment to excellence.",
  },
  {
    name: "Tanvir Mosaddaque",
    role: "Executive Director (25+ yrs experience)",
    photo: "/team/tanvir-mosaddaque.jpg",
    photoSide: "left",
    bio: "Tanvir Mosaddaque serves as the Executive Director of Agrani Technologies and Services Limited, bringing over 25 years of extensive experience in the IT sector both in Bangladesh and internationally. His strategic leadership and deep industry knowledge have been instrumental in driving innovation and delivering technology-driven solutions that align with the company's mission. With a proven track record of success across diverse markets, Mr. Mosaddaque plays a key role in steering Agrani Technologies toward sustainable growth and digital excellence.",
  },
  {
    name: "Hassan Shahid Sarwar FCA",
    role: "Finance Director (28+ yrs experience)",
    photo: "/team/hassan-shahid-sarwar.jpg",
    photoSide: "right",
    align: "right",
    bio: "Hassan Shahid Sarwar FCA is the Finance Director of Agrani Technologies and Services Limited, bringing over 28 years of extensive experience in the accounts and finance sector both in Bangladesh and internationally. His strategic financial leadership and deep understanding of global financial practices have been instrumental in guiding the company’s fiscal operations and ensuring sustainable growth. With a strong background in corporate finance, budgeting, and compliance, Hassan Shahid Sarwar FCA plays a critical role in driving financial discipline and supporting the long-term vision of Agrani Technologies.",
  },
];

export default function Leadership() {
  return (
    <section aria-labelledby="leadership-title" className="relative overflow-x-clip py-10 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute -right-48 top-20 h-[520px] w-[360px] rotate-[20deg] rounded-full bg-[#F05827]/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-[520px] h-[420px] w-[520px] -rotate-[30deg] rounded-full bg-[#F05827]/15 blur-3xl" />

      <div className={`${container} relative`}>
        <h2 id="leadership-title" className="text-4xl leading-tight text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
          A word from the
          <br />
          Director
        </h2>

        <div className="mt-10 space-y-16 lg:mt-14 lg:space-y-24">
          {leaders.map((p, i) => (
            <article
              key={p.name}
              className={`flex flex-col gap-8 lg:items-center lg:gap-16 ${
                p.photoSide === "left" ? "lg:flex-row" : "lg:flex-row-reverse lg:justify-between"
              } ${i === 0 ? "lg:items-start" : ""}`}
            >
              <div
                className={`relative aspect-[8/7] w-full shrink-0 overflow-hidden rounded-[32px] bg-white dark:bg-white/10 ${
                  p.large ? "lg:w-[588px]" : "lg:w-[410px]"
                }`}
              >
                <Image
                  src={p.photo}
                  alt={`Portrait of ${p.name}`}
                  fill
                  sizes="(min-width: 1024px) 588px, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div className={`max-w-[620px] ${p.align === "right" ? "lg:text-right" : ""} ${i === 0 ? "lg:pt-28" : ""}`}>
                <p className="leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">{p.bio}</p>
                <h3 className="mt-8 text-xl text-[#051012] dark:text-white">{p.name}</h3>
                <p className="mt-1 text-xs text-[#3C3C3C] dark:text-[#B9B9B9]">{p.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
