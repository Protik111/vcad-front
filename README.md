# VCAD — Victoria College of Arts and Design

A Next.js (App Router), TypeScript, and Tailwind CSS web application for Victoria College of Arts and Design, built to pixel-perfect design specifications.

---

### / How to run it locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### / How far you got, and why you prioritised what you did

* **How Far It Got:**
  * **Shared Components:** Fully responsive `Header` and `Footer` with off-canvas mobile menu, active route indicators, and CTAs.
  * **Homepage (`/`):** Hero section, courses showcase, pull-quote section, campus gallery carousel, student stories, and partner logos.
  * **Courses Overview (`/courses`):** Asymmetric grid featuring standard photo cards and the unique expanded card layout with school & duration badges, gallery strip, and custom SVG corner notch borders.
  * **Course Details (`/courses/[slug]`):** Dynamic course hero, scroll-spy section navigation, key facts grid, year-by-year module accordion, admissions tabs, course spec download, and apply CTA.

* **Priority Reasoning:**
  * Prioritised the complete primary user journey (**Home → Courses List → Course Detail**) to deliver maximum functional value and show end-to-end component reuse (shared data models in `types/course.ts` and `data/courses.ts`). Shared design system tokens, header, and footer were built first to guarantee visual consistency.

---

### / One decision you made that the designs did not specify, and why

* **Interactive Corner Cutout Notch & Border Arc:**
  * The design specified a circular cutout notch for the arrow action button on course cards, but did not specify how border lines should behave around the circular notch.
  * **Decision:** Implemented a custom SVG arc stroke with calibrated `strokeDashoffset={56.28}` and a CSS radial gradient mask (`maskImage`). This seamlessly connects the card's bottom and right border lines around the notch, ensuring a clean, continuous border line across default and hover states.

---

### / What you would do next given more time

1. **Complete Secondary Pages:** Implement static pages for remaining navigation links (About, Campuses, VCAD Life, Policies, FAQs, etc.).
2. **Form Validation & Backend Integration:** Add interactive form state handling and API routes for course applications and inquiry forms.
3. **Asset & Performance Optimization:** Replace placeholder partner logos with official brand SVGs and fine-tune `next/image` responsive `sizes` props across all breakpoints.
