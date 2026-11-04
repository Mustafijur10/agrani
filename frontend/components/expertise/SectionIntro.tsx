export default function SectionIntro({ id, title, description }: { id: string; title: string; description: string }) {
  return (
    <div className="max-w-[820px]">
      <h2 id={id} className="text-4xl font-normal leading-[1.2] text-[#051012] lg:text-[48px] dark:text-white">
        {title}
      </h2>
      <p className="mt-4 leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">{description}</p>
    </div>
  );
}
