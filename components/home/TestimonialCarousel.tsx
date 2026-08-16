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
              className="flex items-center gap-3"
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
        />

        <div className="mt-10 grid overflow-hidden rounded-card border border-border/60 bg-card sm:mt-14 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.7fr_1fr]">
          <div className="relative aspect-[4/3] sm:aspect-auto">
            <Image
              src={active.image}
              alt={`Portrait of ${active.name}`}
              fill
              sizes="(min-width: 640px) 35vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" className="text-pink">
              <path
                d="M0 30V17.6C0 7.9 6.4 1.3 16.7 0v6.3c-5.4 1.4-8.1 5-8.1 10h8.1V30H0Zm23.3 0V17.6c0-9.7 6.4-16.3 16.7-17.6v6.3c-5.4 1.4-8.1 5-8.1 10h8.1V30H23.3Z"
                fill="currentColor"
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
