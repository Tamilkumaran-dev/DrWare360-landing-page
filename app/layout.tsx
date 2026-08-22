import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const title = "DrWare360 — Healthcare in Motion";
const description = "One connected platform for appointments, live queues, consultations, prescriptions, patient journeys and hospital operations.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/drware360-mark.svg",
    shortcut: "/drware360-mark.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "DrWare360 — Healthcare in motion" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
