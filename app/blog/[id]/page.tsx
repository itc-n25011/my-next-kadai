import Link from 'next/link';
import { client } from '@/libs/client';
import { Blog } from '@/type/blog';
import styles from './page.module.css';

export default async function Home() {
  const data = await client.get({ endpoint: 'blogs' });
  const posts: Blog[] = data.contents;

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1>ORIX BUFFALOES INSIGHT</h1>
      </header>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className={styles.card}>
            <img src={post.eyecatch?.url || '/no-image.jpg'} alt="" />
            <div className={styles.cardText}>
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}