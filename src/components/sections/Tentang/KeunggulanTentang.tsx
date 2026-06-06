import Image from "next/image";

const keunggulan = [
  {
    icon: "/boxbiru.svg",
    title: "Kapasitas Produksi Besar",
    description:
      "Mampu menangani kebutuhan produksi ratusan hingga ribuan pcs untuk corporate, event, instansi, dan brand secara konsisten.",
  },
  {
    icon: "/systembiru.svg",
    title: "Sistem Produksi Terpusat",
    description:
      "Seluruh proses produksi dikelola dalam sistem yang terukur sehingga kualitas lebih stabil dan mudah dikontrol.",
  },
  {
    icon: "/clockbiru.svg",
    title: "Timeline Jelas & Terukur",
    description:
      "Setiap project memiliki alur produksi yang terencana untuk membantu menjaga ketepatan waktu pengiriman.",
  },
  {
    icon: "/clientbiru.svg",
    title: "Cocok untuk Repeat Order",
    description:
      "Menjadi pilihan tepat bagi perusahaan yang membutuhkan vendor apparel jangka panjang dengan kualitas yang konsisten.",
  },
  {
    icon: "/shakebiru.svg",
    title: "Partner B2B Jangka Panjang",
    description:
      "Bukan sekadar vendor produksi, GARMENTO siap menjadi partner apparel untuk kebutuhan branding dan operasional perusahaan.",
  },
  {
    icon: "/qualitybiru.svg",
    title: "Standar Kualitas Konsisten",
    description:
        "Setiap pesanan melewati proses quality control untuk memastikan hasil produksi tetap rapi, presisi, dan sesuai standar meskipun dalam volume besar.",
  },
];

export default function KeunggulanTentang() {
  return (
    <section className="bg-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
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
            Keunggulan GARMENTO
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
            Dibangun untuk Kebutuhan
            <span className="text-[#1E4ED8]">
              {" "}Produksi Skala Besar
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
            GARMENTO dirancang untuk membantu perusahaan,
            instansi, event organizer, dan brand mendapatkan
            partner produksi apparel yang profesional,
            terukur, dan siap berkembang bersama.
          </p>

        </div>

        {/* GRID */}
        <div
          className="
            mt-16

            grid
            md:grid-cols-2
            xl:grid-cols-3

            gap-6
          "
        >

          {keunggulan.map((item, index) => (

            <div
              key={index}
              className="
                group

                rounded-[32px]

                border
                border-[#1E4ED8]/10

                bg-gradient-to-br
                from-[#F8FAFF]
                to-white

                p-8

                shadow-[0_20px_60px_rgba(0,0,0,0.06)]

                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(30,78,216,0.12)]

                transition-all
                duration-500
              "
            >

              {/* ICON */}
              <div
                className="
                  w-16 h-16

                  rounded-2xl

                  bg-[#1E4ED8]/10

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300

                  group-hover:scale-110
                "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-6

                  text-2xl

                  font-bold

                  text-[#111827]

                  leading-snug
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  mt-4

                  text-gray-600

                  leading-relaxed
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}