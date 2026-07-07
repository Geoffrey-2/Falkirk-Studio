import Image from "next/image";

const IMAGES = [
  { src: "/gallery/studio-floor-wide.jpg", alt: "Open studio floor with mirrors and natural light, wide angle" },
  { src: "/gallery/studio-floor-alt.jpg", alt: "Open studio floor, alternate angle" },
  { src: "/gallery/studio-floor-3.jpg", alt: "Open studio floor with mirrors, another angle" },
  { src: "/gallery/studio-floor-4.jpg", alt: "Open studio floor with windows and natural light" },
  { src: "/gallery/corridor-entry.jpg", alt: "Corridor with bench seating and coat hooks, leading to the WC" },
  { src: "/gallery/wc.jpg", alt: "WC with wash basin" },
  { src: "/gallery/kitchen-area.jpg", alt: "Kitchen area off the corridor" },
];

export default function Gallery() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Gallery
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {IMAGES.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
