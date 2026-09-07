export default function SectionHeading({
  eyebrow,
  headline,
  body,
  align = "left",
  id,
}: {
  eyebrow: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow" id={id}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
        {headline}
      </h2>
      {body && <p className="mt-4 text-lg leading-relaxed text-ink-700">{body}</p>}
    </div>
  );
}
