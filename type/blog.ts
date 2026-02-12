// type/blog.ts
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
  };
  publishedAt: string;
  // 👇 ここに report を追加しました！
  report?: string;
};

// Post型も使っている場合は、こちらにも追加しておくと安心です
export type Post = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  eyecatch?: {
    url: string;
  };
  report?: string;
};