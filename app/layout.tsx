import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Studio Falkirk — Bright, Flexible Commercial Studio To Let",
  description:
    "Approx. 100m² (1,076 sq ft) first-floor open-plan studio to let at 30 Vicar Street, Falkirk. £750 per calendar month. Ideal for fitness, wellbeing, and creative businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
