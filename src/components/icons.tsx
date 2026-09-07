// Small, dependency-free line icons used across the site. Kept as inline
// SVG (not an icon-font/library) so there's no extra request and no
// unused-glyph bloat — just the handful of marks this page actually needs.
// All are decorative next to visible text, so they carry aria-hidden.

import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function NotebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M5 7h14M5 11h14M5 15h9" />
      <path d="M8 3v18" strokeOpacity={0.5} />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
      <path d="M8 8h8M8 11.5h5" />
    </svg>
  );
}

export function PhotoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="m5 17 4.5-5 3 3 3.5-4.5L21 16" />
    </svg>
  );
}

export function SpeechIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c-4.97 0-9 3.36-9 7.5 0 2.4 1.34 4.53 3.44 5.9L5 21l4.2-1.87c.9.24 1.85.37 2.8.37 4.97 0 9-3.36 9-7.5S16.97 3 12 3Z" />
    </svg>
  );
}

export function MemoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.2 1.9" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12.5 6 9l3 2.2M21.5 12.5 18 9l-3 2.2" />
      <path d="M6 9l3.6 3.4a1.8 1.8 0 0 0 2.5-.1l.4-.4a1.6 1.6 0 0 1 2.3 0l.4.4a1.8 1.8 0 0 0 2.5.1L18 9" />
      <path d="m9 11.2-2.4 2.4a1.6 1.6 0 0 0 0 2.3l.3.3a1.6 1.6 0 0 0 2.3 0M15 11.2l2.4 2.4a1.6 1.6 0 0 1 0 2.3l-.3.3a1.6 1.6 0 0 1-2.3 0" />
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.3 2.3 2.3 4.7-5.2" />
    </svg>
  );
}

export function RulerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-6 12 12)" />
      <path d="m7.3 9.4-.5 2M11 8.9l-.5 2M14.7 8.4l-.5 2" />
    </svg>
  );
}

export function ImageRefIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <circle cx="9" cy="10" r="1.4" />
      <path d="m6 16 3.5-4 2.5 2.5 3-3.5L20 15.5" />
    </svg>
  );
}

export function HistoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 1 0 2.6-5.9" />
      <path d="M4 5v4h4" />
      <path d="M12 8v4l2.6 1.6" />
    </svg>
  );
}

export function FlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 21V4" />
      <path d="M6 4h11l-2.3 3.5L17 11H6" />
    </svg>
  );
}

const ICONS = {
  notebook: NotebookIcon,
  chat: ChatIcon,
  photo: PhotoIcon,
  speech: SpeechIcon,
  memory: MemoryIcon,
} as const;

export function ProblemIcon({
  name,
  ...rest
}: { name: keyof typeof ICONS } & SVGProps<SVGSVGElement>) {
  const Cmp = ICONS[name];
  return <Cmp {...rest} />;
}
