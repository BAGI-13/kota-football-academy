# task.md — Kota Football Academy: Full Build Blueprint

> **Generated:** 2026-03-28  
> **Scope:** Complete technical roadmap to build the remaining ~70% of the platform.  
> **Author note:** All file paths are relative, never include the root folder name. All new large SVG illustrations are stored as individual files in `public/SVG/`. Small UI icons continue to use `react-icons` inline.

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ **[Done]** | Confirmed complete in codebase |
| 🚧 **[In Progress]** | Partially built — "What is done" and "What remains" are specified |
| ❌ **[Not Done]** | Not yet started — full technical spec provided |

---

## Tech Stack Reference (Confirmed from Codebase)

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | Next.js 15 (App Router) | File-based routing under `app/` |
| Language | TypeScript (strict mode) | `tsconfig.json` confirms |
| Styling | Tailwind CSS v4 | Configured via `postcss.config.mjs` + `@theme inline` in `app/globals.css`. **NO `tailwind.config.js` file exists.** |
| Icons | `react-icons` v5 | Already installed |
| Carousel | `embla-carousel-react` v8 | Already installed; `.embla` styles in `globals.css` |
| Forms | `@formspree/react` v3 | Already installed; existing Formspree ID: `mwprjwkr` |
| Animations | `react-countup` + `react-intersection-observer` | Already installed |
| Images | `next/image` | Used throughout existing components |
| Data | Static TypeScript files in `lib/data/` | No database; no ORM; no API routes currently |
| Fonts | Geist Sans + Geist Mono | Loaded via `next/font/google` in `app/layout.tsx` |

---

## Official Color Palette

All **new** code must exclusively use these tokens (defined in Phase 0):

| Name | Hex | Tailwind Class |
|------|-----|----------------|
| Crimson Red | `#DC143C` | `bg-crimson` / `text-crimson` |
| Crimson Dark (hover) | `#A50E2D` | `bg-crimson-dark` / `hover:bg-crimson-dark` |
| Charcoal Black | `#1C1C1C` | `bg-charcoal` / `text-charcoal` |
| Charcoal Light | `#2D2D2D` | `bg-charcoal-light` |
| White | `#FFFFFF` | `bg-white` / `text-white` |

> ❌ **FORBIDDEN in new code:** Any shade of `green-*`, `blue-*`, or `orange-*`.

---

## Existing Image Assets (DO NOT ALTER)

The following image paths are referenced in the current 30% codebase. They must remain untouched:

- `/g.png`, `/n.png`, `/aman.png` — Coach profile photos (CoachesSection)
- `/Full-SizeGrassPitch.jpg`, `/Floodlit Training Area.png`, `/Physiotherapy Room.jpg` — Facilities
- `/FULLHOUSE.jpg`, `/nationalcamp.jpg`, `/media2.png`, `/all.jpg`, `/grassroot.jpg`, `/High-Performance.png`, `/sports.png`, `/women.jpg`, `/alumini.jpg`, `/rural.png`, `/media.jpg`, `/facility.png` — Highlights collage
- `/gupta.png`, `/ravi.png`, `/sunita.png`, `/vikram.png`, `/amana.png`, `/priya.png`, `/mohit.png`, `/rajesh.png`, `/solanki.png`, `/rajan.png`, `/deepak.png`, `/neha.png` — Testimonial avatars
- `/ourstory.png`, `/mission.png`, `/vission.png` — About page
- `/senior.jpeg`, `/junior.jpg`, `/youth.jpg` — Teams page

---

---

# ✅ CONFIRMED COMPLETE — Granular Technical Audit of the Existing 30%

> This section is a precise record of every file, pattern, hook, sub-component, and
> configuration that is CONFIRMED working in the current codebase. All new work in
> Phases 0–11 must follow these established patterns and never contradict them.

---

## A. Project Scaffolding & Build Configuration

### A.1 — package.json
- ✅ Project name: `kota-football-academy`, version `0.1.0`, private: true
- ✅ Scripts confirmed: `dev` (next dev), `build` (next build), `start` (next start), `lint` (eslint)
- ✅ 8 runtime dependencies installed and working:
  - `next@15.5.6`
  - `react@19.1.0` / `react-dom@19.1.0`
  - `@formspree/react@^3.0.0`
  - `embla-carousel-react@^8.6.0`
  - `react-countup@^6.5.3`
  - `react-icons@^5.5.0`
  - `react-intersection-observer@^10.0.0`
- ✅ DevDependencies: `typescript@^5`, `tailwindcss@^4`, `@tailwindcss/postcss@^4`, `eslint@^9`, `eslint-config-next@15.5.6`, `@types/react@^19`, `@types/react-dom@^19`, `@types/node@^20`, `@eslint/eslintrc@^3`

### A.2 — tsconfig.json
- ✅ `"target": "ES2017"` compilation target
- ✅ `"lib": ["dom", "dom.iterable", "esnext"]`
- ✅ `"strict": true` — TypeScript strict mode enabled project-wide
- ✅ `"noEmit": true` — TypeScript is type-check only; Next.js handles compilation
- ✅ `"moduleResolution": "bundler"` — Next.js 15 recommended strategy
- ✅ `"isolatedModules": true` — each file compiled independently
- ✅ `"jsx": "preserve"` — JSX left for Next.js to transform
- ✅ `"incremental": true` — faster rebuilds via `.tsbuildinfo`
- ✅ `"paths": { "@/*": ["./*"] }` — the `@/` import alias is live and used throughout the codebase
- ✅ Next.js plugin registered: `"plugins": [{ "name": "next" }]`

### A.3 — next.config.ts
- ✅ File exists and exports a valid `NextConfig` typed object
- ✅ Currently empty (no custom domains, redirects, or headers)
- ⚠️ Note: When using `next/image` with external URLs in future phases, `images.remotePatterns` must be added here. Currently all images are local `/public/` assets.

### A.4 — postcss.config.mjs
- ✅ `@tailwindcss/postcss` registered as the sole PostCSS plugin
- ✅ Tailwind v4 config-free approach confirmed — there is NO `tailwind.config.js` or `tailwind.config.ts`. All Tailwind configuration lives exclusively in `app/globals.css` via `@theme inline`.

### A.5 — eslint.config.mjs
- ✅ Flat config format (ESLint v9)
- ✅ Uses `FlatCompat` from `@eslint/eslintrc` to bridge legacy `extends`
- ✅ Extends: `next/core-web-vitals` + `next/typescript`
- ✅ Ignores: `node_modules/**`, `.next/**`, `out/**`, `build/**`, `next-env.d.ts`

---

## B. Styling System — Tailwind v4 + globals.css

### B.1 — Confirmed Tokens & Base Rules in app/globals.css
- ✅ `@import "tailwindcss"` — Tailwind v4 entry point (NOT `@tailwind base/components/utilities`)
- ✅ `:root` CSS properties: `--background: #ffffff`, `--foreground: #171717`
- ✅ `@theme inline` block — 4 design tokens currently registered:
  - `--color-background: var(--background)` → enables `bg-background`
  - `--color-foreground: var(--foreground)` → enables `text-foreground`
  - `--font-sans: var(--font-geist-sans)` → enables `font-sans`
  - `--font-mono: var(--font-geist-mono)` → enables `font-mono`
- ✅ Dark mode override via `@media (prefers-color-scheme: dark)`: `--background: #0a0a0a`, `--foreground: #ededed`
- ✅ `body { font-family: var(--font-sans); }` — default font applied globally via CSS (not inline className)
- ✅ Embla carousel base rules (3 rules, required for TestimonialsSection):
  - `.embla { overflow: hidden; }`
  - `.embla__container { display: flex; }`
  - `.embla__slide { position: relative; }`

### B.2 — Established Tailwind Class Patterns (All New Code Must Follow)

**Section containers:**
| Pattern | Tailwind Classes |
|---------|-----------------|
| White section | `w-full bg-white py-20` |
| Dark section | `w-full bg-slate-900 text-white py-20` |
| Transparent section | `w-full py-20` (inherits body bg) |
| Page content wrapper | `container mx-auto py-20 px-6` |

**Typography:**
| Element | Tailwind Classes |
|---------|-----------------|
| Page H1 | `text-4xl md:text-5xl font-bold text-slate-900` |
| Section H2 | `text-3xl font-bold text-center mb-12 text-slate-800` |
| Body copy | `text-lg text-slate-600` or `text-lg text-slate-700` |
| Accent label | `text-orange-600 font-semibold` → **migrate to `text-crimson`** |

**Cards:**
| Pattern | Tailwind Classes |
|---------|-----------------|
| Standard card | `bg-white rounded-lg shadow-lg p-6` |
| Card hover | `hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out` |
| Glassmorphism card | `bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-6` |

**Buttons:**
| Pattern | Tailwind Classes |
|---------|-----------------|
| Primary CTA | `inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-orange-700 hover:scale-105 transition-all duration-300 ease-in-out` → **migrate** |
| Disabled | `disabled:opacity-50 disabled:cursor-not-allowed` |

**Alternating image/text layouts:**
| Pattern | Technique |
|---------|-----------|
| Image right on desktop | `md:order-last` on image div, `md:order-first` on content div |
| Image left on desktop | Default order — no `md:order-*` needed |

**Forms:**
| Element | Tailwind Classes |
|---------|-----------------|
| Input | `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3` → **migrate focus colors** |
| Label | `block text-sm font-medium text-slate-800` |

**Images:**
| Pattern | Implementation |
|---------|---------------|
| Contained image | `relative w-full h-[N] rounded-lg shadow-xl overflow-hidden` with `next/image layout="fill" objectFit="cover"` |
| Circular image | `relative w-48 h-48 rounded-full overflow-hidden` |
| Placeholder bg | `className="bg-gray-200"` on `<Image>` |

---

## C. Typography

- ✅ `Geist` (sans) loaded via `next/font/google`: `variable: "--font-geist-sans"`, `subsets: ["latin"]`
- ✅ `Geist_Mono` loaded via `next/font/google`: `variable: "--font-geist-mono"`, `subsets: ["latin"]`
- ✅ Both CSS variables injected on `<body>` className in `app/layout.tsx`
- ✅ `antialiased` applied globally to body

---

## D. Global Layout Architecture

