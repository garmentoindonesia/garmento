import Link from "next/link";
import Image from "next/image";

import { BlogPost } from "@/types/blog";

interface RelatedArticlesProps {
  currentSlug: string;
  posts: BlogPost[];
}

export default function RelatedArticles({
  currentSlug,
  posts,
}: RelatedArticlesProps) {

  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">

          <p className="text-[#1E4ED8] font-semibold mb-3">
            ARTIKEL TERKAIT
          </p>

          <h2
            className="
              text-3xl md:text-5xl
              font-bold
              text-[#0F172A]
            "
          >
            Baca Artikel Lainnya
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {relatedPosts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                group

                bg-white

                rounded-[28px]

                border border-gray-200

                overflow-hidden

                shadow-sm

                hover:shadow-xl
                hover:-translate-y-2

                transition-all duration-300
              "
            >

              <div className="relative aspect-[16/9] overflow-hidden">

                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="
                    object-cover

                    transition-transform duration-500

                    group-hover:scale-105
                  "
                />

              </div>

              <div className="p-6">

                <span
                  className="
                    inline-flex

                    px-3 py-1

                    rounded-full

                    text-xs font-semibold

                    bg-[#1E4ED8]/10
                    text-[#1E4ED8]
                  "
                >
                  {post.category}
                </span>

                <h3
                  className="
                    mt-4

                    text-xl
                    font-bold

                    text-[#0F172A]

                    leading-snug
                  "
                >
                  {post.title}
                </h3>

                <p
                  className="
                    mt-3

                    text-gray-600

                    leading-relaxed

                    line-clamp-3
                  "
                >
                  {post.excerpt}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}