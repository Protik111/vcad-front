import { cn } from "@/lib/cn";

const TONES = {
  pink: "bg-pink text-white",
  cyan: "bg-cyan text-base",
  magenta: "bg-magenta text-white",
  blue: "bg-blue text-white",
} as const;

interface TagProps {
  children: React.ReactNode;
  tone: keyof typeof TONES;
  rotate?: number;
  className?: string;
}

/**
 * Small rotated discipline chip layered over the hero photo collage
 * ("FASHION", "PHOTOGRAPHY", "GRAPHIC DESIGN", ...).
 */
export default function Tag({ children, tone, rotate = 0, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap rounded-badge px-3.5 py-1.5 text-micro font-bold uppercase tracking-[0.08em] shadow-lg",
        TONES[tone],
        className,
      )}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </span>
  );
}
