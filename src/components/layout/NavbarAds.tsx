"use client";

import Image from "next/image";

export default function NavbarAds() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        bg-white/90
        backdrop-blur-xl

        border-b
        border-[#113972]/10

        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-[88px] flex items-center justify-between">

          {/* LOGO (TIDAK KE BERANDA) */}
          <div className="flex items-center">

            <Image
              src="/logoheadernavy.png"
              alt="GARMENTO"
              width={170}
              height={70}
              priority
            />

          </div>

          {/* CTA */}
          <a
            href="https://wa.me/6281329269977"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center

              px-5
              py-2.5

              rounded-xl

              bg-[#113972]

              text-white
              text-sm
              font-medium

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Konsultasi Sekarang
          </a>

        </div>

      </div>
    </header>
  );
}