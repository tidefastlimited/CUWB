import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB RTLS Pricing & Total Cost of Ownership | CUWB",
  description:
    "Transparent UWB RTLS pricing: hardware costs, no recurring software fees, ChainPoE installation savings, and 5-year total cost of ownership comparison. CUWB — know what you pay before you commit.",
};

const hardwareRows = [
  { category: "Anchors", link: "/anchors", linkLabel: "View anchor models", note: "Per-unit; varies by model and ChainPoE support" },
  { category: "Tags", link: "/tags", linkLabel: "View tag models", note: "Per-unit; form factor and update rate affect price" },
  { category: "Accessories", link: "/accessories", linkLabel: "View accessories", note: "Mounts, cables, enclosures, kits" },
];

const subscriptionCosts = [
  { fee: "Per-tag licensing", range: "$5–$50+ / tag / year" },
  { fee: "Per-anchor or per-sensor fees", range: "Varies by vendor" },
  { fee: "Platform / server access fees", range: "Annual" },
  { fee: "User seat / dashboard fees", range: "Per seat, per year" },
  { fee: "Support & maintenance tiers", range: "Annual, tiered" },
  { fee: "Feature-tier upsells", range: "Annual, add-on" },
];

const cuwbIncluded = [
  "Local positioning engine",
  "REST API for data access",
  "No user-seat limits",
  "No tag-count limits",
  "No anchor-count limits",
  "Firmware updates",
];

const chainpoeSavings = [
  { category: "Cable savings", desc: "Fewer individual cable runs — one drop serves multiple anchors in sequence" },
  { category: "Switch port savings", desc: "Fewer managed PoE ports required — reduces switch hardware cost" },
  { category: "Labor savings", desc: "Shorter ceiling work, fewer cable pulls, less electrician time" },
  { category: "Infrastructure savings", desc: "Less conduit, fewer cable trays, reduced pathway congestion" },
];

const deploymentExamples = [
  { label: "Starter", anchors: 12, tags: 30, chainpoeSaving: "40%" },
  { label: "Typical Warehouse", anchors: 24, tags: 80, chainpoeSaving: "55%" },
  { label: "Large Facility", anchors: 48, tags: 200, chainpoeSaving: "65%" },
  { label: "Industrial Campus", anchors: 96, tags: "200+", chainpoeSaving: "70%" },
];

const tcoCategories = [
  { num: "01", category: "Hardware", desc: "Anchors, tags, mounts, cables, switches, servers, and accessories — the most visible upfront cost." },
  { num: "02", category: "Software & Licensing", desc: "Where TCO diverges most. Subscription vendors charge per-tag, platform, seat, and support fees annually. CUWB: one-time, zero recurring." },
  { num: "03", category: "Installation Labor", desc: "Anchor mounting, cable runs, switch config, tag attachment. Varies by facility complexity." },
  { num: "04", category: "Cable & Network", desc: "Ethernet cabling, PoE injectors, switches, network upgrades. ChainPoE significantly reduces this." },
  { num: "05", category: "Commissioning", desc: "System setup, anchor position registration, accuracy validation, integration testing." },
  { num: "06", category: "Maintenance & Ops", desc: "Tag battery replacement, anchor health monitoring, firmware updates, system administration." },
  { num: "07", category: "Scaling", desc: "Adding more anchors, tags, or coverage areas as your deployment grows." },
];

const hiddenCosts = [
  "Mandatory professional services contracts",
  "Vendor lock-in migration costs",
  "Price increases at renewal",
  "Minimum commitment periods",
  "Data egress fees if you leave",
];

const tcoSteps = [
  "List all hardware with unit costs",
  "Add installation labor estimate",
  "Project software/licensing costs over 5 years",
  "Include annual maintenance and operations",
  "Factor in scaling plans",
  "Compare across 2–3 vendors",
];

