import { about } from "../content/copy";

export default function About() {
  return (
    <section id="about" className="section-pad scroll-mt-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
            {about.headline}
          </h2>
          <div className="mt-5 space-y-4">
            {about.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink-700">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
