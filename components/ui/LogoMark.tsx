interface LogoMarkProps {
  size?: number;
  className?: string;
}

/**
 * The abstract VCAD diamond mark — two overlapping triangles in the
 * accent pink/cyan pair. Rendered inline so its colors always match
 * the design tokens instead of a static exported image.
 */
export default function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 1 25 14 14 14Z" fill="#00FFD2" />
      <path d="M14 14 25 14 14 27Z" fill="#FF379E" />
      <path d="M14 1 14 14 3 14Z" fill="#2262EE" />
      <path d="M3 14 14 14 14 27Z" fill="#E018E0" />
    </svg>
  );
}
