import ReviewCard from "./ReviewCard";
import { reviews } from "./customerData";

export default function ReviewsGrid() {
  return (
    <ul
      className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:max-w-[1152px] xl:grid-cols-[492px_492px] xl:justify-start xl:gap-x-[38px] xl:gap-y-[34px]"
      aria-label="Client reviews"
    >
      {reviews.map((r, i) => (
        // 0-based rows: items 2,3 (row 2) and 6,7 (row 4) are shifted right on desktop
        <li key={r.id} className={Math.floor(i / 2) % 2 === 1 ? "xl:translate-x-[130px]" : undefined}>
          <ReviewCard r={r} />
        </li>
      ))}
    </ul>
  );
}
