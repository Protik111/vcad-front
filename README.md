# VCAD — Victoria College of Arts and Design

Next.js (App Router) + TypeScript + Tailwind CSS implementation of the VCAD homepage, built from the provided design screenshot and the tokens in `features/VCAD_Claude_Implementation_Spec.md`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How far this got

**Completed:** shared `Header` / `Footer` (with a functional off-canvas mobile menu), the full homepage in the design's section order — hero with photo collage, "Explore our creative courses" accordion, pull-quote, campuses carousel, students testimonial carousel, partner institutions, stories, and the closing CTA banner. All carousels/accordions are keyboard-accessible, touch-swipeable where relevant, and data-driven from `data/*.ts`. Design tokens (colour, type scale, radii) are centralized in `app/globals.css` via Tailwind's `@theme`.

**Not built this session:** `/courses` and `/courses/[slug]`. The data layer (`types/course.ts`, `data/courses.ts` with `getCourses()` / `getCourseBySlug()`) is already shaped to feed those pages without duplicating course content, so they're the natural next step.

**Priority reasoning:** the spec's own ordering (header → footer → homepage → courses → details) was followed, and since only the homepage was requested this session, effort went into getting it production-quality rather than stubbing all three pages thinly.

## One undirected decision: placeholder imagery

The Figma file wasn't reachable from this session, so every photo is a generated placeholder (navy gradient + small corner caption naming the intended subject, e.g. "Fashion", "Canary Wharf") rather than blank boxes or unrelated stock art — it keeps the layout, crops, and aspect ratios real while making it obvious at a glance which asset each slot expects. Swapping in real exports just means replacing the file at the same path in `/public/images` (names are listed in `data/*.ts`); no component changes needed.

## What's next

1. Build `/courses` (asymmetric grid + loading/empty states) and `/courses/[slug]` (tabs, accordion, gallery) off the existing data layer.
2. Swap placeholder images for real exported assets.
3. Wire up `/about`, `/contact`, `/campuses`, `/policies`, etc. — currently valid links with no destination page yet.

## Deployment

Not yet deployed — pending the above pages.
