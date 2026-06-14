import Link from "next/link";

const industries = [
  {
    img: "/construction manpower.JPG",
    name: "Construction & Infrastructure",
    desc: "Supporting residential, commercial, industrial, and infrastructure projects with qualified manpower.",
    workforce: ["General Laborers", "Skilled Technicians", "Site Supervisors", "Safety Officers", "Project Managers"],
    stat: "Most Demanded",
  },
  {
    img: "/industrial workforce.JPG",
    name: "Manufacturing & Engineering",
    desc: "Providing technical and operational workforce for factories, plants, and industrial facilities.",
    workforce: ["Machine Operators", "Production Staff", "Quality Inspectors", "Maintenance Technicians", "Engineers"],
    stat: "High Volume",
  },
  {
    img: "/skilled workforce.JPG",
    name: "Oil & Gas",
    desc: "Supplying skilled personnel for upstream, midstream, and downstream oil and gas operations.",
    workforce: ["Welders", "Pipe Fitters", "Electricians", "Instrument Technicians", "HSE Officers"],
    stat: "Specialized",
  },
  {
    img: "/contract staffing.JPG",
    name: "Logistics & Warehousing",
    desc: "Delivering workforce solutions for supply chain, warehousing, and distribution operations.",
    workforce: ["Warehouse Operators", "Forklift Operators", "Inventory Staff", "Logistics Personnel", "Dispatchers"],
    stat: "Fast Deployment",
  },
  {
    img: "/white collar jobs.JPG",
    name: "Information Technology",
    desc: "Recruiting IT professionals, software engineers, consultants, and technical support teams.",
    workforce: ["Software Engineers", "IT Consultants", "Network Engineers", "System Administrators", "Project Managers"],
    stat: "White Collar",
  },
  {
    img: "/internation staffing.JPG",
    name: "Healthcare",
    desc: "Providing healthcare professionals and support staff for hospitals and medical facilities.",
    workforce: ["Nurses", "Medical Technicians", "Support Staff", "Administrative Personnel", "Healthcare Assistants"],
    stat: "Certified Staff",
  },
  {
    img: "/white collar jobs.JPG",
    name: "Hospitality & Facility Management",
    desc: "Supplying workforce for hotels, resorts, commercial facilities, and property management companies.",
    workforce: ["Housekeeping", "Facility Staff", "Maintenance Workers", "Security Personnel", "Reception Staff"],
    stat: "Service Industry",
  },
  {
    img: "/internation staffing.JPG",
    name: "MNCs & Corporate",
    desc: "Supporting global organizations with skilled professionals and comprehensive workforce solutions.",
    workforce: ["HR Professionals", "Finance Specialists", "Operations Managers", "Procurement Staff", "Admin Executives"],
    stat: "Global Ready",
  },
  {
    img: "/contract staffing.JPG",
    name: "Retail & FMCG",
    desc: "Sales staff, promoters, customer support, and operational workforce for retail operations.",
    workforce: ["Sales Staff", "Promoters", "Customer Support", "Store Managers", "Merchandisers"],
    stat: "Consumer Sector",
  },
];

const panIndiaRegions = [
  { img: "/construction manpower.JPG", region: "Andhra Pradesh & Telangana", desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/industrial workforce.JPG",  region: "Maharashtra & Mumbai",        desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/white collar jobs.JPG",     region: "Karnataka & Bangalore",       desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/skilled workforce.JPG",     region: "Tamil Nadu & Chennai",        desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/internation staffing.JPG",  region: "Delhi NCR",                   desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/contract staffing.JPG",     region: "Gujarat & Ahmedabad",         desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/construction manpower.JPG", region: "Rajasthan",                   desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/industrial workforce.JPG",  region: "West Bengal & Kolkata",       desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/skilled workforce.JPG",     region: "Uttar Pradesh",               desc: "Serving construction, manufacturing, and corporate workforce needs." },
  { img: "/white collar jobs.JPG",     region: "Punjab & Haryana",            desc: "Serving construction, manufacturing, and corporate workforce needs." },
];

export default function IndustriesPage() {
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
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div className="section-divider" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#1a1a1a", marginBottom: 20 }}>
            Industries We <span className="gradient-text">Serve</span>
          </h1>
          <p style={{ color: "#666", fontSize: 18, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            From construction sites to corporate boardrooms, Zenvora Group delivers workforce solutions across every major industry sector.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: "80px 24px", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
            {industries.map((ind) => (
              <div key={ind.name} className="card-glass hover-glow" style={{ overflow: "hidden", padding: 0 }}>
                <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                  <img src={ind.img} alt={ind.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <span style={{
                    position: "absolute", top: 12, right: 12,
                    background: "rgba(212,144,10,0.9)", backdropFilter: "blur(4px)",
                    color: "#fff", fontSize: 11, padding: "4px 12px", borderRadius: 100, fontWeight: 600,
                  }}>{ind.stat}</span>
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 style={{ color: "#d4900a", fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{ind.name}</h3>
                  <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{ind.desc}</p>
                  <div style={{ color: "#d4900a", fontSize: 11, fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>ROLES WE SUPPLY</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ind.workforce.map((role) => (
                      <span key={role} style={{
                        background: "rgba(212,144,10,0.08)", border: "1px solid rgba(212,144,10,0.25)",
                        color: "#b07808", fontSize: 12, padding: "4px 10px", borderRadius: 100,
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
        background: "#ffffff",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 12 }}>
              Our Pan-India <span className="gradient-text">Reach</span>
            </h2>
            <p style={{ color: "#777", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Supplying skilled blue &amp; white collar human resources across all major states and cities in India.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {panIndiaRegions.map((m) => (
              <div key={m.region} className="card-glass hover-glow" style={{ overflow: "hidden", padding: 0 }}>
                <div style={{ height: 100, overflow: "hidden" }}>
                  <img src={m.img} alt={m.region} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "14px 16px 16px", textAlign: "center" }}>
                  <div style={{ color: "#d4900a", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{m.region}</div>
                  <div style={{ color: "#777", fontSize: 12, lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section style={{ padding: "80px 24px", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 12 }}>
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
              <div key={story.title} className="card-glass" style={{ padding: 32, background: "#ffffff", border: "1px solid #ede9e0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{
                  background: "linear-gradient(135deg, #d4900a, #f0a820)",
                  color: "#ffffff", fontSize: 11, fontWeight: 700,
                  padding: "4px 12px", borderRadius: 100, display: "inline-block", marginBottom: 16,
                }}>{story.industry}</div>
                <h3 style={{ color: "#1a1a1a", fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{story.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{story.result}</p>
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
          Need Workforce for Your Industry?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, marginBottom: 32 }}>
          Tell us your requirements and we&apos;ll deploy the right talent fast.
        </p>
        <Link href="/contact" style={{
          background: "#ffffff", color: "#d4900a",
          fontWeight: 700, padding: "14px 40px", borderRadius: 8,
          textDecoration: "none", fontSize: 16,
        }}>
          Get a Quote →
        </Link>
      </section>
    </div>
  );
}
