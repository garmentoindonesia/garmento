import Image from "next/image";

export default function AdminBlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-10 md:py-14">

        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Image
            src="/logoheadernavy.png"
            alt="GARMENTO"
            width={220}
            height={60}
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center mt-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            GARMENTO AI Blog Dashboard
          </h1>

          <p className="mt-3 text-slate-500 text-sm md:text-base">
            Generate artikel MDX, upload cover image, dan publish ke blog.
          </p>
        </div>

        {/* Slug */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">
            Slug Artikel
          </h2>

          <p className="text-sm text-slate-500 mb-4">
            URL artikel yang akan dipublish.
          </p>

          <input
            type="text"
            placeholder="contoh: harga-kaos-custom-100-pcs"
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-slate-900
              outline-none
              transition
              focus:border-slate-900
              focus:ring-4
              focus:ring-slate-200
            "
          />
        </section>

        {/* Generate */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">
            AI Generator
          </h2>

          <p className="text-sm text-slate-500 mb-5">
            Generate artikel otomatis menggunakan AI.
          </p>

          <button
            className="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-medium
              cursor-pointer
              transition
              hover:bg-slate-800
              active:scale-[0.98]
            "
          >
            Generate Artikel
          </button>
        </section>

        {/* Cover */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">
            Cover Image
          </h2>

          <p className="text-sm text-slate-500 mb-4">
            Upload gambar cover artikel.
          </p>

          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6">
            <input
              type="file"
              accept=".jpg,.jpeg"
              className="
                block
                w-full
                text-sm
                cursor-pointer
                file:cursor-pointer
                file:mr-4
                file:px-4
                file:py-2
                file:rounded-lg
                file:border-0
                file:bg-slate-900
                file:text-white
                file:font-medium
                hover:file:bg-slate-800
              "
            />
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Format JPG • Rekomendasi 1600 × 900 px
          </p>
        </section>

        {/* Markdown */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              MDX Editor
            </h2>

            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Markdown / MDX
            </span>
          </div>

          <textarea
            placeholder="Hasil artikel dari Gemini akan muncul di sini..."
            className="
              w-full
              min-h-[700px]
              rounded-2xl
              border
              border-slate-300
              bg-slate-50
              p-5
              font-mono
              text-sm
              leading-7
              outline-none
              transition
              focus:border-slate-900
              focus:ring-4
              focus:ring-slate-200
            "
          />
        </section>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-center">
        <button
            className="
            px-5
            py-3
            rounded-xl
            border
            border-slate-300
            bg-white
            font-medium
            cursor-pointer
            hover:bg-slate-50
            transition
            "
        >
            Save Draft
        </button>

        <button
        className="
            px-8
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
        Publish
        </button>
        </div>

      </div>
    </main>
  );
}