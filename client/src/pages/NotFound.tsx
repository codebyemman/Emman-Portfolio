export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0a0a0c", color: "#f5f3ef", fontFamily: "sans-serif", padding: "24px", textAlign: "center" }}>
      <div>
        <p style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.15em", color: "#f97316", textTransform: "uppercase" }}>Error 404</p>
        <h1 style={{ fontSize: "48px", fontWeight: 700, margin: "12px 0 16px", letterSpacing: "-0.04em" }}>Page not found</h1>
        <p style={{ color: "#a0a0a7", fontSize: "14px", marginBottom: "24px" }}>The page you are looking for does not exist or has been relocated.</p>
        <a href="/" style={{ display: "inline-block", padding: "10px 20px", background: "#f97316", color: "#1a0b03", fontWeight: 700, fontSize: "11px", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px" }}>Return home</a>
      </div>
    </div>
  );
}
