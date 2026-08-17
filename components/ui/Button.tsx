import Link from "next/link";
import { cn } from "@/lib/cn";

interface BaseButtonProps {
  children: React.ReactNode;
  /** Trailing arrow-in-circle icon, filled solid or outlined. Ignored (always a plain arrow) when variant="solid". */
  arrow?: "filled" | "outline" | "none";
  /** "outline" = pink border, circular arrow (default CTA style). "solid" = filled navy pill with a plain arrow (header "Apply Now" style). */
  variant?: "outline" | "solid";
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

const VARIANT_STYLES = {
  outline:
    "border border-pink py-1.5 pl-6 pr-1.5 hover:bg-pink/10",
  solid: "border border-transparent bg-navy px-6 py-3 hover:brightness-110",
} as const;

const baseStyles =
  "group inline-flex items-center gap-3 rounded-pill text-default font-medium text-white transition-colors";

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

function PlainArrow() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 transition-transform group-hover:translate-x-0.5"
    >
      <path
        d="M3.5 8h9M8 3.5 12.5 8 8 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Shared pill CTA button, used for every primary call-to-action across
 * the site (Explore Courses, View Courses, Read Article, Apply Now, ...).
 */
export default function Button({
  children,
  arrow = "outline",
  variant = "outline",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {variant === "solid" ? (
        <PlainArrow />
      ) : (
        arrow !== "none" && <ArrowIcon variant={arrow} />
      )}
    </>
  );

  const classes = cn(baseStyles, VARIANT_STYLES[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
