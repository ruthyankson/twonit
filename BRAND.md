# Twonit brand guide

This documents the visual and voice decisions baked into this site, so
anyone editing it later (human or AI) can stay consistent without having
to reverse-engineer the CSS. The tokens below live for real in
`src/index.css`'s `@theme` block — if the two ever disagree, the CSS is
what actually ships, so update this file to match it, not the other way
around.

## Color tokens

Five official brand swatches, chosen by the founder: **Plum** `#4A1F35`,
**Mauve** `#B57A86`, **Peach** `#E79A74`, **Cream** `#FAF6F1`, **Sage**
`#6B8F7A`. Every other shade below is a *computed* tint (toward cream)
or shade (toward near-black) of one of these five — there is no
independently-chosen "plum-400" or "peach-300," so if the brand swatches
ever change, regenerate the ramp from them rather than hand-editing
individual steps.

| Token | Hex | Use |
|---|---|---|
| `--color-cream-50` | `#faf6f1` | **Official Cream swatch.** Page background. |
| `--color-cream-100` | `#efe9e6` | Computed tint — card/section borders |
| `--color-cream-200` | `#e5dcda` | Computed tint — heavier cream fill |
| `--color-plum-50`…`-600` | `#efe9e6` … `#4f253b` | Computed tints of Plum (toward cream) — light washes, borders, muted icons, focus rings |
| `--color-plum-700` | `#4a1f35` | **Official Plum swatch — primary brand color.** Buttons, wordmark, headline emphasis |
| `--color-plum-800` / `-900` | `#401c2e` / `#371a28` | Computed shades of Plum (toward near-black) — dark section backgrounds |
| `--color-mauve-100` / `-300` | `#f0e3e1` / `#dec4c6` | Computed tints of Mauve — soft fills |
| `--color-mauve-500` | `#b57a86` | **Official Mauve swatch.** Muted rose/mauve accent |
| `--color-peach-100` / `-300` | `#f7e8de` / `#f0c8b2` | Computed tints of Peach — warm washes |
| `--color-peach-500` | `#e79a74` | **Official Peach swatch.** Warm accent on dark backgrounds (eyebrow labels on plum-900), the hero's icon-mark gradient |
| `--color-sage-100` | `#e5e7df` | Computed tint of Sage — soft approval-badge fill |
| `--color-sage-500` | `#6b8f7a` | **Official Sage swatch.** Reserved for approval/success states only |
| `--color-sage-700` | `#557060` | Computed shade of Sage — approval-badge text |
| `--color-ink-900` | `#201a1d` | Body text (near-black, not pure black — not part of the 5-swatch palette, a neutral chosen for contrast) |
| `--color-ink-700` | `#4a4247` | Secondary body text |
| `--color-ink-500` | `#787074` | Captions, disclaimers, muted text |

Deliberately **not** used anywhere: SaaS blue, bright saturated gradients,
neon accent colors. Sage is reserved for approval/success states only —
it never appears as a decorative accent, so it keeps its meaning.

## Typography

