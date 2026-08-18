"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import Image from "next/image";
import Link from "next/link";
import type { Campus } from "@/data/campuses";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CircleArrowButton from "@/components/ui/CircleArrowButton";
import "swiper/css";
import "swiper/css/effect-coverflow";

const INITIAL_SLIDE = 1;

/** Same photo height on every slide (active or peek) — only the active
 * card's name bar adds extra height on top of it. */
const IMAGE_HEIGHT = "h-56 sm:h-72 lg:h-80";

/** Matches each slide's own width classes, so the arrow overlay lines
 * up with wherever the (always-centered) active slide currently sits. */
const SLIDE_WIDTH = "w-[75vw] max-w-160 sm:w-[60vw] lg:w-[46vw]";

/**
 * "Explore our campuses" carousel: a coverflow-style carousel where
 * the active campus is shown large, raised 150px above the
 * neighbouring campuses (scaled down on smaller screens) which recede
 * behind it at half opacity on either side, and cycles infinitely.
 * Built on Swiper for real touch/keyboard/drag support.
 *
 * Infinite cycling is done manually (wrap to the first/last slide at
 * the boundary) rather than via Swiper's native `loop`: loop mode
 * needs to generate duplicate buffer slides, and with `slidesPerView:
 * "auto"` and only a few real slides it silently fails to create them
 * — confirmed via the live swiper instance (`slides.length` never
 * grows past the real slide count, and it gets permanently stuck at
 * `isEnd`). A manual wrap sidesteps that entirely and is easy to
 * verify correct.
 *
 * The prev/next arrows live in a stable overlay outside the slides
 * rather than inside the active slide's own markup, since a button
 * rendered inside a per-slide conditional is more fragile to wire up
 * reliably than one stable overlay positioned to match the active
 * slide's band.
 *
 * The "raised" active slide is done with flex self-alignment
 * (active = self-start, peeks = self-end inside a taller shared row)
 * rather than a transform — a transform would just get clipped by
 * Swiper's own `overflow: hidden` instead of actually lifting it.
 */
export default function CampusesCarousel({ campuses }: { campuses: Campus[] }) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const initialIndex = Math.min(INITIAL_SLIDE, campuses.length - 1);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const goToOffset = (offset: 1 | -1) => {
    const next = (activeIndex + offset + campuses.length) % campuses.length;
    swiperRef.current?.slideTo(next);
  };

  return (
    <section className="overflow-x-clip py-20 sm:py-28">
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

        <div className="relative mt-10 sm:mt-14">
          <Swiper
            modules={[A11y, Keyboard, EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            initialSlide={initialIndex}
            centeredSlides
            // loop={true}s
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            keyboard={{ enabled: true }}
            a11y={{
              prevSlideMessage: "Previous campus",
              nextSlideMessage: "Next campus",
            }}
            slidesPerView="auto"
            className="h-[284px]! sm:h-[388px]! lg:h-[470px]!"
          >
            {campuses.map((campus, i) => {
              const isActive = i === activeIndex;
              const imageEl = (
                <Image
                  src={campus.image}
                  alt={isActive ? campus.imageAlt : ""}
                  fill
                  sizes="(min-width: 1024px) 46vw, 75vw"
                  priority={i === initialIndex}
                  className="object-cover"
                />
              );

              return (
                <SwiperSlide
                  key={campus.id}
                  className={
                    isActive
                      ? `self-start! ${SLIDE_WIDTH}!`
                      : `self-end! ${SLIDE_WIDTH}!`
                  }
                >
                  {isActive ? (
                    <div className="relative flex flex-col overflow-hidden">
                      <div className={`relative ${IMAGE_HEIGHT}`}>
                        {imageEl}

                        <Link
                          href="/campuses"
                          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                          <span className="text-micro font-semibold uppercase tracking-[0.16em]">
                            Discover
                          </span>
                        </Link>
                      </div>

                      <div className="flex h-14 shrink-0 items-center justify-center bg-border sm:h-16">
                        <span className="text-default font-semibold uppercase tracking-[0.06em] text-white">
                          {campus.name}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slideTo(i)}
                      aria-label={`Show ${campus.name}`}
                      className={`relative block w-full cursor-pointer overflow-hidden rounded-card opacity-50 brightness-75 transition-[opacity,filter] duration-300 hover:opacity-70 ${IMAGE_HEIGHT}`}
                    >
                      {imageEl}
                    </button>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Arrow overlay: sized/positioned to match the active slide's
              image band, kept outside the Swiper's own slide tree so
              it's one stable pair of buttons rather than per-slide
              markup. Needs an explicit z-index — the coverflow effect's
              3D transforms put the slides in their own stacking
              context, so a later sibling with z-index:auto can still
              lose hit-testing to them despite painting on top. */}
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex items-center justify-between px-4 sm:px-0 ${IMAGE_HEIGHT} ${SLIDE_WIDTH}`}
          >
            <div className="pointer-events-auto">
              <CircleArrowButton
                direction="prev"
                variant="outline"
                label="Previous campus"
                onClick={() => goToOffset(-1)}
              />
            </div>
            <div className="pointer-events-auto">
              <CircleArrowButton
                direction="next"
                variant="filled"
                label="Next campus"
                onClick={() => goToOffset(1)}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
