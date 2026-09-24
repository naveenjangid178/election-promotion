# Civic Portfolio Template

An original React + Tailwind v4 + shadcn-style portfolio scaffold for a public
representative / civic leader, inspired by the section layout of
ravindrasinghbhati.com (hero, about, initiatives timeline, gallery, contact) —
built from scratch with placeholder content and original design tokens,
not copied text, photos, or code from that site.

## Stack
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- shadcn/ui-style components (Button, Card) using class-variance-authority
- lucide-react icons

## Getting started
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build
```

## Structure
```
src/
  components/
    ui/           # shadcn-style primitives (button, card)
    sections/      # Nav, Hero, About, Timeline, Gallery, Contact
  index.css        # design tokens (@theme) + Tailwind v4 import
  App.jsx
```

## Customize
- Replace placeholder name, bio, stats, and initiative text throughout
  `src/components/sections/*`.
- Swap the empty `bg-sand-dark` blocks in About.jsx and Gallery.jsx for real
  `<img>` tags / photos.
- Colors, fonts, and spacing tokens live in `src/index.css` under `@theme`.

## Animation notes
- Hero: staggered line-by-line text reveal + fade-in CTAs + a looping
  "scroll" cue (all respect `prefers-reduced-motion`).
- About / Timeline / Gallery: scroll-triggered reveal via Framer Motion's
  `whileInView`, using `viewport={{ once: true }}` so it fires once.
- Timeline items alternate slide-in direction (left/right) to distinguish
  entries instead of a single repeated fade.
- Gallery cards lift slightly on hover with a caption fade-in.

## Suggested enhancements
See the accompanying analysis for a fuller list — highlights:
1. Add real `<img>` assets with responsive `srcset` and lazy loading for
   the About portrait and Gallery grid.
2. Add a mobile nav (hamburger + slide-in menu) — current nav links are
   desktop-only (`hidden md:flex`).
3. Wire the contact form to a real backend/email service; add client-side
   validation and a submit success/error state.
4. Add `alt` text once real images are in place, and audit color contrast
   (clay-on-sand passes AA for large text; verify for small text too).
5. Add an SEO/OpenGraph block (title, description, og:image) to `index.html`.
6. Consider a CMS or JSON data file for initiatives/gallery items so content
   updates don't require code changes.
7. Add page transition / route handling if this grows beyond a single page
   (e.g. a dedicated "Press" or "News" section).
