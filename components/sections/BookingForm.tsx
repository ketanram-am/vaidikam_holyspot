"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { categories } from "@/content/services";
import { priest } from "@/content/site";
import { FlameMark } from "@/components/ui/Motifs";

const steps = ["The ritual", "The details", "How to reach you"] as const;

type Form = {
  ritual: string;
  occasion: string;
  dateWindow: string;
  location: string;
  notes: string;
  name: string;
  email: string;
  country: string;
  phone: string;
  channel: string;
};

const empty: Form = {
  ritual: "",
  occasion: "",
  dateWindow: "",
  location: "",
  notes: "",
  name: "",
  email: "",
  country: "",
  phone: "",
  channel: "Email",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns a message per invalid field, keyed by field name. */
function validate(step: number, form: Form): Partial<Record<keyof Form, string>> {
  const errors: Partial<Record<keyof Form, string>> = {};
  if (step === 0 && !form.ritual) {
    errors.ritual = "Please choose a ritual, or select “I’m not sure yet”.";
  }
  if (step === 2) {
    if (!form.name.trim()) errors.name = "Please tell us your name.";
    if (!form.email.trim()) errors.email = "Please add an email address.";
    else if (!emailPattern.test(form.email.trim()))
      errors.email = "That email address doesn’t look complete.";
  }
  return errors;
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [form, setForm] = useState<Form>(empty);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const baseId = useId();
  const isLast = step === steps.length - 1;

  // Prefill from ?ritual= without opting the page out of static rendering.
  useEffect(() => {
    const ritual = new URLSearchParams(window.location.search).get("ritual");
    if (ritual) setForm((f) => ({ ...f, ritual }));
  }, []);

  // Move focus to the new step so keyboard and screen-reader users are not
  // left at the bottom of the form after pressing Continue.
  useEffect(() => {
    if (step > 0) headingRef.current?.focus();
  }, [step]);

  const set =
    (k: keyof Form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((prev) => {
        if (!prev[k]) return prev;
        const next = { ...prev };
        delete next[k];
        return next;
      });
    };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const found = validate(step, form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`${baseId}-${first}`)?.focus();
      return;
    }

    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }

    setStatus("ready");
  }

  if (status === "ready") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="card card-pad flex items-center text-center md:p-16"
      >
        <div className="mx-auto flex max-w-md flex-col items-center">
          <span className="flex h-16 w-16 items-center justify-center border border-bronze/30 bg-cream">
            <FlameMark className="h-8 w-8 text-bronze" />
          </span>
          <h2 className="mt-7 text-h2">Your enquiry is prepared.</h2>
          <p className="lead mt-4">
            These details have not been sent yet. A verified direct contact
            channel for {priest.name} is being connected before this site is
            published.
          </p>

          <dl className="mt-9 w-full border-t border-hairline pt-7 text-left">
            <div className="flex justify-between gap-6">
              <dt className="text-small text-taupe">Ritual</dt>
              <dd className="text-small text-charcoal">{form.ritual}</dd>
            </div>
            <div className="mt-3 flex justify-between gap-6">
              <dt className="text-small text-taupe">Reply to</dt>
              <dd className="text-small text-charcoal">{form.email}</dd>
            </div>
          </dl>

          <Link href="/contact" className="btn-ghost mt-9">
            View contact information
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy="false"
      className="card card-pad md:p-12"
    >
      {/* Progress. The list conveys order visually; the live region below
          conveys the same change to assistive technology. */}
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
        {steps.map((label, i) => (
          <li
            key={label}
            className="flex flex-1 items-center gap-3"
            aria-current={i === step ? "step" : undefined}
          >
            <span
              className={`flex h-7 w-7 flex-none rotate-45 items-center justify-center border text-[0.75rem] transition-colors duration-300 ${
                i === step
                  ? "border-maroon bg-maroon text-ivory"
                  : i < step
                    ? "border-bronze bg-bronze/10 text-bronze"
                    : "border-hairline text-taupe"
              }`}
              aria-hidden="true"
            >
              <span className="-rotate-45">{i < step ? "✓" : i + 1}</span>
            </span>
            <span
              className={`text-small transition-colors duration-300 ${
                i === step ? "font-medium text-maroon" : "text-taupe"
              }`}
            >
              {label}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className={`hidden h-px flex-1 transition-colors duration-300 sm:block ${
                  i < step ? "bg-bronze/40" : "bg-hairline"
                }`}
              />
            )}
          </li>
        ))}
      </ol>

      <p
        ref={headingRef}
        tabIndex={-1}
        aria-live="polite"
        className="mt-10 text-small text-taupe outline-none"
      >
        Step {step + 1} of {steps.length} — {steps[step]}
      </p>

      <div className="mt-6">
        {step === 0 && (
          <fieldset className="flex flex-col gap-6 border-0 p-0">
            <legend className="sr-only">The ritual</legend>

            <Field
              id={`${baseId}-ritual`}
              label="Which ritual do you have in mind?"
              error={errors.ritual}
            >
              <select
                id={`${baseId}-ritual`}
                className="input"
                value={form.ritual}
                onChange={set("ritual")}
                aria-invalid={Boolean(errors.ritual)}
                aria-describedby={errors.ritual ? `${baseId}-ritual-error` : undefined}
              >
                <option value="">Select a ritual…</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
                <option value="Not sure yet">I&rsquo;m not sure yet</option>
              </select>
            </Field>

            <Field
              id={`${baseId}-occasion`}
              label="Occasion"
              optional
              hint="A wedding, a new home, an annual observance — whatever prompted the enquiry."
            >
              <input
                id={`${baseId}-occasion`}
                className="input"
                value={form.occasion}
                onChange={set("occasion")}
                placeholder="e.g. New home, birthday, annual ceremony"
              />
            </Field>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="flex flex-col gap-6 border-0 p-0">
            <legend className="sr-only">The details</legend>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id={`${baseId}-dateWindow`} label="Preferred dates" optional>
                <input
                  id={`${baseId}-dateWindow`}
                  className="input"
                  value={form.dateWindow}
                  onChange={set("dateWindow")}
                  placeholder="e.g. Early March 2026"
                />
              </Field>
              <Field
                id={`${baseId}-location`}
                label="Where should it be performed?"
                optional
              >
                <select
                  id={`${baseId}-location`}
                  className="input"
                  value={form.location}
                  onChange={set("location")}
                >
                  <option value="">Select…</option>
                  <option>In person, in India</option>
                  <option>Remotely, on our behalf</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
            </div>

            <Field
              id={`${baseId}-notes`}
              label="Anything you would like to share"
              optional
              hint="Gotra, sampradaya, or family customs help the priest prepare correctly."
            >
              <textarea
                id={`${baseId}-notes`}
                rows={4}
                className="input resize-y"
                value={form.notes}
                onChange={set("notes")}
                placeholder="Family details, gotra, sampradaya, or any specific wishes"
              />
            </Field>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="flex flex-col gap-6 border-0 p-0">
            <legend className="sr-only">How to reach you</legend>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                id={`${baseId}-name`}
                label="Your name"
                error={errors.name}
              >
                <input
                  id={`${baseId}-name`}
                  className="input"
                  autoComplete="name"
                  value={form.name}
                  onChange={set("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
                />
              </Field>
              <Field
                id={`${baseId}-email`}
                label="Email"
                error={errors.email}
              >
                <input
                  id={`${baseId}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className="input"
                  value={form.email}
                  onChange={set("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
                />
              </Field>
              <Field id={`${baseId}-country`} label="Country" optional>
                <input
                  id={`${baseId}-country`}
                  className="input"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={set("country")}
                  placeholder="e.g. United States"
                />
              </Field>
              <Field id={`${baseId}-phone`} label="Phone / WhatsApp" optional>
                <input
                  id={`${baseId}-phone`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="input"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </Field>
            </div>

            <Field id={`${baseId}-channel`} label="Preferred way to be reached">
              <select
                id={`${baseId}-channel`}
                className="input"
                value={form.channel}
                onChange={set("channel")}
              >
                <option>Email</option>
                <option>WhatsApp</option>
                <option>Phone call</option>
              </select>
            </Field>
          </fieldset>
        )}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-hairline pt-8">
        {step > 0 && (
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </button>
        )}
        <button
          type="submit"
          className="btn-primary"
        >
          {isLast ? "Review enquiry" : "Continue"}
        </button>
        <p className="w-full text-small text-taupe sm:w-auto sm:flex-1 sm:text-right">
          This preview does not transmit or store your details.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  children,
  hint,
  error,
  optional,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  hint?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline gap-2">
        <span className="text-small font-medium text-charcoal">{label}</span>
        {/* Only optional fields are marked. Labelling both states doubles the
            noise without adding information. */}
        {optional && <span className="text-small text-taupe">Optional</span>}
      </label>
      {hint && (
        <p className="-mt-0.5 text-small text-taupe">{hint}</p>
      )}
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-2 text-small text-maroon"
        >
          <span aria-hidden="true">•</span>
          {error}
        </p>
      )}
    </div>
  );
}
