import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — управляющая компания гостиничного бизнеса`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "управляющая компания гостиниц",
    "управление гостиницей",
    "управление доходностью",
    "revenue management",
    "гостиничный бизнес Санкт-Петербург",
    "передать гостиницу в управление",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — управляющая компания гостиничного бизнеса`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-graphite antialiased">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
