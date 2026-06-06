"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function GridPortfolio() {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredData =
    activeFilter === "semua"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === activeFilter
        );

  const displayedData = filteredData.slice(
    0,
    visibleItems
  );

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              text-[#1E4ED8]
              text-sm
              font-semibold
              tracking-[0.25em]
              uppercase
            "
          >
            Portofolio Garmento
          </p>

          <h2
            className="
              mt-4

              text-3xl
              md:text-5xl

              font-bold

              text-[#0B0C0D]

              leading-tight
            "
          >
            Hasil Produksi untuk
            Berbagai Brand & Instansi
          </h2>

          <p
            className="
              mt-6

              text-gray-600

              leading-relaxed
            "
          >
            Dokumentasi project produksi kaos custom
            dan polo shirt untuk perusahaan,
            komunitas, instansi, UMKM,
            hingga event berskala nasional.
          </p>

        </div>

        {/* FILTER */}
        <div
          className="
            flex
            flex-wrap

            justify-center

            gap-3

            mt-12
            mb-14
          "
        >

          {[
            {
              label: "Semua",
              value: "semua",
            },
            {
              label: "Kaos Custom",
              value: "kaos",
            },
            {
              label: "Polo Shirt",
              value: "polo",
            },
          ].map((filter) => (

            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setVisibleItems(6);
              }}
              className={`
                cursor-pointer
                
                px-6
                py-3

                rounded-2xl

                font-medium

                transition-all
                duration-300

                ${
                  activeFilter === filter.value
                    ? `
                      bg-[#1E4ED8]
                      text-white

                      shadow-[0_12px_30px_rgba(30,78,216,0.25)]
                    `
                    : `
                      bg-white

                      border border-gray-200

                      text-gray-700

                      hover:border-[#1E4ED8]
                      hover:text-[#1E4ED8]
                    `
                }
              `}
            >
              {filter.label}
            </button>

          ))}

        </div>

        {/* GRID */}
        <div
          className="
            grid

            md:grid-cols-2
            xl:grid-cols-3

            gap-8
          "
        >

          {displayedData.map((item) => (

            <article
              key={item.id}
              className="
                cursor-pointer

                group

                bg-white

                rounded-[32px]

                overflow-hidden

                border border-gray-100

                shadow-[0_10px_40px_rgba(0,0,0,0.06)]

                hover:-translate-y-2

                hover:shadow-[0_20px_60px_rgba(30,78,216,0.12)]

                transition-all
                duration-500
              "
            >

              {/* FOTO */}
              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="
                    w-full
                    h-[280px]

                    object-cover

                    transition-all
                    duration-700

                    group-hover:scale-110
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div
                  className="
                    inline-flex

                    px-3 py-1.5

                    rounded-full

                    bg-[#1E4ED8]/10

                    text-[#1E4ED8]

                    text-xs
                    font-semibold
                  "
                >
                  {item.category === "kaos"
                    ? "Kaos Custom"
                    : "Polo Shirt"}
                </div>

                <h3
                  className="
                    mt-4

                    text-xl

                    font-bold

                    text-[#0B0C0D]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-5

                    flex
                    items-center
                    gap-2

                    text-sm

                    text-gray-500
                  "
                >
                  <span>{item.client}</span>

                  <span>•</span>

                  <span>{item.year}</span>
                </div>

                <div
                  className="
                    mt-6

                    pt-5

                    border-t border-gray-100

                    flex
                    justify-between

                    text-sm
                  "
                >

                  <div>
                    <p className="text-gray-400">
                      Jumlah
                    </p>

                    <p className="font-semibold text-[#0B0C0D]">
                      {item.qty}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400">
                      Teknik
                    </p>

                    <p className="font-semibold text-[#0B0C0D]">
                      {item.teknik}
                    </p>
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* LOAD MORE */}
        {visibleItems < filteredData.length && (

          <div className="flex justify-center mt-16">

            <button
            onClick={() =>
                setVisibleItems((prev) => prev + 6)
            }
            className="
                cursor-pointer

                w-full sm:w-auto

                inline-flex
                items-center
                justify-center

                px-8
                py-4

                rounded-2xl

                text-center

                bg-[#1E4ED8]

                text-white
                font-semibold

                shadow-[0_12px_30px_rgba(30,78,216,0.25)]

                hover:-translate-y-1

                transition-all
                duration-300
            "
            >
            Muat Lebih Banyak
            </button>

          </div>

        )}

      </div>

    </section>
  );
}