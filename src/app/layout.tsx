import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEMMIC — AmanorX Logistics Sector",
  description:
    "LEMMIC is AmanorX's planned logistics-sector company — positioned to bring evaluation, management, a verified freight Marketplace, and disciplined investment to Pakistan's road-freight industry.",
  metadataBase: new URL("https://lemmic.vercel.app"),
  openGraph: {
    title: "LEMMIC — AmanorX Logistics Sector",
    description:
      "LEMMIC is AmanorX's planned logistics-sector company — positioned to bring evaluation, management, a verified freight Marketplace, and disciplined investment to Pakistan's road-freight industry.",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEMMIC — AmanorX Logistics Sector",
    description:
      "LEMMIC is AmanorX's planned logistics-sector company — positioned to bring evaluation, management, a verified freight Marketplace, and disciplined investment to Pakistan's road-freight industry.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-[var(--font-geist-sans)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}