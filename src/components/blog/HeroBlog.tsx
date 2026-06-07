import Image from "next/image";

export default function HeroBlog() {
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
        backgroundImage: "url('/backgroundblog.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="
          relative z-10

          max-w-7xl
          mx-auto

          px-6

          pt-36
          pb-24

          grid
          lg:grid-cols-2

          gap-12
          lg:gap-20

          items-center
        "
      >
        {/* LEFT */}
        <div>

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-white/15

              bg-[#315BFF]/15

              backdrop-blur-xl

              px-4
              py-2

              text-white

              text-xs
              font-medium

              shadow-[0_8px_32px_rgba(49,91,255,0.18)]
            "
          >
            Blog GARMENTO
          </div>

          <h1
            className="
              mt-6

              text-4xl
              md:text-6xl

              font-bold

              text-white

              leading-[1.1]
              tracking-[-1px]
            "
          >
            Insight Seputar
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
              Produksi Apparel
            </span>

            <br />

            untuk Corporate,
            Event & Brand
          </h1>

          <p
            className="
              mt-6

              text-lg

              text-white/80

              leading-relaxed

              max-w-xl
            "
          >
            Pelajari berbagai tips, panduan, dan insight
            seputar produksi kaos custom, polo shirt,
            sablon, bordir, hingga strategi memilih vendor
            apparel untuk kebutuhan perusahaan dan event.
          </p>

          {/* CTA */}
          <div className="mt-8">

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
              Konsultasi via WhatsApp

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

        {/* RIGHT */}
        <div
          className="
            relative

            flex
            justify-center
            items-center
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute

              w-[450px]
              h-[450px]

              rounded-full

              bg-[#315BFF]/20

              blur-[120px]
            "
          />

          <Image
            src="/blog/heroblog.jpg"
            alt="Blog Garmento"
            width={700}
            height={700}
            priority
            className="
                relative
                z-10

                w-full
                h-auto

                object-contain

                rounded-[13px]

                drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]
            "
          />
        </div>

      </div>
    </section>
  );
}