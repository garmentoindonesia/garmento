"use client";

import { useState } from "react";

const KAOS = [
  "harga-kaos-custom-50-pcs",
  "harga-kaos-custom-100-pcs",
  "harga-kaos-custom-500-pcs",
  "harga-kaos-custom-1000-pcs",
  "sablon-rubber-vs-plastisol",
  "sablon-polyflex-kaos",
  "sablon-discharge-kaos",
  "jenis-sablon-kaos-terbaik",
  "kaos-cotton-combed-20s",
  "kaos-cotton-combed-24s",
  "kaos-cotton-combed-30s",
  "perbedaan-cotton-combed-20s-24s-30s",
  "kaos-oversize-custom",
  "kaos-event-custom",
  "kaos-komunitas-custom",
  "kaos-company-profile",
  "kaos-merchandise-brand",
  "produksi-kaos-satuan-vs-massal",
  "minimum-order-kaos-custom",
  "waktu-produksi-kaos",
  "vendor-kaos-custom-terbaik",
  "kaos-distro-custom",
  "kaos-promosi-perusahaan",
  "kaos-event-kampus",
  "kaos-family-gathering",
  "kaos-seragam-panitia",
  "kaos-lari-event",
  "kaos-tour-travel",
  "kaos-branding-startup",
  "cutting-kaos-custom",
  "packaging-kaos-custom",
  "desain-kaos-custom",
  "tips-produksi-kaos-hemat",
];

const POLO = [
  "harga-polo-shirt-custom",
  "harga-polo-shirt-corporate",
  "polo-shirt-kantor",
  "polo-shirt-event",
  "polo-shirt-komunitas",
  "polo-shirt-bordir",
  "sablon-vs-bordir-polo-shirt",
  "bahan-lacoste-cotton",
  "bahan-lacoste-pe",
  "lacoste-cvc-vs-cotton",
  "polo-shirt-premium",
  "polo-shirt-murah-berkualitas",
  "polo-shirt-seragam-kerja",
  "polo-shirt-perusahaan",
  "polo-shirt-event-outdoor",
  "polo-shirt-safety-event",
  "polo-shirt-distro",
  "desain-polo-shirt-corporate",
  "cutting-polo-shirt",
  "waktu-produksi-polo-shirt",
  "minimum-order-polo-shirt",
  "vendor-polo-shirt-terbaik",
  "polo-shirt-lengan-panjang",
  "polo-shirt-lengan-pendek",
  "polo-shirt-event-olahraga",
  "polo-shirt-golf",
  "polo-shirt-bank-finance",
  "polo-shirt-startup",
  "polo-shirt-custom-logo",
  "packaging-polo-shirt",
  "polo-shirt-corporate-identity",
  "tips-produksi-polo-shirt-hemat",
  "polo-shirt-vs-kaos",
];

const EDUKASI = [
  "cotton-combed-20s",
  "cotton-combed-24s",
  "cotton-combed-30s",
  "perbedaan-20s-24s-30s",
  "cotton-carded",
  "polyester-vs-cotton",
  "lacoste-cotton",
  "lacoste-pe",
  "lacoste-cvc",
  "jenis-kain-kaos",
  "kain-kaos-terbaik",
  "kain-kaos-adem",
  "kain-kaos-tebal",
  "kain-kaos-distro",
  "sablon-rubber",
  "sablon-plastisol",
  "sablon-polyflex",
  "sablon-discharge",
  "sablon-waterbase",
  "perbedaan-sablon-kaos",
  "sablon-terbaik-kaos",
  "bordir-komputer",
  "bordir-vs-sablon",
  "teknik-bordir-kaos",
  "cutting-kaos",
  "pattern-kaos",
  "gsm-kain-kaos",
  "kualitas-kaos-premium",
  "shrink-kaos",
  "perawatan-kaos",
  "kaos-tidak-mudah-melar",
  "finishing-kaos",
  "quality-control-kaos",
];

function SlugSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(items.join("\n"));
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <h2 className="font-semibold text-slate-900">
          {title} ({items.length})
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
          {copied ? "Copied!" : "Copy"}
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
          "
        >
          {items.join("\n")}
        </pre>
      </div>
    </section>
  );
}

export default function MasterListSlugPage() {
  const [allCopied, setAllCopied] = useState(false);

  const handleCopyAll = async () => {
    const all = [...KAOS, ...POLO, ...EDUKASI].join("\n");

    await navigator.clipboard.writeText(all);

    setAllCopied(true);

    setTimeout(() => {
      setAllCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-10 md:py-14">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              99 Master List Slug
            </h1>

            <p className="mt-2 text-slate-500">
              Total 99 slug siap produksi artikel.
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="
              px-5
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-medium
              cursor-pointer
              hover:bg-slate-800
              transition
            "
          >
            {allCopied ? "Copied All!" : "Copy All 99 Slugs"}
          </button>
        </div>

        <div className="space-y-6">
          <SlugSection
            title="Produksi Kaos Custom"
            items={KAOS}
          />

          <SlugSection
            title="Polo Shirt Corporate"
            items={POLO}
          />

          <SlugSection
            title="Bahan & Edukasi"
            items={EDUKASI}
          />
        </div>

      </div>
    </main>
  );
}