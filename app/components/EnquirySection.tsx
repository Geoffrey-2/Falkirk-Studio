import EnquiryForm from "@/app/components/EnquiryForm";

export default function EnquirySection() {
  return (
    <section id="enquiry" className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Enquire
      </h2>
      <p className="mt-4 text-lg text-foreground/90">
        Interested in viewing the space or have a question? Get in touch
        below.
      </p>
      <div className="mt-8">
        <EnquiryForm />
      </div>
    </section>
  );
}
