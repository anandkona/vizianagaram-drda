# Vizianagaram District Citizen Services Portal

A static, citizen-first district information portal for Vizianagaram District, Andhra Pradesh, built with Next.js App Router, TypeScript and Material UI. The visual system uses a warm yellow/gold identity with charcoal contrast panels, inspired by the information flow of a modern district-services portal.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/`
- `/about`, `/services`, `/schemes`, `/livelihoods`, `/tourism`, `/media`
- `/fpo`, `/serp`, `/women-entrepreneurship`, `/one-family-one-entrepreneur`
- `/community-tourism`, `/events`, `/press-releases`, `/success-stories`
- `/pgrs`, `/feedback`, `/ivrs`, `/contact`, `/directory`
- `/knowledge-center`, `/accessibility`, `/sitemap`, `/dashboard`
- `/mart`, `/mart/wishlist`, `/mart/checkout`

## Notes

- The portal uses Next.js App Router, TypeScript, Material UI and Emotion.
- Shared content is local TypeScript data in `src/data/`; figures and catalogue entries are clearly marked where illustrative.
- Concern, feedback and Mart checkout forms validate input and call local API route handlers that return reference IDs; they do not persist personal data or create official government tickets/orders.
- The District Mart cart and wishlist are persisted in browser local storage and can be cleared from the cart drawer.
- The language control loads Google Translate for English/Telugu and stores the selected locale locally.
- Verify time-sensitive contacts, scheme rules, prices and programme figures with official sources before using them as an official record.
