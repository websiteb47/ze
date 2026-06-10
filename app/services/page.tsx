import Link from "next/link";

const serviceCategories = [
  {
    icon: "🔧",
    title: "Skilled Workforce Supply",
    subtitle: "Qualified Professionals & Technicians",
    desc: "We provide experienced and certified skilled workers ready for immediate deployment on your projects.",
    roles: ["Electricians", "Welders", "Fabricators", "Plumbers", "Carpenters", "Fitters", "HVAC Technicians", "Machine Operators", "Heavy Equipment Operators", "Construction Supervisors"],
    color: "#1a3a6e",
  },
  {
    icon: "🏗️",
    title: "Construction Manpower Solutions",
    subtitle: "End-to-End Project Workforce",
    desc: "Dedicated workforce support for all types of construction and infrastructure projects across India.",
    roles: ["Residential Projects", "Commercial Buildings", "Infrastructure Projects", "Roads & Highways", "Industrial Construction", "EPC Projects"],
    color: "#2a1a4e",
  },
  {
    icon: "👷",
    title: "Semi-Skilled & Unskilled Workforce",
    subtitle: "Operational & Labor Resources",
    desc: "Reliable manpower for labor-intensive operations, factory work, and support roles.",
    roles: ["Factory Workers", "Assembly Line Operators", "Warehouse Assistants", "General Laborers", "Loading & Unloading Staff", "Housekeeping Staff", "Helpers", "Support Workers"],
    color: "#1a4e2e",
  },
  {
    icon: "👔",
    title: "White Collar Recruitment",
    subtitle: "Corporate & Professional Staffing",
    desc: "We help organizations recruit highly qualified professionals across corporate, technical, and management roles.",
    roles: ["Human Resources", "Finance & Accounts", "IT Professionals", "Engineers", "Project Managers", "Architects", "Operations Managers", "Business Development Executives"],
    color: "#4e2a1a",
  },
  {
    icon: "📋",
    title: "Contract Staffing",
    subtitle: "Flexible Workforce Solutions",
    desc: "Short-term and long-term contract staffing with full payroll and compliance management.",
    roles: ["Reduced Recruitment Costs", "Faster Hiring Process", "Workforce Flexibility", "Compliance Management", "Payroll Support", "Temporary to Permanent Options"],
    color: "#2a4e1a",
  },
  {
    icon: "🌍",
    title: "International Recruitment",
    subtitle: "Global Workforce Solutions",
    desc: "Supplying skilled blue-collar and white-collar professionals to UAE, USA, Germany, Europe, Africa, and beyond.",
    roles: ["UAE & Middle East", "United States", "Germany & Europe", "Africa", "Skilled Blue Collar", "Qualified White Collar"],
    color: "#1a2a4e",
  },
  {
    icon: "🏭",
    title: "Industrial & Manufacturing Workforce",
    subtitle: "Factory & Plant Personnel",
    desc: "Comprehensive workforce supply for manufacturing plants, factories, and industrial facilities.",
    roles: ["Production Operators", "Quality Inspectors", "Maintenance Staff", "Machine Operators", "Supervisors", "Safety Officers"],
    color: "#3a1a4e",
  },
  {
    icon: "🔍",
    title: "Recruitment & Talent Acquisition",
    subtitle: "Strategic Hiring Solutions",
    desc: "Expert recruitment services to identify, evaluate, and hire the right talent for permanent positions.",
    roles: ["Permanent Staffing", "Executive Search", "Bulk Hiring", "Campus Recruitment", "Industry-Specific Recruitment", "Background Verification"],
    color: "#4e3a1a",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 72, background: "#0a0a1a", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #050510 0%, #0d1b3e 50%, #1a0a2e 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div className="section-divider" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "white", marginBottom: 20 }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            Comprehensive manpower solutions tailored to your industry needs — from skilled technicians to senior professionals, domestically and internationally.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 24px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
            {serviceCategories.map((service) => (
              <div key={service.title} className="card-glass hover-glow" style={{
                padding: 36, transition: "all 0.3s",
                background: `linear-gradient(135deg, ${service.color}40 0%, rgba(255,255,255,0.03) 100%)`,
              }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>{service.icon}</div>
                <div style={{ color: "rgba(212,160,23,0.7)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                  {service.subtitle}
                </div>
                <h3 style={{ color: "#f0c040", fontWeight: 800, fontSize: 20, marginBottom: 12 }}>{service.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{service.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {service.roles.map((role) => (
                    <span key={role} style={{
                      background: "rgba(212,160,23,0.1)",
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "rgba(255,255,255,0.75)",
                      fontSize: 11, padding: "4px 10px", borderRadius: 100,
                    }}>{role}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #0d1b3e 0%, #1a0a2e 100%)",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div className="section-divider" />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "white", marginBottom: 48 }}>
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
              { icon: "🌏", label: "Pan-India Talent Reach" },
              { icon: "🔗", label: "Long-Term Partnerships" },
            ].map((item) => (
              <div key={item.label} className="card-glass" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #d4a017 0%, #f0c040 50%, #d4a017 100%)",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, color: "#0a0a1a", marginBottom: 16 }}>
          Ready to Build Your Workforce?
        </h2>
        <p style={{ color: "rgba(10,10,26,0.75)", fontSize: 17, marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>
          Contact us today for a customized manpower solution tailored to your specific requirements.
        </p>
        <Link href="/contact" style={{
          background: "#0a0a1a", color: "#f0c040",
          fontWeight: 700, padding: "14px 40px", borderRadius: 8,
          textDecoration: "none", fontSize: 16,
        }}>
          Request Manpower →
        </Link>
      </section>
    </div>
  );
}
