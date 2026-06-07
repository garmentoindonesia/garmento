import Image from "next/image";

export default function HeroPortfolio() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/backgroundporto.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div
        className="
          relative z-10

          max-w-7xl
          mx-auto

          px-6

          pt-36
          pb-24
        "
      >
        <div className="max-w-2xl">

          {/* Badge */}
          <div>
            <p
              className="
                text-[#2196F3]
                text-sm
                font-semibold
                uppercase
                tracking-wide
              "
            >
              PORTOFOLIO
            </p>

            <div className="w-20 h-[2px] bg-[#1E4ED8] mt-3" />
          </div>

          {/* Title */}
          <h1
            className="
              mt-6

              text-4xl
              md:text-6xl

              font-bold
              text-white

              leading-[1.05]
              tracking-[-1px]
            "
          >
            Hasil Produksi
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#FF7A00]
                to-[#315BFF]

                bg-clip-text
                text-transparent
              "
            >
              GARMENTO
            </span>
          </h1>

          {/* Desc */}
          <p
            className="
              mt-8

              max-w-xl

              text-lg
              leading-relaxed

              text-white/80
            "
          >
            Setiap project adalah bukti komitmen kami
            menghadirkan produk berkualitas untuk brand,
            komunitas, perusahaan, dan event.
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/6281329269977"
            target="_blank"
            rel="noopener noreferrer"
            className="
                group

                mt-10

                w-full sm:w-auto

                inline-flex
                items-center
                justify-center
                gap-3

                px-8
                py-4

                rounded-2xl

                text-center

                text-white
                font-semibold

                border border-[#315BFF]/40

                bg-[#0E1117]/80
                backdrop-blur-xl

                shadow-[0_0_35px_rgba(49,91,255,0.45)]

                hover:-translate-y-1
                hover:shadow-[0_0_55px_rgba(49,91,255,0.65)]

                transition-all
                duration-300
            "
          >
            <Image
              src="/wa.svg"
              alt="WhatsApp"
              width={22}
              height={22}
            />

            <span>Lihat Project</span>
          </a>

          {/* USP */}
          <div
            className="
              mt-16

              grid
              md:grid-cols-3

              gap-8
            "
          >
            <div className="flex gap-3">
              <Image
                src="/qualitybiru.svg"
                alt="Kualitas Terjamin"
                width={42}
                height={42}
              />

              <div>
                <h3 className="font-semibold text-white">
                  Kualitas Terjamin
                </h3>

                <p className="text-sm text-white/70 mt-1">
                  Bahan pilihan,
                  jahitan rapi
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Image
                src="/clockbiru.svg"
                alt="Tepat Waktu"
                width={42}
                height={42}
              />

              <div>
                <h3 className="font-semibold text-white">
                  Tepat Waktu
                </h3>

                <p className="text-sm text-white/70 mt-1">
                  Produksi sesuai
                  deadline
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Image
                src="/custombiru.svg"
                alt="Custom"
                width={42}
                height={42}
              />

              <div>
                <h3 className="font-semibold text-white">
                  Custom Sesuai
                  Kebutuhan
                </h3>

                <p className="text-sm text-white/70 mt-1">
                  Desain, bahan,
                  & teknik
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}