const navSections = [
  { id: "hardware-pricing", label: "Hardware" },
  { id: "software-fees", label: "Software Fees" },
  { id: "chainpoe-savings", label: "ChainPoE" },
  { id: "tco", label: "TCO" },
  { id: "get-quote", label: "Get Quote" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="hero-field relative overflow-hidden border-b border-line bg-surface">
        <div className="absolute inset-0 signal-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Pricing / Cost Guide
            </div>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.94] tracking-normal text-foreground">
              UWB RTLS Pricing
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Transparent hardware pricing, zero recurring software fees, ChainPoE installation savings,
              and a complete total-cost-of-ownership breakdown — all in one place.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-[18px] py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
              >
                Get a Custom Quote
              </a>
              <a
                href="#hardware-pricing"
                className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-[18px] py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
              >
                View Hardware Pricing
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Hardware", description: "Published anchor & tag prices" },
              { title: "Software", description: "$0 recurring fees" },
              { title: "ChainPoE", description: "Up to 90% cabling savings" },
              { title: "Local data", description: "No cloud, no egress costs" },
              { title: "TCO", description: "5-year cost comparison" },
            ].map((fact) => (
              <div key={fact.title} className="bg-background p-5">
                <div className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">{fact.title}</div>
                <div className="mt-2 text-sm font-semibold leading-5 text-foreground">{fact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <div className="sticky top-[65px] z-30 border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-1 overflow-x-auto py-3" aria-label="Pricing sections">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-muted hover:text-brand whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-panel transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* SECTION 1: Hardware Pricing */}
      <section id="hardware-pricing" className="relative border-b border-line bg-background">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Section 01</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">Hardware Pricing</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              CUWB publishes hardware prices publicly so buyers can evaluate fit and budget without a sales conversation.
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-subtle">What affects your total price</p>
              <ul className="space-y-2 text-muted text-sm">
                {[
                  "Number of anchors (facility size & coverage requirements)",
                  "Number of tags (assets / people to track)",
                  "Tag types (standard vs high-speed vs rugged)",
                  "Mounting accessories needed",
                  "Network infrastructure (switches, cabling)",
                  "Installation approach (DIY vs assisted)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a href="/anchors" className="text-sm font-semibold text-brand hover:underline">View anchor models →</a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-panel">
                    <th className="px-4 py-3 text-left font-[650] text-foreground">Category</th>
                    <th className="px-4 py-3 text-left font-[650] text-foreground">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {hardwareRows.map((row) => (
                    <tr key={row.category} className="border-t border-line">
                      <td className="px-4 py-3 font-medium text-foreground">{row.category}</td>
                      <td className="px-4 py-3">
                        <a href={row.link} className="text-sm font-semibold text-brand hover:underline">{row.linkLabel} →</a>
                        <span className="mt-0.5 block text-xs text-subtle">{row.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="border-b border-line bg-panel px-4 py-3">
                <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">Example system configurations</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line">
                    <th className="px-4 py-2.5 text-left font-[650] text-foreground">Deployment</th>
                    <th className="px-4 py-2.5 text-center font-[650] text-foreground">Anchors</th>
                    <th className="px-4 py-2.5 text-center font-[650] text-foreground">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {deploymentExamples.map((ex) => (
                    <tr key={ex.label} className="border-t border-line">
                      <td className="px-4 py-2.5 font-medium text-foreground">{ex.label}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{ex.anchors}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{ex.tags}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: No Recurring Software Fees (DARK) */}
      <section id="software-fees" className="relative overflow-hidden border-b border-line bg-foreground text-background">
        <div className="absolute inset-0 dark-signal-grid opacity-45" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand-border">Section 02</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-background">
              No Recurring Software Fees
            </h2>
            <p className="mt-5 text-lg leading-[1.7] text-[#cbbfbc]">
              CUWB includes all software with your hardware purchase. No annual license renewals,
              no per-tag fees, no seat-based pricing — forever.
            </p>
            <p className="mt-4 text-lg leading-[1.7] text-[#cbbfbc]">
              Most enterprise RTLS vendors charge $5–$50+ per tag per year. Over a 5-year deployment
              with 100 tags, that compounds to $30,000–$120,000 in fees you will not pay with CUWB.
            </p>
            <div className="mt-7">
              <a href="/cuwb-advantage#software-fees" className="text-sm font-semibold text-brand hover:underline">
                Explore the full cost comparison →
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-[#3b2927] bg-[#3b2927] sm:grid-cols-2">
            <div className="bg-[#1b1413] p-5">
              <div className="mb-3 font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-brand-border">
                Typical subscription vendor
              </div>
              <ul className="space-y-2">
                {subscriptionCosts.map((item) => (
                  <li key={item.fee} className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-[#cbbfbc]">{item.fee}</span>
                    <span className="font-mono text-[0.68rem] font-[650] text-subtle whitespace-nowrap">{item.range}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#9d8f8b]">Costs compound every year.</p>
            </div>

            <div className="bg-[#1b1413] p-5">
              <div className="mb-3 font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-brand-border">
                CUWB — included
              </div>
              <ul className="space-y-2">
                {cuwbIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#cbbfbc]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#9d8f8b]">One-time hardware cost. Zero recurring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ChainPoE Installation Savings */}
      <section id="chainpoe-savings" className="relative border-b border-line bg-surface">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Section 03</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">ChainPoE Installation Savings</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              ChainPoE allows UWB anchors to be daisy-chained over a single Ethernet drop —
              reducing cabling costs by up to 90%
              compared to traditional star-topology PoE.
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-subtle">When ChainPoE matters most</p>
              <ul className="space-y-2 text-muted text-sm">
                {[
                  "High-ceiling facilities (expensive lift access)",
                  "Large deployments (24+ anchors)",
                  "Facilities with limited switch port availability",
                  "Linear layouts (long corridors, aisles, production lines)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a href="/articles/chainpoe" className="text-sm font-semibold text-brand hover:underline">
                ChainPoE technical article →
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-line bg-background">
              <div className="border-b border-line bg-panel px-4 py-3">
                <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">Savings categories</p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {chainpoeSavings.map((row) => (
                    <tr key={row.category} className="border-t border-line first:border-t-0">
                      <td className="px-4 py-2.5 font-medium text-foreground w-2/5">{row.category}</td>
                      <td className="px-4 py-2.5 text-muted">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-hidden rounded-lg border border-line bg-background">
              <div className="border-b border-line bg-panel px-4 py-3">
                <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">Installation savings by deployment size</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line">
                    <th className="px-4 py-2.5 text-left font-[650] text-foreground">Deployment</th>
                    <th className="px-4 py-2.5 text-center font-[650] text-foreground">Anchors</th>
                    <th className="px-4 py-2.5 text-center font-[650] text-foreground">Est. savings</th>
                  </tr>
                </thead>
                <tbody>
                  {deploymentExamples.map((ex) => (
                    <tr key={ex.label} className="border-t border-line">
                      <td className="px-4 py-2.5 font-medium text-foreground">{ex.label}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{ex.anchors}</td>
                      <td className="px-4 py-2.5 text-center font-semibold text-brand">{ex.chainpoeSaving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Total Cost of Ownership */}
      <section id="tco" className="relative border-b border-line bg-background">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Section 04</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">Total Cost of Ownership</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              A complete breakdown of every cost category that goes into owning and operating
              a real-time location system. CUWB eliminates recurring software fees —
              often the largest long-term cost driver in enterprise RTLS.
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-subtle">How to calculate your TCO</p>
              <ol className="space-y-2">
                {tcoSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line bg-surface font-mono text-xs font-[650] text-foreground">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="border-b border-line bg-panel px-4 py-3">
                <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">TCO cost categories</p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {tcoCategories.map((row) => (
                    <tr key={row.num} className="border-t border-line first:border-t-0">
                      <td className="px-4 py-3 font-mono text-[0.68rem] font-[650] text-subtle w-10">{row.num}</td>
                      <td className="px-4 py-3 font-medium text-foreground w-1/3">{row.category}</td>
                      <td className="px-4 py-3 text-muted">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-hidden rounded-lg border border-brand-border bg-brand-soft p-5">
              <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-brand-ink mb-3">
                Hidden costs to watch for
              </p>
              <ul className="space-y-2">
                {hiddenCosts.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-ink">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="relative overflow-hidden bg-polished-panel">
        <div className="absolute inset-0 signal-grid opacity-55" />
        <div className="relative mx-auto max-w-7xl px-6 py-[clamp(72px,10vw,132px)]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Continue exploring</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
              Related resources.
            </h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Product", title: "Anchor Models & Pricing", href: "/anchors" },
              { label: "Product", title: "Tag Models & Pricing", href: "/tags" },
              { label: "Product", title: "Software — No-Fee Details", href: "/software" },
              { label: "Article", title: "ChainPoE Technical Article", href: "/articles/chainpoe" },
              { label: "Advantage", title: "CUWB Advantage", href: "/cuwb-advantage" },
              { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
              { label: "Comparison", title: "UWB vs BLE vs RFID vs GPS", href: "/learn/uwb-vs-ble-rfid-gps" },
              { label: "Guide", title: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="group bg-background p-6 transition-colors hover:bg-surface">
                <span className="block font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">{item.label}</span>
                <span className="mt-1 block text-base font-[650] text-foreground group-hover:text-brand">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-quote" className="border-t border-line bg-background">
        <div className="relative mx-auto max-w-4xl px-6 py-[clamp(72px,10vw,132px)] text-center">
          <div className="absolute inset-0 signal-grid opacity-55" />
          <div className="relative">
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Get a quote</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
              Know what you will pay before you commit.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Tell us about your facility, tracking requirements, and deployment timeline. We'll provide a
              detailed system estimate — hardware, installation, and total cost of ownership — with no hidden line items.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-[18px] py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
              >
                Contact CUWB Engineering
              </a>
              <a
                href="/anchors"
                className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-[18px] py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
              >
                View Hardware Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
