import Container from "@/components/ui/Container";
import CourseCardSkeleton from "@/components/courses/CourseCardSkeleton";

/**
 * Route-level loading UI for /courses. The design doesn't specify a
 * loading state, so this mirrors the eventual grid's proportions with
 * a dark/navy skeleton to avoid layout shift and keep the loading
 * screen visually consistent with the rest of the app.
 */
export default function CoursesLoading() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading courses">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto h-10 w-64 animate-pulse rounded-chip bg-card-alt" />
        <div className="mx-auto mt-4 h-6 w-96 max-w-full animate-pulse rounded-chip bg-card-alt" />
      </Container>

      <Container className="pb-20 sm:pb-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <CourseCardSkeleton className="aspect-[4/5] lg:aspect-[41/71]" />
          <div className="flex flex-col gap-6">
            <CourseCardSkeleton className="aspect-[4/3] lg:aspect-[41/34]" />
            <CourseCardSkeleton className="aspect-[4/3] lg:aspect-[41/34]" />
          </div>
          <CourseCardSkeleton className="aspect-[4/5] lg:aspect-[41/71]" />
        </div>
      </Container>
      <span className="sr-only">Loading courses…</span>
    </div>
  );
}
