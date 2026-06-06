import Image from "next/image";

const products = [
  {
    image: "/poloklasik.jpg",
    title: "Polo Shirt Standard",
    desc: "Model klasik cocok, untuk kebutuhan kantor & event.",
  },
  {
    image: "/polomodern.jpg",
    title: "Polo Shirt Kerah Kontras",
    desc: "Kombinasi warna kerah untuk tampilan lebih stylish.",
  },
  {
    image: "/poloraglan.jpg",
    title: "Polo Shirt Raglan",
    desc: "Desain sporty memberikan kesan dinamis dan modern.",
  },
  {
    image: "/polokantor.jpg",
    title: "Polo Shirt kantor",
    desc: "Tampilan formal, elegan & profesional.",
  },
  {
    image: "/polopanjang.jpg",
    title: "Polo Shirt Lengan Panjang",
    desc: "Nyaman untuk aktivitas luar ruangan dan seragam kerja.",
  },
];

export default function ProductPPS() {
  return (
    <section className="py-20 md:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              text-sm
              font-semibold
              text-[#1E4ED8]
              mb-3
            "
          >
            Pilihan Model
          </p>

          <h2
            className="
              text-3xl md:text-5xl

              font-bold

              text-[#113972]

              leading-[1.15]
              tracking-[-0.5px]
            "
          >
            Berbagai Model Polo Shirt

            <br />

            <span className="text-[#1E4ED8]">
              Sesuai Kebutuhan Anda
            </span>
          </h2>

        </div>

        {/* CARD GRID */}
        <div
          className="
            mt-14

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5

            gap-6
          "
        >

          {products.map((item) => (

            <div
              key={item.title}
              className="
                group

                bg-white

                rounded-3xl

                border border-gray-100

                shadow-[0_10px_40px_rgba(17,57,114,0.06)]

                overflow-hidden

                transition-all duration-300

                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(17,57,114,0.12)]
              "
            >

              <div className="p-5">

                <div
                  className="
                    relative

                    aspect-square

                    rounded-2xl

                    overflow-hidden

                    bg-[#F8FAFC]
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover

                      transition-transform duration-500

                      group-hover:scale-105
                    "
                  />

                </div>

                <div className="mt-5">

                  <h3
                    className="
                      text-lg

                      font-bold

                      text-[#113972]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm

                      leading-relaxed

                      text-gray-500
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}