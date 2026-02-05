export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: { url: string };
  publishedAt: string;
};

// type/blog.ts
export type Post = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  eyecatch?: {
    url: string;
  };
};