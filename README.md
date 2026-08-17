# VCAD — Victoria College of Arts and Design

Next.js (App Router) + TypeScript + Tailwind CSS implementation of the VCAD homepage, built from the provided design screenshot and the tokens in `features/VCAD_Claude_Implementation_Spec.md`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How far this got

**Completed:** shared `Header` / `Footer` (functional off-canvas mobile menu, active-route highlighting, "Apply Now" CTA), the homepage in the design's section order (hero collage, courses accordion, pull-quote, campuses carousel, testimonial carousel, partners, stories, CTA banner), and `/courses` — hero, the asymmetric feature/stacked/expanded course grid with school & duration badges, an interactive scroll-snap gallery strip, loading skeleton (`app/courses/loading.tsx`), and an empty state. Everything is data-driven from `data/*.ts`; design tokens live in `app/globals.css` via Tailwind's `@theme`.

**Not built this session:** `/courses/[slug]`. Course cards already link to `/courses/<slug>` and `getCourseBySlug()` exists in the data layer, so the detail page is the direct next step — those links currently 404 until it's built.

**Priority reasoning:** followed the spec's own ordering (header → footer → homepage → courses → details); the two pages requested this session got full production-quality treatment rather than spreading effort across a thin third page.

## One undirected decision: placeholder imagery

The Figma file wasn't reachable from this session, so every photo is a generated placeholder (navy gradient + small corner caption naming the intended subject, e.g. "Fashion", "Canary Wharf") rather than blank boxes or unrelated stock art — it keeps the layout, crops, and aspect ratios real while making it obvious at a glance which asset each slot expects. Swapping in real exports just means replacing the file at the same path in `/public/images` (names are listed in `data/*.ts`); no component changes needed.

## What's next

1. Build `/courses/[slug]` (tabs, accordion, gallery, related courses) off the existing data layer.
2. Swap placeholder images for real exported assets.
3. Wire up `/about`, `/campuses`, `/vcad-life`, `/apply`, `/policies`, etc. — currently valid links with no destination page yet.

## Deployment

Not yet deployed — pending the above pages.
