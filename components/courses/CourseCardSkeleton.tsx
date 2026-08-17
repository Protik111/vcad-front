import { cn } from "@/lib/cn";

/**
 * Skeleton placeholder matching a course card's proportions, used
 * while course data is loading.
 */
export default function CourseCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex animate-pulse flex-col justify-end gap-3 overflow-hidden rounded-card border border-border/60 bg-card-alt p-6",
        className,
      )}
    >
      <div className="h-5 w-3/4 rounded-chip bg-navy/70" />
      <div className="h-4 w-full rounded-chip bg-navy/50" />
      <div className="h-4 w-2/3 rounded-chip bg-navy/50" />
    </div>
  );
}
