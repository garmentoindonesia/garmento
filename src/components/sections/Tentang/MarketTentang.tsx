import Image from "next/image";

const targetMarket = [
  "Perusahaan & Corporate",
  "Instansi Pemerintah & Swasta",
  "Event Organizer",
  "Yayasan & Komunitas",
  "Agency & Vendor Pihak Ketiga",
];

export default function MarketTentang() {
  return (
    <section className="bg-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* TARGET MARKET */}
        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              text-[#1E4ED8]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-sm
            "
          >
            Target Market
          </p>

          <h2
            className="
              mt-4

              text-4xl
              md:text-5xl

              font-bold

              text-[#111827]

              leading-[1.15]
              tracking-[-0.5px]
            "
          >
            Siapa yang
            <span className="text-[#1E4ED8]">
              {" "}Kami Layani
            </span>
          </h2>

          <p
            className="
              mt-6

              text-lg

              text-gray-600

              leading-relaxed
            "
          >
            GARMENTO berfokus melayani kebutuhan apparel custom
            untuk organisasi yang membutuhkan kualitas konsisten,
            kapasitas besar, dan sistem produksi yang profesional.
          </p>

        </div>

        <div
          className="
            mt-14

            grid
            md:grid-cols-2
            xl:grid-cols-5

            gap-5
          "
        >

          {targetMarket.map((item, index) => (

            <div
              key={index}
              className="
                rounded-[28px]

                border
                border-[#1E4ED8]/10

                bg-gradient-to-br
                from-[#F8FAFF]
                to-white

                p-6

                text-center

                shadow-[0_15px_40px_rgba(0,0,0,0.05)]

                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(30,78,216,0.10)]

                transition-all
                duration-500
              "
            >

              <div
                className="
                  w-14 h-14

                  mx-auto

                  rounded-2xl

                  bg-[#1E4ED8]/10

                  flex
                  items-center
                  justify-center
                "
              >
                <Image
                  src="/clientbiru.svg"
                  alt={item}
                  width={28}
                  height={28}
                />
              </div>

              <p
                className="
                  mt-5

                  font-semibold

                  text-[#111827]

                  leading-relaxed
                "
              >
                {item}
              </p>

            </div>

          ))}

        </div>

        {/* LAYANAN */}
        <div className="mt-28">

          <div className="text-center max-w-3xl mx-auto">

            <p
              className="
                text-[#1E4ED8]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-sm
              "
            >
              Layanan Utama
            </p>

            <h2
              className="
                mt-4

                text-4xl
                md:text-5xl

                font-bold

                text-[#111827]

                leading-[1.15]
              "
            >
              Fokus Produk
              <span className="text-[#1E4ED8]">
                {" "}GARMENTO
              </span>
            </h2>

          </div>

          <div
            className="
              mt-14

              grid
              lg:grid-cols-2

              gap-6
            "
          >

            {/* KAOS */}
            <div
              className="
                rounded-[32px]

                border
                border-[#1E4ED8]/10

                bg-white

                p-6

                shadow-[0_15px_40px_rgba(0,0,0,0.05)]

                hover:-translate-y-2

                transition-all
                duration-500
              "
            >

              <div className="flex gap-5 items-center">

                <Image
                  src="/kaoscombed.jpg"
                  alt="Kaos Custom"
                  width={110}
                  height={110}
                  className="
                    w-24
                    h-24

                    rounded-2xl

                    object-cover
                  "
                />

                <div>

                  <p
                    className="
                      text-sm

                      uppercase

                      tracking-[0.15em]

                      text-[#1E4ED8]

                      font-semibold
                    "
                  >
                    Core Volume Product
                  </p>

                  <h3
                    className="
                      mt-2

                      text-2xl

                      font-bold

                      text-[#111827]
                    "
                  >
                    Kaos Custom
                  </h3>

                  <p
                    className="
                      mt-2

                      text-gray-600
                    "
                  >
                    Solusi apparel event,
                    campaign, komunitas,
                    dan kebutuhan produksi
                    volume besar.
                  </p>

                </div>

              </div>

            </div>

            {/* POLO */}
            <div
              className="
                rounded-[32px]

                border
                border-[#1E4ED8]/10

                bg-white

                p-6

                shadow-[0_15px_40px_rgba(0,0,0,0.05)]

                hover:-translate-y-2

                transition-all
                duration-500
              "
            >

              <div className="flex gap-5 items-center">

                <Image
                  src="/poloklasik.jpg"
                  alt="Polo Shirt"
                  width={110}
                  height={110}
                  className="
                    w-24
                    h-24

                    rounded-2xl

                    object-cover
                  "
                />

                <div>

                  <p
                    className="
                      text-sm

                      uppercase

                      tracking-[0.15em]

                      text-[#1E4ED8]

                      font-semibold
                    "
                  >
                    Core Branding Product
                  </p>

                  <h3
                    className="
                      mt-2

                      text-2xl

                      font-bold

                      text-[#111827]
                    "
                  >
                    Polo Shirt
                  </h3>

                  <p
                    className="
                      mt-2

                      text-gray-600
                    "
                  >
                    Apparel corporate
                    untuk kebutuhan branding,
                    seragam tim, dan
                    identitas perusahaan.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* POSITIONING */}
        <div className="mt-28">

          <div
            className="
              relative

              overflow-hidden

              rounded-[36px]

              bg-gradient-to-r
              from-[#113972]
              via-[#1E4ED8]
              to-[#113972]

              p-8
              md:p-12

              text-center

              shadow-[0_30px_80px_rgba(17,57,114,0.20)]
            "
          >

            <div
              className="
                w-20 h-20

                mx-auto

                rounded-full

                bg-white

                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/starbiru.svg"
                alt="Positioning"
                width={36}
                height={36}
              />
            </div>

            <p
              className="
                mt-8

                text-white/80

                uppercase

                tracking-[0.2em]

                text-sm

                font-semibold
              "
            >
              Positioning
            </p>

            <h3
              className="
                mt-4

                text-3xl
                md:text-5xl

                font-bold

                text-white

                leading-[1.2]
              "
            >
              Vendor Apparel Custom
              <br />
              Skala Besar yang Profesional
            </h3>

            <p
              className="
                mt-6

                text-lg

                text-white/85

                max-w-3xl

                mx-auto

                leading-relaxed
              "
            >
              GARMENTO diposisikan sebagai partner produksi apparel
              untuk corporate, instansi, event, dan brand yang
              membutuhkan kapasitas besar, kualitas konsisten,
              serta sistem operasional yang terukur.
            </p>

            <div
              className="
                mt-8

                inline-flex

                items-center

                rounded-full

                bg-white/15

                backdrop-blur-xl

                border
                border-white/20

                px-5
                py-3

                text-white

                font-semibold
              "
            >
              Bukan Konveksi Kecil
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}