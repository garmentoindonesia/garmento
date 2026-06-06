import HeroPKC from "@/components/sections/Layanan/produksi-kaos-custom/HeroPKC";
import TrustBarPKC from "@/components/sections/Layanan/produksi-kaos-custom/TrustBarPKC";
import ProductPKC from "@/components/sections/Layanan/produksi-kaos-custom/ProductPKC";
import MaterialPKC from "@/components/sections/Layanan/produksi-kaos-custom/MaterialPKC";
import TechniquePKC from "@/components/sections/Layanan/produksi-kaos-custom/TechniquePKC";
import ProcessPKC from "@/components/sections/Layanan/produksi-kaos-custom/ProcessPKC";
import PortfolioPKC from "@/components/sections/Layanan/produksi-kaos-custom/PortfolioPKC";
import HargaPKC from "@/components/sections/Layanan/produksi-kaos-custom/HargaPKC";
import FAQPKC from "@/components/sections/Layanan/produksi-kaos-custom/FAQPKC";
import CTAPKC from "@/components/sections/Layanan/produksi-kaos-custom/CTAPKC";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produksi Kaos Custom untuk Event & Seragam - GARMENTO",
  description:
    "Jasa produksi kaos custom berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
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
      <FAQPKC />
      <CTAPKC />

    </main>
  );
}