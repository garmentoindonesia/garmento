import HeroPKC from "@/components/sections/Layanan/produksi-kaos-custom/HeroPKC";
import TrustBarPKC from "@/components/sections/Layanan/produksi-kaos-custom/TrustBarPKC";
import ProductPKC from "@/components/sections/Layanan/produksi-kaos-custom/ProductPKC";
import MaterialPKC from "@/components/sections/Layanan/produksi-kaos-custom/MaterialPKC";
import TechniquePKC from "@/components/sections/Layanan/produksi-kaos-custom/TechniquePKC";
import ProcessPKC from "@/components/sections/Layanan/produksi-kaos-custom/ProcessPKC";
import PortfolioPKC from "@/components/sections/Layanan/produksi-kaos-custom/PortfolioPKC";
import HargaPKC from "@/components/sections/Layanan/produksi-kaos-custom/HargaPKC";
import FAQSection from "@/components/sections/Layanan/FAQSection";
import { FAQ_PKC } from "@/data/faq/pkc";
import CTAPKC from "@/components/sections/Layanan/produksi-kaos-custom/CTAPKC";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "Produksi Kaos Custom Skala Besar untuk Perusahaan & Event | GARMENTO",
    template: "%s | GARMENTO",
  },

  description:
    "Jasa produksi kaos custom skala besar untuk perusahaan, event, komunitas, dan instansi dengan kualitas premium, produksi terstruktur, dan tepat waktu.",

  alternates: {
    canonical: "/layanan/produksi-kaos-custom",
  },

  openGraph: {
    type: "website",
    url: "/layanan/produksi-kaos-custom",
    title:
      "Produksi Kaos Custom Skala Besar untuk Perusahaan & Event | GARMENTO",
    description:
      "Jasa produksi kaos custom skala besar untuk perusahaan, event, komunitas, dan instansi dengan kualitas premium, produksi terstruktur, dan tepat waktu.",
    siteName: "GARMENTO",
    images: [
      {
        url: "/og-image-pkc.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Produksi Kaos Custom Skala Besar untuk Perusahaan & Event | GARMENTO",
    description:
      "Jasa produksi kaos custom skala besar untuk perusahaan, event, komunitas, dan instansi dengan kualitas premium, produksi terstruktur, dan tepat waktu.",
    images: ["/og-image-pkc.jpg"],
  },
};

export default function ProduksiKaosCustomPage() {
  return (
    <main className="bg-white">
      <HeroPKC />
      <TrustBarPKC />
      <ProductPKC />
      <MaterialPKC />
      <TechniquePKC />
      <ProcessPKC />
      <PortfolioPKC />
      <HargaPKC />
      <FAQSection faqs={FAQ_PKC} />
      <CTAPKC />
    </main>
  );
}