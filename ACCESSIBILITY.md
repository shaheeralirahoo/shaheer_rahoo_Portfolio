# Accessibility

Documents the current accessibility implementation, patterns, and known gaps.

---

## Semantic HTML

The project uses proper HTML5 semantic elements:

| Element | Used in |
|---------|---------|
| `<header>` | `navbar.tsx` — wraps the sticky navigation |
| `<nav>` | `navbar.tsx` — contains navigation links |
| `<main>` | `page.tsx` — wraps all content sections |
| `<section>` | Every section (hero, about, engineering, skills, experience, projects, education) |
| `<footer>` | `footer.tsx` — contact and copyright |
| `<h1>` | Hero — site name (also project page title) |
| `<h2>` | Section titles (About, Engineering, Skills, Experience, Projects, Education, Contact) and case-study section headers |
| `<h3>` | Card titles (skill categories, job roles, project names, highlight cards) |
| `<ul>` / `<li>` | Navigation links, experience highlights |

---

## Keyboard Navigation

- All interactive elements are `<a>` or `<button>` — not `<div onClick>`.
- Anchor links (`#skills`, etc.) are navigable via Tab.
- The hamburger menu toggle is a `<button>` element.
- External links open in new tabs with `target="_blank"`.

### Implemented

- **Skip-to-content link** at the top of `page.tsx`, visually hidden until focused via keyboard, links to `<main id="main-content">`.
- **Focus-visible rings** on all interactive elements: links use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`, buttons have similar patterns.
- Nav links, CTA buttons, social icons, footer links, and form inputs all have consistent focus-visible styles.

---

## Focus States

- **Button component:** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` — visible focus ring with offset on keyboard focus.
- **Nav links:** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
- **CTA links in Hero/Footer:** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
- **Form inputs:** `focus:border-primary focus:ring-2 focus:ring-primary/20`.
- **All interactive elements** have consistent focus-visible styles for keyboard users.

---

## ARIA Attributes

| Element | ARIA | Location |
|---------|------|----------|
| Hamburger button | `aria-label="Toggle menu"` | `navbar.tsx` |
| Hamburger button | `aria-expanded={menuOpen}` | `navbar.tsx` |
| Theme toggle | `aria-label="Toggle theme"` | `theme-toggle.tsx` |
| GitHub link | `aria-label="GitHub"` | `hero.tsx`, `footer.tsx` |
| LinkedIn link | `aria-label="LinkedIn"` | `hero.tsx`, `footer.tsx` |
| Form inputs | `aria-invalid` when validation fails | `contact-form.tsx` |
| Form inputs | `aria-describedby` → error/success message id | `contact-form.tsx` |
| Form error messages | `role="alert"` | `contact-form.tsx` |

---

## Forms

The contact form (`contact-form.tsx`) is accessibility-aware:
- Every field has a visible `<label>` (name, email, message)
- Client-side validation checks required fields, email format, and message length
- Errors are announced via `role="alert"` and linked to the field with `aria-describedby`
- Invalid fields set `aria-invalid` and a red border
- Non-`required` on inputs by default avoids a misleading native "please fill out" without custom styling
- The form shows distinct loading, error, and success states

---

## Color Contrast

- **Dark theme:** near-white text (`oklch(0.95)`) on very dark backgrounds (`oklch(0.15-0.25)`). High contrast ratio.
- **Light theme:** near-black text (`oklch(0.2)`) on near-white backgrounds (`oklch(0.96-0.99)`). High contrast ratio.
- **Primary buttons:** primary color on primary-foreground — should be verified with a contrast checker.
- **Muted text:** `muted-foreground` on `background` — may be lower contrast. Acceptable for supplementary text but should be checked.

---

## Alt Text

- **No images with alt text** — the portfolio currently has no `<img>` elements. All visuals are CSS-based or SVG icons from lucide-react.
- lucide-react icons are decorative (paired with text labels) and do not need alt text.
- External links with icons (ExternalLink in project cards) are accompanied by text labels.

---

## Screen Reader Considerations

- Section headings follow a proper hierarchy (h1 → h2 → h3).
- Navigation links are in a `<ul>` list.
- External links use `target="_blank"` — screen readers will announce this.
- The theme toggle icon changes between Sun/Moon but does not announce the current state. Consider adding `aria-label` that reflects the current theme.

---

## Reduced Motion

**Implemented.** The `prefers-reduced-motion: reduce` media query is defined in `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This disables all CSS transitions, animations, and transforms for users who have enabled reduced motion in their OS settings. Framer Motion animations are effectively neutered by this CSS override.

---

## Mobile Accessibility

- Hamburger menu is touch-accessible with adequate tap targets (h-10 w-10 = 40×40px).
- Font sizes are responsive via Tailwind responsive utilities.
- Content is readable without horizontal scrolling.

---

## Known Issues & Recommendations

1. **Theme toggle does not announce state** — screen readers don't hear which theme is active
2. **No automated accessibility testing** — no axe-core, no Lighthouse CI
3. **No `lang` attribute changes** — site is English-only, `lang="en"` is correctly set
4. **Form error messages could be focused** — when a client-side error occurs, the first invalid field is not automatically focused (acceptable for current scope)

---

## Testing

- No automated accessibility testing (no axe-core, no Lighthouse CI).
- Manual testing recommendations: navigate the entire site using only keyboard, test with a screen reader (VoiceOver/NVDA), check with browser zoom at 200%.
