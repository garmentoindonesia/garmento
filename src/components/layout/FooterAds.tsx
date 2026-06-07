import Image from "next/image";
import Link from "next/link";

export default function FooterAds() {
  return (
    <footer
      className="
        bg-[#0B0C0D]
        border-t
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-8

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-4
        "
      >
        
        {/* ADDRESSES */}
        <a href="https://maps.app.goo.gl/zfrafA6HVQLBpx7m8" className="flex items-start gap-3 group">
          <Image src="/map.svg" alt="Map" width={20} height={20} />
            <div>
              <p className="text-sm text-white">Rep. Office PT Nusa Garment Indonesia</p>
              <p className="text-sm text-gray-300 group-hover:text-white transition">
                Jl. Bintaro Tengah Blok J4 No.12 Bintaro Pesanggrahan, Jakarta Selatan
              </p>
            </div>
        </a>

        <a href="https://maps.app.goo.gl/jLiq3Eev19tLpshH6" className="flex items-start gap-3 group">
          <Image src="/map.svg" alt="Map" width={20} height={20} />
            <div>
              <p className="text-sm text-white">Production Center</p>
              <p className="text-sm text-gray-300 group-hover:text-white transition">
                 Jl. Menayu Lor Plurugan No.112 Tirtonirmolo Kasihan, Bantul, Daerah Istimewa Yogyakarta
              </p>
            </div>
        </a>

        {/* COPYRIGHT */}
        <p
          className="
            text-sm
            text-gray-400
            text-center
            md:text-left
          "
        >
          © 2026 GARMENTO. All rights reserved.
        </p>

        {/* LEGAL LINKS */}
        <div
          className="
            flex
            items-center

            gap-5

            text-sm
          "
        >
          <Link
            href="/privacy-policy"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}