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

/**
 * "Explore our campuses" carousel: a coverflow-style carousel where
 * the active campus is shown large and centered (the second campus on
 * first load), with the neighbouring campuses receding behind it at
 * half opacity on either side. Built on Swiper for real touch/
 * keyboard/drag support.
 *
 * Loop mode is intentionally off: Swiper's loop needs roughly double
 * the visible slide count to wrap reliably, and with only a few
 * campuses it gets stuck instead. Boundaries are handled the plain
 * way instead — arrows disable at the first/last slide.
 */
export default function CampusesCarousel({ campuses }: { campuses: Campus[] }) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const initialIndex = Math.min(INITIAL_SLIDE, campuses.length - 1);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isBeginning, setIsBeginning] = useState(initialIndex === 0);
  const [isEnd, setIsEnd] = useState(initialIndex >= campuses.length - 1);

  const syncBoundaries = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
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

        <div className="mt-10 sm:mt-14">
          <Swiper
            modules={[A11y, Keyboard, EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              syncBoundaries(swiper);
            }}
            onSlideChange={syncBoundaries}
            initialSlide={initialIndex}
            centeredSlides
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
            className="h-70! sm:h-90! lg:h-105!"
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
                  className="h-full! w-[75vw]! max-w-160 sm:w-[60vw]! lg:w-[46vw]!"
                >
                  {isActive ? (
                    <div className="group relative h-full w-full overflow-hidden rounded-card">
                      {imageEl}
                      <div className="absolute inset-0 bg-linear-to-t from-deep/70 via-transparent to-transparent" />

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
                          {campus.name}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slideTo(i)}
                      aria-label={`Show ${campus.name}`}
                      className="relative block h-full w-full cursor-pointer overflow-hidden rounded-card opacity-50 brightness-75 transition-[opacity,filter] duration-300 hover:opacity-70"
                    >
                      {imageEl}
                    </button>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            className="mt-6 flex items-center justify-center gap-3"
            role="group"
            aria-label="Campus carousel controls"
          >
            <CircleArrowButton
              direction="prev"
              variant="outline"
              label="Previous campus"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            />
            <CircleArrowButton
              direction="next"
              variant="filled"
              label="Next campus"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
