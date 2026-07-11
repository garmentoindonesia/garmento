"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    image: "/porto1.png",
    title: "Event Nasional",
    total: "2.000 pcs",
  },
  {
    image: "/porto2.png",
    title: "Perusahaan Teknologi",
    total: "1.500 pcs",
  },
  {
    image: "/porto3.png",
    title: "BUMN",
    total: "3.500 pcs",
  },
  {
    image: "/porto4.png",
    title: "Event Organizer",
    total: "5.000 pcs",
  },
  {
    image: "/porto5.png",
    title: "Brand Lokal",
    total: "1.200 pcs",
  },
];

export default function Portfolio() {

  const [startIndex, setStartIndex] = useState(0);

  const [activeMobile, setActiveMobile] = useState(0);

  const mobileSliderRef = useRef<HTMLDivElement>(null);

  const visibleCards = 4;

  const handleMobileScroll = (
    e: React.UIEvent<HTMLDivElement>
  ) => {
    const container = e.currentTarget;

    const cardWidth =
      container.firstElementChild?.clientWidth || 0;

    const gap = 20; // gap-5 = 20px

    const index = Math.round(
      container.scrollLeft / (cardWidth + gap)
    );

    setActiveMobile(index);
  };

  const goToMobileSlide = (index: number) => {
    if (!mobileSliderRef.current) return;

    const container = mobileSliderRef.current;

    const cardWidth =
      container.firstElementChild?.clientWidth || 0;

    const gap = 20;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });

    setActiveMobile(index);
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      (prev + 1) % portfolioItems.length
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - 1 + portfolioItems.length) %
      portfolioItems.length
    );
  };

  const visibleItems = [];

  for (let i = 0; i < visibleCards; i++) {
    visibleItems.push(
      portfolioItems[
        (startIndex + i) % portfolioItems.length
      ]
    );
  }

  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold text-[#113972] leading-tight">
            Hasil Produksi Kami
          </h2>

          <p
              className="
                font-bold text-[#1E4ED8]
                leading-[1.15]
                tracking-[-0.4px]
              "
          >
            Beberapa hasil produksi untuk klien.
          </p>

        </div>

        {/* ========================= */}
        {/* MOBILE SWIPE */}
        {/* ========================= */}
        <div className="md:hidden mt-10">

          <div
            ref={mobileSliderRef}
            onScroll={handleMobileScroll}
            className="
              flex gap-5 overflow-x-auto
              pb-4
              snap-x snap-mandatory
              scrollbar-hide
            "
          >

            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[81%]
                  snap-center
                  bg-white rounded-3xl overflow-hidden
                  border border-gray-200
                  shadow-sm
                  shrink-0
                "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={700}
                    className="
                      w-full h-[380px] object-cover
                      transition-transform duration-700
                      hover:scale-105
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-[#113972] text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-700 text-lg">
                    {item.total}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="flex justify-center gap-2 mt-4">

          {portfolioItems.map((_, index) => (

            <button
              key={index}
              onClick={() => goToMobileSlide(index)}
              className={`
                transition-all duration-300 rounded-full
                ${
                  activeMobile === index
                    ? "bg-[#1E4ED8] w-7 h-2"
                    : "bg-gray-300 w-2 h-2"
                }
              `}
            />

          ))}

        </div>

        {/* ========================= */}
        {/* DESKTOP SLIDER */}
        {/* ========================= */}
        <div className="hidden md:block relative mt-14">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="
              absolute -left-14
              top-1/2 -translate-y-1/2
              z-20
              w-12 h-12 rounded-full
              bg-white border border-gray-200
              shadow-md
              flex items-center justify-center
              hover:scale-105 hover:shadow-lg
              transition-all duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#1E4ED8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="
              absolute -right-14
              top-1/2 -translate-y-1/2
              z-20
              w-12 h-12 rounded-full
              bg-white border border-gray-200
              shadow-md
              flex items-center justify-center
              hover:scale-105 hover:shadow-lg
              transition-all duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#1E4ED8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* CARDS */}
          <div className="grid grid-cols-4 gap-6">

            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-3xl overflow-hidden
                  border border-gray-200
                  shadow-sm
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all duration-500
                "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={700}
                    className="
                      w-full h-[360px] object-cover
                      transition-transform duration-700
                      hover:scale-105
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-[#113972] text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-700 text-xl">
                    {item.total}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* DOTS */}
          <div className="flex items-center justify-center gap-4 mt-10">

            {portfolioItems.map((_, index) => (

              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`
                  w-4 h-4 rounded-full transition-all duration-300
                  ${
                    index === startIndex
                      ? "bg-[#1E4ED8] scale-110"
                      : "bg-gray-300"
                  }
                `}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}