import IconBadge from "./IconBadge";
import SectionIntro from "./SectionIntro";
import { techGroups, techIntro } from "./expertiseData";

const chipFilled = "bg-[#F05827] text-white";
const chipOutline = "border border-black/15 bg-white text-[#051012] dark:border-white/20 dark:bg-transparent dark:text-white";

export default function TechStack() {
  return (
    <section aria-labelledby="tech-title">
      <SectionIntro id="tech-title" title={techIntro.title} description={techIntro.description} />

      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {techGroups.map((g) => (
          <li key={g.id} className="flex">
            <article className="min-h-[240px] w-full rounded-[32px] border border-black/5 bg-white p-8 lg:min-h-[308px] dark:border-white/10 dark:bg-[#1f2121]">
              <IconBadge src={g.icon} />
              <h3 className="mt-5 text-2xl font-normal leading-8 text-[#051012] dark:text-white">{g.title}</h3>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${g.title} technologies`}>
                {g.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium leading-4 ${g.chip === "outline" ? chipOutline : chipFilled}`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