### D.1 — app/layout.tsx
- ✅ Named `Metadata` export with correct TypeScript type: `title: "Kota Football Academy"`, `description: "Official website of the Kota Football Academy"`
- ✅ `<html lang="en">` — language attribute for accessibility and SEO
- ✅ Body layout pattern: `flex flex-col min-h-screen` — enables sticky footer
- ✅ `<Header />` renders above `<main className="flex-grow">`
- ✅ `<Footer />` always at bottom regardless of page content height
- ✅ `Readonly<{ children: React.ReactNode }>` — strict children typing
- ✅ Both Geist font variables applied to body

### D.2 — app/page.tsx — Homepage Composition
- ✅ 8 sections in this exact render order: `HeroSection → WelcomeSection → ProgramSection → CoachesSection → FacilitiesSection → AchievementsSection → HighlightsSection → TestimonialsSection`
- ✅ Fragment wrapper `<>...</>` — no unnecessary wrapper div
- ✅ All 8 imports use `@/components/` alias

---

## E. Components — Every Confirmed Detail

### E.1 — components/Header.tsx
**Directive & Imports:**
- ✅ `"use client"` — required for all hooks
- ✅ Imports: `React`, `useState`, `useEffect` from `react`; `Link` from `next/link`; `usePathname` from `next/navigation`

**State (4 variables):**
- ✅ `isMenuOpen: boolean` — mobile dropdown open/close
- ✅ `isVisible: boolean` — header translate-y show/hide animation
- ✅ `lastScrollY: number` — previous scroll Y for direction detection
- ✅ `isScrolled: boolean` — true when `window.scrollY > 50`; triggers glassmorphism nav

**Scroll logic (useEffect):**
- ✅ `window.addEventListener('scroll', handleScroll)` with `return () => window.removeEventListener(...)` cleanup
- ✅ Guard: if `isMenuOpen` → always `setIsVisible(true); return` (prevents header hiding while mobile menu is open)
- ✅ Hide condition: `currentScrollY > lastScrollY && currentScrollY > 100`
- ✅ Show condition: else branch sets `setIsVisible(true)`
- ✅ `setLastScrollY(currentScrollY)` always runs after direction check
- ✅ Dependency array: `[lastScrollY, isMenuOpen]`

**Active link detection:**
- ✅ `usePathname()` at component level
- ✅ Active logic: `(link.href === '/' && pathname === '/')` OR `(link.href !== '/' && pathname.startsWith(link.href))` — handles nested routes (e.g. `/about/team` still highlights About)
- ✅ Active underline: `<span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-orange-700" />` (absolute `<span>` inside a `relative` `<Link>`)

**Desktop nav:**
- ✅ `hidden md:flex gap-6` — invisible on mobile
- ✅ Each `<Link>` has `relative` class to position the underline indicator

**Glassmorphism on scroll (isScrolled):**
- ✅ Header outer: adds `md:bg-transparent md:bg-none` when scrolled (prevents mobile gradient showing on desktop)
- ✅ Inner `<nav>`: `md:mt-2 md:rounded-full md:bg-gradient-to-r md:from-white md:via-orange-100 md:to-orange-200 md:shadow-xl` when scrolled
- ✅ `transition-all duration-300 ease-in-out` on nav for smooth morph
- ✅ `z-50` on `<header>` — layering above all page content
- ✅ `transition-transform duration-300` for smooth slide up/down

**Mobile hamburger:**
- ✅ Hamburger path: `M4 6h16M4 12h16m-7 6h7` (inline SVG, no external library)
- ✅ Close (X) path: `M6 18L18 6M6 6l12 12`
- ✅ `aria-label="Toggle menu"` for accessibility

**Mobile dropdown:**
- ✅ `absolute top-full left-0 right-0 bg-white shadow-lg z-20`
- ✅ `flex flex-col items-center gap-4 py-6`
- ✅ Each mobile link calls `setIsMenuOpen(false)` onClick — dismisses menu on navigation

**Nav data:**
- ✅ `navLinks` array: `[{href:'/', label:'Home'}, {href:'/about', label:'About'}, {href:'/teams', label:'Teams'}, {href:'/contact', label:'Contact'}]`

---

### E.2 — components/Footer.tsx
- ✅ `w-full bg-gray-900 text-white p-6 text-center mt-12`
- ✅ `container mx-auto` centered wrapper
- ✅ `new Date().getFullYear()` — dynamic copyright year

---

### E.3 — components/HeroSection.tsx
- ✅ Server component (no `"use client"`)
- ✅ `container mx-auto text-center py-20 md:py-32`
- ✅ H1: `text-4xl md:text-6xl font-bold text-slate-900`
- ✅ Tagline `<p>`: `text-lg md:text-2xl mt-4 mb-8 text-slate-700`
- ✅ Single CTA: `<Link href="/contact">` styled with `inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-orange-700 hover:scale-105 transition-all duration-300 ease-in-out`

---

### E.4 — components/WelcomeSection.tsx
- ✅ Server component
- ✅ `container mx-auto px-6 pb-20` — `pb-20` only, no top padding (flows directly below HeroSection)
- ✅ `max-w-3xl mx-auto text-center` paragraph constraint

---

### E.5 — components/ProgramSection.tsx
**`ProgramCard` sub-component (inline):**
- ✅ Props: `icon: React.ReactNode`, `title: string`, `description: string`
- ✅ Icon wrapper: `flex justify-center mb-4`; icon: `text-5xl text-orange-500`
- ✅ Card: `bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out`

**Main section:**
- ✅ `w-full bg-white py-20`
- ✅ Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- ✅ 6 programs confirmed with icons from 3 packages:

| Program | Icon | Package |
|---------|------|---------|
| Youth Development (U-12) | `FaChild` | `react-icons/fa` |
| Junior Academy (U-18) | `GiSoccerBall` | `react-icons/gi` |
| Goalkeeper Elite | `GiGoalKeeper` | `react-icons/gi` |
| Tactical Awareness | `GiTeamIdea` | `react-icons/gi` |
| Fitness & Conditioning | `FaRunning` | `react-icons/fa` |
| Defensive Masterclass | `BsShieldFillCheck` | `react-icons/bs` |

---

### E.6 — components/CoachesSection.tsx
**`CoachCard` sub-component (inline):**
- ✅ Props: `name: string`, `title: string`, `imageUrl: string`
- ✅ Outer div: `flex flex-col items-center text-center` — no background
- ✅ Image container: `relative w-48 h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`
- ✅ Image: `grayscale hover:grayscale-0 transition-all duration-300` — B&W to colour on hover
- ✅ Name: `text-xl font-bold text-slate-800`; Title: `text-orange-600 font-semibold`

**Main section:**
- ✅ No background — transparent, inherits body
- ✅ `w-full py-20`
- ✅ Grid: `grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8`
- ✅ 3 coaches hardcoded in JSX: Gurmail Singh (`/g.png`), Nitin Jangra (`/n.png`), Aman Kumar (`/aman.png`)
- ✅ **This component is reused on `app/about/page.tsx`** — established reuse pattern

---

### E.7 — components/FacilitiesSection.tsx
- ✅ `w-full bg-white py-20`
- ✅ `space-y-16` — 3 facility entries with large vertical gaps
- ✅ Each facility: `grid-cols-1 md:grid-cols-2 gap-8 items-center`
- ✅ Image div: `relative w-full h-72 rounded-lg shadow-lg overflow-hidden` with `next/image layout="fill" objectFit="cover" className="bg-gray-200"`
- ✅ Alternating layout: `md:order-last` on image and `md:order-first` on content (Facility 2 only)
- ✅ Icon + heading: `flex items-center gap-4 mb-3`, icon `text-4xl text-orange-500`
- ✅ Icons: `GiSoccerField` (Pitch), `FaLightbulb` (Floodlit), `FaBriefcaseMedical` (Physio)

---

### E.8 — components/AchievementsSection.tsx
**`StatItem` sub-component (inline):**
- ✅ Props: `icon: React.ReactNode`, `end: number`, `label: string`
- ✅ Own `useInView({ triggerOnce: true, threshold: 0.5 })` per stat item
- ✅ `ref` from `useInView` attached to outermost `<div>`
- ✅ CountUp conditional: `{inView ? <CountUp end={end} duration={3} /> : '0'}` — animation only starts on scroll-into-view
- ✅ `+` suffix: `<span className="text-orange-500">+</span>` — inline (migrate to crimson)
- ✅ Icon: `text-6xl text-orange-500 mb-3` (migrate); Number: `text-5xl font-bold`; Label: `text-lg mt-2`

**Main section:**
- ✅ `w-full bg-slate-900 text-white py-20`
- ✅ Grid: `grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8`
- ✅ Stats: 12 trophies (`GiTrophyCup`), 35 state players (`FaUserGraduate`), 5 pros (`GiSoccerBall`)

---

### E.9 — components/HighlightsSection.tsx
**`CollageNote` sub-component:**
- ✅ Props: `text: string`, `position` (8-value union), `rotate?: 'slight-left' | 'slight-right' | 'none'`
- ✅ `notePosMap: Record<CollageNoteProps["position"], string>` — all 8 positions mapped to absolute Tailwind classes
- ✅ `rotateMap` — 3 values mapped to `-rotate-2`, `rotate-2`, `""`
- ✅ Styling: `bg-white/80 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs md:text-sm font-medium text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/5`
- ✅ `pointer-events-none select-none` — purely decorative overlay

**`CollageItem` sub-component:**
- ✅ Props: `title`, `description`, `imageUrl`, `aspect?: '16/9'|'4/3'|'1/1'|'3/4'`, `notes?: CollageNoteProps[]`, `priority?: boolean`
- ✅ Aspect mapping: conditional Tailwind arbitrary aspect strings (`aspect-[16/9]` etc.)
- ✅ Semantic markup: `<figure role="group" aria-label={title}>`
- ✅ Masonry-safe: `break-inside-avoid mb-5 relative`
- ✅ Hover: `hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out`
- ✅ `next/image`: `fill`, `sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"`, `object-cover object-center`
- ✅ Dark gradient overlay: `absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`
- ✅ `<figcaption>` with absolute bottom `p-4 md:p-5 text-white`
- ✅ First item has `priority: true` set — LCP optimization

**Main section:**
- ✅ `w-full bg-white py-16 md:py-20`
- ✅ Masonry: `columns-1 sm:columns-2 lg:columns-3 gap-5`
- ✅ 12 items in `ITEMS` array with varied aspects and sticker notes

---

