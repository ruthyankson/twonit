import ImagePlaceholder from "./ImagePlaceholder";
import { CheckCircleIcon } from "./icons";

// Shared layout for the "For Artisans" / "For Customers" sections -- same
// structure, mirrored image side, different copy and tone color per
// audience so the two don't read as identical blocks with swapped words.
export default function AudienceSection({
  id,
  eyebrow,
  headline,
  body,
  benefits,
  cta,
  imageLabel,
  imageSide,
  tint,
}: {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  benefits: string[];
  cta: string;
  imageLabel: string;
  imageSide: "left" | "right";
  tint: "plum" | "peach";
}) {
  const iconColor = tint === "plum" ? "text-plum-600" : "text-peach-500";

  return (
    <section id={id} className="section-pad scroll-mt-16">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
          <ImagePlaceholder label={imageLabel} aspect="aspect-[4/3]" />
        </div>

        <div className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">{body}</p>

          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircleIcon
                  className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`}
                />
                <span className="text-[0.95rem] leading-relaxed text-ink-700">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#pilot"
            className="mt-8 inline-block rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream-50 shadow-card transition hover:bg-plum-800"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
