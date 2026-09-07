import { beyondTailoring } from "../content/copy";

export default function BeyondTailoring() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{beyondTailoring.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
            {beyondTailoring.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {beyondTailoring.body}
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {beyondTailoring.futureExamples.map((item) => (
            <li
              key={item.label}
              className={
                item.status === "current"
                  ? "rounded-full bg-plum-700 px-5 py-2.5 text-sm font-semibold text-cream-50"
                  : "rounded-full border border-dashed border-plum-300 px-5 py-2.5 text-sm font-medium text-plum-600"
              }
            >
              {item.label}
              {item.status === "current" && (
                <span className="ml-2 rounded-full bg-cream-50/20 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide">
                  Today
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm italic text-ink-500">
          {beyondTailoring.caveat}
        </p>
      </div>
    </section>
  );
}
