import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #0a0a1a 0%, #050510 100%)",
      borderTop: "1px solid rgba(212,160,23,0.2)",
      padding: "60px 24px 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Image
                src="/zenvoralogo.png"
                alt="Zenvora Group"
                width={160}
                height={60}
                style={{ objectFit: "contain", height: 60, width: "auto" }}
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              India&apos;s trusted manpower solutions provider delivering reliable, skilled, and productive workforce across domestic and international markets.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["in", "tw", "fb"].map((s) => (
                <div key={s} style={{
                  width: 36, height: 36,
                  border: "1px solid rgba(212,160,23,0.3)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  color: "#d4a017", fontSize: 12, fontWeight: 700,
                  textTransform: "uppercase",
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#f0c040", fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: 1 }}>QUICK LINKS</h4>
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "Careers", href: "/careers" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="footer-link" style={{
                display: "block", color: "rgba(255,255,255,0.6)",
                textDecoration: "none", fontSize: 14, marginBottom: 10,
                transition: "color 0.3s",
              }}>
                → {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#f0c040", fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: 1 }}>OUR SERVICES</h4>
            {[
              "Skilled Workforce Supply",
              "Blue Collar Staffing",
              "White Collar Recruitment",
              "Contract Staffing",
              "Construction Manpower",
              "International Recruitment",
            ].map((s) => (
              <div key={s} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10 }}>→ {s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#f0c040", fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: 1 }}>CONTACT US</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "📧", text: "info@zenvoragroup.in" },
                { icon: "🌐", text: "zenvoragroup.in" },
                { icon: "📍", text: "Serving Clients Across India & International Markets" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(212,160,23,0.15)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
            © 2025 Zenvora Group. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
            Workforce Solutions | Domestic Staffing | International Recruitment
          </p>
        </div>
      </div>
    </footer>
  );
}
