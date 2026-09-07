# Twonit brand guide

This documents the visual and voice decisions baked into this site, so
anyone editing it later (human or AI) can stay consistent without having
to reverse-engineer the CSS. The tokens below live for real in
`src/index.css`'s `@theme` block — if the two ever disagree, the CSS is
what actually ships, so update this file to match it, not the other way
around.

## Color tokens

| Token | Hex | Use |
|---|---|---|
| `--color-cream-50` | `#fdfaf6` | Page background |
| `--color-cream-100` | `#faf3ea` | Slightly deeper cream, tinted panels |
| `--color-cream-200` | `#f4e9da` | Rare, heavier cream fill |
| `--color-plum-50` | `#f8ecf2` | Very light tint, hover backgrounds |
| `--color-plum-100` | `#f0d9e5` | Borders on white cards |
| `--color-plum-300` | `#c98caa` | Muted rose/mauve accent, secondary icons |
| `--color-plum-500` | `#8a3564` | Mid accent, rarely used directly |
| `--color-plum-600` | `#722851` | Eyebrow labels, link hover |
| `--color-plum-700` | `#5c2350` | **Primary brand color** — buttons, headline emphasis |
| `--color-plum-800` | `#481b3f` | Button hover state |
| `--color-plum-900` | `#33122c` | Darkest plum — dark section backgrounds, headings |
| `--color-rose-100` | `#f6e4ea` | Soft rose fill (e.g. "visible to both sides" tag) |
| `--color-rose-300` / `500` | `#d9a8b7` / `#b56d84` | Reserve for future rose-forward accents |
| `--color-peach-100` | `#fbe9d8` | Warm section-background wash behind the hero |
| `--color-peach-300` | `#eab887` | Reserve |
| `--color-peach-500` | `#d99a5c` | Warm accent on dark backgrounds (eyebrow labels on plum-900) |
| `--color-green-100` / `500` / `700` | `#e3efe5` / `#4f8f63` / `#366a48` | Approval / success states only |
| `--color-ink-900` | `#201a1d` | Body text (near-black, not pure black) |
| `--color-ink-700` | `#4a4247` | Secondary body text |
| `--color-ink-500` | `#787074` | Captions, disclaimers, muted text |

Deliberately **not** used anywhere: SaaS blue, bright saturated gradients,
neon accent colors. Green is reserved for approval/success states only —
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
  low-saturation fill (`green-100` text `green-700` for approval;
  `cream-50/20` on dark for the "Today" tag) — status color only where
  it's actually communicating status.

## Logo / wordmark treatment

There is no illustrated logo yet — the wordmark is simply "Twonit" set
in Fraunces Semibold, plum-800 on light backgrounds / cream-50 on dark.
The favicon (`public/favicon.svg`) is a placeholder mark: two
overlapping circles (plum-700 and peach-500) on a cream rounded square,
gesturing at "two sides" without trying to be a finished logo. Replace
both the favicon and this section once real logo design exists — see
TODO.md.

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
