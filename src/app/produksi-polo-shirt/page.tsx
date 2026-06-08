import NavbarAds from "@/components/layout/NavbarAds";
import FooterAds from "@/components/layout/FooterAds";

import HeroPPS from "@/components/sections/Layanan/produksi-polo-shirt/HeroPPS";
import TrustBarPPS from "@/components/sections/Layanan/produksi-polo-shirt/TrustBarPPS";
import ProductPPS from "@/components/sections/Layanan/produksi-polo-shirt/ProductPPS";
import MaterialPPS from "@/components/sections/Layanan/produksi-polo-shirt/MaterialPPS";
import TechniquePPS from "@/components/sections/Layanan/produksi-polo-shirt/TechniquePPS";
import ProcessPPS from "@/components/sections/Layanan/produksi-polo-shirt/ProcessPPS";
import PortfolioPPS from "@/components/sections/Layanan/produksi-polo-shirt/PortfolioPPS";
import HargaPPS from "@/components/sections/Layanan/produksi-polo-shirt/HargaPPS";
import FAQSection from "@/components/sections/Layanan/FAQSection";
import CTAPPS from "@/components/sections/Layanan/produksi-polo-shirt/CTAPPS";

import { FAQ_PKC } from "@/data/faq/pkc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produksi Polo Shirt | GARMENTO",
  description:
    "Produksi polo shirt custom skala besar untuk perusahaan, event, komunitas, dan instansi dengan kualitas terjamin dan pengerjaan tepat waktu.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function ProduksiPoloShirtAdsPage() {
  return (
    <>
      <NavbarAds />

      <main className="bg-white">

        <HeroPPS adsMode />

        <TrustBarPPS />

        <ProductPPS />

        <MaterialPPS />

        <TechniquePPS />

        <ProcessPPS />

        <PortfolioPPS adsMode />

        <HargaPPS />

        <FAQSection faqs={FAQ_PKC} />

        <CTAPPS />

      </main>

      <FooterAds />
    </>
  );
}