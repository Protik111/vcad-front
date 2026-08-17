import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import DecorativeRings from "@/components/ui/DecorativeRings";
import CoursesGalleryStrip from "./CoursesGalleryStrip";
import { courseGalleryImages } from "@/data/gallery";

/**
 * "Our Gallery" section: centered heading/copy above the interactive
 * course photo strip.
 */
export default function CoursesGallerySection() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 sm:py-28">
      {/* <DecorativeRings className="right-[-100px] top-0 h-96 w-96" /> */}

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>/Our Gallery</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-section">
            Degree Courses
          </h2>
          <p className="mt-4 text-default text-ice-blue">
            Join Victoria College of Arts and Design and experience exceptional
            teaching, cutting-edge facilities, and industry connections that
            prepare you for a rewarding creative career.
          </p>
        </div>
      </Container>

      <div className="relative mt-12 sm:mt-16 bg-[url('/images/cta-background.png')] bg-right bg-no-repeat bg-size-[405px]">
        <Container>
          <CoursesGalleryStrip images={courseGalleryImages} />
        </Container>
      </div>
    </section>
  );
}
