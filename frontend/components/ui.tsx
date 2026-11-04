import Link from "next/link";

export const gradient =
  "bg-[linear-gradient(90deg,#30140A_0%,#F05827_50%,#2F130B_100%)]";

export function GradientButton({
  href, children, className = "",
}: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`${gradient} inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05827] ${className}`}
    >
      {children}
    </Link>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-lg text-[#3C3C3C] dark:bg-white/10 dark:text-[#B9B9B9]">
      <span className="h-3 w-3 rounded-full bg-[#F05827]" />
      {children}
    </span>
  );
}

export const container = "mx-auto w-full max-w-[1440px] px-5 lg:px-0";
