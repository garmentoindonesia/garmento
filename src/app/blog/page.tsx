import HeroBlog from "@/components/blog/HeroBlog";
import GridBlog from "@/components/blog/GridBlog";

import { getAllPosts } from "@/lib/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Produksi Kaos Custom & Polo Shirt - GARMENTO",
  description:
    "Artikel seputar produksi kaos custom, polo shirt, bahan kaos, teknik sablon, dan tips memilih vendor apparel untuk corporate maupun event.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <HeroBlog />
      <GridBlog posts={posts} />
    </>
  );
}