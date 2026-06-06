"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Berapa minimal order produksi kaos di Garmento?",
    answer:
      "Kami melayani produksi mulai dari jumlah tertentu sesuai jenis produk dan kebutuhan Anda. Hubungi tim kami untuk mendapatkan penawaran terbaik.",
  },
  {
    question: "Bisa pilih bahan dan teknik sablon/bordir",
    answer:
      "Tentu. Anda dapat memilih bahan, jenis sablon, bordir, ukuran, warna, dan detail lainnya sesuai kebutuhan produksi.",
  },
  {
    question: "Berapa lama proses produksi biasanya?",
    answer:
      "Waktu produksi bergantung pada jumlah pesanan dan kompleksitas desain. Tim kami akan memberikan estimasi yang jelas sejak awal.",
  },
  {
    question: "Apakah ada garansi jika hasil tidak sesuai?",
    answer:
      "Kami melakukan quality control pada setiap tahap produksi. Jika terdapat kendala yang menjadi tanggung jawab kami, akan kami bantu tindak lanjuti.",
  },
  {
    question: "Bisa request desain sendiri?",
    answer:
      "Bisa. Anda dapat mengirim desain yang sudah jadi atau berkonsultasi dengan tim kami untuk penyesuaian desain.",
  },
  {
    question: "Bagaimana cara pemesanan?",
    answer:
      "Cukup hubungi tim Garmento melalui WhatsApp, sampaikan kebutuhan Anda, lalu kami akan membantu proses konsultasi hingga produksi.",
  },
];

export default function FAQPPS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm font-semibold text-[#1E4ED8] mb-3">
            FAQ
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
            Pertanyaan yang

            <br />

            <span className="text-[#1E4ED8]">
              Sering Diajukan
            </span>

          </h2>

        </div>

        {/* FAQ GRID */}
        <div className="mt-14 grid md:grid-cols-2 gap-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  border border-gray-200
                  overflow-hidden
                  transition-all duration-300
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between

                    px-6
                    py-5

                    text-left

                    font-semibold
                    text-[#113972]

                    hover:bg-gray-50

                    transition-colors
                  "
                >

                  <span className="pr-4">
                    {faq.question}
                  </span>

                  <span
                    className="
                      text-[#1E4ED8]
                      text-xl
                      font-bold
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "max-h-40"
                        : "max-h-0"
                    }
                  `}
                >

                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}