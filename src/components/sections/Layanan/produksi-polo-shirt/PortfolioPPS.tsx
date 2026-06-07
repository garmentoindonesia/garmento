import Image from "next/image";
import Link from "next/link";

const portfolios = [
  "/pospolo.jpg",
  "/shopeepolo.jpg",
  "/crewpolo.jpg",
  "/bripolo.jpg",
  "/yogyakartapolo.jpg",
];

type PortfolioPPSProps = {
  adsMode?: boolean;
};

export default function PortfolioPPS({
  adsMode = false,
}: PortfolioPPSProps) {
  return (
    <section className="py-20 md:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              text-sm
              font-semibold
              text-[#1E4ED8]
              mb-3
            "
          >
            Portofolio
          </p>

          <h2
            className="
              text-3xl md:text-5xl

              font-bold

              text-[#113972]

              leading-[1.15]
              tracking-[-0.5px]
            "
          >
            Beberapa Hasil Produksi

            <br />

            <span className="text-[#1E4ED8]">
              Kami
            </span>

          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            mt-14

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5

            gap-5
          "
        >

          {portfolios.map((image, index) => (

            <div
              key={index}
              className="
                group

                relative

                aspect-square

                overflow-hidden

                rounded-3xl

                shadow-[0_10px_40px_rgba(17,57,114,0.08)]

                cursor-pointer
              "
            >

              <Image
                src={image}
                alt={`Portfolio Garmento ${index + 1}`}
                fill
                className="
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-110
                "
              />

            </div>

          ))}

        </div>

        {/* CTA */}
        {!adsMode && (

          <div className="mt-10 flex justify-center">

            <Link
              href="/portofolio"
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                px-8 py-4

                rounded-2xl

                border border-[#113972]/10

                bg-white

                text-[#113972]
                font-semibold

                hover:bg-[#113972]
                hover:text-white

                transition-all duration-300
              "
            >
              Lihat Semua Portofolio
              <span>→</span>
            </Link>

          </div>

        )}

      </div>

    </section>
  );
}