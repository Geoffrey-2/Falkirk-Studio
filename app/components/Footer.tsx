export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted sm:px-8">
        <p>Contact Colin on 07989 515576 for more information.</p>
        <p className="mt-4">
          © {year} The Studio Falkirk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
