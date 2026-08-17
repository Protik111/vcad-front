import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import DecorativeRings from "@/components/ui/DecorativeRings";

/**
 * Courses page hero: breadcrumb, centered heading/copy, and two
 * decorative flanking photos.
 */
export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12">
      <DecorativeRings className="right-[-80px] top-10 h-72 w-72 sm:h-96 sm:w-96" />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <div className="hidden w-full items-start justify-between md:flex">
            <div className="relative -mt-2 h-28 w-32 shrink-0 overflow-hidden shadow-2xl lg:h-32 lg:w-36">
              <Image
                src="/images/courses-hero-left.jpg"
                alt=""
                fill
                sizes="210px"
                className="object-cover"
              />
            </div>
            <div className="relative mt-4 shrink-0 overflow-hidden shadow-2xl lg:h-44 lg:w-32">
              <Image
                src="/images/story-life-borough.jpg"
                alt=""
                fill
                sizes="195px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="-mt-16 flex flex-col items-center gap-6 md:-mt-24">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Courses" }]}
            />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-page-title">
              Explore Our Courses
            </h1>
            <p className="max-w-4xl text-body text-pale-blue">
              Join Victoria College of Arts and Design and experience
              exceptional teaching, cutting-edge facilities, and industry
              connections that prepare you for a rewarding creative career.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
