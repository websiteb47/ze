"use client";

const stats = [
  { num: "500+",    label: "Clients Served" },
  { num: "10,000+", label: "Workers Deployed" },
  { num: "15+",     label: "Countries Served" },
  { num: "8+",      label: "Industries Covered" },
  { num: "99%",     label: "Client Satisfaction" },
  { num: "24/7",    label: "Support Available" },
];

export default function StatsSection() {
  return (
    <section style={{
      background: "#ffffff",
      borderTop: "1px solid #ede9e0",
      borderBottom: "1px solid #ede9e0",
      padding: "48px 20px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: "#1a1a1a", marginBottom: 4,
              }}>{s.num}</div>
              <div style={{ color: "#888", fontSize: 13, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
