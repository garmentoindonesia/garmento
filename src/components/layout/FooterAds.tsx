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
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ADDRESS ROW */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8

            pb-8

            border-b
            border-white/10
          "
        >
          {/* REP OFFICE */}
          <div className="flex items-start gap-3">
            <Image
              src="/map.svg"
              alt="Map"
              width={20}
              height={20}
              className="mt-1 shrink-0"
            />

            <div>
              <p className="text-sm font-medium text-white">
                Rep. Office PT Nusa Garment Indonesia
              </p>

              <p
                className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                "
              >
                Jl. Bintaro Tengah Blok J4 No.12
                Bintaro Pesanggrahan,
                Jakarta Selatan
              </p>
            </div>
          </div>

          {/* PRODUCTION CENTER */}
          <div className="flex items-start gap-3">
            <Image
              src="/map.svg"
              alt="Map"
              width={20}
              height={20}
              className="mt-1 shrink-0"
            />

            <div>
              <p className="text-sm font-medium text-white">
                Production Center
              </p>

              <p
                className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                "
              >
                Jl. Menayu Lor Plurugan No.112
                Tirtonirmolo Kasihan,
                Bantul, Daerah Istimewa Yogyakarta
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div
          className="
            pt-6

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-sm
              text-gray-400
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

      </div>
    </footer>
  );
}