// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ORIX <span>MEDIA</span>
        </Link>
        <div className={styles.links}>
          <Link href="/players" className={styles.link}>PLAYERS</Link>
          <Link href="/schedule" className={styles.link}>SCHEDULE</Link>
          <Link href="/stats" className={styles.link}>STATS</Link>
        </div>
      </div>
    </nav>
  );
}