"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function InfoButton({ title }: { title: string }) {
  return (
    <div className="relative group">
      <Image
        src="/tooltip3.svg"
        alt="Info"
        width={16}
        height={16}
        className="
          cursor-help
          opacity-70
          hover:opacity-100
          transition
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-full
          z-50
          mt-2
          -translate-x-1/2
          whitespace-nowrap
          rounded-xl
          bg-slate-900
          px-3
          py-2
          text-xs
          text-white
          shadow-xl
          opacity-0
          pointer-events-none
          transition-all
          duration-150
          group-hover:opacity-100
        "
      >
        {title}
      </div>
    </div>
  );
}

export default function AdminBlogPage() {
  const router = useRouter();

async function handleLogout() {
  await fetch("/api/logout", {
    method: "POST",
  });

  router.push("/login");
  router.refresh();
}
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-10 md:py-14">

        {/* Logout */}
        <div className="flex justify-end mb-6">
            <button
              onClick={handleLogout}
              className="
                px-4
                py-2
                rounded-xl
                border
                border-red
                bg-red-50
                text-red
                text-sm
                font-medium
                font-bold
                cursor-pointer
                hover:bg-red-100
                transition
              "
            >
              Logout
            </button>
          </div>
        
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
        <div className="relative mt-8 mb-10">

          

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              GARMENTO AI Blog Dashboard
            </h1>

            <p className="mt-3 text-slate-500 text-sm md:text-base">
              Generate artikel MDX, upload cover image, dan publish ke blog.
            </p>
          </div>

        </div>

        {/* Slug */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
                Slug Artikel
            </h2>

            <InfoButton title="Masukkan slug artikel yang akan digunakan sebagai URL." />
          </div>

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

        {/* AI Generator */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
                AI Generator
            </h2>

            <InfoButton title="Generate artikel otomatis berdasarkan slug yang dimasukkan." />
          </div>

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
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
                Cover Image
            </h2>

            <InfoButton title="Upload cover JPG dengan ukuran rekomendasi 1600 × 900 px." />
          </div>

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
        </section>

        {/* MDX Editor */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
                MDX Editor
            </h2>

            <InfoButton title="Edit dan review artikel sebelum disimpan atau dipublish." />
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

          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 justify-center mb-5">
                <h2 className="text-lg font-semibold text-slate-900">
                Actions
                </h2>

                <InfoButton title="Simpan sebagai draft atau langsung publish ke blog." />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
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
                        px-6
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

        </section>

        

        {/* Docs */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
                Docs
            </h2>

            <InfoButton title="Dokumentasi dashboard dan referensi internal." />
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <Link
                href="/admin-blog/docs/petunjuk-penggunaan"
                target="_blank"
                rel="noopener noreferrer"
                    className="
                        bg-white
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        hover:border-slate-400
                        hover:shadow-lg
                        hover:-translate-y-1
                        transition
                    "
            >
                <Image
                src="/docs.svg"
                alt=""
                width={42}
                height={42}
                className="mb-4"
                />

                <h3 className="font-semibold text-slate-900">
                Petunjuk Penggunaan
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                SOP operasional pembuatan artikel blog GARMENTO.
                </p>
            </Link>

            <Link
                href="/admin-blog/docs/template-prompt-cover"
                target="_blank"
                rel="noopener noreferrer"
                    className="
                        bg-white
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        hover:border-slate-400
                        hover:shadow-lg
                        hover:-translate-y-1
                        transition
                    "
            >
                <Image
                src="/photos.svg"
                alt=""
                width={42}
                height={42}
                className="mb-4"
                />

                <h3 className="font-semibold text-slate-900">
                Template Prompt Cover
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                Prompt siap copy ke GPT, Gemini, dan AI image generator.
                </p>
            </Link>

            <Link
                href="/admin-blog/docs/master-list-slug"
                target="_blank"
                rel="noopener noreferrer"
                    className="
                        bg-white
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        hover:border-slate-400
                        hover:shadow-lg
                        hover:-translate-y-1
                        transition
                    "
            >
                <Image
                src="/repo.svg"
                alt=""
                width={42}
                height={42}
                className="mb-4"
                />

                <h3 className="font-semibold text-slate-900">
                99 Master List Slug
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                Daftar 99 slug artikel siap produksi dan generate.
                </p>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}