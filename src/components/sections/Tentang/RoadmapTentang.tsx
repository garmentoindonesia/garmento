import Image from "next/image";

export default function RoadmapTentang() {
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
            Model Bisnis & Roadmap
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
            Dibangun untuk
            <span className="text-[#1E4ED8]">
              {" "}Bertumbuh
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
            GARMENTO menggabungkan kekuatan produksi terpusat
            dengan strategi ekspansi market yang terukur untuk
            melayani kebutuhan apparel corporate di Indonesia.
          </p>

        </div>

        {/* MODEL BISNIS */}
        <div
          className="
            mt-16

            grid
            md:grid-cols-2

            gap-6
          "
        >

          {/* OFFICE */}
          <div
            className="
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

            <div
              className="
                w-16 h-16

                rounded-2xl

                bg-[#1E4ED8]/10

                flex items-center justify-center
              "
            >
              <Image
                src="/officebiru.svg"
                alt="Office Representative"
                width={32}
                height={32}
              />
            </div>

            <h3
              className="
                mt-6

                text-2xl

                font-bold

                text-[#111827]
              "
            >
              Office Representative
            </h3>

            <p
              className="
                mt-2

                text-[#1E4ED8]
                font-semibold
              "
            >
              Jakarta
            </p>

            <p
              className="
                mt-4

                text-gray-600

                leading-relaxed
              "
            >
              Berfungsi sebagai pusat pemasaran,
              komunikasi klien, dan pengembangan
              market corporate untuk memperkuat
              penetrasi pasar nasional.
            </p>

          </div>

          {/* FACTORY */}
          <div
            className="
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

            <div
              className="
                w-16 h-16

                rounded-2xl

                bg-[#1E4ED8]/10

                flex items-center justify-center
              "
            >
              <Image
                src="/factorybiru.svg"
                alt="Production Center"
                width={32}
                height={32}
              />
            </div>

            <h3
              className="
                mt-6

                text-2xl

                font-bold

                text-[#111827]
              "
            >
              Production Center
            </h3>

            <p
              className="
                mt-2

                text-[#1E4ED8]
                font-semibold
              "
            >
              Yogyakarta
            </p>

            <p
              className="
                mt-4

                text-gray-600

                leading-relaxed
              "
            >
              Seluruh proses produksi terpusat
              untuk menjaga efisiensi operasional,
              kapasitas produksi, dan kualitas
              yang konsisten dalam skala besar.
            </p>

          </div>

        </div>

        {/* ROADMAP */}
        <div className="mt-24">

          <div className="text-center">

            <h3
              className="
                text-3xl
                md:text-4xl

                font-bold

                text-[#111827]
              "
            >
              Roadmap Pertumbuhan
            </h3>

            <p
              className="
                mt-4

                text-gray-600
                text-lg
              "
            >
              Langkah strategis GARMENTO dalam membangun
              jaringan apparel corporate nasional.
            </p>

          </div>

          <div
            className="
              mt-14

              grid
              lg:grid-cols-3

              gap-8
            "
          >

            {/* SAAT INI */}
            <div
              className="
                relative

                rounded-[32px]

                bg-[#113972]

                p-8

                text-white
              "
            >

              <div
                className="
                  w-16 h-16

                  rounded-2xl

                  bg-white/15

                  flex items-center justify-center
                "
              >
                <Image
                  src="/flagputih.svg"
                  alt="Saat Ini"
                  width={30}
                  height={30}
                />
              </div>

              <h4
                className="
                  mt-6

                  text-2xl

                  font-bold
                "
              >
                Saat Ini
              </h4>

              <p className="mt-4 text-white/85 leading-relaxed">
                Office Representative di Jakarta
                dan pusat produksi di Yogyakarta
                sebagai fondasi pertumbuhan bisnis.
              </p>

            </div>

            {/* 2 TAHUN */}
            <div
              className="
                relative

                rounded-[32px]

                bg-[#1E4ED8]

                p-8

                text-white
              "
            >

              <div
                className="
                  w-16 h-16

                  rounded-2xl

                  bg-white/15

                  flex items-center justify-center
                "
              >
                <Image
                  src="/targetputih.svg"
                  alt="2 Tahun"
                  width={30}
                  height={30}
                />
              </div>

              <h4
                className="
                  mt-6

                  text-2xl

                  font-bold
                "
              >
                Target 2 Tahun
              </h4>

              <p className="mt-4 text-white/85 leading-relaxed">
                Fokus penetrasi pasar Jakarta
                dengan target memperkuat posisi
                GARMENTO sebagai vendor apparel
                corporate terpercaya.
              </p>

            </div>

            {/* 5 TAHUN */}
            <div
              className="
                relative

                rounded-[32px]

                bg-[#0B0C0D]

                p-8

                text-white
              "
            >

              <div
                className="
                  w-16 h-16

                  rounded-2xl

                  bg-white/15

                  flex items-center justify-center
                "
              >
                <Image
                  src="/buldingputih.svg"
                  alt="5 Tahun"
                  width={30}
                  height={30}
                />
              </div>

              <h4
                className="
                  mt-6

                  text-2xl

                  font-bold
                "
              >
                Target 5 Tahun
              </h4>

              <p className="mt-4 text-white/85 leading-relaxed">
                Ekspansi kantor marketing ke
                Bandung, Semarang, Yogyakarta,
                dan Surabaya dengan produksi
                tetap terpusat untuk menjaga
                efisiensi serta kualitas.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}