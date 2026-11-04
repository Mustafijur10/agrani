// All career-page content lives here so it can later be swapped for CMS / API data.

export type Job = {
  id: string;
  department: string;
  title: string;
  /** Small meta tags shown under the title */
  tags: string[];
  salary: { min: number; max: number; unit?: string };
  /** Optional custom apply link. Defaults to a mailto with the job title as subject. */
  applyHref?: string;
};

export type Feedback = {
  name: string;
  avatar: string;
  /** Left footer label (only shown on the featured/dark card in the design) */
  role?: string;
  /** Right footer label */
  team: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  featured?: boolean;
};

// TODO: replace the placeholder section descriptions below with real copy from the Figma/content team.
export const sectionCopy = {
  hero: {
    title: "Where technology meets opportunity",
    description:
      "Thorough and comprehensive cleaning of all rooms, including inside cabinets and closets details appliance cleaning, ensuring the entire space is absolutely spotless",
  },
  feedback: {
    title: "Employees Feedback",
    description:
      "Thorough and comprehensive cleaning of all rooms, including inside cabinets and closets details appliance cleaning, ensuring the entire space is absolutely spotless",
  },
  current: {
    title: "Current Openings",
    description:
      "Thorough and comprehensive cleaning of all rooms, including inside cabinets and closets details appliance cleaning, ensuring the entire space is absolutely spotless",
  },
  internship: {
    title: "Internship Openings",
    description:
      "Thorough and comprehensive cleaning of all rooms, including inside cabinets and closets details appliance cleaning, ensuring the entire space is absolutely spotless",
  },
};

// TODO: the review copy below is placeholder text from the Figma (mentions "Nagorik" and a calendar app).
// Replace with real Agrani employee feedback before launch.
const generic =
  "Working at Nagorik Technologies Limited has been an incredibly rewarding experience. An Inspiring and Supportive Work Environment – Truly a Great Place to Grow!";

export const feedbacks: Feedback[] = [
  {
    name: "Mashreef Ahamed",
    avatar: "/career/avatars/mashreef-ahamed.jpg",
    role: "Executive",
    team: "Product & Marketing",
    text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
    rating: 5,
    featured: true,
  },
  {
    name: "Zinia Sultana",
    avatar: "/career/avatars/zinia-sultana.jpg",
    team: "Finance & Admin",
    text: "Working at Nagorik has been an incredible experience, marked by an innovative work culture and a supportive team that inspires growth...",
    rating: 5,
  },
  {
    name: "Jehana Mowla",
    avatar: "/career/avatars/jehana-mowla.jpg",
    team: "Tech team",
    text: generic,
    rating: 5,
  },
  {
    name: "Adam Gwadar",
    avatar: "/career/avatars/adam-gwadar.jpg",
    team: "Marketing team",
    text: generic,
    rating: 5,
  },
];

const base = ["Ontime", "Fulltime"];

// Set to [] to preview the "no openings" empty state (Figma frame 18).
export const currentOpenings: Job[] = [
  { id: "artist-designer", department: "Design", title: "Artist/Designer", tags: [...base, "Entry Level"], salary: { min: 25000, max: 60000 } },
  { id: "ui-ux-designer", department: "Design", title: "UI/UX Designer", tags: base, salary: { min: 25000, max: 60000 } },
  { id: "php-developer", department: "Engineering", title: "PHP Developer", tags: base, salary: { min: 25000, max: 60000 } },
  { id: "full-stack-developer", department: "Engineering", title: "Full-Stack Developer", tags: [...base, "Senior Level"], salary: { min: 25000, max: 60000 } },
];

export const internshipOpenings: Job[] = [
  { id: "intern-artist-designer", department: "Design", title: "Artist/Designer", tags: [...base, "Entry Level"], salary: { min: 5000, max: 10000 } },
  { id: "intern-ui-ux-designer", department: "Design", title: "UI/UX Designer", tags: base, salary: { min: 5000, max: 10000 } },
  { id: "intern-php-developer", department: "Engineering", title: "PHP Developer", tags: base, salary: { min: 5000, max: 10000 } },
  { id: "intern-full-stack-developer", department: "Engineering", title: "Full-Stack Developer", tags: [...base, "Senior Level"], salary: { min: 5000, max: 10000 } },
];
