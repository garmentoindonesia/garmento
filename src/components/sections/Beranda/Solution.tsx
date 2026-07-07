import Image from "next/image";

const points = [
  {
    icon: "/gear.svg",
    title: "Sistem Kerja Jelas dari Awal",
    desc: "Semua proses direncanakan sejak awal, lebih transparan.",
  },
  {
    icon: "/clock.svg",
    title: "Produksi dengan Timeline Terkontrol",
    desc: "Setiap pesanan dipantau sampai selesai tepat waktu.",
  },
  {
    icon: "/team.svg",
    title: "Tim Khusus Order Skala Besar",
    desc: "Didukung tenaga ahli dan mesin untuk produksi volume tinggi.",
  },
  {
    icon: "/QC.svg",
    title: "Quality Control 3 Tahap",
    desc: "QC bahan, QC proses, dan QC barang jadi sebelum dikirim.",
  },
];

const footerPoints = [
  {
    icon: "/employee.svg",
    value: "50+",
    label: "Tenaga Produksi\nBerpengalaman",
  },
  {
    icon: "/monthlycapacity.svg",
    value: "10.000+",
    label: "Kapasitas Produksi\nper Bulan",
  },
  {
    icon: "/dailycapacity.svg",
    value: "1.000+",
    label: "Pcs per Hari\nKapasitas Produksi",
  },
  {
    icon: "/satisfaction.svg",
    value: "98%",
    label: "Tingkat Kepuasan\nKlien",
  },
  {
    icon: "/klien.svg",
    value: "100+",
    label: "Klien Perusahaan\n& Instansi",
  },
];

export default function Solution() {
  return (
    <section className="w-full py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top Content */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-start">
          
          {/* Left Image */}
          <div className="relative w-full flex items-center justify-center">

            {/* IMAGE WRAPPER */}
            <div className="relative w-full flex items-center justify-center group">

                {/* SHADOW BASE */}
                <div className="absolute bottom-0 w-[80%] h-10 bg-black/10 blur-2xl rounded-full" />

                {/* GLOW */}
                <div className="absolute inset-0 bg-[#113972]/10 blur-3xl rounded-full opacity-30" />

                <Image
                    src="/solutions.png"
                    alt="Produksi Kaos GARMENTO"
                    width={700}
                    height={500}
                    className="
                        relative z-10 w-full h-full object-cover rounded-[9px]
                        transition-all duration-500 ease-out
                        group-hover:-translate-y-3
                        group-hover:scale-[1.02]
                        group-hover:drop-shadow-[0_25px_35px_rgba(17,57,114,0.18)]
                    "
                />

            </div>

          </div>

          {/* Right Content */}
          <div>
            <h2
              className="
                text-xl md:text-3xl
                font-bold text-[#113972]
                leading-[1.15]
                tracking-[-0.4px]

                text-center md:text-left
              "
            >
              GARMENTO: Vendor Produksi Kaos
              
              <br />

              <span className="text-[#1E4ED8]">
                Skala Besar yang Terstruktur
              </span>

            </h2>

            <h3
              className="
                text-m md:text-xl
                font-bold text-[#000000]/60
                leading-[1.15]
                tracking-[-0.4px]

                text-center md:text-left

                md:mt-4
              "
            >
              Bagian dari PT Nusa Garment Indonesia
            </h3>

            <p
              className="
                mt-4
                text-gray-600
                text-base
                leading-relaxed
                max-w-2xl

                text-center md:text-left
              "
            >
              Kami membantu perusahaan, event organizer, dan instansi
              mendapatkan hasil produksi terbaik dengan sistem kerja yang
              rapi, timeline jelas, dan quality control ketat.
            </p>

            {/* Points */}
            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    border border-gray-200 rounded-2xl p-5 bg-white shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_40px_rgba(17,57,114,0.08)]
                  "
                >
                  <div
                    className="
                        w-11 h-11 flex items-center justify-center
                        rounded-xl bg-blue-50
                        transition-all duration-300
                        group-hover:scale-110
                    "
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </div>

                  <h3 className="mt-4 text-[#113972] font-semibold text-base leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {footerPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.value}
                    width={22}
                    height={22}
                  />
                </div>

                <div>
                  <div className="text-[#1E4ED8] text-2xl font-bold leading-none">
                    {item.value}
                  </div>

                  <p className="mt-1 text-[12px] text-gray-600 leading-snug">
                    {item.label}
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