import Image from "next/image";

export default function VisiMisiTentang() {
  return (
    <section
    className="
        relative
        overflow-hidden

        py-20 md:py-24

        bg-gradient-to-br
        from-[#0D2A57]
        via-[#0B0C0D]
        to-[#1E4ED8]
      "
    >
    
    {/* NOISE */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          pointer-events-none
          bg-[url('/noise.png')]
          mix-blend-soft-light
        "
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <div
              className="
                inline-flex
                items-center

                px-4 py-2
                rounded-full

                bg-white/10
                backdrop-blur-xl

                border border-white/10

                text-xs
                font-medium

                text-white
              "
            >
              Visi Misi
            </div>

          <h2
            className="
              mt-4

              text-4xl
              md:text-5xl

              font-bold

              text-white

              leading-[1.15]
              tracking-[-0.5px]
            "
          >
            Arah dan Komitmen
            <span className="text-[#1E4ED8]">
              {" "}GARMENTO
            </span>
          </h2>

          <p
            className="
              mt-6

              text-lg

              text-white

              leading-relaxed
            "
          >
            Kami membangun GARMENTO bukan hanya sebagai vendor apparel,
            tetapi sebagai partner produksi jangka panjang untuk
            perusahaan, instansi, event, dan brand di Indonesia.
          </p>

        </div>

        {/* CARD */}
        <div
          className="
            mt-10

            grid
            md:grid-cols-2

            gap-8
          "
        >

          {/* VISI */}
          <div
            className="
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/8
              backdrop-blur-2xl

              p-8
              md:p-10

              shadow-[0_20px_60px_rgba(0,0,0,0.06)]

              hover:-translate-y-2
              hover:border-white/20
              hover:shadow-[0_15px_40px_rgba(37,99,235,0.45)]

              transition-all
              duration-500
            "
          >

            {/* ICON */}
            <div
              className="
                w-16 h-16

                rounded-2xl

                bg-[#1E4ED8]/8

                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/targetbiru.svg"
                alt="Visi"
                width={32}
                height={32}
              />
            </div>

            <h3
              className="
                mt-6

                text-3xl

                font-bold

                text-white
              "
            >
              Visi
            </h3>

            <p
              className="
                mt-6

                text-lg

                text-white/80

                leading-relaxed
              "
            >
              Menjadi market leader jasa produksi apparel custom
              di Indonesia, dimulai dari dominasi pasar Jakarta
              dan ekspansi ke seluruh Pulau Jawa.
            </p>

          </div>

          {/* MISI */}
          <div
            className="
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/8
              backdrop-blur-2xl

              p-8
              md:p-10

              shadow-[0_20px_60px_rgba(0,0,0,0.06)]

              hover:-translate-y-2
              hover:border-white/20
              hover:shadow-[0_15px_40px_rgba(37,99,235,0.45)]

              transition-all
              duration-500
            "
          >

            {/* ICON */}
            <div
              className="
                w-16 h-16

                rounded-2xl

                bg-[#1E4ED8]/8

                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/rocketbiru.svg"
                alt="Misi"
                width={32}
                height={32}
              />
            </div>

            <h3
              className="
                mt-6

                text-3xl

                font-bold

                text-white
              "
            >
              Misi
            </h3>

            <ul
              className="
                mt-6

                space-y-4

                text-white/80
                leading-relaxed
              "
            >

              <li className="flex gap-3">
                <span className="text-white font-bold">
                  •
                </span>
                <span>
                  Menyediakan solusi produksi apparel skala besar
                  yang profesional dan terpercaya.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-white font-bold">
                  •
                </span>
                <span>
                  Menjadi partner utama corporate dan event organizer.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-white font-bold">
                  •
                </span>
                <span>
                  Membangun sistem distribusi dan marketing
                  di seluruh kota besar Pulau Jawa.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-white font-bold">
                  •
                </span>
                <span>
                  Menjaga standar kualitas produksi yang konsisten
                  dalam skala besar.
                </span>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}