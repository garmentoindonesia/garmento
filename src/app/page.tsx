import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Beranda/Hero";
import TrustBar from "@/components/sections/Beranda/TrustBar";
import Pain from "@/components/sections/Beranda/Pain";
import Solution from "@/components/sections/Beranda/Solution";
import Services from "@/components/sections/Beranda/Services";
import SocialProof from "@/components/sections/Beranda/SocialProof";
import Process from "@/components/sections/Beranda/Process";
import PricingAnchor from "@/components/sections/Beranda/PricingAnchor";
import Portfolio from "@/components/sections/Beranda/Portfolio";
import CTA from "@/components/sections/Beranda/CTA";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Pain />
      <Solution />
      <Services />
      <SocialProof />
      <Process />
      <PricingAnchor />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}