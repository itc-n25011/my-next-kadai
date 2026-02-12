export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
  };
  catchphrase?: string; // これを追記することで、13行目の赤い波線が消えます
};