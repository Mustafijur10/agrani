import { Bot, PhoneCall } from "lucide-react";

const btn =
  "grid h-14 w-14 place-items-center rounded-full bg-white text-[#E8412C] shadow-[0_0_40px_rgba(240,88,39,0.25)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F05827]";

export default function FloatingActions() {
  return (
    <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-6">
      <button type="button" aria-label="Chat with us" className={btn}><Bot size={28} /></button>
      <a href="tel:+8809610944449" aria-label="Call us" className={btn}><PhoneCall size={26} /></a>
    </div>
  );
}
