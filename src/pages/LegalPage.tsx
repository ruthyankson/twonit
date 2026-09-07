import { Link } from "react-router-dom";
import type { ReactNode } from "react";

// Shared shell for Privacy/Terms -- both are placeholder drafts (see
// TODO.md) so this exists once rather than duplicated per page.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="section-pad">
      <div className="container-page max-w-2xl">
        <Link
          to="/"
          className="text-sm font-medium text-plum-700 hover:underline"
        >
          ← Back to Twonit
        </Link>

        <h1 className="mt-6 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: {updated}</p>

        <div className="mt-6 rounded-xl border border-dashed border-plum-300 bg-plum-50 p-4 text-sm text-plum-700">
          <strong>Draft placeholder.</strong> This page has not been
          reviewed by a lawyer and should not be treated as Twonit's real
          policy yet. See TODO.md.
        </div>

        <div className="prose-legal mt-8 space-y-5 text-[0.95rem] leading-relaxed text-ink-700">
          {children}
        </div>
      </div>
    </div>
  );
}
