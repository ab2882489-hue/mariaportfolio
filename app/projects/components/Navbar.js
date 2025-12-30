import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      background: "lightblue"
    }}>
      <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>Maria Bibi</h2>

      <div style={{ display: "flex", gap: "20px", fontSize: "18px" }}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <a href="mailto:ab2882489@gmail.com">Contact</a>
      </div>
    </nav>
  );
}
