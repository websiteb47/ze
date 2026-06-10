const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Director, ABC Construction",
    text: "Zenvora Group supplied 200+ skilled workers for our infrastructure project within 2 weeks. Exceptional quality and compliance support.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "HR Manager, Global MNC",
    text: "Their white-collar staffing solutions helped us onboard 50 professionals across finance and IT. Highly professional and responsive team.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Operations Head, Dubai Contracting Co.",
    text: "We hired 100+ welders and electricians through Zenvora for our UAE projects. Documentation was seamless and workers were well-trained.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "MD, Hyderabad Manufacturing",
    text: "Reliable, fast, and cost-effective. Zenvora has been our go-to partner for factory workforce for over 3 years.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{
      padding: "100px 24px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #050510 100%)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-divider" />
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", marginBottom: 16 }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16 }}>
            Trusted by hundreds of organizations across India and internationally.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass hover-glow" style={{ padding: 32, transition: "all 0.3s" }}>
              <div style={{ display: "flex", marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#f0c040", fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #d4a017, #f0c040)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, color: "#0a0a1a", fontSize: 16,
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
