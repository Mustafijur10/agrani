export const categories = [
  { slug: "it-trends", label: "IT trends" },
  { slug: "ai-and-automation", label: "AI and automation" },
  { slug: "cybersecurity", label: "Cybersecurity" },
  { slug: "digital-transformation", label: "Digital transformation" },
  { slug: "industry-best-practices", label: "Industry best practices" },
] as const;

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  categories: string[];
  author: { name: string; role: string; avatar: string };
  body?: Block[];
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.";
const excerpt = "Stories & Insights That Sparks Ideas: From tech updates to business tips, explore our latest blogs that are sure to spark new ideas and fuel your growth.";
const olivia = { name: "Olivia Rhye", role: "Content manager", avatar: "/blog/author.svg" };
const andrew = { name: "Andrew Jonson", role: "Content manager", avatar: "/blog/author.svg" };

// Used when a post has no body of its own yet. TODO: replace with real articles.
export const placeholderBody: Block[] = [
  { type: "h2", text: "Introduction" },
  { type: "p", text: lorem },
  { type: "p", text: lorem },
  { type: "h2", text: "Conclusion" },
  { type: "p", text: lorem },
];

// TODO: placeholder content from the Figma. Replace with real posts (or load from a CMS / MDX).
export const posts: Post[] = [
  {
    slug: "digital-payments-revolution",
    title: "Digital payments revolution",
    excerpt,
    cover: "/blog/cover-1.svg",
    date: "2025-01-11",
    readMinutes: 5,
    categories: ["it-trends", "ai-and-automation", "digital-transformation"],
    author: andrew,
    body: [
      { type: "h2", text: "Introductions" },
      { type: "p", text: lorem },
      { type: "p", text: lorem },
      { type: "image", src: "/blog/cover-2.svg", alt: "Illustration for the digital payments article" },
      { type: "lead", text: "Artificial intelligence is transforming payments by improving fraud detection, automating risk assessment and personalizing customer experience. AI systems analyze transaction patterns in real time to flag unusual activity, helping businesses operate securely and efficiently." },
      { type: "p", text: lorem },
      { type: "quote", text: "“This platform has completely transformed the way we handle transactions. It is fast, secure, and highly reliable, allowing our team to focus on growing the business instead of worrying about payment issues. The setup was straightforward.”" },
      { type: "p", text: lorem },
      { type: "h2", text: "Conclusion" },
      { type: "p", text: lorem },
      { type: "p", text: lorem },
      { type: "p", text: lorem },
    ],
  },
  { slug: "ux-review-presentation", title: "UX review presentation", excerpt, cover: "/blog/cover-3.svg", date: "2026-03-27", readMinutes: 4, categories: ["it-trends", "industry-best-practices"], author: olivia },
  { slug: "best-books-on-scaling-your-startup", title: "Best books on scaling your startup", excerpt, cover: "/blog/cover-4.svg", date: "2026-03-27", readMinutes: 6, categories: ["it-trends", "industry-best-practices"], author: olivia },
  { slug: "building-your-api-stack", title: "Building your API Stack", excerpt, cover: "/blog/cover-5.svg", date: "2026-03-27", readMinutes: 7, categories: ["it-trends", "digital-transformation"], author: olivia },
  { slug: "pm-mental-models", title: "PM mental models", excerpt, cover: "/blog/cover-6.svg", date: "2026-03-27", readMinutes: 5, categories: ["it-trends", "industry-best-practices"], author: olivia },
  { slug: "what-is-wireframing", title: "What is Wireframing?", excerpt, cover: "/blog/cover-7.svg", date: "2026-03-27", readMinutes: 4, categories: ["it-trends"], author: olivia },
  { slug: "how-collaboration-makes-us-better-designers", title: "How collaboration makes us better designers", excerpt, cover: "/blog/cover-8.svg", date: "2026-03-27", readMinutes: 5, categories: ["it-trends", "industry-best-practices"], author: olivia },
  { slug: "our-top-javascript-frameworks-to-use", title: "Our top JavaScript frameworks to use", excerpt, cover: "/blog/cover-9.svg", date: "2026-03-27", readMinutes: 8, categories: ["it-trends", "cybersecurity"], author: olivia },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export function formatDate(iso: string, month: "long" | "short" = "long") {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month, year: "numeric", timeZone: "UTC" });
}
