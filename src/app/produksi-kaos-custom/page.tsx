import NavbarAds from "@/components/layout/NavbarAds";
import FooterAds from "@/components/layout/FooterAds";

import HeroPKC from "@/components/sections/Layanan/produksi-kaos-custom/HeroPKC";
import TrustBarPKC from "@/components/sections/Layanan/produksi-kaos-custom/TrustBarPKC";
import ProductPKC from "@/components/sections/Layanan/produksi-kaos-custom/ProductPKC";
import MaterialPKC from "@/components/sections/Layanan/produksi-kaos-custom/MaterialPKC";
import TechniquePKC from "@/components/sections/Layanan/produksi-kaos-custom/TechniquePKC";
import ProcessPKC from "@/components/sections/Layanan/produksi-kaos-custom/ProcessPKC";
import PortfolioPKC from "@/components/sections/Layanan/produksi-kaos-custom/PortfolioPKC";
import HargaPKC from "@/components/sections/Layanan/produksi-kaos-custom/HargaPKC";
import FAQSection from "@/components/sections/Layanan/FAQSection";
import CTAPKC from "@/components/sections/Layanan/produksi-kaos-custom/CTAPKC";

import { FAQ_PKC } from "@/data/faq/pkc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "Produksi Kaos Custom Skala Besar untuk Perusahaan & Event | GARMENTO",
    template: "%s | GARMENTO",
  },
  description:
    "Produksi kaos custom skala besar untuk perusahaan, event, komunitas, dan instansi dengan kualitas terjamin dan pengerjaan tepat waktu.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function ProduksiKaosCustomAdsPage() {
  return (
    <>
      <NavbarAds />

      <main className="bg-white">

        <HeroPKC adsMode />

        <TrustBarPKC />

        <ProductPKC />

        <MaterialPKC />

        <TechniquePKC />

        <ProcessPKC />

        <PortfolioPKC adsMode />

        <HargaPKC />

        <FAQSection faqs={FAQ_PKC} />

        <CTAPKC />

      </main>

      <FooterAds />
    </>
  );
}