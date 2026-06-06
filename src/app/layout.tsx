import "@/styles/prose.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

/*
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://garmento.id"),

  title: {
    default: "GARMENTO - Produksi Kaos Skala Besar",
    template: "%s",
  },

  description:
    "Jasa produksi kaos custom, polo shirt, dan kaos partai skala besar untuk perusahaan, event, dan instansi.",

  icons: {
    icon: "/faviconnavy.png",
  },
};
*/

export const metadata = {
  title: "GARMENTO - Produksi Kaos Skala Besar",
  description:
    "Jasa produksi kaos custom, polo shirt, dan kaos partai skala besar untuk perusahaan, event, dan instansi.",
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
    <html lang="id">
      <body className={plusJakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}