"use server";

import { Resend } from "resend";
import { enquirySchema, type EnquiryFormState } from "@/app/lib/enquiry-schema";

const ENQUIRY_RECIPIENT = "cwmenswear@aol.com";

export async function submitEnquiry(
  _prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    businessType: formData.get("businessType"),
    startDate: formData.get("startDate") ?? "",
    message: formData.get("message") ?? "",
    company: formData.get("company") ?? "",
  };

  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: EnquiryFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof typeof fieldErrors;
      fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please check the form and try again.", fieldErrors };
  }

  // Honeypot tripped — silently report success so bots don't learn to adapt.
  if (parsed.data.company) {
    return { status: "success" };
  }

  const { name, email, phone, businessType, startDate, message } = parsed.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return {
      status: "error",
      message: "Enquiries are temporarily unavailable. Please try again shortly.",
    };
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    // [TBC] — swap for a verified sending domain before launch; resend.dev is a dev-only placeholder.
    from: "The Studio Falkirk <onboarding@resend.dev>",
    to: ENQUIRY_RECIPIENT,
    replyTo: email,
    subject: `New Studio Falkirk Enquiry — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business type: ${businessType}`,
      `Preferred start date: ${startDate || "Not provided"}`,
      "",
      "Message:",
      message || "(none)",
    ].join("\n"),
  });

  if (error) {
    return {
      status: "error",
      message: "Something went wrong sending your enquiry. Please try again.",
    };
  }

  return { status: "success" };
}
