export type IconItem = { id: string; title: string; icon: string };

export type TeamRole = IconItem & {
  description: string;
  /** Optional small line pinned to the card bottom (the Figma has a near-invisible "Stack: Full-Stack"). */
  stack?: string;
};

export type TechGroup = IconItem & {
  tags: string[];
  /** "filled" = orange chips (default), "outline" = white chips with a border (Database card) */
  chip?: "filled" | "outline";
};

export type InfoItem = IconItem & {
  subtitle: string;
  points: string[];
};

// TODO: the hero copy below is copied from the Blog page in the Figma. Replace with real copy.
export const hero = {
  pill: "Our Expertise",
  title: "Real-World Solutions",
  description:
    "Stories & Insights That Sparks Ideas: From tech updates to business tips, explore our latest blogs that are sure to spark new ideas and fuel your growth.",
};

// ───────────── Technical Team ─────────────
export const teamIntro = {
  title: "Technical Team",
  description: "Agrani's greatest asset is its people. The company employs over 100 professionals including",
};

// TODO: each role needs its own description (Figma repeats one placeholder).
const roleText =
  "We build custom web and mobile applications, ERP systems, e-commerce platforms, and more, tailored to your specific business needs.";

const t = (id: string, title: string, icon: string): TeamRole => ({
  id,
  title,
  icon: `/expertise/team/${icon}.png`,
  description: roleText,
});

export const team: TeamRole[] = [
  t("software-engineers", "Software Engineers", "software-engineers"),
  t("system-architects", "System Architects", "system-architects"), // Figma spells it "Archittects"
  t("database-experts", "Database Experts", "database-experts"),
  t("ui-ux-designer", "UI/UX Designer", "ui-ux-designer"),
  t("qa-test-engineers", "QA & Test Engineers", "qa-test-engineers"),
  t("security-experts", "Security Experts", "security-experts"),
  t("business-analysts", "Business Analysts", "business-analysts"),
  t("project-managers", "Project Managers", "project-managers"),
  t("support-engineers", "Support Engineers", "support-engineers"),
];

// ───────────── Technological Expertise ─────────────
export const techIntro = {
  title: "Technological Expertise",
  description: "We work with a wide range of technologies and platforms including",
};

const tech = (id: string, title: string, tags: string[], chip?: "outline"): TechGroup => ({
  id,
  title,
  tags,
  chip,
  icon: `/expertise/tech/${id}.png`,
});

export const techGroups: TechGroup[] = [
  tech("language", "Language", ["Java", "Python", "PHP", "JavaScript", ".Net"]),
  tech("frameworks", "Frameworks", ["Laravel", "Spring Boot", "Angular", "Django", "CodeIgniter"]),
  tech("database", "Database", ["MySQL", "PostgreSQL", "Oracle", "MongoDB"], "outline"),
  // TODO: Figma lists "JavaScript" under Cloud, which looks like a copy/paste slip. Confirm the real list.
  tech("cloud", "Cloud", ["AWS", "Azure", "GCP", "JavaScript"]),
  tech("devops", "DevOps", ["Docker", "Jenkins", "Git", "Kubernetes"]),
  tech("security", "Security", ["SSL", "OAuth", "Firewalls", "Pen Testing"]),
  tech("others", "Others", ["REST API", "Microservices", "AI/ML"]),
];

// ───────────── Infrastructure accordion ─────────────
export const infraIntro = {
  title: "Our Infrastructure & Facilities, Security & Compliance, Partnership & Affiliations, Corporate Social Responsibility",
  // TODO: placeholder paragraph from the Figma.
  description:
    "Thorough and comprehensive cleaning of all rooms, including inside cabinets and closets details appliance cleaning, ensuring the entire space is absolutely spotless",
};

const sub = "Secure development labs & server rooms";
// TODO: only the first item has real bullet points in the Figma. The others are stubs.
const soon = ["Details coming soon."];

export const infraItems: InfoItem[] = [
  {
    id: "infrastructure",
    title: "Infrastructure & Facilities",
    subtitle: sub,
    icon: "/expertise/infra/infrastructure.png",
    points: [
      "Headquarter located in a prime location of the capital.",
      "Secure development labs & server rooms",
      "Comprehensive customer support & training center",
      "24/7 monitoring and IT infrastructure management systems",
    ],
  },
  { id: "security", title: "Security & Compliance", subtitle: sub, icon: "/expertise/infra/security-compliance.png", points: soon },
  { id: "partnership", title: "Partnership &Affiliations", subtitle: sub, icon: "/expertise/infra/partnership.png", points: soon },
  { id: "csr", title: "Corporate Social Responsibility (CSR)", subtitle: sub, icon: "/expertise/infra/csr.png", points: soon },
];
