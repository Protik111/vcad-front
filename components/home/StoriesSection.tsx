"use client";

import { useState } from "react";
import Image from "next/image";
import type { Story } from "@/data/stories";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CircleArrowButton from "@/components/ui/CircleArrowButton";
import Button from "@/components/ui/Button";

/**
 * "Our Stories" section: a single featured story stepped through
 * with the arrow controls beside the heading.
 */
export default function StoriesSection({ stories }: { stories: Story[] }) {
  const [index, setIndex] = useState(0);
  const active = stories[index];

  const goTo = (next: number) => {
    setIndex((next + stories.length) % stories.length);
  };

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Stories"
          title="Our Stories"
          aside={
            <div
              className="flex items-center gap-3"
              role="group"
              aria-label="Stories carousel controls"
            >
              <CircleArrowButton
                direction="prev"
                variant="outline"
                label="Previous story"
                onClick={() => goTo(index - 1)}
              />
              <CircleArrowButton
                direction="next"
                variant="filled"
                label="Next story"
                onClick={() => goTo(index + 1)}
              />
            </div>
          }
        />

        <div className="mt-10 grid items-center gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white">
            <Image
              src={active.image}
              alt={active.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-12 text-default text-pale-blue">
              {active.excerpt}
            </p>
            <Button
              href={`/stories/${active.slug}`}
              variant="solid"
              className="mt-24"
            >
              Read Article
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
