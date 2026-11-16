# Twonit — marketing website

The public marketing/landing site for **Twonit** (twonit.com) — a
digital collaboration platform for custom work, launching first with
dressmakers/tailors and their customers in Ghana. This is a static
site, separate from the Twonit product application itself.

## Tech stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`
  — no `tailwind.config.js`; theme tokens live in `src/index.css`
  under `@theme`)
- [React Router](https://reactrouter.com/) (`BrowserRouter`) for the
  three secondary pages (`/privacy`, `/terms`, `/contact`); the home
  page itself is a single scrolling landing page, not a set of routes
- No backend, no server-side rendering — fully static output, deployed
  to GitHub Pages

## Project structure

```
src/
  content/copy.ts       # All page copy in one typed module (see CONTENT.md)
  components/           # One component per section, plus shared pieces
                         # (Nav, Footer, SectionHeading, ImagePlaceholder, icons)
  pages/                 # Home (assembles all sections) + Privacy/Terms/Contact
  App.tsx, main.tsx      # Router + app shell
public/
  images/                # Hero photo + generated favicon/OG assets
  CNAME                  # twonit.com — custom domain for GitHub Pages
  404.html               # GitHub Pages SPA-routing fallback (see below)
  robots.txt, sitemap.xml
.github/workflows/deploy.yml   # Builds and deploys to GitHub Pages on push to main
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Build

```bash
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview    # serves the dist/ build locally, for a final check
```

## Deploying to GitHub Pages

This repo is already set up to deploy automatically:

1. **Create the GitHub repository** (if you haven't yet) and push this
   folder's contents to its `main` branch.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub
   Actions** (not "Deploy from a branch").
3. Push to `main` — `.github/workflows/deploy.yml` builds the site and
   publishes `dist/` automatically. You can also trigger it manually
   from the Actions tab (`workflow_dispatch`).
4. First deploy can take a minute or two to go live.

### Connecting the twonit.com custom domain

`public/CNAME` already contains `twonit.com`, so GitHub Pages will
serve the site there once DNS is pointed at GitHub. You'll need to, at
your domain registrar:

- Add an **A record** for the root domain (`twonit.com`) pointing at
  GitHub Pages' IPs (currently `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` — double-check the current list
  at GitHub's own
  [Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site),
  since these can change), **or** if you want `www.twonit.com` to be
  the canonical host instead, use a **CNAME record** pointing `www` at
  `<your-github-username>.github.io`.
- In the repo's **Settings → Pages**, enter `twonit.com` as the custom
  domain and enable **Enforce HTTPS** once GitHub finishes issuing a
  certificate (can take up to 24 hours after DNS propagates).

### If you ever deploy WITHOUT the custom domain

If you ever need this at `https://<username>.github.io/<repo>/`
instead of a custom domain, two things need to change together:
`vite.config.ts`'s `base` from `'/'` to `'/<repo>/'`, and
`public/404.html`'s `pathSegmentsToKeep` from `0` to `1`. Leave both as
they are while `CNAME` is in place.

### Why there's a `404.html`

GitHub Pages has no real server, so a direct visit or a refresh on
`/privacy` (a client-side route) would 404 without help. `public/404.html`
redirects that request back to `/` with the original path encoded in
the query string, and a small script in `index.html` decodes it and
restores the real URL before React Router mounts. This is the standard
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
technique — don't remove either half without replacing the other.

## Where to replace placeholder content

- **Images**: everywhere you see `<ImagePlaceholder label="..." />` in
  a component (currently in `ForArtisans.tsx` and `ForCustomers.tsx`),
  swap it for a real `<img>` once real photography or illustration
  exists. The hero photo (`public/images/hero-collaboration.{jpg,webp}`)
  is already real — see `TODO.md` for its provenance and how to replace
  it with commissioned photography later.
- **Logo / favicon**: the real logo is in place (`public/images/logo/`,
  used via `src/components/Logo.tsx`; favicons generated from it live at
  `public/favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`).
  It's cut from a flattened brand-board image, not vector source — see
  TODO.md for what that limits and BRAND.md for exactly which file is
  used where.
- **Copy**: edit `src/content/copy.ts` (and mirror the change in
  `CONTENT.md`).
- **Legal pages**: `src/pages/Privacy.tsx` and `src/pages/Terms.tsx`
  are explicitly labeled drafts on the page itself. Replace with
  lawyer-reviewed copy before public launch.
- **Contact email**: `hello@twonit.com` lives in `src/content/copy.ts`
  (`legal.email`) and is used on the Contact page and the legal pages.
- **App links**: every "Get started" button goes straight to the app.
  The URLs are in `src/content/copy.ts` (`nav.ctaHref`,
  `hero.primaryHref`, and `appLinks` for the dressmaker / customer
  sign-ins).

## Getting started (no sign-up form)

The site has no form and no backend of its own. Every call to action
links straight to the Twonit app (app.twonit.com), which signs people
up by email, so anyone, anywhere, can start using it right away. The
closing "Get started" section (`src/components/GetStarted.tsx`) has one
button per side: dressmakers and tailors go to
`/login?role=dressmaker`, customers to `/login?role=customer`.

The site used to have a pilot sign-up form that saved to Supabase.
It was removed, along with `@supabase/supabase-js`, `src/lib/supabase.ts`
and the `VITE_SUPABASE_*` env vars. The sign-ups it collected are still
in the `pilot_signups` table and still listed on `twonit-admin`'s
"Pilot signups" page.

## Quality checks already run

- `npm run build` completes clean (TypeScript strict, no errors).
- No console errors across `/`, `/privacy`, `/terms`, `/contact` in a
  headless Chromium pass (the only console entries seen in the build
  sandbox were Google Fonts requests blocked by that sandbox's network
  policy — not present in a normal deployed environment).
- Verified responsive layout at mobile (390px) and desktop (1440px)
  widths, plus the mobile nav menu open/close state.
- Checked that every "Get started" button points at the app, with the
  right side (dressmaker or customer) for the section it's in.

See `TODO.md` for everything that still needs a human decision or an
external service before this is fully launch-ready.
