import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

function ArrowGlyph({ tone }: { tone: "navy" | "magenta" }) {
  if (tone === "magenta") {
    return (
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-plum text-white shadow-lg transition-transform group-hover:translate-x-0.5"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
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

  // Navy tone — solid filled dark-navy circle for overlay cards
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1a2160] text-white shadow-lg transition-transform group-hover:translate-x-0.5"
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
export default function CourseCard({
  course,
  variant,
  className,
  imageSizes,
}: CourseCardProps) {
  const arrowTone = variant === "expanded" ? "magenta" : "navy";

  if (variant === "expanded") {
    return (
      <Link
        href={`/courses/${course.slug}`}
        className={cn(
          "group relative flex overflow-hidden rounded-card border border-border/60 hover:border-magenta",
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
        {/* Multi-stop gradient: solid navy band at bottom fading to transparent at top, so the photo stays visible behind the badges. */}
        <div className="absolute inset-0 bg-linear-to-t from-deep from-5% via-deep/98 via-25% to-transparent" />
        <div className="relative mt-auto flex w-full flex-col gap-4 p-6 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            <Badge tone="school">{course.school}</Badge>
            <Badge tone="school">{course.duration}</Badge>
          </div>
          <h3 className="text-card-title font-semibold text-white">
            {course.title}
          </h3>
          <p className="text-default text-pale-blue">{course.description}</p>
          <div className="mt-1">
            <p className="text-default font-semibold text-white">School:</p>
            <p className="text-default text-pale-blue">{course.school}</p>
          </div>
          <div className="mt-2 flex justify-end">
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
      {/* Multi-stop gradient: solid navy band at bottom fading to transparent at top */}
      <div className="absolute inset-0 bg-linear-to-t from-deep from-5% via-deep/20 via-85% to-transparent" />
      <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-card-title">
            {course.title}
          </h3>
          <p className="mt-2 max-w-xs text-default text-pale-blue">
            {course.description}
          </p>
        </div>
        <ArrowGlyph tone={arrowTone} />
      </div>
    </Link>
  );
}
