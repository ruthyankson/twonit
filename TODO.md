# TODO — things this site intentionally leaves unfinished

Everything below needs a human decision, a real external service, legal
review, or an asset that doesn't exist yet. None of it blocks putting
the site live as a pilot-recruitment page — it's what to work through
before treating this as a finished, permanent launch site.

## Backend / data

- [ ] **Pilot form has no backend.** It validates and holds form state
      in memory only; nothing submitted through it is currently saved
      anywhere. See README.md's "Connecting the pilot form to a real
      backend later" section for the two suggested options (Supabase,
      matching the main product's backend, or Formspree for zero
      backend code). Update `pilot.fallbackNote` in `src/content/copy.ts`
      once this is wired up — that copy currently warns visitors it
      isn't.
- [ ] **`hello@twonit.com` isn't a real inbox yet.** Set it up (or
      replace it with whatever address you do want to use) before
      relying on it anywhere public. It currently appears in
      `src/content/copy.ts` (`pilot.fallbackEmail`) and
      `src/pages/Contact.tsx`.

## Legal

- [ ] **Privacy Policy and Terms of Use are placeholder drafts**
      (`src/pages/Privacy.tsx`, `src/pages/Terms.tsx`), clearly labeled
      as such on the pages themselves. Get real ones written and
      reviewed by a lawyer before this is a permanent public launch
      site, particularly once the pilot form actually starts collecting
      and storing personal data (name, email, phone, location).

## Assets

- [ ] **Hero image provenance.** `public/images/hero-collaboration.jpg`
      (and its `.webp` copy) is an AI-generated image the founder
      created for this project (not a stock photo, not hotlinked). It's
      usable as-is for a pilot-stage site, but flag it if/when Twonit
      commissions real photography of actual dressmakers and customers
      — that should replace it, since real photography of real users
      will always read as more credible than an illustrated stand-in.
- [ ] **`<ImagePlaceholder />` slots** in `ForArtisans.tsx` and
      `ForCustomers.tsx` are deliberately unfinished — dashed-border
      placeholders, not real images. Replace with real photography or
      commissioned illustration once available; see BRAND.md for the
      visual direction those should follow.
- [ ] **Favicon / logo is a placeholder mark**, not a designed logo —
      two overlapping circles in the brand colors (`public/favicon.svg`,
      `public/apple-touch-icon.png`). Replace once real logo design
      exists, and update `BRAND.md`'s "Logo / wordmark treatment"
      section to match.
- [ ] **OG/social-share cover image** (`public/images/og-cover.jpg`) was
      composited from the hero photo plus the wordmark — functional for
      link previews, but not a dedicated social-card design. Consider
      commissioning a proper one alongside the logo.

## Infrastructure

- [ ] **DNS for twonit.com isn't configured yet** (as far as this
      codebase can know) — see README.md's "Connecting the twonit.com
      custom domain" section for the exact A/CNAME records needed at
      your registrar, and enabling "Enforce HTTPS" in GitHub Pages
      settings once DNS propagates.
- [ ] **No analytics configured.** If you want to know how many people
      actually visit and where the pilot signups come from, add an
      analytics tool (e.g. Plausible, Fathom, or GA4) — none is wired
      up currently, intentionally, since adding one wasn't asked for
      and shouldn't happen silently.
- [ ] **No repo exists yet as of this being built.** This project was
      scaffolded locally; see README.md step 1 for creating the GitHub
      repo and pushing.

## Content / copy

- [ ] **Early research stats are from a small, exploratory sample.**
      They're already labeled "Early exploratory customer research"
      with a caveat wherever they appear (`Research.tsx`,
      `CONTENT.md`) — if/when a larger or more rigorous study is done,
      update `src/content/copy.ts`'s `research` object and keep that
      labeling honest rather than letting the caveat quietly drop off.
- [ ] **Social links are placeholders** (footer icons marked "Social
      accounts coming soon," not linked anywhere). Add real profile
      URLs to `Footer.tsx`'s `SocialPlaceholders` once accounts exist,
      and turn the `<span>` placeholders into real `<a>` links at that
      point.

## Explicitly out of scope for this pass (by design, not oversight)

- No fabricated testimonials, customer logos, user counts,
  partnerships, awards, funding, or press mentions were added anywhere
  — none exist yet, so none are shown. Don't add any of these without
  them being real.
- "Beyond tailoring" future industries (furniture, events, etc.) are
  shown explicitly as future direction, not as currently-supported use
  cases — keep that framing if that section is ever expanded.
