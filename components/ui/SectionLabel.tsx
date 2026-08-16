import { cn } from "@/lib/cn";

/**
 * Small pink uppercase eyebrow used above every homepage section
 * heading ("OUR COURSES", "OUR CAMPUSES", "STORIES", ...).
 */
export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-meta font-semibold uppercase tracking-[0.16em] text-pink",
        className,
      )}
    >
      {children}
    </p>
  );
}
