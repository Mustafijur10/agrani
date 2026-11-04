import { container } from "./ui";

const stats = [
  { value: "10+", label: "Years in Operation" },
  { value: "100+", label: "Professionals" },
  { value: "4", label: "Sectors Served" },
  { value: "Nationwide", label: "Reach" },
];

export default function Stats() {
  return (
    <section className={`${container} py-8`}>
      <dl className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl bg-[#051012] px-6 py-4 text-white">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-[40px] font-normal leading-tight">{s.value}</dd>
            <p className="text-sm text-white/80" aria-hidden>{s.label}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
