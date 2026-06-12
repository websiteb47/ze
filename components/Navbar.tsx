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
      background: "#FFFFFF",
      boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,
      }}>
        {/* Logo — large, full black bg blends with white navbar */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/zenvoralogo1.png"
            alt="Zenvora Group"
            width={220}
            height={82}
            style={{
              objectFit: "contain",
              height: 120,
              width: "auto",
              display: "block",
            }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize: 16, fontWeight: 700, color: "#000000",
              textDecoration: "none", transition: "color 0.2s",
            }}
            className="nav-link-dark">
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", background: "none", border: "none", padding: 8 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 26, height: 2.5,
              background: "#ffffff", borderRadius: 2,
              opacity: menuOpen && i === 1 ? 0 : 1,
              transition: "all 0.3s",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "#FFFFFF",
          borderTop: "2px solid #d4a017",
          padding: "16px 24px 24px",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "13px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              color: "#000000", textDecoration: "none",
              fontWeight: 600, fontSize: 15,
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            display: "block", textAlign: "center", marginTop: 16,
            background: "linear-gradient(135deg, #d4a017, #f0c040)",
            color: "#0a0a1a", fontWeight: 700,
            padding: "13px 24px", borderRadius: 8, textDecoration: "none", fontSize: 15,
          }}>
            Request Manpower
          </Link>
        </div>
      )}

      <style>{`
        .nav-link-dark:hover { color: #d4a017 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
