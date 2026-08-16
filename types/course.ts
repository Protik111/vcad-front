/**
 * Shared course data model.
 *
 * The same `Course` objects feed the homepage course list, the
 * `/courses` grid and the `/courses/[slug]` detail page — course
 * content must never be duplicated per page.
 */
export interface CourseSection {
  title: string;
  content: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  school: string;
  duration: string;
  image: string;
  imageAlt: string;
  category?: string;
  /** Short summary used on cards and list rows. */
  description?: string;
  /** Longer copy used on the course detail page. */
  overview?: string;
  heroImage?: string;
  gallery?: string[];
  highlights?: string[];
  sections?: CourseSection[];
}
