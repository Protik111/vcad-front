import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

function ArrowGlyph({
  tone,
  className,
}: {
  tone: "navy" | "magenta";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform group-hover:translate-x-0.5",
        tone === "magenta" ? "h-18 w-18 bg-plum" : "h-18 w-18 bg-[#1a2160]",
        className,
      )}
    >
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3611 17.1284C12.3774 17.1436 12.8771 17.2702 13.4716 17.4065C14.0662 17.5429 14.5582 17.6335 14.5669 17.6084C14.617 17.3036 14.6624 16.9981 14.7033 16.692C14.8385 15.7298 15.1647 14.6073 15.5149 13.9047C16.6047 11.7164 18.5585 10.2676 20.9302 9.89018L21.5334 9.79527L21.5334 7.86109L20.9869 7.76946C17.4011 7.16836 15.0633 4.48691 14.6269 0.475636C14.5985 0.213818 14.5647 -3.04613e-07 14.5505 -3.05233e-07C14.4305 -3.10478e-07 12.4265 0.482181 12.3884 0.520363C12.3611 0.548727 12.3818 0.79309 12.4342 1.06582C13.0134 4.08218 14.6738 6.53673 16.8284 7.56436L17.3444 7.81091L6.7189 7.82945L-6.06481e-06 7.84145L-6.15035e-06 9.79855L6.73636 9.81055L17.3367 9.83018L16.6844 10.1607C14.9924 11.0182 13.6516 12.7004 12.8629 14.9575C12.6382 15.6011 12.2989 17.0662 12.3611 17.1284Z"
          fill="#EBECF3"
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
  const isExpanded = variant === "expanded";

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn("group relative block", className)}
    >
      <div
        className={cn(
          "absolute inset-0 flex overflow-hidden rounded-card border border-border/60 transition-colors",
          isExpanded ? "group-hover:border-magenta" : "group-hover:border-white/40",
        )}
        style={{
          maskImage:
            "radial-gradient(circle 52px at calc(100% - 20px) calc(100% - 20px), transparent 52px, white 53px)",
          WebkitMaskImage:
            "radial-gradient(circle 52px at calc(100% - 20px) calc(100% - 20px), transparent 52px, white 53px)",
        }}
      >
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {isExpanded ? (
          <>
            {/* Multi-stop gradient: solid navy band at bottom fading to transparent at top */}
            <div className="absolute inset-0 bg-linear-to-t from-deep from-5% via-deep/98 via-25% to-transparent" />
            <div className="relative mt-auto flex w-full flex-col gap-4 p-6 pr-16">
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
            </div>
          </>
        ) : (
          <>
            {/* Multi-stop gradient: solid navy band at bottom fading to transparent at top */}
            <div className="absolute inset-0 bg-linear-to-t from-deep from-5% via-deep/20 via-85% to-transparent" />
            <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-6 pr-16">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-card-title">
                  {course.title}
                </h3>
                <p className="mt-2 max-w-xs text-default text-pale-blue">
                  {course.description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <svg
        aria-hidden="true"
        className={cn(
          "absolute z-10 text-border/60 transition-colors",
          isExpanded ? "group-hover:text-magenta" : "group-hover:text-white/40",
        )}
        width={104}
        height={104}
        style={{ right: -32, bottom: -32 }}
        viewBox="0 0 104 104"
      >
        <circle
          cx="52"
          cy="52"
          r="51.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          pathLength={100}
          strokeDasharray="37.57 62.43"
          strokeDashoffset={56.28}
        />
      </svg>

      <ArrowGlyph
        tone={arrowTone}
        className="absolute -bottom-4 -right-4 z-10"
      />
    </Link>
  );
}

