# Testing

Documents the current testing state, verification process, and recommendations.

---

## Current State

**No tests exist.** The project has no test framework, no test files, and no test scripts in `package.json`.

---

## Verification Commands

The following commands serve as the current quality gates:

| Command | Purpose |
|---------|---------|
| `npm run build` | Compiles TypeScript, builds Next.js production bundle, validates all pages render without errors |
| `npm run lint` | Runs ESLint with `next/core-web-vitals` and `next/typescript` rules |

Both commands must pass before any deployment.

---

## Build Verification

`npm run build` performs:
1. TypeScript compilation — catches type errors
2. ESLint — catches code quality issues
3. Next.js static generation — renders all pages, catches import/render errors
4. Produces the production `.next/` output

A successful build confirms that the site will render correctly on Vercel.

---

## Lint Configuration

**File:** `eslint.config.mjs`

ESLint 9 flat config extending:
- `next/core-web-vitals` — catches common React/Next.js issues
- `next/typescript` — catches TypeScript-specific issues

No custom rules are configured. No Prettier or formatting tools are installed.

---

## What's Not Tested

- No unit tests for components
- No integration tests
- No end-to-end tests
- No visual regression tests
- No accessibility tests (no axe-core)
- No performance tests (no Lighthouse CI)
- No responsive design tests

---

## Recommended Future Coverage

### Priority 1: High Value, Low Effort

- **Lighthouse CI** — add to CI pipeline, assert Performance/Accessibility/SEO ≥ 90
- **Build verification** — already covered by `npm run build`

### Priority 2: Medium Value

- **Component smoke tests** — render each section component, verify it doesn't crash (Vitest + React Testing Library)
- **Accessibility audit** — automated axe-core scan on the rendered page

### Priority 3: Nice to Have

- **E2E tests** — Playwright or Cypress to verify navigation, theme toggle, mobile menu, resume download link
- **Visual regression** — screenshot comparison (Chromatic, Percy)

---

## Pre-Deployment Checklist

Before merging or deploying:

1. `npm run build` passes
2. `npm run lint` passes
3. Manual check: open `http://localhost:3000` and verify:
   - All sections render correctly
   - Dark/light mode toggle works
   - Mobile hamburger menu works
   - Resume PDF downloads
   - All external links open correctly
   - No console errors

---

## Adding a Test Framework

If tests are added in the future:

```bash
# Vitest (recommended for Next.js)
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Add to package.json scripts:
"test": "vitest",
"test:ui": "vitest --ui"
```

Create test files alongside components: `src/components/__tests__/hero.test.tsx`
