// Single source of truth for the website's copy.
//
// This file drives every section component below. When copy needs to
// change, change it here (and mirror the change in CONTENT.md, which is
// the human-readable copy of this same content for non-engineers to edit
// from) rather than hardcoding strings inside components.

export const nav = {
  brand: "Twonit",
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "For Artisans", href: "#for-artisans" },
    { label: "For Customers", href: "#for-customers" },
    { label: "Why Twonit", href: "#shared-truth" },
    { label: "About", href: "#about" },
  ],
  cta: "Get started",
  // Twonit itself (the app): its start page asks "dressmaker or
  // customer?" and signs people in or up by email.
  ctaHref: "https://app.twonit.com",
  signIn: { label: "Sign in", href: "https://app.twonit.com" },
};

// Straight into the right sign-in on the app for each side.
export const appLinks = {
  dressmaker: "https://app.twonit.com/login?role=dressmaker&next=/dashboard/home",
  customer: "https://app.twonit.com/login?role=customer&next=/customer/home",
};

export const hero = {
  eyebrow: "Open to dressmakers, tailors & customers everywhere",
  headline: "Get custom work right — together.",
  body: "Twonit gives customers and artisans one shared place to record measurements, approve specifications, and follow a garment order from first conversation to finished piece — so nothing gets lost between a notebook, a WhatsApp chat, and memory.",
  primaryCta: "Get started free",
  primaryHref: "https://app.twonit.com",
  secondaryCta: "See how it works",
  secondaryHref: "#how-it-works",
  // Under the buttons.
  note: "Free while in pilot · Works in any browser · No download needed",
  imageAlt:
    "A customer and a dressmaker looking at a phone together, surrounded by fabric, a sketchbook, and a measuring tape — a speech bubble with a dress and one with a sewing machine connect above them through a handshake, illustrating two sides reaching one shared understanding.",
};

export const problem = {
  eyebrow: "The problem",
  headline: "Garment orders shouldn't depend on memory.",
  body: [
    "Right now, the details of a custom garment order live in a lot of places at once: a notebook on the sewing table, a WhatsApp thread, a handful of voice notes, photos buried in a camera roll, and whatever both people remember from the first conversation.",
    "When a measurement, a fabric choice, or a promised delivery date only exists in one of those places — or only in someone's memory — it's easy for it to get lost, misremembered, or quietly changed along the way. That's how a customer ends up with something they didn't ask for, and how an artisan ends up redoing work they already did once.",
  ],
  convergingSources: [
    { label: "Notebooks", icon: "notebook" },
    { label: "WhatsApp & voice notes", icon: "chat" },
    { label: "Photo galleries", icon: "photo" },
    { label: "Conversations", icon: "speech" },
    { label: "Memory", icon: "memory" },
  ],
  sourcesLabel: "Where order details live today",
  resultEyebrow: "With Twonit",
  resultLabel: "One shared record",
  resultCaption: "Measurements, styles, approvals and payments, seen by both of you.",
};

export const howItWorks = {
  eyebrow: "How Twonit works",
  headline: "Four steps, one shared garment order.",
  // Drawn as a staircase; keep each line short enough to take in at a
  // glance (one line on a phone, two at most on a wide screen).
  steps: [
    {
      number: "01",
      icon: "measure",
      title: "Capture",
      body: "Sizes, style and photos, recorded once.",
    },
    {
      number: "02",
      icon: "approve",
      title: "Confirm",
      body: "The customer approves before anything is cut.",
    },
    {
      number: "03",
      icon: "sew",
      title: "Create",
      body: "Both of you follow each stage as it's made.",
    },
    {
      number: "04",
      icon: "keep",
      title: "Keep",
      body: "Saved and ready for the next order.",
    },
  ],
};

export const sharedTruth = {
  eyebrow: "Why Twonit",
  headline: "One order. Two sides. One shared truth.",
  body: "Twonit isn't just another order-management tool. Its core value is simple: it creates one agreed record between two people, instead of two separate versions of the same order living in two separate heads.",
  mockup: {
    orderName: "Kaba & slit — Ama's order",
    fields: [
      { label: "Measurements", value: "Recorded · 8 points" },
      { label: "Specification", value: "Approved by customer" },
      { label: "Reference image", value: "1 attached" },
      { label: "Revision history", value: "2 revisions tracked" },
      { label: "Milestone", value: "Fitting in progress" },
    ],
    approval: "Approved",
  },
};

export const instantUpdates = {
  eyebrow: "No more calling to check in",
  headline: "A stage update shouldn't cost either of you a phone call.",
  body: "Dressmakers are busy — stopping mid-fitting to explain “still cutting, ready Thursday” out loud, to the same customer, more than once, adds up. And customers don't love feeling like they're bothering someone just by checking in. Twonit replaces the call with a tap.",
  before: {
    label: "The old way",
    text: "Stop what you're doing, call, and repeat the same update out loud — maybe more than once.",
  },
  after: {
    label: "With Twonit",
    text: "Move the order to its next stage. Your customer sees it — and gets notified — instantly.",
  },
};

