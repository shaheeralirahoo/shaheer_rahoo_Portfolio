# Design System

Documents the actual design tokens, typography, colors, spacing, and component styles used in the project. All values are derived from the CSS custom properties in `src/app/globals.css`.

---

## Fonts

| Token | Font | Source | Weight |
|-------|------|--------|--------|
| `--font-sans` | Inter | Google Fonts via `next/font` | Variable font (all weights) |
| `--font-mono` | JetBrains Mono | Google Fonts via `next/font` | Variable font (all weights) |

Both fonts are self-hosted by Next.js (zero layout shift, no external requests).

CSS fallback stack: `var(--font-sans), ui-sans-serif, system-ui, sans-serif`

---

## Color System

Uses OKLCH color space. Two themes: light (`:root`) and dark (`.dark`).

### Light Theme (`:root`)

| Token | OKLCH Value | Visual |
|-------|-------------|--------|
| `--background` | `oklch(0.99 0.004 285)` | Near-white with slight blue tint |
| `--foreground` | `oklch(0.2 0.02 285)` | Near-black |
| `--card` | `oklch(1 0 0)` | Pure white |
| `--card-foreground` | `oklch(0.2 0.02 285)` | Near-black |
| `--primary` | `oklch(0.51 0.22 295)` | Purple |
| `--primary-foreground` | `oklch(0.98 0.01 285)` | Near-white |
| `--muted` | `oklch(0.96 0.006 285)` | Light gray |
| `--muted-foreground` | `oklch(0.5 0.02 285)` | Medium gray |
| `--accent` | `oklch(0.55 0.19 340)` | Pink/rose |
| `--accent-foreground` | `oklch(0.98 0.01 285)` | Near-white |
| `--border` | `oklch(0.9 0.01 285)` | Light gray border |

### Dark Theme (`.dark`)

| Token | OKLCH Value | Visual |
|-------|-------------|--------|
| `--background` | `oklch(0.15 0.015 285)` | Very dark blue-gray |
| `--foreground` | `oklch(0.95 0.01 285)` | Near-white |
| `--card` | `oklch(0.2 0.02 285)` | Dark card surface |
| `--card-foreground` | `oklch(0.95 0.01 285)` | Near-white |
| `--primary` | `oklch(0.65 0.2 295)` | Lighter purple |
| `--primary-foreground` | `oklch(0.15 0.015 285)` | Dark |
| `--muted` | `oklch(0.25 0.02 285)` | Dark muted surface |
| `--muted-foreground` | `oklch(0.7 0.02 285)` | Medium-light gray |
| `--accent` | `oklch(0.6 0.18 340)` | Lighter pink |
| `--accent-foreground` | `oklch(0.98 0.01 285)` | Near-white |
| `--border` | `oklch(0.3 0.02 285)` | Dark border |

---

## Tailwind Color Mapping

The `@theme inline` block in `globals.css` maps CSS variables to Tailwind utility classes:

```
bg-background / text-foreground
bg-card / text-card-foreground
bg-primary / text-primary-foreground
bg-muted / text-muted-foreground
bg-accent / text-accent-foreground
border-border
```

Usage: `bg-primary`, `text-muted-foreground`, `border-border`, etc.

---

## Radius

| Token | Value |
|-------|-------|
| `--radius` | `0.75rem` (12px) |
| `--radius-sm` | `calc(var(--radius) - 4px)` = 8px |
| `--radius-md` | `calc(var(--radius) - 2px)` = 10px |
| `--radius-lg` | `var(--radius)` = 12px |

- Cards use `rounded-xl` (12px)
- Buttons use `rounded-lg` (12px) via CVA base class
- Skill/project chips use `rounded-full`
- Nav hamburger button uses `rounded-lg`

---

## Typography Scale

| Element | Classes | Size |
|---------|---------|------|
| H1 (Hero name) | `text-5xl sm:text-6xl md:text-7xl font-extrabold` | 3rem → 4.5rem |
| H2 (Section titles) | `text-3xl sm:text-4xl font-bold tracking-tight` | 1.875rem → 2.25rem |
| H3 (Card titles) | `text-lg font-semibold` or `text-xl font-semibold` | 1.125rem / 1.25rem |
| Body | `text-sm leading-relaxed text-muted-foreground` | 0.875rem |
| Subtitle | `text-xl sm:text-2xl font-medium text-muted-foreground` | 1.25rem → 1.5rem |
| Badge/tag | `text-xs font-medium` or `text-xs font-semibold` | 0.75rem |

---

## Spacing

Consistent spacing pattern across sections:
- **Section padding:** `px-6 py-20` (24px horizontal, 80px vertical)
- **Content max-width:** `max-w-6xl` (1152px) for skills/projects, `max-w-4xl` (896px) for experience/education
- **Card padding:** `p-6` default, `p-8` for featured cards
- **Grid gaps:** `gap-6` (24px) between cards
- **Element gaps:** `gap-2` to `gap-8` depending on context
- **Horizontal centering:** `mx-auto` on content wrappers

---

## Shadows & Elevation

| Element | Classes |
|---------|---------|
| Cards | `shadow-sm` (subtle shadow) |
| Navbar | `shadow-md` (medium shadow) |
| Hero CTA primary button | `shadow` (default shadow) |
| Timeline dots | `shadow-lg` (larger shadow) |

---

## Borders

- All borders use `border-border` (CSS variable), ensuring theme-aware borders
- Cards: `border border-border`
- Navbar: `border-b border-border`
- Footer: `border-t border-border`
- Hero CTA outline button: `border border-border`
- Timeline: `border-l border-border`

---

## Interactive States

| Pattern | Classes |
|---------|---------|
| Button hover (primary) | `hover:opacity-90` |
| Button hover (muted/outline) | `hover:bg-muted` |
| Link hover | `hover:text-foreground` (from muted-foreground) |
| Card hover | Not applied (static) |
| Icon hover | `hover:text-primary` or `hover:text-foreground` |
| Skill tag hover | Not applied (static) |
| Focus | `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (links, buttons) |
| Focus (inputs) | `focus:border-primary focus:ring-2 focus:ring-primary/20` (form fields) |

---

## Gradients

- Hero name: `bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`
- **Project card banners:** each project defines a `gradient` field (e.g., `"from-blue-500 to-purple-600"`) used as `bg-gradient-to-r ${gradient}` at the top of the card
- Icons used throughout from `lucide-react`

---

## Transitions

- Standard transition: `transition-colors` (fast, for hovers)
- Menu animation: `transition-all duration-300` (max-h expand/collapse)
- Scroll animations: `transition: { duration: 0.5 }` (Framer Motion)
- Hero stagger: `staggerChildren: 0.12` (120ms between each child)
- Reduced motion: `prefers-reduced-motion: reduce` disables all transitions via CSS `!important`

---

## Form Inputs

Contact form fields use a consistent style:

| Element | Classes |
|---------|---------|
| Text/email inputs | `h-11 rounded-lg border border-border bg-muted px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20` |
| Textarea | Same as inputs, with `py-3` and `w-full` |
| Submit button | Uses the primary Button variant pattern |

---

## Badge Variants

| Variant | Style | Usage |
|---------|-------|-------|
| `default` | Primary background + primary-foreground text | Current badge (Experience) |
| `secondary` | Muted background + muted-foreground text | General tags |
| `outline` | Border only, transparent background | Subtle indicators |
| `highlight` | Accent background + accent-foreground text | Featured badge (Projects) |
