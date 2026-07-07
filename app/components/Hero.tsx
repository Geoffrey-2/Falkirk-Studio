import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-surface">
        <Image
          src="/gallery/studio-floor-wide.jpg"
          alt="Bright open-plan studio floor with natural light and wall mirrors"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-5xl px-6 pb-12 sm:px-8 sm:pb-16">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The Studio Falkirk — Bright, Flexible Commercial Studio To Let
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Approx. 100m² (1,076 sq ft) first-floor open-plan studio, 30 Vicar
            Street, Falkirk FK1 1JB
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-white px-5 py-2 text-lg font-semibold text-foreground">
              £750 pcm
              <span className="ml-1 text-sm font-normal text-muted">
                (rent only, exclusive of business rates)
              </span>
            </span>
            <span className="rounded-full border border-white/60 px-4 py-2 text-sm font-medium text-white">
              Immediately available
            </span>
          </div>

          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Rateable value £7,973 (2026 Revaluation, Ref 401/670/03000/4) —
            eligible for up to 100% relief under the Small Business Bonus
            Scheme for qualifying single-premises occupiers. Relief depends
            on the tenant&apos;s circumstances — see{" "}
            <a
              href="https://www.mygov.scot/non-domestic-rates-relief/small-business-bonus-scheme"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              mygov.scot
            </a>{" "}
            for eligibility.
          </p>

          <a
            href="#enquiry"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
