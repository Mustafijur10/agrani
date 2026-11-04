import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 22, rest: Omit<P, "size">) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const, "aria-hidden": true, ...rest,
});

export const Facebook = ({ size, ...r }: P) => (
  <svg {...base(size, r)}><path d="M17 3h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
);
export const Instagram = ({ size, ...r }: P) => (
  <svg {...base(size, r)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>
);
export const Linkedin = ({ size, ...r }: P) => (
  <svg {...base(size, r)}><path d="M6 9v9M6 6v.01M10 18V9M10 13a4 4 0 0 1 8 0v5" /></svg>
);
export const Youtube = ({ size, ...r }: P) => (
  <svg {...base(size, r)}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></svg>
);
