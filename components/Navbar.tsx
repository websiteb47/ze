"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: "#ffffff",
      boxShadow: "0 2px 20px rgba(0,0,0,0.15)",
      padding: "0 24px",
    }}>
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/zenvoralogo1.png"
            alt="Zenvora Group"
            width={220}
            height={100}
            className="nav-logo"
            style={{ objectFit: "contain", display: "block", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="nav-link-dark"
              style={{ fontSize: 16, fontWeight: 700, color: "#000000", textDecoration: "none", transition: "color 0.2s" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            background: "linear-gradient(135deg, #d4a017, #f0c040)",
            color: "#0a0a1a", fontWeight: 700,
            padding: "11px 28px", borderRadius: 8,
            textDecoration: "none", fontSize: 15,
            boxShadow: "0 4px 15px rgba(212,160,23,0.35)",
            whiteSpace: "nowrap",
          }}>
            Request Manpower
          </Link>
        </div>

        {/* Mobile Hamburger — dark bars on white background */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{ display: "none", flexDirection: "column", justifyContent: "center", gap: 5, cursor: "pointer", background: "none", border: "none", padding: "8px 4px" }}
        >
          <span className={`ham-bar ${menuOpen ? "bar1-open" : ""}`} />
          <span className={`ham-bar ${menuOpen ? "bar2-open" : ""}`} />
          <span className={`ham-bar ${menuOpen ? "bar3-open" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "#ffffff",
          borderTop: "2px solid #d4a017",
          padding: "12px 20px 20px",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "12px 0",
              borderBottom: "1px solid #f0f0f0",
              color: "#1a1a2e", textDecoration: "none",
              fontWeight: 600, fontSize: 15,
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            display: "block", textAlign: "center", marginTop: 14,
            background: "linear-gradient(135deg, #d4a017, #f0c040)",
            color: "#0a0a1a", fontWeight: 700,
            padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontSize: 15,
          }}>
            Request Manpower
          </Link>
        </div>
      )}

      <style>{`
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 110px;
        }
        .nav-logo { height: 100px; }
        .nav-link-dark:hover { color: #d4a017 !important; }

        /* Hamburger bars — dark so visible on white navbar */
        .ham-bar {
          display: block;
          width: 26px;
          height: 3px;
          background: #1a1a2e;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .bar1-open { transform: rotate(45deg) translate(5px, 6px); }
        .bar2-open { opacity: 0; transform: scaleX(0); }
        .bar3-open { transform: rotate(-45deg) translate(5px, -6px); }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }

          /* Smaller navbar on mobile */
          .nav-inner { height: 100px; }
          .nav-logo { height: 100px; }
        }
      `}</style>
    </nav>
  );
}
