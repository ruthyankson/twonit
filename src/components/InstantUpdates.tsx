import { instantUpdates } from "../content/copy";
import { PhoneCallIcon, CheckCircleIcon } from "./icons";

// A distinct value prop from SharedTruth above it -- that section is about
// accuracy (nothing gets lost or misremembered), this one is about time and
// interruption (a busy dressmaker shouldn't have to stop and call, and a
// customer shouldn't have to feel like they're bothering one to ask). Kept
// as its own section rather than folded into ForArtisans/ForCustomers so it
// reads as a second, equally-real reason to use Twonit, not a footnote.
export default function InstantUpdates() {
  return (
    <section id="instant-updates" className="section-pad scroll-mt-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{instantUpdates.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
            {instantUpdates.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {instantUpdates.body}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-plum-100 bg-white p-6">
            <PhoneCallIcon className="h-8 w-8 text-ink-500" />
            <p className="mt-4 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-500">
              {instantUpdates.before.label}
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-700">
              {instantUpdates.before.text}
            </p>
          </div>

          <div className="rounded-2xl border border-sage-500/30 bg-sage-100 p-6 shadow-card">
            <CheckCircleIcon className="h-8 w-8 text-sage-700" />
            <p className="mt-4 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-sage-700">
              {instantUpdates.after.label}
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-700">
              {instantUpdates.after.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
