import Image from "next/image";

const logos = [
  "adhi.png",
  "antam.png",
  "bankbri.png",
  "herbalife.png",
  "inalum.png",
  "mendeley.png",
  "oyo.png",
  "posindonesia.png",
  "shopee.png",
  "sucofindo.png",
  "sunlife.png",
  "superindo.png",
  "thiessindonesia.png",
  "wika.png",
];

export default function TrustBarPKC() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">

      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
            bg-white/15
            backdrop-blur-xl

            rounded-2xl md:rounded-3xl

            shadow-[0_20px_60px_rgba(0,0,0,0.35)]

            border border-white/5

            py-10 md:py-12

            overflow-hidden
          "
        >

          <p
            className="
              text-center

              text-xs md:text-sm

              font-semibold

              tracking-[0.3em]

              text-white/60

              uppercase

              mb-8
            "
          >
            Telah Dipercaya Oleh
          </p>

          <div className="relative overflow-hidden">

            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/10 via-white/5 to-transparent z-10" />

            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/10 via-white/5 to-transparent z-10" />

            <div className="flex w-max items-center animate-marquee">

              {[...Array(2)].map((_, trackIndex) => (

                <div
                  key={trackIndex}
                  className="flex gap-14 items-center px-8"
                >

                  {logos.map((logo, i) => (

                    <div
                      key={`${trackIndex}-${i}`}
                      className="min-w-[140px] flex justify-center"
                    >

                      <Image
                        src={`/${logo}`}
                        alt={logo}
                        width={120}
                        height={60}
                        className="
                          object-contain

                          brightness-0
                          opacity-50

                          transition-all duration-300

                          hover:opacity-100
                          hover:brightness-0
                          hover:sepia
                          hover:hue-rotate-[190deg]
                          hover:saturate-[600%]
                        "
                      />

                    </div>

                  ))}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}