"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";

import "swiper/css";

interface CoursesGalleryStripProps {
  images: GalleryImage[];
}

/**
 * Horizontally draggable Swiper image strip.
 * Offers smooth grabbable touch/mouse drag support and transitions.
 */
export default function CoursesGalleryStrip({
  images,
}: CoursesGalleryStripProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[A11y, Keyboard]}
        spaceBetween={24}
        slidesPerView={5}
        grabCursor={true}
        loop={true}
        keyboard={{ enabled: true }}
        className="w-full h-[45vw] sm:h-[28vw] lg:h-80"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className="relative w-[45vw] sm:w-[28vw] lg:w-77.5 h-full rounded-card overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 310px, (min-width: 640px) 28vw, 45vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
