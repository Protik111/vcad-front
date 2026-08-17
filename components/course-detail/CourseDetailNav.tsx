"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const SECTIONS = [
  { id: "overview", label: "Course Overview" },
  { id: "structure", label: "Course Structure & Details" },
  { id: "admissions", label: "Admissions & Key Details" },
] as const;

/**
 * In-page section nav for the course detail page, styled as pill tabs.
 * All three sections are always present on the page (there's too much
 * content — modules, admissions accordions — to hide behind a single
 * panel), so this behaves as an anchor nav with scroll-spy active
 * state rather than a show/hide tablist.
 */
export default function CourseDetailNav() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="pt-20">
      <nav
        aria-label="Course sections"
        className="mx-auto w-fit max-w-full px-4"
      >
        <ul className="flex flex-wrap items-center justify-center gap-2 rounded-pill border border-border/60 bg-card-alt/60 p-2">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={activeId === section.id ? "location" : undefined}
                className={cn(
                  "block whitespace-nowrap rounded-pill px-5 py-2.5 text-default font-medium transition-colors",
                  activeId === section.id
                    ? "text-magenta-light"
                    : "text-pale-blue hover:text-white",
                )}
              >
                <span aria-hidden="true" className="mr-1">
                  /
                </span>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