- **Display / headings** — [Fraunces](https://fonts.google.com/specimen/Fraunces)
  (serif, warm and a little editorial — avoids the generic-SaaS geometric
  sans look for headlines). Loaded at weights 500/600/700.
- **Body / UI** — [Inter](https://fonts.google.com/specimen/Inter) at
  400/500/600/700. Chosen for legibility at small sizes and because it's
  free, widely mirrored, and has full latin coverage.
- Both load from Google Fonts via `<link>` tags in `index.html` — no
  self-hosted font files yet. If self-hosting becomes a priority
  (privacy, performance, or offline-friendliness), see TODO.md.

## Spacing & layout

- Sections use the `.section-pad` utility (defined in `src/index.css`):
  `4.5rem` vertical padding on mobile, `6.5rem` from `md:` up. Keeps
  rhythm consistent without repeating the value in every component.
- Content width is capped with `.container-page` (max `72rem`, with
  responsive horizontal padding) — same container everywhere, so
  sections align to the same left/right edges as you scroll.
- Cards use `rounded-2xl` (1rem) corners and the shared `shadow-card`
  token (`0 1px 2px rgba(51,18,44,.04), 0 8px 24px -12px rgba(51,18,44,.18)`)
  — a soft, close shadow rather than a heavy drop shadow, since the spec
  called for "subtle."

## Component style

- **Buttons**: fully rounded (`rounded-full`), plum-700 fill for primary
  actions, plum-300 outline for secondary. No gradients.
- **Cards**: white or cream fill, 1px plum-100 border, `shadow-card`,
  generous internal padding (`p-6`–`p-8`).
- **Image placeholders** (`ImagePlaceholder.tsx`): dashed plum border,
  cream-plum tint fill, a small icon and a label describing what real
  asset belongs there. Never styled to look like a finished photo — the
  dashed border and "Image placeholder" caption are deliberate tells.
- **Badges/pills** (e.g. "Approved", "Today"): small, fully rounded,
  low-saturation fill (`sage-100` text `sage-700` for approval;
  `cream-50/20` on dark for the "Today" tag) — status color only where
  it's actually communicating status.

## Logo / wordmark treatment

The real logo exists: a cursive, interlocking monogram (reads as a
stylized "N" built from two intertwined strokes — literally "two"
forms becoming one mark) in a Plum-to-Peach gradient, paired with
"twonit" set in a bold, rounded lowercase sans wordmark. It was
designed as a brand board and supplied as a flattened image (not
vector source) — see TODO.md for what that means for future edits.

Assets, all under `public/images/logo/`:

| File | What it is | Where it's used |
|---|---|---|
| `icon-only.png` | The monogram alone, transparent background | Footer (paired with cream-colored "twonit" text, since the full-color wordmark disappears on a dark ground) |
| `lockup-horizontal-no-tagline.png` | Monogram + "twonit" wordmark, no tagline, transparent background | Nav (the tagline reads as illegible noise at nav-bar height, so this tagline-free crop is used there) |
| `lockup-horizontal.png` | Monogram + wordmark + "TWO SIDES. ONE SHARED UNDERSTANDING." tagline, transparent background | Available for larger placements (e.g. a future press/about page) where the tagline is legible |
| `lockup-stacked.png` | Monogram above wordmark above tagline, transparent background | Not currently placed on the site; available for a future vertical placement (e.g. a splash/loading state) |
| `app-icon-dark.png` / `app-icon-light.png` | Monogram on a filled rounded-square plum / cream background | Source for `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` (all in `public/`, generated from `app-icon-dark.png`) |

**Rule of thumb**: the full-color wordmark (plum text) only reads on a
light/cream background. On a dark (plum) background, always use the
monogram alone plus "twonit" set as plain text in cream/`--color-cream-50`
— never place the full-color lockup image on a dark ground, since the
plum text will disappear into it. See `src/components/Logo.tsx`
(`LogoLockup` for light backgrounds, `LogoOnDark` for dark ones) — reuse
those two components rather than embedding a raw `<img>` of the logo
elsewhere, so this rule can't accidentally be broken in a new spot.

## Tone of voice

- **Plain, concrete, a little warm.** Say "a notebook on the sewing
  table," not "traditional record-keeping methods."
- **Honest about maturity.** Use "Twonit is being built to..." rather
  than describing unshipped capabilities as if they exist today. Never
  imply the pilot form is connected to a backend it isn't.
- **Two people, always.** Copy consistently frames the product around
  *two* specific people (an artisan and a customer) reaching one shared
  understanding — not an abstract "workflow" or "platform."
- **No hype language.** Avoid "revolutionize," "seamless," "game-changing,"
  superlatives without evidence, or claims of scale/traction Twonit
  doesn't have yet.
- **Research is cited, not oversold.** Any stat drawn from the early
  research is explicitly labeled "early exploratory customer research"
  wherever it appears, with the small-sample caveat nearby — never
  presented as a market-wide finding.

## Basic usage guidance

- Don't recolor the plum-700 primary button to another brand color for
  a single section — visual consistency across the whole page matters
  more than any one section standing out.
- Don't add stock photography, fabricated logos, fake press quotes, or
  invented numbers anywhere on this site. If a section needs an image
  that doesn't exist yet, use `<ImagePlaceholder />`, not a stock photo.
- Keep green reserved for approval/success only.
