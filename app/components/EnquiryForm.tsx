"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry } from "@/app/actions";
import { BUSINESS_TYPES, type EnquiryFormState } from "@/app/lib/enquiry-schema";

const initialState: EnquiryFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Enquiry"}
    </button>
  );
}

export default function EnquiryForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-border bg-surface p-8 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          Thanks — your enquiry has been sent
        </h3>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll be in touch shortly to discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {state.fieldErrors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {state.fieldErrors?.phone && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-foreground">
          Business type / intended use
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="" disabled>
            Select an option
          </option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {state.fieldErrors?.businessType && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.businessType}</p>
        )}
      </div>

      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-foreground">
          Preferred start date
          <span className="ml-1 font-normal text-muted">(optional)</span>
        </label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          placeholder="e.g. As soon as possible"
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
