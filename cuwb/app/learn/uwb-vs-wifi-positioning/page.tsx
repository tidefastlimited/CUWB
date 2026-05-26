import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB vs Wi-Fi Positioning — Accuracy and Reliability Compared | CUWB",
  description:
    "Compare UWB RTLS with Wi-Fi based indoor positioning: accuracy differences, infrastructure needs, cost, and when each technology makes sense for your facility.",
};

export default function UWBVsWiFiPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>Wi-Fi positioning uses existing infrastructure</strong> but offers only rough
            room-level accuracy (3–5 m). <strong>UWB requires dedicated anchors</strong> but delivers
            consistent centimeter-level precision. Use Wi-Fi for approximate location; use UWB
            when you need to know exactly where something is.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Comparison</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">UWB vs Wi-Fi Positioning</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Comparing dedicated UWB infrastructure against leveraging existing Wi-Fi networks for indoor positioning.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            {[
              { title: "How Wi-Fi Positioning Works", desc: "RSSI fingerprinting, trilateration from multiple access points, and newer Wi-Fi Fine Time Measurement (FTM) approaches." },
              { title: "Accuracy Reality Check", desc: (
                <ul className="space-y-1.5 text-muted mt-2">
                  <li><strong>Wi-Fi RSSI:</strong> 3–10 meters typical, highly variable</li>
                  <li><strong>Wi-Fi FTM:</strong> 1–3 meters under good conditions</li>
                  <li><strong>UWB:</strong> 5–30 centimeters consistently</li>
                </ul>
              )},
              { title: "The Infrastructure Question", desc: "Wi-Fi positioning leverages existing APs (lower incremental cost). UWB requires new anchor hardware (higher upfront cost, better performance)." },
              { title: "Reliability & Consistency", desc: "Wi-Fi accuracy fluctuates with network changes, device density, interference, and environmental conditions. UWB is purpose-built for positioning and far more stable." },
              { title: "Update Rate", desc: "Wi-Fi positioning typically updates every few seconds. UWB can update 10–100 times per second." },
              { title: "Cost Analysis", desc: "Total cost of ownership comparison including infrastructure, maintenance, and accuracy-related operational value." },
              { title: "When Wi-Fi Positioning Is Enough", items: ["You already have dense Wi-Fi coverage", "Room-level or zone-level accuracy is sufficient", "Budget is very limited", "Use case is wayfinding or general area presence"] },
              { title: "When UWB Is Worth the Investment", items: ["You need to distinguish between nearby objects or locations", "Search time reduction has measurable ROI", "Safety or compliance requires precise location data", "You need high update rates for dynamic tracking"] },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                {"desc" in item && typeof item.desc === "string" && <p className="leading-relaxed text-muted">{item.desc}</p>}
                {"items" in item && (
                  <ul className="space-y-1.5 text-muted">
                    {(item.items as string[]).map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}
                {"desc" in item && typeof item.desc !== "string" && item.desc}
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
