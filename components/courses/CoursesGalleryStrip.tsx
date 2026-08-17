"use client";

import { useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";
import CircleArrowButton from "@/components/ui/CircleArrowButton";

/**
 * Horizontally scrollable, snap-aligned image strip. Native scroll
 * gives free touch/swipe/trackpad support; the arrow buttons scroll
 * by one card for mouse/keyboard users.
 */
export default function CoursesGalleryStrip({
  images,
}: {
  images: GalleryImage[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-gallery-item]");
    const step = (card?.offsetWidth ?? 280) + 24;
    scroller.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        role="group"
        aria-label="Course gallery"
      >
        {images.map((image) => (
          <div
            key={image.id}
            data-gallery-item
            className="relative aspect-square w-[45vw] shrink-0 snap-start overflow-hidden rounded-card sm:w-[28vw] lg:w-77.5 lg:h-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              // sizes="(min-width: 1024px) 220px, 40vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <CircleArrowButton
          direction="prev"
          variant="outline"
          label="Scroll gallery left"
          onClick={() => scrollByCard(-1)}
        />
        <CircleArrowButton
          direction="next"
          variant="filled"
          label="Scroll gallery right"
          onClick={() => scrollByCard(1)}
        />
      </div>
    </div>
  );
}
