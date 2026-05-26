import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTLS API Integration — Local UWB Location Data | CUWB",
  description:
    "Integrate CUWB UWB location data into your systems via REST API. Real-time position output, local data access, webhook support, and developer-friendly documentation.",
};

export default function APIIntegrationPage() {
  const endpoints = [
    { name: "GET /positions", desc: "Real-time X/Y/Z coordinates for all tracked tags." },
    { name: "GET /tags", desc: "Tag status, battery level, update rate, and configuration." },
    { name: "GET /anchors", desc: "Anchor status, health, and coordinate information." },
    { name: "GET /system", desc: "System health, uptime, and configuration summary." },
    { name: "WebSocket /stream", desc: "Continuous real-time position data stream." },
  ];

  const integrationPatterns = [
    {
      title: "Custom Dashboards",
      description: "Build your own visualization using real-time position data. Feed coordinates into D3, Three.js, Mapbox, or any web visualization framework.",
      stack: "REST API + WebSocket + Your frontend",
    },
    {
      title: "WMS / ERP Integration",
      description: "Correlate asset location with warehouse management or enterprise resource planning records. Enrich inventory and order data with real-time position.",
      stack: "REST API + Polling or Webhook + WMS/ERP middleware",
    },
    {
      title: "MES / SCADA Connection",
      description: "Feed work-in-progress location into manufacturing execution systems or industrial control platforms for production visibility and automation.",
      stack: "REST API + OPC-UA / MQTT adapter + MES/SCADA",
    },
    {
      title: "Robotics & AGV Navigation",
      description: "Stream high-update-rate position data as navigation input for autonomous vehicles, robot fleets, and motion control systems.",
      style: "WebSocket stream (low latency) + Robot control system",
    },
    {
      title: "Database Logging & Analytics",
      description: "Write position history to time-series databases for historical analysis, playback, reporting, and machine learning training data.",
      stack: "REST API + InfluxDB / TimescaleDB / PostgreSQL",
    },
    {
      title: "Alerting & Automation",
      description: "Trigger alerts based on zone entry/exit, geofence breaches, dwell time thresholds, or custom business rules.",
      stack: "Position polling + Rule engine + Alerting system (email, SMS, webhook)",
    },
  ];

  const gettingStarted = [
    {
      step: "1",
      title: "Deploy CUWB hardware",
      desc: "Install anchors, register tags, and configure the local CUWB software on your server or VM.",
    },
    {
      step: "2",
      title: "Configure network access",
      desc: "Ensure your integration system can reach the CUWB software API port on the local network.",
    },
    {
      step: "3",
      title: "Obtain API credentials",
      desc: "Generate an API key through the CUWB local dashboard for authenticated access.",
    },
    {
      step: "4",
      title: "Start consuming data",
      desc: "Begin with GET /positions to verify connectivity, then build your integration pattern.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Developers
              </div>
              <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                RTLS API Integration
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
                Access real-time UWB location data through CUWB&apos;s REST API.
                Build custom dashboards, integrate with WMS/MES/ERP, and keep data local.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/software"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
                >
                  Learn About CUWB Software
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
                >
                  Talk to Engineering
                </a>
              </div>
            </div>

            {/* Code-like preview card */}
            <div className="rounded-lg border border-line bg-polished-panel p-3" style={{ boxShadow: "var(--console-lift)" }}>
              <div className="overflow-hidden rounded-md border border-line bg-[#1b1413]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ef3a32]/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <p className="font-mono text-[0.65rem] text-white/40">api.local:8080</p>
                </div>
                <div className="p-4 font-mono text-xs leading-6">
                  <span className="text-[#7d1712]">GET</span>{" "}
                  <span className="text-green-400">/api/v1/positions</span>{"\n"}
                  {"\n"}
                  <span className="text-white/40">{"{"}</span>{"\n"}
                  {"  "}<span className="text-[#ffc7c3]">&quot;status&quot;</span>:{" "}
                  <span className="text-green-400">&quot;ok&quot;</span><span className="text-white/40">,</span>{"\n"}
                  {"  "}<span className="text-[#ffc7c3]">&quot;count&quot;</span>:{" "}
                  <span className="text-[#e8d8d5]">120</span><span className="text-white/40">,</span>{"\n"}
                  {"  "}<span className="text-[#ffc7c3]">&quot;positions&quot;</span>:{" "}
                  <span className="text-white/40">[</span>{"\n"}
                  {"    "}<span className="text-white/40">{"{"}</span>{" "}
                  <span className="text-[#ffc7c3]">&quot;tag_id&quot;</span>:{" "}
                  <span className="text-green-400">&quot;TAG-0042&quot;</span><span className="text-white/40">,</span>{"\n"}
                  {"      "}<span className="text-[#ffc7c3]">&quot;x&quot;</span>:{" "}
                  <span className="text-[#e8d8d5]">12.341</span><span className="text-white/40">,</span>{" "}
                  <span className="text-[#ffc7c3]">&quot;y&quot;</span>:{" "}
                  <span className="text-[#e8d8d5]">45.892</span><span className="text-white/40">,</span>{"\n"}
                  {"      "}<span className="text-[#ffc7c3]">&quot;z&quot;</span>:{" "}
                  <span className="text-[#e8d8d5]">0.000</span><span className="text-white/40">,</span>{" "}
                  <span className="text-[#ffc7c3]">&quot;ts&quot;</span>:{" "}
                  <span className="text-green-400">&quot;2026-05-27T10:23:45Z&quot;</span>{"\n"}
                  {"    "}<span className="text-white/40">{"}"}</span>{"\n"}
                  {"  "}<span className="text-white/40">]</span>{"\n"}
                  <span className="text-white/40">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCAL DATA CALLOUT ===== */}
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong className="text-foreground">All CUWB API data is served locally.</strong> No cloud relay.
            No third-party data pipeline. Your position data stays on your infrastructure,
            accessible only by systems you authorize on your network.
          </p>
        </div>
      </section>

      {/* ===== ENDPOINTS ===== */}
      <section className="border-b border-line bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Endpoints
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              REST API at a glance.
            </h2>
          </div>

          <div className="mt-12 max-w-2xl mx-auto overflow-hidden rounded-lg border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-panel">
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground font-mono">Endpoint</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {endpoints.map((ep) => (
                  <tr key={ep.name} className="hover:bg-surface transition-colors">
                    <td className="px-5 py-3.5 font-mono text-sm font-medium text-brand-ink">{ep.name}</td>
                    <td className="px-5 py-3.5 text-muted">{ep.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION PATTERNS ===== */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Patterns
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Common integration architectures.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Because CUWB serves data locally via standard protocols, it integrates
              with virtually any system on your network.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrationPatterns.map((pattern) => (
              <div key={pattern.title} className="rounded-lg border border-line bg-background p-6">
                <h3 className="text-base font-semibold text-foreground">{pattern.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{pattern.description}</p>
                <p className="mt-3 font-mono text-[0.68rem] text-subtle">{pattern.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GETTING STARTED ===== */}
      <section className="border-b border-line bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Getting started
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Four steps to integrate.
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-line overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {gettingStarted.map((step) => (
              <div key={step.step} className="bg-surface p-6">
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft font-mono text-xs font-bold text-brand-ink">
                  {step.step}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCAL VS CLOUD ===== */}
      <section className="border-b border-line bg-panel py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Why local matters
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Local API means local data.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              When your RTLS API runs locally, you own the data pipeline end-to-end.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              ["Latency", "Sub-10ms position updates. No round-trip to cloud servers."],
              ["Privacy", "No data leaves your facility. GDPR, HIPAA, ITAR compatible."],
              ["Control", "You choose the database, format, retention, and access policy."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-lg border border-line bg-surface p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/learn/local-rtls-vs-cloud-rtls" className="text-sm font-semibold text-brand hover:underline">
              Read the full local vs cloud comparison →
            </a>
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Related
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-foreground">
              Build on top of CUWB.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Software", "/software", "Local RTLS software with no recurring fees."],
              ["Custom Engineering", "/custom-uwb", "Firmware modifications and private-label options."],
              ["Solutions", "/solutions/warehouse-asset-tracking", "See how integrations work in practice."],
            ].map(([title, href, desc]) => (
              <a key={title} href={href} className="rounded-lg border border-line bg-background p-5 text-center transition-all hover:border-brand-border hover:shadow-[0_10px_24px_rgba(31,23,23,0.08)]">
                <span className="block text-base font-semibold text-foreground">{title}</span>
                <span className="mt-1.5 block text-sm text-muted">{desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
