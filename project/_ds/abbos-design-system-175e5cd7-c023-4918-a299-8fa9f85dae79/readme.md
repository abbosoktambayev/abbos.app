# Abbos Design System (ADS)

> **Hermès meets Apple.** The warmth, restraint and craft of a boutique maison,
> expressed with the clarity, native feel and discipline of Apple's platforms.
> *Calm, quiet, intentional — built to disappear so the content stays central.*

This project is the web design system for the **Abbos** ecosystem — a family of
calm Islamic-practice apps built in Tashkent:

- **Taqwah** — prayer times & daily habit tracking
- **Hafiz** — Qur'an memorization with spaced review
- **Mushaf** — a warm-paper Qur'an reader
- **abbos.dev** — the brand / marketing site

It is a faithful port of the original **Abbos Design System (ADS) v1**, whose
canonical sources were provided as a small brand kit:

- `DesignSystem.swift` — SwiftUI tokens (the native source of truth)
- `tokens.css` — the same tokens for web
- `README.md` — the full rationale (the *why*, the *where*, the *never*)

There is **no product codebase, Figma file, or slide deck** — only the token +
guidelines kit above. The UI kits in this project are therefore faithful
*interpretations* of each app built strictly from the documented per-app theming
(§12) and component patterns (§10), not recreations of shipped screens. Treat
them as reference compositions; confirm real screens with the team before
depending on layout specifics.

---

## Content fundamentals — how Abbos writes

The voice is **calm, respectful, plain, and quietly warm** — a knowledgeable
companion, never a coach or a marketer.

- **Person:** speaks *to* the user with "you"; refers to itself rarely. Greets
  in the tradition ("As-salamu alaykum, Yusuf"). No "we" chatter.
- **Tone:** unhurried and reassuring. Encourages rhythm over streaks-pressure —
  *"Keep the daily rhythm,"* *"one quiet rhythm,"* *"builds without pressure."*
- **Casing:** Sentence case everywhere in UI. Product names and Surah names keep
  their proper capitalization (Al-Baqarah, Ya-Sin, Ayat al-Kursi).
- **Numbers & metadata:** terse, mono-set — *"4 new ayāt · ~8 min,"* *"Juz 29,"*
  *"Streak 12."* The tilde (~) softens estimates.
- **Religious terms** are used accurately and unglossed for the audience: ayāt,
  juz, adhkar, sadaqah, witr, Fajr/Dhuhr/Asr/Maghrib/Isha, Hafiz, Mushaf, taqwah.
  Diacritics are honoured where natural (ayāt).
- **Bilingual reality:** copy may be EN, RU, or Uzbek, and Qur'an text is Arabic.
  Mono metadata that can contain **Cyrillic** must use IBM Plex Mono, not DM Mono.
