import SectionHeading from "./SectionHeading";
import { howItWorks } from "../content/copy";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad scroll-mt-16">
      <div className="container-page">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          headline={howItWorks.headline}
          align="center"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-plum-100 bg-white p-6 shadow-card"
            >
              <span className="font-display text-2xl font-semibold text-plum-300">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-plum-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {step.body}
              </p>

              {i < howItWorks.steps.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  className="absolute -right-3.5 top-1/2 hidden h-7 w-7 -translate-y-1/2 text-plum-300 lg:block"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
