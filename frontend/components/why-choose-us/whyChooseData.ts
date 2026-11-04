export type Feature = {
  id: string;
  title: string;
  description: string;
  /** Icon exported from Figma into /public/why-choose/ (change extension if you export SVG) */
  icon: string;
  /** Orange highlighted card with a CTA button */
  accent?: boolean;
  /** Tailwind grid-placement classes (kept here so the Figma bento layout is data-driven) */
  className?: string;
};

// TODO: replace with the real hero copy (the Figma text is copied from the Blog page).
export const hero = {
  pill: "Why Choose Us",
  title: "Real-World Solutions",
  description:
    "Stories & Insights That Sparks Ideas: From tech updates to business tips, explore our latest blogs that are sure to spark new ideas and fuel your growth.",
};

// TODO: replace with unique descriptions per card (Figma repeats the same placeholder).
const text =
  "We build custom web and mobile applications, ERP systems, e-commerce platforms, and more, tailored to your specific business needs.";

/*
  Bento layout on lg (3 columns × 4 rows, 8px gap, 360px rows):
    row 1: [years] [professionals] [support ↕2]
    row 2: [experienced ↕2] [security] [support]
    row 3: [experienced] [cost ↔2     ]
    row 4: [cloud] [quality] [on-time]
  Items are placed by CSS grid auto-flow in this array order.
*/
export const features: Feature[] = [
  { id: "years", title: "12+ years experience", description: text, icon: "/why-choose/experience.png" },
  { id: "professionals", title: "100+ Professionals", description: text, icon: "/why-choose/professionals.png" },
  {
    id: "support",
    title: "24/7 Support available",
    description: text,
    icon: "/why-choose/support.png",
    accent: true,
    className: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "experienced",
    title: "Highly Experienced and Professionals",
    description: text,
    icon: "/why-choose/experienced-team.png",
    className: "lg:row-span-2",
  },
  { id: "security", title: "Maintain Security", description: text, icon: "/why-choose/security.png" },
  {
    id: "cost",
    title: "Cost Efficient Product and Services",
    description: text,
    icon: "/why-choose/cost.png",
    className: "sm:col-span-2 lg:col-span-2",
  },
  { id: "cloud", title: "Cloud Infrastructure", description: text, icon: "/why-choose/cloud.png" },
  { id: "quality", title: "High-Quality Product", description: text, icon: "/why-choose/quality.png" },
  {
    id: "ontime",
    title: "Deliver On-time",
    description: text,
    icon: "/why-choose/ontime.png",
    className: "sm:col-span-2 lg:col-span-1",
  },
];
