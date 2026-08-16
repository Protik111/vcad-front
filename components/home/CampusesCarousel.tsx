"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Campus } from "@/data/campuses";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CircleArrowButton from "@/components/ui/CircleArrowButton";

const SWIPE_THRESHOLD = 40;

/**
 * "Explore our campuses" carousel: a single active slide with
 * prev/next controls, a "Discover" link and touch swipe support.
 */
export default function CampusesCarousel({ campuses }: { campuses: Campus[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const active = campuses[index];

  const goTo = (next: number) => {
    setIndex(Math.max(0, Math.min(campuses.length - 1, next)));
  };

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goTo(index - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(index + 1);
    touchStartX.current = null;
  };

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Our Campuses"
          title="Explore our campuses"
          aside={
            <p className="text-default text-pale-blue">
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas.
            </p>
          }
        />

        <div
          className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-card sm:mt-14"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {campuses.map((campus, i) => (
            <div
              key={campus.id}
              aria-hidden={i !== index}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === index ? 1 : 0 }}
            >
              <Image
                src={campus.image}
                alt={campus.imageAlt}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />

          <Link
            href="/campuses"
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <span className="text-micro font-semibold uppercase tracking-[0.16em]">
              Discover
            </span>
          </Link>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
            <span className="rounded-pill bg-deep/70 px-5 py-2.5 text-default font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-sm">
              {active.name}
            </span>

            <div
              className="flex items-center gap-3"
              role="group"
              aria-label="Campus carousel controls"
            >
              <CircleArrowButton
                direction="prev"
                variant="outline"
                label="Previous campus"
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
              />
              <CircleArrowButton
                direction="next"
                variant="filled"
                label="Next campus"
                onClick={() => goTo(index + 1)}
                disabled={index === campuses.length - 1}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
