import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB RTLS: How Ultra-Wideband Real-Time Location Systems Work | CUWB",
  description:
    "Learn what UWB RTLS is, how it works, and why it delivers centimeter-level indoor positioning. Components, accuracy, latency, use cases, and comparison with BLE, RFID, GPS, and Wi-Fi.",
};

export default function UWBPillarPage() {
  return (
    <div className="min-h-screen">
      {/* Definition block for AI search */}
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>UWB RTLS</strong> is a real-time location system that uses Ultra-Wideband radio signals
            between mobile tags and fixed anchors to calculate precise indoor or local-area positions
            for assets, people, vehicles, or devices.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Learn</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            UWB RTLS: How Ultra-Wideband Real-Time Location Systems Work
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            A complete guide to UWB real-time location systems — technology, components,
            accuracy, deployment, and how to choose the right system.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">What Is UWB RTLS?</h2>
              <p className="leading-relaxed text-muted">Content explaining UWB RTLS fundamentals in buyer-friendly terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How UWB RTLS Works</h2>
              <p className="leading-relaxed text-muted">Time-of-flight (ToF) / Time-Difference-of-Arrival (TDoA) explanation. Tags, anchors, and the positioning engine.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Components of a UWB RTLS</h2>
              <ul className="space-y-2 text-muted">
                <li><a href="/tags" className="hover:text-brand">Tags</a> — mobile devices attached to assets, people, or vehicles</li>
                <li><a href="/anchors" className="hover:text-brand">Anchors</a> — fixed-position reference points</li>
                <li><a href="/software" className="hover:text-brand">Software</a> — local positioning engine and API</li>
                <li>Network infrastructure — switches, cabling, PoE</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">UWB Accuracy &amp; Precision</h2>
              <p className="leading-relaxed text-muted">
                What accuracy to expect. Factors that affect precision.{" "}
                <a href="/articles/accuracyprecision" className="text-brand hover:underline">Read the deep dive →</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">UWB Latency &amp; Update Rates</h2>
              <p className="leading-relaxed text-muted">Low-latency positioning and high update-rate capabilities for demanding applications.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">UWB vs BLE vs RFID vs GPS vs Wi-Fi</h2>
              <p className="leading-relaxed text-muted">
                Honest technology comparison.{" "}
                <a href="/learn/uwb-vs-ble-rfid-gps" className="text-brand hover:underline">Read the full comparison →</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Use Cases</h2>
              <ul className="space-y-2 text-muted">
                <li><a href="/solutions/warehouse-asset-tracking" className="hover:text-brand">Warehouse asset tracking</a></li>
                <li><a href="/solutions/manufacturing-rtls" className="hover:text-brand">Manufacturing RTLS</a></li>
                <li><a href="/solutions/forklift-tracking" className="hover:text-brand">Forklift tracking</a></li>
                <li><a href="/solutions/robotics-agv-tracking" className="hover:text-brand">Robotics &amp; AGV localization</a></li>
                <li><a href="/solutions/hospital-equipment-tracking" className="hover:text-brand">Hospital equipment tracking</a></li>
                <li>Sports and athlete tracking</li>
                <li>Mining and industrial safety</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Deployment Planning</h2>
              <p className="leading-relaxed text-muted">
                Anchor placement, network requirements, and installation considerations.{" "}
                <a href="/rtls-deployment-planning" className="text-brand hover:underline">Read the deployment guide →</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Cost Factors</h2>
              <p className="leading-relaxed text-muted">
                Hardware, installation, software, and total cost of ownership.{" "}
                <a href="/pricing" className="text-brand hover:underline">Read the cost analysis →</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Why CUWB</h2>
              <p className="leading-relaxed text-muted">
                <a href="/cuwb-advantage" className="text-brand hover:underline">CUWB&apos;s advantages</a>: no recurring fees, transparent pricing, ChainPoE, local operation, engineering depth.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">FAQ</h2>
              <ul className="space-y-2 text-muted">
                <li>Is UWB safe? Yes — UWB operates at very low power levels.</li>
                <li>Does UWB work through walls? It works around obstructions with proper anchor placement.</li>
                <li>How many anchors do I need? It depends on area size and coverage requirements. <a href="/learn/uwb-anchor-placement" className="hover:text-brand">Read more →</a></li>
              </ul>
              <p className="mt-2"><a href="/faq" className="text-brand hover:underline">View all FAQ →</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
