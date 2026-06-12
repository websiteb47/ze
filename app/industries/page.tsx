import Link from "next/link";

const industries = [
  {
    icon: "🏗️",
    name: "Construction & Infrastructure",
    desc: "Supporting residential, commercial, industrial, and infrastructure projects with qualified manpower.",
    workforce: ["General Laborers", "Skilled Technicians", "Site Supervisors", "Safety Officers", "Project Managers"],
    stat: "Most Demanded",
  },
  {
    icon: "🏭",
    name: "Manufacturing & Engineering",
    desc: "Providing technical and operational workforce for factories, plants, and industrial facilities.",
    workforce: ["Machine Operators", "Production Staff", "Quality Inspectors", "Maintenance Technicians", "Engineers"],
    stat: "High Volume",
  },
  {
    icon: "🛢️",
    name: "Oil & Gas",
    desc: "Supplying skilled personnel for upstream, midstream, and downstream oil and gas operations.",
    workforce: ["Welders", "Pipe Fitters", "Electricians", "Instrument Technicians", "HSE Officers"],
    stat: "Specialized",
  },
  {
    icon: "📦",
    name: "Logistics & Warehousing",
    desc: "Delivering workforce solutions for supply chain, warehousing, and distribution operations.",
    workforce: ["Warehouse Operators", "Forklift Operators", "Inventory Staff", "Logistics Personnel", "Dispatchers"],
    stat: "Fast Deployment",
  },
  {
    icon: "💻",
    name: "Information Technology",
    desc: "Recruiting IT professionals, software engineers, consultants, and technical support teams.",
    workforce: ["Software Engineers", "IT Consultants", "Network Engineers", "System Administrators", "Project Managers"],
    stat: "White Collar",
  },
  {
    icon: "🏥",
    name: "Healthcare",
    desc: "Providing healthcare professionals and support staff for hospitals and medical facilities.",
    workforce: ["Nurses", "Medical Technicians", "Support Staff", "Administrative Personnel", "Healthcare Assistants"],
    stat: "Certified Staff",
  },
  {
    icon: "🏨",
    name: "Hospitality & Facility Management",
    desc: "Supplying workforce for hotels, resorts, commercial facilities, and property management companies.",
    workforce: ["Housekeeping", "Facility Staff", "Maintenance Workers", "Security Personnel", "Reception Staff"],
    stat: "Service Industry",
  },
  {
    icon: "🏢",
    name: "MNCs & Corporate",
    desc: "Supporting global organizations with skilled professionals and comprehensive workforce solutions.",
    workforce: ["HR Professionals", "Finance Specialists", "Operations Managers", "Procurement Staff", "Admin Executives"],
    stat: "Global Ready",
  },
  {
    icon: "🛒",
    name: "Retail & FMCG",
    desc: "Sales staff, promoters, customer support, and operational workforce for retail operations.",
    workforce: ["Sales Staff", "Promoters", "Customer Support", "Store Managers", "Merchandisers"],
    stat: "Consumer Sector",
  },
];

const panIndiaRegions = [
  { icon: "🏙️", region: "Andhra Pradesh & Telangana", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Maharashtra & Mumbai", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Karnataka & Bangalore", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Tamil Nadu & Chennai", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Delhi NCR", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Gujarat & Ahmedabad", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Rajasthan", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "West Bengal & Kolkata", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Uttar Pradesh", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { icon: "🏙️", region: "Punjab & Haryana", desc: "Serving construction, manufacturing, and corporate workforce needs." },
];

export default function IndustriesPage() {
  return (
    <div style={{ paddingTop: 120, background: "#0a0a1a", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #050510 0%, #0d1b3e 50%, #1a0a2e 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div className="section-divider" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "white", marginBottom: 20 }}>
            Industries We <span className="gradient-text">Serve</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            From construction sites to corporate boardrooms, Zenvora Group delivers workforce solutions across every major industry sector.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: "80px 24px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
            {industries.map((ind) => (
              <div key={ind.name} className="card-glass hover-glow" style={{ padding: 36, transition: "all 0.3s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: 44 }}>{ind.icon}</div>
                  <span style={{
                    background: "rgba(212,160,23,0.15)",
                    border: "1px solid rgba(212,160,23,0.3)",
                    color: "#f0c040", fontSize: 11, padding: "4px 12px", borderRadius: 100, fontWeight: 600,
                  }}>{ind.stat}</span>
                </div>
                <h3 style={{ color: "#f0c040", fontWeight: 800, fontSize: 19, marginBottom: 12 }}>{ind.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{ind.desc}</p>
                <div>
                  <div style={{ color: "rgba(212,160,23,0.7)", fontSize: 12, fontWeight: 600, marginBottom: 10, letterSpacing: 1 }}>
                    ROLES WE SUPPLY
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ind.workforce.map((role) => (
                      <span key={role} style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.75)",
                        fontSize: 12, padding: "4px 10px", borderRadius: 100,
                      }}>{role}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-India Reach */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #050510 0%, #0d1b3e 100%)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Our Pan-India <span className="gradient-text">Reach</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Supplying skilled blue & white collar human resources across all major states and cities in India.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {panIndiaRegions.map((m) => (
              <div key={m.region} className="card-glass" style={{ padding: 28, textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{m.icon}</div>
                <div style={{ color: "#f0c040", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{m.region}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section style={{ padding: "80px 24px", background: "#050510" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Success <span className="gradient-text">Stories</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {[
              {
                title: "500+ Workers for Infrastructure Project",
                industry: "Construction",
                result: "Deployed complete workforce within 3 weeks for a major highway project in Andhra Pradesh, meeting all compliance and timeline requirements.",
              },
              {
                title: "1000+ Workers for Highway Project",
                industry: "Infrastructure",
                result: "Deployed skilled civil workers across a 200km highway project in Andhra Pradesh, meeting all deadlines with full compliance support.",
              },
              {
                title: "Corporate Staffing for MNC",
                industry: "IT & Corporate",
                result: "Recruited 80 professionals across IT, finance, and HR functions for a multinational corporation expanding its India operations.",
              },
            ].map((story) => (
              <div key={story.title} className="card-glass" style={{ padding: 32 }}>
                <div style={{
                  background: "linear-gradient(135deg, #d4a017, #f0c040)",
                  color: "#0a0a1a", fontSize: 11, fontWeight: 700,
                  padding: "4px 12px", borderRadius: 100, display: "inline-block", marginBottom: 16,
                }}>{story.industry}</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{story.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7 }}>{story.result}</p>
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
          Need Workforce for Your Industry?
        </h2>
        <p style={{ color: "rgba(10,10,26,0.75)", fontSize: 17, marginBottom: 32 }}>
          Tell us your requirements and we&apos;ll deploy the right talent fast.
        </p>
        <Link href="/contact" style={{
          background: "#0a0a1a", color: "#f0c040",
          fontWeight: 700, padding: "14px 40px", borderRadius: 8,
          textDecoration: "none", fontSize: 16,
        }}>
          Get a Quote →
        </Link>
      </section>
    </div>
  );
}
