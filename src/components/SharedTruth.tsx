import { sharedTruth } from "../content/copy";
import {
  RulerIcon,
  CheckCircleIcon,
  ImageRefIcon,
  HistoryIcon,
  FlagIcon,
} from "./icons";

const FIELD_ICONS = [RulerIcon, CheckCircleIcon, ImageRefIcon, HistoryIcon, FlagIcon];

export default function SharedTruth() {
  return (
    <section id="shared-truth" className="section-pad scroll-mt-16 bg-plum-50">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">{sharedTruth.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
            {sharedTruth.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            {sharedTruth.body}
          </p>
        </div>

        {/* Conceptual interface -- an illustration of the idea, not a
            screenshot of the live product. Kept deliberately schematic. */}
        <div
          className="mx-auto w-full max-w-md rounded-2xl border border-plum-200 bg-white p-6 shadow-card sm:p-7"
          aria-label="Conceptual illustration of a Twonit order record"
        >
          <div className="flex items-center justify-between border-b border-plum-100 pb-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-plum-400">
                Order
              </p>
              <p className="mt-0.5 font-display text-lg font-semibold text-plum-900">
                {sharedTruth.mockup.orderName}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              <CheckCircleIcon className="h-3.5 w-3.5" />
              {sharedTruth.mockup.approval}
            </span>
          </div>

          <dl className="mt-4 divide-y divide-plum-50">
            {sharedTruth.mockup.fields.map((field, i) => {
              const Icon = FIELD_ICONS[i % FIELD_ICONS.length];
              return (
                <div
                  key={field.label}
                  className="flex items-center justify-between gap-3 py-3"
                >
                  <dt className="flex items-center gap-2.5 text-sm text-ink-700">
                    <Icon className="h-4 w-4 shrink-0 text-plum-400" />
                    {field.label}
                  </dt>
                  <dd className="text-sm font-medium text-plum-800">
                    {field.value}
                  </dd>
                </div>
              );
            })}
          </dl>

          <p className="mt-5 rounded-lg bg-rose-100/70 px-3 py-2 text-center text-xs font-medium text-plum-700">
            Visible to both the artisan and the customer
          </p>
        </div>
      </div>
    </section>
  );
}
