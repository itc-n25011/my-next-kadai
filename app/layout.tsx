import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, backgroundColor: '#f4f7f9', fontFamily: 'sans-serif' }}>
        {/* ヘッダー：固定（fixed）にして、常に上に表示 */}
        <nav style={{ 
          backgroundColor: '#00234b', 
          padding: '0 20px', 
          borderBottom: '4px solid #b3a169',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '70px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            width: '100%',
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center' 
          }}>
            <Link href="/" style={{ color: '#fff', fontWeight: '900', textDecoration: 'none', fontSize: '1.2rem', letterSpacing: '1px' }}>
              ORIX <span style={{ color: '#b3a169' }}>MEDIA</span>
            </Link>
            
            <div style={{ display: 'flex', gap: '30px' }}>
              <Link href="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>HOME</Link>
              <Link href="/players" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>PLAYERS</Link>
            </div>
          </div>
        </nav>

        {/* メインコンテンツ：ヘッダーの高さ分（70px）の余白を作る */}
        <main style={{ marginTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}