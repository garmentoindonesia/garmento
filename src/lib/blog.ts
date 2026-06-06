import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BlogPost } from "@/types/blog";

const BLOG_PATH = path.join(
  process.cwd(),
  "src",
  "content",
  "blog"
);

/**
 * Ambil semua file MDX dari folder blog
 */
function getPostFiles() {
  return fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".mdx"));
}

/**
 * Ambil semua artikel
 */
export function getAllPosts(): BlogPost[] {
  const files = getPostFiles();

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");

    const filePath = path.join(BLOG_PATH, file);

    const source = fs.readFileSync(
      filePath,
      "utf8"
    );

    const { data } = matter(source);

    return {
      slug,

      title: data.title ?? "",

      excerpt: data.excerpt ?? "",

      cover: data.cover ?? "",

      date: data.date ?? "",

      category: data.category ?? "",

      author: data.author ?? "GARMENTO",

      keywords: data.keywords ?? [],

      featured: data.featured ?? false,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

/**
 * Ambil satu artikel berdasarkan slug
 */
export function getPostBySlug(
  slug: string
) {
  const filePath = path.join(
    BLOG_PATH,
    `${slug}.mdx`
  );

  const source = fs.readFileSync(
    filePath,
    "utf8"
  );

  const { data, content } =
    matter(source);

  return {
    slug,

    title: data.title ?? "",

    excerpt: data.excerpt ?? "",

    cover: data.cover ?? "",

    date: data.date ?? "",

    category: data.category ?? "",

    author: data.author ?? "GARMENTO",

    keywords: data.keywords ?? [],

    featured: data.featured ?? false,

    content,
  } as BlogPost;
}

/**
 * Ambil artikel terkait berdasarkan kategori
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.category === category
    )
    .slice(0, limit);
}

/**
 * Ambil semua slug untuk generateStaticParams
 */
export function getAllSlugs() {
  return getPostFiles().map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}