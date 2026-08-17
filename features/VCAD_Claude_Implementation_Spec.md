VCAD — Frontend Developer Code Test

Claude Implementation Specification

Purpose: Give this document to Claude Code / Claude so it can build the VCAD website from the provided Figma design as faithfully as possible, using the exact technical constraints and design tokens below.

Primary rule: The Figma file is the source of truth for visual details. The tokens in this document are the recurring design-system values sampled from the Figma frames. When a value is not listed here, inspect the Figma rather than guessing.

1. Project Context

Project: VCAD — Victoria College of Arts and Design
Organisation: Planet Education Networks (PEN Group)
Test: Web Developer — Code Test
Expected effort: approximately 5–6 hours
Submission window: 3 days from receipt of the test

Figma

Use the supplied Figma file as the visual source of truth:

https://www.figma.com/design/gk2kbJAc1nHTQhdXP4kpzr/Web-Developer-%E2%80%94-Code-Test

The Figma contains the complete visual specifications, including dimensions, spacing, image assets, responsive intent where provided, component states, and page layouts.

Pages to implement

Homepage

Figma frame: WEB-234 Homepage

Route: /

Explore Our Courses

Figma frame: WEB-234 Explore our course

Route: /courses

Course Details

Figma frame: WEB-594 Course Details Page

Suggested route: /courses/[slug]

The test explicitly states that completing all three pages is not required. Quality is more important than page count.

2. Non-Negotiable Technical Stack

Use:

Next.js

App Router

TypeScript

Tailwind CSS

React

Inter font

Responsive HTML/CSS

Accessible interactive components

Local/static data for course information

Do not introduce unnecessary libraries.

Prefer native browser/React functionality where practical.

Recommended setup

Next.js
TypeScript
Tailwind CSS
App Router
ESLint
Prettier (optional)

Use a clean, production-oriented project structure.

3. Primary Implementation Goal

Build the website so that it looks and behaves like the Figma design rather than merely approximating the screenshots.

The implementation should demonstrate:

strong visual accuracy

clean component architecture

reusable components

reusable data

responsive behaviour

working interactions

accessible markup

sensible loading and empty states

maintainable TypeScript

production-quality code

Do not optimize for the number of pages completed.

If time becomes limited, prioritize in this order:

1. Shared header
2. Shared footer
3. Homepage
4. Courses page
5. Course details page
6. Responsive refinements
7. Polish / accessibility / edge cases

If a page cannot be completed properly within the available time, stop rather than shipping a visibly unfinished implementation.

4. Design System

4.1 Font

Use Inter throughout the application.

Do not substitute another font.

Recommended Next.js implementation:

import { Inter } from "next/font/google";

Configure the font globally.

5. Colour Tokens

Create centralized design tokens rather than scattering raw colour values throughout components.

Surfaces

Token

Value

Base

#030A2E

Deep

#020928

Card

#051251

Card Alt

#040D3D

Navy

#061665

Border

#384584

Accent

Token

Value

Pink

#FF379E

Magenta

#E018E0

Magenta Lt

#E646E6

Plum

#912491

Blue

#2262EE

Cyan

#00FFD2

Light / Text

Token

Value

Text

#EBECF3

White

#FFFFFF

Sky

#8EC8EE

Pale Blue

#D7E2FB

Pale Blue 2

#ECF2FD

Ice Blue

#EBF7FF

Recommended semantic CSS variables:

:root {
  --color-base: #030A2E;
  --color-deep: #020928;
  --color-card: #051251;
  --color-card-alt: #040D3D;
  --color-navy: #061665;
  --color-border: #384584;

  --color-pink: #FF379E;
  --color-magenta: #E018E0;
  --color-magenta-light: #E646E6;
  --color-plum: #912491;
  --color-blue: #2262EE;
  --color-cyan: #00FFD2;

  --color-text: #EBECF3;
  --color-white: #FFFFFF;
  --color-sky: #8EC8EE;
  --color-pale-blue: #D7E2FB;
  --color-pale-blue-2: #ECF2FD;
  --color-ice-blue: #EBF7FF;
}

If Tailwind configuration is preferred, expose these as Tailwind theme colors.

6. Typography

Use Inter.

Token

Size

Weight

Intended use

Hero display

68px

700

Main hero heading

Page title

60px

700

Page-level headings

Section heading

48px

700

Major section headings

Sub-heading

36px

600

Secondary headings

Card title

22px

600

Course/card titles

Lead

20px

400

Lead paragraphs

Body

18px

400

Main body copy

Default

16px

500

Most common UI text

Meta

12px

500

Metadata

Micro

10px

