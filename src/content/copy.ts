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
  cta: "Join the pilot",
  // Twonit itself (the app) -- for people already using it.
  signIn: { label: "Sign in", href: "https://app.twonit.com" },
};

export const hero = {
  eyebrow: "Now piloting with dressmakers & tailors in Ghana",
  headline: "Get custom work right — together.",
  body: "Twonit gives customers and artisans one shared place to record measurements, approve specifications, and follow an order from first conversation to finished piece — so nothing gets lost between a notebook, a WhatsApp chat, and memory.",
  primaryCta: "Join the pilot",
  secondaryCta: "See how it works",
  secondaryHref: "#how-it-works",
  signInNote: "Already using Twonit?",
  signInLabel: "Sign in to the app",
  imageAlt:
    "A customer and a dressmaker looking at a phone together, surrounded by fabric, a sketchbook, and a measuring tape — a speech bubble with a dress and one with a sewing machine connect above them through a handshake, illustrating two sides reaching one shared understanding.",
};

export const problem = {
  eyebrow: "The problem",
  headline: "Custom orders shouldn't depend on memory.",
  body: [
    "Right now, the details of a custom order live in a lot of places at once: a notebook on the sewing table, a WhatsApp thread, a handful of voice notes, photos buried in a camera roll, and whatever both people remember from the first conversation.",
    "When a measurement, a fabric choice, or a promised delivery date only exists in one of those places — or only in someone's memory — it's easy for it to get lost, misremembered, or quietly changed along the way. That's how a customer ends up with something they didn't ask for, and how an artisan ends up redoing work they already did once.",
  ],
  convergingSources: [
    { label: "Notebooks", icon: "notebook" },
    { label: "WhatsApp & voice notes", icon: "chat" },
    { label: "Photo galleries", icon: "photo" },
    { label: "Conversations", icon: "speech" },
    { label: "Memory", icon: "memory" },
  ],
  resultLabel: "One shared record",
};

export const howItWorks = {
  eyebrow: "How Twonit works",
  headline: "Four steps, one shared order.",
  steps: [
    {
      number: "01",
      title: "Capture",
      body: "Record measurements, specifications, reference images and the other details that matter for this order.",
    },
    {
      number: "02",
      title: "Confirm",
      body: "The customer reviews exactly what's been recorded, and approves it — or requests changes before anything is cut or sewn.",
    },
    {
      number: "03",
      title: "Create",
      body: "The artisan works from the agreed specification, while both sides follow the important milestones as the piece comes together.",
    },
    {
      number: "04",
      title: "Keep",
      body: "The order, its measurements, and its full revision history stay available — for this piece, and the next one.",
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
    "Track deposits and balances, and show customers how to pay you by MoMo, bank transfer or cash.",
    "Get found by new customers in the Twonit dressmaker directory.",
  ],
  cta: "Join as an artisan",
  image: {
    jpg: "/images/artisans-app.jpg",
    webp: "/images/artisans-app.webp",
    alt: "Two phone screens from the Twonit app: a dressmaker's list of orders with their status and payment, and the dressmakers directory where customers find them.",
  },
};

export const forCustomers = {
  eyebrow: "For Customers",
  headline: "Know exactly what you're getting, before it's made.",
  body: "Twonit gives customers real visibility into a custom order — from the first measurement to the finished piece.",
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
  cta: "Join as a customer",
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

export const pilot = {
  eyebrow: "Join the pilot",
  headline: "Help shape Twonit from the start.",
  body: "We're looking for dressmakers, tailors, customers, and potential partners to try an early version of Twonit and tell us what actually works.",
  cta: "Join the Twonit pilot",
  roleOptions: [
    "Dressmaker/Tailor",
    "Customer",
    "Potential Partner",
    "Other",
  ],
  fallbackNote:
    "We'll only use this to reach out about the pilot — no spam, and your details aren't shared.",
  privacyNote: "How we handle your details:",
  privacyLinkLabel: "Privacy Policy",
  fallbackEmail: "hello@twonit.com",
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
    "Twonit gives customers and artisans one shared place to agree on custom-order requirements, approvals, revisions and progress.",
};
