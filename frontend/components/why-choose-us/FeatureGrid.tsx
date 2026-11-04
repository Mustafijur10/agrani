import FeatureCard from "./FeatureCard";
import { features } from "./whyChooseData";

export default function FeatureGrid() {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[360px] lg:gap-2">
      {features.map((f) => (
        <li key={f.id} className={`flex ${f.className ?? ""}`}>
          {/* grid placement lives on the <li>; the card just fills it */}
          <FeatureCard f={{ ...f, className: undefined }} />
        </li>
      ))}
    </ul>
  );
}
