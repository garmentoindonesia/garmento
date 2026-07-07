import Image from "next/image";

export default function Hero() {

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        pb-16 md:pb-20
      "
      style={{
        backgroundImage: "url('/backgroundberandax.jpg')",
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20 grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

        {/* LEFT */}
        <div className="animate-fadeLeft">

          <h1
            className="
              text-3xl md:text-5xl lg:text-6xl
              font-bold text-white
              leading-[1.15]
              tracking-[-0.5px]
              text-left
            "
          >

            Produksi Kaos Custom{" "}

            <span 
              className="
                bg-gradient-to-r
                from-[#20bd5c]
                to-[#315BFF]

                bg-clip-text
                text-transparent
              "
            >
              Skala Besar
            </span>{" "}

            untuk Event, Seragam & Merchandise

          </h1>

          <p
            className="
              mt-6 text-lg text-white/85
              leading-relaxed max-w-xl
              text-left
              mx-auto md:mx-0
            "
          >

            Melayani produksi kaos custom & polo shirt
            dengan kapasitas ratusan hingga ribuan pcs.
            Cocok untuk perusahaan, instansi, dan event organizer.

          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-col sm:flex-row">

            {/* PRIMARY */}
            <a
              href="https://wa.me/6281329269977"
              target="_blank"
              rel="noopener noreferrer"
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

              <span className="text-base">
                Konsultasi via WhatsApp
              </span>

              <Image
                src="/wa.svg"
                alt="WhatsApp"
                width={22}
                height={22}
                className="
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

            </a>

            {/* SECONDARY */}
            <a
              href="/portofolio"
              className="
                w-full sm:w-auto

                border border-white/20
                bg-white/10
                backdrop-blur-md

                text-white

                px-8 py-4

                rounded-2xl

                font-semibold

                flex items-center justify-center

                hover:bg-[#1E4ED8]
                hover:border-[#1E4ED8]
                hover:-translate-y-1
                hover:shadow-lg

                transition-all duration-300
              "
            >
              Lihat Portofolio
            </a>

          </div>

          {/* TRUST */}
          <div
            className="
              mt-10

              flex flex-col
              md:flex-row

              items-center
              md:items-start

              gap-3 md:gap-5

              text-[12px] md:text-sm
              text-white/80

              mx-auto md:mx-0
            "
          >

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-green-400">✔</span>
              Legalitas lengkap
            </div>

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-green-400">✔</span>
              Produksi cepat & terjadwal
            </div>

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-green-400">✔</span>
              Kualitas bahan premium
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative w-full flex items-center justify-center animate-fadeRight">

          <div className="relative w-full flex items-center justify-center group">

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#113972]/30 blur-3xl rounded-full opacity-50" />

            {/* IMAGE */}
            <Image
              src="/heroberandaNEW.png"
              alt="Produksi Kaos Garmento"
              width={700}
              height={700}
              priority
              className="
                relative z-10 w-full h-auto object-contain
                rounded-tr-[69px] rounded-br-[69px]
                transition-all duration-500 ease-out
                group-hover:-translate-y-3
                group-hover:scale-[1.02]
              "
            />

            {/* FLOATING CARD 1 */}
            <div
              className="
                hidden md:block

                absolute
                top-0
                left-0
                -translate-x-1/4
                -translate-y-1/4

                z-20

                bg-white/15
                backdrop-blur-xl

                border border-white/20

                shadow-[0_8px_32px_rgba(17,57,114,0.18)]

                rounded-2xl
                px-5 py-4

                animate-[float_4s_ease-in-out_infinite]
              "
            >

              <div className="flex items-center gap-3">

                <img
                  src="/clientwhite.svg"
                  alt="Client"
                  className="w-10 h-10"
                />

                <div>

                  <p
                    className="
                      font-bold text-white text-sm
                      [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]
                    "
                  >
                    Klien Perusahaan
                  </p>

                  <p
                    className="
                      text-white text-sm
                      [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]
                    "
                  >
                    Event & Instansi
                  </p>

                </div>

              </div>

            </div>

            {/* FLOATING CARD 2 */}
            <div
              className="
                hidden md:block

                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                translate-y-1/2

                z-20

                bg-white/15
                backdrop-blur-xl

                border border-white/20

                shadow-[0_8px_32px_rgba(17,57,114,0.18)]

                rounded-2xl
                px-5 py-4

                animate-[float_6s_ease-in-out_infinite]
              "
            >

              <div className="flex items-center gap-3">

                <img
                  src="/shirtwhite.svg"
                  alt="Shirt"
                  className="w-10 h-10"
                />

                <div>

                  <p
                    className="
                      font-bold text-white text-sm
                      [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]
                    "
                  >
                    1000+ pcs
                  </p>

                  <p
                    className="
                      text-white text-sm
                      [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]
                    "
                  >
                    Produksi per minggu
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}