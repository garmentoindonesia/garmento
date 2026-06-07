import Image from "next/image";
import Link from "next/link";

export default function CTAArtikel() {
  return (
    <section className="relative overflow-hidden bg-[#0B0C0D] py-24 md:py-32">

      {/* GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2

          w-[700px]
          h-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#1E4ED8]/15

          blur-[140px]
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span
          className="
            inline-flex
            items-center

            px-4 py-2

            rounded-full

            border border-white/10

            bg-white/5

            backdrop-blur-xl

            text-white/80
            text-sm
            font-medium
          "
        >
          PRODUKSI APPAREL SKALA BESAR
        </span>

        <h2
          className="
            mt-8

            text-4xl
            md:text-6xl

            font-bold

            text-white

            leading-[1.1]
            tracking-[-1px]
          "
        >
          Butuh Vendor Apparel
          <br />
          untuk Event atau Corporate?
        </h2>

        <p
          className="
            mt-6

            max-w-2xl
            mx-auto

            text-lg
            md:text-xl

            text-white/70

            leading-relaxed
          "
        >
          Diskusikan kebutuhan produksi kaos custom,
          polo shirt corporate, atau apparel event
          bersama tim GARMENTO.
        </p>

        <div
          className="
            mt-10

            flex
            flex-col
            sm:flex-row

            justify-center

            gap-4
          "
        >
          <Link
            href="https://wa.me/6281329269977"
            target="_blank"
            className="
                group
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3

                bg-[#25D366]
                hover:bg-[#20bd5c]

                text-white
                font-semibold

                px-8 py-4

                rounded-2xl

                shadow-lg shadow-green-500/20
                hover:-translate-y-1
                hover:shadow-xl

                transition-all duration-300
              "
          >
            <Image
              src="/wa.svg"
              alt="WhatsApp"
              width={22}
              height={22}
            />

            Konsultasi via WhatsApp
          </Link>

          <Link
            href="/portofolio"
            className="
              inline-flex
              items-center
              justify-center

              px-8
              py-4

              rounded-2xl

              border
              border-white/15

              bg-white/5

              backdrop-blur-xl

              text-white

              font-semibold

              hover:bg-[#1E4ED8]
              hover:border-[#1E4ED8]

              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            Lihat Portofolio
          </Link>
        </div>

      </div>
    </section>
  );
}