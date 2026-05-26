# Build‑A‑Box (Marketing Site)

A clean, modern, sustainability‑focused marketing website for **Build‑A‑Box** — moving boxes that become furniture and home decor using design kits.

This is a **showcase site**, not a functional storefront:

- Product-style pages and realistic CTAs
- “Add to Cart” opens a cart drawer
- Checkout opens a modal that explains the demo
- All data is static TypeScript (no backend)
- Images are placeholders with descriptive captions

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn‑style UI primitives built on Radix (in `src/components/ui/`)
- Framer Motion (subtle animation helpers)
- Lucide React icons

## Run locally

```bash
cd build-a-box
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` — Homepage
- `/boxes` — Box sizes + bundles
- `/kits` — Kits with filter chips
- `/kits/[slug]` — Detailed kit page (implemented: `lounge-chair`)
- `/story` — Long-form editorial story

## Where to edit content

- `src/lib/data/boxes.ts` — sizes and bundles
- `src/lib/data/kits.ts` — kit catalog

## Cart behavior

- `src/lib/cart/cart-context.tsx` — localStorage-backed cart state
- `src/components/cart/cart-drawer.tsx` — drawer + demo checkout modal
