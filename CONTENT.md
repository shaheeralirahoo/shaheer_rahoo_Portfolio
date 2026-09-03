# Content Guide

How portfolio content is structured, where it lives, and how to update it.

---

## Content Files

All content lives in `src/data/` as typed TypeScript files. Components import from these files and render the data — nothing is hardcoded in JSX.

| File | What it controls | Interface |
|------|-----------------|-----------|
| `site-config.ts` | Name, title, headline, tagline, location, email, phone, social links, resume URL, OG image URL | `siteConfig` (plain object) |
| `about.ts` | About section (background, focus, strengths, career direction) + engineering highlights | `AboutEntry`, `Highlight` |
| `skills.ts` | Skills organized by category | `SkillCategory` |
| `experience.ts` | Work history (role, company, location, period, highlights) | `ExperienceEntry` |
| `projects.ts` | Project cards + case-study fields + slugs (feeds `/projects/[slug]`) | `Project` |
| `education.ts` | Education entries (degree, university, year, project) | `EducationEntry` |
| `articles.ts` | Technical writing model (currently empty) | `Article` |

---

## How to Add a New Project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:

```ts
{
  slug: "project-slug",              // URL slug for the project page (must be unique)
  title: "Project Name",
  description: "One-paragraph description of the project.",
  tech: ["Node.js", "Express.js", "MongoDB"],
  links: [
    { label: "Live App", url: "https://example.com" },
  ],
  featured: false,  // set to true to show in the top grid + case study
  gradient: "from-blue-500 to-purple-600",  // Tailwind gradient classes for the card banner
  // Optional case-study fields (only rendered for featured projects):
  summary: "One-sentence hook shown on the card.",
  overview: "Detailed project overview paragraph(s).",
  problem: ["Business/technical problem being solved."],
  solution: ["How you approached and solved it."],
  architecture: ["System components, data flow, deployment."],
  responsibilities: ["Your specific contributions."],
  challenges: ["Notable challenges and how you handled them."],
  keyFeatures: ["Important features or capabilities."],
  impact: ["Measurable outcomes or learnings."],
},
```

3. If `featured: true`, the project appears in the main grid with a **"View case study"** link, and its page is generated at `/projects/[slug]`.
4. If `featured: false` (or omitted), it appears behind the "Show more work" button and has no standalone page.
5. The `gradient` field controls the color banner at the top of the project card. Use Tailwind `from-*` and `to-*` classes (e.g., `"from-emerald-500 to-cyan-600"`, `"from-orange-500 to-red-600"`).
6. Featured projects should provide the case-study fields so their `/projects/[slug]` pages are complete. Only provided sections render.
7. Save the file — the component renders it automatically. Run `npm run build` to regenerate the static project pages and sitemap.

## How to Add a Case Study Section

The project detail page (`/projects/[slug]`) renders any of the optional sections you provide: Overview, Problem, Solution, Architecture, Responsibilities, Challenges, Key Features, Impact. To add content, populate the matching field on the `Project` object for a featured project. Sections without data are simply omitted from the page.

---

## How to Add a New Skill Category

1. Open `src/data/skills.ts`
2. Add a new object to `skillCategories`:

```ts
{
  category: "New Category",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
},
```

---

## How to Add a Work Experience Entry

1. Open `src/data/experience.ts`
2. Add a new object to `experiences`:

```ts
{
  role: "Job Title",
  company: "Company Name",
  location: "City",
  period: "Start – End",
  current: false,  // set to true to show "Current" badge
  highlights: [
    "Key achievement or responsibility.",
    "Another point.",
  ],
},
```

Entries render in array order (newest first recommended).

---

## How to Update Contact Information

1. Open `src/data/site-config.ts`
2. Update the relevant fields:

```ts
email: "new@email.com",
phone: "+1234567890",
phoneDisplay: "+1 234 567 890",
github: "https://github.com/newusername",
linkedin: "https://www.linkedin.com/in/newprofile/",
```

3. Both the Hero section and Footer pull from this file — update once, reflected everywhere.

---

## How to Update the Resume PDF

1. Replace `public/resume.pdf` with the new file (keep the same filename).
2. The download links in Hero and Footer reference `/resume.pdf` via `site-config.ts` → `resumeUrl`.

---

## How to Update the OG Image

1. Replace `public/og-image.png` with a new 1200×630 image.
2. Update the URL in `src/data/site-config.ts` → `ogImage` if the deployment domain changes.

---

## Content Interfaces

### `Project`

```ts
interface ProjectLink {
  label: string;   // Button text (e.g., "Google Play")
  url: string;     // Full URL
}

interface Project {
  slug: string;                // URL slug for /projects/[slug] (must be unique)
  title: string;
  description: string;
  tech: string[];              // Array of technology names
  links?: ProjectLink[];       // Optional external links
  featured?: boolean;          // true = top grid + case-study page
  gradient?: string;           // Tailwind gradient classes (e.g., "from-blue-500 to-purple-600")

  // Case-study fields (optional; used by /projects/[slug] featured pages)
  summary?: string;
  overview?: string;
  problem?: string[];
  solution?: string[];
  architecture?: string[];
  responsibilities?: string[];
  challenges?: string[];
  keyFeatures?: string[];
  impact?: string[];
}
```

### `AboutEntry` / `Highlight`

```ts
interface Highlight {
  title: string;       // Capability title (e.g., "Payments & Subscriptions")
  description: string; // What you build/did in this area
  icon: string;        // Key used to look up a lucide icon
}

interface AboutEntry {
  background: string[];      // Paragraphs about your background
  focus: string[];           // Technical focus areas
  strengths: string[];       // Professional strengths
  careerDirection: string;   // What you're looking for
  highlights: Highlight[];   // Engineering highlight cards
}
```

### `Article` (technical writing)

```ts
interface Article {
  slug: string;
  title: string;
  date: string;       // Publication date, e.g., "2026-01-15"
  excerpt: string;    // Short teaser for cards
  tags: string[];
  content: string[];  // Paragraphs of the full article
}
```

The array in `src/data/articles.ts` is currently empty — no articles are published. When adding the first article, a rendering component/section still needs to be built (the data model and content guide exist now).

### `ExperienceEntry`

```ts
interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;          // Display string, e.g., "May 2024 – Present"
  current?: boolean;       // Shows "Current" badge
  highlights: string[];    // Bullet-point achievements
}
```

### `SkillCategory`

```ts
interface SkillCategory {
  category: string;        // Category name (e.g., "Backend")
  skills: string[];        // Skill names
  icon?: string;           // Optional (not currently rendered)
}
```

### `EducationEntry`

```ts
interface EducationEntry {
  degree: string;
  university: string;
  year: string;            // Graduation date string
  project?: string;        // Optional thesis/FYP description
}
```

---

## Content Rules

- **Never fabricate** projects, jobs, clients, metrics, testimonials, or achievements.
- Keep descriptions factual and concise (1-2 sentences).
- Use consistent period formatting: `"Mon YYYY – Mon YYYY"` or `"Mon YYYY – Present"`.
- All external links must be valid and publicly accessible.
- Tech tags should be consistent across projects (e.g., always "Node.js", not sometimes "node" or "NodeJS").
