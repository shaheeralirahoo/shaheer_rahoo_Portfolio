# UI Documentation

Describes the UI architecture, component hierarchy, layout system, and design patterns used in this portfolio.

---

## Page Layout

The site is a single scrollable page with dedicated project case-study pages. Layout order:

```
Navbar (sticky, top)
  Hero              ← min-h-[calc(100vh-4rem)]
  About             ← background, focus, strengths, career direction
  Engineering       ← engineering capability cards
  Skills
  Experience
  Projects
  Education
Footer              ← sticky to bottom via content flow
```

Project case-study pages live at `/projects/[slug]`. The root wrapper (`page.tsx`) applies `min-h-screen` to ensure the footer sits at the bottom even with sparse content.

---

## Navigation

**File:** `src/components/navbar.tsx`

- **Desktop:** horizontal link bar, right-aligned. Links: About, Engineering, Skills, Experience, Projects, Education, Contact.
- **Mobile:** hamburger icon (☰/✕) toggles a slide-down menu panel.
- **Active section highlighting:** IntersectionObserver tracks which section is in view and highlights the corresponding nav link with `text-primary font-medium`.
- **Theme toggle:** Sun/Moon icon button in the top-right, rendered by `ThemeToggle`.
- **Behavior:** sticky `top-0` with `backdrop-blur` and semi-transparent background.
- **Scroll-to:** anchor links (`#about`, `#engineering`, etc.) with `scroll-smooth` on the HTML element.
- **Brand link** scrolls to `#hero`.
- **Skip-to-content:** a visually-hidden link at the top of the page that becomes visible on focus, linking to `#main-content`.

---

## Hero

**File:** `src/components/hero.tsx`

Full-viewport centered section with:
- Location pill (MapPin icon + city) + experience
- Name (gradient text: primary → accent)
- Headline ("Backend Engineer")
- Focus line
- CTA buttons row: View my work (primary), Resume (outline), Contact (muted)
- Social icons: GitHub, LinkedIn, and phone

All elements animate in with staggered Framer Motion transitions on page load. Section `id="hero"`.

---

## About

**File:** `src/components/about.tsx` (server component)

Two-column section with:
- **Background** paragraphs
- **Technical focus** and **strengths** lists
- **Career direction** callout
- Pulls from `src/data/about.ts`

---

## Engineering Focus

**File:** `src/components/engineering-highlights.tsx` (server component)

Responsive grid of **Highlight** cards (`src/data/about.ts` → `highlights`), each with an icon, title, and description covering capability areas like APIs, payments/subscriptions, real-time, databases, auth/RBAC, and cloud.

**File:** `src/components/skills.tsx`

3-column responsive grid (`sm:grid-cols-2 lg:grid-cols-3`). Each category is a card with:
- Category name (primary color, semibold)
- Skill chips (rounded-full, muted background)

Cards animate in on viewport entry with staggered delays.

---

## Experience

**File:** `src/components/experience.tsx`

Timeline layout with a vertical left border and dot markers. Each entry card contains:
- Role title with Briefcase icon
- "Current" badge (if `current: true`)
- Company · period
- Location with MapPin icon
- Bullet-point highlights

---

## Projects

**File:** `src/components/projects.tsx`

Two-tier display:
1. **Featured projects** — always visible in a 3-column grid, each with "Featured" badge (Rocket icon) using the `highlight` Badge variant, a gradient color banner at the top, the project `summary`, and a **"View case study"** link to `/projects/<slug>`.
2. **More projects** — hidden behind "Show more work" button, revealed on click; labeled "Additional Work".

Each `ProjectCard` contains:
- **Gradient banner** — color-coded visual header defined by the `gradient` field in project data
- Title
- Summary/Description
- Tech tags (rounded-full chips)
- Link buttons (primary color, with ExternalLink icon) + case-study link for featured projects

Badge variants used: `highlight` for Featured, `default` for Current (in Experience).

---

## Project Case-Study Page

