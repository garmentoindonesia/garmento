import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: "/layanancard1.jpg",
    title: "Produksi Kaos Custom",
    desc: "Kaos sablon custom untuk event, komunitas, promosi, dan kebutuhan perusahaan.",
    tags: ["Sablon Plastisol", "DTG", "DTF", "Rubber"],
    href: "/layanan/produksi-kaos-custom",
  },
  {
    image: "/layanancard2.jpg",
    title: "Produksi Polo Shirt",
    desc: "Polo shirt bordir custom untuk seragam perusahaan, instansi, kantor, dan organisasi.",
    tags: ["Bordir Komputer", "Lacoste", "PE", "TC"],
    href: "/layanan/produksi-polo-shirt",
  },
  
];

export default function Services() {
  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-[#113972] leading-tight">
            Layanan Produksi Kami
          </h2>

          <h2
              className="
                text-xl md:text-3xl
                font-bold text-[#1E4ED8]
                leading-[1.15]
                tracking-[-0.4px]

                text-center md:text-left
              "
          >
            Solusi produksi apparel untuk berbagai kebutuhan bisnis
            dan event Anda.
          </h2>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white border border-gray-200 rounded-2xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(17,57,114,0.08)]
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden group">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={320}
                  className="
                    w-full h-[220px] object-cover
                    transition-all duration-500 ease-out
                    group-hover:scale-[1.03]
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-[#113972] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        px-3 py-1 rounded-full
                        bg-blue-50 text-[#1E4ED8]
                        text-xs font-medium
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* CTA */}
                <Link
                    href={item.href}
                    className="
                        mt-6 text-[#1E4ED8] text-sm font-semibold
                        inline-flex items-center gap-2
                        hover:gap-3 transition-all
                    "
                >
                    Lihat Detail & Harga
                    <span>→</span>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}