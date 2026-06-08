import Image from "next/image";

export default function AdminBlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logoheadernavy.png"
            alt="GARMENTO"
            width={220}
            height={60}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-slate-900">
          GARMENTO AI Blog Dashboard
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-10">
          Generate artikel MDX, upload cover, dan publish ke blog.
        </p>

        {/* Slug */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Slug Artikel
          </h2>

          <input
            type="text"
            placeholder="contoh: harga-kaos-custom-100-pcs"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-800"
          />
        </section>

        {/* Generate */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            AI Generator
          </h2>

          <button
            className="px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:opacity-90 transition"
          >
            Generate Artikel
          </button>
        </section>

        {/* Cover */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Cover Image
          </h2>

          <input
            type="file"
            accept=".jpg,.jpeg"
            className="block w-full"
          />

          <p className="text-sm text-slate-500 mt-2">
            Format JPG • Rekomendasi 1600 × 900 px
          </p>
        </section>

        {/* Markdown */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            MDX Editor
          </h2>

          <textarea
            placeholder="Hasil artikel dari Gemini akan muncul di sini..."
            className="w-full min-h-[700px] rounded-lg border border-slate-300 p-4 font-mono text-sm outline-none focus:ring-2 focus:ring-slate-800"
          />
        </section>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <button
            className="px-5 py-3 rounded-lg border border-slate-300 bg-white font-medium"
          >
            Save Draft
          </button>

          <button
            className="px-5 py-3 rounded-lg bg-slate-900 text-white font-medium"
          >
            Publish
          </button>
        </div>

      </div>
    </main>
  );
}