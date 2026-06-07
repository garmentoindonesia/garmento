import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GARMENTO",
  description: "Kebijakan Privasi GARMENTO.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-28">
      
      <h1 className="text-4xl font-bold text-[#113972]">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">

        <p>
          GARMENTO menghargai privasi setiap pengunjung website.
          Informasi yang Anda berikan melalui formulir kontak,
          WhatsApp, email, atau media komunikasi lainnya hanya
          digunakan untuk kebutuhan konsultasi, penawaran,
          produksi, dan layanan pelanggan.
        </p>

        <p>
          Kami tidak menjual, menyewakan, atau membagikan data
          pribadi Anda kepada pihak ketiga tanpa persetujuan,
          kecuali diwajibkan oleh hukum yang berlaku.
        </p>

        <p>
          Website ini dapat menggunakan cookie, analytics,
          dan teknologi serupa untuk membantu meningkatkan
          pengalaman pengguna dan efektivitas layanan kami.
        </p>

        <p>
          Dengan menggunakan website GARMENTO, Anda dianggap
          telah memahami dan menyetujui kebijakan privasi ini.
        </p>

        <p>
          Untuk pertanyaan terkait privasi data, silakan
          hubungi kami melalui:
        </p>

        <ul className="list-disc pl-6">
          <li>WhatsApp: 0813-2926-9977</li>
          <li>Email: garmento.indonesia@gmail.com</li>
        </ul>

      </div>
      
    </main>
  );
}