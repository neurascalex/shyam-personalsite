import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shyam Pitla - Founder · Strategic Advisor · Operator",
  description:
    "Helping clinicians become the voice of their field. Building platforms, media and AI that turn clinical expertise into public authority.",
  keywords: [
    "Shyam Pitla",
    "HR Digital Media",
    "The Impact Show",
    "NeuraScaleX",
    "Clinical Authority",
    "Health Tech",
    "Medical Marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
