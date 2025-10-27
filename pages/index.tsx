// pages/index.tsx
import React from "react"
import Head from "next/head"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Nesting Homes Property Management",
    url: "https://nestinghomesproperty.com",
    logo: "https://nestinghomesproperty.com/logo.png",
    telephone: "+1-310-922-8202",
    email: "hello@nestinghomesproperty.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "531 Main Street, PMB 963",
      addressLocality: "El Segundo",
      addressRegion: "CA",
      postalCode: "90291",
      addressCountry: "US",
    },
    areaServed: ["El Segundo", "Downey", "Highland Park", "Fullerton"],
  }

  const page: React.CSSProperties = { fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif", color: "#0f172a", background: "#ffffff" }
  const container: React.CSSProperties = { maxWidth: 960, margin: "0 auto", padding: "24px" }
  const headerWrap: React.CSSProperties = { borderBottom: "1px solid #e5e7eb", paddingBottom: 16, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }
  const logoStyle: React.CSSProperties = { width: 40, height: 40, objectFit: "contain" }
  const brand: React.CSSProperties = { fontSize: 18, fontWeight: 700, letterSpacing: 0.2 }
  const hero: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    background: "linear-gradient(180deg,#fafafa 0%, #fff 100%)",
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  }
  const h1: React.CSSProperties = { margin: 0, fontSize: 28, lineHeight: 1.2 }
  const h2: React.CSSProperties = { marginTop: 24, marginBottom: 8, fontSize: 22 }
  const p: React.CSSProperties = { marginTop: 8, marginBottom: 12, color: "#475569" }
  const footer: React.CSSProperties = { marginTop: 40, paddingTop: 16, borderTop: "1px solid #e5e7eb", fontSize: 14, color: "#64748b", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }

  return (
    <div style={page}>
      <Head>
        <title>Nesting Homes Property Management</title>
        <meta name="description" content="Stress-free property management for owners and delightful living for tenants. Fast leasing, reliable maintenance, transparent reporting." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div style={container}>
          <div style={headerWrap}>
            <img src="/nestinghomes.svg" alt="Nesting Homes logo" style={logoStyle} />
            <div>
              <div style={brand}>Nesting Homes Property Management</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>El Segundo, California</div>
            </div>
          </div>
        </div>
      </header>

      <main style={container}>
        <section style={hero}>
          <h1 style={h1}>Stress‑free property management for owners & delightful living for tenants</h1>
          <p style={p}>Leasing • Screening • Rent Collection • Maintenance • Reporting</p>
        </section>

        <section>
          <h2 style={h2}>About Us</h2>
          <p style={p}>
            Nesting Homes Property Management is a local, hands‑on team based in El Segundo, serving nearby communities across the South Bay and
            greater Los Angeles. We focus on clear communication, fast maintenance response, and reliable tenant placement so owners can be hands‑off
            while residents feel right at home.
          </p>
          <p style={p}>
            Services include leasing, tenant screening, rent collection, maintenance coordination, inspections, and transparent monthly reporting.
            Ask about our simple, flat‑rate pricing for single‑family homes, condos, and small multifamily buildings.
          </p>
          <ul style={{ paddingLeft: 18, color: "#0f172a" }}>
            <li><strong>Office:</strong> 531 Main Street, PMB 963, El Segundo, CA 90291</li>
            <li><strong>Phone:</strong> <a href="tel:+13109228202">(310) 922‑8202</a></li>
            <li><strong>Email:</strong> <a href="mailto:hello@nestinghomesproperty.com">hello@nestinghomesproperty.com</a></li>
            <li><strong>Areas Served:</strong> El Segundo, Downey, Highland Park, Fullerton</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>Current Listings</h2>
          <p style={p}>We currently have no active listings. Please check back soon for upcoming properties.</p>
        </section>
      </main>

      <footer>
        <div style={container}>
          <div style={footer}>
            <span>© {new Date().getFullYear()} Nesting Homes Property Management</span>
            <nav style={{ display: "flex", gap: 12 }}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Owner Portal</a>
              <a href="#">Tenant Portal</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
