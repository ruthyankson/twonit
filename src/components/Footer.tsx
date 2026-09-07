import { Link } from "react-router-dom";
import { footer } from "../content/copy";

// Decorative, inert placeholders -- intentionally not <a> tags, since
// there's nowhere real for them to go yet (see TODO.md). Grouped under
// one labelled, non-interactive region rather than left as dead links.
function SocialPlaceholders() {
  const marks = ["X", "IG", "in"];
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-cream-50/50">
        {footer.socialPlaceholderNote}
      </p>
      <div className="mt-3 flex gap-2" aria-hidden="true">
        {marks.map((m) => (
          <span
            key={m}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 text-xs font-semibold text-cream-50/40"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-cream-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">{footer.brand}</p>
          <p className="mt-2 max-w-[16rem] text-sm text-cream-50/70">
            {footer.tagline}
          </p>
          <div className="mt-6">
            <SocialPlaceholders />
          </div>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream-50/50">
              {col.heading}
            </p>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-cream-50/80 hover:text-cream-50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-cream-50/80 hover:text-cream-50"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-cream-50/10 py-6">
        <p className="container-page text-xs text-cream-50/50">
          © {new Date().getFullYear()} Twonit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
