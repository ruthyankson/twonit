import { Link } from "react-router-dom";
import { legal, nav } from "../content/copy";

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
            href={`mailto:${legal.email}`}
            className="font-medium text-plum-700 underline underline-offset-2"
          >
            {legal.email}
          </a>
        </p>


        <p className="mt-6 text-sm text-ink-500">
          Want to try Twonit? It's free, and anyone can{" "}
          <a href={nav.ctaHref} className="text-plum-700 underline underline-offset-2">
            start using the app
          </a>{" "}
          today, wherever you are, and email us any time with questions or
          feedback.
        </p>
      </div>
    </div>
  );
}
