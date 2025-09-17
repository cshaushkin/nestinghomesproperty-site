// pages/index.tsx
import React, { useState } from "react"
import Head from "next/head"

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Lead submit", form)
    setSubmitted(true)
  }

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

  // --- Simple inline styles ---
  const container: React.CSSProperties = { maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: 1.5 }
  const input: React.CSSProperties = { display: "block", width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }
  const button: React.CSSProperties = { padding: "10px 16px", border: "none", borderRadius: "4px", backgroundColor: "#f59e0b", color: "white", cursor: "pointer" }
  const footer: React.CSSProperties = { marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #ddd", fontSize: "14px", color: "#555" }

  return (
    <div style={container}>
      <Head>
        <title>Nesting Homes Property Management</title>
        <meta
          name="description"
          content="Stress-free property management for owners and delightful living for tenants. Fast leasing, reliable maintenance, transparent reporting."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <section>
        <h2>Let’s Talk</h2>
        <p>Tell us about your rental property and goals. We’ll send a custom plan.</p>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required style={input} />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={input} />
          <input name="phone" type="tel" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} style={input} />
          <input name="address" placeholder="Property address" onChange={handleChange} style={input} />
          <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} style={input} />
          <button type="submit" style={button}>Send Message</button>
          {submitted && <p style={{ color: "green" }}>Thanks! We received your message and will reply shortly.</p>}
        </form>
      </section>

      <section>
        <h3>Contact Info</h3>
        <p><strong>Nesting Homes Property Management</strong></p>
        <p>531 Main Street, PMB 963, El Segundo, CA 90291</p>
        <p><a href="tel:+13109228202">(310) 922-8202</a></p>
        <p><a href="mailto:hello@nestinghomesproperty.com">hello@nestinghomesproperty.com</a></p>
        <p>DRE #00000000 • Equal Housing Opportunity</p>
      </section>

      <footer style={footer}>
        <span>© {new Date().getFullYear()} Nesting Homes Property Management</span>
        <nav>
          <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Owner Portal</a> | <a href="#">Tenant Portal</a>
        </nav>
      </footer>
    </div>
  )
}