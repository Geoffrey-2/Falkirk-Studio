const USES = [
  "Personal Training",
  "Small Group Training",
  "Pilates",
  "Yoga",
  "Strength & Conditioning",
  "Functional Fitness",
  "Dance & Movement Classes",
  "Sports Therapy & Rehabilitation",
  "Martial Arts",
  "Wellbeing & Holistic Therapies",
  "Workshops & Creative Studios",
  "Office/Training Space (subject to suitability)",
];

export default function IdealFor() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Ideal For
      </h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {USES.map((use) => (
          <span
            key={use}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/90"
          >
            {use}
          </span>
        ))}
      </div>
    </section>
  );
}
