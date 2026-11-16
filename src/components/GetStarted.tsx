import { Link } from "react-router-dom";
import { appLinks, getStarted } from "../content/copy";

// The closing call to action: two buttons that go straight to the app's
// sign-in for each side (it signs people up too). Replaced the old pilot
// sign-up form, so anyone, anywhere, can start using Twonit right away.
export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="section-pad scroll-mt-16 bg-plum-900 text-cream-50"
    >
      <div className="container-page max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-peach-300">
          {getStarted.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
          {getStarted.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-50/80">
          {getStarted.body}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={appLinks.dressmaker}
            className="rounded-full bg-cream-50 px-6 py-3.5 text-base font-semibold text-plum-900 shadow-card transition hover:bg-peach-100"
          >
            {getStarted.dressmakerCta}
          </a>
          <a
            href={appLinks.customer}
            className="rounded-full border border-cream-50/40 px-6 py-3.5 text-base font-semibold text-cream-50 transition hover:bg-cream-50/10"
          >
            {getStarted.customerCta}
          </a>
        </div>

        <p className="mt-6 text-sm text-cream-50/60">
          {getStarted.legalNote}{" "}
          <Link to="/terms" className="underline underline-offset-2 hover:text-cream-50">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-cream-50">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
