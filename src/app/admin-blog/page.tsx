import Image from "next/image";

export default function AdminBlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex justify-center mb-6">
          <Image
            src="/logoheadernavy.png"
            alt="GARMENTO"
            width={220}
            height={60}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-900">
          GARMENTO AI Blog Dashboard
        </h1>

      </div>
    </main>
  );
}