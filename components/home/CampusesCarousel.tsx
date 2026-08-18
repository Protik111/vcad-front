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

const IMAGE_HEIGHT = "h-56 sm:h-72 lg:h-120";

const SLIDE_WIDTH = "w-[75vw] max-w-160 sm:w-[60vw] lg:w-[36vw]";

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
            // loop={true}
            simulateTouch={true}
            grabCursor={true}
            allowTouchMove={true}
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
                      ? `flex flex-col justify-start h-full! ${SLIDE_WIDTH}!`
                      : `flex flex-col justify-end h-full! ${SLIDE_WIDTH}!`
                  }
                >
                  {isActive ? (
                    <div className="relative flex flex-col overflow-hidden -top-32.5">
                      <div className={`relative ${IMAGE_HEIGHT}`}>
                        {imageEl}

                        <Link
                          href="/campuses"
                          className="absolute left-1/2 top-[70%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
                      className={`relative block cursor-pointer overflow-hidden opacity-80 brightness-95 transition-[opacity,filter] duration-300 hover:opacity-70 w-full ${IMAGE_HEIGHT}`}
                    >
                      {imageEl}
                    </button>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          
          <div
            className={` absolute inset-x-0 -top-10 z-40 transform-[translate3d(0,0,100px)] transform-3d mx-auto flex items-center justify-between ${IMAGE_HEIGHT} ${SLIDE_WIDTH}`}
          >
            <div className="cursor-pointer -translate-x-1/2">
              <CircleArrowButton
                direction="prev"
                variant="outline"
                label="Previous campus"
                onClick={() => goToOffset(-1)}
              />
            </div>
            <div className="cursor-pointer translate-x-1/2">
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
