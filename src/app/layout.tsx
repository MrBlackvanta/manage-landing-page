import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { siteUrl } from "@/app/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Manage | Project management for product teams";
const description =
  "Manage keeps software teams on their day-to-day tasks without losing sight of the wider company goals. Plan, track and report from one place.";
const shareCard = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Manage, project management for software teams",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Manage",
    locale: "en_US",
    type: "website",
    images: [shareCard],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareCard],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
