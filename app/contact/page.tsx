"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", workers: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.8 }}>
            Request manpower, ask a question, or start a conversation. We typically respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section style={{ padding: "72px 20px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Uses contact-grid CSS class: 2-col desktop, 1-col mobile */}
          <div className="contact-grid">
            {/* ── Info column ── */}
            <div>
              <h2 style={{ color: "white", fontWeight: 800, fontSize: 22, marginBottom: 28 }}>
                Contact <span className="gradient-text">Information</span>
              </h2>

              {[
                { icon: "📧", label: "Email", value: "info@zenvoragroup.in" },
                { icon: "🌐", label: "Website", value: "zenvoragroup.in" },
                { icon: "📍", label: "Serving", value: "All Major States Across India" },
              ].map((c) => (
                <div key={c.label} className="card-glass" style={{ padding: 20, marginBottom: 14, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 26, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "#f0c040", fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{c.label}</div>
                    <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="card-glass" style={{ padding: 24, marginTop: 20 }}>
                <h3 style={{ color: "#f0c040", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Office Hours</h3>
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM IST" },
                  { day: "Saturday", hours: "9:00 AM – 2:00 PM IST" },
                  { day: "Sunday", hours: "Emergency inquiries only" },
                ].map(({ day, hours }) => (
                  <div key={day} style={{
                    display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    paddingBottom: 10, marginBottom: 10, fontSize: 13,
                  }}>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{day}</span>
                    <span style={{ color: "#f0c040", fontWeight: 600 }}>{hours}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>We Serve</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Andhra Pradesh", "Telangana", "Maharashtra", "Karnataka", "Tamil Nadu", "Delhi NCR", "Gujarat", "Pan-India"].map((m) => (
                    <span key={m} style={{
                      background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.3)",
                      color: "#f0c040", fontSize: 12, padding: "6px 12px", borderRadius: 100, fontWeight: 600,
                    }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Form column ── */}
            <div>
              <h2 style={{ color: "white", fontWeight: 800, fontSize: 22, marginBottom: 28 }}>
                Request <span className="gradient-text">Manpower</span>
              </h2>

              {submitted ? (
                <div className="card-glass" style={{ padding: 48, textAlign: "center" }}>
                  <div style={{ fontSize: 56, marginBottom: 14 }}>✅</div>
                  <h3 style={{ color: "#f0c040", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Inquiry Received!</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will contact you within 2 business hours with a customized workforce solution.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-glass" style={{ padding: 32 }}>
                  <div className="form-row-2">
                    <div>
                      <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Your Name *</label>
                      <input required placeholder="Full name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Company Name</label>
                      <input placeholder="Your company" value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row-2">
                    <div>
                      <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Email Address *</label>
                      <input required type="email" placeholder="your@email.com" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Phone Number *</label>
                      <input required placeholder="+91 XXXXXXXXXX" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row-2">
                    <div>
                      <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Service Required *</label>
                      <select required value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select service</option>
                        <option>Skilled Workforce</option>
                        <option>Semi-Skilled Workforce</option>
                        <option>Unskilled / General Labor</option>
                        <option>Blue Collar Staffing</option>
                        <option>White Collar Recruitment</option>
                        <option>Contract Staffing</option>
                        <option>Construction Manpower</option>
                        <option>Pan-India Deployment</option>
                        <option>Bulk Hiring</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Number of Workers</label>
                      <select value={formData.workers}
                        onChange={(e) => setFormData({ ...formData, workers: e.target.value })}>
                        <option value="">Select range</option>
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-100</option>
                        <option>101-500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Message / Requirements</label>
                    <textarea rows={5}
                      placeholder="Describe your workforce requirements, location, timeline, and any specific skills needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: 16, textAlign: "center" }}>
                    Send Inquiry →
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textAlign: "center", marginTop: 14 }}>
                    We respond within 2 business hours. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ padding: "0 20px 72px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="card-glass" style={{ height: 260, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 44 }}>📍</div>
            <div style={{ color: "#f0c040", fontWeight: 700, fontSize: 17, textAlign: "center" }}>Serving Clients Across All Major States in India</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textAlign: "center" }}>Pan-India presence covering all major states and cities</div>
          </div>
        </div>
      </section>
    </div>
  );
}
