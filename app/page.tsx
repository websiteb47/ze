import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const services = [
  { icon: "🔧", title: "Skilled Workforce", desc: "Electricians, welders, fitters, HVAC technicians, heavy equipment operators and more qualified professionals." },
  { icon: "🏗️", title: "Construction Manpower", desc: "End-to-end workforce supply for residential, commercial, infrastructure, roads & EPC projects." },
  { icon: "👔", title: "White Collar Staffing", desc: "Engineers, managers, IT professionals, HR, finance and corporate roles across industries." },
  { icon: "📋", title: "Contract Staffing", desc: "Flexible short-term and long-term staffing with payroll support and compliance management." },
  { icon: "📍", title: "Pan-India Deployment", desc: "Rapid workforce deployment across all major states and cities in India with local expertise." },
  { icon: "🏭", title: "Industrial Workforce", desc: "Factory workers, machine operators, technicians and supervisors for manufacturing industries." },
];

const industries = [
  { icon: "🏗️", name: "Construction & Infrastructure" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🛢️", name: "Oil & Gas" },
  { icon: "📦", name: "Logistics & Warehousing" },
  { icon: "💻", name: "Information Technology" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "🏨", name: "Hospitality" },
  { icon: "🏢", name: "MNCs & Corporate" },
];

const whyChoose = [
  { icon: "🌐", title: "Pan-India Network", desc: "Extensive talent database covering all major states and cities across India." },
  { icon: "⚡", title: "Fast Deployment", desc: "Quick turnaround time ensuring your workforce needs are met without delays." },
  { icon: "✅", title: "Quality Screening", desc: "Thorough assessment and verification processes for every candidate." },
  { icon: "📊", title: "Compliance Support", desc: "Complete documentation and legal compliance for all workforce deployments." },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #050510 0%, #0d1b3e 40%, #1a0a2e 70%, #050510 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 120,
      }}>
        {/* bg orbs — pointer-events:none so they never cause overflow */}
        <div style={{
          position: "absolute", top: "15%", right: "10%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)",
          borderRadius: "50%", animation: "pulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px", position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.3)",
                borderRadius: 100, padding: "6px 16px", marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, background: "#f0c040", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ color: "#f0c040", fontSize: 13, fontWeight: 600 }}>India&apos;s Trusted Manpower Partner</span>
              </div>

              <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, color: "white" }}>
                Connecting Businesses with the{" "}
                <span className="gradient-text">Right Talent</span>,
                Across India
              </h1>

              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.8, marginBottom: 32 }}>
                Zenvora Group delivers skilled, semi-skilled, and unskilled manpower to construction companies, MNCs, and manufacturing industries. Your workforce. Our responsibility.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: 16 }}>Request Manpower →</Link>
                <Link href="/services" className="btn-outline" style={{ fontSize: 16 }}>Our Services</Link>
              </div>

              <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
                {[{ num: "500+", label: "Clients Served" }, { num: "10K+", label: "Workers Deployed" }, { num: "8+", label: "Industries Covered" }].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "#f0c040" }}>{num}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hidden on mobile via CSS class */}
            <div className="hero-visual">
              <div style={{ position: "relative", width: 380, height: 380 }}>
                <div style={{ position: "absolute", inset: 0, border: "2px solid rgba(212,160,23,0.3)", borderRadius: "50%", animation: "spin 20s linear infinite" }} />
                <div style={{ position: "absolute", inset: 30, border: "1px solid rgba(212,160,23,0.15)", borderRadius: "50%", animation: "spin 15s linear infinite reverse" }} />
                <div style={{
                  position: "absolute", inset: 80,
                  background: "radial-gradient(circle, rgba(212,160,23,0.2) 0%, rgba(13,27,62,0.8) 70%)",
                  borderRadius: "50%", border: "2px solid rgba(212,160,23,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                }}>
                  {/* India map SVG */}
                  <svg width="64" height="78" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 8
                        C92 8 82 10 76 16
                        C68 22 62 26 56 34
                        C48 44 42 50 36 58
                        C28 68 22 76 18 86
                        C14 96 12 106 14 116
                        C16 126 20 134 26 142
                        C32 150 36 156 40 164
                        C46 176 50 186 56 196
                        C62 206 68 216 74 224
                        C80 232 88 238 96 238
                        C100 238 102 236 104 232
                        C108 226 112 218 116 210
                        C120 202 124 194 128 186
                        C134 174 140 164 146 154
                        C152 144 156 136 160 126
                        C166 114 168 104 168 94
                        C168 82 164 72 158 64
                        C152 56 146 48 138 42
                        C130 36 122 28 114 18
                        C110 12 106 8 100 8Z
                        M100 8 C104 8 110 10 116 14
                        C122 18 124 20 128 16
                        C122 10 112 8 100 8Z"
                      fill="url(#indiaFill)"
                      stroke="#f0c040"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    {/* Andaman rough dot */}
                    <circle cx="168" cy="170" r="5" fill="#f0c040" opacity="0.5"/>
                    {/* Delhi dot */}
                    <circle cx="98" cy="78" r="4" fill="#ffffff" opacity="0.9"/>
                    <defs>
                      <linearGradient id="indiaFill" x1="100" y1="8" x2="100" y2="238" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#f0c040"/>
                        <stop offset="60%" stopColor="#d4a017"/>
                        <stop offset="100%" stopColor="#8a5c00"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ color: "#f0c040", fontWeight: 800, fontSize: 15, letterSpacing: 2, marginTop: 6 }}>ZENVORA</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 3 }}>GROUP</div>
                </div>
                {[
                  { top: "8%", left: "50%", label: "Noida" },
                  { top: "25%", right: "2%", label: "🏙️ Hyderabad" },
                  { top: "65%", right: "5%", label: "🏙️ Mumbai" },
                  { bottom: "8%", left: "50%", label: "🏙️ Delhi" },
                  { top: "25%", left: "2%", label: "🏙️ Bangalore" },
                ].map((dot) => (
                  <div key={dot.label} style={{
                    position: "absolute", ...dot,
                    background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.4)",
                    borderRadius: 100, padding: "4px 10px", fontSize: 11, color: "#f0c040",
                    fontWeight: 600, whiteSpace: "nowrap",
                  }}>{dot.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── Services ── */}
      <section style={{ padding: "80px 20px", background: "linear-gradient(180deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", marginBottom: 16 }}>
              Our <span className="gradient-text">Services</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
              Comprehensive manpower solutions tailored to your industry needs.
            </p>
          </div>
          <div className="grid-auto-320">
            {services.map((s) => (
              <div key={s.title} className="card-glass hover-glow" style={{ padding: 28 }}>
                <div style={{ fontSize: 38, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ color: "#f0c040", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section style={{ padding: "80px 20px", background: "#050510" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", marginBottom: 16 }}>
              Industries We <span className="gradient-text">Serve</span>
            </h2>
          </div>
          <div className="grid-auto-200">
            {industries.map((ind) => (
              <Link key={ind.name} href="/industries" style={{ textDecoration: "none" }}>
                <div className="card-glass hover-glow" style={{ padding: "24px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 34, marginBottom: 10 }}>{ind.icon}</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 600 }}>{ind.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ padding: "80px 20px", background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-2col-center">
            <div>
              <div className="section-divider" style={{ margin: "0 0 16px 0" }} />
              <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 20 }}>
                Why Choose <span className="gradient-text">Zenvora Group?</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
                With an extensive talent network and industry expertise, we deliver workforce solutions that ensure productivity, compliance, and operational excellence.
              </p>
              <Link href="/about" className="btn-primary">Learn More About Us →</Link>
            </div>
            <div className="grid-2x2">
              {whyChoose.map((w) => (
                <div key={w.title} className="card-glass" style={{ padding: 20 }}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{w.icon}</div>
                  <h4 style={{ color: "#f0c040", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{w.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── CTA ── */}
      <section style={{
        padding: "72px 20px",
        background: "linear-gradient(135deg, #d4a017 0%, #f0c040 50%, #d4a017 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, color: "#0a0a1a", marginBottom: 14 }}>
            Looking for Reliable Manpower?
          </h2>
          <p style={{ color: "rgba(10,10,26,0.75)", fontSize: 17, marginBottom: 32 }}>
            Get in touch today and build your workforce with confidence.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#0a0a1a", color: "#f0c040", fontWeight: 700, padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 16 }}>
              Contact Us Today →
            </Link>
            <Link href="/careers" style={{ background: "transparent", color: "#0a0a1a", fontWeight: 700, padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 16, border: "2px solid #0a0a1a" }}>
              Join Our Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
