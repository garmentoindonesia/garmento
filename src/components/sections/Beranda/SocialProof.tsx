const testimonials = [
  {
    name: "Budi Santoso",
    role: "HRD Perusahaan Logistik",
    text: "Awalnya takut timeline molor karena kebutuhan event kantor cukup besar. Tapi GARMENTO kerjanya rapi banget, update produksi jelas, dan hasil kaosnya di atas ekspektasi.",
  },
  {
    name: "Rina Wulandari",
    role: "Panitia Event Kampus",
    text: "Paling suka karena komunikasinya enak. Revisi desain dibantu, produksi cepat, dan kualitas sablon rata semua. Pas dipakai acara hasilnya keren banget.",
  },
  {
    name: "Dimas Prakoso",
    role: "Owner Brand Lokal",
    text: "Udah coba beberapa vendor sebelumnya dan sering zonk. Di sini lebih tenang karena mereka punya sistem produksi yang jelas dan QC-nya terasa.",
  },
  {
    name: "Andi Saputra",
    role: "Koordinator Komunitas",
    text: "Order ratusan pcs buat komunitas dan semuanya aman. Size lengkap, warna sesuai, dan pengiriman tepat waktu. Bakal repeat order lagi.",
  },
  {
    name: "Siti Maharani",
    role: "Staff Purchasing",
    text: "Biasanya vendor susah diajak koordinasi kalau order besar. Tapi GARMENTO responsif dan progress selalu dikabarin. Sangat membantu kerja tim kami.",
  },
  {
    name: "Fajar Nugroho",
    role: "Ketua Organisasi",
    text: "Hasil jahitan dan sablon benar-benar rapi. Bahkan beberapa anggota tim kira ini produksi brand mahal. Worth it banget buat kebutuhan skala besar.",
  },
];

const profileColors = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-cyan-500",
];

export default function SocialProof() {
  return (
    <section
      className="
        relative w-full py-16 md:py-20 overflow-hidden

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

      {/* GLOW TOP */}
      <div
        className="
          absolute -top-32 left-1/2 -translate-x-1/2
          w-[500px] h-[500px]
          bg-blue-400/20 blur-3xl rounded-full
          pointer-events-none
        "
      />

      {/* GLOW BOTTOM */}
      <div
        className="
          absolute bottom-0 right-0
          w-[350px] h-[350px]
          bg-cyan-300/10 blur-3xl rounded-full
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Mereka Sudah Produksi
            
          <br />
            <span 
              className="
                bg-gradient-to-r
                from-[#20bd5c]
                to-[#315BFF]

                bg-clip-text
                text-transparent
              "
            >
              Bareng GARMENTO
            </span>
          </h2>

          <p className="mt-4 text-blue-100 leading-relaxed">
            Dipakai perusahaan, komunitas, event, sampai brand lokal.
            Bukan cuma soal hasil kaos, tapi juga pengalaman produksi
            yang lebih tenang dan terstruktur.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          {testimonials.map((item, index) => {

            const initials = item.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={index}
                className="
                  relative overflow-hidden

                  bg-white/10
                  backdrop-blur-xl

                  border border-white/15

                  rounded-2xl
                  p-5 md:p-6

                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]

                  max-w-md
                  mx-auto
                "
              >

                {/* INNER GLOW */}
                <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />

                {/* PROFILE */}
                <div className="relative z-10 flex items-center gap-4">

                  {/* INITIAL */}
                  <div
                    className={`
                      w-11 h-11 md:w-12 md:h-12
                      rounded-full
                      text-white
                      flex items-center justify-center
                      font-semibold text-sm
                      shrink-0
                      shadow-lg
                      ${profileColors[index % profileColors.length]}
                    `}
                  >
                    {initials}
                  </div>

                  {/* NAME */}
                  <div>

                    <h3 className="font-semibold text-white leading-none text-sm md:text-base">
                      {item.name}
                    </h3>

                    <p className="text-xs md:text-sm text-blue-100 mt-1">
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* TEXT */}
                <p
                  className="
                    relative z-10
                    mt-5
                    text-[14px] md:text-[15px]
                    text-blue-50
                    leading-relaxed
                  "
                >
                  "{item.text}"
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}