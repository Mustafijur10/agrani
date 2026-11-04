import Image from "next/image";
import { Pill, container } from "../ui";

export default function AboutHero() {
  return (
    <section className="relative overflow-x-clip pb-16 lg:pb-24">
      {/* soft decorative glows (purely visual) */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-0 top-64 hidden h-20 w-40 rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />

      <div className={`${container} relative text-center`}>
        <Pill>About Us</Pill>
        <h1 className="mt-6 text-4xl leading-tight text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
          Company Overview
        </h1>
        <p className="mx-auto mt-6 max-w-[820px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
          Agrani Technologies and Services Limited (ATSL) is a dynamic and rapidly growing IT company based in
          Bangladesh, dedicated to providing cutting-edge technology solutions that cater to both public and private
          sector needs. Since its inception in 2013, Agrani has built a strong foundation of trust, professionalism,
          and innovation, establishing itself as a leading force in the country&apos;s digital transformation landscape.
        </p>

        <div className="relative mt-16 aspect-[4/3] overflow-hidden rounded-[32px] md:aspect-[2/1] lg:mt-28">
          <Image
            src="/about/office.jpg"
            alt="Agrani team members collaborating around a laptop in the office"
            fill
            priority
            sizes="(min-width: 1440px) 1240px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
