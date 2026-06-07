import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full pt-16 md:pt-20 pb-0 bg-white overflow-hidden">

        <div
            className="
            relative overflow-hidden
            bg-gradient-to-r from-[#1E4ED8] to-[#0B0C0D]

            px-6 md:px-8
            py-8 md:py-8

            shadow-[0_20px_60px_rgba(17,57,114,0.25)]
            "
        >

            {/* GLOW */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />

            {/* INNER CONTAINER */}
            <div
            className="
                relative z-10
                max-w-7xl mx-auto w-full
                px-6

                flex flex-col lg:flex-row
                items-center
                justify-center lg:justify-between

                gap-8 md:gap-7
            "
            >

            {/* LEFT */}
            <div
                className="
                flex flex-col sm:flex-row
                items-center sm:items-start
                gap-5

                text-center sm:text-left
                "
            >

                {/* ICON */}
                <div
                className="
                    w-14 h-14 md:w-16 md:h-16
                    shrink-0
                    rounded-2xl
                    bg-white/10
                    border border-white/10
                    flex items-center justify-center
                    backdrop-blur-sm
                "
                >
                <Image
                    src="/calendar.svg"
                    alt="Calendar"
                    width={30}
                    height={30}
                />
                </div>

                {/* TEXT */}
                <div>

                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                    Butuh Produksi Kaos dalam Jumlah Besar?
                </h2>

                <p
                    className="
                    mt-2
                    text-blue-100
                    text-sm md:text-base
                    leading-relaxed
                    max-w-md
                    "
                >
                    Diskusikan kebutuhan Anda sekarang.
                    Slot produksi bulan ini terbatas.
                </p>

                </div>

            </div>

            {/* RIGHT */}
            <div
                className="
                flex flex-col items-center
                w-full lg:w-auto
                "
            >

                <a
                href="https://wa.me/6281329269977"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group
                    w-full lg:w-auto

                    border border-white/20
                    bg-white/10
                    backdrop-blur-md
                    
                    text-[#25D366]

                    px-7 md:px-9
                    py-4

                    rounded-2xl

                    font-semibold
                    text-base md:text-lg

                    flex items-center justify-center gap-3

                    shadow-lg
                    hover:-translate-y-1
                    hover:shadow-lg
                    transition-all duration-300
                "
                >

                <Image
                    src="/wahijau2.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="
                    transition-transform duration-300
                    group-hover:scale-110
                    "
                />

                Konsultasi Produksi

                </a>

                <p className="mt-3 text-blue-100 text-sm text-center">
                Respon cepat &lt; 5 menit
                </p>

            </div>

            </div>

        </div>

    </section>
  );
}