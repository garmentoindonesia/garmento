import HeroBlog from "@/components/blog/HeroBlog";
import GridBlog from "@/components/blog/GridBlog";

import { getAllPosts } from "@/lib/blog";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default:
      "Blog Produksi Kaos Custom & Polo Shirt | GARMENTO",
    template: "%s | GARMENTO",
  },

  description:
    "Artikel seputar produksi kaos custom, polo shirt, bahan kaos, teknik sablon, dan tips memilih vendor apparel untuk corporate maupun event.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    type: "website",
    url: "/blog",
    title:
      "Blog Produksi Kaos Custom & Polo Shirt | GARMENTO",
    description:
      "Artikel seputar produksi kaos custom, polo shirt, bahan kaos, teknik sablon, dan tips memilih vendor apparel untuk corporate maupun event.",
    siteName: "GARMENTO",
    images: [
      {
        url: "/og-image-blog.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Blog Produksi Kaos Custom & Polo Shirt | GARMENTO",
    description:
      "Artikel seputar produksi kaos custom, polo shirt, bahan kaos, teknik sablon, dan tips memilih vendor apparel untuk corporate maupun event.",
    images: ["/og-image-blog.jpg"],
  },
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