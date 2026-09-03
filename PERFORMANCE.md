# Performance

Documents performance practices, optimizations, and considerations in this portfolio.

---

## Rendering Strategy

- **Static Site Generation (SSG):** all pages are pre-rendered at build time. No server-side rendering, no ISR, no streaming.
- **Bundle size:** ~158 KB first load JS (main page). Breakdown: ~46 KB shared chunk + ~54 KB shared chunk + ~1.97 KB other.
- **No dynamic routes** — everything is a single static page.

---

## Font Optimization

- **Self-hosted** via `next/font/google` — Inter and JetBrains Mono are downloaded at build time and served from the same origin.
- **No external font requests** — eliminates render-blocking font CSS from Google Fonts CDN.
- **Zero layout shift** — fonts are preloaded and `font-display: swap` is handled by Next.js automatically.
- Font variables (`--font-sans`, `--font-mono`) are applied via CSS custom properties.

---

## Image Optimization

- **Not currently used.** The portfolio has no project screenshots or photos. All visuals are CSS-based (gradients, borders, icons).
- `next/image` is not imported anywhere because there are no images to optimize.
- If project screenshots are added later, they should use `next/image` with `width`/`height` or `fill` props.

---

## JavaScript Budget

- **All section components are client components** — they ship to the browser. This is necessary for Framer Motion animations and React state.
- **No code splitting** beyond Next.js automatic route splitting (irrelevant for single-page).
- **Framer Motion** is the largest dependency (~40 KB gzipped). It is imported in 5 section components (hero, skills, experience, projects, education) but not in navbar, footer, or theme components.
- **Unused dependencies removed:** `@radix-ui/react-dialog` was installed but never used — now removed.
- **Contact form** adds minimal client JS (~1 KB) for form state and fetch logic.
- **No analytics scripts, no third-party embeds, no chat widgets.**

---

## Static Assets

| Asset | Size | Notes |
|-------|------|-------|
| `resume.pdf` | ~131 KB | Downloaded on demand via `<a download>` |
| `og-image.png` | ~10 KB | Loaded only by social media crawlers |

Both are served from Vercel's CDN with default caching headers.

---

## CSS Strategy

- **Tailwind CSS 4** with PostCSS — only used classes are included in the output CSS.
- **No unused CSS** — PurgeCSS is built into Tailwind v4.
- **CSS custom properties** for theme tokens — single source of truth for colors.
- **No CSS-in-JS runtime** — Tailwind generates static CSS at build time.

---

## Animation Performance

- Framer Motion `whileInView` with `viewport={{ once: true }}` — animations play once and stop observing, reducing layout thrashing.
- Staggered animations use `staggerChildren` — sequential, not parallel, reducing peak CPU usage.
- Navbar menu uses CSS `max-height` transition — no JavaScript animation loop.
- `will-change` is not explicitly set (Framer Motion handles this internally).

---

## Caching

- Deployed on Vercel — static assets get immutable caching headers automatically.
- `resume.pdf` and `og-image.png` in `public/` are served with long-lived cache headers.
- HTML pages are served as static files with immutable caching from Vercel's CDN.

---

## Build Performance

- `next build` compiles in ~2-3 seconds.
- All pages are static — no dynamic rendering at build time.
- TypeScript checking is integrated into the build process.

---

## Lighthouse Considerations

The site should score well on:
- **Performance:** static HTML, self-hosted fonts, no third-party scripts, minimal JS
- **SEO:** meta tags, sitemap, robots.txt, semantic HTML
- **Accessibility:** semantic markup, ARIA labels, focus states

Potential improvements for future:
- Add `loading="lazy"` to images if project screenshots are added
- Consider adding `<link rel="preconnect">` for any future external resources
- Monitor bundle size as dependencies are added
