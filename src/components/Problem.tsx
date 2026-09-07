import { problem } from "../content/copy";
import { ProblemIcon, HandshakeIcon } from "./icons";

export default function Problem() {
  return (
    <section className="section-pad bg-plum-900 text-cream-50">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-peach-300">
            {problem.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {problem.headline}
          </h2>
          {problem.body.map((p) => (
            <p key={p} className="mt-4 text-lg leading-relaxed text-cream-100/85">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {problem.convergingSources.map((source) => (
              <div
                key={source.label}
                className="flex items-center gap-2.5 rounded-full border border-cream-50/15 bg-cream-50/5 px-4 py-2.5"
              >
                <ProblemIcon
                  name={source.icon as "notebook" | "chat" | "photo" | "speech" | "memory"}
                  className="h-5 w-5 shrink-0 text-peach-300"
                />
                <span className="text-sm font-medium text-cream-50">
                  {source.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 flex w-full max-w-xs flex-col items-center gap-2 sm:mt-8">
            <svg
              viewBox="0 0 24 40"
              className="h-9 w-6 text-cream-50/40"
              aria-hidden="true"
            >
              <path
                d="M12 0v34M4 27l8 9 8-9"
                stroke="currentColor"
                strokeWidth={1.6}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex items-center gap-2.5 rounded-full bg-cream-50 px-5 py-3 shadow-card">
              <HandshakeIcon className="h-5 w-5 text-plum-700" />
              <span className="text-sm font-semibold text-plum-800">
                {problem.resultLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
