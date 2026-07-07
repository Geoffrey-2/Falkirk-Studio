import { z } from "zod";

export const BUSINESS_TYPES = [
  "Personal Training",
  "Pilates",
  "Yoga",
  "Dance/Performing Arts",
  "Fitness Classes",
  "Martial Arts",
  "Sports Therapy",
  "Wellbeing/Holistic",
  "Workshop/Creative",
  "Other",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Phone is required"),
  businessType: z.enum(BUSINESS_TYPES, {
    message: "Select a business type",
  }),
  startDate: z.string().trim().optional(),
  message: z.string().trim().optional(),
  // Honeypot field — must stay empty. Bots that fill every field will trip this.
  company: z.string().max(0).optional(),
});

export type EnquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;
};
