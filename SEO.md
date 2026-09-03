# SEO Implementation

Documents how SEO is handled in this portfolio.

---

## Metadata API

All SEO metadata is configured in `src/app/layout.tsx` using Next.js Metadata API. Values are sourced from `src/data/site-config.ts`.

### Title

```ts
title: {
  default: "Shaheer Ali | Backend Engineer",
  template: "%s | Shaheer Ali",
}
```

- Default page title: `Shaheer Ali | Backend Engineer`
- Sub-pages (project case studies) use the template pattern via `generateMetadata()`

### Description

Sourced from `siteConfig.tagline`:
> "Backend-focused software engineer with 3+ years building production systems across SaaS, social, ride-hailing, subscription, fitness, dating, and property platforms."

### Keywords

```ts
["Shaheer Ali", "Software Engineer", "Backend Developer", "Node.js", "NestJS", "TypeScript", "Portfolio"]
```

### Canonical URL

`metadataBase` is set to `siteConfig.url` (`https://shaheer-ali.vercel.app`). Relative URLs in metadata resolve against this base.

---

## Open Graph

```ts
openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://shaheer-ali.vercel.app",
  title: "Shaheer Ali | Backend Engineer",
  description: "...",
  siteName: "Shaheer Ali",
  images: [{ url: "https://shaheer-ali.vercel.app/og-image.png", width: 1200, height: 630, alt: "Shaheer Ali" }]
}
```

OG image: `public/og-image.png` (1200×630).

---

## Twitter Card

```ts
twitter: {
  card: "summary_large_image",
  title: "Shaheer Ali | Backend Engineer",
  description: "...",
  images: ["https://shaheer-ali.vercel.app/og-image.png"]
}
```

---

## Sitemap

**File:** `src/app/sitemap.ts`

Generates `/sitemap.xml` with the root URL **plus one entry per project** (all 10 project pages), using `changeFrequency` and per-page `priority` (home = 1.0, projects = 0.8). Currently 11 total `<loc>` entries.

## Project Page Metadata

**File:** `src/app/projects/[slug]/page.tsx`

Each project page sets its own metadata via `generateMetadata()`:
- **title:** `<Project name> | Shaheer Ali`
- **description:** project `summary`
- **alternates.canonical:** `https://shaheer-ali.vercel.app/projects/<slug>`
- **Open Graph + Twitter** card using the project summary

All project pages are statically generated via `generateStaticParams`.

---

## Robots

**File:** `src/app/robots.ts`

```ts
rules: { userAgent: "*", allow: "/" }
sitemap: "https://shaheer-ali.vercel.app/sitemap.xml"
```

All crawlers are allowed. Sitemap URL is absolute.

---

## Favicon

**File:** `src/app/icon.svg`

SVG favicon: indigo rounded rectangle with "SA" initials. Next.js auto-generates the favicon endpoint.

---

## Structured Data

**Implemented.** Two JSON-LD schemas are embedded in `src/app/layout.tsx`:

`Person` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shaheer Ali",
  "jobTitle": "Backend Engineer",
  "url": "https://shaheer-ali.vercel.app",
  "sameAs": [
    "https://github.com/shaheeralirahoo",
    "https://www.linkedin.com/in/shaheer-ali-25b400253/"
  ],
  "knowsAbout": [
    "Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Redis", ...
  ]
}
```

`WebSite` schema (site-level metadata for search engines):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shaheer Ali",
  "url": "https://shaheer-ali.vercel.app",
  "description": "...",
  "author": {
    "@type": "Person",
    "name": "Shaheer Ali",
    "url": "https://shaheer-ali.vercel.app"
  }
}
```

Both help search engines understand who the site belongs to and its scope.

---

## SEO Checklist for New Content

When adding a new project page:

1. Add a unique `slug` to the project in `src/data/projects.ts`
2. It's picked up automatically by `generateStaticParams`, `sitemap.ts`, and `generateMetadata()` — no extra wiring needed
3. Run `npm run build` — the project page is generated and added to the sitemap

---

## Known Limitations

- No dynamic OG images per project (single OG image for entire site)
- No `rel="canonical"` on individual sections (acceptable for single-page)
