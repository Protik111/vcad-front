"use client";

import { useId, useState } from "react";
import type { CourseModule } from "@/types/course";
import { cn } from "@/lib/cn";

function ChevronButton({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white transition-colors",
        open ? "bg-plum" : "bg-navy",
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        className={cn(
          "transition-transform duration-200",
          open && "rotate-180",
        )}
      >
        <path
          d="M4 6.5 8 10.5 12 6.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ModuleRow({
  module,
  index,
  isOpen,
  onToggle,
}: {
  module: CourseModule;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-border/60 py-5 first:pt-0 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-default font-semibold text-white">
            /{String(index + 1).padStart(2, "0")}/
          </span>
          <span className="text-lg font-semibold text-white">
            {module.title}
          </span>
          <span className="text-meta text-white">
            [ {module.code} • {module.credits} credits ]
          </span>
        </span>
        <ChevronButton open={isOpen} />
      </button>
      <div
        id={panelId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <p className="max-w-3xl overflow-hidden text-default text-pale-blue">
          {module.description}
        </p>
      </div>
    </div>
  );
}

/**
 * Accordion list of a curriculum year's modules. The first module is
 * open by default, matching the design.
 */
export default function ModuleAccordion({
  modules,
}: {
  modules: CourseModule[];
}) {
  const [openCode, setOpenCode] = useState<string | undefined>(
    modules[0]?.code,
  );

  return (
    <div>
      {modules.map((module, index) => (
        <ModuleRow
          key={module.code}
          module={module}
          index={index}
          isOpen={openCode === module.code}
          onToggle={() =>
            setOpenCode((current) =>
              current === module.code ? undefined : module.code,
            )
          }
        />
      ))}
    </div>
  );
}
