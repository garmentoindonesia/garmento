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
          lg:flex-row

          justify-between
          gap-8
        "
      >
        {/* LEFT SIDE - ADDRESSES */}
        <div className="flex flex-col gap-5 flex-1">

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
                Jl. Bintaro Tengah Blok J4 No.12 Bintaro
                Pesanggrahan, Jakarta Selatan
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
                Tirtonirmolo Kasihan, Bantul,
                Daerah Istimewa Yogyakarta
              </p>
            </div>
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            flex-col

            items-start
            lg:items-end

            gap-4

            pt-2
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-sm
              text-gray-400

              text-left
              lg:text-right
            "
          >
            © 2026 GARMENTO. All rights reserved.
          </p>

          {/* LEGAL LINKS */}
          <div
            className="
              flex
              flex-wrap
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