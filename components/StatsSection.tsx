"use client";

const stats = [
  { num: "500+", label: "Clients Served" },
  { num: "10,000+", label: "Workers Deployed" },
  { num: "20+", label: "Cities Served" },
  { num: "8+", label: "Industries Covered" },
  { num: "99%", label: "Client Satisfaction" },
  { num: "24/7", label: "Support Available" },
];

export default function StatsSection() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0d1b3e 0%, #1a0a2e 100%)",
      borderTop: "1px solid rgba(212,160,23,0.2)",
      borderBottom: "1px solid rgba(212,160,23,0.2)",
      padding: "52px 20px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #d4a017, #f0c040)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: 6,
              }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
