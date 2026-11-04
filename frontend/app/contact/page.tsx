import type { Metadata } from "next";
import InfoCards from "@/components/contact/InfoCards";
import ContactMap from "@/components/contact/ContactMap";
import Contact from "@/components/Contact";
import { Pill } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us | Agrani Technologies & Services Limited",
  description:
    "Get in touch with Agrani Technologies & Services Limited: visit our office, call, email or send us a message.",
};

// Design frame: 1440px wide with 100px side margins → 1240px content width.
const wrap = "mx-auto w-full max-w-[1240px] px-5 xl:px-0";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-x-clip pb-16 lg:pb-24">
        {/* soft decorative glows (purely visual) */}
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-[374px] hidden h-[100px] w-[156px] rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-[640px] h-[360px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-[420px] h-[420px] w-[360px] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${wrap} relative`}>
          <div className="mx-auto max-w-[840px] text-center">
            <Pill>Contact Us</Pill>
            <h1 className="mt-6 text-4xl font-normal leading-[1.2] text-[#051012] sm:text-[44px] lg:text-[48px] dark:text-white">
              Need expert guidance? Reach out to our team—we&apos;d love to hear from you
            </h1>
            <p className="mx-auto mt-6 max-w-[820px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
              Have a question or a project in mind? Send us a message or visit our office. We&apos;re available Monday to Friday, 9am–6pm.
            </p>
          </div>

          {/* Map: 1240 × 600, radius 32 */}
          <div className="relative mt-14 h-[360px] overflow-hidden rounded-[32px] bg-[#E7ECEA] sm:h-[440px] lg:mt-[160px] lg:h-[600px] dark:bg-[#1d2020]">
            <ContactMap title="Map showing our location at Saint Martin's Island, Bangladesh" />
          </div>

          {/* Info cards: 4 × 304 with 8px gap */}
          <div className="mt-8 lg:mt-7">
            <InfoCards />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
