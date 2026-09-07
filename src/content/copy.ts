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
};

export const hero = {
  eyebrow: "Now piloting with dressmakers & tailors in Ghana",
  headline: "Get custom work right — together.",
  body: "Twonit gives customers and artisans one shared place to record measurements, approve specifications, and follow an order from first conversation to finished piece — so nothing gets lost between a notebook, a WhatsApp chat, and memory.",
  primaryCta: "Join the pilot",
  secondaryCta: "See how it works",
  secondaryHref: "#how-it-works",
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

export const forArtisans = {
  eyebrow: "For Artisans",
  headline: "Everything your customer asked for, in one place.",
  body: "Twonit is being built to help dressmakers and tailors keep hold of the details that are easiest to lose — and hardest to reconstruct after the fact.",
  benefits: [
    "Organize every customer's requirements in one record, not a stack of notebooks.",
    "Reduce forgotten details by capturing them once, up front.",
    "Retrieve a previous customer's measurements instead of asking again.",
    "Document exactly what a customer approved, and when.",
    "Keep reference images attached to the correct order — no more lost screenshots.",
    "Track requested changes as they happen, instead of relying on memory.",
    "Reduce avoidable remakes caused by a misunderstood spec.",
    "Build customer trust with a clear, shared record of what was agreed.",
  ],
  cta: "Join as an artisan",
};

export const forCustomers = {
  eyebrow: "For Customers",
  headline: "Know exactly what you're getting, before it's made.",
  body: "Twonit is being built to give customers real visibility into a custom order — from the first measurement to the finished piece.",
  benefits: [
    "See exactly what's been recorded about your order, in plain language.",
    "Confirm your measurements and specifications yourself.",
    "Approve the details before work begins on your piece.",
    "Request changes clearly, instead of over a string of messages.",
    "See agreed revisions instead of wondering what changed.",
    "Follow your order's progress as it's made.",
    "Keep a useful history of your custom orders over time.",
  ],
  cta: "Join as a customer",
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
    "This form isn't connected to a live signup service yet. See TODO.md for wiring it to Supabase or Formspree — until then, submissions here aren't saved anywhere.",
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

export const seo = {
  title: "Twonit | Get Custom Work Right Together",
  description:
    "Twonit gives customers and artisans one shared place to agree on custom-order requirements, approvals, revisions and progress.",
};
