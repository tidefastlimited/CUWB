import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Asset Tracking Systems — Guide | CUWB",
  description:
    "Learn about indoor asset tracking technologies: UWB, BLE, RFID, Wi-Fi, and GPS. Compare accuracy, cost, infrastructure needs, and find the right solution for your facility.",
};

export default function IndoorAssetTrackingPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>Indoor asset tracking</strong> uses wireless technologies to locate, monitor, and manage
            equipment, tools, vehicles, and inventory inside facilities where GPS does not work reliably.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Learn</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">Indoor Asset Tracking</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            A buyer&apos;s guide to indoor asset tracking technologies, use cases, and how to choose
            the right system for your facility.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">What Is Indoor Asset Tracking?</h2>
              <p className="leading-relaxed text-muted">Overview of indoor asset tracking concepts and benefits.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Technologies Compared</h2>
              <ul className="space-y-2 text-muted">
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB (Ultra-Wideband)</a> — highest precision</li>
                <li>BLE / BLE AoA — lower cost, broad ecosystem</li>
                <li>RFID — simple presence detection</li>
                <li>Wi-Fi positioning — uses existing infrastructure</li>
                <li>GPS — outdoor only, not suitable indoors</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Best For / Not Best For</h2>
              <p className="leading-relaxed text-muted">Guidance on when each technology is the right fit.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Indoor Asset Tracking Use Cases</h2>
              <ul className="space-y-2 text-muted">
                <li><a href="/solutions/warehouse-asset-tracking" className="hover:text-brand">Warehouse asset tracking</a></li>
                <li><a href="/solutions/hospital-equipment-tracking" className="hover:text-brand">Medical equipment tracking</a></li>
                <li>Tool tracking in manufacturing</li>
                <li>Office and enterprise asset management</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How to Choose</h2>
              <p className="leading-relaxed text-muted">Decision framework based on accuracy needs, budget, infrastructure, and integration requirements.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-vs-ble-rfid-gps" className="hover:text-brand">Full Technology Comparison</a></li>
                <li><a href="/pricing" className="hover:text-brand">RTLS Cost Analysis</a></li>
                <li><a href="/solutions/warehouse-asset-tracking" className="hover:text-brand">Warehouse Solution</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
