import type { ComponentType, SVGProps } from "react";
import SectionHeading from "./SectionHeading";
import { howItWorks } from "../content/copy";
import {
  CheckCircleIcon,
  FlagIcon,
  HistoryIcon,
  RulerIcon,
  ScissorsIcon,
} from "./icons";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  measure: RulerIcon,
  approve: CheckCircleIcon,
  sew: ScissorsIcon,
  keep: HistoryIcon,
};

// One look per step: each climbs higher (wide screens) or steps further
// in (phones), and the colour deepens from soft mauve to deep plum, so
// the order reads as progress before a word is read. Class names are
// written out in full so Tailwind picks them up.
const STEPS = [
  {
    box: "bg-mauve-100 ml-0 lg:h-[13rem]",
    dark: false,
  },
  {
    box: "bg-plum-200 ml-[6%] lg:h-[16rem]",
    dark: false,
  },
  {
    box: "bg-plum-500 ml-[12%] lg:h-[19rem]",
    dark: true,
  },
  {
    box: "bg-plum-800 ml-[18%] lg:h-[22rem]",
    dark: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad scroll-mt-16">
      <div className="container-page">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          headline={howItWorks.headline}
          align="center"
        />

        <ol className="mx-auto mt-14 flex max-w-5xl flex-col gap-3 lg:mt-20 lg:grid lg:grid-cols-4 lg:items-end lg:gap-0">
          {howItWorks.steps.map((step, i) => {
            const look = STEPS[i];
            const Icon = ICONS[step.icon];
            const last = i === howItWorks.steps.length - 1;
            return (
              <li
                key={step.number}
                className={`relative overflow-visible rounded-2xl p-5 lg:ml-0 lg:rounded-b-none lg:rounded-t-3xl lg:p-6 ${look.box}`}
              >
                {last && (
                  <FlagIcon
                    className="absolute -top-11 right-8 hidden h-10 w-10 text-peach-500 lg:block"
                  />
                )}

                {/* Big, faint step number in the corner. */}
                <span
                  className={`pointer-events-none absolute bottom-1 right-4 font-display text-5xl font-semibold leading-none lg:bottom-auto lg:right-6 lg:top-5 lg:text-6xl ${
                    look.dark ? "text-cream-50/15" : "text-plum-700/15"
                  }`}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="flex items-start gap-4 pr-12 lg:block lg:pr-0">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      look.dark ? "bg-cream-50/10 text-peach-300" : "bg-white/70 text-plum-700"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="lg:mt-4">
                    <h3
                      className={`text-lg font-semibold lg:text-xl ${
                        look.dark ? "text-cream-50" : "text-plum-900"
                      }`}
                    >
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p
                      className={`mt-1 text-[0.95rem] leading-snug ${
                        look.dark ? "text-cream-50/80" : "text-ink-700"
                      }`}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
