import type { Course } from "@/types/course";
import Container from "@/components/ui/Container";
import InfoIcon, { type InfoIconName } from "@/components/ui/InfoIcon";

interface CourseInfoGridProps {
  course: Course;
}

/**
 * "Course Information" section: six at-a-glance facts, rendered from
 * the course's `keyDetails` (falling back to top-level fields where a
 * dedicated one doesn't exist, e.g. duration/school).
 */
export default function CourseInfoGrid({ course }: CourseInfoGridProps) {
  const details = course.keyDetails;

  const facts: { icon: InfoIconName; label: string; value: string }[] = [
    { icon: "calendar", label: "Start Date", value: details?.startDate ?? "Contact admissions" },
    { icon: "clock", label: "Duration", value: course.duration },
    { icon: "briefcase", label: "Study Mode", value: details?.studyMode ?? "Full Time" },
    { icon: "pin", label: "Locations", value: details?.location ?? course.school },
    { icon: "tag", label: "Tuition Fee (UK)", value: details?.tuitionFee ?? "Contact admissions" },
    { icon: "award", label: "Awarding Body", value: details?.awardingBody ?? course.school },
  ];

  return (
    <section id="overview" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Course Information</h2>
          <p className="mt-3 text-default text-pale-blue">
            Everything you need to know about this course at a glance
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col items-center gap-3 rounded-card border border-border/60 bg-card px-6 py-9 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-white">
                <InfoIcon name={fact.icon} />
              </span>
              <dt className="text-default font-semibold text-white">{fact.label}</dt>
              <dd className="text-default text-pale-blue">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
