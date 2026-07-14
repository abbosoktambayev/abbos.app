# abbos.app — Hafiz

The marketing site for **Hafiz**, a calm Quran memorization app for iPhone & iPad (Sabaq / Sabqi / Manzil), built by [Abbos Oktambayev](https://github.com/abbosoktambayev). Dark-first with a warm-paper light theme, warm-gold, editorial — no ads, no noise.

**Live pages**

| Route | Purpose |
|---|---|
| `/` | Landing page — hero, features, product tour, philosophy, support, about |
| `/privacy/` | Privacy Policy |
| `/support/` | Support the project + contact |

## Stack

Plain HTML/CSS/JS, no build step. Static files only — deploy by pointing any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages) at the repo root.

```
index.html          Landing page
privacy/index.html  Privacy Policy
support/index.html  Support & contact

css/tokens.css       Design tokens (color, type, radius, motion) + self-hosted fonts
css/site.css         Layout & components, shared across all pages
js/site.js           Theme toggle (light/dark), nav scroll state, mobile menu, scroll-reveal animations

assets/              Product screenshots (light & dark variants), app icon
assets/fonts/        Self-hosted Cormorant Garamond + DM Mono (woff2, Latin + Latin-ext)
```

## Design

Built on the Abbos Design System — dark-first (obsidian) with a warm-paper light theme, one warm-gold accent per screen, muted emerald as the everyday workhorse, Cormorant Garamond for editorial headings, system sans for UI text, DM Mono for tracked labels. Hairline borders, no gradients/glow/glassmorphism, slow soft motion.

The site follows the visitor's system appearance and offers a manual toggle in the nav (persisted in `localStorage`, overridable with `?theme=light|dark`). App screenshots swap between light and dark variants together with the site theme.

The original Claude Design handoff (chat transcript + HTML prototypes this site was implemented from) is kept in [`project/`](project) and [`chats/`](chats) for provenance.

## License

All rights reserved.