export const forArtisans = {
  eyebrow: "For Artisans",
  headline: "Never ask “what was her measurement again?” twice.",
  body: "Twonit helps dressmakers and tailors keep hold of the details that are easiest to lose — and hardest to reconstruct after the fact, especially a repeat customer's exact measurements.",
  benefits: [
    "Pull up a repeat customer's saved measurements instantly — no notebook, no re-asking.",
    "Start each order from the right measurement list for the garment, for women, men and children.",
    "Take on new garments and alterations or repairs, each with its own steps.",
    "Document exactly what a customer approved, and when — with every change tracked.",
    "Move an order to its next stage with one tap — your customer's notified automatically, no call needed.",
    "Record several garments from one visit together, with one combined payment record.",
    "Track deposits and balances, and show customers how to pay you by mobile money, bank transfer or cash.",
    "Get found by new customers in the Twonit dressmaker directory.",
  ],
  cta: "Start as a dressmaker",
  image: {
    jpg: "/images/artisans-app.jpg",
    webp: "/images/artisans-app.webp",
    alt: "Two phone screens from the Twonit app: a dressmaker's list of orders with their status and payment, and the dressmakers directory where customers find them.",
  },
};

export const forCustomers = {
  eyebrow: "For Customers",
  headline: "Know exactly what you're getting, before it's made.",
  body: "Twonit gives customers real visibility into a custom garment order — from the first measurement to the finished piece.",
  benefits: [
    "See exactly what's been recorded about your order, in plain language.",
    "Approve your measurements and the design before work begins on your piece.",
    "Request changes clearly, instead of over a string of messages.",
    "Know the moment your order moves to its next stage — no need to call and ask.",
    "Save measurements for yourself and your family, and reuse them on every order.",
    "See what you've paid, what's left, and exactly how to pay your dressmaker.",
    "Find a dressmaker by what they make, and request an order directly.",
    "Keep a useful history of your custom orders over time.",
  ],
  cta: "Start as a customer",
  image: {
    jpg: "/images/customers-app.jpg",
    webp: "/images/customers-app.webp",
    alt: "Two phone screens from the Twonit app: a customer's home with orders in production and the balance owing, and the first step of requesting an order, choosing a dressmaker.",
  },
};

export const research = {
  eyebrow: "Why we're building it",
  headline: "This started with listening, not guessing.",
  intro:
    "Before writing any code, we ran an early, exploratory round of research with the customers and dressmakers who'd actually use this. The sample is small and the findings are directional, not a market study — but they're what convinced us this problem is real.",
  stats: [
    {
      value: "100%",
      label: "of customers surveyed said their dressmaker currently records order details on paper or in a notebook.",
    },
    {
      value: "100%",
      label: "rated a shared digital record as “very useful” or “extremely useful.”",
    },
    {
      value: "87.5%",
      label: "wanted to review and approve their measurements before sewing begins.",
    },
    {
      value: "87.5%",
      label: "wanted to review and approve the design or style description before sewing begins.",
    },
  ],
  dressmakerFindings: {
    heading: "Dressmakers described the same problem from the other side:",
    items: [
      "Measurements that are difficult to find when they're needed again",
      "Incomplete or unclear style details",
      "Forgotten requirements",
      "Reference images that are hard to locate later",
      "Specifications that change without a clear record",
      "Disagreement over what was originally requested",
      "Remakes caused by a misunderstanding, not a mistake in the sewing",
      "Wasted materials and lost customer trust",
    ],
  },
  disclaimer:
    "Early exploratory customer research. This was a small, early-stage sample intended to test our assumptions — not a statistically representative study of the wider market.",
};

export const beyondTailoring = {
  eyebrow: "Beyond tailoring",
  headline: "Custom garments are where we're starting — not where we stop.",
  body: "The underlying problem — two people needing to agree on exactly what's being made — shows up anywhere custom work happens. Once Twonit is solid for dressmakers, tailors, and their customers, the same idea should hold up elsewhere.",
  futureExamples: [
    { label: "Tailoring", status: "current" },
    { label: "Furniture making", status: "future" },
    { label: "Event services", status: "future" },
    { label: "Custom design work", status: "future" },
    { label: "Other commissioned work", status: "future" },
  ],
  caveat:
    "These are future directions we're keeping in mind while we build, not industries Twonit currently supports.",
};

export const getStarted = {
  eyebrow: "Get started",
  headline: "Try Twonit today — it's free.",
  body: "Twonit opens in your phone's browser, wherever you are. Sign in with your email, and you're ready to record or request your first garment order. While we're in pilot it's free, and your feedback shapes what we build next.",
  dressmakerCta: "I'm a dressmaker or tailor",
  customerCta: "I'm a customer",
  // Under the buttons, before the Terms / Privacy links.
  legalNote: "Free to use. You must be 18 or older. By signing up you agree to our",
};

export const about = {
  eyebrow: "About",
  headline: "Why Twonit exists.",
  body: [
    "Twonit started with a simple observation: a lot of friction in custom work has nothing to do with skill. It comes from two people not being completely sure they agreed on the same thing.",
    "We're building Twonit to close that gap — starting with dressmakers, tailors, and the customers who work with them, because it's a place where the cost of a misunderstanding is especially high: a remade garment, wasted fabric, a missed deadline, a customer who doesn't come back.",
    "The goal isn't to replace the relationship between an artisan and their customer. It's to give that relationship a shared, reliable record to stand on.",
  ],
};

export const footer = {
  brand: "Twonit",
  tagline: "Two sides. One shared understanding.",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "For Artisans", href: "#for-artisans" },
        { label: "For Customers", href: "#for-customers" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  socialPlaceholderNote: "Social accounts coming soon",
};

// The Privacy Policy and Terms of Use (src/pages/Privacy.tsx, Terms.tsx).
// Change `updated` whenever either page's wording changes.
export const legal = {
  operator: "Ruth Adwowa Yankson",
  email: "hello@twonit.com",
  updated: "16 November 2026",
};

export const seo = {
  title: "Twonit | Get Custom Work Right Together",
  description:
    "Twonit gives customers and artisans one shared place to agree on custom garment orders: measurements, approvals, changes and progress.",
};
