# Deployment

Documents how this portfolio is deployed and how to deploy changes.

---

## Hosting Platform

**Vercel** — the default deployment platform for Next.js projects.

- **Production URL:** https://shaheer-ali.vercel.app
- **Build command:** `npm run build` (auto-detected by Vercel)
- **Output:** Static files (all pages pre-rendered at build time)

---

## How Deployment Works

1. Push to the connected Git branch on GitHub
2. Vercel detects the push and triggers a build
3. `npm run build` runs — TypeScript compiles, pages are statically generated
4. The `.next/` output is deployed to Vercel's edge network
5. The site is live at the production URL

No manual intervention required for standard deployments.

---

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | No | Enables contact form email delivery via Resend. Without it, the API returns 503 and the form shows an error. |

---

## Manual Deploy

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy a preview
vercel
```

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production branch — auto-deploys to production |
| `revemp` | Development branch — current working branch |
| Other branches | Feature branches — deploy as preview URLs |

Vercel creates preview deployments for every push to non-production branches.

---

## Domain Configuration

- **Current domain:** `shaheer-ali.vercel.app` (Vercel subdomain)
- Custom domains can be added in the Vercel dashboard under Project Settings → Domains
- DNS configuration depends on the domain registrar

---

## Production Verification

After deployment, verify:

1. Open https://shaheer-ali.vercel.app
2. All sections render correctly
3. Dark/light mode toggle works
4. Mobile hamburger menu works
5. Resume PDF downloads
6. External links work (GitHub, LinkedIn, project links)
7. OG image renders when sharing the URL on social media
8. No console errors in browser DevTools

---

## Rollback

If a bad deployment goes live:

1. Go to Vercel Dashboard → Deployments
2. Find the last known good deployment
3. Click "Promote to Production"

This instantly rolls back to the previous version.

---

## Build Configuration

Vercel auto-detects:
- **Framework:** Next.js
- **Build command:** `npm run build`
- **Output directory:** `.next` (default)
- **Install command:** `npm install`

No custom Vercel configuration file (`vercel.json`) is needed.

---

## Performance Considerations

- Static pages are served from Vercel's global edge network
- No cold starts for pages (pre-rendered HTML)
- One serverless function: `/api/contact` (cold start only on first request after idle)
- Assets (`resume.pdf`, `og-image.png`) are served with default CDN caching
- `next.config.ts` enforces `poweredByHeader: false` and `reactStrictMode: true`
