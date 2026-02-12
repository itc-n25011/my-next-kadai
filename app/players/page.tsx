export const dynamic = "force-dynamic";
export const revalidate = 0;

import { client } from "@/libs/client";
import { Blog } from "@/type/blog";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default async function PlayersPage() {
  const data = await client.get({
    endpoint: "blogs",
    queries: { fields: "id,title,eyecatch" },
  });

  const players: Blog[] = data.contents;

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.category}>TEAM ROSTER</p>
        <h1 className={styles.pageTitle}>PLAYER PERFORMANCE REPORT</h1>
      </header>

      <div className={styles.grid}>
        {players.map((player) => {
          const fullTitle = player.title || "";
          // 名前とキャッチフレーズを綺麗に分ける
          const nameOnly = fullTitle.split(/[（(]/)[0].trim();
          const matchResult = fullTitle.match(/[（(](.*?)[）)]/);
          const catchphrase = matchResult ? matchResult[1] : "";

          return (
            <Link href={`/players/${player.id}`} key={player.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {player.eyecatch && (
                  <Image
                    src={player.eyecatch.url}
                    alt={nameOnly}
                    fill
                    className={styles.playerImage}
                    priority
                  />
                )}
                
                {/* 顔に被らないように配置したテキストエリア */}
                <div className={styles.imageTextOverlay}>
                  <p className={styles.englishTitle}>ATHLETE PROFILE</p>
                  {catchphrase && <p className={styles.catchphrase}>{catchphrase}</p>}
                </div>

                <div className={styles.hoverOverlay}>
                  <span className={styles.btnText}>VIEW REPORT</span>
                </div>
              </div>

              <div className={styles.info}>
                <p className={styles.teamName}>ORIX BUFFALOES</p>
                <h2 className={styles.pureName}>{nameOnly}</h2>
              </div>
            </Link>
          );
        })}
      </div>

      <footer className={styles.siteFooter}>
        <Link href="/" className={styles.homeBack}>← BACK TO HOME</Link>
        <p className={styles.copyright}>© 2026 ORIX PERFORMANCE MEDIA</p>
      </footer>
    </main>
  );
}