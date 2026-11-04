import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Leadership from "@/components/about/Leadership";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Testimonials from "@/components/about/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Us | Agrani Technologies & Services Limited",
  description:
    "Learn about Agrani Technologies & Services Limited: our story since 2013, our leadership team, and the mission, vision and values behind our work.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Leadership />
      <MissionVisionValues />
      <Testimonials />
      <Contact />
    </>
  );
}
