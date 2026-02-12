import Link from "next/link";

export default function Home() {
  return (
    <main style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      textAlign: "center" 
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        オリックス応援ブログへようこそ！
      </h1>
      <p style={{ marginBottom: "30px", color: "#666" }}>
        最新の選手レポートをチェックしましょう。
      </p>
      
      {/* 💡 ここから一覧ページへ飛べるようにします */}
      <Link href="/players" style={{
        padding: "15px 30px",
        backgroundColor: "#0070f3",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold"
      }}>
        選手一覧を見る
      </Link>
    </main>
  );
}