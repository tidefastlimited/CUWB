import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CUWB Advantage — Why Choose CUWB for UWB RTLS",
  description:
    "Learn why CUWB is different: no recurring software fees, transparent hardware pricing, ChainPoE installation savings, low-latency UWB precision, and local data control.",
};

export default function CUWBAdvantagePage() {
  const advantages = [
    {
      label: "No recurring fees",
      title: "Software included. No subscription.",
      description: "CUWB does not charge recurring software license fees. No per-tag fees. No per-anchor licenses. No annual contracts. Pay for hardware once, run forever.",
      detail: "Most enterprise RTLS vendors charge $5–$50+ per tag per year in software fees. Over a 5-year deployment with 100 tags, that's $2,500–$25,000+ in fees you won't pay with CUWB.",
      href: "/pricing#software-fees",
    },
    {
      label: "Public pricing",
      title: "Transparent hardware costs.",
      description: "Anchor prices, tag prices, accessory prices, and kit prices are published upfront. Evaluate fit and budget before talking to sales.",
      detail: "No 'contact for quote' gatekeeping on basic product information. Know what you'll pay before you commit to an evaluation.",
      href: "/pricing#hardware-pricing",
    },
    {
      label: "Local operation",
      title: "Your infrastructure. Your data.",
      description: "All positioning computation happens on your local server or VM. Your location data never leaves your facility. Full GDPR, HIPAA, and ITAR compatibility.",
      detail: "Cloud RTLS vendors send your data to their servers. CUWB keeps it on your network. For healthcare, defense, manufacturing, and privacy-sensitive operations, this matters.",
      href: "/learn/local-rtls-vs-cloud-rtls",
    },
    {
      label: "ChainPoE",
      title: "Simpler installation. Lower cost.",
      description: "Daisy-chain anchors with ChainPoE — up to 12 anchors per single PoE+ port — reducing cabling costs by up to 90% and cutting installation labor significantly.",
      detail: "A 48-anchor warehouse might need only 4–8 switch ports instead of 48. Fewer cables, less conduit, faster commissioning.",
      href: "/articles/chainpoe",
    },
    {
      label: "Precision & latency",
      title: "Built for demanding applications.",
      description: "Centimeter-level accuracy. Less than 20 ms latency. Update rates up to 100 Hz. Built for robotics, sports performance, closed-loop control, and high-speed tracking.",
      detail: "If your application needs precise, fast position data — not just rough zone detection — UWB is the technology and CUWB is engineered for it.",
      href: "/articles/accuracyprecision",
    },
    {
      label: "Engineering depth",
      title: "Ciholas builds it all.",
      description: "Deep UWB, RF, embedded systems, and mechanical engineering experience. Custom firmware, private-label hardware, and end-to-end product development available.",
      detail: "Ciholas designs and manufactures UWB hardware in-house. That vertical integration means custom engineering that resellers of white-label modules can't offer.",
      href: "/custom-uwb",
    },
  ];

  const bestFor = [
    { group: "Technical teams", desc: "Who want control, API access, and integration flexibility." },
    { group: "Cost-conscious buyers", desc: "Avoiding subscription lock-in and compounding software fees." },
    { group: "Engineering / R&D orgs", desc: "Needing low-latency, high-update-rate position data." },
    { group: "Industrial operations", desc: "Needing reliable local infrastructure without cloud dependency." },
    { group: "Systems integrators", desc: "Building custom solutions with clear hardware costs." },
    { group: "Privacy-sensitive teams", desc: "In healthcare, defense, and regulated industries." },
  ];

  const notBestFor = [
    { group: "Teams wanting full SaaS platform", desc: "With dashboards, alerts, analytics, and mobile apps as a managed service — CUWB is more DIY-integration." },
    { group: "Small deployments needing zero IT", desc: "If you have no server, no IT staff, and want a fully managed cloud solution." },
    { group: "BLE-only use cases", desc: "If proximity detection or simple presence is sufficient, BLE may be more cost-effective." },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Buyer Clarity
          </div>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            The CUWB Advantage
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            High-performance UWB RTLS built for teams that need precision, transparency,
            local control, and no recurring software fees.
          </p>
        </div>
      </section>

      {/* ===== SIX ADVANTAGES ===== */}
      <section className="border-b border-line bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Differentiators
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Six reasons teams choose CUWB.
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {advantages.map((adv) => (
              <a
                key={adv.label}
                href={adv.href}
                className="group grid gap-6 rounded-lg border border-line bg-surface p-6 transition-all hover:border-brand-border hover:shadow-[0_10px_24px_rgba(31,23,23,0.08)] sm:grid-cols-[auto_1fr]"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink">
                    {adv.label}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{adv.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{adv.description}</p>
                  <p className="mt-3 text-sm leading-6 text-subtle">{adv.detail}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEST FOR / NOT BEST FOR ===== */}
      <section className="border-b border-line bg-panel py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Best for */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
                Best fit
              </div>
              <h2 className="text-2xl font-bold leading-tight text-foreground">
                CUWB is best for teams who want:
              </h2>
              <ul className="mt-6 space-y-4">
                {bestFor.map((item) => (
                  <li key={item.group} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <div>
                      <span className="font-semibold text-foreground">{item.group}</span>{" "}
                      <span className="text-muted">— {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not best for */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-subtle">
                Honest guidance
              </div>
              <h2 className="text-2xl font-bold leading-tight text-foreground">
                CUWB may not be the right fit when:
              </h2>
              <ul className="mt-6 space-y-4">
                {notBestFor.map((item) => (
                  <li key={item.group} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    <div>
                      <span className="font-medium text-foreground">{item.group}</span>
                      <span className="text-muted"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTALLED SYSTEMS ===== */}
      <section className="border-b border-line bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Deployed
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Installed across industries worldwide.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              CUWB systems are deployed in warehouses, manufacturing plants, mines,
              hospitals, sports venues, robotics labs, and R&D facilities.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Warehouse & Logistics", "/solutions/warehouse-asset-tracking"],
              ["Manufacturing & WIP", "/solutions/manufacturing-rtls"],
              ["Forklift & Vehicle", "/solutions/forklift-tracking"],
              ["Robotics & AGV", "/solutions/robotics-agv-tracking"],
              ["Healthcare Equipment", "/solutions/hospital-equipment-tracking"],
              ["Sports & Motion", "/solutions/sports-athlete-tracking"],
              ["Mining & Industrial", "/solutions/mining-personnel-tracking"],
              ["Custom Engineering", "/custom-uwb"],
            ].map(([title, href]) => (
              <a
                key={title}
                href={href}
                className="rounded-md border border-line bg-surface px-5 py-4 text-sm font-semibold text-foreground transition-all hover:border-brand-border hover:shadow-[0_10px_24px_rgba(31,23,23,0.08)]"
              >
                {title} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEXT STEPS ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Next steps
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Evaluate CUWB for your deployment.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Start with cost planning, compare technologies, or talk to our engineering team.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
            >
              Estimate RTLS Cost
            </a>
            <a
              href="/learn/uwb-vs-ble-rfid-gps"
              className="inline-flex items-center justify-center rounded-md border border-line bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
            >
              Compare Technologies
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-line bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
            >
              Talk to an Engineer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
