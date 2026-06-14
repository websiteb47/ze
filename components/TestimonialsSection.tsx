const testimonials = [
  { name: "Rajesh Kumar",   role: "Project Director, ABC Construction",     text: "Zenvora Group supplied 200+ skilled workers for our infrastructure project within 2 weeks. Exceptional quality and compliance support.", rating: 5 },
  { name: "Priya Sharma",   role: "HR Manager, Global MNC",                 text: "Their white-collar staffing solutions helped us onboard 50 professionals across finance and IT. Highly professional and responsive team.", rating: 5 },
  { name: "Ahmed Al-Rashid",role: "Operations Head, Dubai Contracting Co.", text: "We hired 100+ welders and electricians through Zenvora for our UAE projects. Documentation was seamless and workers were well-trained.", rating: 5 },
  { name: "Suresh Reddy",   role: "MD, Hyderabad Manufacturing",            text: "Reliable, fast, and cost-effective. Zenvora has been our go-to partner for factory workforce for over 3 years.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "80px 20px", background: "#faf9f7" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="section-divider" />
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 12 }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p style={{ color: "#888", fontSize: 15 }}>Trusted by hundreds of organizations across India and internationally.</p>
        </div>
        <div className="grid-auto-320">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass hover-glow" style={{ padding: 28 }}>
              <div style={{ display: "flex", marginBottom: 12 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#d4900a", fontSize: 16 }}>★</span>
                ))}
              </div>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: "linear-gradient(135deg, #d4900a, #f0a820)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, color: "#fff", fontSize: 16, flexShrink: 0,
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ color: "#1a1a1a", fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: "#999", fontSize: 12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