**File:** `src/app/projects/[slug]/page.tsx` (server component)

Each featured project has a dedicated static page at `/projects/[slug]`:
- **Back to projects** navigation link
- **Header** — title, tech tags, external links, metadata
- **Sections** rendered only when the corresponding data exists: Overview, Problem, Solution, Architecture, Responsibilities, Challenges, Key Features, Impact (each with a section header + bullet lists, lucide icons)
- **Per-project metadata** via `generateMetadata()` (title, description, canonical URL, OG/Twitter)
- Statically generated for all 10 projects via `generateStaticParams`; unknown slugs return a 404

The page is fully static (no client interactivity) and uses no Framer Motion.

---

## Education

**File:** `src/components/education.tsx`

Single card layout with GraduationCap icon, degree, university, year, and optional project description.

---

## Footer / Contact

**File:** `src/components/footer.tsx`

- Dark background (`bg-card` with `border-t`)
- "Get in Touch" heading
- CTA buttons: Email (primary), Phone (outline), Resume (outline)
- **Contact form:** client component with name, email, message fields, per-field validation, accessible labels, `aria-invalid`/`aria-describedby`, and loading/error/success states (calls `/api/contact`)
- Social icons: GitHub, LinkedIn
- Copyright line with dynamic year

Footer is a **server component** that imports the client-side `ContactForm` component.

---

## UI Primitives

Located in `src/components/ui/`:

### Button (`button.tsx`)

| Prop | Variants |
|------|----------|
| `variant` | `default` (primary), `secondary`, `outline`, `ghost` |
| `size` | `default` (h-10), `sm` (h-9), `lg` (h-11), `icon` (square) |

Supports forwarded refs, disabled states, focus-visible ring.

### Badge (`badge.tsx`)

| Prop | Variants |
|------|----------|
| `variant` | `default` (primary bg), `secondary` (muted bg), `outline`, `highlight` (accent bg) |

Currently used: `highlight` in Projects (Featured badge), `default` in Experience (Current badge).

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| `< md` (mobile) | Navbar shows hamburger menu; single-column layouts |
| `md` | Navbar shows horizontal links; 2-column grids (About) |
| `lg` | 3-column grids for skills, projects, and engineering highlights |

The hamburger menu uses `max-h-0` → `max-h-96` CSS transition for open/close.

---

## Accessibility Patterns

- All interactive elements use `<a>` or `<button>` (not `<div onClick>`)
- External links have `target="_blank" rel="noopener noreferrer"`
- Icon-only buttons have `aria-label` (theme toggle, hamburger menu)
- The hamburger button has `aria-expanded` state
- Semantic `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>` elements are used
- **Skip-to-content link** visible on keyboard focus, links to `#main-content`
- **Focus-visible rings** on all interactive elements: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`
- **prefers-reduced-motion** CSS disables all transitions and transforms
- **Form fields** have visible `<label>` elements, `aria-invalid` when invalid, and `aria-describedby` linked to per-field error/success messages (`role="alert"`)

---

## Adding New Sections

To add a new section to the page:

1. Create `src/components/new-section.tsx`
2. Prefer a **server component** unless it needs animation or state
3. If it needs content, add a data file in `src/data/`
4. Import and add it to `src/app/page.tsx` in the desired position
5. Add a nav link in `src/components/navbar.tsx` `navLinks` array
6. Add a corresponding anchor `id` in the new component's `<section>`

---

## Theme Toggle

**File:** `src/components/theme-toggle.tsx`

Uses `next-themes` `useTheme()` hook. Toggles between `dark` and `light`. The `.dark` class on `<html>` switches CSS custom property values in `globals.css`. Default theme is dark.

---

## Animation Pattern

All scroll-triggered sections follow this Framer Motion pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5 }}
>
```

- `once: true` — animation plays only once per element
- `margin: "-80px"` — triggers slightly before element is fully in view
- Hero uses `animate` (on load) instead of `whileInView` (on scroll)
