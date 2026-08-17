import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

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
            <Image
              src={"/images/download.png"}
              alt={"Download"}
              width={90}
              height={90}
              // sizes={imageSizes}
              className="object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-white">
                Course Specification
              </p>
              <p className="text-default text-pale-blue">
                Download the full course specification for detailed information.
              </p>
            </div>
          </div>

          <Button href="/documents/course-specification.pdf" variant="solid">
            Download PDF
          </Button>
        </div>
      </Container>
    </section>
  );
}
