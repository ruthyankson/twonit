import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu automatically if the viewport grows past the
  // breakpoint where it's rendered, so it can't get stuck open behind a
  // desktop layout after a resize or orientation change.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-plum-100/80 bg-cream-50/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl font-semibold text-plum-800"
        >
          {nav.brand}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-plum-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#pilot"
            className="rounded-full bg-plum-700 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-card transition hover:bg-plum-800"
          >
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-plum-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-plum-100 bg-cream-50 px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-base font-medium text-ink-700 hover:bg-plum-50 hover:text-plum-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pilot"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-plum-700 px-5 py-3 text-center text-sm font-semibold text-cream-50"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
