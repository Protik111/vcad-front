import Link from "next/link";
import { cn } from "@/lib/cn";

interface BaseButtonProps {
  children: React.ReactNode;
  /** Trailing arrow-in-circle icon, filled solid or outlined. */
  arrow?: "filled" | "outline" | "none";
  className?: string;
}

type ButtonAsLink = BaseButtonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseButtonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "group inline-flex items-center gap-3 rounded-pill border border-pink py-1.5 pl-6 pr-1.5 text-default font-medium text-white transition-colors hover:bg-pink/10";

function ArrowIcon({ variant }: { variant: "filled" | "outline" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5",
        variant === "filled"
          ? "bg-gradient-to-br from-magenta to-pink text-white"
          : "border border-pink text-pink",
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

/**
 * Shared pill CTA button with a trailing circular arrow, used for
 * every primary call-to-action across the homepage (Explore Courses,
 * View Courses, Read Article, ...).
 */
export default function Button({
  children,
  arrow = "outline",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow !== "none" && <ArrowIcon variant={arrow} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, className)}
    >
      {content}
    </button>
  );
}