500

Small labels

Important

These are desktop/reference values.

Do not blindly keep 68px or 60px on small screens.

Use responsive typography based on the Figma design and sensible breakpoints.

Example:

Desktop:
Hero       68px
Page title 60px
Section    48px

Tablet:
Scale down appropriately

Mobile:
Use a visually balanced mobile scale

The visual hierarchy must remain consistent.

7. Radius / Layout Tokens

Recurring values

Element

Radius

Cards

12px

Pills / Tabs

34px

Buttons / Badges

20px

Circular arrows

57px

Small chips

4px

Reference frame width

1440px

The Figma frame width is a reference, not a restriction.

The site must be responsive.

Critical instruction

The values above are recurring tokens sampled from the design.

Do not assume every element uses these values.

For individual elements:

inspect the Figma

identify the actual dimensions

reproduce them where practical

do not invent a value when the design provides one

8. Figma Is the Source of Truth

Before writing substantial UI code, inspect the relevant Figma frames.

For every major section determine:

width

height

max-width

padding

margin

gap

alignment

font size

font weight

line height

letter spacing

border

border radius

background

image dimensions

image cropping

icon size

button size

hover/active state if provided

responsive behaviour if provided

Do not approximate something that can be inspected.

9. Image Assets

Export required images directly from the Figma file.

Store them in:

/public/images

Use meaningful names.

Example:

/public/images/
  hero.webp
  course-fashion.webp
  course-design.webp
  course-animation.webp

Do not use external image URLs unless absolutely necessary.

Prefer optimized local assets.

Use Next.js <Image /> where appropriate.

For decorative images where normal <img> behaviour is preferable, make a deliberate decision.

10. Suggested Project Structure

Use a structure similar to:

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── courses/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   └── ...
│   │
│   ├── courses/
│   │   └── ...
│   │
│   ├── course-detail/
│   │   └── ...
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Tabs.tsx
│       ├── Accordion.tsx
│       └── ...
│
├── data/
│   └── courses.ts
│
├── types/
│   └── course.ts
│
├── lib/
│   └── ...
│
└── public/
    └── images/

Do not over-engineer the application.

The component hierarchy should reflect actual reuse.

11. Shared Header

The header appears on every page.

Build it once:

components/layout/Header.tsx

Do not duplicate header markup between pages.

Inspect the Figma for:

logo

navigation

typography

spacing

buttons

active states

mobile navigation

menu behaviour

exact positioning

If mobile navigation exists in the design, make it functional.

If the Figma does not specify a mobile state, create a sensible responsive navigation rather than allowing the header to break.

12. Shared Footer

The footer appears on every page.

Build it once:

components/layout/Footer.tsx

Inspect Figma for:

columns

links

logo

social icons

newsletter/input if present

legal information

spacing

responsive layout

Do not duplicate footer code.

13. Course Data Architecture

This is a key requirement.

Course information must not be hardcoded directly into JSX/TSX markup.

Create a separate data file.

Example:

export interface Course {
  id: string;
  slug: string;
  title: string;
  school: string;
  duration: string;
  image: string;
  category?: string;
  description?: string;
  overview?: string;
  heroImage?: string;
  gallery?: string[];
  highlights?: string[];
  sections?: {
    title: string;
    content: string;
  }[];
}

Then:

export const courses: Course[] = [
  // course objects
];

The exact fields should be derived from the Figma content.

Critical requirement

The same course data should feed:

course cards

courses page

course details page

gallery/content where applicable

Use the slug to identify a course:

/courses/fashion-design
/courses/graphic-design

Do not create duplicate course data for each page.

14. Explore Courses Page

Route:

/courses

Figma frame:

WEB-234 Explore our course

This page has an intentionally asymmetric course grid.

The required layout is:

┌──────────────────────┬──────────────────┐
│                      │ Small Card       │
│ Large Feature Card   ├──────────────────┤
│                      │ Small Card       │
├───────────────┬──────┴──────────────────┤
│ Expanded Card │ ...                     │
└───────────────┴─────────────────────────┘

The exact proportions must come from Figma.

Required

There must be:

one large feature card

two stacked cards

one expanded card

school badge

duration badge where shown

correct imagery

correct typography

correct spacing

correct hover/interaction behaviour if shown

Important

The grid must remain data-driven.

Do not hardcode four independent cards like:

<Card1 />
<Card2 />
<Card3 />
<Card4 />

Instead, render the cards from the course data.

The layout can use explicit placement/classes for the design composition, while the content remains data-driven.

Example conceptual model:

featured course
secondary course 1
secondary course 2
expanded course
remaining courses

