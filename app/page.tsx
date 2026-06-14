import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const services = [
  { img: "/skilled workforce.JPG",       title: "Skilled Workforce",        desc: "Electricians, welders, fitters, HVAC technicians, heavy equipment operators and more qualified professionals." },
  { img: "/construction manpower.JPG",   title: "Construction Manpower",    desc: "End-to-end workforce supply for residential, commercial, infrastructure, roads & EPC projects." },
  { img: "/white collar jobs.JPG",       title: "White Collar Staffing",    desc: "Engineers, managers, IT professionals, HR, finance and corporate roles across industries." },
  { img: "/contract staffing.JPG",       title: "Contract Staffing",        desc: "Flexible short-term and long-term staffing with payroll support and compliance management." },
  { img: "/internation staffing.JPG",    title: "International Recruitment",desc: "Supplying skilled blue & white collar professionals to UAE, USA, Germany, Europe, Africa and beyond." },
  { img: "/industrial workforce.JPG",    title: "Industrial Workforce",     desc: "Factory workers, machine operators, technicians and supervisors for manufacturing industries." },
];

const industries = [
  { img: "/construction manpower.JPG", name: "Construction & Infrastructure" },
  { img: "/industrial workforce.JPG",  name: "Manufacturing" },
  { img: "/skilled workforce.JPG",     name: "Oil & Gas" },
  { img: "/contract staffing.JPG",     name: "Logistics & Warehousing" },
  { img: "/white collar jobs.JPG",     name: "Information Technology" },
  { img: "/internation staffing.JPG",  name: "Healthcare" },
  { img: "/white collar jobs.JPG",     name: "Hospitality" },
  { img: "/internation staffing.JPG",  name: "MNCs & Corporate" },
];

const whyChoose = [
  { icon: "🌐", title: "Pan-India Network", desc: "Extensive talent database covering all major states and cities across India." },
  { icon: "⚡", title: "Fast Deployment", desc: "Quick turnaround time ensuring your workforce needs are met without delays." },
  { icon: "✅", title: "Quality Screening", desc: "Thorough assessment and verification processes for every candidate." },
  { icon: "📊", title: "Compliance Support", desc: "Complete documentation and legal compliance for all workforce deployments." },
];

