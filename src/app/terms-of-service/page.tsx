import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GARMENTO",
  description: "Syarat dan Ketentuan GARMENTO.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-28">
      
      <h1 className="text-4xl font-bold text-[#113972]">
        Terms of Service
      </h1>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">

        <p>
          Dengan menggunakan website GARMENTO, Anda setuju
          untuk menggunakan layanan ini secara wajar dan sesuai
          dengan hukum yang berlaku.
        </p>

        <p>
          Seluruh informasi yang terdapat pada website ini
          disediakan untuk tujuan informasi dan promosi layanan
          produksi kaos custom serta polo shirt.
        </p>

        <p>
          Estimasi harga, waktu produksi, dan spesifikasi produk
          dapat berubah sesuai kebutuhan proyek dan hasil
          konsultasi dengan tim GARMENTO.
        </p>

        <p>
          GARMENTO berhak melakukan pembaruan terhadap isi website,
          layanan, maupun syarat penggunaan tanpa pemberitahuan
          sebelumnya.
        </p>

        <p>
          Penggunaan website ini berarti Anda menyetujui seluruh
          syarat dan ketentuan yang berlaku.
        </p>

      </div>
      
    </main>
  );
}