import Image from "next/image";

const techniques = [
  {
    image: "/plastisol.jpg",
    title: "Sablon Plastisol",
    desc: "Tahan lama, warna solid dan tidak mudah pudar.",
  },
  {
    image: "/dtf.jpg",
    title: "Sablon DTF",
    desc: "Detail tajam, gradasi warna bebas, dan fleksibel.",
  },
  {
    image: "/polyflex.jpg",
    title: "Sablon Polyflex",
    desc: "Warna mencolok, cocok untuk desain simpel.",
  },
  {
    image: "/rubber.jpg",
    title: "Sablon Rubber",
    desc: "Tebal, timbul, dan memiliki kesan premium.",
  },
  {
    image: "/bordir.jpg",
    title: "Bordir Komputer",
    desc: "Jahitan rapi, detail presisi, dan terlihat eksklusif.",
  },
];

export default function TechniquePKC() {
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
            Teknik Sablon & Bordir
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
            Hasil Tajam dan

            <br />

            <span className="text-[#1E4ED8]">
              Tidak Mudah Pudar
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

            {techniques.map((item) => (

                <div
                key={item.title}
                className="
                    bg-white

                    rounded-3xl

                    border border-gray-100

                    overflow-hidden

                    shadow-[0_10px_40px_rgba(17,57,114,0.06)]

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_20px_60px_rgba(17,57,114,0.12)]
                "
                >

                <div
                    className="
                    relative

                    aspect-[1200/630]

                    overflow-hidden
                    "
                >

                    <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                        object-cover

                        transition-transform duration-500

                        hover:scale-105
                    "
                    />

                </div>

                <div className="p-5">

                    <h3
                    className="
                        text-xl
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

            ))}

            </div>

      </div>

    </section>
  );
}