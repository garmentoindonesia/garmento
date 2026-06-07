export default function HargaPKC() {
  const plans = [
    {
      title: "Kaos Polyester",
      price: "Rp60.000",
      button: "Konsultasi Polyester",
      featured: false,
      whatsapp:
        "Halo GARMENTO, saya ingin konsultasi produksi Kaos Polyester.",
      features: [
        "Minimal Order 36 Pcs",
        "Bahan Polyester",
        "Sablon Standard",
        "Ukuran XS–XL",
      ],
    },
    {
      title: "Kaos Cotton Combed",
      price: "Rp85.000",
      button: "Konsultasi Combed",
      featured: true,
      whatsapp:
        "Halo GARMENTO, saya ingin konsultasi produksi Kaos Cotton Combed.",
      features: [
        "Minimal Order 36 Pcs",
        "Bahan Cotton Combed",
        "Sablon High Quality",
        "Ukuran XS–XL",
      ],
    },
    {
      title: "Kaos Cotton Bamboo",
      price: "Rp95.000",
      button: "Konsultasi Bamboo",
      featured: false,
      whatsapp:
        "Halo GARMENTO, saya ingin konsultasi produksi Kaos Cotton Bamboo.",
      features: [
        "Minimal Order 36 Pcs",
        "Bahan Cotton Bamboo",
        "Finishing Premium",
        "Ukuran XS–XL",
      ],
    },
  ];

  return (
    <section
      id="pricingPKC"
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
      {/* noise texture */}
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="
              inline-flex
              items-center

              px-4 py-2
              rounded-full

              bg-[#315BFF]/15
              backdrop-blur-xl

              border border-white/10

              text-xs
              font-medium

              text-white
              shadow-[0_8px_32px_rgba(49,91,255,0.18)]
            "
          >
            Estimasi Harga
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
            Harga Produksi

            <span 
              className="
                bg-gradient-to-r
                from-[#20bd5c]
                to-[#315BFF]

                bg-clip-text
                text-transparent
              "
            >
            {" "}Kaos Custom
            </span>
          </h2>

          <p
            className="
              mt-5

              text-base md:text-lg

              text-white/70

              leading-relaxed
            "
          >
            Pilihan bahan terbaik dengan harga yang
            fleksibel sesuai kebutuhan perusahaan,
            event, instansi, maupun komunitas Anda.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-14

            grid
            lg:grid-cols-3

            gap-8
          "
        >
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`
                group

                relative
                overflow-hidden

                rounded-[32px]

                backdrop-blur-2xl

                border

                p-8

                transition-all
                duration-500

                hover:-translate-y-[4px]

                ${
                  plan.featured
                    ? `
                      bg-white/15
                      border-[#3B82F6]

                      shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                    `
                    : `
                      bg-white/8
                      border-white/10

                      hover:border-white/20
                    `
                }
              `}
            >
              {/* glow */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0

                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                {plan.featured && (
                  <div
                    className="
                      inline-flex

                      px-3 py-1.5

                      rounded-full

                      bg-[#2563EB]

                      text-xs
                      font-semibold

                      text-white
                    "
                  >
                    Terpopuler
                  </div>
                )}

                <h3
                  className="
                    mt-4

                    text-2xl

                    font-bold

                    text-white
                  "
                >
                  {plan.title}
                </h3>

                <div className="mt-6">
                  <div
                    className="
                      text-3xl md:text-4xl

                      font-extrabold

                      text-white
                    "
                  >
                    {plan.price}
                  </div>

                  <div
                    className="
                      mt-1

                      text-sm

                      text-white/60
                    "
                  >
                    / pcs
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3

                        text-white/80
                      "
                    >
                      <span className="text-[#60A5FA]">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281210004453?text=${encodeURIComponent(
                    plan.whatsapp
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    plan.featured
                      ? `
                        group/button

                        relative
                        overflow-hidden

                        mt-8

                        flex
                        items-center
                        justify-center

                        w-full

                        py-4

                        rounded-full

                        font-semibold

                        text-white

                        bg-gradient-to-r
                        from-[#2563EB]
                        to-[#1E40AF]

                        transition-all
                        duration-300

                        hover:scale-[1.02]
                        hover:shadow-[0_15px_40px_rgba(37,99,235,0.45)]
                      `
                      : `
                        group/button

                        relative
                        overflow-hidden

                        mt-8

                        flex
                        items-center
                        justify-center

                        w-full

                        py-4

                        rounded-full

                        font-semibold

                        transition-all
                        duration-300

                        bg-white/10

                        border
                        border-white/15

                        text-white

                        hover:bg-[#2563EB]/15
                        hover:border-[#60A5FA]/40

                        hover:text-white

                        hover:shadow-[0_10px_30px_rgba(37,99,235,0.25)]
                      `
                  }
                >
                  <span
                    className="
                      absolute
                      inset-0

                      bg-gradient-to-r
                      from-transparent
                      via-[#60A5FA]/20
                      to-transparent

                      translate-x-[-120%]

                      group-hover/button:translate-x-[120%]

                      transition-transform
                      duration-700
                    "
                  />

                  <span className="relative z-10">
                    {plan.button}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* note */}
        <div
          className="
            mt-12

            max-w-4xl
            mx-auto

            rounded-3xl

            bg-white/10
            backdrop-blur-xl

            border border-white/10

            p-6 md:p-8

            text-center
          "
        >
          <p
            className="
              text-white/80

              leading-relaxed
            "
          >
            Harga dapat berubah tergantung jumlah
            order, ukuran, teknik sablon/bordir, dan spesifikasi
            produk. Hubungi tim GARMENTO untuk mendapatkan
            penawaran yang sesuai kebutuhan Anda.
          </p>
        </div>
      </div>
    </section>
  );
}