import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  category: string;
}

interface GridBlogProps {
  posts: BlogPost[];
}

export default function GridBlog({
  posts,
}: GridBlogProps) {
  return (
    <section className="bg-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div
          className="
            flex
            flex-col
            lg:flex-row

            lg:items-end
            lg:justify-between

            gap-6
          "
        >

          <div>

            <p
              className="
                text-[#1E4ED8]

                text-sm
                font-semibold

                uppercase

                tracking-[0.15em]
              "
            >
              Artikel Terbaru
            </p>

            <h2
              className="
                mt-3

                text-4xl
                md:text-5xl

                font-bold

                text-[#111827]

                leading-[1.15]
              "
            >
              Insight &
              <span className="text-[#1E4ED8]">
                {" "}Panduan Produksi
              </span>
            </h2>

          </div>

          <p
            className="
              max-w-xl

              text-gray-600

              leading-relaxed
            "
          >
            Pelajari berbagai strategi produksi apparel,
            pemilihan bahan, teknik sablon, bordir,
            hingga tips memilih vendor untuk kebutuhan
            perusahaan dan event.
          </p>

        </div>

        {/* GRID */}
        <div
          className="
            mt-14

            grid

            md:grid-cols-2
            xl:grid-cols-3

            gap-8
          "
        >

          {posts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                group

                bg-white

                rounded-[28px]

                overflow-hidden

                border
                border-gray-200

                shadow-[0_15px_40px_rgba(0,0,0,0.05)]

                hover:-translate-y-2

                hover:shadow-[0_25px_60px_rgba(30,78,216,0.10)]

                transition-all
                duration-500

                cursor-pointer
              "
            >

              {/* COVER */}
              <div className="overflow-hidden">

                <Image
                  src={post.cover}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="
                    w-full

                    aspect-[16/10]

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <div
                  className="
                    flex
                    items-center
                    gap-3

                    text-xs

                    mb-4
                  "
                >

                  <span
                    className="
                      bg-[#1E4ED8]/10

                      text-[#1E4ED8]

                      px-3
                      py-1

                      rounded-full

                      font-semibold
                    "
                  >
                    {post.category}
                  </span>

                  <span className="text-gray-500">
                    {post.date}
                  </span>

                </div>

                <h3
                  className="
                    text-xl

                    font-bold

                    text-[#111827]

                    leading-snug

                    group-hover:text-[#1E4ED8]

                    transition-colors
                  "
                >
                  {post.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-gray-600

                    leading-relaxed

                    line-clamp-3
                  "
                >
                  {post.excerpt}
                </p>

                <div
                  className="
                    mt-6

                    text-[#1E4ED8]

                    font-semibold

                    flex
                    items-center

                    gap-2
                  "
                >
                  Baca Artikel

                  <span
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}