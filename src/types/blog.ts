export interface BlogPost {
  slug: string;

  title: string;

  excerpt: string;

  cover: string;

  date: string;

  category: string;

  content?: string;

  author?: string;

  keywords?: string[];

  featured?: boolean;
}