### E.10 — components/TestimonialsSection.tsx
**Directive & Imports:**
- ✅ `"use client"` directive
- ✅ `useCallback`, `useEffect`, `useState` from `react`; `Image` from `next/image`
- ✅ `useEmblaCarousel` from `embla-carousel-react`
- ✅ `FaStar`, `FaChevronLeft`, `FaChevronRight` from `react-icons/fa`

**Embla setup:**
- ✅ `useEmblaCarousel({ loop: false, align: 'start' })` — no looping, left-aligned
- ✅ Returns `[emblaRef, emblaApi]`; `emblaRef` attached to `.embla` div

**Button state logic:**
- ✅ `prevBtnDisabled: boolean` — starts `true` (at index 0)
- ✅ `nextBtnDisabled: boolean` — starts `true` (emblaApi not ready)
- ✅ `scrollPrev` / `scrollNext` via `useCallback` with `[emblaApi]` dependency
- ✅ `onSelect` callback: reads `canScrollPrev()` / `canScrollNext()` to update both states
- ✅ `useEffect`: subscribes to `'select'` and `'reInit'` embla events; calls `onSelect()` on init

**Sub-components confirmed:**
- ✅ `StarRating`: 5× `<FaStar />` in `flex gap-1 text-yellow-400`
- ✅ `TestimonialCard`: `embla__slide flex-[0_0_90%] md:flex-[0_0_48%] lg:flex-[0_0_32%] mx-4`; `bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between`; curly quotes via `&ldquo;` / `&rdquo;`; avatar `relative w-14 h-14 rounded-full overflow-hidden bg-gray-200`
- ✅ `PrevButton`: `absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed z-10`
- ✅ `NextButton`: mirror of PrevButton with `right-0 translate-x-4`
- ✅ Both use `FaChevronLeft` / `FaChevronRight` at `text-orange-600 text-xl` (migrate to crimson)

**Data:**
- ✅ 12 testimonials in `testimonialsData` — fields: `quote`, `name`, `relation`, `imageUrl`
- ✅ 12 image paths referenced: `/gupta.png` through `/neha.png` (see Existing Image Assets)

**Carousel layout:**
- ✅ Wrapper `relative max-w-6xl mx-auto` — enables absolute button overflow beyond carousel bounds

---

## F. Pages — Every Confirmed Detail

### F.1 — app/about/page.tsx
- ✅ Server component
- ✅ `ValueCard` inline sub-component: `icon`, `title`, `description` props; `bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center`
- ✅ Page wrapper: `container mx-auto py-20 px-6`
- ✅ Page header: `text-4xl md:text-5xl font-bold`, subtitle `max-w-2xl mx-auto`, `mb-16`
- ✅ "Our Story" grid: `grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20`
- ✅ Mission: `FaBullseye` icon, image right (`md:order-last` on image)
- ✅ Vision: `FaEye` icon, image left with `md:order-last` on image div and `md:order-first` on text div
- ✅ `space-y-16` between Mission and Vision
- ✅ Core Values: `grid-cols-1 md:grid-cols-3 gap-8`, section with `py-20`
- ✅ Value icons: `FaShieldAlt` (Discipline), `FaUsers` (Teamwork), `FaTrophy` (Excellence)
- ✅ `<CoachesSection />` reused at bottom — confirmed reuse pattern

### F.2 — app/contact/page.tsx
- ✅ `"use client"` directive
- ✅ `useForm("mwprjwkr")` — active Formspree ID
- ✅ `state.succeeded` → full-page thank-you card rendered in place
- ✅ `state.submitting` → submit button disabled
- ✅ `ValidationError` for `email` and `message` fields with `className="mt-2 text-sm text-red-600"`
- ✅ 2-column layout: `md:grid-cols-5`, left `md:col-span-2`, right `md:col-span-3`, `max-w-6xl py-20`
- ✅ Left column: `<a href="tel:...">` + `<a href="mailto:...">` with `group` hover pattern; `FaPhone`, `FaEnvelope`, `FaMapMarkerAlt` icons; Google Maps `<iframe>` with `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"`, `style={{ border: 0 }}`, `allowFullScreen={false}`
- ✅ Form card: `bg-white p-8 rounded-lg shadow-lg`
- ✅ 5 fields: `name` (text), `email` (email), `contact_number` (tel), `whatsapp_number` (tel, optional), `message` (textarea, 4 rows)
- ✅ Input pattern: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3`
- ✅ Submit: `w-full px-8 py-3 bg-orange-600 text-white ... disabled:opacity-50`

### F.3 — app/teams/page.tsx
- ✅ Server component
- ✅ `TeamSection` inline sub-component: `title`, `ageGroup`, `description`, `imageUrl`, `focusPoints: {icon: React.ReactNode; text: string}[]`, `imageLeft?: boolean`
- ✅ `imageLeft` controls `md:order-first / md:order-last` on both columns
- ✅ 3 teams: Senior (18+, `imageLeft=false`), Junior Academy (U-7, `imageLeft=true`), Youth Dev (U-12, `imageLeft=false`)
- ✅ `space-y-20` between team sections
- ✅ CTA: `text-center bg-white py-16 mt-20 rounded-lg shadow-xl` with `<Link href="/contact">`
- ✅ Focus point icons: `FaTrophy`, `FaShieldAlt`, `FaStar`, `FaPlayCircle`

---

## G. Public Assets Inventory

**Currently in `/public/` (boilerplate — unused in any page):**
- ✅ `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

**Required by existing components (must exist in `/public/`):**
- Coach images: `/g.png`, `/n.png`, `/aman.png`
- Facility images: `/Full-SizeGrassPitch.jpg`, `/Floodlit Training Area.png`, `/Physiotherapy Room.jpg`
- Highlights collage: 12 image files (see Existing Image Assets section)
- Testimonial avatars: 12 image files
- About page: `/ourstory.png`, `/mission.png`, `/vission.png`
- Teams page: `/senior.jpeg`, `/junior.jpg`, `/youth.jpg`
- ⚠️ `public/SVG/` directory does NOT yet exist — must be created in Phase 11

---

## H. Established Code Patterns (Mandatory for All New Work)

| Rule | Detail |
|------|--------|
| **Server vs Client** | Default to Server Components. Add `"use client"` ONLY when using hooks, browser APIs, or event handlers. |
| **Import alias** | Always use `@/` alias. Never use relative `../../` paths. |
| **Images** | Always `next/image`. Never `<img>` tags. |
| **Navigation** | Always `next/link` for internal links. Never `<a href="...">` for internal routes. |
| **Icon sizing** | Icons placed in a `<span className="text-[size] text-[color]">` wrapper. |
| **Sub-components** | Define page-specific sub-components in the same file as the page. Extract to `components/` only when used in 2+ places. |
| **TypeScript props** | All component props must be typed. Inline `{ prop: type }` or named `type`. Never `any`. |
| **Responsive breakpoints** | Mobile-first. `md:` for ≥768px tablet, `lg:` for ≥1024px desktop. |
| **Section spacing** | `py-20` standard. `py-16 md:py-20` for media-heavy. `container mx-auto px-6` for content width. |
| **Transitions** | `transition-all duration-300 ease-in-out` is the global standard. |
| **Component reuse** | `<CoachesSection />` is confirmed reusable. Reuse pattern is established and expected. |

---

---

# PHASE 0: Foundation & Theme System

---

## 0.1 — Define Custom Color Tokens in Tailwind v4

- **File:** `app/globals.css`
- **Status:** ✅ [Done]
- **Task:** Inside the existing `@theme inline { ... }` block, append the following custom color tokens. These unlock `bg-crimson`, `text-crimson`, `bg-charcoal`, etc. as first-class Tailwind utilities across the entire project:

```css
/* Add INSIDE the existing @theme inline { } block */
--color-crimson: #DC143C;
--color-crimson-dark: #A50E2D;
--color-charcoal: #1C1C1C;
--color-charcoal-light: #2D2D2D;
```

> **Important:** Tailwind v4 uses `@theme inline` instead of a `tailwind.config.js`. Adding tokens here makes them globally available. No other configuration file needs to change.

---

## 0.2 — Body Background Migration

- **File:** `app/layout.tsx`
- **Status:** ✅ [Done]
- **What is currently done:** The `<body>` tag has `bg-gradient-to-r from-white via-orange-100 to-orange-200`. This produces the site-wide orange gradient.
- **Task:** Replace that gradient class with `bg-white`. Individual sections will control their own backgrounds (dark, crimson, white) going forward. This is required before the color migration in 0.3 works cleanly.

**Change this line in `<body className={...}>`:**
```
// BEFORE
bg-gradient-to-r from-white via-orange-100 to-orange-200

// AFTER
bg-white
```

---

## 0.3 — Color Migration: Orange → Crimson (Existing 30%)

- **Status:** ✅ [Done]
- **Files to update:**
  - `components/Header.tsx`
  - `components/Footer.tsx`
  - `components/HeroSection.tsx`
  - `components/ProgramSection.tsx`
  - `components/CoachesSection.tsx`
  - `components/FacilitiesSection.tsx`
  - `components/AchievementsSection.tsx`
  - `components/TestimonialsSection.tsx`
  - `app/about/page.tsx`
  - `app/teams/page.tsx`
  - `app/contact/page.tsx`

**Replacement map (apply globally across all files above):**

| Find | Replace |
|------|---------|
| `text-orange-500` | `text-crimson` |
| `text-orange-600` | `text-crimson` |
| `text-orange-700` | `text-crimson-dark` |
| `bg-orange-600` | `bg-crimson` |
| `hover:bg-orange-700` | `hover:bg-crimson-dark` |
| `focus:border-orange-500` | `focus:border-crimson` |
| `focus:ring-orange-500` | `focus:ring-crimson` |
| `border-orange-600` | `border-crimson` |
| `md:from-white md:via-orange-100 md:to-orange-200` | `md:bg-white` (in `Header.tsx` scrolled state) |
| `from-white via-orange-100 to-orange-200` | `bg-white` (in `Header.tsx` isScrolled fallback) |

> **Do NOT change:** Any image `src` attributes, SVG files in `/public`, or any non-className strings.

---

---

# PHASE 1: Global Layout — Header & Footer

---

## 1.1 — Header: Add Navigation Links for New Pages

- **File:** `components/Header.tsx`
- **Status:** ✅ [Done]

