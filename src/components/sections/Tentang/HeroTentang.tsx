import Image from "next/image";

export default function HeroTentang() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/backgroundtentang.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div
          className="
            min-h-screen

            flex
            items-center

            py-32
            md:py-40
          "
        >

          <div className="max-w-4xl animate-fadeLeft">

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                bg-[#315BFF]/15
                backdrop-blur-xl

                border
                border-white/15

                px-4
                py-2

                rounded-full

                text-white
                text-xs
                font-medium

                shadow-[0_8px_32px_rgba(49,91,255,0.18)]
              "
            >
              <span>Tentang GARMENTO</span>
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-6

                text-4xl
                md:text-6xl
                lg:text-7xl

                font-bold

                text-white

                leading-[1.1]
                tracking-[-1px]
              "
            >
              Partner Produksi Apparel

              <br />

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
              </span>

              {" "}untuk Corporate,

              <br />

              Event, dan Brand
            </h1>

            {/* DESC */}
            <p
              className="
                mt-8

                max-w-2xl

                text-lg
                md:text-xl

                text-white/85

                leading-relaxed
              "
            >
              GARMENTO adalah perusahaan jasa produksi apparel custom
              yang berfokus pada kebutuhan corporate, instansi,
              event organizer, dan brand dengan sistem produksi
              yang terukur, kapasitas besar, serta standar kualitas
              yang konsisten.
            </p>

            {/* TRUST POINT */}
            <div
              className="
                mt-8

                flex
                flex-col
                md:flex-row

                gap-4
                md:gap-8

                text-white/85
                text-sm
              "
            >

              <div className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Produksi Skala Besar
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Quality Control Ketat
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Vendor Corporate
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">

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
                <span>
                  Konsultasi via WhatsApp
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

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}