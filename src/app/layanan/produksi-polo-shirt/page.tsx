import HeroPPS from "@/components/sections/Layanan/produksi-polo-shirt/HeroPPS";
import TrustBarPPS from "@/components/sections/Layanan/produksi-polo-shirt/TrustBarPPS";
import ProductPPS from "@/components/sections/Layanan/produksi-polo-shirt/ProductPPS";
import MaterialPPS from "@/components/sections/Layanan/produksi-polo-shirt/MaterialPPS";
import TechniquePPS from "@/components/sections/Layanan/produksi-polo-shirt/TechniquePPS";
import ProcessPPS from "@/components/sections/Layanan/produksi-polo-shirt/ProcessPPS";
import PortfolioPPS from "@/components/sections/Layanan/produksi-polo-shirt/PortfolioPPS";
import HargaPPS from "@/components/sections/Layanan/produksi-polo-shirt/HargaPPS";
import FAQPPS from "@/components/sections/Layanan/produksi-polo-shirt/FAQPPS";
import CTAPPS from "@/components/sections/Layanan/produksi-polo-shirt/CTAPPS";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produksi Polo Shirt untuk Seragam & Brand Berkualitas - GARMENTO",
  description:
    "Jasa produksi polo shirt berkualitas premium untuk perusahaan, event, komunitas, brand dan instansi dengan proses produksi terstruktur dan tepat waktu.",
};

export default function ProduksiPoloShirtPage() {
  return (
    <main className="bg-white">

      <HeroPPS />
      <TrustBarPPS />
      <ProductPPS />
      <MaterialPPS />
      <TechniquePPS />
      <ProcessPPS />
      <PortfolioPPS />
      <HargaPPS />
      <FAQPPS />
      <CTAPPS />
      
    </main>
  );
}