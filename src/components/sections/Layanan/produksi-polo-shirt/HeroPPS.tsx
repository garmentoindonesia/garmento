import Image from "next/image";

type HeroPPSProps = {
  adsMode?: boolean;
};

export default function HeroPPS({
  adsMode = false,
}: HeroPPSProps) {
return (
<section
className="
relative
w-full
overflow-hidden
bg-cover
bg-center
bg-no-repeat
pb-16 md
"
style={{
backgroundImage: "url('/backgroundPPS.jpg')",
}}
>
{/* OVERLAY */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-36 pb-20 grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

    {/* LEFT */}
    <div className="animate-fadeLeft">

      {/* BADGE */}
      <div className="flex justify-start">
        <div
          className="
              inline-flex items-center gap-2

              bg-[#315BFF]/15
              backdrop-blur-xl

              border border-white/15

              px-4 py-2
              rounded-full

              text-white
              text-xs font-medium

              shadow-[0_8px_32px_rgba(49,91,255,0.18)]
          "
        >
          <Image
            src="/bintang.svg"
            alt="Bintang"
            width={16}
            height={16}
          />

          <span>Layanan Produksi Polo Shirt</span>
        </div>
      </div>
      
      <h1
        className="
            mt-6

            text-3xl md:text-5xl lg:text-6xl

            font-bold text-white

            leading-[1.15]
            tracking-[-0.5px]

            text-left
        "
      >
        Produksi Polo Shirt Kualitas

        <span 
          className="
            bg-gradient-to-r
            from-[#20bd5c]
            to-[#315BFF]

            bg-clip-text
            text-transparent
          "
        >
          {" "}Premium,
        </span>

        <br />

        untuk Seragam & Brand
      </h1>

      <p
        className="
          mt-6 text-lg text-white/85
          leading-relaxed max-w-xl

          text-left

          mx-0
        "
      >
        Polo shirt custom dengan bahan pilihan, jahitan rapi,
        dan finishing mendetail. Nyaman dipakai dan tampil profesional
        untuk perusahaan, event, komunitas, hingga brand.
      </p>

      {/* TRUST POINT */}
      <div
        className="
          mt-8

          flex flex-col
          md:flex-row

          items-center
          md:items-start

          gap-3 md:gap-6

          text-[12px] md:text-sm
          text-white/80

          mx-auto md:mx-0
        "
      >
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="text-green-400">✔</span>
          Kualitas Premium
        </div>

        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="text-green-400">✔</span>
          Tepat Waktu
        </div>

        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="text-green-400">✔</span>
          Minimum Order Fleksibel
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex gap-4 flex-col sm:flex-row">

        <a
          href="https://wa.me/6281329269977"
          target="_blank"
          rel="noopener noreferrer"
          data-event="wa-hero"
          className="
            group
            w-full sm:w-auto

            inline-flex
            items-center
            justify-center
            gap-3

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

        {!adsMode && (
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
        )}

      </div>

      {/* MINI SOCIAL PROOF */}
      <div
        className="
            mt-8

            flex flex-col sm:flex-row
            items-center

            gap-3

            justify-center md:justify-start
        "
      >
        <Image
          src="/profpictPPS.png"
          alt="Client Garmento"
          width={170}
          height={42}
          className="h-auto w-auto"
        />

        <p className="text-sm text-white/80">
          1000+ Klien puas dari berbagai industri
        </p>
      </div>

    </div>

    {/* RIGHT */}
    <div className="relative w-full flex items-center justify-center animate-fadeRight">

      <div className="relative w-full flex items-center justify-center group">

        {/* GLOW */}
        <div className="absolute inset-0 bg-[#113972]/30 blur-3xl rounded-full opacity-50" />

        {/* IMAGE */}
        <Image
          src="/heroPPS.png"
          alt="Produksi Polo Shirt Garmento"
          width={700}
          height={700}
          priority
          className="
            relative z-10
            w-full h-auto
            object-contain

            transition-all duration-500 ease-out

            group-hover:-translate-y-3
            group-hover:scale-[1.02]
          "
        />

        {/* FLOATING CARD CLIENT */}
        <div
          className="
            hidden md:block

            absolute
            top-6
            right-0

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

            <div
              className="
                w-12 h-12

                rounded-xl

                bg-[#315BFF]/30
                backdrop-blur-md

                flex items-center justify-center
              "
            >
              <img
                src="/clientwhite.svg"
                alt="Client"
                className="w-6 h-6"
              />
            </div>

            <div>

              <p
                className="
                  font-bold text-white text-xl

                  [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]
                "
              >
                1000+
              </p>

              <p
                className="
                  text-white text-sm

                  [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]
                "
              >
                Klien Perusahaan
                <br />
                Event & Instansi
              </p>

            </div>

          </div>
        </div>

        {/* FLOATING CARD PRODUKSI */}
        <div
          className="
            hidden md:block

            absolute
            bottom-16
            right-4

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

            <div
              className="
                w-12 h-12

                rounded-xl

                bg-[#315BFF]/30
                backdrop-blur-md

                flex items-center justify-center
              "
            >
              <img
                src="/shirtwhite.svg"
                alt="Shirt"
                className="w-6 h-6"
              />
            </div>

            <div>

              <p
                className="
                  font-bold text-white text-xl

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