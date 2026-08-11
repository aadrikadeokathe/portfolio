import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadrika Deokathe — Product & Technology",
  description:
    "Aadrika Deokathe — I build things, analyze what's broken, and make a case for fixing it. Product, technology, and strategy.",
  openGraph: {
    title: "Aadrika Deokathe — Product & Technology",
    description: "I build things, analyze what's broken, and make a case for fixing it.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
