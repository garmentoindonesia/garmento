import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden bg-[#0B0C0D]">

      {/* BACKGROUND IMAGE (layer 1) */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/bgfooter.jpg')",
          backgroundPosition: "top center",
        }}
      />

      {/* DARK OVERLAY (layer 2 - separate, bukan digabung) */}
      <div className="absolute inset-0 bg-[#0B0C0D]/70" />

      {/* EXTRA VIGNETTE (biar cinematic, optional tapi premium) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-transparent to-[#0B0C0D]/40" />

      {/* CONTENT (layer 3) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-12">

          {/* BRAND */}
          <div>
            <Image
              src="/footerlogo.png"
              alt="GARMENTO"
              width={190}
              height={60}
            />

            <p className="mt-5 text-sm text-gray-300 leading-relaxed max-w-xs">
              Vendor kaos custom terpercaya untuk kebutuhan kaos corporate,
              event dan instansi dalam jumlah besar dengan kualitas terbaik.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-4 pt-5">

              <a
                href="https://instagram.com/garmento"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  bg-white/5 backdrop-blur-sm

                  flex items-center justify-center

                  hover:bg-white/10
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </a>

              <a
                href="https://tiktok.com/@garmento"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  bg-white/5 backdrop-blur-sm

                  flex items-center justify-center

                  hover:bg-white/10
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  width={18}
                  height={18}
                />
              </a>

              <a
                href="https://facebook.com/@garmento"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-10 h-10
                rounded-full
                border border-white/10
                bg-white/5 backdrop-blur-sm

                flex items-center justify-center

                hover:bg-white/10
                hover:-translate-y-1
                transition-all duration-300
                "
              >
              <Image
                src="/facebookputih.svg"
                alt="facebook"
                width={18}
                    height={18}
                />
              </a>

            </div>

          </div>

          {/* LAYANAN */}
          <div>
            <h3 className="font-semibold text-lg">Layanan</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">

              <Link href="/layanan/produksi-kaos-custom" className="hover:text-white transition">
                Produksi Kaos Custom
              </Link>

              <Link href="/layanan/produksi-polo-shirt" className="hover:text-white transition">
                Produksi Polo Shirt
              </Link>

              <Link href="/portofolio" className="hover:text-white transition">
                Portofolio
              </Link>

            </div>
          </div>

          {/* PERUSAHAAN */}
          <div>
            <h3 className="font-semibold text-lg">Perusahaan</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">

              <Link href="/tentang-kami" className="hover:text-white transition">
                Tentang Kami
              </Link>

              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>


            </div>
          </div>

          {/* HUBUNGI */}
          <div>
            <h3 className="font-semibold text-lg">Hubungi Kami</h3>

            <div className="mt-5 flex flex-col gap-5">

              <a href="https://wa.me/6281329269977" className="flex items-start gap-3 group">
                <Image src="/wa.svg" alt="WA" width={20} height={20} />
                <div>
                  <p className="text-sm text-white">WhatsApp</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition">
                    0813-2926-9977
                  </p>
                </div>
              </a>

              <a href="mailto:garmento.indonesia@gmail.com" className="flex items-start gap-3 group">
                <Image src="/email.svg" alt="Email" width={20} height={20} />
                <div>
                  <p className="text-sm text-white">Email</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition break-all">
                    garmento.indonesia@gmail.com
                  </p>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/zfrafA6HVQLBpx7m8" className="flex items-start gap-3 group">
                <Image src="/map.svg" alt="Map" width={20} height={20} />
                <div>
                  <p className="text-sm text-white">Rep. Office PT Nusa Garment Indonesia</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition">
                    Jl. Bintaro Tengah Blok J4 No.12 Bintaro Pesanggrahan, Jakarta Selatan
                  </p>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/jLiq3Eev19tLpshH6" className="flex items-start gap-3 group">
                <Image src="/map.svg" alt="Map" width={20} height={20} />
                <div>
                  <p className="text-sm text-white">Production Center</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition">
                    Jl. Menayu Lor Plurugan No.112 Tirtonirmolo Kasihan, Bantul, Daerah Istimewa Yogyakarta
                  </p>
                </div>
              </a>

              

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-400">
              © 2026 GARMENTO. All rights reserved.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}