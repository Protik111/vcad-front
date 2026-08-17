export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const courseGalleryImages: GalleryImage[] = [
  { id: "painting", src: "/images/gallery-painting.webp", alt: "A student painting in the studio" },
  { id: "seminar", src: "/images/gallery-seminar.webp", alt: "Students in a seminar discussion" },
  { id: "tailoring", src: "/images/gallery-tailoring.webp", alt: "Fashion students working on a garment pattern" },
  { id: "induction", src: "/images/gallery-induction.webp", alt: "A student presenting during induction" },
  { id: "studio", src: "/images/gallery-studio.webp", alt: "Students collaborating in the design studio" },
  { id: "workshop", src: "/images/gallery-workshop.webp", alt: "A hands-on workshop session" },
];
