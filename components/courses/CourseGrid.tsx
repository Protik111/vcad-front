import type { Course } from "@/types/course";
import CourseCard from "./CourseCard";
import EmptyCoursesState from "./EmptyCoursesState";

const CARD_IMAGE_SIZES = "(min-width: 1024px) 32vw, 100vw";

/**
 * The asymmetric course grid: a tall feature card, two stacked
 * secondary cards, and a tall expanded card with school/duration
 * badges — all rendered from shared course data. Any courses beyond
 * the first four render in a simple supporting grid so the page
 * degrades gracefully instead of hardcoding exactly four slots.
 */
export default function CourseGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <EmptyCoursesState />;
  }

  const [feature, secondary1, secondary2, expanded, ...remaining] = courses;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {feature && (
          <CourseCard
            course={feature}
            variant="feature"
            imageSizes={CARD_IMAGE_SIZES}
            className="aspect-[4/5] lg:aspect-[41/71]"
          />
        )}

        {(secondary1 || secondary2) && (
          <div className="flex flex-col gap-6">
            {secondary1 && (
              <CourseCard
                course={secondary1}
                variant="secondary"
                imageSizes={CARD_IMAGE_SIZES}
                className="aspect-[4/3] lg:aspect-[41/34]"
              />
            )}
            {secondary2 && (
              <CourseCard
                course={secondary2}
                variant="secondary"
                imageSizes={CARD_IMAGE_SIZES}
                className="aspect-[4/3] lg:aspect-[41/34]"
              />
            )}
          </div>
        )}

        {expanded && (
          <CourseCard
            course={expanded}
            variant="expanded"
            imageSizes={CARD_IMAGE_SIZES}
            className="aspect-[4/5] lg:aspect-[41/71]"
          />
        )}
      </div>

      {remaining.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remaining.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              variant="secondary"
              imageSizes="(min-width: 1024px) 32vw, 100vw"
              className="aspect-[4/3]"
            />
          ))}
        </div>
      )}
    </div>
  );
}
