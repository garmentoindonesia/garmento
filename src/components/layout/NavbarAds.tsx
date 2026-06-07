"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavbarAds() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#113972]/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-[72px] sm:h-[88px] flex items-center justify-between">

          {/* LOGO (NO LINK) */}
          <div className="flex items-center">
            <Image
              src="/logoheadernavy.png"
              alt="GARMENTO"
              width={160}
              height={60}
              priority
              className="w-[120px] sm:w-[160px] h-auto"
            />
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/6281329269977"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center

              px-3 sm:px-5
              py-2 sm:py-2.5

              rounded-lg sm:rounded-xl

              bg-[#113972]
              text-white
              text-xs sm:text-sm
              font-medium

              transition-all duration-300

              hover:-translate-y-0.5
              hover:shadow-lg

              whitespace-nowrap
            "
          >
            Konsultasi Sekarang
          </a>

        </div>
      </div>
    </header>
  );
}