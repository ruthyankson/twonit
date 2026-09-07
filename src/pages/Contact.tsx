import { Link } from "react-router-dom";
import { pilot } from "../content/copy";

export default function Contact() {
  return (
    <div className="section-pad">
      <div className="container-page max-w-2xl">
        <Link to="/" className="text-sm font-medium text-plum-700 hover:underline">
          ← Back to Twonit
        </Link>

        <h1 className="mt-6 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
          Contact
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          The easiest way to reach us right now is email:{" "}
          <a
            href={`mailto:${pilot.fallbackEmail}`}
            className="font-medium text-plum-700 underline underline-offset-2"
          >
            {pilot.fallbackEmail}
          </a>
        </p>

        <div className="mt-6 rounded-xl border border-dashed border-plum-300 bg-plum-50 p-4 text-sm text-plum-700">
          <strong>Placeholder address.</strong> This inbox needs to be set
          up before launch — see TODO.md.
        </div>

        <p className="mt-6 text-sm text-ink-500">
          If you're a dressmaker, tailor, or customer who wants to try
          Twonit early, the{" "}
          <a href="/#pilot" className="text-plum-700 underline underline-offset-2">
            pilot signup form
          </a>{" "}
          is the fastest way to get on our radar.
        </p>
      </div>
    </div>
  );
}
