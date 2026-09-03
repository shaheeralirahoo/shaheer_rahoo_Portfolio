# Current State

Snapshot of the project's current state. Update this file when major architectural changes occur.

---

## Framework

- **Next.js 15.5.25** (App Router)
- **TypeScript 5.7+** (strict mode)
- **React 19**

---

## Architecture

- Single-page scrolling portfolio (home) + **static project detail pages**
- Static Site Generation (SSG) — all pages pre-rendered at build time
- One serverless API route (`/api/contact`) for the contact form (Resend)
- Data-driven content via typed TypeScript files in `src/data/`

---

## Current Routes

| Route | File | Rendering |
|-------|------|-----------|
| `/` | `src/app/page.tsx` | Static (SSG) |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Static (SSG, `generateStaticParams`) |
| `/api/contact` | `src/app/api/contact/route.ts` | Dynamic (serverless) |
| `/sitemap.xml` | `src/app/sitemap.ts` | Static |
| `/robots.txt` | `src/app/robots.ts` | Static |
| `/icon.svg` | `src/app/icon.svg` | Static |

`/projects/[slug]` is statically generated for all 10 projects. Unknown slugs render a 404.

---

## Component System

| Component | Type | File |
|-----------|------|------|
| Navbar | Client | `src/components/navbar.tsx` |
| Hero | Client | `src/components/hero.tsx` |
| About | Server | `src/components/about.tsx` |
| EngineeringHighlights | Server | `src/components/engineering-highlights.tsx` |
| Skills | Client | `src/components/skills.tsx` |
| Experience | Client | `src/components/experience.tsx` |
| Projects | Client | `src/components/projects.tsx` |
| Education | Client | `src/components/education.tsx` |
| Footer | Server | `src/components/footer.tsx` |
| ContactForm | Client | `src/components/contact-form.tsx` |
| ThemeToggle | Client | `src/components/theme-toggle.tsx` |
| ThemeProvider | Client | `src/components/theme-provider.tsx` |
| Button | Server-compatible | `src/components/ui/button.tsx` |
| Badge | Server-compatible | `src/components/ui/badge.tsx` |
| ProjectPage | Server | `src/app/projects/[slug]/page.tsx` |

---

## Content System

All content in `src/data/`:
- `site-config.ts` — global metadata, headline, focus, positioning
- `about.ts` — background, technical focus, strengths, career direction, engineering highlights
- `skills.ts` — 7 skill categories
- `experience.ts` — 2 work entries (impact-focused highlights)
- `projects.ts` — 10 projects (3 featured with case-study data, 7 secondary), each with `slug`
- `education.ts` — 1 education entry
- `articles.ts` — empty article model for future technical writing (no articles yet)

---

## Design System

- Tailwind CSS 4 with CSS-based theme (no `tailwind.config.ts`)
- OKLCH color tokens for light/dark themes
- Dark mode by default via `next-themes`
- Self-hosted fonts: Inter (sans) + JetBrains Mono (mono)
- shadcn-style UI primitives: Button (4 variants, 4 sizes), Badge (4 variants including `highlight`)
- Case-study cards use section detail blocks (Overview, Problem, Solution, Architecture, Responsibilities, Challenges, Key Features)

---

## SEO State

- Metadata API in `layout.tsx` (title, description, OG, Twitter cards)
- `sitemap.xml` generated via `src/app/sitemap.ts` (now includes project pages — 11 URLs)
- `robots.txt` generated via `src/app/robots.ts`
- SVG favicon via `src/app/icon.svg`
- OG image: `public/og-image.png` (1200×630)
- JSON-LD `Person` schema with `knowsAbout` (skills)
- JSON-LD `WebSite` schema with `author`
- Per-project `/projects/[slug]` metadata: title, description, canonical URL, OG, Twitter

---

## Accessibility State

- Semantic HTML (header, nav, main, section, footer)
- Skip-to-content link (visually hidden, revealed on keyboard focus)
- ARIA labels on icon-only buttons and external links
- `aria-expanded` on hamburger menu
- Focus-visible rings on all interactive elements
- `prefers-reduced-motion` support via CSS
- Contact form: visible `<label>` elements, per-field error messages with `aria-describedby`, `aria-invalid`, and `role="alert"` for errors
- **No automated accessibility testing**

---

## Contact Form State

- Client component `contact-form.tsx` with name, email, message fields
- Client-side validation (required, email format, min-length) with accessible error messages
- Submits to `/api/contact` (Resend email delivery via Vercel serverless)
- `resend` package installed in `package.json`
- **Server-side validation** in the API route (required fields, email format, message length, input sanitization/length caps)
- **In-memory rate limiting** (3 requests / 60s per IP) returns 429 on abuse
- **Requires `RESEND_API_KEY` env var** — without it, the API returns 503 and the form shows an error

---

## Testing State

- **No automated tests exist**
- `npm run build` serves as the primary quality gate (TypeScript + static generation)
- `npm run lint` runs ESLint with Next.js rules
- No test framework installed
- Manual verification performed: all routes render, project detail pages, 404 handling, sitemap, contact API validation + rate limiting

---

## Deployment State

- **Platform:** Vercel
- **Production URL:** https://shaheer-ali.vercel.app
- **Branch strategy:** `main` for production, `revemp` for development
- **Auto-deploy:** push to connected branch triggers build
- **Env var:** `RESEND_API_KEY` (optional, for contact form)

---

## Completed Work

- Migrated from Vite + React to Next.js 15 + TypeScript
- Data-driven content architecture
- Dark/light mode toggle
- Responsive mobile hamburger menu
- Framer Motion scroll animations
- Self-hosted fonts via next/font
- Resume PDF download
- OG image for social sharing
- Skip-to-content link for keyboard accessibility
- `prefers-reduced-motion` support (CSS media query)
- Active section highlighting in navbar (IntersectionObserver)
- Gradient banners on project cards
- Focus-visible rings on all interactive elements
- **Stronger Hero positioning** (headline, focus line, "View my work" CTA)
- **New About section** (background, technical focus, strengths, career direction)
- **New Engineering Focus section** (6 capability cards)
- **Featured project case studies** (problem, solution, architecture, responsibilities, challenges, key features)
- **Project detail pages** (`/projects/[slug]`, statically generated)
- **Featured vs Additional projects** distinction
- **Accessible + validated contact form** (labels, client + server validation, loading/error/success, rate limiting)
- **JSON-LD `Person` schema** with `knowsAbout`
- **JSON-LD `WebSite` schema**
- **Per-project SEO metadata + sitemap entries**
- Hardened `next.config.ts` (`poweredByHeader: false`, `reactStrictMode: true`)

---

## Known Issues

1. **`RESEND_API_KEY` not configured** — contact form will not deliver email until it's set in Vercel
2. **In-memory rate limiting is per-serverless-instance** — not shared across instances; adequate for a low-traffic portfolio
3. **No automated tests**
4. **Theme toggle does not announce current state** to screen readers
5. **No articles published** — `articles.ts` is an empty model awaiting content

---

## Technical Debt

- No Lighthouse CI or performance monitoring
- No Prettier or formatting tool configured
- All section components on the home page are client components (could optimize some to server components where animations aren't needed)
- Framer Motion is imported in every section — considered lazy loading but rejected (single-page, flash-of-no-animation cost outweighs ~40KB savings)

---

## Deferred Improvements

- Project screenshot images (currently using gradient banners)
- Automated accessibility testing
- Unit tests for data validation
- E2E tests for navigation, theme toggle, and project pages
- Published technical articles (structure exists)
- Sentry or similar error tracking for the API route
