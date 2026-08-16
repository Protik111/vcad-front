import { cn } from "@/lib/cn";

interface CircleArrowButtonProps {
  direction: "prev" | "next";
  onClick?: () => void;
  disabled?: boolean;
  /** Filled = magenta/pink gradient (primary), outline = bordered navy. */
  variant?: "filled" | "outline";
  label: string;
}

/**
 * Standalone circular prev/next control used by the campus, testimonial
 * and stories carousels. 57px radius per the design's circular-arrow token.
 */
export default function CircleArrowButton({
  direction,
  onClick,
  disabled,
  variant = "outline",
  label,
}: CircleArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-arrow border transition-colors disabled:cursor-not-allowed disabled:opacity-40",
        variant === "filled"
          ? "border-transparent bg-gradient-to-br from-magenta to-pink text-white hover:brightness-110"
          : "border-border bg-card-alt text-white hover:border-pink",
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M4 9h10M10 4.5 14.5 9 10 13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
