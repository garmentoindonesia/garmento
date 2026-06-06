import HeroTentang from "@/components/sections/Tentang/HeroTentang";
import ProfileTentang from "@/components/sections/Tentang/ProfileTentang";
import VisiMisiTentang from "@/components/sections/Tentang/VisiMisiTentang";
import KeunggulanTentang from "@/components/sections/Tentang/KeunggulanTentang";
import RoadmapTentang from "@/components/sections/Tentang/RoadmapTentang";
import MarketTentang from "@/components/sections/Tentang/MarketTentang";
import CTATentang from "@/components/sections/Tentang/CTATentang";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang GARMENTO - Produksi Kaos Skala Besar untuk Corporate & Event",
  description:
    "Jasa produksi kaos custom dan polo shirt berkualitas premium untuk perusahaan, event, komunitas, dan instansi dengan proses produksi terstruktur dan tepat waktu.",
};

export default function TentangPage() {
  return (
    <>
      <HeroTentang />
      <ProfileTentang />
      <VisiMisiTentang />
      <KeunggulanTentang />
      <RoadmapTentang />
      <MarketTentang />
      <CTATentang />
    </>
  );
}