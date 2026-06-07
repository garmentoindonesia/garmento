import "@/styles/prose.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garmento.id"),

  title: {
    default: "GARMENTO | Produksi Kaos Skala Besar",
    template: "%s | GARMENTO",
  },

  description:
    "Jasa produksi kaos custom & polo shirt skala besar untuk perusahaan, event, dan instansi di Indonesia.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.garmento.id",
    title: "GARMENTO | Produksi Kaos Skala Besar",
    description:
      "Jasa produksi kaos custom & polo shirt skala besar untuk perusahaan, event, dan instansi di Indonesia.",
    siteName: "GARMENTO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GARMENTO | Produksi Kaos Skala Besar",
    description:
      "Jasa produksi kaos custom & polo shirt skala besar untuk perusahaan, event, dan instansi di Indonesia.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/faviconnavy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}