If the number of courses changes, the page should degrade gracefully.

15. Courses Loading State

The designs deliberately do not provide a loading state.

You must design one.

Use a polished skeleton state that matches the visual language.

Requirements:

dark/navy surface

approximate card dimensions

subtle skeleton blocks

no layout shift

accessible loading semantics

Example conceptual structure:

CourseCardSkeleton
  image skeleton
  title skeleton
  metadata skeleton

Do not make the loading screen visually unrelated to the application.

16. Courses Empty State

The designs deliberately do not provide an empty state.

Create a sensible empty state.

It should:

use the VCAD visual system

clearly tell the user that there are currently no courses

avoid looking like an error

provide an appropriate next action if one exists

Example conceptual structure:

No courses available
Check back soon for new courses.
[Explore VCAD]

Use the actual application's visual language rather than copying this exact text.

17. Homepage

Route:

/

Figma frame:

WEB-234 Homepage

Build the homepage in the exact section order shown in Figma.

Inspect and reproduce:

hero

hero imagery

hero typography

CTA buttons

decorative graphics

course/content sections

promotional sections

statistics or supporting information if present

footer

all carousel/gallery interactions

Do not invent additional sections.

Homepage carousel

The homepage contains interactive carousel behaviour.

It must actually work.

Support:

next

previous

active slide/state

disabled state where appropriate

keyboard accessibility where practical

touch/swipe on mobile if practical

Arrows, drag, or both are acceptable according to the test.

Do not create a static screenshot-like carousel.

18. Courses Gallery Strip

The courses design includes a gallery/strip interaction.

Make it functional.

Possible interaction:

Previous ← [image][image][image][image] → Next

or drag/swipe if that matches the design.

The important point is that the user must be able to interact with it.

Use CSS scroll snapping or a lightweight React implementation where appropriate.

Avoid adding a large carousel library solely for a simple interaction.

19. Course Details Page

Route:

/courses/[slug]

Figma frame:

WEB-594 Course Details Page

This page should be generated from the shared course data.

Do not hardcode a separate page for each course.

The page should support:

/courses/course-a
/courses/course-b
/courses/course-c

using the same route component and data model.

Inspect the Figma for:

course hero

title

school

duration

imagery

gallery

description

tabs

accordions

CTA

related courses

footer

Only implement elements actually present in the Figma.

20. Tabs

The course details page contains tabs.

They must be functional.

Requirements:

clicking a tab changes content

active tab is visually obvious

inactive tabs retain the Figma styling

keyboard interaction should work

tab content should not require a page reload

Use semantic ARIA roles where appropriate.

Example:

tablist
  tab
  tab
  tab

tabpanel

Do not implement tabs as navigation links if the Figma behaviour is clearly content switching.

21. Accordions

The course details page contains accordions.

They must be functional.

Requirements:

click to expand

click to collapse

clear active state

keyboard accessible

smooth enough transition

correct icon/arrow state

content should remain accessible

Use <button> for accordion triggers.

Do not use clickable <div> elements for controls.

22. Interactive Components

Any element that looks interactive in Figma should behave interactively.

Examples:

navigation

buttons

carousel arrows

sliders

tabs

accordions

gallery

mobile menu

course links

Do not build fake interactions.

If something is purely decorative, it does not need interaction.

23. Accessibility

Implement basic production-level accessibility.

Requirements:

semantic HTML

meaningful heading hierarchy

alt text for meaningful images

empty alt text for decorative images

buttons for actions

links for navigation

visible focus states

keyboard-accessible controls

sufficient contrast

ARIA only where necessary

no keyboard traps

Do not sacrifice accessibility for visual matching.

24. Responsive Behaviour

The design reference is 1440px, but the implementation must be responsive.

At minimum consider:

1440px+
1024px
768px
480px
375px

Inspect Figma for mobile-specific frames if available.

For sections without mobile specifications, make sensible decisions.

Responsive principles

Desktop:

preserve intended asymmetric layout

use the full visual hierarchy

Tablet:

reduce spacing

reduce typography where necessary

adjust multi-column grids

Mobile:

stack cards where appropriate

preserve visual order

maintain readable typography

make controls touch-friendly

prevent horizontal overflow

keep navigation usable

Do not simply scale the entire desktop design down.

25. Tailwind Strategy

Use Tailwind for layout and component styling.

Prefer semantic utility combinations over huge duplicated class strings.

If a style repeats frequently, create a reusable component or shared utility.

Avoid:

<div className="...very-long-repeated-class-list..." />

in many files.

Use constants/components for repeated UI.

26. Component Design

Good candidates for reusable components include:

