export const dynamic = "force-dynamic";
export const revalidate = 0;

import { client } from "@/libs/client";
import { Blog } from "@/type/blog";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await client.get({ endpoint: "blogs", contentId: id });
  const allData = await client.get({ endpoint: "blogs", queries: { fields: "id,title" } });

  const contents: Blog[] = allData.contents;
  const currentIndex = contents.findIndex((c) => c.id === id);
  const nextPost = contents[(currentIndex + 1) % contents.length];

  const rawTitle = post.title || "";
  const nameOnly = rawTitle.split(/[（(]/)[0].trim();
  const bodyHtml = post.content || (post as any).report || "";

  return (
    <main className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.backgroundWrapper}>
        {post.eyecatch?.url && (
          <Image src={post.eyecatch.url} alt={nameOnly} fill priority className={styles.heroImage} />
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.scrollContent}>
        <div className={styles.contentGrid}>
          
          {/* 左側：名前エリア（重ならないように配置） */}
          <div className={styles.leftSection}>
            <div className={styles.nextNavBox}>
              <p className={styles.nextLabel}>NEXT PERFORMANCE REPORT</p>
              <Link href={`/players/${nextPost.id}`} className={styles.nextLink}>
                <h3 className={styles.nextName}>{nextPost.title.split(/[（(]/)[0].trim()} →</h3>
              </Link>
            </div>

            <div className={styles.titleGroup}>
              <p className={styles.playerRole}>PLAYER PERFORMANCE REPORT</p>
              <h1 className={styles.playerName}>{nameOnly}</h1>
            </div>
          </div>

          {/* 右側：スタッツと本文 */}
          <div className={styles.rightSection}>
            <div className={styles.statsCard}>
              <h2 className={styles.statsTitle}>2025 SEASON STATS</h2>
              <div className={styles.statsList}>
                <div className={styles.statsItem}><span>AVG</span><span className={styles.value}>.266</span></div>
                <div className={styles.statsItem}><span>HR</span><span className={styles.value}>4</span></div>
                <div className={styles.statsItem}><span>RBI</span><span className={styles.value}>26</span></div>
                <div className={styles.statsItem}><span>STATUS</span><span className={styles.value}>REHAB</span></div>
              </div>
            </div>

            <div className={styles.articleBody}>
              <h3 className={styles.articleHeadline}>【2025年総括レポート】</h3>
              {/* エラーを修正：__html オブジェクトを確実に渡す */}
              <div 
                className={styles.richText} 
                dangerouslySetInnerHTML={{ __html: String(bodyHtml) }} 
              />
            </div>
            
            <div className={styles.footerInner}>
              <Link href="/players" className={styles.backLink}>← BACK TO ROSTER</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}