**What is done:**
- ✅ Sticky header with `translate-y-0 / -translate-y-full` auto-hide on scroll
- ✅ Glassmorphism effect on scroll (`isScrolled` state)
- ✅ Active link underline via `usePathname()`
- ✅ Mobile hamburger menu with dropdown
- ✅ 4 current nav links: Home, About, Teams, Contact

**What remains:**
- The `navLinks` array must grow to include the 6 new pages being built.
- With 10 nav items, the flat desktop nav will overflow. A grouped dropdown strategy is required.

**Task:**

**Step 1:** Update the `navLinks` array:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/teams', label: 'Teams' },
  { href: '/roster', label: 'Roster' },
  { href: '/fixtures', label: 'Fixtures' },
  { href: '/training', label: 'Training' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];
```

**Step 2 — Desktop Grouped Dropdowns:** Reorganize the desktop `<nav>` into grouped items to prevent overflow. Group structure:

```
Home | About | Club ▾ | Media ▾ | Admissions | Contact
```

- **Club dropdown** (hover/click): Teams, Roster, Fixtures, Training
- **Media dropdown** (hover/click): Gallery, News

Use `useState<string | null>` for `openDropdown`. On hover of group label, set state. Render the dropdown `<div>` with `absolute top-full bg-white shadow-xl rounded-xl py-2 min-w-[160px]`. Each dropdown link: `px-4 py-2 hover:bg-crimson hover:text-white text-charcoal block text-sm font-medium`.

**Step 3 — Mobile menu:** The full flat list continues to work in mobile. Add all new links to the existing accordion (no structural changes needed, just data).

**Step 4 — Apply Phase 0.3 color migration:** Replace all `orange-*` classes per the replacement map.

---

## 1.2 — Footer: Full Rebuild into Multi-Column Layout

- **File:** `components/Footer.tsx`
- **Status:** ✅ [Done]

**What is done:**
- ✅ Footer container exists with `bg-gray-900 text-white`
- ✅ Copyright line renders dynamically via `new Date().getFullYear()`

**What remains:**
- The footer is a single-line copyright. It needs to be a full-featured 4-column footer with sitemap, contact info, and social links.

**Task:**

Rebuild `components/Footer.tsx` with the following structure. Change background to `bg-charcoal` (using the new token from Phase 0.1).

```
[ Brand + Tagline + Social Icons ] [ Quick Links ] [ Explore ] [ Contact Info ]
           ─────────────────────────────────────────────────────
                       © 2025 Kota Football Academy. All Rights Reserved.
```

**Column details:**

- **Column 1 — Brand (md:col-span-1):**
  - Academy name: `text-white text-xl font-black`
  - Tagline: `text-gray-400 text-sm mt-2 mb-6`
  - Social row: `FaInstagram`, `FaFacebook`, `FaYoutube`, `FaTwitter` (from `react-icons/fa`)
  - Social icon style: `text-gray-400 hover:text-crimson text-2xl transition-colors duration-200`

- **Column 2 — Quick Links (md:col-span-1):**
  - Heading: `text-crimson font-bold text-sm uppercase tracking-widest mb-4`
  - Links: Home, About, Teams, Roster → `text-gray-400 hover:text-white text-sm block py-1 transition-colors`

- **Column 3 — Explore (md:col-span-1):**
  - Same heading style
  - Links: Fixtures, Training, Gallery, News, Admissions

- **Column 4 — Contact Info (md:col-span-1):**
  - Same heading style
  - Phone: `FaPhone` icon + number (import from `lib/siteConfig.ts` — Phase 10.2)
  - Email: `FaEnvelope` icon + email
  - Address: `FaMapMarkerAlt` icon + address (2-line)
  - Each row: `flex items-start gap-3 text-gray-400 text-sm py-1`

- **Bottom bar:**
  - `<hr>` with `border-charcoal-light mt-12 mb-6`
  - Copyright: `text-gray-500 text-sm text-center`

---

---

# PHASE 2: Homepage — Section Enhancements

---

## 2.1 — HeroSection: Full Visual Rebuild

- **File:** `components/HeroSection.tsx`
- **Status:** ✅ [Done]

**What is done:**
- ✅ Component exists and renders correctly
- ✅ Heading "Kota Football Academy", tagline, and "Join Now" CTA button
- ✅ Responsive padding (`py-20 md:py-32`)

**What remains:**
- The hero is purely text on a plain white background — no visual impact. It needs a dark background, decorative SVG, two CTAs, and a scroll indicator to become a proper landing hero.

**Task:**

1. Change section background: `bg-charcoal relative overflow-hidden min-h-screen flex items-center`
2. Add crimson diagonal stripe accent: inside the section, add a `<div className="absolute inset-0 pointer-events-none overflow-hidden">` containing a `<div className="absolute -right-20 top-0 w-[600px] h-full bg-crimson opacity-[0.07] skew-x-[-12deg] transform-gpu">` for a subtle brand accent.
3. Add SVG illustration (created in Phase 11.1): position it absolutely on the right side of the hero on `md:` and above:
   ```tsx
   <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] opacity-30 pointer-events-none">
     <Image src="/SVG/hero-ball-graphic.svg" alt="" width={600} height={500} priority />
   </div>
   ```
4. Update typography to be bolder and white:
   - Title: `text-white text-5xl md:text-7xl font-black tracking-tight leading-tight`
   - Tagline: `text-gray-300 text-xl md:text-2xl mt-4 mb-10`
5. Replace single CTA with two buttons (side by side on desktop, stacked on mobile):
   - Primary: `bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105`
   - Secondary (outline): `border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300` — label "View Highlights", `href="/gallery"`
6. Animated scroll chevron at the very bottom center of the section:
   ```tsx
   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
     <FaChevronDown className="text-white/50 text-2xl" />
   </div>
   ```

---

## 2.2 — WelcomeSection: Add Crimson Accent & Stat Pills

- **File:** `components/WelcomeSection.tsx`
- **Status:** ✅ [Done]

**What is done:**
- ✅ Section heading and paragraph exist

**What remains:**
- Section is visually flat. Needs a crimson accent bar above the heading and quick-stat pills below the paragraph.

**Task:**

1. Above the `<h2>`, add: `<div className="w-16 h-1 bg-crimson mx-auto mb-4 rounded-full"></div>`
2. Below the `<p>`, add a row of 3 stat pills:
   ```tsx
   <div className="flex flex-wrap justify-center gap-3 mt-8">
     {['Founded 2020', '3 AFC Licensed Coaches', '35+ State-Level Players'].map((stat) => (
       <span key={stat} className="inline-block px-5 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-semibold">
         {stat}
       </span>
     ))}
   </div>
   ```

---

---

# PHASE 3: Roster & Squad Profiles

---

## 3.1 — Player Data File

- **File:** `lib/data/players.ts`
- **Status:** ✅ [Done]
- **Task:** Create the `lib/` directory and this file. Export a `Player` type and a `players` array.

```typescript
// lib/data/players.ts

export type Player = {
  id: string;                  // URL-safe: "ravi-prakash"
  name: string;
  number: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  team: 'Senior' | 'U-18' | 'U-12';
  age: number;
  nationality: string;
  bio: string;
  imageUrl: string;            // e.g. "/players/ravi-prakash.jpg"
  stats: {
    appearances: number;
    goals: number;
    assists: number;
    cleanSheets?: number;      // Goalkeepers only
  };
  isCaptain?: boolean;
  isFeatured?: boolean;        // Show as spotlight card on roster page
};

export const players: Player[] = [
  // Populate with minimum 12 players across all 3 teams and 4 positions.
  // Use imageUrl: '/players/player-1.jpg' etc. (placeholder until real photos added)
  // Example entry:
  {
    id: 'ravi-prakash',
    name: 'Ravi Prakash',
    number: 10,
    position: 'Midfielder',
    team: 'Senior',
    age: 22,
    nationality: 'Indian',
    bio: 'Academy graduate and current team captain. Known for his vision and passing range.',
    imageUrl: '/players/ravi-prakash.jpg',
    stats: { appearances: 28, goals: 7, assists: 11 },
    isCaptain: true,
    isFeatured: true,
  },
  // ... add at least 11 more
];
```

---

## 3.2 — Roster Page

- **File:** `app/roster/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. Server component (no `"use client"` at the page level).
2. Import `players` from `lib/data/players.ts`.
3. Render `<PageHero>` (Phase 9.1) with `title="Our Squad"`, `subtitle="Explore every player across all age groups."`, `svgSrc="/SVG/roster-illustration.svg"`.
4. Below hero, render `<RosterFilter players={players} />` (Phase 3.5) — the client component handles filtering and grid rendering.
5. At the bottom, render `<CTABanner>` (Phase 9.4) with: `heading="Think You Have What It Takes?"`, `buttonLabel="Apply for a Trial"`, `buttonHref="/admissions"`.

**Page layout:**
```tsx
export default function RosterPage() {
  return (
    <>
      <PageHero title="Our Squad" subtitle="..." svgSrc="/SVG/roster-illustration.svg" />
      <div className="container mx-auto px-6 py-16">
        <RosterFilter players={players} />
      </div>
      <CTABanner heading="Think You Have What It Takes?" ... />
    </>
  );
}
```

---

## 3.3 — Player Detail Page