Header
Footer
Button
Badge
CourseCard
CourseGrid
CourseMeta
Carousel
CarouselArrow
Tabs
Accordion
SectionHeading

Do not create a component for every <div>.

A component should exist because it:

represents a reusable UI concept

encapsulates meaningful behaviour

makes a page easier to understand

27. Server vs Client Components

Use Next.js Server Components by default.

Only add:

"use client";

where interactivity requires client-side state/event handlers.

Likely client components:

Carousel
Tabs
Accordion
MobileMenu
InteractiveGallery

Avoid turning entire pages into client components unnecessarily.

28. Data Fetching

The test does not require a backend.

Use local data.

For example:

src/data/courses.ts

The data layer should be designed so it could later be replaced by an API without rewriting the UI.

Conceptually:

getCourses()
getCourseBySlug(slug)

This also makes loading/empty states easier to model.

29. Error / Missing Course State

For:

/courses/[slug]

if the slug does not exist, return an appropriate Next.js not-found experience.

Use:

notFound();

where appropriate.

Do not render a broken page.

30. Image Handling

Use:

<Image />

for normal content images where appropriate.

Important:

correct aspect ratio

correct object positioning

correct cropping

avoid image distortion

provide meaningful alt text

use priority loading only for genuinely critical above-the-fold images

Do not blindly set every image to priority.

31. Performance

Keep the implementation lightweight.

Priorities:

avoid unnecessary JavaScript

use Server Components where possible

optimize images

avoid unnecessary dependencies

avoid giant client-side libraries

avoid duplicated data

avoid unnecessary rerenders

Do not prematurely optimize at the expense of visual quality.

32. SEO / Metadata

Set sensible metadata.

At minimum:

export const metadata = {
  title: "VCAD — Victoria College of Arts and Design",
  description: "...",
};

Use page-specific metadata where practical.

For course pages, use the course title in the metadata.

33. Code Quality Rules

Write code as if it will be reviewed by a senior engineer.

Avoid:

any

duplicated course data

duplicated header/footer

giant components

deeply nested conditional JSX

magic numbers where a token/constant is appropriate

unnecessary dependencies

inaccessible controls

fake interactions

placeholder text left in production UI

console logs

dead code

Prefer:

explicit TypeScript types

small reusable components

meaningful names

clean data models

predictable props

semantic HTML

simple state management

34. Git / Repository

Create a repository containing the complete project.

Recommended initial structure:

README.md
package.json
tsconfig.json
next.config.ts
tailwind.config.ts / equivalent
src/
public/

Make meaningful commits if time permits.

Suggested commit sequence:

feat: initialize Next.js project
feat: add VCAD design system
feat: build shared header and footer
feat: build homepage
feat: build courses page
feat: build course details
feat: add responsive refinements
feat: add loading and empty states

Do not spend excessive time on commit history if it compromises implementation time.

35. Validation Workflow

After implementation, inspect the site at:

1440px desktop
1024px tablet
768px tablet/mobile
480px mobile
375px mobile

Compare against Figma.

Check:

Visual

colours

typography

spacing

alignment

card dimensions

image crops

borders

radii

buttons

badges

icon placement

Functional

header navigation

mobile menu

homepage carousel

courses gallery

course links

tabs

accordions

buttons

course details routing

Technical

TypeScript passes

ESLint passes

production build succeeds

no console errors

no missing images

no broken routes

no horizontal overflow

no duplicated header/footer

36. Time Management — 5–6 Hour Test

Do not spend the entire test attempting to perfect all three pages.

Recommended allocation:

0:00–0:30
Figma inspection
Project setup
Design token setup

0:30–1:15
Header
Footer
Global typography
Global surfaces

1:15–2:45
Homepage
Primary responsive behaviour
Carousel interaction

2:45–4:00
Courses page
Asymmetric grid
Course data model
Course cards

4:00–5:00
Course details
Tabs
Accordions
Gallery

5:00–5:30
Loading state
Empty state
Responsive fixes

5:30–6:00
QA
Build
README
Deploy

This is a guideline, not a rigid schedule.

If the homepage is not production-quality at the halfway point, prioritize finishing it rather than rushing to the third page.

37. Definition of Done

The implementation is considered complete enough when:

Architecture

shared header exists

shared footer exists

course data is centralized

pages use reusable components

TypeScript is clean

Homepage

visual design closely matches Figma

major sections are implemented

carousel works

responsive layout works

Courses

asymmetric layout is reproduced

course cards are data-driven

school/duration badges are implemented

loading state exists

empty state exists

Course Details

dynamic route exists

course information comes from shared data

gallery works

