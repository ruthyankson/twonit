import BrandLockup from "./BrandLockup";

// The real Twonit logo, rendered from vector source (see BrandLockup.tsx
// -- built straight from the founder's combined-artwork brand file, not
// a rasterized crop of a flattened brand-board image). Crisp at any
// size, and its wordmark strokes use `fill="currentColor"`, so a
// Tailwind text-color class controls the wordmark color per background.
//
// The full-color lockup (plum wordmark) only reads on a light ground,
// so it's used in the light-background Nav. Dark backgrounds (the
// Footer) set the wordmark in cream instead, since plum text would
// disappear against the plum-900 footer background -- the icon mark's
// own gradient stays legible on both.

export function LogoLockup({ className = "h-8" }: { className?: string }) {
  return (
    <BrandLockup
      className={`${className} w-auto text-plum-700`}
      idPrefix="site-nav"
    />
  );
}

export function LogoOnDark({ className = "h-8" }: { className?: string }) {
  return (
    <BrandLockup
      className={`${className} w-auto text-cream-50`}
      idPrefix="site-footer"
    />
  );
}
