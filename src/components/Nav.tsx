import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../content/copy";
import { LogoLockup } from "./Logo";

// Which menu section is on screen: the one crossing a line a third of
// the way down the viewport (or the last one, once the page is scrolled
// to the bottom). Sections that aren't in the menu (the hero, Research,
// Get started) leave nothing highlighted. After a click, the clicked
// item stays highlighted while the page smooth-scrolls past the others.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const lock = useRef<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const key = ids.join(",");

  useEffect(() => {
    const list = key.split(",");
    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      let found: string | null = null;
      for (const id of list) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (atBottom ? r.top < window.innerHeight * 0.85 : r.top <= line && r.bottom > line) {
          found = id;
          if (!atBottom) break;
        }
      }
      setActive(found);
    };

    const onScroll = () => {
      if (lock.current) {
        // Wait for the click's smooth scroll to settle.
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
          lock.current = null;
          measure();
        }, 150);
        return;
      }
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer.current);
    };
  }, [key]);

  const select = (id: string) => {
    lock.current = id;
    setActive(id);
    // If the page doesn't need to scroll at all, don't stay locked.
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => (lock.current = null), 1000);
  };

  return [active, select] as const;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, select] = useActiveSection(
    nav.links.map((l) => l.href.replace("#", "")),
  );

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
        <Link to="/" aria-label={nav.brand}>
          <LogoLockup className="h-7 sm:h-8" />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.links.map((link) => {
            const id = link.href.replace("#", "");
            const on = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => select(id)}
                aria-current={on ? "location" : undefined}
                className={`relative py-1 text-sm transition ${
                  on
                    ? "font-semibold text-plum-800"
                    : "font-medium text-ink-700 hover:text-plum-700"
                }`}
              >
                {/* Reserve the bold width so the menu doesn't shift. */}
                <span className="invisible block h-0 font-semibold" aria-hidden="true">
                  {link.label}
                </span>
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 origin-center rounded-full bg-peach-500 transition-transform duration-200 ${
                    on ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={nav.signIn.href}
            className="text-sm font-semibold text-plum-700 transition hover:text-plum-800"
          >
            {nav.signIn.label}
          </a>
          <a
            href={nav.ctaHref}
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
            {nav.links.map((link) => {
              const id = link.href.replace("#", "");
              const on = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      select(id);
                      setOpen(false);
                    }}
                    aria-current={on ? "location" : undefined}
                    className={`block rounded-lg border-l-[3px] px-3 py-2.5 text-base ${
                      on
                        ? "border-peach-500 bg-plum-50 font-semibold text-plum-800"
                        : "border-transparent font-medium text-ink-700 hover:bg-plum-50 hover:text-plum-700"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={nav.signIn.href}
            className="mt-4 block rounded-full border border-plum-300 px-5 py-3 text-center text-sm font-semibold text-plum-800"
          >
            {nav.signIn.label}
          </a>
          <a
            href={nav.ctaHref}
            className="mt-3 block rounded-full bg-plum-700 px-5 py-3 text-center text-sm font-semibold text-cream-50"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
