import Image from "next/image";
import type { Course } from "@/types/course";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

/**
 * Course detail hero: breadcrumb, title, overview copy and a static
 * three-image gallery row.
 */
export default function CourseDetailHero({ course }: { course: Course }) {
  return (
    <section className="pt-8 sm:pt-12 bg-[url('/images/cta-background.png')] bg-top-right bg-no-repeat bg-size-[505px]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
              { label: course.title },
            ]}
          />
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-page-title">
            {course.title}
          </h1>
          {course.overview && (
            <p className="mx-auto mt-5 max-w-3xl text-body text-pale-blue">
              {course.overview}
            </p>
          )}
        </div>

        {course.gallery && course.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {course.gallery.map((src, index) => (
              <div
                key={src + index}
                className={`relative overflow-hidden ${index === 1 ? "aspect-[4/3]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  // sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
