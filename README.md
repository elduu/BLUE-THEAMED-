# Amara & Julian — Pure React (JS) App

This is your original project, kept as a proper multi-file React app —
just converted from TypeScript to plain JavaScript/JSX. Same folder
layout, same components, same build tooling (Vite + Tailwind v4), no
TypeScript.

## Structure

```
amara-julian-wedding/
├── index.html
├── package.json
├── vite.config.js
├── jsconfig.json          (optional — gives editors the "@/..." path alias)
└── src/
    ├── main.jsx            entry point, mounts <App />
    ├── App.jsx             top-level layout, assembles every section
    ├── styles.css          Tailwind v4 + design tokens (unchanged)
    ├── lib/
    │   └── wedding.js       wedding details, nav links, calendar-link builder
    ├── hooks/
    │   └── useScrollReveal.js   scroll-reveal IntersectionObserver hook
    ├── components/wedding/
    │   ├── SectionHeading.jsx
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Countdown.jsx
    │   ├── CalendarSection.jsx
    │   ├── About.jsx
    │   ├── Story.jsx
    │   ├── VideoSection.jsx
    │   ├── Gallery.jsx
    │   ├── GalleryMarquee.jsx
    │   ├── GuestGallery.jsx
    │   ├── Rsvp.jsx
    │   ├── Gifts.jsx
    │   ├── Wishes.jsx
    │   ├── Location.jsx
    │   └── Footer.jsx
    └── assets/
        ├── bride.jpg, groom.jpg, hero.jpg, venue.jpg
        └── g1.jpg – g5.jpg
```

Every component is its own file, imported the normal ES-module way
(`import { Hero } from "@/components/wedding/Hero"`), exactly like the
original project — nothing is bundled into one file.

## Running it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## What changed vs. the original

- Every `.tsx`/`.ts` file was converted to `.jsx`/`.js` — all TypeScript
  type annotations, interfaces, and type-only imports were stripped; the
  runtime code (JSX, logic, styling) is otherwise identical.
- `tsconfig.json` was replaced with an optional `jsconfig.json` so editors
  still understand the `@/*` → `src/*` path alias.
- `package.json` and `vite.config.js` no longer reference TypeScript or
  `@types/*` packages.
- Nothing else changed: same Tailwind v4 setup, same design tokens in
  `styles.css`, same components, same data in `src/lib/wedding.js`.

## Editing

- Wedding details (names, date, venue, RSVP deadline, contact info) live
  in `src/lib/wedding.js`.
- Each section's content (love-story milestones, gift registry items,
  guest wishes) is a small array at the top of that section's own file in
  `src/components/wedding/`.
- Photos are in `src/assets/`; swap files in (same names) to update
  imagery everywhere it's used.
