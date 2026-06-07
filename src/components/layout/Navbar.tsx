"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileLayanan, setMobileLayanan] = useState(false);

  const isLayananActive = pathname.startsWith("/layanan");

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const navLink = (href: string, label: string) => {

    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`relative pb-1 transition duration-300 ${
          isActive
            ? scrolled
              ? "text-[#113972] font-semibold"
              : "text-white font-semibold"
            : scrolled
              ? "text-gray-700 hover:text-[#113972]"
              : "text-white hover:text-white/80"
        }`}
      >

        {label}

        {isActive && (
          <span
            className={`absolute left-0 bottom-0 w-full h-[2px] ${
              scrolled
                ? "bg-[#113972]"
                : "bg-white"
            }`}
          />
        )}

      </Link>
    );

  };

  return (

    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[#113972]/10 shadow-sm"
            : "bg-transparent border-transparent"
        }
      `}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-[88px] flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center transition duration-300 hover:scale-[1.02]"
          >

            <Image
              src={
                scrolled
                  ? "/logoheadernavy.png"
                  : "/footerlogo.png"
              }
              alt="Garmento Logo"
              width={170}
              height={70}
              priority
            />

          </Link>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-6 text-sm">

            {navLink("/", "Beranda")}

            {/* DROPDOWN */}
            <div className="relative group">

              <div
                className={`relative pb-1 flex items-center gap-1 cursor-pointer transition duration-300 ${
                  isLayananActive
                    ? scrolled
                      ? "text-[#113972] font-semibold"
                      : "text-white font-semibold"
                    : scrolled
                      ? "text-gray-700 hover:text-[#113972]"
                      : "text-white hover:text-white/80"
                }`}
              >

                <span>Layanan</span>

                <span className="text-[10px] translate-y-[1px]">
                  ▼
                </span>

                {isLayananActive && (
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] ${
                      scrolled
                        ? "bg-[#113972]"
                        : "bg-white"
                    }`}
                  />
                )}

              </div>

              {/* DROPDOWN MENU */}
              <div
                className="
                  absolute left-0 top-full pt-3
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all duration-300
                "
              >

                <div
                  className={`
                    w-64 p-3 rounded-2xl

                    backdrop-blur-2xl
                    border
                    shadow-2xl

                    transition-all duration-300

                    ${
                      scrolled
                        ? "bg-white/90 border-[#113972]/10"
                        : "bg-white/10 border-white/10"
                    }
                  `}
                >

                  <Link
                    href="/layanan/produksi-kaos-custom"
                    className={`
                      block py-2.5 px-3 rounded-lg transition

                      ${
                        scrolled
                          ? "text-gray-700 hover:bg-gray-50 hover:text-[#113972]"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    Produksi Kaos Custom
                  </Link>

                  <Link
                    href="/layanan/produksi-polo-shirt"
                    className={`
                      block py-2.5 px-3 rounded-lg transition

                      ${
                        scrolled
                          ? "text-gray-700 hover:bg-gray-50 hover:text-[#113972]"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    Produksi Polo Shirt
                  </Link>

                </div>

              </div>

            </div>

            {navLink("/portofolio", "Portofolio")}
            {navLink("/tentang", "Tentang Kami")}
            {navLink("/blog", "Blog")}

          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/6281329269977"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              hidden md:inline-flex
              px-5 py-2.5 rounded-xl
              text-sm font-medium
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg

              ${
                scrolled
                  ? "bg-[#113972] text-white"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
              }
            `}
          >
            Konsultasi Sekarang
          </a>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              relative z-[60]

              md:hidden
              flex flex-col justify-center items-center gap-1.5

              w-11 h-11
              rounded-xl

              bg-white/10
              backdrop-blur-md
              border border-white/10

              transition-all duration-300
            "
          >

            <span
              className={`
                h-[2px] w-6
                ${scrolled ? "bg-[#113972]" : "bg-white"}
                transition-all duration-300
                ${
                  mobileMenu
                    ? "rotate-45 translate-y-[7px]"
                    : ""
                }
              `}
            />

            <span
              className={`
                h-[2px] w-6
                ${scrolled ? "bg-[#113972]" : "bg-white"}
                transition-all duration-300
                ${
                  mobileMenu
                    ? "opacity-0"
                    : ""
                }
              `}
            />

            <span
              className={`
                h-[2px] w-6
                ${scrolled ? "bg-[#113972]" : "bg-white"}
                transition-all duration-300
                ${
                  mobileMenu
                    ? "-rotate-45 -translate-y-[7px]"
                    : ""
                }
              `}
            />

          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            relative z-[55]

            md:hidden
            overflow-hidden
            transition-all duration-300

            ${
              mobileMenu
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className={`
              mx-4 mb-4

              backdrop-blur-2xl
              rounded-3xl
              p-6

              flex flex-col gap-5

              border

              transition-all duration-300

              ${
                scrolled
                  ? "bg-white/85 border-[#113972]/10 shadow-[0_20px_60px_rgba(17,57,114,0.12)]"
                  : "bg-white/10 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              }
            `}
          >

            <Link
              href="/"
              className={`
                ${
                  scrolled
                    ? "text-[#113972]"
                    : "text-white"
                }

                text-lg font-medium
              `}
              onClick={() => setMobileMenu(false)}
            >
              Beranda
            </Link>

            <button
              onClick={() => setMobileLayanan(!mobileLayanan)}
              className={`
                flex items-center justify-between
                text-lg font-medium

                ${
                  scrolled
                    ? "text-[#113972]"
                    : "text-white"
                }
              `}
            >
              <span>Layanan</span>
              <span>{mobileLayanan ? "−" : "+"}</span>
            </button>

            <div
              className={`
                overflow-hidden transition-all duration-300 pl-4

                ${
                  mobileLayanan
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }
              `}
            >

              <div className="flex flex-col gap-3">

                <Link
                  href="/layanan/produksi-kaos-custom"
                  className={`
                    ${
                      scrolled
                        ? "text-gray-600"
                        : "text-white/80"
                    }
                  `}
                  onClick={() => setMobileMenu(false)}
                >
                  Produksi Kaos Custom
                </Link>

                <Link
                  href="/layanan/produksi-polo-shirt"
                  className={`
                    ${
                      scrolled
                        ? "text-gray-600"
                        : "text-white/80"
                    }
                  `}
                  onClick={() => setMobileMenu(false)}
                >
                  Produksi Polo Shirt
                </Link>

              </div>

            </div>

            <Link
              href="/portofolio"
              className={`
                ${
                  scrolled
                    ? "text-[#113972]"
                    : "text-white"
                }

                text-lg font-medium
              `}
              onClick={() => setMobileMenu(false)}
            >
              Portofolio
            </Link>

            <Link
              href="/tentang"
              className={`
                ${
                  scrolled
                    ? "text-[#113972]"
                    : "text-white"
                }

                text-lg font-medium
              `}
              onClick={() => setMobileMenu(false)}
            >
              Tentang Kami
            </Link>

            <Link
              href="/blog"
              className={`
                ${
                  scrolled
                    ? "text-[#113972]"
                    : "text-white"
                }

                text-lg font-medium
              `}
              onClick={() => setMobileMenu(false)}
            >
              Blog
            </Link>

            <a
              href="https://wa.me/6281329269977"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                mt-2

                text-center
                font-semibold

                px-6 py-4
                rounded-2xl

                transition-all duration-300

                hover:-translate-y-0.5
                hover:shadow-lg

                ${
                  scrolled
                    ? "bg-[#113972] text-white"
                    : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                }
              `}
            >
              Konsultasi Sekarang
            </a>

          </div>

        </div>

      </div>

    </header>

  );

}