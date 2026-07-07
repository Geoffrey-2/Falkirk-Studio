"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/gallery/studio-floor-wide.jpg", alt: "Open studio floor with mirrors and natural light, wide angle" },
  { src: "/gallery/studio-floor-alt.jpg", alt: "Open studio floor, alternate angle" },
  { src: "/gallery/studio-floor-3.jpg", alt: "Open studio floor with mirrors, another angle" },
  { src: "/gallery/studio-floor-4.jpg", alt: "Open studio floor with windows and natural light" },
  { src: "/gallery/corridor-entry.jpg", alt: "Corridor with bench seating and coat hooks, leading to the WC" },
  { src: "/gallery/shower-room.jpg", alt: "Separate shower room" },
  { src: "/gallery/wc.jpg", alt: "WC with wash basin" },
  { src: "/gallery/kitchen-area.jpg", alt: "Kitchen area off the corridor" },
];

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % IMAGES.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, showPrev, showNext]);

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Gallery
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Enlarge photo: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 text-white/80 hover:text-white"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 text-white/80 hover:text-white sm:left-6"
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[openIndex].src}
              alt={IMAGES[openIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 text-white/80 hover:text-white sm:right-6"
          >
            <ChevronIcon direction="right" />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {openIndex + 1} / {IMAGES.length}
          </p>
        </div>
      )}
    </section>
  );
}
