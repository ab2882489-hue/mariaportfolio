export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
        Maria Bibi
      </h1>
      <h2 style={{ fontSize: "20px", marginTop: "10px" }}>
        Creative Web Designer & Future Technologist
      </h2>

      <p style={{ marginTop: "40px", fontSize: "18px" }}>
        I am a BSIT student passionate about front-end development, creative digital work,
        and learning modern technologies. I love building websites, writing content, and
        experimenting with ideas.
      </p>

      <a
        href="mailto:ab2882489@gmail.com"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 22px",
          background: "blue",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Contact Me
      </a>
    </main>
  );
}