tabs work

accordions work

Quality

responsive

accessible

no obvious console errors

production build works

deployed successfully

38. README Requirements

The final repository must contain a short README.

It must explain:

How to run locally

Example:

npm install
npm run dev

How far the implementation got

State clearly:

which pages were completed

which sections were completed

what was intentionally not completed

Why those priorities were chosen

Explain the reasoning briefly.

One decision not specified by the design

For example:

loading state

empty state

mobile behaviour

accessibility behaviour

Explain why the chosen solution makes sense.

What would be done next

Mention the most valuable remaining work.

Keep the README concise — approximately half a page is sufficient.

39. Deployment

Deploy the final application to one of:

Vercel

Netlify

Cloudflare Pages

another reliable free-tier platform

The live site must be publicly accessible.

Before submission:

npm run build

must succeed.

Verify the deployed URL manually.

40. Claude Execution Instructions

Phase 1 — Inspect

Before implementing:

Inspect the Figma file.

Identify all three page frames.

Identify shared header/footer.

Identify every major section.

Identify all image assets.

Identify interactive elements.

Identify desktop/mobile differences.

Extract exact measurements from Figma where available.

Do not start by guessing the layout from the textual description.

Phase 2 — Establish Design System

Create:

Inter font

global colours

typography scale

radii

reusable buttons

badges

common spacing conventions

Keep the values centralized.

Phase 3 — Build Shared Shell

Implement:

Root layout
Header
Footer
Global styles

Verify these before proceeding.

Phase 4 — Build Homepage

Implement the homepage section-by-section from the Figma.

After each major section:

compare against Figma

correct spacing

correct typography

correct image positioning

correct responsive behaviour

Then implement carousel functionality.

Phase 5 — Build Course Data

Create the course TypeScript model and data file.

The UI must consume this data.

Do not hardcode course information inside card components.

Phase 6 — Build Courses Page

Implement the exact asymmetric composition from Figma.

Use the shared course data.

Then implement:

loading state

empty state

responsive layout

Phase 7 — Build Course Details

Implement:

/courses/[slug]

Use the course data.

Implement:

hero

course information

gallery

tabs

accordions

CTA

related course content if present

Phase 8 — QA

Perform a final visual and technical audit.

Fix the highest-impact discrepancies first:

1. Layout
2. Typography
3. Images
4. Spacing
5. Colours
6. Interactions
7. Responsive issues
8. Accessibility

Do not waste the final minutes polishing tiny differences while major layout problems remain.

41. Important Claude Behaviour Rules

Rule 1 — Do not invent visual design

If Figma contains the answer, inspect Figma.

Rule 2 — Do not blindly trust this Markdown

This document defines requirements and recurring tokens.

The actual Figma remains the visual source of truth.

Rule 3 — Do not over-engineer

This is a 5–6 hour frontend test.

A clean simple implementation is better than a complex architecture.

Rule 4 — Do not use fake interactions

Every clearly interactive element must work.

Rule 5 — Do not duplicate course content

Course data belongs in the data layer.

Rule 6 — Do not duplicate header/footer

Build them once.

Rule 7 — Do not use excessive dependencies

Use React, Next.js, Tailwind and lightweight native solutions unless a dependency genuinely improves the implementation.

Rule 8 — Preserve maintainability

Another developer should be able to understand the project quickly.

Rule 9 — Prioritize quality

If time runs out:

One excellent page > three unfinished pages

Rule 10 — Tell the truth in README

Clearly document what was completed and what remains.

42. Final Submission Checklist

Before submitting:

Repository created

Repository access is correct

README included

Next.js App Router used

TypeScript used

Tailwind CSS used

Inter font used

Design tokens implemented

Header shared

Footer shared

Course data centralized

Homepage implemented

Courses page implemented

Course details implemented as far as time allows

Asymmetric course grid implemented

Loading state implemented

Empty state implemented

Homepage carousel works

Gallery works

Tabs work

Accordions work

Responsive layout tested

Accessibility basics checked

npm run build succeeds

Live deployment verified

Repo URL ready

Live URL ready

43. Final Instruction to Claude

Build the application now.

Start by inspecting the Figma file and understanding the exact page structure and visual measurements.

Then implement the project incrementally, following the architecture and constraints in this specification.

Do not return a high-level tutorial or pseudo-code.

Actually create and modify the project files.

When making implementation decisions that the Figma does not specify, choose the simplest production-quality solution that is consistent with the VCAD design language.

At the end, verify the application builds successfully and provide a concise summary containing:

pages completed

major interactions implemented

loading/empty-state decisions

remaining work

local run command

deployment status