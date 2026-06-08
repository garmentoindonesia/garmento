"use client";

import { useState } from "react";

const PROMPT = `Buatkan gambar cover blog.

Ukuran: 1600 x 900 px
Format: JPG
Tanpa teks, tanpa watermark

Gunakan konsep sesuai artikel berikut:
{TOPIK}

Gaya:
- realistis
- foto industri garment / konveksi
- lighting studio soft
- clean, modern, profesional
- seperti foto katalog produk premium

Aturan visual:
- jika tentang kaos → tampilkan kaos produksi / tumpukan kaos / proses sablon
- jika tentang polo shirt → tampilkan polo shirt premium / bordir / seragam
- jika tentang sablon → tampilkan proses sablon di kain
- jika tentang bahan → close-up tekstur kain
- jika tentang harga → suasana workshop / produksi / packaging kaos

Hasil harus terlihat seperti foto nyata (bukan ilustrasi, bukan desain grafis).`;

export default function TemplatePromptCoverPage() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(PROMPT);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-10 md:py-14">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Template Prompt Cover Image
          </h1>

          <p className="mt-2 text-slate-500">
            Template prompt untuk GPT, Gemini, Midjourney, atau AI image generator lainnya.
          </p>
        </div>

        {/* Prompt */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <h2 className="font-semibold text-slate-900">
              Prompt Master
            </h2>

            <button
              onClick={handleCopy}
              className="
                px-4
                py-2
                rounded-xl
                bg-slate-900
                text-white
                text-sm
                font-medium
                cursor-pointer
                hover:bg-slate-800
                transition
              "
            >
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </div>

          <div className="p-6">
            <pre
              className="
                whitespace-pre-wrap
                break-words
                rounded-2xl
                bg-slate-50
                border
                border-slate-200
                p-5
                text-sm
                leading-7
                font-mono
                text-slate-800
                overflow-x-auto
              "
            >
              {PROMPT}
            </pre>
          </div>

        </section>

      </div>
    </main>
  );
}