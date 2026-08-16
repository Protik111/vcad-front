import type { Course } from "@/types/course";

/**
 * Local/static course data.
 *
 * Exposed through `getCourses()` / `getCourseBySlug()` so the data
 * source can later be swapped for a real API without changing the UI
 * that consumes it.
 */
export const courses: Course[] = [
  {
    id: "fashion-design",
    slug: "fashion-design",
    title: "BA (Hons) Fashion Design",
    school: "VCAD Borough",
    duration: "3 Years",
    category: "Fashion",
    image: "/images/course-fashion-design.webp",
    imageAlt: "Students reviewing fabric samples in a fashion design studio",
    description:
      "This course introduces students to creative practice, focusing on theoretical, practical and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication.",
  },
  {
    id: "fashion-media-marketing",
    slug: "fashion-media-and-marketing",
    title: "BA (Hons) Fashion Media and Marketing",
    school: "VCAD Borough",
    duration: "3 Years",
    category: "Media",
    image: "/images/course-fashion-media.webp",
    imageAlt: "Fashion media students planning a marketing campaign",
    description:
      "Students explore the media and marketing landscape of the fashion industry, building skills in brand strategy, content creation and campaign development across print and digital channels.",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "BA (Hons) Graphic Design",
    school: "VCAD Canary Wharf",
    duration: "3 Years",
    category: "Graphic Design",
    image: "/images/course-graphic-design.webp",
    imageAlt: "Graphic design student working on layout compositions",
    description:
      "A studio-based course covering typography, branding and visual communication, preparing students to design across print, digital and motion contexts for real-world briefs.",
  },
  {
    id: "business-management",
    slug: "business-and-management",
    title: "CertHE Business & Management",
    school: "VCAD Canary Wharf",
    duration: "1 Year",
    category: "Business",
    image: "/images/course-business-management.webp",
    imageAlt: "Business and management students in a seminar discussion",
    description:
      "An introduction to core business and management principles, building the commercial and analytical skills needed to support a career across the creative industries.",
  },
];

export function getCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
