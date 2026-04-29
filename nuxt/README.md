# NE Digital Brand Studio — Nuxt 3

Production Nuxt 3 + TypeScript port of the prototype. Inline styles only, no CSS framework.

## Run

```bash
cd nuxt
npm install
npm run dev          # http://localhost:3000
npm run build        # SSR build
npm run generate     # static export to .output/public
```

Node 18+ required.

## Routes

- `/` — home (hero + all sections, 3 recent works)
- `/work` — full archive
- `/work/[slug]` — case study (orbit, tide, foundry, larch, reel, aurora)
- `/services` — services + pricing + contact
- `/contact` — contact form
- `404` — styled error page (`error.vue`)

## Structure

- `assets/main.css` — global tokens, `.pxbtn`, `.section`, etc.
- `composables/` — `useReveal`, `usePixelCursor`, `useWorks`, `usePixelFont`
- `components/` — auto-imported (`SiteNav`, `HeroParticles`, `SectionServices`, …)
- `pages/` — file-based routing

## Customising

- **Accent color** — change `--accent` in `assets/main.css`
- **Case studies** — edit `composables/useWorks.ts`
- **Services / pricing / quotes** — edit the `<script setup>` arrays at the top of each `Section*.vue`

## Notes

- Hero is the cursor-particle variant (the strongest of the four). Other variants from the prototype can be ported on request.
- Contact form is client-side validation only. Add a backend in `server/api/contact.post.ts` when ready.
- No analytics or cookies wired up.
