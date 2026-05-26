import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB vs BLE for Indoor Tracking — Detailed Comparison | CUWB",
  description:
    "UWB vs Bluetooth Low Energy (BLE) for indoor asset tracking: accuracy, cost, range, infrastructure, and use case comparison. When to choose UWB over BLE.",
};

export default function UWBVsBLEPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>UWB delivers centimeter-level accuracy</strong> while <strong>BLE offers lower cost
            and broader ecosystem support</strong>. Choose UWB when precision, latency, or reliability matter most.
            Choose BLE when budget is constrained, approximate room-level location is sufficient,
            or you need broad device interoperability.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Comparison</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">UWB vs BLE</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            A detailed comparison of Ultra-Wideband and Bluetooth Low Energy for indoor tracking applications.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            {[
              { title: "Technology Overview", desc: "How UWB works (time-of-flight pulse ranging) vs how BLE works (RSSI / AoA signal strength)." },
              { title: "Accuracy Comparison", desc: "UWB: centimeter-level (5–30 cm). BLE RSSI: meter-level (3–5 m). BLE AoA: sub-meter (0.5–2 m)." },
              { title: "Cost Comparison", desc: "Hardware cost per tag/anchor. Infrastructure requirements. Total deployment cost." },
              { title: "Infrastructure Comparison", desc: "Anchors/beacons needed. Power requirements. Network dependency." },
              { title: "Update Rate & Latency", desc: "UWB supports high update rates (up to 100 Hz) with low latency. BLE is typically slower." },
              { title: "BLE Angle-of-Arrival (AoA)", desc: "How BLE AoA improves on basic BLE accuracy, and where it still falls short of UWB." },
              { title: "When to Choose UWB", desc: "Sub-meter or centimeter-level precision; low-latency positioning matters (robotics, safety); high tag update rates required; reliability in multi-path environments is critical" },
              { title: "When to Choose BLE", desc: "Budget is the primary constraint; room-level or zone-based detection is sufficient; you want to leverage existing BLE infrastructure or devices; tag battery life must be measured in years" },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{typeof item.desc === 'string' ? item.desc : null}</p>
                {Array.isArray(item.desc) ? (
                  <ul className="space-y-1.5 text-muted">
                    {(item.desc as string[]).map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                ) : typeof item.desc === 'string' ? null : null}
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-vs-ble-rfid-gps" className="hover:text-brand">Full Multi-Technology Comparison</a></li>
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
                <li><a href="/learn/indoor-asset-tracking" className="hover:text-brand">Indoor Asset Tracking Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
