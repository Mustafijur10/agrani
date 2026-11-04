import IconBadge from "./IconBadge";
import SectionIntro from "./SectionIntro";
import { team, teamIntro } from "./expertiseData";

export default function TechnicalTeam() {
  return (
    <section aria-labelledby="team-title">
      <SectionIntro id="team-title" title={teamIntro.title} description={teamIntro.description} />

      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {team.map((r) => (
          <li key={r.id} className="flex">
            <article className="flex min-h-[300px] w-full flex-col rounded-[32px] border border-black/5 bg-white p-8 lg:min-h-[360px] dark:border-white/10 dark:bg-[#1f2121]">
              <IconBadge src={r.icon} />
              <h3 className="mt-5 text-2xl font-normal leading-8 text-[#051012] dark:text-white">{r.title}</h3>
              <p className="mt-4 max-w-[344px] text-sm leading-5 text-[#3C3C3C] dark:text-[#B9B9B9]">{r.description}</p>
              {r.stack && <p className="mt-auto pt-6 text-sm text-[#8A8A8A]">{r.stack}</p>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
