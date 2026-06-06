import Image from "next/image";

export default function ProfileTentang() {
  return (
    <section className="bg-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="relative">

            <div className="grid grid-cols-2 gap-5">

              {/* FOTO BESAR */}
              <div className="col-span-2">
                <div
                  className="
                    overflow-hidden
                    rounded-[32px]
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  <Image
                    src="/kantor1.jpg"
                    alt="Kantor Garmento"
                    width={1200}
                    height={700}
                    className="
                      w-full
                      h-[320px]
                      md:h-[380px]
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />
                </div>
              </div>

              {/* FOTO 2 */}
              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <Image
                  src="/jahit.jpg"
                  alt="Produksi Jahit"
                  width={600}
                  height={600}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* FOTO 3 */}
              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <Image
                  src="/sablon.jpg"
                  alt="Produksi Sablon"
                  width={600}
                  height={600}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />
              </div>


              {/* FOTO BESAR BAWAH */}
              <div className="col-span-2">

                <div
                  className="
                    overflow-hidden
                    rounded-[32px]
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  <Image
                    src="/kantor2.jpg"
                    alt="Fasilitas Garmento"
                    width={1200}
                    height={700}
                    className="
                      w-full
                      h-[220px]
                      md:h-[260px]

                      object-cover

                      hover:scale-105

                      transition-transform
                      duration-700
                    "
                  />
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p
              className="
                text-[#1E4ED8]
                font-semibold

                uppercase
                tracking-[0.15em]

                text-sm
              "
            >
              Tentang Kami
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
              Produksi Apparel
              <span className="text-[#1E4ED8]">
                {" "}Skala Besar{" "}
              </span>
              
              dengan Sistem yang Terukur
            </h2>

            <div
              className="
                mt-8

                space-y-5

                text-gray-600
                leading-relaxed

                text-lg
              "
            >
              <p>
                <strong className="text-[#111827]">
                  GARMENTO
                </strong>{" "}
                adalah apparel manufacturing partner di bawah <br /> PT Nusa Garment Indonesia
                yang menghadirkan solusi produksi apparel custom untuk corporate,
                instansi, event, dan brand. Dengan kapasitas produksi skala besar
                serta sistem kerja yang profesional, GARMENTO membantu klien
                mewujudkan produk apparel yang berkualitas, konsisten, dan tepat waktu.
              </p>

              <p>
                Dengan fasilitas produksi di Yogyakarta dan representasi office
                di Jakarta, kami menggabungkan kecepatan produksi, kontrol kualitas
                yang ketat, serta sistem operasional yang scalable untuk melayani
                order ratusan hingga ribuan pcs secara konsisten.
              </p>

              <p>
                Kami tidak hanya memproduksi kaos custom, tetapi juga menyediakan
                berbagai solusi apparel seperti polo shirt corporate untuk
                mendukung kebutuhan branding jangka panjang perusahaan,
                organisasi, dan institusi.
              </p>

            </div>

            {/* INFO CARD */}
            <div
              className="
                mt-10

                grid
                sm:grid-cols-2

                gap-4
              "
            >

              {/* OFFICE */}
              <div
                className="
                  p-6

                  rounded-[28px]

                  border
                  border-[#1E4ED8]/10

                  bg-[#F8FAFF]

                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14 h-14

                    rounded-2xl

                    bg-[#1E4ED8]/10

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Image
                    src="/mapbiru.svg"
                    alt="Office"
                    width={28}
                    height={28}
                  />
                </div>

                <p
                  className="
                    mt-4

                    text-sm
                    text-gray-500
                  "
                >
                  Representative Office
                </p>

                <p
                  className="
                    mt-1

                    text-m

                    text-[#111827]
                  "
                >
                  PT Nusa Garment Indonesia <br /> Jl. Bintaro Tengah Blok J4 No.12 Bintaro Pesanggrahan, Jakarta Selatan
                </p>

              </div>

              {/* PRODUKSI */}
              <div
                className="
                  p-6

                  rounded-[28px]

                  border
                  border-[#1E4ED8]/10

                  bg-[#F8FAFF]

                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14 h-14

                    rounded-2xl

                    bg-[#1E4ED8]/10

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Image
                    src="/pabrikbiru.svg"
                    alt="Produksi"
                    width={28}
                    height={28}
                  />
                </div>

                <p
                  className="
                    mt-4

                    text-sm
                    text-gray-500
                  "
                >
                  Production Center
                </p>

                <p
                  className="
                    mt-1

                    text-m

                    text-[#111827]
                  "
                >
                  Jl. Menayu Lor Plurugan No.112 Tirtonirmolo Kasihan, Bantul, Daerah Istimewa Yogyakarta
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}