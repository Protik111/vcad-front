import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailHero from "@/components/course-detail/CourseDetailHero";
import CourseDetailNav from "@/components/course-detail/CourseDetailNav";
import CourseInfoGrid from "@/components/course-detail/CourseInfoGrid";
import CourseStructureSection from "@/components/course-detail/CourseStructureSection";
import AdmissionsSection from "@/components/course-detail/AdmissionsSection";
import CourseSpecificationCTA from "@/components/course-detail/CourseSpecificationCTA";
import ApplyCtaSection from "@/components/course-detail/ApplyCtaSection";
import CtaBanner from "@/components/shared/CtaBanner";
import { getCourseBySlug, getCourses } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCourses().map((course) => ({ slug: course.slug }));
}

// Only the slugs above are valid course pages — anything else should
// 404 at the routing level (with a correct 404 status) rather than
// being rendered on demand and discovering there's no course for it.
export const dynamicParams = false;

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course not found" };
  }

  return {
    title: course.title,
    description: course.description ?? course.overview,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseDetailHero course={course} />
      <CourseDetailNav />
      <CourseInfoGrid course={course} />
      {course.curriculum && course.curriculum.length > 0 && (
        <CourseStructureSection curriculum={course.curriculum} />
      )}
      {course.admissions && course.admissions.length > 0 && (
        <AdmissionsSection categories={course.admissions} />
      )}
      <CourseSpecificationCTA />
      <ApplyCtaSection />
      <CtaBanner />
    </>
  );
}
