"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sun, Moon, ChevronDown, Menu, X } from "lucide-react";
import { GradientButton, container } from "./ui";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product and Services", href: "/services" },
  { label: "Others", href: "#", children: [
    { label: "Blog", href: "/blog" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Our Expertise", href: "/our-expertise" },
    { label: "Customer Experience", href: "/customer-experience" },
    { label: "Case Studies", href: "/case-studies" },
  ]},
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const setTheme = (dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };

  return (
    <header className="relative z-30 pb-6 pt-3 lg:pb-12">
      <div className={`${container} flex items-center justify-between gap-4`}>
        <Link href="/" aria-label="Agrani home">
          <Image src="/logo.svg" alt="Agrani Technologies & Services Limited" width={180} height={52} priority />
        </Link>

        <nav aria-label="Main" className="hidden rounded-full bg-white/70 px-4 py-3 backdrop-blur lg:flex dark:bg-white/10">
          <ul className="flex items-center gap-8 text-[15px] text-[#3C3C3C] dark:text-[#B9B9B9]">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? path === "/"
                  : (l.href !== "#" && path.startsWith(l.href)) || !!l.children?.some((c) => path.startsWith(c.href));
              return (
                <li key={l.label} className="group relative">
                  <Link href={l.href} className={`flex items-center gap-1.5 hover:text-[#F05827] ${active ? "font-medium text-[#F05827]" : ""}`}>
                    {active && <span className="h-2 w-2 rounded-full bg-[#F05827]" />}
                    {l.label}
                    {l.children && <ChevronDown size={16} />}
                  </Link>
                  {l.children && (
                    <ul className="invisible absolute left-0 top-full min-w-44 rounded-xl bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:bg-[#161818]">
                      {l.children.map((c) => (
                        <li key={c.label}><Link href={c.href} className="block whitespace-nowrap rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">{c.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <GradientButton href="/contact" className="hidden sm:inline-flex">Get In Touch</GradientButton>
          <div className="flex rounded-full bg-[#161818] p-1" role="group" aria-label="Theme">
            <button onClick={() => setTheme(false)} aria-label="Light theme" className="grid h-10 w-10 place-items-center rounded-full text-white dark:bg-transparent [html:not(.dark)_&]:bg-white/20"><Sun size={18} /></button>
            <button onClick={() => setTheme(true)} aria-label="Dark theme" className="grid h-10 w-10 place-items-center rounded-full text-white dark:bg-white/20"><Moon size={18} /></button>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className={`${container} mt-3 rounded-2xl bg-white p-4 lg:hidden dark:bg-[#161818]`}>
          <ul className="space-y-3">
            {links.flatMap((l) => l.children ?? [l]).map((l) => (
              <li key={l.label}><Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
