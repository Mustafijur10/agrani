import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "./SocialIcons";
import { container } from "./ui";

const nav = [
  ["Legal", "/legal"], ["Others", "#"], ["Home", "/"], ["Blog", "/blog"],
  ["About us", "/about"], ["Careers", "/career"], ["Product & Services", "/services"], ["Contact Us", "/contact"],
];
const socials = [["Facebook", "#"], ["Twitter", "#"], ["Linkedin", "#"]];

export default function Footer() {
  "use cache";
  return (
    <footer className="pt-16 text-[#051012] dark:bg-[#161818] dark:text-white">
      <div className={`${container} grid gap-12 lg:grid-cols-2`}>
        <div>
          <Image src="/logo.svg" alt="Agrani Technologies & Services Limited" width={200} height={58} />
          <p className="mt-6 max-w-[380px] text-[#3C3C3C] dark:text-[#B9B9B9]">Agrani Technology is the highest rated software solution expert team in the world.</p>
          <h2 className="mt-12 text-xl">Navigations</h2>
          <ul className="mt-5 grid max-w-sm grid-cols-2 gap-x-6 gap-y-4 text-[#3C3C3C] dark:text-[#B9B9B9]">
            {nav.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-[#F05827]">{l}</Link></li>)}
          </ul>
          <h2 className="mt-12 text-xl">Our Location</h2>
          <address className="mt-4 space-y-3 not-italic text-[#3C3C3C] dark:text-[#B9B9B9]">
            <p>Plot-174/176, Road-02, Avenue-01, Mirpur DOHS, Dhaka-1216, Bangladesh</p>
            <a href="https://www.agranitechbd.com" className="underline">www.agranitechbd.com</a>
            <p className="flex flex-wrap gap-x-8"><a href="tel:+8809610944449">+880-9610944449</a><a href="mailto:info@agranitechbd.com">info@agranitechbd.com</a></p>
            <p>Mon-Fri 9am-6pm</p>
          </address>
          <ul className="mt-10 flex gap-1">
            {[[Facebook, "Facebook"], [Instagram, "Instagram"], [Linkedin, "LinkedIn"], [Youtube, "YouTube"]].map(([Icon, name]: any) => (
              <li key={name}>
                <a href="#" aria-label={name} className="grid h-14 w-14 place-items-center rounded-full border border-black/30 text-[#051012] transition hover:border-[#F05827] hover:text-[#F05827] dark:border-white/30 dark:text-white">
                  <Icon size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative aspect-[2/1] overflow-hidden rounded-[32px]">
            <Image src="/footer.jpg" alt="Two colleagues discussing a project" fill sizes="620px" className="object-cover" />
          </div>
          <h2 className="mt-12 text-xl">Newsletter</h2>
          <p className="mt-4 text-[#3C3C3C] dark:text-[#B9B9B9]">Stay Updated with latest news and offers!</p>
          <form className="mt-5 flex max-w-[500px] items-center rounded-xl bg-white p-1.5 pl-4">
            <label className="sr-only" htmlFor="nl">Email</label>
            <input id="nl" type="email" required placeholder="Email" className="flex-1 bg-transparent text-[#051012] outline-none" />
            <button aria-label="Subscribe" className="grid h-12 w-14 place-items-center rounded-lg bg-[#F05827] text-white"><ArrowRight /></button>
          </form>
          <ul className="mt-10 flex flex-wrap gap-8 text-lg">
            {socials.map(([l, h]) => <li key={l}><a href={h} className="inline-flex items-center gap-2 hover:text-[#F05827]">{l}<ArrowUpRight size={18} /></a></li>)}
          </ul>
        </div>
      </div>

      <div className={`${container} mt-16 flex flex-wrap justify-between gap-4 border-t border-black/20 py-8 text-sm dark:border-white/20`}>
        <p>Copyright @2026 Agrani Technologies</p>
        <ul className="flex gap-8">
          {[["Refund Policy", "/refund"], ["Terms & Conditions", "/terms"], ["Privacy Policy", "/privacy"]].map(([l, h]) => <li key={l}><Link href={h}>{l}</Link></li>)}
        </ul>
      </div>
    </footer>
  );
}
