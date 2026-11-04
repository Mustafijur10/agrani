import Image from "next/image";

type Props = { src: string; /** white circle (used on dark / orange backgrounds) */ onDark?: boolean };

export default function IconBadge({ src, onDark = false }: Props) {
  return (
    <span
      className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${
        onDark ? "bg-white" : "bg-[#F6E7E0] dark:bg-white/10"
      }`}
    >
      <Image src={src} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
    </span>
  );
}
