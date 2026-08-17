import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseGrid from "@/components/courses/CourseGrid";
import CoursesGallerySection from "@/components/courses/CoursesGallerySection";
import CtaBanner from "@/components/shared/CtaBanner";
import { getCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Explore Our Courses",
  description:
    "Browse degree courses at Victoria College of Arts and Design, covering fashion, graphic design, media and business.",
};

export default function CoursesPage() {
  const courses = getCourses();

  return (
    <>
      <CoursesHero />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            label="All Courses"
            title="Degree Courses"
            aside={
              <p className="text-default text-pale-blue">
                Join Victoria College of Arts and Design and experience
                exceptional teaching, cutting-edge facilities, and industry
                connections that prepare you for a rewarding creative career.
              </p>
            }
          />

          <div className="mt-12">
            <CourseGrid courses={courses} />
          </div>
        </Container>
      </section>

      <CoursesGallerySection />
      <CtaBanner />
    </>
  );
}
