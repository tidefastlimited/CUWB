import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get in Touch With CUWB | Ciholas",
  description:
    "Contact CUWB for sales, technical questions, deployment planning, custom UWB engineering, or partnership inquiries. Talk to an engineer about your RTLS project.",
};

export default function ContactPage() {
  const inquiryTypes = [
    {
      title: "Sales & Pricing",
      description: "Product pricing, quotes, volume discounts, and purchasing. Get hardware cost estimates for your deployment size.",
      href: "/pricing#hardware-pricing",
      cta: "View published pricing",
    },
    {
      title: "Deployment Planning",
      description: "Book a call with a CUWB engineer to discuss anchor placement, network requirements, tag selection, and timeline.",
      href: "/rtls-deployment-planning",
      cta: "Visit planning hub",
    },
    {
      title: "Technical Questions",
      description: "UWB accuracy, update rates, environmental constraints, integration options, and technical feasibility for your use case.",
      href: "/faq",
      cta: "Browse FAQ",
    },
    {
      title: "Custom Engineering",
      description: "Private-label hardware, firmware customization, custom enclosures, and end-to-end UWB product development with Ciholas engineers.",
      href: "/custom-uwb",
      cta: "Learn about custom UWB",
    },
    {
      title: "Integration & API",
      description: "REST API details, data formats, integration patterns, and how to connect CUWB to your WMS, MES, ERP, or custom systems.",
      href: "/rtls-api-integration",
      cta: "Read API guide",
    },
    {
      title: "Partner & Integrator",
      description: "For systems integrators, resellers, value-added resellers, and technology partners interested in building RTLS practice around CUWB.",
      href: null,
      cta: "Contact us directly",
    },
  ];

  const resources = [
    ["RTLS Cost Guide", "/pricing", "Understand hardware, installation, and TCO."],
    ["CUWB Advantage", "/cuwb-advantage", "See why teams choose CUWB."],
    ["Technology Comparison", "/learn/uwb-vs-ble-rfid-gps", "UWB vs BLE vs RFID vs GPS."],
    ["Anchor Placement", "/learn/uwb-anchor-placement", "Plan your anchor layout."],
    ["FAQ", "/faq", "Answers to common questions."],
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Contact
            </div>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Talk to the CUWB engineering team about your RTLS project.
              No aggressive sales process — just technical answers.
            </p>
          </div>
        </div>
      </section>

      {/* ===== INQUIRY TYPES ===== */}
      <section className="border-b border-line bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              How can we help?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Choose the path that fits.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inquiryTypes.map((inquiry) => (
              <div key={inquiry.title} className="rounded-lg border border-line bg-surface p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground">{inquiry.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{inquiry.description}</p>
                {inquiry.href ? (
                  <a href={inquiry.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
                    {inquiry.cta} →
                  </a>
                ) : (
                  <span className="mt-4 text-sm font-semibold text-subtle">{inquiry.cta}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT TO HAVE READY ===== */}
      <section className="border-b border-line bg-panel py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                Prepare
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Have these details ready for a productive conversation.
              </h2>
            </div>

            <div className="rounded-lg border border-line bg-surface p-6">
              <ul className="space-y-4 text-sm text-muted">
                {[
                  "Facility type (warehouse, manufacturing, healthcare, etc.)",
                  "Approximate area size (square feet or square meters)",
                  "What you want to track (assets, people, vehicles, robots)",
                  "Rough estimate of how many items need tags",
                  "Any existing systems you need to integrate with (WMS, MES, ERP)",
                  "Timeline expectations",
                  "Any specific concerns (accuracy, latency, environment, compliance)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Self-service first
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Many answers are already available.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Before reaching out, check these resources — they cover the most common questions.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {resources.map(([title, href, desc]) => (
              <a
                key={title}
                href={href}
                className="rounded-md border border-line bg-background px-5 py-4 text-sm transition-all hover:border-brand-border hover:shadow-[0_10px_24px_rgba(31,23,23,0.08)]"
              >
                <span className="block font-semibold text-foreground">{title}</span>
                <span className="mt-1.5 block leading-6 text-muted">{desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
