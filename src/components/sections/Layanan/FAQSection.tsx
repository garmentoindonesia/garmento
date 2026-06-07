"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQItem[];
};

export default function FAQSection({
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

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