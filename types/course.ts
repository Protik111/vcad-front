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

/** One of the six "Course Information" at-a-glance facts. */
export interface CourseKeyDetails {
  startDate: string;
  studyMode: string;
  location: string;
  tuitionFee: string;
  awardingBody: string;
}

export interface CourseModule {
  code: string;
  title: string;
  credits: number;
  description: string;
}

export interface CurriculumYear {
  year: string;
  modules: CourseModule[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface AdmissionsAccordionItem {
  title: string;
  content: ContentBlock[];
}

export interface AdmissionsCategory {
  label: string;
  items: AdmissionsAccordionItem[];
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
  /** Longer copy used on the course detail page hero. */
  overview?: string;
  heroImage?: string;
  gallery?: string[];
  highlights?: string[];
  sections?: CourseSection[];
  keyDetails?: CourseKeyDetails;
  curriculum?: CurriculumYear[];
  admissions?: AdmissionsCategory[];
}
