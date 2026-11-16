import { useId, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { pilot } from "../content/copy";
import { supabase, supabaseConfigured } from "../lib/supabase";

type Status = "idle" | "submitting" | "submitted";

// Submits straight to Supabase (see lib/supabase.ts) via the
// submit_pilot_signup() RPC -- see README.md's "Pilot form backend"
// section for why a static, backend-less site can still do this safely.
// If the site was built without the Supabase env vars configured (e.g.
// a local checkout that hasn't set up .env.local yet), this falls back
// to the old honest "not saved" behavior rather than crashing.
export default function Pilot() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const formId = useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const enteredName = String(data.get("name") ?? "").trim();
    setName(enteredName);

    if (!supabaseConfigured || !supabase) {
      setStatus("submitted");
      return;
    }

    setStatus("submitting");
    const { error: rpcError } = await supabase.rpc("submit_pilot_signup", {
      p_name: enteredName,
      p_email: String(data.get("email") ?? "").trim(),
      p_phone: String(data.get("phone") ?? "").trim(),
      p_country: String(data.get("country") ?? "").trim(),
      p_city: String(data.get("city") ?? "").trim(),
      p_role: String(data.get("role") ?? "").trim(),
      p_why: String(data.get("why") ?? "").trim(),
    });

    if (rpcError) {
      setError(
        "Something went wrong sending that -- please try again, or reach us directly below."
      );
      setStatus("idle");
      return;
    }

    setStatus("submitted");
  }

  return (
    <section id="pilot" className="section-pad scroll-mt-16 bg-plum-900 text-cream-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-peach-300">
            {pilot.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {pilot.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream-100/85">
            {pilot.body}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-cream-50 p-6 text-ink-900 shadow-card sm:p-8">
          {status === "submitted" ? (
            <div className="py-6 text-center" role="status">
              <p className="font-display text-xl font-semibold text-plum-800">
                Thanks{name ? `, ${name}` : ""} — noted.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                {pilot.fallbackNote}
              </p>
              <p className="mt-3 text-sm text-ink-700">
                In the meantime, reach us directly at{" "}
                <a
                  href={`mailto:${pilot.fallbackEmail}`}
                  className="font-medium text-plum-700 underline underline-offset-2"
                >
                  {pilot.fallbackEmail}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-5 text-sm font-semibold text-plum-700 underline underline-offset-2"
              >
                Back to the form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id={`${formId}-name`} label="Name" name="name" required autoComplete="name" />
                <Field
                  id={`${formId}-email`}
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <Field
                  id={`${formId}-phone`}
                  label="Phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  optional
                />
                <Field
                  id={`${formId}-country`}
                  label="Country"
                  name="country"
                  required
                  autoComplete="country-name"
                />
                <Field id={`${formId}-city`} label="City" name="city" required autoComplete="address-level2" />

                <div>
                  <label
                    htmlFor={`${formId}-role`}
                    className="block text-sm font-medium text-ink-900"
                  >
                    I am a...
                  </label>
                  <select
                    id={`${formId}-role`}
                    name="role"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-lg border border-plum-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-plum-500"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {pilot.roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor={`${formId}-why`}
                  className="block text-sm font-medium text-ink-900"
                >
                  Why are you interested?{" "}
                  <span className="font-normal text-ink-500">(optional)</span>
                </label>
                <textarea
                  id={`${formId}-why`}
                  name="why"
                  rows={3}
                  className="mt-1.5 w-full rounded-lg border border-plum-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-plum-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full rounded-full bg-plum-700 px-6 py-3.5 text-base font-semibold text-cream-50 shadow-card transition hover:bg-plum-800 disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Sending…" : pilot.cta}
              </button>

              {error ? (
                <p className="mt-4 text-xs leading-relaxed text-red-600">{error}</p>
              ) : (
                <p className="mt-4 text-xs leading-relaxed text-ink-500">
                  {pilot.fallbackNote} {pilot.privacyNote}{" "}
                  <Link
                    to="/privacy"
                    className="font-medium text-plum-700 underline underline-offset-2"
                  >
                    {pilot.privacyLinkLabel}
                  </Link>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  optional,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink-900">
        {label}{" "}
        {optional && <span className="font-normal text-ink-500">(optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-lg border border-plum-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-plum-500"
      />
    </div>
  );
}
