"use client";
import { useState } from "react";

const jobListings = [
  {
    title: "Electricians",
    type: "Skilled",
    location: "Pan India / UAE",
    category: "Blue Collar",
    desc: "Certified electricians for construction and industrial projects. Experience with LV/HV systems preferred.",
  },
  {
    title: "Welders & Fabricators",
    type: "Skilled",
    location: "India / International",
    category: "Blue Collar",
    desc: "Experienced welders (MIG, TIG, Arc) for manufacturing, construction, and oil & gas projects.",
  },
  {
    title: "HVAC Technicians",
    type: "Skilled",
    location: "India / UAE",
    category: "Blue Collar",
    desc: "Qualified HVAC technicians for commercial and industrial installations.",
  },
  {
    title: "Civil Site Engineers",
    type: "Technical",
    location: "Pan India",
    category: "White Collar",
    desc: "B.Tech Civil engineers with 2-5 years experience in residential or infrastructure projects.",
  },
  {
    title: "HR Executives",
    type: "Corporate",
    location: "Hyderabad / Vijayawada",
    category: "White Collar",
    desc: "HR professionals for handling recruitment, compliance, and employee relations for corporate clients.",
  },
  {
    title: "Project Managers",
    type: "Management",
    location: "India / International",
    category: "White Collar",
    desc: "Experienced project managers for construction, manufacturing, or IT projects.",
  },
  {
    title: "General Laborers",
    type: "Unskilled",
    location: "Pan India",
    category: "Blue Collar",
    desc: "Reliable general labor for construction sites, warehouses, and manufacturing units.",
  },
  {
    title: "Warehouse Operators",
    type: "Semi-Skilled",
    location: "Pan India",
    category: "Blue Collar",
    desc: "Warehouse staff for inventory management, loading/unloading, and logistics operations.",
  },
];

export default function CareersPage() {
  const [filter, setFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", role: "", experience: "", location: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filtered = filter === "All" ? jobListings : jobListings.filter((j) => j.category === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 90, background: "#faf9f7", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #fffef9 0%, #fdf6e8 50%, #fff8f0 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-divider" />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#1a1a1a", marginBottom: 20 }}>
            Build Your Career with <span className="gradient-text">Zenvora</span>
          </h1>
          <p style={{ color: "#666", fontSize: 18, lineHeight: 1.8 }}>
            Join our talent network and get connected to opportunities across India and internationally. We&apos;re always looking for skilled workers, professionals, and technicians.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section style={{ padding: "80px 24px", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 24 }}>
              Current <span className="gradient-text">Opportunities</span>
            </h2>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {["All", "Blue Collar", "White Collar"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "8px 24px", borderRadius: 100, cursor: "pointer",
                    fontWeight: 600, fontSize: 14, transition: "all 0.3s",
                    background: filter === cat
                      ? "linear-gradient(135deg, #c9972c, #e8b84b)"
                      : "#ffffff",
                    color: filter === cat ? "#0d0d0d" : "#666",
                    border: filter === cat ? "none" : "1px solid #ede9e0",
                  }}
                >{cat}</button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {filtered.map((job) => (
              <div key={job.title} className="card-glass hover-glow" style={{ padding: 28, transition: "all 0.3s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{
                    background: job.category === "White Collar"
                      ? "rgba(30,60,200,0.08)"
                      : "rgba(212,144,10,0.1)",
                    border: `1px solid ${job.category === "White Collar" ? "rgba(30,60,200,0.2)" : "rgba(212,144,10,0.3)"}`,
                    color: job.category === "White Collar" ? "#3b5fc0" : "#e8b84b",
                    fontSize: 11, padding: "3px 10px", borderRadius: 100, fontWeight: 600,
                  }}>{job.category}</span>
                  <span style={{ color: "#888", fontSize: 12 }}>{job.type}</span>
                </div>
                <h3 style={{ color: "#1a1a1a", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{job.title}</h3>
                <div style={{ color: "#d4900a", fontSize: 13, marginBottom: 12 }}>ðŸ“ {job.location}</div>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{job.desc}</p>
                <a href="#apply" style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #c9972c, #e8b84b)",
                  color: "#ffffff", fontWeight: 700, padding: "8px 20px",
                  borderRadius: 6, fontSize: 13, textDecoration: "none",
                }}>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" style={{
        padding: "80px 24px",
        background: "#ffffff",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 12 }}>
              Apply <span className="gradient-text">Now</span>
            </h2>
            <p style={{ color: "#777", fontSize: 15 }}>
              Submit your details and we&apos;ll match you with the right opportunity.
            </p>
          </div>

          {submitted ? (
            <div className="card-glass" style={{ padding: 48, textAlign: "center" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>âœ…</div>
              <h3 style={{ color: "#d4900a", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Application Submitted!</h3>
              <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7 }}>
                Thank you for your interest. Our team will review your profile and get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-glass" style={{ padding: 40 }}>
              <div className="form-row-2">
                <div>
                  <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Full Name *</label>
                  <input required placeholder="Your full name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div className="form-row-2">
                <div>
                  <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Phone Number *</label>
                  <input required placeholder="+91 XXXXXXXXXX" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Role Applying For *</label>
                  <select required value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                    <option value="">Select a role</option>
                    {jobListings.map((j) => (
                      <option key={j.title} value={j.title}>{j.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row-2">
                <div>
                  <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Years of Experience</label>
                  <select value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}>
                    <option value="">Select experience</option>
                    <option>Fresher (0-1 years)</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Preferred Location</label>
                  <input placeholder="City / Country" value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ color: "#666", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Additional Details</label>
                <textarea rows={4} placeholder="Tell us about your skills, certifications, or any relevant experience..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: 16, textAlign: "center" }}>
                Submit Application â†’
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

