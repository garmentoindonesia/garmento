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
          <a
            href="https://maps.app.goo.gl/zfrafA6HVQLBpx7m8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
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
                  group-hover:text-white
                  transition
                "
              >
                Jl. Bintaro Tengah Blok J4 No.12
                Bintaro Pesanggrahan,
                Jakarta Selatan
              </p>
            </div>
          </a>

          <a
            href="https://maps.app.goo.gl/jLiq3Eev19tLpshH6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
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
                  group-hover:text-white
                  transition
                "
              >
                Jl. Menayu Lor Plurugan No.112
                Tirtonirmolo Kasihan,
                Bantul, DIY
              </p>
            </div>
          </a>
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
          <p
            className="
              text-sm
              text-gray-400
            "
          >
            © 2026 GARMENTO. All rights reserved.
          </p>

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