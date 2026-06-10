"use client";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 10, 26, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,160,23,0.2)" : "none",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 48, height: 48,
            background: "linear-gradient(135deg, #d4a017, #f0c040)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 20, color: "#0a0a1a",
            boxShadow: "0 4px 15px rgba(212,160,23,0.4)",
            flexShrink: 0,
          }}>Z</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#f0c040", letterSpacing: 2, lineHeight: 1 }}>ZENVORA</div>
            <div style={{ fontSize: 10, color: "rgba(212,160,23,0.7)", letterSpacing: 3, textTransform: "uppercase" }}>GROUP</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" style={{ fontSize: 14 }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
            Request Manpower
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", flexDirection: "column", gap: 5, cursor: "pointer",
            background: "none", border: "none", padding: 8,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 24, height: 2,
              background: "#d4a017", borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "opacity: 0"
                  : "rotate(-45deg) translate(5px, -5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,10,26,0.98)",
          borderTop: "1px solid rgba(212,160,23,0.2)",
          padding: "20px 24px",
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.85)", textDecoration: "none",
                fontWeight: 500, fontSize: 15,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 16, display: "block", textAlign: "center" }}>
            Request Manpower
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
