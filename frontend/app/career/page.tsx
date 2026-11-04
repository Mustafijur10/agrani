import type { Metadata } from "next";
import CareerHero from "@/components/career/CareerHero";
import EmployeeFeedback from "@/components/career/EmployeeFeedback";
import Openings from "@/components/career/Openings";
import Contact from "@/components/Contact";
import { currentOpenings, internshipOpenings, sectionCopy } from "@/components/career/careerData";

export const metadata: Metadata = {
  title: "Career | Agrani Technologies & Services Limited",
  description:
    "Join Agrani Technologies & Services Limited. Explore current job and internship openings in design and engineering.",
};

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <EmployeeFeedback />

      {/* White band behind both openings sections, as in the design */}
      <div className="bg-white py-4 lg:py-8 dark:bg-[#161818]">
        <Openings
          id="current-openings-title"
          title={sectionCopy.current.title}
          description={sectionCopy.current.description}
          jobs={currentOpenings}
        />
        <Openings
          id="internship-openings-title"
          title={sectionCopy.internship.title}
          description={sectionCopy.internship.description}
          jobs={internshipOpenings}
        />
      </div>

      <Contact />
    </>
  );
}
