import { notFound } from "next/navigation";

import { compileMDX } from "next-mdx-remote/rsc";

import {
  getAllSlugs,
  getPostBySlug,
  getAllPosts,
} from "@/lib/blog";

import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import RelatedArticles from "@/components/blog/RelatedArticles";
import CTAArtikel from "@/components/blog/CTAArtikel";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  return {
    title: `${post.title} | GARMENTO`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return getAllSlugs();
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({
  params,
}: PageProps) {

  const { slug } = await params;

  try {

    const post = getPostBySlug(slug);

    const allPosts = getAllPosts();

    const { content } = await compileMDX({
      source: post.content || "",
    });

    return (

      <main className="bg-white">

        <ArticleHero
          category={post.category}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author || "GARMENTO"}
          date={post.date}
          cover={post.cover}
        />
         
        <ArticleContent>
          {content}
        </ArticleContent>
        
        <CTAArtikel />

        <RelatedArticles
          currentSlug={post.slug}
          posts={allPosts}
        />
        
      </main>

    );

  } catch {

    notFound();

  }

}