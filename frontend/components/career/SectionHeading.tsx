type Props = {
  id: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
};

export default function SectionHeading({ id, title, description, as: Tag = "h2" }: Props) {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <Tag
        id={id}
        className="text-4xl font-normal leading-[1.2] text-[#051012] sm:text-[44px] lg:text-[48px] dark:text-white"
      >
        {title}
      </Tag>
      <p className="mx-auto mt-4 max-w-[820px] leading-6 text-[#3C3C3C] dark:text-[#B9B9B9]">
        {description}
      </p>
    </div>
  );
}
