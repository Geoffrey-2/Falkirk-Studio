const YOUTUBE_VIDEO_ID = "sm_KnnZ4zCM";

export default function VideoTour() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Video Tour
      </h2>
      <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-border">
        <iframe
          title="Video tour of The Studio Falkirk"
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
