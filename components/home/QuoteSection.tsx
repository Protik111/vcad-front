import Image from "next/image";
import Container from "@/components/ui/Container";

/**
 * "A world where everyone has the opportunity to fulfil their
 * potential" — pull-quote section with a portrait image and a pair
 * of overlapping supporting images.
 */
export default function QuoteSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-8xl leading-none text-pink/25 sm:text-9xl"
            >
              &ldquo;
            </span>
            <h2 className="relative max-w-2xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-section">
              A world where{" "}
              <span className="bg-gradient-to-r from-pink to-magenta bg-clip-text text-transparent">
                everyone has the opportunity
              </span>{" "}
              to fulfil their potential
            </h2>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card lg:mx-0">
            <Image
              src="/images/quote-portrait.webp"
              alt="A VCAD student working in the design studio"
              fill
              sizes="(min-width: 1024px) 28vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative mt-16 flex justify-center overflow-hidden sm:mt-24">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(420px,88vw)] w-[min(420px,88vw)] -translate-x-1/2 -translate-y-1/2 text-border/70"
          >
            <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" fill="none" />
          </svg>

          <div className="relative flex w-full max-w-2xl items-end gap-4 sm:gap-6">
            <div className="relative aspect-square w-[42%] -rotate-3 overflow-hidden rounded-card shadow-2xl">
              <Image
                src="/images/quote-craft-1.webp"
                alt="A VCAD student sketching a new design concept"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative -ml-8 aspect-[4/3] w-[58%] translate-y-6 rotate-2 overflow-hidden rounded-card shadow-2xl sm:-ml-10">
              <Image
                src="/images/quote-craft-2.webp"
                alt="VCAD fashion students working together on a garment"
                fill
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
