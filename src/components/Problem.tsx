import { problem } from "../content/copy";
import { ProblemIcon, RecordIcon } from "./icons";

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

        {/* A diagram, not controls: the scattered places on top (plain
            icons and labels, no pill outlines that read as buttons), lines
            drawing them together, and the one record they become. */}
        <figure className="mt-14" aria-label={`${problem.sourcesLabel}: ${problem.convergingSources.map((s) => s.label).join(", ")}. ${problem.resultEyebrow}: ${problem.resultLabel}.`}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-cream-50/50">
            {problem.sourcesLabel}
          </p>
          <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-y-6">
            {problem.convergingSources.map((source) => (
              <li key={source.label} className="flex w-1/3 flex-col items-center px-1 text-center sm:w-1/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10">
                  <ProblemIcon
                    name={source.icon as "notebook" | "chat" | "photo" | "speech" | "memory"}
                    className="h-6 w-6 text-peach-300"
                  />
                </span>
                <span className="mt-2.5 max-w-[8rem] text-sm leading-snug text-cream-100/80">
                  {source.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Lines from each column's centre down to the middle (wide
              screens), or a single arrow (phones, where the items wrap). */}
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="mx-auto mt-4 hidden h-16 w-full max-w-3xl text-cream-50/30 sm:block"
            aria-hidden="true"
          >
            {[10, 30, 50, 70, 90].map((x) => (
              <path
                key={x}
                d={`M${x} 0 C${x} 22 50 18 50 40`}
                stroke="currentColor"
                strokeWidth={1.4}
                strokeDasharray="3 4"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          <svg
            viewBox="0 0 24 40"
            className="mx-auto mt-5 h-9 w-6 text-cream-50/40 sm:hidden"
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

          <div className="mx-auto mt-3 flex max-w-sm items-center gap-4 rounded-2xl bg-cream-50 p-4 text-left shadow-card sm:mt-1">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-plum-100">
              <RecordIcon className="h-6 w-6 text-plum-700" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-plum-600">
                {problem.resultEyebrow}
              </span>
              <span className="mt-0.5 block font-semibold text-plum-900">
                {problem.resultLabel}
              </span>
              <span className="mt-0.5 block text-sm leading-snug text-ink-500">
                {problem.resultCaption}
              </span>
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
}
