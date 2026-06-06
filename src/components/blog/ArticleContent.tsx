import { ReactNode } from "react";

interface ArticleContentProps {
  children: ReactNode;
}

export default function ArticleContent({
  children,
}: ArticleContentProps) {
  return (
    <section className="bg-white py-20 md:py-24">

      <div className="max-w-4xl mx-auto px-6">

        <article className="article-content">
          {children}
        </article>

      </div>

    </section>
  );
}