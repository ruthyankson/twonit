# Twonit website copy

This is the human-readable copy of every piece of text on the site. The
actual source of truth the site renders from is
`src/content/copy.ts` — if you edit copy here, make the matching edit
there (or ask an engineer/Claude to sync it), or the two will drift.

**Wording note — "garment order", not just "order":** "order" alone can
read as an online shop order. Say "garment order" (or "custom garment
order") where someone meets the idea for the first time: headlines, the
first mention in a section, and link previews. After that, plain
"order" is fine, so the copy doesn't feel repetitive.

---

## Navigation

**Brand:** Twonit
**Links:** How it works · For Artisans · For Customers · Why Twonit · About
**Primary CTA:** Get started (goes to app.twonit.com)
**Sign-in link:** Sign in (goes to app.twonit.com)

---

## Hero

**Eyebrow:** Open to dressmakers, tailors & customers everywhere

**Headline:** Get custom work right — together.

**Body:** Twonit gives customers and artisans one shared place to record
measurements, approve specifications, and follow a garment order from
first conversation to finished piece — so nothing gets lost between a
notebook, a WhatsApp chat, and memory.

**Primary CTA:** Get started free (goes to app.twonit.com)
**Secondary CTA:** See how it works
**Under the buttons:** Free while in pilot · Works in any browser · No
download needed

**Image:** A customer and a dressmaker looking at a phone together,
surrounded by fabric, a sketchbook, and a measuring tape — a speech
bubble with a dress and one with a sewing machine connect above them
through a handshake. (Real asset — see TODO.md for provenance.)

---

## The problem

**Eyebrow:** The problem

**Headline:** Garment orders shouldn't depend on memory.

**Body:**
> Right now, the details of a custom garment order live in a lot of places at
> once: a notebook on the sewing table, a WhatsApp thread, a handful of
> voice notes, photos buried in a camera roll, and whatever both people
> remember from the first conversation.
>
> When a measurement, a fabric choice, or a promised delivery date only
> exists in one of those places — or only in someone's memory — it's
> easy for it to get lost, misremembered, or quietly changed along the
> way. That's how a customer ends up with something they didn't ask
> for, and how an artisan ends up redoing work they already did once.

**Diagram:** "Where order details live today": Notebooks · WhatsApp &
voice notes · Photo galleries · Conversations · Memory → "With Twonit":
**One shared record** — Measurements, styles, approvals and payments,
seen by both of you.

---

## How Twonit works

**Eyebrow:** How Twonit works
**Headline:** Four steps, one shared garment order.

Shown as a staircase, one step per stage, each a little higher:

1. **01 — Capture.** Sizes, style and photos, recorded once.
2. **02 — Confirm.** The customer approves before anything is cut.
3. **03 — Create.** Both of you follow each stage as it's made.
4. **04 — Keep.** Saved and ready for the next order.

---

## Shared source of truth

**Eyebrow:** Why Twonit
**Headline:** One order. Two sides. One shared truth.

**Body:** Twonit isn't just another order-management tool. Its core
value is simple: it creates one agreed record between two people,
instead of two separate versions of the same order living in two
separate heads.

**Conceptual interface mockup shows:**
- Order name: "Kaba & slit — Ama's order"
- Measurements — Recorded · 8 points
- Specification — Approved by customer
- Reference image — 1 attached
- Revision history — 2 revisions tracked
- Milestone — Fitting in progress
- Approval status badge: Approved
- Caption: "Visible to both the artisan and the customer"

---

## No more calling to check in

**Eyebrow:** No more calling to check in
**Headline:** A stage update shouldn't cost either of you a phone call.

**Body:** Dressmakers are busy — stopping mid-fitting to explain
"still cutting, ready Thursday" out loud, to the same customer, more
than once, adds up. And customers don't love feeling like they're
bothering someone just by checking in. Twonit replaces the call with a
tap.

**Before / after shown side by side:**
- **The old way:** Stop what you're doing, call, and repeat the same
  update out loud — maybe more than once.
- **With Twonit:** Move the order to its next stage. Your customer
  sees it — and gets notified — instantly.

---

## For Artisans

**Eyebrow:** For Artisans
**Headline:** Never ask "what was her measurement again?" twice.

**Body:** Twonit helps dressmakers and tailors keep hold of the details
that are easiest to lose — and hardest to reconstruct after the fact,
especially a repeat customer's exact measurements.

**Benefits:**
- Pull up a repeat customer's saved measurements instantly — no notebook, no re-asking.
- Start each order from the right measurement list for the garment, for women, men and children.
- Take on new garments and alterations or repairs, each with its own steps.
- Document exactly what a customer approved, and when — with every change tracked.
- Move an order to its next stage with one tap — your customer's notified automatically, no call needed.
- Record several garments from one visit together, with one combined payment record.
- Track deposits and balances, and show customers how to pay you by mobile money, bank transfer or cash.
- Get found by new customers in the Twonit dressmaker directory.

**CTA:** Start as a dressmaker (goes to the app's dressmaker sign-in)

**Image:** Two phone screens: a dressmaker's orders list and the
dressmakers directory (names and handles blurred).

---

## For Customers

**Eyebrow:** For Customers
**Headline:** Know exactly what you're getting, before it's made.

**Body:** Twonit gives customers real visibility into a custom garment order —
from the first measurement to the finished piece.

**Benefits:**
- See exactly what's been recorded about your order, in plain language.
- Approve your measurements and the design before work begins on your piece.
- Request changes clearly, instead of over a string of messages.
- Know the moment your order moves to its next stage — no need to call and ask.
- Save measurements for yourself and your family, and reuse them on every order.
- See what you've paid, what's left, and exactly how to pay your dressmaker.
- Find a dressmaker by what they make, and request an order directly.
- Keep a useful history of your custom orders over time.

**CTA:** Start as a customer (goes to the app's customer sign-in)

**Image:** Two phone screens: a customer's home and the first step of
requesting an order.

---

## Why we're building it (early research)

**Eyebrow:** Why we're building it
**Headline:** This started with listening, not guessing.

**Intro:** Before writing any code, we ran an early, exploratory round
of research with the customers and dressmakers who'd actually use this.
The sample is small and the findings are directional, not a market
study — but they're what convinced us this problem is real.

**Stats:**
- **100%** of customers surveyed said their dressmaker currently
  records order details on paper or in a notebook.
- **100%** rated a shared digital record as "very useful" or "extremely
  useful."
- **87.5%** wanted to review and approve their measurements before
  sewing begins.
- **87.5%** wanted to review and approve the design or style
  description before sewing begins.

**Dressmakers described the same problem from the other side:**
- Measurements that are difficult to find when they're needed again
- Incomplete or unclear style details
- Forgotten requirements
- Reference images that are hard to locate later
- Specifications that change without a clear record
- Disagreement over what was originally requested
- Remakes caused by a misunderstanding, not a mistake in the sewing
- Wasted materials and lost customer trust

**Disclaimer (always shown alongside the stats):** Early exploratory
customer research. This was a small, early-stage sample intended to
test our assumptions — not a statistically representative study of the
wider market.

---

## Beyond tailoring

**Eyebrow:** Beyond tailoring
**Headline:** Custom garments are where we're starting — not where we stop.

**Body:** The underlying problem — two people needing to agree on
exactly what's being made — shows up anywhere custom work happens. Once
Twonit is solid for dressmakers, tailors, and their customers, the same
idea should hold up elsewhere.

**Shown:** Tailoring (Today) · Furniture making · Event services ·
Custom design work · Other commissioned work

**Caveat:** These are future directions we're keeping in mind while we
build, not industries Twonit currently supports.

---

## Get started

**Eyebrow:** Get started
**Headline:** Try Twonit today — it's free.

**Body:** Twonit opens in your phone's browser, wherever you are. Sign
in with your email, and you're ready to record or request your first
garment order. While we're in pilot it's free, and your feedback shapes what we
build next.

**Buttons:** I'm a dressmaker or tailor (goes to the app's dressmaker
sign-in) · I'm a customer (goes to the app's customer sign-in)

**Under the buttons:** Free to use. You must be 18 or older. By signing
up you agree to our Terms of Use and Privacy Policy.

---

## About

**Eyebrow:** About
**Headline:** Why Twonit exists.

**Body:**
> Twonit started with a simple observation: a lot of friction in custom
> work has nothing to do with skill. It comes from two people not being
> completely sure they agreed on the same thing.
>
> We're building Twonit to close that gap — starting with dressmakers,
> tailors, and the customers who work with them, because it's a place
> where the cost of a misunderstanding is especially high: a remade
> garment, wasted fabric, a missed deadline, a customer who doesn't
> come back.
>
> The goal isn't to replace the relationship between an artisan and
> their customer. It's to give that relationship a shared, reliable
> record to stand on.

---

## Footer

**Tagline:** Two sides. One shared understanding.

**Columns:**
- Product — How it works · For Artisans · For Customers
- Company — About · Contact
- Legal — Privacy · Terms

**Social:** placeholder icons only, labeled "Social accounts coming
soon" — not linked anywhere (see TODO.md).

---

## SEO / sharing metadata

**Title:** Twonit | Get Custom Work Right Together
**Description:** Twonit gives customers and artisans one shared place
to agree on custom garment orders: measurements, approvals, changes
and progress.

---

## Privacy Policy and Terms of Use

The full wording lives in `src/pages/Privacy.tsx` and
`src/pages/Terms.tsx`; who runs Twonit, the contact email and the
"Last updated" date come from `legal` in `src/content/copy.ts`.

- **Run by:** Ruth Adwowa Yankson, the founder, in Ghana
- **Contact:** hello@twonit.com
- **Minimum age:** 18 (parents can save a child's measurements on their own account)
- **Law:** Ghana's Data Protection Act, 2012 (Act 843); Ghanaian law and courts for the terms
