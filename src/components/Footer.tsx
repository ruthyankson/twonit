import { Link } from "react-router-dom";
import { footer } from "../content/copy";
import { LogoOnDark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-cream-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <LogoOnDark className="h-7" />
          <p className="mt-3 max-w-[16rem] text-sm text-cream-50/70">
            {footer.tagline}
          </p>
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
