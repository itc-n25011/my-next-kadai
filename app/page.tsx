// app/page.tsx
import Link from 'next/link';
import { client } from '../libs/client'; 
import type { Post } from '../type/blog'; // 「type」を追加するとより安全です
import styles from './page.module.css';

// ...（以下のコードはそのまま）

export default async function Home() {
  // microCMSから記事一覧を取得
  const data = await client.get({ 
    endpoint: 'blogs',
    queries: { fields: 'id,title,publishedAt' } 
  });
  const posts: Post[] = data.contents;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ORIX Buffaloes Insight</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <Link href={`/blog/${post.id}`}>
              <time className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}