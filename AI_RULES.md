# AI Rules

Rules for AI coding agents (Cursor, Copilot, Claude Code, etc.) working on this portfolio.

---

## Before Changing Code

1. **Read the existing architecture** — start with [ARCHITECTURE.md](ARCHITECTURE.md)
2. **Search for existing components** before creating new ones — check `src/components/` and `src/components/ui/`
3. **Search for existing utilities** before creating new ones — check `src/lib/utils.ts`
4. **Read the data files** before modifying content — check `src/data/`
5. **Understand consumers** of a shared component before modifying it — grep for imports
6. **Check the design tokens** before adding new styles — see [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
7. **Read this file** and [CONTENT.md](CONTENT.md) before making content changes

---

## Architecture Rules

- **Prefer existing components** — reuse `Button`, `Badge`, and section components before creating new ones
- **No duplicate components** — if it exists, use it or extend it
- **No unnecessary abstractions** — keep components concrete and simple
- **Keep responsibilities clear** — one component, one purpose
- **Data in `src/data/`, rendering in `src/components/`** — never hardcode content in JSX
- **Server Components by default** — only add `"use client"` when interactivity is required

---

## Responsive UI Rules

- **Mobile-first** — always design for the smallest screen first
- **No accidental horizontal scrolling** — test at all breakpoints
- **No arbitrary fixed widths** to solve responsive problems — use Tailwind responsive utilities
- **No `overflow-x: hidden`** as a blanket fix — find the root cause
- **Test at multiple viewport sizes** before completing a change

---

## Accessibility Rules

- **Semantic HTML** — `<button>` not `<div onClick>`, `<nav>` not `<div>`
- **Keyboard accessible** — all interactive elements must be reachable and operable via keyboard
- **Visible focus states** — `focus-visible:ring-2 focus-visible:ring-primary` for interactive elements
- **Meaningful alt text** — for any images added in the future
- **ARIA labels** — on icon-only buttons (`aria-label="Toggle theme"`)
- **Skip-to-content** — keep the visually-hidden link that jumps to main content with keyboard focus
- **Respect `prefers-reduced-motion`** — already implemented via CSS; new animations must not regress this

---

## Content Integrity Rules

**NEVER fabricate:**

- Jobs, clients, or companies
- Projects or project descriptions
- Metrics, revenue, or user counts
- Testimonials or reviews
- Awards or certifications
- Technologies used
- Professional achievements
- Dates or time periods

If information is unavailable, leave it out or add a `// TODO: confirm` comment. The data files in `src/data/` are the source of truth for all portfolio content.

---

## Dependency Rules

Before installing a package:

1. Check if the functionality already exists in the project
2. Check if an existing dependency can solve it
3. Check if Tailwind CSS can handle it (most styling needs)
4. Only install a dependency when there is a clear, justified benefit
5. Prefer well-maintained, popular packages with TypeScript support

Current dependencies and their purposes:
- `next` — framework
- `react` / `react-dom` — UI library
- `framer-motion` — animations
- `lucide-react` — icons
- `next-themes` — dark/light mode
- `class-variance-authority` — component variants
- `clsx` + `tailwind-merge` — class name utilities
- `resend` — email delivery for the contact form (requires `RESEND_API_KEY` env var)

---

## Documentation Rules

Whenever you change architecture:
- Update the relevant `.md` file
- Keep documentation synchronized with implementation
- Remove outdated documentation
- Do not create new docs without updating the index (this file and README)

---

## Code Style Rules

- **TypeScript strict mode** — no `any` types, proper interfaces
- **Named exports** — `export function ComponentName()`
- **No inline styles** — Tailwind utilities only
- **Use `cn()`** for conditional class merging
- **`@/*` path alias** for all imports from `src/`
- **No comments** in code unless explaining a non-obvious decision
- Keep components under ~150 lines — split if larger
