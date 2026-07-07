const FEATURES = [
  "~100m² (1,076 sq ft) open-plan space",
  "Bright first-floor accommodation, excellent natural light",
  "Concrete sub-floor — suitable for weights/gym equipment",
  "Separate shower room",
  "Separate WC",
  "Kitchen area",
  "Gas central heating",
  "Secure entry system",
  "Rent: £750 per calendar month (exclusive of business rates)",
  "Rateable value £7,973 — may qualify for up to 100% Small Business Bonus Scheme relief (subject to occupier's circumstances)",
  "Immediately available",
  "Flexible lease terms",
  "Central Falkirk location",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 flex-shrink-0 text-accent"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10.2l2.3 2.3 4.7-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function KeyFeatures() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Key Features
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-sm leading-relaxed text-foreground/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
