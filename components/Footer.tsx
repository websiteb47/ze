import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", padding: "60px 24px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Image src="/zenvoralogo1.png" alt="Zenvora Group" width={160} height={60}
                style={{ objectFit: "contain", height: 60, width: "auto" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              India&apos;s trusted manpower solutions provider delivering reliable workforce across domestic and international markets.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["in", "tw", "fb"].map((s) => (
                <div key={s} style={{
                  width: 34, height: 34, border: "1px solid rgba(212,144,10,0.4)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#d4900a", fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#d4900a", fontWeight: 700, fontSize: 13, marginBottom: 18, letterSpacing: 1 }}>QUICK LINKS</h4>
            {["/", "/about", "/services", "/industries", "/careers", "/contact"].map((href, i) => {
              const labels = ["Home","About Us","Our Services","Industries","Careers","Contact Us"];
              return (
                <Link key={href} href={href} className="footer-link" style={{
                  display: "block", color: "rgba(255,255,255,0.5)",
                  textDecoration: "none", fontSize: 14, marginBottom: 10, transition: "color 0.3s",
                }}>→ {labels[i]}</Link>
              );
            })}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#d4900a", fontWeight: 700, fontSize: 13, marginBottom: 18, letterSpacing: 1 }}>OUR SERVICES</h4>
            {["Skilled Workforce Supply","Blue Collar Staffing","White Collar Recruitment","Contract Staffing","Construction Manpower","International Recruitment"].map((s) => (
              <div key={s} style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 10 }}>→ {s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#d4900a", fontWeight: 700, fontSize: 13, marginBottom: 18, letterSpacing: 1 }}>CONTACT US</h4>
            {[
              { icon: "📧", text: "info@zenvoragroup.in" },
              { icon: "🌐", text: "zenvoragroup.in" },
              { icon: "📍", text: "Serving Clients Across India & International Markets" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>© 2025 Zenvora Group. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Workforce Solutions | Domestic Staffing | International Recruitment</p>
        </div>
      </div>
    </footer>
  );
}
