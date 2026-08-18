"use client";

import { useId, useState } from "react";
import type { AdmissionsCategory } from "@/types/course";
import Container from "@/components/ui/Container";
import AdmissionsAccordion from "./AdmissionsAccordion";
import { cn } from "@/lib/cn";

/**
 * "Admissions & Key Details" section: a vertical category selector
 * (real tabs) on the left, and that category's accordion content on
 * the right.
 */
export default function AdmissionsSection({
  categories,
}: {
  categories: AdmissionsCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState(0);
  const tablistId = useId();
  const active = categories[activeCategory];

  if (!active) return null;

  return (
    <section id="admissions" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Admissions &amp; Key Details
          </h2>
          <p className="mt-3 text-default text-pale-blue">
            Everything you need to know about applying and studying
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[260px_1fr]">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Admissions category"
            id={tablistId}
            className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible lg:border lg:border-[#2262ee] lg:gap-0 lg:self-start"
          >
            {categories.map((category, index) => {
              const isActive = activeCategory === index;
              return (
                <button
                  key={category.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(index)}
                  className={cn(
                    "relative cursor-pointer whitespace-nowrap px-5 py-4.5 text-left text-default font-medium transition-colors lg:whitespace-normal lg:border-b lg:border-dotted lg:border-[#2262ee] lg:last:border-b-0",
                    isActive
                      ? "bg-plum text-white"
                      : "text-pale-blue hover:text-white",
                  )}
                >
                  <span aria-hidden="true" className="mr-1 text-white">
                    /
                  </span>
                  {category.label}
                  {isActive && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-[#030a2e] hidden lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" aria-labelledby={tablistId}>
            <AdmissionsAccordion key={active.label} items={active.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
