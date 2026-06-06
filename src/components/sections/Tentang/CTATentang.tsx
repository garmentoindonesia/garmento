import Image from "next/image";

export default function CTATentang() {
  return (
    <section
      className="
        relative

        overflow-hidden

        bg-gradient-to-br
        from-[#0D2A57]
        via-[#0B0C0D]
        to-[#1E4ED8]

        py-24
        md:py-32
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[350px]

          bg-[#1E4ED8]/20

          blur-[120px]

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <p
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
          Siap Bekerja Sama?
        </p>

        <h2
          className="
            mt-5

            text-4xl
            md:text-6xl

            font-bold

            text-white

            leading-[1.15]

            tracking-[-0.5px]
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
            untuk Kebutuhan Skala Besar
          </span>
        </h2>

        <p
          className="
            mt-8

            text-lg
            md:text-xl

            text-white/75

            leading-relaxed

            max-w-3xl

            mx-auto
          "
        >
          Dari kebutuhan event, corporate,
          instansi, hingga branding jangka panjang,
          GARMENTO siap membantu proses produksi apparel
          dengan kapasitas besar, kualitas terjaga,
          dan timeline yang terukur.
        </p>

        <div
          className="
            mt-12

            flex
            flex-col
            sm:flex-row

            justify-center

            gap-4
          "
        >

          {/* WA */}
          <a
            href="https://wa.me/6281210004453"
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

              shadow-[0_10px_40px_rgba(37,211,102,0.25)]

              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(37,211,102,0.35)]

              transition-all
              duration-300
            "
          >

            <span>Konsultasi via WhatsApp</span>

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

          {/* PORTOFOLIO */}
          <a
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
          </a>

        </div>

        <div
          className="
            mt-10

            text-sm

            text-white/50
          "
        >
          Office Representative Jakarta • Production Center Yogyakarta
        </div>

      </div>

    </section>
  );
}