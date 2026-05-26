import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB vs RFID for Asset Tracking — Which Is Right? | CUWB",
  description:
    "Compare UWB vs RFID (active and passive) for asset tracking: real-time vs chokepoint detection, accuracy, range, cost, and best-fit use cases.",
};

export default function UWBVsRFIDPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>UWB provides continuous real-time positioning</strong>, while <strong>RFID provides
            point-in-time presence detection</strong>. Use UWB when you need to know where assets are at any moment.
            Use RFID when you only need to know if an asset passed through a specific point.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Comparison</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">UWB vs RFID</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Understanding the fundamental difference between continuous real-time tracking
            and point-detection systems.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Fundamental Difference</h2>
              <p className="leading-relaxed text-muted">
                <strong className="text-foreground">UWB = where is it right now?</strong> Continuous position updates anywhere in the covered area.<br />
                <strong className="text-foreground">RFID = did it pass this point?</strong> Detection only at reader locations (chokepoints).
              </p>
            </div>

            {[
              { title: "Passive RFID", items: ["No battery — tags are powered by the reader", "Very low cost per tag", "Short read range (inches to feet)", "Only detects at specific reader locations", "Best for: inventory counts, access control, item-level identification"] },
              { title: "Active RFID", items: ["Battery-powered tags with longer range", "Can provide room-level or zone-level presence", "Higher cost than passive RFID", "Limited positional accuracy compared to UWB"] },
              { title: "UWB RTLS", items: ["Continuous real-time position anywhere in coverage area", "Centimeter-level accuracy", "Higher infrastructure cost but richer data output", "Enables workflows that RFID cannot: search, utilization, motion tracking"] },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{section.title}</h2>
                <ul className="space-y-1.5 text-muted">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Comparison Table</h2>
              <p className="leading-relaxed text-muted">Side-by-side across accuracy, range, cost, infrastructure, battery life, data richness, and use case fit.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Can They Work Together?</h2>
              <p className="leading-relaxed text-muted">Yes — some deployments combine RFID for item-level ID with UWB for location tracking of high-value items.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-vs-ble-rfid-gps" className="hover:text-brand">Full Multi-Technology Comparison</a></li>
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
                <li><a href="/solutions/warehouse-asset-tracking" className="hover:text-brand">Warehouse Tracking Solution</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
