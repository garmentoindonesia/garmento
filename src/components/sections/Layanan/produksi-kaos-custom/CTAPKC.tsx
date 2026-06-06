import Image from "next/image";

export default function CTAPKC() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-20 md:py-24

        bg-gradient-to-r
        from-[#1E4ED8]
        to-[#0B0C0D]
      "
    >

      {/* GLOW */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#315BFF]/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div
          className="
            grid
            lg:grid-cols-2

            gap-14 lg:gap-16

            items-center
          "
        >

          {/* LEFT */}
          <div>

            <h2
              className="
                text-3xl md:text-5xl

                font-bold
                text-white

                leading-[1.15]
                tracking-[-0.5px]

                text-center
                lg:text-left
              "
            >
              Siap Produksi Kaos
              <br />
              Custom untuk
              <br />
              Kebutuhan Anda?
            </h2>

            <p
              className="
                mt-6

                text-lg
                leading-relaxed

                text-white/80

                text-center
                lg:text-left

                max-w-xl

                mx-auto
                lg:mx-0
              "
            >
              Konsultasikan kebutuhan produksi Anda sekarang.
            </p>

            {/* BUTTON */}
            <div className="mt-8 flex justify-center lg:justify-start">

              <a
                href="https://wa.me/6281210004453"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  inline-flex
                  items-center
                  gap-3

                  px-8 py-4

                  rounded-2xl

                  bg-white/10
                  backdrop-blur-xl

                  border border-white/20

                  hover:bg-white/15
                  hover:-translate-y-1

                  transition-all duration-300
                "
              >

                <Image
                  src="/wahijau2.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="font-semibold text-[#25D366]">
                  Konsultasi via WhatsApp
                </span>

              </a>

            </div>

            {/* CHECKLIST */}
            <div
              className="
                mt-6

                flex
                flex-col
                md:flex-row

                items-center
                lg:items-start

                justify-center
                lg:justify-start

                gap-3 md:gap-6

                text-sm
                text-white/80
              "
            >

              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[#25D366]">✔</span>
                Respon Cepat
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[#25D366]">✔</span>
                Konsultasi Gratis
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[#25D366]">✔</span>
                Pengiriman Seluruh Indonesia
              </div>

            </div>

          </div>

          {/* RIGHT DESKTOP */}
          <div
            className="
              hidden lg:flex

              justify-center
              items-center

              relative
            "
          >

            <div
              className="
                absolute

                w-[420px]
                h-[420px]

                bg-white/10

                blur-3xl

                rounded-full
              "
            />

            <Image
              src="/kaoscta.png"
              alt="Produksi Kaos Custom Garmento"
              width={1536}
              height={1024}
              className="
                relative z-10

                w-full
                max-w-[680px]

                h-auto

                object-contain
              "
            />

          </div>

          {/* MOBILE IMAGE */}
          <div className="lg:hidden flex justify-center">

            <Image
              src="/kaoscta.png"
              alt="Produksi Kaos Custom Garmento"
              width={1536}
              height={1024}
              className="
                w-full
                max-w-[460px]

                h-auto

                object-contain
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}