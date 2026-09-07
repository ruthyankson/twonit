import { hero } from "../content/copy";

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-peach-100/60 via-cream-50 to-cream-50"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-plum-900 sm:text-5xl lg:text-[3.25rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pilot"
              className="rounded-full bg-plum-700 px-6 py-3.5 text-base font-semibold text-cream-50 shadow-card transition hover:bg-plum-800"
            >
              {hero.primaryCta}
            </a>
            <a
              href={hero.secondaryHref}
              className="rounded-full border border-plum-300 px-6 py-3.5 text-base font-semibold text-plum-800 transition hover:bg-plum-50"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-plum-100/70 sm:-inset-6" aria-hidden="true" />
          <picture>
            <source srcSet="/images/hero-collaboration.webp" type="image/webp" />
            <img
              src="/images/hero-collaboration.jpg"
              alt={hero.imageAlt}
              width={1147}
              height={1372}
              fetchPriority="high"
              className="mx-auto w-full max-w-md rounded-[1.75rem] shadow-card"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
