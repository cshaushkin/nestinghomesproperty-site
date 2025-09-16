// pages/index.tsx
import React, { useState } from "react"
import Head from "next/head"

// --- Local UI primitives (no extra libs) ---
function Button({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-2xl bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"rounded-2xl border border-slate-200 bg-white shadow-sm " + className}>{children}</div>
}
function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"flex flex-col space-y-1.5 p-6 " + className}>{children}</div>
}
function CardTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={"text-lg font-semibold leading-none tracking-tight " + className}>{children}</h3>
}
function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"p-6 pt-0 " + className}>{children}</div>
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props
  return (
    <input
      className={
        "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
        className
      }
      {...rest}
    />
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className = "", ...rest } = props
  return (
    <textarea
      className={
        "min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
        className
      }
      {...rest}
    />
  )
}

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-100 text-slate-900">
      <Head>
        <title>Nesting Homes Property Management</title>
        <meta
          name="description"
          content="Stress-free property management for owners and delightful living for tenants. Fast leasing, reliable maintenance, transparent reporting."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto grid max-w-5xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold">Let’s Talk</h2>
            <p className="mt-2 text-slate-600">Tell us about your rental property and goals. We’ll send a custom plan.</p>
            <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
              <div className="grid gap-3 md:grid-cols-2">
                <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <Input name="phone" type="tel" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} />
                <Input name="address" placeholder="Property address" onChange={handleChange} />
              </div>
              <Textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} />
              <div className="flex gap-3">
                <Button type="submit">Send Message</Button>
              </div>
              {submitted && <p className="text-sm text-emerald-600">Thanks! We received your message and will reply shortly.</p>}
            </form>
          </div>

          <div className="lg:col-span-2">
            <Card data-testid="contact-card">
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">🏢 Nesting Homes Property Management</div>
                <div className="flex items-center gap-2">📍 531 Main Street, PMB 963, El Segundo, CA 90291</div>
                <a className="flex items-center gap-2 hover:text-amber-700" href="tel:+13109228202">📞 (310) 922-8202</a>
                <a className="flex items-center gap-2 hover:text-amber-700" href="mailto:hello@nestinghomesproperty.com">✉️ hello@nestinghomesproperty.com</a>
                <div className="pt-2 text-xs text-slate-500">DRE #00000000 • Equal Housing Opportunity</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-amber-200" />
            <span className="text-sm">© {new Date().getFullYear()} Nesting Homes Property Management</span>
          </div>
          <div className="flex gap-4 text-sm text-slate-600">
            <a className="hover:text-amber-700" href="#">Privacy</a>
            <a className="hover:text-amber-700" href="#">Terms</a>
            <a className="hover:text-amber-700" href="#">Owner Portal</a>
            <a className="hover:text-amber-700" href="#">Tenant Portal</a>
          </div>
        </div>
      </footer>
    </div>
  )
}