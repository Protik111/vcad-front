import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * "Course Specification" download row. Links to a real (placeholder)
 * PDF so the download is a genuine interaction rather than a dead link.
 */
export default function CourseSpecificationCTA() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-card border border-border/60 bg-card px-6 py-8 sm:flex-row sm:items-center sm:px-10">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-pink text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-lg font-semibold text-white">Course Specification</p>
              <p className="text-default text-pale-blue">
                Download the full course specification for detailed information.
              </p>
            </div>
          </div>

          <Button href="/documents/course-specification.pdf" arrow="outline">
            Download PDF
          </Button>
        </div>
      </Container>
    </section>
  );
}
