import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroTentang from "@/components/sections/Tentang/HeroTentang";
import ProfileTentang from "@/components/sections/Tentang/ProfileTentang";
import VisiMisiTentang from "@/components/sections/Tentang/VisiMisiTentang";
import KeunggulanTentang from "@/components/sections/Tentang/KeunggulanTentang";
import RoadmapTentang from "@/components/sections/Tentang/RoadmapTentang";
import MarketTentang from "@/components/sections/Tentang/MarketTentang";
import CTATentang from "@/components/sections/Tentang/CTATentang";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default:
      "Tentang GARMENTO | Produksi Kaos Skala Besar untuk Corporate & Event",
    template: "%s | GARMENTO",
  },

  description:
    "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",

  alternates: {
    canonical: "/tentang",
  },

  openGraph: {
    type: "website",
    url: "/tentang",
    title:
      "Tentang GARMENTO | Produksi Kaos Skala Besar untuk Corporate & Event",
    description:
      "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
    siteName: "GARMENTO",
    images: [
      {
        url: "/og-image-tentang.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tentang GARMENTO | Produksi Kaos Skala Besar untuk Corporate & Event",
    description:
      "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
    images: ["/og-image-tentang.jpg"],
  },
};

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <HeroTentang />
      <ProfileTentang />
      <VisiMisiTentang />
      <KeunggulanTentang />
      <RoadmapTentang />
      <MarketTentang />
      <CTATentang />
      <Footer />
    </>
  );
}