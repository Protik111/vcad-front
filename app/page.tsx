import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import CoursesShowcase from "@/components/home/CoursesShowcase";
import QuoteSection from "@/components/home/QuoteSection";
import CampusesCarousel from "@/components/home/CampusesCarousel";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import PartnersSection from "@/components/home/PartnersSection";
import StoriesSection from "@/components/home/StoriesSection";
import CtaBanner from "@/components/shared/CtaBanner";
import { getCourses } from "@/data/courses";
import { campuses } from "@/data/campuses";
import { testimonials } from "@/data/testimonials";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "VCAD — Victoria College of Arts and Design",
  description:
    "Explore creative courses in fashion, graphic design, media and business at Victoria College of Arts and Design, London.",
};

export default function Home() {
  const courses = getCourses();

  return (
    <>
      <Hero />
      <CoursesShowcase courses={courses} />
      <QuoteSection />
      <CampusesCarousel campuses={campuses} />
      <TestimonialCarousel testimonials={testimonials} />
      <PartnersSection />
      <StoriesSection stories={stories} />
      <CtaBanner />
    </>
  );
}
