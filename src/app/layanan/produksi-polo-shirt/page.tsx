import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroPPS from "@/components/sections/Layanan/produksi-polo-shirt/HeroPPS";
import TrustBarPPS from "@/components/sections/Layanan/produksi-polo-shirt/TrustBarPPS";
import ProductPPS from "@/components/sections/Layanan/produksi-polo-shirt/ProductPPS";
import MaterialPPS from "@/components/sections/Layanan/produksi-polo-shirt/MaterialPPS";
import TechniquePPS from "@/components/sections/Layanan/produksi-polo-shirt/TechniquePPS";
import ProcessPPS from "@/components/sections/Layanan/produksi-polo-shirt/ProcessPPS";
import PortfolioPPS from "@/components/sections/Layanan/produksi-polo-shirt/PortfolioPPS";
import HargaPPS from "@/components/sections/Layanan/produksi-polo-shirt/HargaPPS";
import FAQSection from "@/components/sections/Layanan/FAQSection";
import { FAQ_PPS } from "@/data/faq/pps";
import CTAPPS from "@/components/sections/Layanan/produksi-polo-shirt/CTAPPS";

import { createFAQSchema } from "@/lib/schema/faq";
import { createServiceSchema } from "@/lib/schema/service";

import { createBreadcrumbSchema } from "@/lib/schema/breadcrumb";

import type { Metadata } from "next";

const faqSchema = createFAQSchema(FAQ_PPS);

const serviceSchema = createServiceSchema({
  name: "Produksi Polo Shirt",
  description:
    "Jasa produksi polo shirt berkualitas premium untuk perusahaan, komunitas, event dan instansi.",

  url: "https://www.garmento.id/layanan/produksi-polo-shirt",
});

const breadcrumbSchema = createBreadcrumbSchema([
  {
    name: "Home",
    url: "https://www.garmento.id",
  },
  {
    name: "Layanan",
    url: "https://www.garmento.id/layanan",
  },
  {
    name: "Produksi Polo Shirt",
    url: "https://www.garmento.id/layanan/produksi-polo-shirt",
  },
]);

export const metadata: Metadata = {
  title: {
    default:
      "Produksi Polo Shirt untuk Seragam & Brand Berkualitas | GARMENTO",
    template: "%s | GARMENTO",
  },

  description:
    "Jasa produksi polo shirt berkualitas premium untuk perusahaan, event, komunitas, brand dan instansi dengan proses produksi terstruktur dan tepat waktu.",

  alternates: {
    canonical: "/layanan/produksi-polo-shirt",
  },

  openGraph: {
    type: "website",
    url: "/layanan/produksi-polo-shirt",
    title:
      "Produksi Polo Shirt untuk Seragam & Brand Berkualitas | GARMENTO",
    description:
      "Jasa produksi polo shirt berkualitas premium untuk perusahaan, event, komunitas, brand dan instansi dengan proses produksi terstruktur dan tepat waktu.",
    siteName: "GARMENTO",
    images: [
      {
        url: "/og-image-pps.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Produksi Polo Shirt untuk Seragam & Brand Berkualitas | GARMENTO",
    description:
      "Jasa produksi polo shirt berkualitas premium untuk perusahaan, event, komunitas, brand dan instansi dengan proses produksi terstruktur dan tepat waktu.",
    images: ["/og-image-pps.jpg"],
  },
};

export default function ProduksiPoloShirtPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroPPS />
      <TrustBarPPS />
      <ProductPPS />
      <MaterialPPS />
      <TechniquePPS />
      <ProcessPPS />
      <PortfolioPPS />
      <HargaPPS />
      <FAQSection faqs={FAQ_PPS} />
      <CTAPPS />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

    </main>
  );
}