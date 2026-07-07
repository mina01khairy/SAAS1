import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/lib/fontawesome";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SupportFlow AI — Intelligent Customer Support Platform",
  description:
    "AI-powered ticketing, knowledge base, and customer support automation for modern teams.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${inter.variable} font-inter antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
