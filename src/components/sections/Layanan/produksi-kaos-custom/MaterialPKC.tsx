import Image from "next/image";

const materials = [
  {
    image: "/24s.jpg",
    title: "Combed 24s",
    desc: "Lembut, adem, dan menyerap keringat.",
  },
  {
    image: "/30s.jpg",
    title: "Combed 30s",
    desc: "Lebih halus dengan ketebalan pas.",
  },
  {
    image: "/bamboo.jpg",
    title: "Cotton Bamboo",
    desc: "Premium, lembut, dan ramah lingkungan.",
  },
  {
    image: "/lacoste.jpg",
    title: "Lacoste CVC",
    desc: "Bertekstur unik, kuat dan tidak mudah kusut.",
  },
];

export default function MaterialPKC() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div
          className="
            grid
            lg:grid-cols-[1.2fr_2.2fr]
            gap-10 lg:gap-8
            items-center
          "
        >

          {/* LEFT */}
          <div>

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
              Pilihan Bahan
            </div>

            <h2
              className="
                mt-6

                text-3xl md:text-5xl

                font-bold
                text-white

                leading-[1.15]
                tracking-[-0.5px]
              "
            >
              Bahan Berkualitas,

              <br />

              <span className="text-[#1E4ED8]">
                Nyaman & Tahan Lama
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4

              gap-5
            "
          >

            {materials.map((item) => (

              <div
                key={item.title}
                className="
                  group

                  relative
                  overflow-hidden

                  rounded-3xl

                  min-h-[280px]

                  border border-white/10

                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                "
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute inset-0

                    bg-gradient-to-t
                    from-black/90
                    via-black/25
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0

                    p-6
                  "
                >

                  <h3
                    className="
                      text-2xl

                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm

                      leading-relaxed

                      text-white/80
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}