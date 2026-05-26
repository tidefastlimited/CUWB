export default function Home() {
  const proofRows = [
    ["Precision", "Centimeter-level UWB positioning"],
    ["Latency", "Built for fast motion data"],
    ["Software", "Local operation, no recurring CUWB fees"],
    ["Install", "ChainPoE reduces cable and switch complexity"],
    ["Integration", "API access for custom workflows"],
  ];

  const customerModes = [
    ["01", "Industrial operations", "Track equipment, WIP, forklifts, tools, and assets across complex facilities.", "/solutions/warehouse-asset-tracking"],
    ["02", "Engineering and R&D", "Use low-latency UWB data for robotics, measurement, testing, and custom applications.", "/solutions/robotics-agv-tracking"],
    ["03", "Systems integrators", "Build RTLS solutions with local data, clear hardware costs, and engineering access.", "/rtls-api-integration"],
    ["04", "Healthcare and venues", "Apply precise location data where privacy, motion, and reliability matter.", "/solutions/hospital-equipment-tracking"],
  ];

  const decisionLinks = [
    ["Technology fit", "/learn/uwb-vs-ble-rfid-gps", "Compare UWB with BLE, RFID, GPS, and Wi-Fi."],
    ["Anchor planning", "/learn/uwb-anchor-placement", "Estimate layout needs before installation."],
    ["API integration", "/rtls-api-integration", "Plan local data and software workflows."],
    ["CUWB advantage", "/cuwb-advantage", "See where CUWB fits and where it may not."],
  ];

  const differentiators = [
    {
      label: "No recurring fees",
      title: "Software included. No subscription.",
      description: "CUWB software runs locally on your hardware. No per-tag fees, no per-anchor licenses, no annual software contracts.",
      href: "/pricing#software-fees",
    },
    {
      label: "Public pricing",
      title: "Transparent hardware costs.",
      description: "Anchor, tag, accessory, and kit prices are published upfront. Evaluate fit and budget before talking to sales.",
      href: "/pricing#hardware-pricing",
    },
    {
      label: "Local operation",
      title: "Your infrastructure. Your data.",
      description: "All positioning computation happens on your network. No data leaves your facility. Full GDPR, HIPAA, and ITAR compatibility.",
      href: "/learn/local-rtls-vs-cloud-rtls",
    },
    {
      label: "ChainPoE",
      title: "Simpler installation.",
      description: "Daisy-chain up to 12 anchors per cable drop with ChainPoE — reducing cabling costs by up to 90%.",
      href: "/articles/chainpoe",
    },
  ];

  const solutions = [
    {
      title: "Warehouse Asset Tracking",
      description: "Locate pallets, forklifts, carts, and equipment in real time. Reduce search time and improve utilization.",
      href: "/solutions/warehouse-asset-tracking",
      tone: "bg-foreground text-background",
    },
    {
      title: "Manufacturing & WIP Tracking",
      description: "Track work-in-progress through production cells. Connect location data to MES and workflow systems.",
      href: "/solutions/manufacturing-rtls",
      tone: "bg-surface text-foreground",
    },
    {
      title: "Forklift Tracking",
      description: "Monitor forklift position, utilization, and safety zones. Feed telemetry into operations dashboards.",
      href: "/solutions/forklift-tracking",
      tone: "bg-polished-panel text-foreground",
    },
    {
      title: "Robotics & AGV Localization",
      description: "High-update-rate UWB position data for closed-loop robot control, SLAM validation, and motion capture.",
      href: "/solutions/robotics-agv-tracking",
      tone: "bg-brand text-background",
    },
    {
      title: "Healthcare Equipment Tracking",
      description: "Find mobile medical equipment faster. Improve utilization. Support biomedical engineering with local data.",
      href: "/solutions/hospital-equipment-tracking",
      tone: "bg-surface text-foreground",
    },
    {
      title: "Sports & Athlete Tracking",
      description: "Low-latency, high-frequency athlete and object tracking for performance analysis and broadcast graphics.",
      href: "/solutions/sports-athlete-tracking",
      tone: "bg-panel text-foreground",
    },
    {
      title: "Mining Personnel & Equipment",
      description: "Track personnel and heavy equipment in underground and surface mining environments with ruggedized tags.",
      href: "/solutions/mining-personnel-tracking",
      tone: "bg-surface text-foreground",
    },
    {
      title: "Custom UWB Engineering",
      description: "Private-label hardware, custom enclosures, firmware modifications, and application-specific engineering from Ciholas.",
      href: "/custom-uwb",
      tone: "bg-foreground text-background",
    },
  ];

  const learnLinks = [
    ["UWB RTLS Explained", "/learn/uwb-rtls", "Components, accuracy, ranging, and practical use cases."],
    ["UWB vs BLE", "/learn/uwb-vs-ble", "Precision, latency, infrastructure, and fit."],
    ["UWB vs RFID", "/learn/uwb-vs-rfid", "Real-time tracking compared with checkpoint visibility."],
    ["UWB vs GPS Indoors", "/learn/uwb-vs-gps-indoor", "Why GPS fails indoors and how UWB fills the gap."],
    ["UWB vs Wi-Fi Positioning", "/learn/uwb-vs-wifi-positioning", "Accuracy, latency, and infrastructure comparison."],
    ["RTLS Cost Guide", "/pricing", "Hardware, software, installation, and ownership cost."],
    ["TCO Breakdown", "/pricing#tco", "Compare CUWB against subscription RTLS alternatives."],
    ["Anchor Placement", "/learn/uwb-anchor-placement", "Anchor counts, placement strategy, and coverage planning."],
  ];

  const deploymentLinks = [
    ["Estimate Tag Count & Rate", "/rtls-deployment-planning/estimate-tag-count-and-rate", "How many tags and what update rate fits your use case."],
    ["Anchor Placement Guide", "/learn/uwb-anchor-placement", "Coverage area, obstructions, ceiling height, and layout examples."],
    ["Network Requirements", "/rtls-deployment-planning/uwb-network-requirements", "Switch specs, PoE budget, bandwidth, VLAN, and ChainPoE considerations."],
    ["Obstructions & Signal", "/rtls-deployment-planning/how-obstructions-affect-uwb", "How metal, concrete, and environment affect UWB propagation."],
    ["Indoor vs Outdoor", "/rtls-deployment-planning/indoor-vs-outdoor-uwb-deployment", "Environmental ratings, mounting, power, and hybrid deployments."],
    ["Commissioning Checklist", "/rtls-deployment-planning/rtls-commissioning-checklist", "Step-by-step guide from hardware install to operational handoff."],
  ];

  const caseStudies = [
    {
      badge: "Warehouse",
      title: "Warehouse Asset Tracking: 48 Anchors, 120 Tags",
      description: "Large-scale warehouse deployment with full local API integration and WMS connectivity.",
      href: "/case-studies/warehouse-asset-tracking-48-anchors",
    },
    {
      badge: "Robotics",
      title: "High-Speed Robotics Tracking at 100 Hz",
      description: "Closed-loop robot control using high-update-rate UWB position data in an R&D environment.",
      href: "/case-studies/high-speed-robotics-tracking-100hz",
    },
    {
      badge: "Healthcare",
      title: "Medical Equipment Tracking with Local RTLS",
      description: "Hospital deployment tracking biomedical equipment with local data and HIPAA-compatible architecture.",
      href: "/case-studies/medical-equipment-tracking-local-rtls",
    },
    {
      badge: "Mining",
      title: "Mine Equipment & Personnel Tracking",
      description: "Underground and surface mine deployment with ruggedized tags and personnel safety workflows.",
      href: "/case-studies/mine-equipment-personnel-tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="hero-field relative overflow-hidden border-b border-line bg-surface">
          <div className="absolute inset-0 signal-grid" />
          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-line lg:block" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:py-24">
            <div className="relative z-10">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Local UWB RTLS
                </div>
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-subtle">
                  Centimeter precision / local data / public pricing
                </div>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.75rem,9vw,8.6rem)] font-bold leading-[0.84] tracking-normal text-foreground">
                Location data for real facilities.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                CUWB gives engineering and operations teams precise, low-latency Ultra-Wideband tracking with local control,
                public hardware pricing, and deployment paths built for production environments.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
                >
                  Estimate RTLS Cost
                </a>
                <a
                  href="/rtls-deployment-planning"
                  className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
                >
                  Plan a Deployment
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-20 -top-20 hidden h-56 w-56 rounded-full border border-brand/20 lg:block" />
              <div className="relative rounded-lg border border-line bg-polished-panel p-3" style={{ boxShadow: "var(--console-lift)" }}>
                <div className="overflow-hidden rounded-md border border-line bg-surface">
                  <div className="flex items-center justify-between border-b border-line px-4 py-3">
                    <div>
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-subtle">
                        Deployment view
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Warehouse RTLS sample</p>
                    </div>
                    <div className="rounded-md bg-brand-soft px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink">
                      Live local data
                    </div>
                  </div>

                  <div className="grid gap-px bg-line md:grid-cols-[1fr_15rem]">
                    <div className="relative min-h-[360px] overflow-hidden bg-panel p-5">
                      <div className="absolute inset-5 rounded-md border border-line bg-surface" />
                      <div className="absolute inset-8 rounded-full border border-brand/20" />
                      <div className="absolute inset-16 rounded-full border border-line" />
                      <div className="absolute left-[18%] top-[20%] h-3 w-3 rounded-full bg-brand shadow-[0_0_0_8px_rgba(239,58,50,0.12)]" />
                      <div className="absolute right-[22%] top-[26%] h-3 w-3 rounded-full bg-brand shadow-[0_0_0_8px_rgba(239,58,50,0.12)]" />
                      <div className="absolute bottom-[22%] left-[26%] h-3 w-3 rounded-full bg-brand shadow-[0_0_0_8px_rgba(239,58,50,0.12)]" />
                      <div className="absolute bottom-[18%] right-[18%] h-3 w-3 rounded-full bg-brand shadow-[0_0_0_8px_rgba(239,58,50,0.12)]" />
                      <div className="absolute left-[32%] top-[42%] h-2.5 w-2.5 rounded-full bg-foreground" />
                      <div className="absolute left-[48%] top-[55%] h-2.5 w-2.5 rounded-full bg-foreground" />
                      <div className="absolute right-[31%] top-[45%] h-2.5 w-2.5 rounded-full bg-foreground" />
                      <div className="absolute left-[32%] top-[42%] h-[1px] w-[145px] rotate-[18deg] bg-brand/50" />
                      <div className="absolute right-[31%] top-[45%] h-[1px] w-[118px] -rotate-[25deg] bg-brand/50" />
                      <div className="absolute bottom-[32%] left-[48%] h-[1px] w-[132px] rotate-[42deg] bg-brand/50" />
                      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 overflow-hidden rounded-md border border-line bg-surface text-center text-xs text-muted">
                        <span className="px-3 py-2">48 anchors</span>
                        <span className="border-x border-line px-3 py-2">120 tags</span>
                        <span className="px-3 py-2">Local API</span>
                      </div>
                    </div>

                    <div className="grid gap-px bg-line text-sm">
                      {proofRows.map(([label, value]) => (
                        <div key={label} className="bg-surface p-4">
                          <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-subtle">
                            {label}
                          </div>
                          <div className="mt-1 font-medium leading-5 text-foreground">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-background">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 py-0 lg:grid-cols-[0.6fr_1.4fr]">
            <div className="border-x border-line bg-panel px-6 py-10 lg:py-16">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Customer modes</p>
              <h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight text-foreground">
                One RTLS system, tuned for different buying motions.
              </h2>
            </div>
            <div className="border-r border-line">
              {customerModes.map(([number, title, copy, href]) => (
                <a
                  key={title}
                  href={href}
                  className="group grid gap-4 border-t border-line bg-surface px-6 py-6 transition-colors first:border-t-0 hover:bg-polished-panel md:grid-cols-[5rem_0.7fr_1fr]"
                >
                  <span className="font-mono text-sm font-semibold text-brand">{number}</span>
                  <span className="text-lg font-semibold text-foreground">{title}</span>
                  <span className="text-sm leading-6 text-muted">{copy}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-line bg-foreground text-background">
          <div className="absolute inset-0 dark-signal-grid opacity-45" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-border">
                Why CUWB
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-none md:text-5xl">
                Built for buyers who need proof before platform promises.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#d8ccca]">
                The commercial story is part of the product: local operation, open evaluation, simpler installation, and no recurring CUWB software fees.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-[#4a3330] bg-[#4a3330]">
              {differentiators.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="grid gap-4 bg-[#1b1413] p-5 transition-colors hover:bg-[#241918] md:grid-cols-[10rem_1fr]"
                >
                  <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-border">
                    {d.label}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-background">{d.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#cbbfbc]">{d.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Solutions</p>
                <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                  Precision is useful only when it fits the work.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  From warehouse asset tracking to robotics localization, CUWB adapts to how your team works.
                </p>
                <a href="/cuwb-advantage" className="mt-7 inline-flex text-sm font-semibold text-brand hover:underline">
                  See the CUWB Advantage
                </a>
              </div>

              <div className="solutions-mosaic">
                {solutions.map((s, index) => (
                  <a
                    key={s.title}
                    href={s.href}
                    className={`${s.tone} group relative min-h-44 overflow-hidden rounded-lg border border-line p-5 transition-transform hover:-translate-y-1`}
                  >
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] opacity-60">
                      0{index + 1}
                    </span>
                    <span className="mt-8 block text-lg font-semibold leading-tight">{s.title}</span>
                    <span className="mt-2 block text-sm leading-6 opacity-75">{s.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Docs</p>
                <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                  Compare, price, plan.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Buyer-friendly guides for every stage of RTLS evaluation.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
                {learnLinks.map(([title, href, desc]) => (
                  <a key={title} href={href} className="bg-background p-5 text-sm transition-colors hover:bg-polished-panel">
                    <span className="block font-semibold text-foreground">{title}</span>
                    <span className="mt-2 block leading-6 text-muted">{desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-panel">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Buyer clarity</p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                Compare the system before you commit to the system.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {decisionLinks.map(([title, href, copy]) => (
                <a
                  key={title}
                  href={href}
                  className="rounded-lg border border-line bg-surface px-5 py-4 text-sm text-muted transition-all hover:border-brand-border hover:text-brand hover:shadow-[0_10px_24px_rgba(31,23,23,0.08)]"
                >
                  <span className="block font-semibold text-foreground">{title}</span>
                  <span className="mt-2 block leading-6">{copy}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Deployment Planning</p>
                <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                  Everything needed to plan a UWB RTLS deployment.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Anchor counts, network requirements, obstructions, commissioning checklists, and ChainPoE setup.
                </p>
                <a href="/rtls-deployment-planning" className="mt-7 inline-flex text-sm font-semibold text-brand hover:underline">
                  View full planning hub
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {deploymentLinks.map(([title, href, desc]) => (
                  <a
                    key={title}
                    href={href}
                    className="rounded-md border border-line bg-surface px-5 py-4 text-sm transition-all hover:border-brand-border hover:shadow-[0_10px_24px_rgba(31,23,23,0.08)]"
                  >
                    <span className="block font-semibold text-foreground">{title}</span>
                    <span className="mt-1.5 block leading-6 text-muted">{desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Case Studies</p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                Deployments across industries.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Real deployment examples showing environment, scale, configuration, and outcomes.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {caseStudies.map((cs) => (
                <a key={cs.title} href={cs.href} className="group bg-background p-6 transition-colors hover:bg-polished-panel">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink">
                    {cs.badge}
                  </div>
                  <h3 className="text-base font-semibold leading-tight text-foreground">{cs.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{cs.description}</p>
                  <span className="mt-4 inline-block text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    Read case study
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-polished-panel">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Cost clarity</p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                Know what you will pay before you commit.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Public anchor and tag prices. No recurring CUWB software fees. ChainPoE cuts installation cost.
                Understand total cost of ownership before your first purchase order.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/pricing#hardware-pricing"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
                >
                  View Hardware Pricing
                </a>
                <a
                  href="/pricing#tco"
                  className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
                >
                  Compare TCO
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-line bg-surface p-6">
              <div className="mb-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-subtle">
                What is included
              </div>
              <div className="grid gap-px bg-line text-sm">
                {[
                  ["Hardware", "Anchors, tags, accessories, kits, published prices"],
                  ["Software", "CUWB positioning engine, dashboard, API, no recurring fees"],
                  ["Support", "Documentation, community, and engineering access"],
                  ["ChainPoE", "Daisy-chain cabling, fewer switches, less labor"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start gap-3 bg-background px-4 py-3">
                    <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <div>
                      <div className="font-semibold text-foreground">{label}</div>
                      <div className="text-muted">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background">
          <div className="absolute inset-0 signal-grid opacity-55" />
          <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">Get started</p>
            <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
              Ready to plan your UWB RTLS deployment?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Talk to our engineering team about your facility, use case, and deployment path.
              No aggressive sales process, just technical answers.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
              >
                Contact CUWB Engineering
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
              >
                Browse FAQ
              </a>
            </div>
            <p className="mt-8 text-sm text-subtle">
              Or start by reading the{" "}
              <a href="/cuwb-advantage" className="text-brand hover:underline">CUWB Advantage</a>,{" "}
              <a href="/pricing" className="text-brand hover:underline">RTLS cost guide</a>, or{" "}
              <a href="/learn/uwb-vs-ble-rfid-gps" className="text-brand hover:underline">technology comparison</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
