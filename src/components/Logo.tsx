// The real Twonit logo, rasterized from the brand board the founder
// supplied (see TODO.md for provenance / replacing with vector source
// if the original design file ever becomes available).
//
// The full-color lockup (dark plum wordmark) only reads on a light
// ground, so it's used in the light-background Nav. Dark backgrounds
// (the Footer) use the icon alone -- its gradient stays legible on
// plum -- paired with the wordmark set in cream text, rather than the
// full-color lockup image which would disappear against plum.

export function LogoLockup({ className = "h-8" }: { className?: string }) {
  return (
    <img
      // The tagline baked into the full lockup image turns into
      // illegible noise at nav-bar height, so this cropped variant
      // (icon + wordmark only) is used instead -- see BRAND.md.
      src="/images/logo/lockup-horizontal-no-tagline.png"
      alt="Twonit"
      className={`${className} w-auto`}
    />
  );
}

export function LogoOnDark({ className = "h-8" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src="/images/logo/icon-only.png"
        alt=""
        aria-hidden="true"
        className="h-full w-auto"
      />
      <span className="font-display text-xl font-semibold text-cream-50">
        twonit
      </span>
    </span>
  );
}
