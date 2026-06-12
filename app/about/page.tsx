import Link from "next/link";

const leadership = [
  {
    name: "Ambati Nava Kumar",
    role: "Director – Zenvora Group",
    qual: "MBA",
    desc: "Dynamic entrepreneur and business advisor with extensive experience across infrastructure, cement, education, cold storage, and technology sectors. Expert in government coordination, project facilitation, and business networking.",
    expertise: ["Land Acquisition", "Infrastructure Development", "Government Relations", "Strategic Advisory"],
  },
  {
    name: "Ramesh Bonam",
    role: "Technology & Business Advisor",
    qual: "22+ Years Experience",
    desc: "Technology entrepreneur with 22 years of international experience in South Africa. Founder & CEO of Cloud4sa, delivering 40+ government & private IT projects. Active business leader bridging technology and operations across India.",
    expertise: ["Cloud Solutions", "IT Strategy", "Pan-India Operations", "Real Estate Advisory"],
  },
];

const values = [
  { icon: "🤝", title: "Reliability", desc: "We deliver on our commitments — on time, every time." },
  { icon: "⭐", title: "Quality", desc: "Every candidate is thoroughly screened and verified before deployment." },
  { icon: "🔒", title: "Compliance", desc: "Full legal compliance and documentation support for all placements." },
  { icon: "🌱", title: "Growth", desc: "Creating opportunities for businesses and job seekers to grow together." },
];

const process = [
  { step: "01", title: "Understanding Requirements", desc: "We analyze client workforce needs and project specifications." },
  { step: "02", title: "Talent Sourcing", desc: "Identifying suitable candidates through our extensive recruitment network." },
  { step: "03", title: "Screening & Evaluation", desc: "Candidates undergo thorough assessment and verification." },
  { step: "04", title: "Deployment", desc: "Qualified personnel deployed efficiently per project timelines." },
  { step: "05", title: "Ongoing Support", desc: "Continuous workforce management and dedicated client support." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 120, background: "#0a0a1a", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #050510 0%, #0d1b3e 50%, #1a0a2e 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-divider" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "white", marginBottom: 20 }}>
            About <span className="gradient-text">Zenvora Group</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.8 }}>
            Building India&apos;s Workforce, One Opportunity at a Time
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "72px 20px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-2col-center">
            <div className="card-glass" style={{ padding: 36 }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>🎯</div>
              <h2 style={{ color: "#f0c040", fontWeight: 800, fontSize: 22, marginBottom: 14 }}>Our Mission</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>
                To empower businesses with reliable, qualified, and productive workforce solutions while creating meaningful employment opportunities for individuals across India.
              </p>
            </div>
            <div className="card-glass" style={{ padding: 36 }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>🌟</div>
              <h2 style={{ color: "#f0c040", fontWeight: 800, fontSize: 22, marginBottom: 14 }}>Our Vision</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>
                To become India&apos;s most trusted workforce solutions company connecting talent with opportunities and helping organizations achieve sustainable growth through exceptional human capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About content + stats */}
      <section style={{ padding: "60px 20px", background: "linear-gradient(180deg, #0a0a1a 0%, #0d1b3e 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-2col-center">
            <div>
              <div className="section-divider" style={{ margin: "0 0 16px 0" }} />
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, color: "white", marginBottom: 18 }}>
                Delivering Human Capital Solutions That Drive{" "}
                <span className="gradient-text">Business Success</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                Zenvora Group specializes in manpower supply, workforce management, recruitment, and staffing solutions. We help organizations overcome workforce challenges by providing qualified personnel for temporary, contract, project-based, and permanent positions.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>
                With an extensive talent network, industry expertise, and a commitment to quality, we connect employers with skilled professionals and workers who contribute to business growth across all major states and cities in India.
              </p>
            </div>
            <div className="grid-2x2">
              {[
                { icon: "🏆", stat: "500+", label: "Satisfied Clients" },
                { icon: "👷", stat: "10K+", label: "Workers Deployed" },
                { icon: "🏙️", stat: "20+", label: "Cities Served" },
                { icon: "📅", stat: "5+", label: "Years Experience" },
              ].map((item) => (
                <div key={item.label} className="card-glass" style={{ padding: 20, textAlign: "center" }}>
                  <div style={{ fontSize: 30, marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#f0c040" }}>{item.stat}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "72px 20px", background: "#050510" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </div>
          <div className="grid-auto-320">
            {values.map((v) => (
              <div key={v.title} className="card-glass hover-glow" style={{ padding: 28, textAlign: "center" }}>
                <div style={{ fontSize: 42, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ color: "#f0c040", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "72px 20px", background: "linear-gradient(180deg, #0a0a1a 0%, #0d1b3e 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Leadership <span className="gradient-text">Team</span>
            </h2>
          </div>
          <div className="grid-auto-320">
            {leadership.map((l) => (
              <div key={l.name} className="card-glass" style={{ padding: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "linear-gradient(135deg, #d4a017, #f0c040)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, color: "#0a0a1a", fontSize: 22, flexShrink: 0,
                  }}>{l.name[0]}</div>
                  <div>
                    <div style={{ color: "white", fontWeight: 800, fontSize: 16 }}>{l.name}</div>
                    <div style={{ color: "#f0c040", fontSize: 13, marginTop: 2 }}>{l.role}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 2 }}>{l.qual}</div>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{l.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {l.expertise.map((e) => (
                    <span key={e} style={{
                      background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.3)",
                      color: "#f0c040", fontSize: 11, padding: "4px 12px", borderRadius: 100,
                    }}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "72px 20px", background: "#050510" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid-auto-320">
            {process.map((p) => (
              <div key={p.step} className="card-glass" style={{ padding: 28, textAlign: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "linear-gradient(135deg, #d4a017, #f0c040)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, color: "#0a0a1a", fontSize: 15,
                  margin: "0 auto 16px",
                }}>{p.step}</div>
                <div style={{ color: "#f0c040", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{p.title}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 20px", textAlign: "center", background: "linear-gradient(135deg, #0d1b3e 0%, #1a0a2e 100%)" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", fontWeight: 800, color: "white", marginBottom: 14 }}>
          Partner With <span className="gradient-text">Zenvora Group</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, marginBottom: 28, maxWidth: 560, margin: "0 auto 28px" }}>
          Let&apos;s create workforce success together.
        </p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: 16 }}>Get in Touch →</Link>
      </section>
    </div>
  );
}
