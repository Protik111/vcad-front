"use client";

import { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CircleArrowButton from "@/components/ui/CircleArrowButton";

/**
 * "Our students sharing their thoughts" testimonial carousel: one
 * quote card at a time, stepped through with the arrow controls
 * beside the section heading.
 */
export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Students Testimonial"
          title="Our students sharing their thoughts"
          aside={
            <div
              className="flex items-center gap-1"
              role="group"
              aria-label="Testimonial carousel controls"
            >
              <CircleArrowButton
                direction="prev"
                variant="outline"
                label="Previous testimonial"
                onClick={() => goTo(index - 1)}
              />
              <CircleArrowButton
                direction="next"
                variant="filled"
                label="Next testimonial"
                onClick={() => goTo(index + 1)}
              />
            </div>
          }
          className="min-w-5xl"
        />

        <div className="mt-10 grid gap-6 overflow-hidden   sm:mt-14 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.7fr_1fr]">
          <div className="relative aspect-[4/3] sm:aspect-auto">
            <Image
              src={active.image}
              alt={`Portrait of ${active.name}`}
              fill
              sizes="(min-width: 640px) 35vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14 border border-[#D9D9D9]">
            <svg
              width="67"
              height="51"
              viewBox="0 0 67 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 51V34.8095C0 30.4021 0.900538 25.9722 2.70161 21.5198C4.50269 17.0675 6.77655 12.9524 9.52319 9.1746C12.2698 5.39683 15.039 2.33863 17.8306 0L33.2298 7.8254C30.8884 11.7381 29.0649 15.8307 27.7591 20.1032C26.4983 24.3757 25.8905 29.2778 25.9355 34.8095V51H0ZM33.7702 51V34.8095C33.7702 30.4021 34.6707 25.9722 36.4718 21.5198C38.2729 17.0675 40.5467 12.9524 43.2933 9.1746C46.04 5.39683 48.8091 2.33863 51.6008 0L67 7.8254C64.6586 11.7381 62.835 15.8307 61.5292 20.1032C60.2685 24.3757 59.6606 29.2778 59.7056 34.8095V51H33.7702Z"
                fill="white"
                fillOpacity="0.2"
              />
            </svg>

            <p className="text-lead text-pale-blue">{active.quote}</p>
            <div>
              <p className="text-lg font-semibold text-white">{active.name}</p>
              <p className="text-default text-sky">{active.role}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
