// Case-study content. Swap this file for a CMS / API later; the pages only use the exports below.

/** A piece of rich text: plain, bold, italic or both. */
export type Seg = { t: string; b?: boolean; i?: boolean };

export type IconKey = "user" | "calendar" | "bell";

export type Img = { src: string; alt: string };

export type CaseStudyDetail = {
  overview: {
    headline: Seg[];
    hero: Img & { width: number; height: number };
    paragraphs: string[];
  };
  problemSolutions: {
    title: string;
    intro: string[];
    problem: { title: string; icon: IconKey; paragraphs: string[] };
    solutions: { title: string; heading: string; text: string; icon: IconKey }[];
  };
  research: {
    title: Seg[];
    stats: { value: number; color: string; from: number; text: string }[];
    spotlight: { image: Img; text: Seg[] };
  };
  satisfaction: { value: number; label: string; text: string };
  gallery: Img[];
  execution: { tall: Img; wide: Img; heading: string; text: string };
  insights: {
    card: {
      label: string;
      amount: string;
      change: string;
      period: string;
      reportLabel: string;
      reportHref: string;
      /** Evenly spaced chart values (any scale, higher = more revenue) */
      series: number[];
    };
    text: Seg[];
  };
  closing: { title: string; subtitle: string; image: Img };
};

export type CaseStudy = {
  slug: string;
  title: string;
  author: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  cover: string;
  /** Falls back to `defaultDetail` when omitted */
  detail?: CaseStudyDetail;
};

export const CASE_STUDIES_PAGE_SIZE = 8;

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

// TODO: titles / author / dates are the placeholder blog titles from the Figma. Replace with real case studies.
// Covers: export each from Figma to /public/case-studies/covers/<slug>.jpg
const mk = (slug: string, title: string): CaseStudy => ({
  slug,
  title,
  author: "Olivia Rhye",
  date: "2026-03-27",
  cover: `/case-studies/covers/${slug}.jpg`,
});

export const caseStudies: CaseStudy[] = [
  mk("ux-review-presentation", "UX review presentation"),
  mk("best-books-on-scaling-your-startup", "Best books on scaling your startup"),
  mk("building-your-api-stack", "Building your API Stack"),
  mk("best-books-on-scaling-your-startup-2", "Best books on scaling your startup"), // duplicate title in the Figma
  mk("pm-mental-models", "PM mental models"),
  mk("what-is-wireframing", "What is Wireframing?"),
  mk("how-collaboration-makes-us-better-designers", "How collaboration makes us better designers"),
  mk("our-top-javascript-frameworks-to-use", "Our top javascript frameworks to use"),
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

// ───────────────────────── Detail (Styli salon booking) ─────────────────────────
// Images: export from Figma into /public/case-studies/styli/
// TODO: the "Stylii / Styli / stylis" spelling is inconsistent in the Figma; normalised to "Styli" here.
const brandLine = (tail: Seg[]): Seg[] => [
  { t: "Finding and booking", b: true },
  { t: " salon services shouldn’t be stressful " },
  { t: "Styli", b: true, i: true },
  { t: " makes it seamless for both " },
  { t: "customers and salon owners.", b: true },
  ...tail,
];

const problemText =
  "Manual booking and service management cause missed appointments long wait times and frustrated clients";

export const defaultDetail: CaseStudyDetail = {
  overview: {
    headline: brandLine([]),
    // Transparent PNG/WebP mockup, ~2000px wide. Update width/height to the exported size.
    hero: { src: "/case-studies/styli/hero.png", alt: "Styli salon booking app screens", width: 1600, height: 700 },
    paragraphs: [
      "In today’s fast-moving beauty industry. 72% of customers say they face delays or confusion during salon booking, while 68% of salon owners still rely on manual record-keeping and phone calls.",
      "These inefficiencies result in 40% missed appointments and 25% loss in repeat customers revealing a massive opportunity for transformation.",
    ],
  },
  problemSolutions: {
    title: "Problem & Solutions",
    intro: [
      "The project was divided into three focused sprints to ensure a structured and efficient design process from discovery to delivery",
      "Finding and booking salon services shouldn’t be stressful-Styli makes it seamless for both customers and salon owners.",
    ],
    // TODO: the Figma repeats the same paragraph twice
    problem: { title: "Problem", icon: "user", paragraphs: [problemText, problemText] },
    solutions: [
      {
        title: "Solution 01",
        heading: "Online Booking & Schedule Management",
        text: "Client Book easily, staff manages appointments and availability in one place",
        icon: "user",
      },
      {
        title: "Solution 02",
        heading: "Automated Notification & Client Tracking",
        text: "Reminders, Promotions and client history improve service and customer satisfaction",
        icon: "bell",
      },
    ],
  },
  research: {
    title: [{ t: "Researching User To Validate design " }, { t: "Choices", b: true }],
    stats: [
      {
        value: 80,
        color: "#F05827",
        from: -12,
        text: "of users said Styli’s booking flow felt effortless and intuitive reducing time spent searching and scheduling appointment",
      },
      {
        value: 65,
        color: "#06955A",
        from: -20,
        text: "Appreciated how Styli clearly display service details and transparent pricing increasing trust and decision confidence",
      },
      {
        value: 47,
        color: "#EFC283",
        from: -20,
        text: "Found Styli stylist selection feature helpful for choosing professionals based on ratings and reviews",
      },
    ],
    spotlight: {
      image: { src: "/case-studies/styli/research.jpg", alt: "Two designers collaborating over a prototype" },
      text: brandLine([{ t: " turning an everyday task into smooth digital experience." }]),
    },
  },
  satisfaction: {
    value: 72,
    // TODO: confirm the "Not Satisfied" label with the design team (it sits above a 72% bar in the Figma).
    label: "Not Satisfied",
    text: "of salon managers shared that - Styli’s dashboard improved operational clarity and reduced scheduling errors.",
  },
  // Three portrait screenshots (~9:17 ratio)
  gallery: [
    { src: "/case-studies/styli/gallery-1.png", alt: "Styli app screen 1" },
    { src: "/case-studies/styli/gallery-2.png", alt: "Styli app screen 2" },
    { src: "/case-studies/styli/gallery-3.png", alt: "Styli app screen 3" },
  ],
  execution: {
    tall: { src: "/case-studies/styli/execution-tall.jpg", alt: "Designers refining the final screens" },
    wide: { src: "/case-studies/styli/execution-wide.jpg", alt: "Designers reviewing the final design" },
    heading: "From Vision to Final Execution",
    text: "The design was fully refined, validated and finalized for implementation. Every screen interaction and visual element underwent through review and alignment with the brand vision and user needs.",
  },
  insights: {
    // Built in code (RevenueCard), nothing to export from Figma.
    card: {
      label: "Total Revenue",
      amount: "$1000.80",
      change: "20%",
      period: "Last Month",
      reportLabel: "View Report",
      reportHref: "/contact", // TODO: point at the real report / demo link
      series: [0, 16, 10, 20, 22, 12, 22, 32, 44, 56, 62, 66, 65, 61, 48, 29, 27, 41, 52, 61, 68, 78, 90, 95, 93, 86, 70, 63, 84, 83, 72, 75, 83, 89, 102, 125],
    },
    text: [
      { t: "With Styli insights", b: true },
      { t: " salon can enhance client " },
      { t: "experiences", b: true },
      { t: ", boost bookings and drive growth effortlessly." },
    ],
  },
  closing: {
    title: "THANKS",
    subtitle: "For Scrolling Along",
    image: { src: "/case-studies/styli/closing.jpg", alt: "Designers collaborating in the studio" },
  },
};
