import type { Metadata } from "next";
import Offerings from "@/components/services/Offerings";
import Contact from "@/components/Contact";
import { container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products and Services | Agrani Technologies & Services Limited",
  description:
    "Software development, tech consultancy, cybersecurity, cloud, e-governance and more: explore Agrani's ICT services and product portfolio.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-x-clip pb-14 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F05827]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-40 hidden h-20 w-40 rounded-t-full bg-gradient-to-b from-[#F05827]/70 to-transparent md:block" />
        <div aria-hidden className="pointer-events-none absolute -right-48 top-[900px] h-[520px] w-[360px] rotate-[20deg] rounded-full bg-[#F05827]/15 blur-3xl" />

        <div className={`${container} relative text-center`}>
          <p className="text-[#8A8A8A] dark:text-[#B9B9B9]">Products and Services</p>
          <h1 className="mt-4 text-4xl text-[#051012] sm:text-5xl lg:text-[56px] dark:text-white">
            Project <span className="font-medium">Overview</span>
          </h1>
        </div>
      </section>
      <Offerings />
      <Contact />
    </>
  );
}