- **No emoji, no exclamation-mark hype, no growth-hacky nudges.** No fear-based
  or shaming language around missed prayers/habits — states are neutral ("Not
  yet," "Due today"), and every empty state offers a calm way forward.
- **Vibe test:** *Would a Hermès boutique put it on the wall, and would Apple
  ship it in Settings?* If neither, cut it.

Example strings: *"Continue where you left off in Surah 2."* · *"Strengthen what
fades before it slips."* · *"Nothing due today — your next review unlocks
tomorrow."* · *"Three calm companions."*

---

## Visual foundations

**Overall vibe.** Dark-first, warm, editorial, and spacious. Obsidian rooms lit
by a single warm-gold focus, with muted emerald doing the everyday work. It
feels like a quiet boutique at night — never a dashboard.

**Color.**
- Never pure black, never pure white. Obsidian `#0A0A0B` and parchment
  `#F3EBDD`; light mode is warm **Paper** `#F5F1E8`, never an inverted screen.
- **Gold leads, emerald works.** Exactly one gold hero per screen (primary CTA,
  active hero number, next-prayer time). Emerald `#3E7A63` carries progress,
  status, success and secondary actions — always muted, never neon/spring green.
- **Text is parchment/ink at four opacities** (100 / 68 / 40 / 20%), never a new
  hue. Hierarchy comes from opacity, not color.
- Status is muted: warning is a warm ochre `#D6AE5C` (never alarm), danger a
  desaturated terracotta `#CE6E62`.

**Type.** Four families, one job each: **Cormorant Garamond** (editorial serif —
hero, titles, product & Surah names, hero numbers; Light/Regular/Medium/SemiBold,
never a true bold); the **system font** (SF Pro / `-apple-system`) for *all* UI
text; **IBM Plex Mono** (mono metadata that may include Cyrillic) and **DM Mono**
(Latin/numeric metadata) for short, tracked, usually uppercase eyebrows and tags;
**Amiri Quran** for Qur'anic Arabic only, large, RTL. Serif is never used for UI
chrome or long body; mono is never used for paragraphs.

**Spacing & layout.** A 4-based scale (4 · 8 · 16 · 24 · 40 · 64). Whitespace is
confidence — when unsure, add air, not elements. Default screen margin 16–18px,
card padding 14–22px. One hero per screen; everything else quieter.

**Corners.** Always continuous / squircle, never sharp. A radius ladder where
bigger surfaces get bigger radii: 28 card · 22 alt · 18 list · 16 control · 14
button · 12 chip · 9 tiny · ∞ pill. Don't nest a 12px control edge-to-edge inside
a 28px card — pad it.

**Elevation.** **Borders first** — 0.5–0.7px hairlines (parchment/ink at ~10%)
define edges, not shadows. Exactly one sanctioned soft shadow (`0 8px 32px
rgba(0,0,0,.18)`), used only where something genuinely floats (a hero card, the
mini-player). Never stack shadows.

**Backgrounds & materials.** No loud gradients, no illustration wallpaper, no
photographic art in contemplative contexts. Backgrounds are flat obsidian/paper,
occasionally with a *faint* radial darkening at the top. Floating chrome over
content (mini-player, the Mushaf page-counter pill, banners) uses **translucent
material + backdrop blur**, not opaque panels. Reading surfaces (Mushaf pages,
long-form) are sacred paper/parchment with no card chrome — reserved, never
slapped on every card.

**Cards.** Surface fill (`#121214` dark / `#FBF8F1` light), a hairline border, a
large continuous radius, generous padding. No shadow by default.

**Motion.** Slow, soft, calm, functional. `easeInOut`, 0.35s standard / 0.5s for
large surfaces; web easing `cubic-bezier(0.4, 0, 0.2, 1)`. **No bounce, spring,
elastic, or confetti.** Every animation honours `prefers-reduced-motion` and
falls back to an instant state change.

**Interaction states.** Hover/press shift the *fill*, not the geometry — gold and
emerald controls move between their solid and dim tints; ghost controls fill on
hover. No scale-bounce on press, no glows. Focus/active use color, not motion.

**Imagery.** Warm-toned and restrained. No faces or photographic artwork in
religious contexts; decorative "reciter tiles" (initials in serif over a
deterministic muted gradient) stand in for avatars and are hidden from assistive
tech. Transparency & blur appear only for floating chrome over content.

---

## Iconography

- **Native apps use SF Symbols only** — weight matched to surrounding text
  (`.medium`/`.semibold`), no third-party icon sets, no emoji, no random
  decorative Arabic calligraphy.
- **On web, SF Symbols are unavailable** (Apple-only), so this system substitutes
  **[Lucide](https://lucide.dev)** — a clean, single-weight outline set that is
  the closest match to SF Symbols' stroke style. Loaded from CDN
  (`unpkg.com/lucide`) and rendered via the `Icon` component (a thin wrapper) or
  `data-lucide` attributes + `lucide.createIcons()`. Match `strokeWidth` (~1.75)
  to the text weight beside it. **⚠️ Substitution — flag to the team;** if you
  want exact parity, export the specific SF Symbols as SVG and drop them into
  `assets/icons/`.
- **No emoji** in product UI. Unicode geometric glyphs (◐ ◔ ◇ ›) are acceptable
  as quiet, decorative placeholders where an icon isn't warranted.
- Qur'anic Arabic is text (Amiri Quran), never an image.

## Assets & logo

**No logo file was supplied.** Per brand rules we do **not** invent or draw one.
The wordmark is set in plain type — Cormorant Garamond Light, "abbos" in
parchment with ".dev" in gold (`abbos.dev`) — see `guidelines/brand-wordmark.card.html`.
If a real mark exists, drop it into `assets/` and replace the type wordmark. The
`assets/` folder is otherwise empty because the source kit shipped no imagery.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import` manifest only).
- `readme.md` — this document.
- `SKILL.md` — Agent-Skills-compatible front-door for downloading & reusing.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` ·
  `motion.css` · `base.css`

**`components/core/`** — reusable React primitives (namespace resolved by the
compiler; use `const { X } = window.<Namespace>`):
- **Button** — the action control; one gold hero per screen, emerald/ghost/quiet/danger.
- **Card** — the default surface container (border over shadow; `reading` variant).
- **Chip** — capsule filter / segmented option; emerald when active.
- **Badge** — small muted status pill / tag.
- **Eyebrow** — tracked uppercase mono label (DM Mono, or IBM Plex for Cyrillic).
- **ProgressRing** — emerald progress ring with a serif hero number.
- **ListRow** — iOS-style grouped-list row (leading well, title/subtitle, trailing).
- **EmptyState** — calm empty/error state with a way forward.
- **Icon** — *(intentional addition)* Lucide wrapper standing in for SF Symbols on web.

**`guidelines/`** — foundation specimen cards (Design System tab): Colors
(accents, dark/light surfaces, text ladder, status), Type (serif, UI, mono,
Arabic), Spacing (scale, radius ladder), Brand (wordmark, elevation, motion).

**`ui_kits/`** — interpretive product recreations:
- `hafiz/` — memorization app (dark, emerald workhorse, gold hero) · `index.html` + `screens.jsx`
- `mushaf/` — Qur'an reader (warm paper reading surface) · `index.html`
- `taqwah/` — prayer & habit tracker · `index.html`
- `abbos-dev/` — the brand marketing site · `index.html`

**Intentional additions** (not in the source kit):
- **Icon** component — needed because SF Symbols don't exist on web; wraps Lucide.

---

*ADS (web) — maintained alongside the Abbos ecosystem. When in doubt: less,
warmer, quieter, more whitespace.*
