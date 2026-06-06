import Image from "next/image";

const processSteps = [
  {
    number: "01",
    icon: "/konsultasi.svg",
    title: "Konsultasi Kebutuhan",
    desc: "Sampaikan kebutuhan, jumlah, desain, bahan, dan deadline Anda.",
  },
  {
    number: "02",
    icon: "/design.svg",
    title: "Penyesuaian Desain & Spesifikasi",
    desc: "Kami bantu sesuaikan desain, bahan, sablon, dan detail lainnya.",
  },
  {
    number: "03",
    icon: "/produksi.svg",
    title: "Produksi Dimulai",
    desc: "Proses produksi berjalan sesuai rencana dan standar kualitas.",
  },
  {
    number: "04",
    icon: "/quality.svg",
    title: "Quality Control",
    desc: "Pengecekan kualitas di setiap tahap produksi.",
  },
  {
    number: "05",
    icon: "/pengiriman.svg",
    title: "Pengiriman Tepat Waktu",
    desc: "Produk dikemas rapi dan dikirim tepat waktu ke lokasi Anda.",
  },
];

export default function Process() {
  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-[#113972]">
            Alur Produksi yang Jelas & Terstruktur
          </h2>

          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            Setiap pesanan ditangani dengan proses yang terukur
            untuk hasil terbaik.
          </p>

        </div>

        {/* PROCESS */}
        <div className="mt-14">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">

            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >

                {/* ICON + BADGE */}
                <div className="relative">

                  <div className="w-[74px] h-[74px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                    />

                  </div>

                  {/* NUMBER BADGE */}
                  <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#1E4ED8] text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                    {item.number}
                  </div>

                </div>

                {/* TEXT */}
                <div className="mt-5">

                  <h3 className="text-[15px] font-semibold text-[#113972] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

                {/* ARROW DESKTOP */}
                {index !== processSteps.length - 1 && (
                  <>
                    {/* DESKTOP */}
                    <div className="hidden md:flex absolute top-9 -right-10 items-center">
                      <div className="w-16 border-t-2 border-dashed border-[#1E4ED8]" />
                      <div className="w-2 h-2 rounded-full bg-[#1E4ED8]" />
                    </div>

                    {/* MOBILE */}
                    <div className="md:hidden flex flex-col items-center mt-8">
                      <div className="h-10 border-l-2 border-dashed border-[#1E4ED8]" />
                      <div className="w-2 h-2 rounded-full bg-[#1E4ED8]" />
                    </div>
                  </>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}