import Image from "next/image";

interface ArticleHeroProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  cover: string;
}

export default function ArticleHero({
  category,
  title,
  excerpt,
  author,
  date,
  cover,
}: ArticleHeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/backgroundblog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-black/45
        "
      />

      {/* GLOW */}

      <div
        className="
          absolute

          top-0
          right-0

          w-[700px]
          h-[700px]

          bg-[#1E4ED8]/20

          blur-3xl

          rounded-full
        "
      />

      <div
        className="
          relative z-10

          max-w-6xl
          mx-auto

          px-6

          pt-36
          md:pt-44

          pb-20
        "
      >

        {/* CATEGORY */}

        <div
          className="
            inline-flex

            items-center

            px-4 py-2

            rounded-full

            bg-[#1E4ED8]/15

            border
            border-white/10

            backdrop-blur-xl

            text-white

            text-sm
            font-medium
          "
        >
          {category}
        </div>

        {/* TITLE */}

        <h1
          className="
            mt-6

            max-w-4xl

            text-4xl
            md:text-6xl

            font-bold

            text-white

            leading-[1.1]

            tracking-[-1px]
          "
        >
          {title}
        </h1>

        {/* EXCERPT */}

        <p
          className="
            mt-6

            max-w-3xl

            text-lg
            md:text-xl

            text-white/80

            leading-relaxed
          "
        >
          {excerpt}
        </p>

        {/* META */}

        <div
          className="
            mt-8

            flex
            items-center

            gap-4

            text-sm

            text-white/60
          "
        >
          <span>{author}</span>

          <span>•</span>

          <span>{date}</span>
        </div>

        {/* COVER */}

        <div className="mt-14">

          <div
            className="
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-xl

              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            "
          >

            <Image
              src={cover}
              alt={title}
              width={1600}
              height={900}
              priority
              className="
                w-full
                h-auto

                aspect-[16/9]

                object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}