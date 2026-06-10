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
    <div style={{ paddingTop: 72, background: "#0a0a1a", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px",
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

      {/* Contact Section */}
      <section style={{ padding: "80px 24px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }}>
          {/* Info */}
          <div>
            <h2 style={{ color: "white", fontWeight: 800, fontSize: 24, marginBottom: 32 }}>
              Contact <span className="gradient-text">Information</span>
            </h2>

            {[
              { icon: "📧", label: "Email", value: "info@zenvoragroup.in" },
              { icon: "🌐", label: "Website", value: "zenvoragroup.in" },
              { icon: "📍", label: "Serving", value: "Pan-India & International Markets" },
            ].map((c) => (
              <div key={c.label} className="card-glass" style={{ padding: 24, marginBottom: 16, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ color: "#f0c040", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
            ))}

            <div className="card-glass" style={{ padding: 28, marginTop: 24 }}>
              <h3 style={{ color: "#f0c040", fontWeight: 700, fontSize: 16, marginBottom: 16 }}>Office Hours</h3>
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM IST" },
                { day: "Saturday", hours: "9:00 AM – 2:00 PM IST" },
                { day: "Sunday", hours: "Emergency inquiries only" },
              ].map(({ day, hours }) => (
                <div key={day} style={{
                  display: "flex", justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: 10, marginBottom: 10, fontSize: 13,
                }}>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{day}</span>
                  <span style={{ color: "#f0c040", fontWeight: 600 }}>{hours}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>We Serve</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["🇮🇳 India", "🇦🇪 UAE", "🇺🇸 USA", "🇩🇪 Germany", "🌍 Africa", "🌏 Europe"].map((m) => (
                  <span key={m} style={{
                    background: "rgba(212,160,23,0.1)",
                    border: "1px solid rgba(212,160,23,0.3)",
                    color: "#f0c040", fontSize: 12, padding: "6px 14px", borderRadius: 100, fontWeight: 600,
                  }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ color: "white", fontWeight: 800, fontSize: 24, marginBottom: 32 }}>
              Request <span className="gradient-text">Manpower</span>
            </h2>

            {submitted ? (
              <div className="card-glass" style={{ padding: 48, textAlign: "center" }}>
                <div style={{ fontSize: 60, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#f0c040", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Inquiry Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.7 }}>
                  Thank you for reaching out to Zenvora Group. Our team will contact you within 2 business hours with a customized workforce solution.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass" style={{ padding: 40 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
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
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
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
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
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
                      <option>International Recruitment</option>
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
                <div style={{ marginBottom: 28 }}>
                  <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, display: "block", marginBottom: 8, fontWeight: 600 }}>Message / Requirements</label>
                  <textarea rows={5}
                    placeholder="Describe your workforce requirements, location, timeline, and any specific skills needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: 16, textAlign: "center" }}>
                  Send Inquiry →
                </button>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textAlign: "center", marginTop: 16 }}>
                  We respond within 2 business hours. Your information is kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ padding: "0 24px 80px", background: "#0a0a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="card-glass" style={{
            height: 300, display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 12,
          }}>
            <div style={{ fontSize: 48 }}>📍</div>
            <div style={{ color: "#f0c040", fontWeight: 700, fontSize: 18 }}>Serving Clients Across India & Internationally</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Pan-India presence with global reach to UAE, USA, Germany, Europe & Africa</div>
          </div>
        </div>
      </section>
    </div>
  );
}