- **File:** `app/roster/[id]/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. `generateStaticParams()`: `return players.map(p => ({ id: p.id }))`.
2. `generateMetadata({ params })`: Return `{ title: \`${player.name} — Kota Football Academy\`, description: player.bio }`.
3. Find player: `const player = players.find(p => p.id === params.id)`. If not found: `notFound()` from `next/navigation`.
4. **Layout (2-column on `lg:`):**
   - **Left column (`lg:w-1/3`):**
     - Large portrait image using `next/image`, `aspect-[3/4]`, `rounded-2xl overflow-hidden`, `bg-charcoal-light` placeholder
     - Below image: `<Badge>` for position (crimson variant) + `<Badge>` for team (charcoal variant) + captain badge if `isCaptain`
   - **Right column (`lg:w-2/3`):**
     - Jersey number: `text-crimson text-8xl font-black opacity-20 absolute -top-4 right-0` (decorative)
     - Player name: `text-charcoal text-4xl md:text-5xl font-black`
     - Meta row: nationality flag emoji + nationality, age
     - Bio: `text-gray-600 text-lg leading-relaxed mt-4`
     - `<hr className="border-gray-200 my-6">`
     - **Stats grid (4 boxes, `grid grid-cols-2 md:grid-cols-4 gap-4`):**
       - Each box: `bg-charcoal rounded-xl p-5 text-center`
       - Number: `text-crimson text-4xl font-black`
       - Label: `text-gray-400 text-sm mt-1`
       - Labels: "Appearances", "Goals", "Assists", and "Clean Sheets" (only if GK)
5. Back link above the columns: `<Link href="/roster" className="text-crimson font-semibold flex items-center gap-2 mb-8"><FaChevronLeft /> Back to Roster</Link>`
6. **Related players section** below the 2-column block: heading "More from the Same Team", then render 3 `<PlayerCard>` components from `players.filter(p => p.team === player.team && p.id !== player.id).slice(0, 3)`.

---

## 3.4 — PlayerCard Component

- **File:** `components/PlayerCard.tsx`
- **Status:** ✅ [Done]
- **Dependencies:** `Player` type from `lib/data/players.ts`, `next/link`, `next/image`
- **Task:**

```tsx
// components/PlayerCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Player } from '@/lib/data/players';

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Link href={`/roster/${player.id}`} className="group block">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal-light shadow-lg
                      transition-transform duration-300 ease-out group-hover:scale-[1.02]
                      group-hover:shadow-2xl">

        {/* Player image */}
        <Image src={player.imageUrl} alt={player.name} fill
               className="object-cover object-top" sizes="(max-width:768px) 50vw, 25vw" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

        {/* Captain badge */}
        {player.isCaptain && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-crimson rounded-full
                          flex items-center justify-center text-white text-xs font-black shadow-lg">
            C
          </div>
        )}

        {/* Info overlay (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-crimson font-black text-3xl leading-none">#{player.number}</p>
          <p className="text-white font-bold text-lg leading-tight mt-1">{player.name}</p>
          <p className="text-crimson/80 text-sm font-medium">{player.position}</p>
        </div>
      </div>
    </Link>
  );
}
```

---

## 3.5 — RosterFilter Component (Client)

- **File:** `components/RosterFilter.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. `"use client"` directive at the top.
2. Props: `{ players: Player[] }`.
3. `useState<string>('All')` for `activeFilter`.
4. Filter tabs config:
   ```typescript
   const tabs = ['All', 'Senior', 'U-18', 'U-12', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'];
   ```
5. Filter logic:
   ```typescript
   const filtered = players.filter(p => {
     if (activeFilter === 'All') return true;
     if (['Senior','U-18','U-12'].includes(activeFilter)) return p.team === activeFilter;
     const posMap: Record<string, string> = { Goalkeepers:'Goalkeeper', Defenders:'Defender', Midfielders:'Midfielder', Forwards:'Forward' };
     return p.position === posMap[activeFilter];
   });
   ```
6. Tabs render: `flex flex-wrap gap-3 mb-10`. Active tab: `bg-crimson text-white`. Inactive: `bg-white text-charcoal border border-gray-200 hover:border-crimson hover:text-crimson`. All: `rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer`.
7. **Featured spotlight first:** If `activeFilter === 'All'`, render the featured player separately in a `col-span-2 aspect-[2/1]` wide card above the grid.
8. Player grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6`. Render `<PlayerCard>` for each filtered player.
9. Empty state: If no filtered results, show centered message with `FaSearch` icon in crimson and "No players found for this filter."

---

---

# PHASE 4: Match Fixtures & Results

---

## 4.1 — Fixtures Data File

- **File:** `lib/data/fixtures.ts`
- **Status:** ✅ [Done]
- **Task:**

```typescript
// lib/data/fixtures.ts

export type Match = {
  id: string;
  date: string;           // ISO 8601: "2025-05-10"
  time: string;           // "15:30"
  opponent: string;
  opponentLogoUrl: string; // "/opponents/rival-fc.png" or placeholder "/SVG/no-results.svg"
  venue: 'Home' | 'Away';
  competition: string;    // "Rajasthan State League U-18"
  team: 'Senior' | 'U-18' | 'U-12';
  result?: {
    kotaScore: number;
    opponentScore: number;
  };
  matchReport?: string;   // 2-3 sentence summary for completed matches
  isUpcoming: boolean;
};

export const matches: Match[] = [
  // Populate with at least 8 upcoming + 10 past results across all 3 teams
];
```

---

## 4.2 — Fixtures Page

- **File:** `app/fixtures/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. Server component. Import `matches` from `lib/data/fixtures.ts`.
2. Render `<PageHero title="Fixtures & Results" subtitle="Track every upcoming game and past result." svgSrc="/SVG/fixtures-graphic.svg" />`.
3. Extract `<FixturesTabs matches={matches} />` as a separate client component (file: `components/FixturesTabs.tsx`).
4. `FixturesTabs` handles:
   - **Tab 1 — Upcoming:** `matches.filter(m => m.isUpcoming)` sorted chronologically. Render each as `<MatchCard variant="upcoming" />`.
   - **Tab 2 — Results:** `matches.filter(m => !m.isUpcoming)` sorted reverse-chronologically. Render each as `<MatchCard variant="result" />`.
   - **Team filter sub-tabs:** "All Teams", "Senior", "U-18", "U-12" — stack above the Upcoming/Results tabs.
   - Tab button style: active = `bg-crimson text-white`, inactive = `border border-charcoal text-charcoal hover:bg-charcoal hover:text-white`. Size: `px-6 py-2 rounded-full font-semibold text-sm`.
5. **League Table section** (always visible below tabs):
   - Heading: "League Standing" with `<SectionHeader>`.
   - Static HTML table: `w-full bg-white rounded-2xl shadow-md overflow-hidden`.
   - Columns: `Pos | Club | P | W | D | L | GF | GA | GD | Pts` — header row: `bg-charcoal text-white text-sm font-bold`.
   - Kota FA row: `bg-crimson/10 font-bold text-charcoal border-l-4 border-crimson`.
   - All other rows: alternate `bg-white` / `bg-gray-50`.
6. At the bottom, add `<CTABanner heading="Never Miss a Match" subtext="Follow us on social media for live updates." buttonLabel="Contact Academy" buttonHref="/contact" />`.

---

## 4.3 — MatchCard Component

- **File:** `components/MatchCard.tsx`
- **Status:** ✅ [Done]
- **Task:**

```tsx
// components/MatchCard.tsx
// Props: match: Match, variant: 'upcoming' | 'result'

// Container:
// bg-white rounded-2xl shadow-md p-5 flex items-center justify-between gap-4
// hover:shadow-xl transition-shadow duration-200
// Result variant border: win → border-l-4 border-crimson | draw → border-l-4 border-charcoal | loss → border-l-4 border-gray-300

// LEFT — Date block:
// flex flex-col items-center justify-center bg-charcoal text-white w-16 h-16 rounded-xl flex-shrink-0
// Day: text-2xl font-black
// Month: text-xs uppercase tracking-widest

// CENTER — Match info:
// flex-1 text-center
// "KOTA FA" text-charcoal font-black text-lg
// "vs" text-crimson font-bold text-xl mx-4
// Opponent name text-charcoal font-semibold

// RIGHT — Badges (upcoming):
// Venue badge: Home → bg-crimson text-white | Away → bg-charcoal text-white
// Competition: text-gray-500 text-xs mt-1

// RIGHT — Score (result):
// "2 — 1" format: score numbers text-3xl font-black text-charcoal, dash text-crimson
// Win/Draw/Loss label below: text-xs font-bold
```

---

---

# PHASE 5: Training & Development

---

## 5.1 — Training Data File

- **File:** `lib/data/training.ts`
- **Status:** ✅ [Done]
- **Task:**

```typescript
// lib/data/training.ts

export type SessionType = 'Technical' | 'Tactical' | 'Fitness' | 'Match Simulation' | 'Goalkeeper';

export type TrainingSession = {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  startTime: string; // "08:00"
  endTime: string;   // "10:00"
  title: string;
  coach: string;
  team: 'Senior' | 'U-18' | 'U-12' | 'All';
  type: SessionType;
  venue: string;
  maxParticipants: number;
  notes?: string;
};

export const trainingSessions: TrainingSession[] = [
  // Cover all 7 days, at least 2 sessions/day, different teams
  // Example:
  {
    id: 'mon-u12-tech',
    day: 'Monday',
    startTime: '07:00',
    endTime: '09:00',
    title: 'U-12 Technical Fundamentals',
    coach: 'Nitin Jangra',
    team: 'U-12',
    type: 'Technical',
    venue: 'Main Grass Pitch',
    maxParticipants: 20,
    notes: 'Bring cones and bibs',
  },
  // ... add 13+ more
];

// Session type → color mapping for UI rendering
export const sessionTypeColors: Record<SessionType, string> = {
  Technical: 'bg-crimson/10 border-crimson text-crimson',
  Tactical: 'bg-charcoal/10 border-charcoal text-charcoal',
  Fitness: 'bg-gray-100 border-gray-400 text-gray-600',
  'Match Simulation': 'bg-crimson/20 border-crimson-dark text-crimson-dark',
  Goalkeeper: 'bg-charcoal/20 border-charcoal text-charcoal',
};
```

---

## 5.2 — Training Page

- **File:** `app/training/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. Server component. Import `trainingSessions` from `lib/data/training.ts`.
2. Render `<PageHero title="Training & Development" subtitle="Our structured week-long program for all age groups." svgSrc="/SVG/training-graphic.svg" />`.
3. **Weekly Schedule Section:**
   - `<SectionHeader title="Weekly Training Schedule" align="center" />`
   - Render `<WeeklySchedule sessions={trainingSessions} />` — a client component at `components/WeeklySchedule.tsx`.
4. **`components/WeeklySchedule.tsx`** (client):
   - `useState<string>('All')` for team filter.
   - Team filter buttons: "All", "Senior", "U-18", "U-12".
   - Layout: 7-column grid for Mon–Sun. `grid grid-cols-7 gap-2`. Column header: day name in `bg-charcoal text-white text-center py-2 rounded-t-lg text-sm font-bold`.
   - For each day column, render `TrainingSessionCard` components for sessions on that day (filtered by team).
   - On mobile (`sm:` and below): Change to a vertical list grouped by day. Show day as a bold heading.
5. **Training Philosophy Section** (static):
   - 3-column cards (reuse `ProgramCard` style from `ProgramSection.tsx` as inspiration):
     - "Technical Excellence" — `GiSoccerBall` icon — "Mastery of ball control, passing precision, and positional awareness."
     - "Mental Fortitude" — `FaBrain` icon (from `react-icons/fa`) — "Building resilient, tactically sharp players who perform under pressure."
     - "Peak Physical Conditioning" — `FaRunning` icon — "Bespoke fitness programs designed for the demands of modern football."
   - Card styling: `bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`. Icon: `text-5xl text-crimson mb-4`.
6. **Coaching Staff Section:** Render `<CoachesSection />` (already built, reuse directly) inside a wrapping `<section>` with the heading "The Coaching Team" via `<SectionHeader>`.
7. **Trial CTA Banner at bottom:** `<CTABanner heading="Ready to Join a Session?" subtext="Apply now and start your journey with Kota Football Academy." buttonLabel="Apply for Trials" buttonHref="/admissions" />`.

---

## 5.3 — TrainingSessionCard Component

- **File:** `components/TrainingSessionCard.tsx`
- **Status:** ✅ [Done]
- **Task:**

```tsx
// components/TrainingSessionCard.tsx
// Props: session: TrainingSession (import sessionTypeColors from lib/data/training.ts)

// Container:
// rounded-lg border-l-4 p-3 mb-2 cursor-default
// Color class from sessionTypeColors[session.type]
// text-xs md:text-sm

// Title: font-bold text-charcoal truncate
// Coach: text-gray-500 text-xs mt-0.5
// Time row: flex items-center gap-1 mt-1
//   FaClock icon (text-crimson text-xs) + "{startTime}–{endTime}"
// Team badge (bottom right, inline): text-xs bg-charcoal text-white px-1.5 py-0.5 rounded

// Title attribute on container: session.notes (shows on hover as native tooltip)
```

---

---

# PHASE 6: Admissions & Trials Portal

---

## 6.1 — Trial Dates Data File

- **File:** `lib/data/trials.ts`
- **Status:** ✅ [Done]
- **Task:**

```typescript
// lib/data/trials.ts

export type TrialDate = {
  id: string;
  date: string;      // ISO: "2025-06-07"
  time: string;      // "09:00 AM"
  ageGroup: string;  // "U-12 (Ages 8–12)"
  venue: string;     // "Main Academy Ground, Gurugram"
  spotsLeft: number;
  isFull: boolean;
};

export const trialDates: TrialDate[] = [
  // 4-6 upcoming trial dates across different age groups
];
```

---

## 6.2 — Admissions Page

- **File:** `app/admissions/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. `"use client"` (required for Formspree hook).
2. Import `useForm, ValidationError` from `@formspree/react`.
3. Import `trialDates` from `lib/data/trials.ts`.
4. Render `<PageHero title="Join the Academy" subtitle="Apply for trials and begin your journey with Kota FA." svgSrc="/SVG/admissions-graphic.svg" />`.

**Main content — 2-column layout (same pattern as `app/contact/page.tsx`):**
- `<div className="container mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">`

**Left column (`md:col-span-2`) — "How It Works":**
- Heading: `text-3xl font-black text-charcoal`
- 4-step process list. Each step:
  ```tsx
  <div className="flex items-start gap-4">
    <div className="w-9 h-9 bg-crimson rounded-full flex items-center justify-center text-white font-black flex-shrink-0">
      {stepNumber}
    </div>
    <div>
      <p className="font-bold text-charcoal">{stepTitle}</p>
      <p className="text-gray-500 text-sm mt-0.5">{stepDesc}</p>
    </div>
  </div>
  ```
- Steps: (1) Submit Application Online → (2) Initial Assessment Call → (3) Trial Session at the Academy → (4) Offer & Onboarding.
- Info box below steps: `bg-crimson/5 border border-crimson/20 rounded-xl p-4 mt-8`
  - `FaInfoCircle` icon (crimson) + text: "Please bring a valid birth certificate and medical clearance certificate to your trial session."

**Right column (`md:col-span-3`) — Admissions Form:**
- Container: `bg-white rounded-2xl shadow-xl p-8`
- Heading: "Application Form" — `text-2xl font-black text-charcoal mb-6`
- **Form fields (all using `@formspree/react`):**

| Field | Type | Required |
|-------|------|----------|
| Player's Full Name | `text` | ✅ |
| Date of Birth | `date` | ✅ |
| Age Group Applying For | `select`: U-12 \| U-18 \| Senior | ✅ |
| Parent / Guardian Name | `text` | ✅ |
| Contact Number | `tel` | ✅ |
| WhatsApp Number | `tel` | Optional |
| Email Address | `email` | ✅ |
| Current School / Institution | `text` | Optional |
| Previous Football Experience | `textarea` (3 rows) | Optional |
| Preferred Position | `select`: Goalkeeper \| Defender \| Midfielder \| Forward \| Any | ✅ |
| Medical Conditions / Allergies | `textarea` (2 rows) | Optional |
| How did you hear about us? | `select`: Social Media \| Word of Mouth \| School \| Other | Optional |
| Consent checkbox | `checkbox`: "I agree to the academy's terms and code of conduct" | ✅ |

- **Input styling:** `mt-1 block w-full rounded-lg border border-gray-200 shadow-sm focus:border-crimson focus:ring-crimson p-3 text-charcoal`
- **Label styling:** `block text-sm font-semibold text-charcoal mb-1`
- **Submit button:** `w-full py-4 bg-crimson hover:bg-crimson-dark text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.01] shadow-md`
- **Form ID:** Replace `"ADMISSIONS_FORM_ID"` placeholder with the new Formspree form ID created for admissions (separate from the contact form ID `mwprjwkr`).
- **Success state:** When `state.succeeded`, render full-page card:
  ```tsx
  <div className="text-center py-20">
    <FaCheckCircle className="text-crimson text-7xl mx-auto mb-6" />
    <h2 className="text-3xl font-black text-charcoal">Application Received!</h2>
    <p className="text-gray-500 mt-3 max-w-md mx-auto">
      Thank you! We'll be in touch within 48 hours to schedule your assessment.
      In the meantime, bring a birth certificate and medical clearance to your trial.
    </p>
    <Link href="/" className="inline-block mt-8 px-8 py-3 bg-crimson text-white rounded-xl font-bold hover:bg-crimson-dark transition-colors">
      Back to Home
    </Link>
  </div>
  ```

**Upcoming Trial Dates section** (below the 2-column block):
- `<SectionHeader title="Upcoming Trial Dates" align="center" />`
- Table: `w-full bg-white rounded-2xl shadow-md overflow-hidden`
- Header row: `bg-charcoal text-white text-sm`. Columns: Date | Age Group | Time | Venue | Spots
- Row rendering: if `trial.isFull` → show `<Badge label="FULL" variant="charcoal" />`. Else → `<Badge label={${trial.spotsLeft} spots left} variant="crimson" />`.
- Table row hover: `hover:bg-crimson/5 transition-colors`.

---

---

# PHASE 7: Media Gallery

---

## 7.1 — Gallery Data File

- **File:** `lib/data/gallery.ts`
- **Status:** ✅ [Done]
- **Task:**

```typescript
// lib/data/gallery.ts

export type GalleryCategory = 'Match' | 'Training' | 'Event' | 'Team' | 'Behind the Scenes';

export type GalleryItem = {
  id: string;
  src: string;               // Image path from /public/
  alt: string;
  category: GalleryCategory;
  date: string;              // ISO date
  caption?: string;
  type: 'image' | 'video';
  videoUrl?: string;         // YouTube embed URL (for type === 'video')
};

export const galleryItems: GalleryItem[] = [
  // Reuse existing images from /public/ where possible (see Existing Image Assets list)
  // Add at least 20 items total, mixing all categories and both types
  // Example:
  {
    id: 'state-champs-2024',
    src: '/FULLHOUSE.jpg',
    alt: 'State Champions 2024 celebration',
    category: 'Match',
    date: '2024-11-20',
    caption: 'U-18 team celebrating their state championship win.',
    type: 'image',
  },
  // ...
];
```

---

## 7.2 — Gallery Page

- **File:** `app/gallery/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. `"use client"` (required for lightbox `useState`).
2. Import `galleryItems` from `lib/data/gallery.ts`.
3. Render `<PageHero title="Media Gallery" subtitle="Relive the moments that define us." />` (no SVG needed for this page — the masonry grid is the visual).
4. **Category filter tabs:** `['All', 'Match', 'Training', 'Event', 'Team', 'Behind the Scenes']`. Same pill button style as `RosterFilter`.
5. **Masonry grid** (reuse pattern from `components/HighlightsSection.tsx`):
   - `columns-1 sm:columns-2 lg:columns-3 gap-4`
   - Each item: `<GalleryCard item={item} onClick={() => openLightbox(index)} />`
6. **Lightbox state:**
   ```typescript
   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
   ```
   Render `<Lightbox items={filtered} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={...} onNext={...} />`.
7. **Video modal:** If `item.type === 'video'`, `onClick` opens a separate modal with `<iframe>` embed (not the image lightbox). Use `useState<string | null>` for `activeVideoUrl`. Render: `fixed inset-0 z-50 bg-black/95 flex items-center justify-center` with `aspect-[16/9] w-full max-w-4xl iframe`.
8. **Empty state:** If no filtered items, render `<Image src="/SVG/no-results.svg" ... />` centered with message "No media found in this category yet."

---

## 7.3 — GalleryCard Component

- **File:** `components/GalleryCard.tsx`
- **Status:** ✅ [Done]
- **Task:**

```tsx
// components/GalleryCard.tsx
// Props: item: GalleryItem, onClick: () => void

// Container:
// group relative break-inside-avoid mb-4 cursor-pointer
// rounded-2xl overflow-hidden
// transition-transform duration-300 ease-out hover:scale-[1.01]

// Image: next/image fill, object-cover
// aspect determined by category:
//   Match → aspect-[16/9]
//   Training → aspect-[4/3]
//   Team → aspect-[1/1]
//   Event → aspect-[4/3]
//   Behind the Scenes → aspect-[3/4]

// Hover overlay:
// absolute inset-0 bg-charcoal/50
// opacity-0 group-hover:opacity-100 transition-opacity duration-300
// flex items-end pb-4 pl-4

// Caption in overlay:
// text-white text-sm font-medium (only visible on hover)

// Video indicator badge (if type === 'video'):
// absolute top-3 right-3 bg-crimson rounded-full p-2.5
// FaPlay icon text-white text-sm
```

---

## 7.4 — Lightbox Component

- **File:** `components/Lightbox.tsx`
- **Status:** ✅ [Done]
- **Task:**

```tsx
// components/Lightbox.tsx
'use client';

// Props:
// items: GalleryItem[]
// activeIndex: number | null
// onClose: () => void
// onPrev: () => void
// onNext: () => void

// When activeIndex === null: return null (don't render)

// Outer: fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4
// useEffect: addEventListener 'keydown' → Escape calls onClose, ArrowLeft calls onPrev, ArrowRight calls onNext
// Cleanup removeEventListener on unmount

// Close button: absolute top-4 right-4 text-white/70 hover:text-white text-3xl cursor-pointer
//   <FaTimes />

// Prev/Next arrows:
//   absolute left-4 / right-4 top-1/2 -translate-y-1/2
//   text-crimson text-3xl hover:text-white cursor-pointer transition-colors
//   Disable (opacity-30 pointer-events-none) at first/last item

// Image: max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl

// Counter: absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm
//   "{activeIndex + 1} / {items.length}"

// Caption: mt-3 text-white/80 text-sm text-center max-w-lg
```

---

---

# PHASE 8: News & Announcements

---

## 8.1 — News Data File

- **File:** `lib/data/news.ts`
- **Status:** ✅ [Done]
- **Task:**

```typescript
// lib/data/news.ts

export type NewsCategory = 'Match Report' | 'Academy News' | 'Player Spotlight' | 'Event' | 'Announcement';

export type NewsArticle = {
  slug: string;          // e.g. "kota-wins-state-championship-2025"
  title: string;
  excerpt: string;       // 1-2 sentence summary shown in cards
  content: string;       // Full article text (multiple paragraphs joined by "\n\n")
  author: string;        // e.g. "Kota FA Media Team"
  publishedAt: string;   // ISO: "2025-03-15"
  category: NewsCategory;
  imageUrl: string;      // Reuse existing /public/ images where relevant
  isFeatured?: boolean;  // Only ONE article should be featured at a time
  tags?: string[];
};

export const newsArticles: NewsArticle[] = [
  // 8-12 articles covering various categories
  // First article: isFeatured = true
  // Use existing images from /public/ where possible (e.g. /FULLHOUSE.jpg for match reports)
];
```

---

## 8.2 — News Listing Page

- **File:** `app/news/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. `"use client"` (for filter + load more state).
2. Import `newsArticles` from `lib/data/news.ts`.
3. **Page hero:**
   - No `<PageHero>` component here — instead do a custom minimal header:
   - `bg-charcoal py-16 px-6 text-center`. Title: `text-white text-5xl font-black`. Subtitle: `text-gray-400 text-lg mt-2`.
4. **Featured article** (hero card, rendered only if `article.isFeatured === true`):
   ```
   relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-16
   ```
   - `next/image` fill as background
   - Gradient overlay: `bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent`
   - Content positioned `absolute bottom-8 left-8 max-w-2xl`:
     - `<Badge label={article.category} variant="crimson" />`
     - Title: `text-white text-3xl md:text-4xl font-black mt-3`
     - Excerpt: `text-gray-300 text-lg mt-2`
     - "Read Full Article" button: `bg-crimson hover:bg-crimson-dark text-white px-6 py-3 rounded-xl font-bold mt-4 inline-block transition-all`
5. **Category filter tabs:** Same pill-button style.
6. **Article grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`. Render `<NewsCard article={article} variant="default" />`.
7. **Load More:** `useState<number>(6)` for `visibleCount`. "Load More" button below grid: `bg-white border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 rounded-xl font-bold transition-all`. Increments by 6 each click. Hide button when all loaded.

---

## 8.3 — News Article Detail Page

- **File:** `app/news/[slug]/page.tsx`
- **Status:** ✅ [Done]
- **Task:**

1. Server component.
2. `generateStaticParams()`: `return newsArticles.map(a => ({ slug: a.slug }))`.
3. `generateMetadata({ params })`: `{ title: article.title + ' — Kota FA', description: article.excerpt }`.
4. Find article: `const article = newsArticles.find(a => a.slug === params.slug)`. If not found: `notFound()`.
5. Related articles: `newsArticles.filter(a => a.category === article.category && a.slug !== article.slug).slice(0, 3)`.
6. **Page layout:**

```
[Back Link: ← Back to News]

[Hero Image — full width, aspect-[21/9], rounded-2xl]
[Gradient overlay with category badge + title overlay]

[Content area — max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12]
  [Article content — lg:col-span-2]
    [Category Badge | Published date | Author]
    [<hr>]
    [Article body — paragraphs styled with leading-relaxed text-gray-700 text-lg space-y-4]
    [Share buttons: "Share on:" FaFacebook FaTwitter FaWhatsapp — each a styled link]
    
  [Sidebar — lg:col-span-1]
    ["Related Articles" heading]
    [3 × <NewsCard variant="compact" />]
```

- Article body rendering: `article.content.split('\n\n').map((para, i) => <p key={i} className="text-gray-700 text-lg leading-relaxed">{para}</p>)`
- Share buttons: `text-crimson hover:text-crimson-dark text-2xl transition-colors`
- Social share URLs: pre-build with `encodeURIComponent(window.location.href)` in a `useEffect` or client wrapper.

---

## 8.4 — NewsCard Component

- **File:** `components/NewsCard.tsx`
- **Status:** ✅ [Done]
- **Task:**

```tsx
// components/NewsCard.tsx
// Props: article: NewsArticle, variant: 'default' | 'compact'

// ─── DEFAULT variant ───────────────────────────────────
// Link wrapper: <Link href={`/news/${article.slug}`} className="group block">
// Container: bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow
// Image: aspect-[16/9], group-hover:scale-105 transition-transform duration-500 (wrap in overflow-hidden)
// Body padding: p-5
//   Category badge: <Badge label={article.category} variant="crimson" />
//   Date: text-gray-400 text-xs mt-2 (format: "15 Mar 2025")
//   Title: text-charcoal text-xl font-black mt-2 leading-snug group-hover:text-crimson transition-colors
//   Excerpt: text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3
//   "Read More" text: text-crimson font-semibold text-sm mt-3 flex items-center gap-1

// ─── COMPACT variant ────────────────────────────────────
// Horizontal: flex items-start gap-4
// Image: w-24 h-20 rounded-xl flex-shrink-0 object-cover
// Content: flex-1
//   Category badge (smaller)
//   Title: text-charcoal text-sm font-bold line-clamp-2
//   Date: text-gray-400 text-xs mt-1
```

---

---

# PHASE 9: Reusable Component Library

---

## 9.1 — PageHero Component

- **File:** `components/PageHero.tsx`
- **Status:** ✅ [Done]
- **Task:** Generic dark hero used as the top section of all new pages.

```tsx
// components/PageHero.tsx
import Image from 'next/image';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  svgSrc?: string;
};

export default function PageHero({ title, subtitle, svgSrc }: PageHeroProps) {
  return (
    <section className="relative w-full bg-charcoal py-24 md:py-32 overflow-hidden">
      {/* Crimson diagonal accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-0 w-[600px] h-full bg-crimson opacity-[0.08] skew-x-[-12deg] transform-gpu" />
      </div>

      {/* SVG illustration (right half, semi-transparent) */}
      {svgSrc && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] opacity-25 pointer-events-none select-none">
          <Image src={svgSrc} alt="" width={600} height={400} />
        </div>
      )}

      {/* Text content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Crimson accent line */}
        <div className="w-14 h-1 bg-crimson rounded-full mb-6" />
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
```

---

## 9.2 — Badge Component

- **File:** `components/ui/Badge.tsx`
- **Status:** ✅ [Done]
- **Task:** Create the `components/ui/` directory and this file.

```tsx
// components/ui/Badge.tsx
type BadgeVariant = 'crimson' | 'charcoal' | 'outline' | 'gray';

const variantClasses: Record<BadgeVariant, string> = {
  crimson: 'bg-crimson text-white',
  charcoal: 'bg-charcoal text-white',
  outline: 'border border-crimson text-crimson bg-transparent',
  gray: 'bg-gray-100 text-gray-600',
};

export default function Badge({ label, variant = 'crimson' }: { label: string; variant?: BadgeVariant }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${variantClasses[variant]}`}>
      {label}
    </span>
  );
}
```

---

## 9.3 — SectionHeader Component

- **File:** `components/ui/SectionHeader.tsx`
- **Status:** ✅ [Done]
- **Task:** Reusable section heading (replaces the repetitive heading pattern duplicated across all existing sections).

```tsx
// components/ui/SectionHeader.tsx
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>
      <div className={`w-12 h-1 bg-crimson rounded-full mb-4 ${isCenter ? 'mx-auto' : ''}`} />
      <h2 className="text-3xl md:text-4xl font-black text-charcoal">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 text-lg mt-3 max-w-2xl ${isCenter ? 'mx-auto' : ''}">{subtitle}</p>
      )}
    </div>
  );
}
```

> **Future refactor:** After building new components, optionally refactor existing components (`ProgramSection`, `CoachesSection`, `FacilitiesSection`, etc.) to use `<SectionHeader>` instead of their custom heading markup. This is optional but improves consistency.

---

## 9.4 — CTABanner Component

- **File:** `components/CTABanner.tsx`
- **Status:** ✅ [Done]
- **Task:** Full-width crimson call-to-action banner used at the bottom of Roster, Fixtures, and Training pages.

```tsx
// components/CTABanner.tsx
import Link from 'next/link';

