import Link from "next/link";

const serviceCategories = [
  {
    img: "/skilled workforce.JPG",
    title: "Skilled Workforce Supply",
    subtitle: "Qualified Professionals & Technicians",
    desc: "We provide experienced and certified skilled workers ready for immediate deployment on your projects.",
    roles: ["Electricians", "Welders", "Fabricators", "Plumbers", "Carpenters", "Fitters", "HVAC Technicians", "Machine Operators", "Heavy Equipment Operators", "Construction Supervisors"],
  },
  {
    img: "/construction manpower.JPG",
    title: "Construction Manpower Solutions",
    subtitle: "End-to-End Project Workforce",
    desc: "Dedicated workforce support for all types of construction and infrastructure projects across India.",
    roles: ["Residential Projects", "Commercial Buildings", "Infrastructure Projects", "Roads & Highways", "Industrial Construction", "EPC Projects"],
  },
  {
    img: "/industrial workforce.JPG",
    title: "Semi-Skilled & Unskilled Workforce",
    subtitle: "Operational & Labor Resources",
    desc: "Reliable manpower for labor-intensive operations, factory work, and support roles.",
    roles: ["Factory Workers", "Assembly Line Operators", "Warehouse Assistants", "General Laborers", "Loading & Unloading Staff", "Housekeeping Staff", "Helpers", "Support Workers"],
  },
  {
    img: "/white collar jobs.JPG",
    title: "White Collar Recruitment",
    subtitle: "Corporate & Professional Staffing",
    desc: "We help organizations recruit highly qualified professionals across corporate, technical, and management roles.",
    roles: ["Human Resources", "Finance & Accounts", "IT Professionals", "Engineers", "Project Managers", "Architects", "Operations Managers", "Business Development Executives"],
  },
  {
    img: "/contract staffing.JPG",
    title: "Contract Staffing",
    subtitle: "Flexible Workforce Solutions",
    desc: "Short-term and long-term contract staffing with full payroll and compliance management.",
    roles: ["Reduced Recruitment Costs", "Faster Hiring Process", "Workforce Flexibility", "Compliance Management", "Payroll Support", "Temporary to Permanent Options"],
  },
  {
    img: "/internation staffing.JPG",
    title: "International Recruitment",
    subtitle: "Global Workforce Solutions",
    desc: "Supplying skilled blue-collar and white-collar professionals to UAE, USA, Germany, Europe, Africa, and beyond.",
    roles: ["UAE & Middle East", "United States", "Germany & Europe", "Africa", "Skilled Blue Collar", "Qualified White Collar"],
  },
  {
    img: "/industrial workforce.JPG",
    title: "Industrial & Manufacturing Workforce",
    subtitle: "Factory & Plant Personnel",
    desc: "Comprehensive workforce supply for manufacturing plants, factories, and industrial facilities.",
    roles: ["Production Operators", "Quality Inspectors", "Maintenance Staff", "Machine Operators", "Supervisors", "Safety Officers"],
  },
  {
    img: "/white collar jobs.JPG",
    title: "Recruitment & Talent Acquisition",
    subtitle: "Strategic Hiring Solutions",
    desc: "Expert recruitment services to identify, evaluate, and hire the right talent for permanent positions.",
    roles: ["Permanent Staffing", "Executive Search", "Bulk Hiring", "Campus Recruitment", "Industry-Specific Recruitment", "Background Verification"],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 90, background: "#faf9f7", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #fffef9 0%, #fdf6e8 50%, #fff8f0 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(212,144,10,0.08) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div className="section-divider" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#1a1a1a", marginBottom: 20 }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p style={{ color: "#666", fontSize: 18, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            Comprehensive manpower solutions tailored to your industry needs — from skilled technicians to senior professionals, across all major states and cities in India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 24px", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
            {serviceCategories.map((service) => (
              <div key={service.title} className="card-glass hover-glow" style={{ overflow: "hidden", padding: 0 }}>
                <div style={{ width: "100%", height: 200, overflow: "hidden" }}>
                  <img src={service.img} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "24px 28px 28px" }}>
                  <div style={{ color: "#d4900a", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                    {service.subtitle}
                  </div>
                  <h3 style={{ color: "#1a1a1a", fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{service.title}</h3>
                  <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{service.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {service.roles.map((role) => (
                      <span key={role} style={{
                        background: "rgba(212,144,10,0.1)", border: "1px solid rgba(212,144,10,0.3)",
                        color: "#b07808", fontSize: 11, padding: "4px 10px", borderRadius: 100,
                      }}>{role}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{
        padding: "80px 24px",
        background: "#ffffff",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div className="section-divider" />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 48 }}>
            Why Clients Trust <span className="gradient-text">Zenvora Group</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { icon: "🌐", label: "Extensive Talent Database" },
              { icon: "⚡", label: "Fast Workforce Deployment" },
              { icon: "✅", label: "Quality Screening Process" },
              { icon: "📊", label: "Compliance & Documentation" },
              { icon: "🤝", label: "Dedicated Account Management" },
              { icon: "💰", label: "Cost-Effective Solutions" },
              { icon: "🗺️", label: "Deep Local Market Knowledge" },
              { icon: "🔗", label: "Long-Term Partnerships" },
            ].map((item) => (
              <div key={item.label} className="card-glass" style={{ padding: 24, textAlign: "center", background: "#ffffff", border: "1px solid #ede9e0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ color: "#1a1a1a", fontSize: 13, fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #d4900a, #f0a820)",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, color: "#ffffff", marginBottom: 16 }}>
          Ready to Build Your Workforce?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>
          Contact us today for a customized manpower solution tailored to your specific requirements.
        </p>
        <Link href="/contact" style={{
          background: "#ffffff", color: "#d4900a",
          fontWeight: 700, padding: "14px 40px", borderRadius: 8,
          textDecoration: "none", fontSize: 16,
        }}>
          Request Manpower →
        </Link>
      </section>
    </div>
  );
}
