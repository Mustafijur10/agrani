import Image from "next/image";
import { GradientButton } from "../ui";
import type { Feature } from "./whyChooseData";

export default function FeatureCard({ f }: { f: Feature }) {
  return (
    <article
      className={`flex h-full min-h-[280px] w-full flex-col rounded-[32px] p-8 ${
        f.accent
          ? "bg-[#F05827] text-white"
          : "border border-black/10 bg-white text-[#051012] dark:border-white/10 dark:bg-[#1f2121] dark:text-white"
      } ${f.className ?? ""}`}
    >
      <span
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${
          f.accent ? "bg-white" : "bg-[#F6E7E0] dark:bg-white/10"
        }`}
      >
        <Image src={f.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
      </span>

      <h3 className="mt-5 max-w-[344px] text-2xl font-normal leading-8">{f.title}</h3>

      {/* description is pinned to the bottom of the card, as in the design */}
      <p
        className={`mt-auto max-w-[344px] pt-8 text-sm leading-5 ${
          f.accent ? "text-white" : "text-[#3C3C3C] dark:text-[#B9B9B9]"
        }`}
      >
        {f.description}
      </p>

      {f.accent && (
        <div className="mt-5">
          <GradientButton href="/contact" className="px-6 py-2.5 text-sm">
            Contact Us
          </GradientButton>
        </div>
      )}
    </article>
  );
}
