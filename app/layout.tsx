import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <nav style={{ backgroundColor: '#00234b', padding: '1rem', borderBottom: '4px solid #b3a169' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '20px' }}>
            <Link href="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>HOME (News)</Link>
            <Link href="/players" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>PLAYERS</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}