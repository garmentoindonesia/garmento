import HeroPortfolio from "@/components/sections/Portofolio/HeroPortfolio";
import GridPortfolio from "@/components/sections/Portofolio/GridPortfolio";
import CTAPortfolio from "@/components/sections/Portofolio/CTAPortfolio";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Kaos Custom & Polo Shirt untuk Event atau Seragam - GARMENTO",
  description:
    "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
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