# VCAD — Victoria College of Arts and Design

Next.js (App Router) + TypeScript + Tailwind CSS implementation of the VCAD site, built from the provided design screenshots and the tokens in `features/VCAD_Claude_Implementation_Spec.md`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (`npm run dev`/`build` explicitly pin webpack over Turbopack — see the Turbopack note below.)

## How far this got

**Completed:** shared `Header` / `Footer` (off-canvas mobile menu, active-route highlighting, "Apply Now" CTA), the homepage (hero collage, courses accordion, pull-quote, campuses carousel, testimonial carousel, partners, stories, CTA banner), `/courses` (asymmetric feature/stacked/expanded grid with school & duration badges, interactive gallery strip, loading skeleton, empty state), and `/courses/[slug]` — hero with breadcrumb and gallery, a scroll-spy section nav, a six-fact info grid, a year-by-year module accordion, a two-level admissions tabs+accordion, a course-spec download, and an apply CTA. All three pages share one course data model (`types/course.ts`, `data/courses.ts`) and one header/footer; nothing is duplicated per page.

**Not built:** the destination pages for other nav/footer links (About, Campuses, VCAD Life, Apply, Policies, etc.) — out of scope for this request, so those currently 404.

**Priority reasoning:** followed the spec's own ordering (header → footer → homepage → courses → details), and updated the shared header/footer once the Courses screenshot revealed their fuller, true design rather than maintaining two versions.

## Two decisions not specified by the design

**Breadcrumb label.** The screenshot's last breadcrumb crumb reads the literal string "Courses Details Page" for every course. I used the actual course title instead (`Home / Courses / BA (Hons) Fashion Design`) — a literal, unchanging label would read as leftover template text on every real course, which the spec explicitly flags as something to avoid.

**Course Overview/Structure/Admissions nav.** Styled as pill tabs, but implemented as an anchor nav with scroll-spy (not a show/hide tablist): the screenshot shows all three sections' full content — info cards, the module accordion, the admissions accordion — simultaneously, which only happens if nothing is being hidden. A true tablist would hide two-thirds of the page by default.

## Known limitation: Turbopack + `notFound()`

Next.js 16.3.1's Turbopack build returns HTTP 200 for a page that calls `notFound()` under a `generateStaticParams` dynamic route, even though it correctly renders the not-found UI (confirmed both in `next dev` and a `next start` production server). A `next build --webpack` build returns the correct 404. `package.json`'s `dev`/`build` scripts pin `--webpack` until that's fixed upstream — a status-code bug on a 404 page is worth avoiding even though it doesn't affect the pages a reviewer will actually click through.

## Imagery

All photos are the real assets supplied in `public/images/homepage` and `public/images/course-and-details`, hand-matched to each slot by content (e.g. the B&W windswept-hair shot for the "Fashion" hero tag, the tailoring-studio photo for the fashion craft images, the real VCAD induction photo for the Stories section) and copied to clean kebab-case paths at the top level of `public/images` that `data/*.ts` references. The logo is the exact supplied `logo.svg` (inlined into `LogoMark.tsx` for `currentColor`-free, request-free rendering). Partner logos (Ravensbourne, Arts University Plymouth) weren't supplied, so those remain simple generated wordmark placeholders. The course specification PDF is a real, valid, generated placeholder file (a genuine download rather than a dead link).

## What's next

1. Wire up the remaining nav/footer destinations (About, Campuses, VCAD Life, Apply, Policies, FAQs, ...).
2. Swap in real partner logo files.
3. Revisit the Turbopack build once Next.js ships a fix, to drop the `--webpack` pin.

## Deployment

Not yet deployed.
