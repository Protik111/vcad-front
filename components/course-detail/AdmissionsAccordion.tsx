"use client";

import { useId, useState } from "react";
import type { AdmissionsAccordionItem } from "@/types/course";
import ContentBlocks from "./ContentBlocks";
import { cn } from "@/lib/cn";

/**
 * The right-hand accordion inside "Admissions & Key Details" — a
 * plain +/− style accordion, distinct from the module accordion's
 * circular chevron button.
 */
export default function AdmissionsAccordion({ items }: { items: AdmissionsAccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-card border border-border/60">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Row
            key={item.title}
            item={item}
            isOpen={isOpen}
            onToggle={() => setOpenIndex(isOpen ? -1 : index)}
          />
        );
      })}
    </div>
  );
}

function Row({
  item,
  isOpen,
  onToggle,
}: {
  item: AdmissionsAccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className={cn("border-t border-border/60 first:border-t-0", isOpen && "bg-card")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <span className="text-lg font-semibold text-white">{item.title}</span>
        <span aria-hidden="true" className="text-xl font-light text-pale-blue">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={panelId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden px-6 pb-6 sm:px-8">
          <ContentBlocks blocks={item.content} />
        </div>
      </div>
    </div>
  );
}
