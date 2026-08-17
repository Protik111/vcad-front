"use client";

import { useId, useState } from "react";
import type { CurriculumYear } from "@/types/course";
import Container from "@/components/ui/Container";
import ModuleAccordion from "./ModuleAccordion";
import { cn } from "@/lib/cn";

/**
 * "Course Structure & Details" section: a year selector (real tabs —
 * exactly one year's module list is shown at a time) above the module
 * accordion for the selected year.
 */
export default function CourseStructureSection({
  curriculum,
}: {
  curriculum: CurriculumYear[];
}) {
  const [activeYear, setActiveYear] = useState(0);
  const tablistId = useId();
  const active = curriculum[activeYear];

  if (!active) return null;

  return (
    <section id="structure" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Course Structure &amp; Details
          </h2>
          <p className="mt-3 text-default text-pale-blue">
            Explore the modules for each year and find key admissions
            information.
          </p>
        </div>

        <div className="mt-10 rounded-card border border-border/60 bg-card p-6 sm:p-10">
          <div
            role="tablist"
            aria-label="Curriculum year"
            id={tablistId}
            className="flex flex-wrap gap-2 rounded-pill border border-border/60 bg-card-alt/60 p-2 sm:w-fit"
          >
            {curriculum.map((year, index) => (
              <button
                key={year.year}
                type="button"
                role="tab"
                aria-selected={activeYear === index}
                onClick={() => setActiveYear(index)}
                className={cn(
                  "whitespace-nowrap rounded-pill px-5 py-2.5 text-default font-medium transition-colors",
                  activeYear === index
                    ? "bg-plum text-white"
                    : "text-pale-blue hover:text-white",
                )}
              >
                <span aria-hidden="true" className="mr-1">
                  /
                </span>
                {year.year}
              </button>
            ))}
          </div>

          <div role="tabpanel" aria-labelledby={tablistId} className="mt-8">
            <div className="flex flex-col gap-1 justify-center">
              <p className="text-default font-normal tracking-[0.08em] text-white">
                Modules may include
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Core <br /> Modules
              </h3>
            </div>

            <div className="mt-6">
              <ModuleAccordion key={active.year} modules={active.modules} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
