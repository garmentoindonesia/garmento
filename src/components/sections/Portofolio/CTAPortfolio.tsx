import Image from "next/image";

export default function CTAPortfolio() {
  return (
    <section 
    className="
      bg-gradient-to-br
        from-[#0D2A57]
        via-[#0B0C0D]
        to-[#1E4ED8] 
      py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative

            overflow-hidden

            rounded-[32px]

            bg-white/8
            backdrop-blur-2xl

            border border-white/10

            px-8
            md:px-16

            py-14
            md:py-20
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute

              -top-24
              -right-24

              w-72
              h-72

              rounded-full

              bg-[#315BFF]/30

              blur-[120px]
            "
          />

          <div
            className="
              absolute

              -bottom-24
              -left-24

              w-72
              h-72

              rounded-full

              bg-[#315BFF]/20

              blur-[120px]
            "
          />

          <div className="relative z-10">

            {/* BADGE */}
            <div
              className="
                inline-flex

                items-center

                px-4
                py-2

                rounded-full

                bg-[#315BFF]/15

                border border-white/10

                text-white/80
                text-sm
                shadow-[0_8px_32px_rgba(49,91,255,0.18)]
              "
            >
              Siap Memulai Produksi?
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-6

                text-3xl
                md:text-5xl

                font-bold

                text-white

                leading-tight

                max-w-4xl
              "
            >
              Wujudkan
              <span
                className="
                  bg-gradient-to-r
                  from-[#20bd5c]
                  to-[#315BFF]

                  bg-clip-text
                  text-transparent
                "
              >
              {" "}Kaos & Polo Shirt{" "}  
              </span>
              <span
                className="
                  bg-gradient-to-r
                  from-[#20bd5c]
                  to-[#315BFF]

                  bg-clip-text
                  text-transparent
                "
              >
              {" "}Berkualitas{" "}  
              </span>
              untuk Brand, Event, dan Perusahaan Anda
            </h2>

            {/* DESC */}
            <p
              className="
                mt-6

                max-w-2xl

                text-white/75

                text-lg

                leading-relaxed
              "
            >
              Konsultasikan kebutuhan produksi Anda
              bersama tim GARMENTO. Mulai dari pemilihan
              bahan, teknik sablon atau bordir,
              hingga estimasi biaya dan waktu produksi.
            </p>

            {/* CTA */}
            <div
              className="
                mt-10

                flex

                flex-col
                sm:flex-row

                gap-4
              "
            >

              <a
                href="https://wa.me/6281329269977"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-3

                  px-8
                  py-4

                  rounded-2xl

                  bg-[#25D366]

                  text-white
                  font-semibold

                  shadow-lg
                  shadow-green-500/20

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all
                  duration-300
                "
              >
                <span>
                  WhatsApp Sekarang
                </span>

                <Image
                  src="/wa.svg"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                  className="
                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />
              </a>

              <a
                href="/layanan/produksi-kaos-custom/#pricingPKC"
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
                Lihat Estimasi Harga Kaos
              </a>

              <a
                href="/layanan/produksi-polo-shirt/#pricingPPS"
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
                Lihat Estimasi Harga Polo
              </a>

            </div>

            {/* TRUST */}
            <div
              className="
                mt-10

                flex
                flex-wrap

                gap-x-8
                gap-y-3

                text-sm

                text-white/70
              "
            >
              <span>✔ Produksi Skala Besar</span>
              <span>✔ Kualitas Terjamin</span>
              <span>✔ Tepat Waktu</span>
              <span>✔ Konsultasi Gratis</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}