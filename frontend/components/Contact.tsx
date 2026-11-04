"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { gradient, container } from "./ui";

const field =
  "mt-1 h-14 w-full rounded-xl border border-black/10 bg-[#FCFCFC] px-4 text-[#051012] outline-none focus:border-[#F05827] focus:ring-2 focus:ring-[#F05827]/30";

// One bordered box that holds several controls (used for the phone field).
const shell =
  "mt-1 flex h-14 w-full items-center rounded-xl border border-black/10 bg-[#FCFCFC] text-[#051012] focus-within:border-[#F05827] focus-within:ring-2 focus-within:ring-[#F05827]/30";

// Multi-stop mesh gradient matching the design: orange top-left, grey-blue top,
// cream top-right, strong orange right, sand bottom-left.
const mesh = [
  "radial-gradient(60% 50% at 0% 0%, #F4A84F 0%, transparent 70%)",
  "radial-gradient(40% 40% at 55% 0%, #B7C5CB 0%, transparent 75%)",
  "radial-gradient(45% 45% at 100% 0%, #EDE4D0 0%, transparent 75%)",
  "radial-gradient(45% 60% at 100% 75%, #F26A10 0%, transparent 75%)",
  "radial-gradient(55% 45% at 0% 100%, #F0DAA2 0%, transparent 75%)",
  "#EDBB84",
].join(",");

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className={`${container} grid items-center gap-10 py-20 lg:grid-cols-[1fr_1.45fr]`}>
      <div>
        <h2 className="text-4xl leading-tight text-[#051012] sm:text-5xl dark:text-white">
          We&apos;re just a message away—reach out and let&apos;s discuss how we can help.
        </h2>
        <p className="mt-8 max-w-[400px] leading-7 text-[#3C3C3C] dark:text-[#B9B9B9]">
          Tell us about your project and our team will get back to you with a personal quote.
        </p>
      </div>

      <div className="relative min-h-[720px] overflow-hidden rounded-[32px]" style={{ background: mesh }}>
        {/* dashed guide lines */}
        <span aria-hidden className="absolute inset-y-0 left-[15%] border-l border-dashed border-white/60" />
        <span aria-hidden className="absolute inset-y-0 right-[15%] border-l border-dashed border-white/60" />
        <span aria-hidden className="absolute inset-x-0 top-[6%] border-t border-dashed border-white/60" />
        <span aria-hidden className="absolute inset-x-0 top-[78%] border-t border-dashed border-white/60" />

        {/* stacked translucent cards behind the form */}
        <div aria-hidden className="absolute left-1/2 top-[8%] h-40 w-[46%] -translate-x-1/2 rounded-t-[32px] bg-white/45 backdrop-blur-sm" />
        <div aria-hidden className="absolute left-1/2 top-[14%] h-40 w-[62%] -translate-x-1/2 rounded-t-[32px] bg-white/65 backdrop-blur-sm" />

        <form
          onSubmit={onSubmit}
          className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2 rounded-t-[32px] bg-white p-6 pb-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:w-[70%] dark:bg-[#1f2121]"
        >
          <h3 className="text-2xl text-[#051012] sm:text-3xl dark:text-white">Request for Personal Quote</h3>
          <div className="mt-4 grid gap-4 text-sm text-[#3C3C3C] sm:grid-cols-2 dark:text-[#B9B9B9]">
            <label>First name *<input name="firstName" required className={field} /></label>
            <label>Last name *<input name="lastName" required className={field} /></label>
            {/* Phone: ONE field = country code + number (matches the Figma) */}
            <div>
              <label htmlFor="contact-phone">Phone Number</label>
              <div className={shell}>
                <div className="relative h-full shrink-0 border-r border-black/10">
                  <select
                    name="dial"
                    aria-label="Country code"
                    defaultValue="+880"
                    className="h-full w-[92px] cursor-pointer appearance-none rounded-l-xl bg-transparent pl-4 pr-8 outline-none"
                  >
                    {["+880", "+971", "+91", "+1", "+44"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <ChevronDown aria-hidden size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
                </div>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  className="h-full min-w-0 flex-1 bg-transparent px-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-city">City</label>
              <div className="relative">
                <select id="contact-city" name="city" defaultValue="" className={`${field} cursor-pointer appearance-none pr-10`}>
                  <option value="" disabled />
                  {["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna"].map((c) => <option key={c}>{c}</option>)}
                </select>
                <ChevronDown aria-hidden size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
              </div>
            </div>
            <label className="sm:col-span-2">Message *
              <textarea name="message" required rows={4} className={`${field} h-32 resize-none py-3`} />
            </label>
          </div>
          <div className="mt-8 text-center">
            <button disabled={status === "sending"} className={`${gradient} rounded-full px-10 py-3.5 font-semibold text-white disabled:opacity-60`}>
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            <p role="status" className="mt-3 text-sm text-[#3C3C3C] dark:text-[#B9B9B9]">
              {status === "sent" && "Thanks! We'll be in touch soon."}
              {status === "error" && "Couldn't send your message. Please try again."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
