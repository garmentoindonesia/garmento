import Image from "next/image";

export default function Pain() {
  return (
    <section className="w-full pt-28 md:pt-32 pb-16 md:pb-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">

          {/* TITLE */}
          <h2
            className="
              text-2xl md:text-4xl
              font-bold text-[#113972]
              leading-[1.2] tracking-[-0.5px]

              text-center md:text-left
            "
          >
            Produksi Kaos Skala Besar
            <br />
            
            <span className="text-[#1E4ED8]">
              Tidak Bisa Asal Pilih Vendor
            </span>

          </h2>

          {/* POINTS */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">

            {/* ITEM 1 */}
            <div className="text-center md:text-left">

              <div className="flex justify-center md:justify-start">
                <Image
                  src="/timelinemolor.svg"
                  alt="Timeline Molor"
                  width={48}
                  height={48}
                />
              </div>

              <h3 className="mt-3 font-semibold text-gray-900">
                Timeline Molor
              </h3>

              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Keterlambatan produksi bisa mengganggu event
                dan aktivitas perusahaan.
              </p>

            </div>

            {/* ITEM 2 */}
            <div className="text-center md:text-left">

              <div className="flex justify-center md:justify-start">
                <Image
                  src="/notquality.svg"
                  alt="Kualitas Tidak Konsisten"
                  width={48}
                  height={48}
                />
              </div>

              <h3 className="mt-3 font-semibold text-gray-900">
                Kualitas Tidak Konsisten
              </h3>

              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Kualitas buruk menurunkan citra brand
                dan kepuasan tim.
              </p>

            </div>

            {/* ITEM 3 */}
            <div className="text-center md:text-left">

              <div className="flex justify-center md:justify-start">
                <Image
                  src="/notready.svg"
                  alt="Vendor Tidak Siap"
                  width={48}
                  height={48}
                />
              </div>

              <h3 className="mt-3 font-semibold text-gray-900">
                Vendor Tidak Siap Volume Besar
              </h3>

              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Banyak vendor tidak punya kapasitas
                & sistem produksi besar.
              </p>

            </div>

          </div>

          {/* ALERT BOX */}
          <div
            className="
              flex items-start gap-3
              bg-red-50 border border-red-100
              rounded-xl px-5 py-4

              max-w-xl
              mx-auto md:mx-0
            "
          >

            <Image
              src="/alert.svg"
              alt="Alert"
              width={20}
              height={20}
              className="mt-[2px]"
            />

            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#ff0000]">
                90%
              </span>{" "}
              kendala terjadi karena vendor{" "}
              <span className="text-[#ff0000] font-medium">
                tidak punya sistem produksi yang jelas
              </span>.
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex items-center justify-center">

            {/* IMAGE WRAPPER */}
            <div className="relative w-full flex items-center justify-center group">

                {/* SHADOW BASE */}
                <div className="absolute bottom-0 w-[80%] h-10 bg-black/10 blur-2xl rounded-full" />

                {/* GLOW */}
                <div className="absolute inset-0 bg-[#113972]/10 blur-3xl rounded-full opacity-30" />

                    <Image
                        src="/painberanda.jpg"
                        alt="Masalah Produksi Kaos"
                        width={600}
                        height={500}
                        className="
                            relative z-10 w-full h-auto object-cover rounded-[9px]
                            transition-all duration-500 ease-out
                            group-hover:-translate-y-3
                            group-hover:scale-[1.02]
                            group-hover:drop-shadow-[0_25px_35px_rgba(17,57,114,0.18)]
                        "
                    />

            </div>

        </div>

      </div>

    </section>
  );
}