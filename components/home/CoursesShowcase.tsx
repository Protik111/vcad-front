"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { Course } from "@/types/course";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

interface CourseRowProps {
  course: Course;
  isOpen: boolean;
  onToggle: () => void;
}

function CourseRow({ course, isOpen, onToggle }: CourseRowProps) {
  const panelId = useId();

  return (
    <div className="border-b border-border/60 py-5 first:pt-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xl font-semibold text-white sm:text-2xl">
          {course.title}
        </span>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-white transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(90deg)" : undefined }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3.5 8h9M8 3.5 12.5 8 8 12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-default text-pale-blue">
          {course.description}
        </p>
      </div>
    </div>
  );
}

/**
 * "Explore our creative courses" homepage section: an accordion-style
 * list rendered from the shared course data, plus a supporting image.
 */
export default function CoursesShowcase({ courses }: { courses: Course[] }) {
  const [openId, setOpenId] = useState<string | undefined>(courses[0]?.id);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Our Courses"
          title="Explore our creative courses"
          aside={
            <Button href="/courses" variant="solid">
              View Courses
            </Button>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                isOpen={openId === course.id}
                onToggle={() =>
                  setOpenId((current) =>
                    current === course.id ? undefined : course.id,
                  )
                }
              />
            ))}
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card lg:aspect-auto">
            <Image
              src="/images/courses-showcase.jpg"
              alt="Students in a lecture at Victoria College of Arts and Design"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
