# Vizianagaram District Citizen Services Portal

A static, citizen-first district information portal for Vizianagaram District, Andhra Pradesh, built with Next.js App Router, TypeScript and Material UI.

## Live website

**GitHub Pages:** https://anandkona.github.io/vizianagaram-drda/

The site is deployed as a static Next.js export through GitHub Actions and GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes

- `/`
- `/about`, `/services`, `/schemes`, `/livelihoods`, `/tourism`, `/media`
- `/fpo`, `/serp`, `/women-entrepreneurship`, `/one-family-one-entrepreneur`
- `/community-tourism`, `/events`, `/press-releases`, `/success-stories`
- `/pgrs`, `/feedback`, `/ivrs`, `/contact`, `/directory`
- `/knowledge-center`, `/accessibility`, `/sitemap`, `/dashboard`
- `/mart`, `/mart/wishlist`, `/mart/checkout`

## Technical notes

- Next.js App Router, TypeScript, Material UI and Emotion.
- GitHub Pages uses Next.js static export with `output: "export"`, `basePath: "/vizianagaram-drda"`, trailing slashes, and unoptimized images.
- Shared content is local TypeScript data in `src/data/`; figures and catalogue entries are clearly marked where illustrative.
- The portal is static and does not use Next.js server/API route handlers in the GitHub Pages build.
- Concern, feedback and Mart checkout interactions are browser-side/demo flows; they do not persist personal data or create official government tickets/orders.
- The District Mart cart and wishlist are persisted in browser local storage and can be cleared from the cart drawer.
- The language control loads Google Translate for English/Telugu and stores the selected locale locally.
- Verify time-sensitive contacts, scheme rules, prices and programme figures with official sources before using them as an official record.
