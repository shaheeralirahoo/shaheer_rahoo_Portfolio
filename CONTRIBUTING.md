# Contributing

Guidelines for working on this portfolio project.

---

## Development Setup

```bash
# Clone the repository
git clone https://github.com/shaheeralirahoo/shaheer_rahoo_Portfolio.git
cd shaheer_rahoo_Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open http://localhost:3000.

---

## Project Conventions

### File Naming
- Components: `kebab-case.tsx` (e.g., `theme-toggle.tsx`)
- Data files: `kebab-case.ts` (e.g., `site-config.ts`)
- UI primitives: `kebab-case.tsx` in `src/components/ui/`

### Component Exports
- Named exports for all components: `export function ComponentName()`
- No default exports for components

### TypeScript
- Strict mode enabled
- All data files export typed interfaces
- Use `@/*` path alias for imports from `src/`

### Styling
- Tailwind CSS utility classes only
- Use `cn()` from `@/lib/utils` for conditional classes
- Never use inline `style` props
- Reference CSS custom property tokens (e.g., `bg-primary`, `text-muted-foreground`)

### Client vs Server Components
- Default to server components (no `"use client"`)
- Add `"use client"` only when the component needs:
  - `useState`, `useEffect`, or other React hooks
  - Browser APIs
  - Framer Motion `motion.*` components
  - `useTheme()` or other client-only hooks

---

## Content Changes

All portfolio content is in `src/data/`. See [CONTENT.md](CONTENT.md) for detailed instructions on adding projects, skills, experience, or updating contact information.

---

## Adding UI Components

1. Create the component in `src/components/ui/`
2. Follow the shadcn/ui pattern: CVA variants + `cn()` utility + forwarded refs
3. Export both the component and its variant config
4. Import via `@/components/ui/component-name`

---

## Responsive Design

- Mobile-first: design for small screens, enhance for larger ones
- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`
- Test at: 375px (mobile), 768px (tablet), 1024px (desktop), 1280px (wide)
- Do not use `overflow-x: hidden` as a fix for layout issues
- Do not use arbitrary fixed widths for responsive behavior

---

## Accessibility

- Use semantic HTML elements
- Add `aria-label` to icon-only buttons
- Ensure all interactive elements are keyboard-accessible
- Maintain visible focus states
- See [ACCESSIBILITY.md](ACCESSIBILITY.md) for full details

---

## Before Submitting Changes

1. Run `npm run build` — must pass
2. Run `npm run lint` — must pass
3. Test in browser: all sections, dark/light mode, mobile menu
4. Verify no console errors
5. Check that content changes are accurate (never fabricate portfolio information)

---

## Git Conventions

- Commits: imperative mood, concise (e.g., "add dark mode toggle", "fix mobile menu overflow")
- Branches: descriptive names (e.g., `feature/contact-form`, `fix/a11y-focus-states`)
- Do not commit `node_modules/`, `.next/`, or `.env` files

---

## Dependencies

Before installing a new package:
1. Check if the functionality already exists in the project
2. Check if an existing dependency can solve it
3. Prefer built-in Next.js/Tailwind features over third-party libraries
4. Only install when there is a clear, justified benefit
