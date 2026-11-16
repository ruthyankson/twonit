import SectionHeading from "./SectionHeading";
import { research } from "../content/copy";

export default function Research() {
  return (
    <section className="section-pad bg-plum-50">
      <div className="container-page">
        <SectionHeading
          eyebrow={research.eyebrow}
          headline={research.headline}
          body={research.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {research.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-plum-100 bg-white p-6 shadow-card"
            >
              <p className="font-display text-4xl font-semibold text-plum-700">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-plum-100 bg-white/60 p-6 sm:p-8">
          <h3 className="text-base font-semibold text-plum-900">
            {research.dressmakerFindings.heading}
          </h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-3">
            {research.dressmakerFindings.themes.map((theme) => (
              <li key={theme.title} className="border-l-2 border-peach-500 pl-4">
                <p className="font-semibold text-plum-900">{theme.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">
                  {theme.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic text-ink-500">
          {research.disclaimer}
        </p>
      </div>
    </section>
  );
}