type CTABannerProps = {
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CTABanner({ heading, subtext, buttonLabel, buttonHref }: CTABannerProps) {
  return (
    <section className="w-full bg-crimson py-20 px-6 text-center">
      <h2 className="text-white text-3xl md:text-4xl font-black">{heading}</h2>
      {subtext && <p className="text-white/80 text-lg mt-3 mb-8 max-w-xl mx-auto">{subtext}</p>}
      <Link
        href={buttonHref}
        className="inline-block bg-white text-crimson hover:bg-gray-100 px-10 py-4 rounded-xl
                   font-black text-lg shadow-xl transition-all duration-300 hover:scale-105"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
```

---

---

# PHASE 10: Data Layer (`lib/`)

---

## 10.1 — Extract Coaches Data from Component

- **File:** `lib/data/coaches.ts`
- **Status:** ✅ [Done]
- **Task:** The 3 coaches are currently hardcoded as JSX in `components/CoachesSection.tsx`. Extract to a shared data file so the Training page and About page can also reference it.

```typescript
// lib/data/coaches.ts

export type Coach = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  license: string;
  experience: string;
  specialization: string;
  bio: string;
};

export const coaches: Coach[] = [
  {
    id: 'gurmail-singh',
    name: 'GURMAIL SINGH',
    title: 'Head Coach',
    imageUrl: '/g.png',
    license: 'AFC B License',
    experience: '10+ years',
    specialization: 'Tactical Development & Senior Team Management',
    bio: 'With over a decade of professional coaching experience, Gurmail leads the senior program with tactical discipline and player-first philosophy.',
  },
  {
    id: 'nitin-jangra',
    name: 'NITIN JANGRA',
    title: 'Youth Development Coach',
    imageUrl: '/n.png',
    license: 'AFC B License',
    experience: '7+ years',
    specialization: 'Youth Development & Skill Fundamentals',
    bio: 'Nitin specializes in building technical foundations in young players, guiding the U-12 and U-18 programs with patience and precision.',
  },
  {
    id: 'aman-kumar',
    name: 'AMAN KUMAR',
    title: 'Fitness & Conditioning Expert',
    imageUrl: '/aman.png',
    license: 'AIFF D License / B.P.Ed Graduate',
    experience: '5+ years',
    specialization: 'Physical Conditioning & Injury Prevention',
    bio: 'Aman designs bespoke fitness programs that push players to their peak while minimizing injury risk through science-backed methodology.',
  },
];
```

**Update `components/CoachesSection.tsx`:** Replace hardcoded JSX coach objects with an import of `coaches` from `lib/data/coaches.ts` and map over them. The component UI structure stays exactly the same.

---

## 10.2 — Site Config File

- **File:** `lib/siteConfig.ts`
- **Status:** ✅ [Done]
- **Task:** Centralise all site-wide constants to eliminate duplication across `app/contact/page.tsx`, `components/Footer.tsx`, `app/layout.tsx`, etc.

```typescript
// lib/siteConfig.ts

export const siteConfig = {
  name: 'Kota Football Academy',
  shortName: 'Kota FA',
  tagline: 'Nurturing the next generation of football stars.',
  description: 'Official website of the Kota Football Academy — professional football training for all age groups in Gurugram.',
  phone: '+91 7042605095',
  email: 'info@kotafootball.com',
  address: {
    line1: 'Academy Ground, GGN',
    line2: 'Gurugram, Haryana 122001',
  },
  formspreeIds: {
    contact: 'mwprjwkr',
    admissions: '',    // TODO: Fill with new Formspree form ID for admissions
  },
  social: {
    instagram: '#',   // Replace with actual URLs
    facebook: '#',
    youtube: '#',
    twitter: '#',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112349.80000331002!2d76.95304918712175!3d28.423160295629007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1730320645063!5m2!1sen!2sin',
} as const;
```

**Update these files to import from `siteConfig`:**
- `app/contact/page.tsx` — phone, email, address, mapEmbedUrl, formspreeIds.contact
- `app/layout.tsx` — metadata title and description
- `components/Footer.tsx` — all contact info and social links

---

---

# PHASE 11: SVG Asset Plan

All new large SVG illustrations must be saved as independent `.svg` files inside `public/SVG/`. They are referenced via `next/image` with an absolute `/SVG/filename.svg` path. Small UI icons (arrows, checkmarks, loading spinners) continue to use `react-icons` inline.

---

## 11.1 — Hero Section Ball Graphic

- **File:** `public/SVG/hero-ball-graphic.svg`
- **Used in:** `components/HeroSection.tsx` (Phase 2.1)
- **Status:** ✅ [Done]
- **Description:** Dynamic silhouette of a player in a kicking pose with a stylized football trajectory arc. Flat vector art. Uses crimson (`#DC143C`) and charcoal (`#1C1C1C`) fills only. No background fill (transparent). `viewBox="0 0 600 500"`. The player silhouette occupies the bottom-left, with an arc of motion lines extending top-right.

---

## 11.2 — Roster Page Illustration

- **File:** `public/SVG/roster-illustration.svg`
- **Used in:** `components/PageHero.tsx` on `app/roster/page.tsx`
- **Description:** Five player silhouettes standing side by side in a squad lineup pose, varying heights. Flat vector. Crimson fills for the central (featured) player, charcoal for others. No background. `viewBox="0 0 700 400"`.

---

## 11.3 — Fixtures Page Graphic

- **File:** `public/SVG/fixtures-graphic.svg`
- **Used in:** `components/PageHero.tsx` on `app/fixtures/page.tsx`
- **Description:** Top-down bird's-eye view of a football pitch. Pitch rectangle in dark charcoal background, white pitch markings (centre circle, penalty areas, halfway line, corner arcs). Crimson accent on the centre circle outline. `viewBox="0 0 800 500"`.

---

## 11.4 — Training Page Graphic

- **File:** `public/SVG/training-graphic.svg`
- **Used in:** `components/PageHero.tsx` on `app/training/page.tsx`
- **Description:** Abstract training drill pattern — cone markers connected by dashed path lines and movement arrows, suggesting a slalom drill. Crimson cones, charcoal dashed lines, white arrows. Transparent background. `viewBox="0 0 600 400"`.

---

## 11.5 — Admissions Page Graphic

- **File:** `public/SVG/admissions-graphic.svg`
- **Used in:** `components/PageHero.tsx` on `app/admissions/page.tsx`
- **Description:** Flat vector silhouette of a player with arms raised in a celebration/welcome pose. Crimson fill. A star or sparkle element above the figure. Transparent background. `viewBox="0 0 400 500"`.

---

## 11.6 — Gallery Empty State

- **File:** `public/SVG/gallery-empty-state.svg`
- **Used in:** `app/gallery/page.tsx` empty filter state
- **Description:** Minimal camera outline illustration with a subtle lens glare. Charcoal outline strokes, single crimson accent dot for the lens. Transparent background. `viewBox="0 0 300 250"`.

---

## 11.7 — No Results / Search Empty State

- **File:** `public/SVG/no-results.svg`
- **Used in:** `app/gallery/page.tsx`, `components/RosterFilter.tsx` empty states
- **Description:** Simple magnifying glass with a small "x" inside the lens. Charcoal strokes, crimson "x". Transparent background. `viewBox="0 0 200 200"`.

---

## 11.8 — News Page Illustration

- **File:** `public/SVG/news-illustration.svg`
- **Used in:** `app/news/page.tsx` hero section (if no `PageHero` component is used there)
- **Description:** Abstract megaphone/announcement graphic with radial sound waves. Crimson megaphone body, charcoal waves. Transparent background. `viewBox="0 0 500 400"`.

---

---

# Master Checklist

## Foundation & Global

| Task | Status |
|------|--------|
| Add crimson/charcoal tokens to `app/globals.css` `@theme inline` | ❌ |
| Remove orange body gradient in `app/layout.tsx` | ❌ |
| Color migration (orange → crimson) across all 11 existing files | ❌ |
| Update metadata in `app/layout.tsx` from `lib/siteConfig.ts` | ❌ |

## Global Layout

| Task | Status |
|------|--------|
| `components/Header.tsx` — Add new nav links + grouped dropdowns | 🚧 |
| `components/Footer.tsx` — Full 4-column rebuild | 🚧 |

## Homepage

| Task | Status |
|------|--------|
| `components/HeroSection.tsx` — Full visual rebuild | 🚧 |
| `components/WelcomeSection.tsx` — Accent + stat pills | 🚧 |

## Roster

| Task | Status |
|------|--------|
| `lib/data/players.ts` | ❌ |
| `app/roster/page.tsx` | ❌ |
| `app/roster/[id]/page.tsx` | ❌ |
| `components/PlayerCard.tsx` | ❌ |
| `components/RosterFilter.tsx` | ❌ |

## Fixtures

| Task | Status |
|------|--------|
| `lib/data/fixtures.ts` | ❌ |
| `app/fixtures/page.tsx` | ❌ |
| `components/MatchCard.tsx` | ❌ |
| `components/FixturesTabs.tsx` | ❌ |

## Training

| Task | Status |
|------|--------|
| `lib/data/training.ts` | ❌ |
| `app/training/page.tsx` | ❌ |
| `components/WeeklySchedule.tsx` | ❌ |
| `components/TrainingSessionCard.tsx` | ❌ |

## Admissions

| Task | Status |
|------|--------|
| `lib/data/trials.ts` | ❌ |
| `app/admissions/page.tsx` | ❌ |

## Gallery

| Task | Status |
|------|--------|
| `lib/data/gallery.ts` | ❌ |
| `app/gallery/page.tsx` | ❌ |
| `components/GalleryCard.tsx` | ❌ |
| `components/Lightbox.tsx` | ❌ |

## News

| Task | Status |
|------|--------|
| `lib/data/news.ts` | ❌ |
| `app/news/page.tsx` | ❌ |
| `app/news/[slug]/page.tsx` | ❌ |
| `components/NewsCard.tsx` | ❌ |

## Reusable Components

| Task | Status |
|------|--------|
| `components/PageHero.tsx` | ❌ |
| `components/ui/Badge.tsx` | ❌ |
| `components/ui/SectionHeader.tsx` | ❌ |
| `components/CTABanner.tsx` | ❌ |

## Data Layer

| Task | Status |
|------|--------|
| `lib/data/coaches.ts` + refactor `CoachesSection` | ❌ |
| `lib/siteConfig.ts` + update dependent files | ❌ |

## SVG Assets (8 files in `public/SVG/`)

| File | Status |
|------|--------|
| `public/SVG/hero-ball-graphic.svg` | ❌ |
| `public/SVG/roster-illustration.svg` | ❌ |
| `public/SVG/fixtures-graphic.svg` | ❌ |
| `public/SVG/training-graphic.svg` | ❌ |
| `public/SVG/admissions-graphic.svg` | ❌ |
| `public/SVG/gallery-empty-state.svg` | ❌ |
| `public/SVG/no-results.svg` | ❌ |
| `public/SVG/news-illustration.svg` | ❌ |

---

**Total remaining:** 6 new pages, 1 dynamic route, 11 new components, 8 data files, 2 config files, 8 SVG assets.  
**Estimated build order:** Phase 0 → Phase 1 → Phase 9 (reusables) → Phase 10 (data) → Phase 11 (SVGs) → Phases 3–8 (feature pages in any order).