export default function HomePage() {
  return (
    <div style={{ background: "#faf9f7" }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fffef9 0%, #fdf6e8 40%, #fff8f0 100%)",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: 90,
      }}>
        {/* Soft warm orb */}
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: 480, height: 480,
          background: "radial-gradient(circle, rgba(212,144,10,0.08) 0%, transparent 70%)",
          borderRadius: "50%", animation: "pulse 5s ease-in-out infinite", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px", position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-grid">
            {/* Left text */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(212,144,10,0.1)", border: "1px solid rgba(212,144,10,0.3)",
                borderRadius: 100, padding: "6px 14px", marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, background: "#d4900a", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ color: "#d4900a", fontSize: 13, fontWeight: 600 }}>India&apos;s Trusted Workforce Partner</span>
              </div>

              <h1 style={{ fontSize: "clamp(2rem, 5.5vw, 3.4rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, color: "#1a1a1a" }}>
                Connecting Businesses with the{" "}
                <span className="gradient-text">Right Talent</span>,
                Across India &amp; the Globe
              </h1>

              <p style={{ color: "#666666", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.8, marginBottom: 32 }}>
                Zenvora Group delivers skilled, semi-skilled, and unskilled manpower to construction companies, MNCs, manufacturing industries, and global organizations. Your workforce. Our responsibility.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: 15 }}>Request Manpower →</Link>
                <Link href="/services" className="btn-outline" style={{ fontSize: 15 }}>Our Services</Link>
              </div>

              <div style={{ display: "flex", gap: 36, marginTop: 44, flexWrap: "wrap" }}>
                {[{ num: "500+", label: "Clients Served" }, { num: "10K+", label: "Workers Deployed" }, { num: "15+", label: "Countries" }].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: "#1a1a1a" }}>{num}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right orbital — light grey rings */}
            <div className="hero-visual">
              <div style={{ position: "relative", width: 380, height: 380 }}>
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid #e0dbd0", borderRadius: "50%", animation: "spin 24s linear infinite" }} />
                <div style={{ position: "absolute", inset: 30, border: "1.5px solid #ede9e0", borderRadius: "50%", animation: "spin 18s linear infinite reverse" }} />
                <div style={{ position: "absolute", inset: 55, border: "1px solid #f0ece4", borderRadius: "50%", animation: "spin 30s linear infinite" }} />
                {/* Centre circle */}
                <div style={{
                  position: "absolute", inset: 90,
                  background: "linear-gradient(135deg, #fff8f0, #fdf6e8)",
                  borderRadius: "50%", border: "1.5px solid #e8e0cc",
                  boxShadow: "0 4px 24px rgba(212,144,10,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                }}>
                  <div style={{ fontSize: 50 }}>🌍</div>
                  <div style={{ color: "#d4900a", fontWeight: 800, fontSize: 13, letterSpacing: 2, marginTop: 8 }}>ZENVORA</div>
                  <div style={{ color: "#aaa", fontSize: 9, letterSpacing: 3 }}>GROUP</div>
                </div>
                {/* Location dots */}
                {[
                  { top: "7%",  left: "44%", label: "🇮🇳 India" },
                  { top: "24%", right: "1%", label: "🇦🇪 UAE" },
                  { top: "64%", right: "4%", label: "🇩🇪 Germany" },
                  { bottom: "7%", left: "38%", label: "🌍 Africa" },
                  { top: "24%", left: "1%",  label: "🇺🇸 USA" },
                ].map((dot) => (
                  <div key={dot.label} style={{
                    position: "absolute", ...dot,
                    background: "rgba(212,144,10,0.1)", border: "1px solid rgba(212,144,10,0.3)",
                    borderRadius: 100, padding: "4px 10px", fontSize: 11,
                    color: "#b07808", fontWeight: 600, whiteSpace: "nowrap",
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
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 14 }}>
              Our <span className="gradient-text">Services</span>
            </h2>
            <p style={{ color: "#777", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              Comprehensive manpower solutions tailored to your industry needs — domestic and international.
            </p>
          </div>
          <div className="grid-auto-320">
            {services.map((s) => (
              <div key={s.title} className="card-glass hover-glow" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ width: "100%", height: 180, overflow: "hidden" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 style={{ color: "#d4900a", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "#666", lineHeight: 1.7, fontSize: 14 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section style={{ padding: "80px 20px", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 14 }}>
              Industries We <span className="gradient-text">Serve</span>
            </h2>
          </div>
          <div className="grid-auto-200">
            {industries.map((ind) => (
              <Link key={ind.name} href="/industries" style={{ textDecoration: "none" }}>
                <div className="card-glass hover-glow" style={{ overflow: "hidden", padding: 0 }}>
                  <div style={{ height: 110, overflow: "hidden" }}>
                    <img src={ind.img} alt={ind.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "12px 12px 14px", textAlign: "center" }}>
                    <div style={{ color: "#333", fontSize: 13, fontWeight: 600 }}>{ind.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-2col-center">
            <div>
              <div className="section-divider" style={{ margin: "0 0 14px 0" }} />
              <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 18 }}>
                Why Choose <span className="gradient-text">Zenvora Group?</span>
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
                With an extensive talent network and industry expertise, we deliver workforce solutions that ensure productivity, compliance, and operational excellence.
              </p>
              <Link href="/about" className="btn-primary">Learn More About Us →</Link>
            </div>
            <div className="grid-2x2">
              {whyChoose.map((w) => (
                <div key={w.title} className="card-glass" style={{ padding: 20 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{w.icon}</div>
                  <h4 style={{ color: "#d4900a", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{w.title}</h4>
                  <p style={{ color: "#777", fontSize: 12, lineHeight: 1.6 }}>{w.desc}</p>
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
        background: "linear-gradient(135deg, #d4900a 0%, #f0a820 50%, #d4900a 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>
            Looking for Reliable Manpower?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, marginBottom: 32 }}>
            Get in touch today and build your workforce with confidence.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#ffffff", color: "#d4900a", fontWeight: 700, padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 16 }}>
              Contact Us Today →
            </Link>
            <Link href="/careers" style={{ background: "transparent", color: "#ffffff", fontWeight: 700, padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 16, border: "2px solid rgba(255,255,255,0.6)" }}>
              Join Our Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
