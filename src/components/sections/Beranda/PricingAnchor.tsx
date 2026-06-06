import Image from "next/image";

export default function PricingAnchor() {
  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-20 bg-gray-50 overflow-hidden"
    >

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADER */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#113972] leading-tight">
          Estimasi Harga Produksi Kaos
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          Harga menyesuaikan untuk berbagai jumlah, dan detail desain.
        </p>

        {/* PRICE */}
        <div className="mt-8">

          <p className="text-[#113972] text-lg font-medium">
            Mulai dari
          </p>

          <div className="mt-2 text-[#1E4ED8] text-2xl sm:text-4xl md:text-6xl font-bold tracking-[-1px] leading-tight">
            Rp60.000 – Rp155.000

            <span className="text-[#113972] text-lg sm:text-2xl md:text-4xl">
              {" "} / pcs
            </span>
          </div>

          <p className="mt-3 text-gray-500 text-sm md:text-base">
            (Untuk jumlah besar)
          </p>

        </div>

        {/* FEATURES */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

          {/* ITEM 1 */}
          <div className="flex items-center gap-3">

            <Image
              src="/pricetag.svg"
              alt="Harga Kompetitif"
              width={24}
              height={24}
            />

            <span className="text-gray-700 font-medium">
              Harga Kompetitif
            </span>

          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-3">

            <Image
              src="/thumb.svg"
              alt="Kualitas Terjamin"
              width={24}
              height={24}
            />

            <span className="text-gray-700 font-medium">
              Kualitas Terjamin
            </span>

          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-3">

            <Image
              src="/fireclock.svg"
              alt="Tepat Waktu"
              width={24}
              height={24}
            />

            <span className="text-gray-700 font-medium">
              Tepat Waktu
            </span>

          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-10">

          <a
            href="https://wa.me/6281210004453"
            target="_blank"
            rel="noopener noreferrer"
            className="
                group
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3

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

            <span className="text-lg">
              Penawaran Harga
            </span>

            <Image
              src="/wa.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />

          </a>

          {/* FREE INFO */}
          <div className="mt-5 flex items-center justify-center gap-2">

            <Image
              src="/free.svg"
              alt="Gratis"
              width={20}
              height={20}
            />

            <p className="text-gray-600 text-sm md:text-base">
              Gratis konsultasi & penawaran
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}