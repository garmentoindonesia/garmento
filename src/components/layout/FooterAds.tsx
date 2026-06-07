import Link from "next/link";

export default function FooterAds() {
  return (
    <footer
      className="
        bg-[#0B0C0D]
        border-t
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-8

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-4
        "
      >
        {/* COPYRIGHT */}
        <p
          className="
            text-sm
            text-gray-400
            text-center
            md:text-left
          "
        >
          © 2026 GARMENTO. All rights reserved.
        </p>

        {/* LEGAL LINKS */}
        <div
          className="
            flex
            items-center

            gap-5

            text-sm
          "
        >
          <Link
            href="/privacy-policy"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}