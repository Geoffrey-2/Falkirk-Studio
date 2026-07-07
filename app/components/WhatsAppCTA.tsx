const PHONE_INTL = "447989515576";
const PREFILLED_MESSAGE =
  "Hi, I'd like more information about The Studio Falkirk (30 Vicar Street).";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-10 w-10" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        fill="#fff"
        d="M22.47 9.53a8.9 8.9 0 0 0-14.9 9.85L6 25l5.76-1.51a8.9 8.9 0 0 0 4.26 1.08h.01a8.9 8.9 0 0 0 6.44-15.04Zm-6.44 13.7h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-3.42.9.91-3.33-.18-.28a7.4 7.4 0 1 1 6.74 3.9Zm4.06-5.54c-.22-.11-1.32-.65-1.53-.73-.2-.08-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.16-.48.05-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.38-.5-.38-.13-.01-.28-.01-.43-.01a.83.83 0 0 0-.6.28c-.21.22-.79.77-.79 1.87s.81 2.17.92 2.32c.11.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.06 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.2-.15-.42-.26Z"
      />
    </svg>
  );
}

export default function WhatsAppCTA() {
  const href = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <section id="enquiry" className="mx-auto max-w-2xl px-6 py-16 text-center sm:px-8 sm:py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Enquire
      </h2>
      <p className="mt-4 text-lg text-foreground/90">
        Interested in viewing the space or have a question? Message us
        directly on WhatsApp for a fast response.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1ebe57]"
      >
        <WhatsAppIcon />
        Send Me More Info
      </a>
      <p className="mt-4 text-sm text-muted">
        Opens WhatsApp with a pre-filled message to 07989 515576.
      </p>
    </section>
  );
}
