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
  body: "Twonit brings customers and artisans into one shared workspace to record requirements, confirm specifications, manage changes and track custom garment orders from start to finish.",
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
    "Custom orders often begin with conversations, handwritten notes, reference photos and messages scattered across different places. When a detail is missing, misunderstood or changed without confirmation, the result is wasted materials, costly rework, late delivery and disappointed customers.",
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
  resultCaption: "Requirements · Approvals · Changes · Progress",
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
      body: "The customer approves before work begins.",
    },
    {
      number: "03",
      icon: "sew",
      title: "Track",
      body: "Both of you follow each stage as it's made.",
    },
    {
      number: "04",
      icon: "keep",
      title: "Reuse",
      body: "Measurements and history, ready for next time.",
    },
  ],
  // Shown under the staircase: what step 3 replaces.
  track: {
    eyebrow: "Step 3, up close",
    headline: "A stage update shouldn't cost either of you a phone call.",
    before: {
      label: "The old way",
      text: "Stop work, call, and repeat the same update, maybe more than once.",
    },
    after: {
      label: "With Twonit",
      text: "Move the order to its next stage. Your customer sees the update, with no call needed.",
    },
  },
};

export const sharedTruth = {
  eyebrow: "Why Twonit",
  headline: "One order. Two sides. One shared truth.",
  body: "Every custom order has details both sides need to agree on. Twonit turns them into one shared record you can both review, so you can see what was requested, what was approved, what changed and what happens next.",
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
  headline: "Never ask “what was her measurement again?” twice.",
  body: "Twonit helps dressmakers and tailors keep hold of the details that are easiest to lose, especially a repeat customer's exact measurements.",
  benefits: [
    "Pull up a repeat customer's measurements and past orders in seconds.",
    "Keep each garment's specifications, photos and requirements together.",
    "Record what the customer approved, with every change tracked.",
    "Move an order to its next stage, and your customer sees the update.",
    "Track deposits and balances, and show customers how to pay you.",
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
  body: "Twonit gives customers real visibility into a custom garment order, from the first measurement to the finished piece.",
  benefits: [
    "Review your measurements, design and order details in plain language.",
    "Approve the specifications before work begins.",
    "Request changes, with every revision kept on record.",
    "Follow your order's progress without having to call.",
    "Reuse saved measurements for you and your family, and look back on past orders.",
  ],
  cta: "Start as a customer",
  image: {
    jpg: "/images/customers-app.jpg",
    webp: "/images/customers-app.webp",
    alt: "Two phone screens from the Twonit app: a customer's home with orders in production and the balance owing, and the first step of requesting an order, choosing a dressmaker.",
  },
};

export const research = {
  eyebrow: "What we learned",
  headline: "This started with listening, not guessing.",
  intro:
    "Before writing any code, we asked the customers and dressmakers who'd use Twonit how custom orders go wrong today.",
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
    themes: [
      {
        title: "Scattered records",
        text: "Measurements, reference images and specifications are hard to find again.",
      },
      {
        title: "Unclear agreements",
        text: "Requirements and changes aren't consistently written down or approved.",
      },
      {
        title: "Costly consequences",
        text: "Misunderstandings lead to remakes, wasted materials and lost customer trust.",
      },
    ],
  },
  disclaimer:
    "Early exploratory research with a small sample. The findings are directional, not representative of the wider market.",
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
    "Twonit was created around a simple belief: custom work should be built on shared understanding, not assumptions.",
    "We're starting with tailoring because even small misunderstandings there have costly consequences for artisans and customers. Our long-term vision is to make collaboration clearer and more reliable wherever people commission custom work.",
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
