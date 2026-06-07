import HeroPortfolio from "@/components/sections/Portofolio/HeroPortfolio";
import GridPortfolio from "@/components/sections/Portofolio/GridPortfolio";
import CTAPortfolio from "@/components/sections/Portofolio/CTAPortfolio";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default:
      "Portofolio Kaos Custom & Polo Shirt untuk Event atau Seragam | GARMENTO",
    template: "%s | GARMENTO",
  },

  description:
    "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",

  alternates: {
    canonical: "/portofolio",
  },

  openGraph: {
    type: "website",
    url: "/portofolio",
    title:
      "Portofolio Kaos Custom & Polo Shirt untuk Event atau Seragam | GARMENTO",
    description:
      "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
    siteName: "GARMENTO",
    images: [
      {
        url: "/og-image-porto.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Portofolio Kaos Custom & Polo Shirt untuk Event atau Seragam | GARMENTO",
    description:
      "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
    images: ["/og-image-porto.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <HeroPortfolio />
      <GridPortfolio />
      <CTAPortfolio />
      
    </>
  );
}