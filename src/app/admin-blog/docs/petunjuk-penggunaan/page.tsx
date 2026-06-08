export default function PetunjukPenggunaanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-10 md:py-14">

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Petunjuk Penggunaan Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Panduan operasional pembuatan artikel blog GARMENTO.
          </p>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">

          <div className="prose prose-slate max-w-none">

            <h2>Tujuan Dashboard</h2>

            <p>
              Dashboard ini digunakan untuk membuat artikel blog GARMENTO
              secara cepat dan konsisten. Setiap artikel yang dibuat akan
              membantu website mendapatkan traffic dari Google dan calon
              pelanggan.
            </p>

            <hr />

            <h2>Alur Kerja Singkat</h2>

            <ol>
              <li>Pilih slug artikel dari menu "99 Master List Slug".</li>
              <li>Copy slug yang akan dibuat.</li>
              <li>Paste slug ke kolom Slug Artikel.</li>
              <li>Klik tombol Generate Artikel.</li>
              <li>Tunggu artikel selesai dibuat.</li>
              <li>Review isi artikel di MDX Editor:
                <ul><li>jangan ubah format mdx seperti tanda ##, ---, **, []</li></ul>
                <ul><li>pastikan nama file jpg sesuai dengan format topik.mmddyy.hh.mm</li></ul>
                <ul><li>contoh: hargakaos.080626.16.58.jpg</li></ul>
              </li>
              <li>Buat cover image.</li>
              <li>Upload cover image.</li>
                <ul><li>pastikan nama file jpg sesuai dengan format di MDX Editor</li></ul>
                <ul><li>contoh: hargakaos.080626.16.58.jpg</li></ul>
              <li>Klik Publish.</li>
            </ol>

            <hr />

            <h2>Langkah 1 — Memilih Slug</h2>

            <p>
              Buka menu:
            </p>

            <pre>
                99 Master List Slug
            </pre>

            <p>
              Pilih satu slug yang belum pernah dibuat sebelumnya.
            </p>

            <p>
              Contoh:
            </p>

            <pre>
                harga-kaos-custom-100-pcs
                polo-shirt-premium
                sablon-rubber-vs-plastisol
            </pre>

            <p>
              Jangan membuat artikel dengan slug yang sama dua kali.
            </p>

            <hr />

            <h2>Langkah 2 — Generate Artikel</h2>

            <p>
              Paste slug ke kolom:
            </p>

            <pre>
              Slug Artikel
            </pre>

            <p>
              Kemudian klik:
            </p>

            <pre>
              Generate Artikel
            </pre>

            <p>
              Sistem akan membuat artikel secara otomatis berdasarkan slug
              tersebut.
            </p>

            <hr />

            <h2>Langkah 3 — Review Artikel</h2>

            <p>
              Setelah artikel muncul di MDX Editor, lakukan pengecekan:
            </p>

            <ul>
              <li>Judul sesuai dengan slug.</li>
              <li>Tidak ada paragraf kosong berlebihan.</li>
              <li>Tidak ada tulisan aneh atau error AI.</li>
              <li>Bahasa Indonesia mudah dipahami.</li>
              <li>Artikel terlihat lengkap.</li>
              <li>jangan ubah format mdx seperti tanda ##, ---, **, []</li>
              <li>pastikan nama file jpg sesuai dengan format topik.mmddyy.hh.mm</li>
              <li>contoh: hargakaos.080626.16.58.jpg</li>
            </ul>

            <p>
              Jika ada bagian yang kurang sesuai, edit langsung pada editor.
            </p>

            <hr />

            <h2>Langkah 4 — Membuat Cover Image</h2>

            <p>
              Buka menu:
            </p>

            <pre>
                Template Prompt Cover
            </pre>

            <p>
              Copy prompt yang tersedia.
            </p>

            <p>
              Paste ke ChatGPT, Gemini, atau AI image generator yang digunakan
              perusahaan.
            </p>

            <p>
              Ganti bagian:
            </p>

            <pre>{"{TOPIK}"}</pre>

            <p>
              dengan topik artikel yang sedang dibuat.
            </p>

            <p>
              Contoh:
            </p>

            <pre>
                Harga Kaos Custom 100 Pcs
            </pre>

            <p>
              Simpan hasil gambar dengan format JPG.
            </p>

            <hr />

            <h2>Langkah 5 — Upload Cover Image</h2>

            <p>
              Upload cover yang sudah dibuat ke bagian:
            </p>

            <pre>
                Cover Image
            </pre>

            <p>
              Pastikan gambar:
            </p>

            <ul>
              <li>Jelas.</li>
              <li>Tidak blur.</li>
              <li>Tidak ada watermark.</li>
              <li>Tidak ada tulisan berlebihan.</li>
              <li>Sesuai dengan isi artikel.</li>
            </ul>

            <p>
              Pastikan format nama file JPG:
            </p>
            <ul>
                <li>pastikan nama file jpg sesuai dengan format di MDX Editor</li>
                <li>contoh: hargakaos.080626.16.58.jpg</li>
            </ul>
            <hr />

            <h2>Langkah 6 — Publish</h2>

            <p>
              Setelah artikel dan cover selesai:
            </p>

            <pre>
              Publish
            </pre>

            <p>
              Tunggu sampai proses selesai.
            </p>

            <p>
              Setelah berhasil dipublish, lanjutkan membuat artikel berikutnya.
            </p>

            <hr />

            <h2>Checklist Sebelum Publish</h2>

            <ul>
              <li>✓ Slug sudah benar.</li>
              <li>✓ Artikel sudah muncul lengkap.</li>
              <li>✓ Tidak ada error tulisan.</li>
              <li>✓ Cover image sudah diupload.</li>
              <li>✓ Cover sesuai topik.</li>
              <li>✓ Belum pernah membuat slug yang sama.</li>
            </ul>

            <hr />

            <h2>Target Kerja Harian</h2>

            <ul>
              <li>Minimal 3 artikel per hari.</li>
              <li>Ideal 5 artikel per hari.</li>
              <li>Fokus kualitas dan konsistensi.</li>
            </ul>

            <p>
              Jika menemukan error sistem atau hasil artikel tidak sesuai,
              laporkan kepada admin atau developer yang bertanggung jawab atas
              dashboard.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}