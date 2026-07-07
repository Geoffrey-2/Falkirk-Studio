export default function Location() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Location
      </h2>
      <p className="mt-4 text-lg font-medium text-foreground">
        First Floor, 30 Vicar Street, Falkirk, FK1 1JB
      </p>
      {/* [TBC] — no specifics supplied yet on walking distance / transport links; confirm before publishing */}
      <p className="mt-2 text-sm text-muted">
        Centrally located in Falkirk. [TBC — walking distance to town centre
        and transport links to be confirmed]
      </p>
      <p className="mt-1 text-sm text-muted">
        Parking: nearby parking available, free in the evenings.
      </p>

      <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-border">
        <iframe
          title="Map showing 30 Vicar Street, Falkirk"
          src="https://www.google.com/maps?q=30+Vicar+Street,+Falkirk,+FK1+1JB&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
