import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { legal } from "../content/copy";

// Shared shell for the Privacy Policy and Terms of Use: a title, the
// date they last changed, a plain-language summary box, then numbered
// sections (see Section below).
export default function LegalPage({
  title,
  updated,
  summary,
  children,
}: {
  title: string;
  updated: string;
  summary: ReactNode;
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

        <div className="mt-6 rounded-xl border border-plum-200 bg-plum-50 p-5 text-[0.95rem] leading-relaxed text-ink-700">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-plum-700">
            In short
          </p>
          {summary}
        </div>

        <div className="mt-8 space-y-8 text-[0.95rem] leading-relaxed text-ink-700">
          {children}
        </div>

        <p className="mt-10 border-t border-plum-100 pt-6 text-sm text-ink-500">
          Questions about this page? Email{" "}
          <a
            href={`mailto:${legal.email}`}
            className="font-medium text-plum-700 underline underline-offset-2"
          >
            {legal.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-plum-900">
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}
