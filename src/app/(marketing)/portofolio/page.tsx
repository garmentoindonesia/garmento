import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroPortfolio from "@/components/sections/Portofolio/HeroPortfolio";
import GridPortfolio from "@/components/sections/Portofolio/GridPortfolio";
import CTAPortfolio from "@/components/sections/Portofolio/CTAPortfolio";

import { createPortfolioSchema } from "@/lib/schema/portfolio";
import { createBreadcrumbSchema } from "@/lib/schema/breadcrumb";

import type { Metadata } from "next";



const portfolioSchema = createPortfolioSchema();

const breadcrumbSchema = createBreadcrumbSchema([
  {
    name: "Home",
    url: "https://www.garmento.id",
  },
  {
    name: "Portofolio",
    url: "https://www.garmento.id/portofolio",
  },
]);

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
      <Navbar />
      <HeroPortfolio />
      <GridPortfolio />
      <CTAPortfolio />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

    </>
  );
}