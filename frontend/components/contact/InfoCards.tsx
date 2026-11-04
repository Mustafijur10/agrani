import Image from "next/image";
import type { ReactNode } from "react";

// Single source of truth for contact details (keep in sync with Footer).
export const contactInfo = {
  address: "Plot-174/176, Road-02, Avenue-01, Mirpur DOHS, Dhaka-1216, Bangladesh",
  phone: "+880-9610944449",
  email: "info@agranitechbd.com",
  website: "www.agranitechbd.com",
};

/**
 * Card icons exported from Figma. Drop your files into /public/contact/icons/
 * with these names (or change the extension here, e.g. .png / .webp).
 */
const icons = {
  address: "/contact/icons/address.svg",
  phone: "/contact/icons/phone.svg",
  email: "/contact/icons/email.svg",
  website: "/contact/icons/website.svg",
};

const link =
  "break-words hover:text-[#F05827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F05827]";

function Card({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <li className="rounded-[32px] lg:h-[226px] border border-black/[0.08] bg-gradient-to-b from-white/80 to-white/50 p-[30px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:border-white/15 dark:from-white/10 dark:to-white/5">
      <span aria-hidden className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#F1E0D8] dark:bg-[#F05827]/15">
        <Image src={icon} alt="" width={34} height={34} />
      </span>
      <h2 className="mt-[18px] text-xl font-semibold leading-7 text-[#051012] dark:text-white">{title}</h2>
      <div className="mt-2 text-sm leading-[22px] text-[#3C3C3C] dark:text-[#B9B9B9]">{children}</div>
    </li>
  );
}

export default function InfoCards() {
  const tel = contactInfo.phone.replace(/[^+\d]/g, "");
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      <Card icon={icons.address} title="Address">
        <address className="max-w-[200px] not-italic">{contactInfo.address}</address>
      </Card>
      <Card icon={icons.phone} title="Phone">
        <a href={`tel:${tel}`} className={link}>{contactInfo.phone}</a>
      </Card>
      <Card icon={icons.email} title="Email">
        <a href={`mailto:${contactInfo.email}`} className={link}>{contactInfo.email}</a>
      </Card>
      <Card icon={icons.website} title="Website">
        <a
          href={`https://${contactInfo.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} underline underline-offset-4`}
        >
          {contactInfo.website}
        </a>
      </Card>
    </ul>
  );
}
