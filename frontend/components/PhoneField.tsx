"use client";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Code = "BD" | "AE" | "IN" | "US" | "GB";

// Flags are inline SVG (3:2), cropped to a circle, so there is nothing to export from Figma.
const flags: Record<Code, React.ReactNode> = {
  BD: (
    <>
      <rect width="30" height="20" fill="#006A4E" />
      <circle cx="13.5" cy="10" r="6" fill="#F42A41" />
    </>
  ),
  AE: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#00732F" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="7.5" height="20" fill="#FF0000" />
    </>
  ),
  IN: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth=".5" />
      <circle cx="15" cy="10" r=".5" fill="#000080" />
    </>
  ),
  US: (
    <>
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} y={i * 2 * 1.538} width="30" height="1.538" fill="#B22234" />
      ))}
      <rect width="13.5" height="10.77" fill="#3C3B6E" />
      {[2.5, 5.4, 8.3].flatMap((y) => [7, 9.5, 12].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r=".55" fill="#fff" />))}
    </>
  ),
  GB: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="3.4" />
    </>
  ),
};

const countries: { code: Code; name: string; dial: string }[] = [
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
];

function Flag({ code, className }: { code: Code; className: string }) {
  return (
    <span aria-hidden className={`inline-block shrink-0 overflow-hidden rounded-full ${className}`}>
      <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="block h-full w-full">
        {flags[code]}
      </svg>
    </span>
  );
}

type Props = { id?: string; label?: string };

export default function PhoneField({ id = "contact-phone", label = "Phone Number" }: Props) {
  const uid = useId();
  const listId = `${uid}-list`;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const current = countries[selected];

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // move focus into the list when it opens
  useEffect(() => {
    if (open) list.current?.focus();
  }, [open]);

  function choose(i: number) {
    setSelected(i);
    setOpen(false);
    button.current?.focus();
  }

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % countries.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + countries.length) % countries.length); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(countries.length - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(active); }
    else if (e.key === "Escape") { e.preventDefault(); setOpen(false); button.current?.focus(); }
    else if (e.key === "Tab") setOpen(false);
  }

  return (
    <div ref={root} className="relative">
      <label htmlFor={id}>{label}</label>

      {/* One field: [flag ▾] [number]. No divider. */}
      <div className="mt-1 flex h-14 w-full items-center rounded-xl border border-black/10 bg-[#FCFCFC] text-[#051012] focus-within:border-[#F05827] focus-within:ring-2 focus-within:ring-[#F05827]/30">
        <button
          ref={button}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={`Country code: ${current.name} ${current.dial}`}
          onClick={() => { setActive(selected); setOpen((o) => !o); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); setActive(selected); setOpen(true); }
          }}
          className="flex h-full shrink-0 items-center gap-2 rounded-l-xl pl-3 pr-1 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F05827]/40"
        >
          <Flag code={current.code} className="h-8 w-8" />
          <ChevronDown aria-hidden size={16} className={`text-[#6B6B6B] transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        <input
          id={id}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          className="h-full min-w-0 flex-1 bg-transparent px-3 outline-none"
        />
        {/* sent with the form, same field name as before */}
        <input type="hidden" name="dial" value={current.dial} />
      </div>

      {open && (
        <ul
          ref={list}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-label="Country code"
          aria-activedescendant={`${uid}-opt-${active}`}
          onKeyDown={onListKey}
          className="absolute left-0 top-full z-20 mt-2 max-h-64 w-72 max-w-[calc(100vw-2.5rem)] overflow-auto rounded-xl border border-black/10 bg-white p-1 text-[#051012] shadow-lg outline-none"
        >
          {countries.map((c, i) => (
            <li
              key={c.code}
              id={`${uid}-opt-${i}`}
              role="option"
              aria-selected={i === selected}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 ${i === active ? "bg-black/5" : ""}`}
            >
              <Flag code={c.code} className="h-6 w-6" />
              <span className="flex-1 truncate">{c.name}</span>
              <span className="text-[#6B6B6B]">{c.dial}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
