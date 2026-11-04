import Image from "next/image";
import type { Img } from "@/lib/caseStudies";

// Slight tilt per screen on sm+ (left, middle, right), matching the Figma composition.
const tilt = ["sm:-rotate-[1.5deg]", "sm:-rotate-[8deg]", "sm:rotate-[3deg]"];

export default function ScreensGallery({ images }: { images: Img[] }) {
  return (
    <ul className="grid gap-6 py-6 sm:grid-cols-3 sm:py-10">
      {images.map((img, i) => (
        <li key={img.src} className={tilt[i % tilt.length]}>
          <div className="relative aspect-[9/17] overflow-hidden rounded-[32px] bg-[#D9D9D9]">
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1280px) 400px, (min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        </li>
      ))}
    </ul>
  );
}
