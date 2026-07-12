import "@/styles/prose.css";
import "./globals.css";


import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

import { organizationSchema } from "@/lib/schema/organization";
import { localBusinessSchema } from "@/lib/schema/localBusiness";

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
    "Vendor kaos custom & polo shirt skala besar untuk Event, Seragam Kantor & Merchandise dengan kualitas terjamin dan ketepatan waktu mutlak.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.garmento.id",
    title: "GARMENTO | Produksi Kaos Skala Besar",
    description:
      "Vendor kaos custom & polo shirt skala besar untuk Event, Seragam Kantor & Merchandise dengan kualitas terjamin dan ketepatan waktu mutlak.",
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
      "Vendor kaos custom & polo shirt skala besar untuk Event, Seragam Kantor & Merchandise dengan kualitas terjamin dan ketepatan waktu mutlak.",
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
        
        {children}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}