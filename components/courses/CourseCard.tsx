import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

function ArrowGlyph({ tone }: { tone: "navy" | "magenta" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform group-hover:translate-x-0.5",
        tone === "magenta"
          ? "h-14 w-14 bg-gradient-to-br from-magenta to-pink"
          : "h-11 w-11 bg-navy",
      )}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 8h9M8 3.5 12.5 8 8 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

interface CourseCardProps {
  course: Course;
  variant: "feature" | "secondary" | "expanded";
  className?: string;
  /** `sizes` passed to next/image; tune per grid column width. */
  imageSizes: string;
}

/**
 * A single course grid cell. "feature" and "secondary" are full-bleed
 * photo cards with the title/description overlaid on a gradient
 * scrim; "expanded" splits into a photo top and a solid info panel
 * with school/duration badges, matching the design's highlighted slot.
 */
export default function CourseCard({ course, variant, className, imageSizes }: CourseCardProps) {
  const arrowTone = variant === "expanded" ? "magenta" : "navy";

  if (variant === "expanded") {
    return (
      <Link
        href={`/courses/${course.slug}`}
        className={cn(
          "group flex flex-col overflow-hidden rounded-card border border-border/60 bg-card transition-colors hover:border-pink/60",
          className,
        )}
      >
        <div className="relative h-[45%] min-h-[220px] w-full shrink-0">
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            sizes={imageSizes}
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="school">{course.school}</Badge>
            <Badge tone="duration">{course.duration}</Badge>
          </div>
          <h3 className="text-card-title font-semibold text-white">{course.title}</h3>
          <p className="text-default text-pale-blue">{course.description}</p>
          <div className="mt-1">
            <p className="text-default font-semibold text-white">School:</p>
            <p className="text-default text-pale-blue">{course.school}</p>
          </div>
          <div className="mt-auto flex justify-end pt-2">
            <ArrowGlyph tone={arrowTone} />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(
        "group relative flex overflow-hidden rounded-card",
        className,
      )}
    >
      <Image
        src={course.image}
        alt={course.imageAlt}
        fill
        sizes={imageSizes}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent" />
      <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-card-title">{course.title}</h3>
          <p className="mt-2 max-w-xs text-default text-pale-blue">{course.description}</p>
        </div>
        <ArrowGlyph tone={arrowTone} />
      </div>
    </Link>
  );
}
