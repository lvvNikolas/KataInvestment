import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/metadata";

import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/buttons.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kata.example"),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  icons: {
    // основное
    icon: [
      { url: "/favicon.ico" },                             // fallback
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg", type: "image/svg+xml" },     // если есть
    ],
    // iOS homescreen
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // некоторые браузеры учитывают это как «shortcut icon»
    shortcut: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}