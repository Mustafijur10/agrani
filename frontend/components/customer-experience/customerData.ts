export type Review = {
  id: string;
  name: string;
  /** Avatar exported from Figma. These reuse the files from the Career page, so nothing new to export. */
  avatar: string;
  /** Left footer label, shown on the featured (dark) card only */
  role?: string;
  /** Right footer label */
  team: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  featured?: boolean;
};

// TODO: hero copy is copied from the Blog page in the Figma. Replace with real copy.
export const hero = {
  pill: "Customer Experience",
  title: "More critics from our clients",
  description:
    "Stories & Insights That Sparks Ideas: From tech updates to business tips, explore our latest blogs that are sure to spark new ideas and fuel your growth.",
};

// TODO: placeholder reviews from the Figma (they mention "Nagorik" and a calendar app, and are repeated twice).
// Replace with real client reviews. Each entry needs a unique `id`.
const mashreef = "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.";
const zinia = "Working at Nagorik has been an incredible experience, marked by an innovative work culture and a supportive team that inspires growth...";
const generic = "Working at Nagorik Technologies Limited has been an incredibly rewarding experience. An Inspiring and Supportive Work Environment – Truly a Great Place to Grow!";

const av = (n: string) => `/career/avatars/${n}.jpg`;

/*
  Desktop (xl) layout is a staggered 2-column zigzag:
  rows 1 & 3 start at the left edge, rows 2 & 4 are shifted right by 130px.
  Order here = reading order (left → right, top → bottom).
*/
export const reviews: Review[] = [
  { id: "r1", name: "Mashreef Ahamed", avatar: av("mashreef-ahamed"), role: "Executive", team: "Product & Marketing", text: mashreef, rating: 5, featured: true },
  { id: "r2", name: "Zinia Sultana", avatar: av("zinia-sultana"), team: "Finance & Admin", text: zinia, rating: 5 },
  { id: "r3", name: "Jehana Mowla", avatar: av("jehana-mowla"), team: "Tech team", text: generic, rating: 5 },
  { id: "r4", name: "Adam Gwadar", avatar: av("adam-gwadar"), team: "Marketing team", text: generic, rating: 5 },
  { id: "r5", name: "Mashreef Ahamed", avatar: av("mashreef-ahamed"), team: "Product & Marketing", text: mashreef, rating: 5 },
  { id: "r6", name: "Zinia Sultana", avatar: av("zinia-sultana"), team: "Finance & Admin", text: zinia, rating: 5 },
  { id: "r7", name: "Jehana Mowla", avatar: av("jehana-mowla"), team: "Tech team", text: generic, rating: 5 },
  { id: "r8", name: "Adam Gwadar", avatar: av("adam-gwadar"), team: "Marketing team", text: generic, rating: 5 },
];
