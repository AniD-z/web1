import type { Metadata, Viewport } from "next";
import "../app/styles/globals.css"; // Import global styles (excluding font)
import { Raleway } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway', // Define a CSS variable for the font family
});

export const metadata: Metadata = {
  title: "SNTLY",
  description: "Threaded sustainably always",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`} style={{ fontFamily: raleway.style.fontFamily }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}