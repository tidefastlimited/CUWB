import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB vs BLE vs RFID vs GPS — Which Tracking Technology Is Right? | CUWB",
  description:
    "Compare UWB, Bluetooth Low Energy (BLE), RFID, GPS, and Wi-Fi for indoor tracking. Accuracy, cost, infrastructure, and best-fit use cases for each technology.",
};

export default function ComparisonPage() {
  return (
    <div className="min-h-screen">
      {/* Definition block — DS signal colors */}
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            For high-precision indoor tracking, <strong>UWB is usually the better choice</strong> when the application
            needs sub-meter or centimeter-level accuracy, low latency, or high update rates.
            BLE, RFID, and GPS may be better when lower cost, simple presence detection, or outdoor coverage matters more than precision.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Comparison</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">UWB vs BLE vs RFID vs GPS</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            An honest comparison of indoor tracking technologies to help you choose the right one
            for your application.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            {[
              { title: "Summary Recommendation", desc: "Quick guidance on which technology fits common scenarios." },
              { title: "Comparison Table", desc: "Side-by-side comparison of UWB, BLE, BLE AoA, RFID (active/passive), GPS, and Wi-Fi across accuracy, range, cost, infrastructure, power, and best use cases." },
              { title: "UWB Deep Dive", desc: <><a href="/learn/uwb-rtls" className="text-brand hover:underline">Full UWB RTLS guide →</a></> },
              { title: "BLE / BLE AoA", desc: "When Bluetooth-based tracking is sufficient. Angle-of-Arrival (AoA) improvements." },
              { title: "RFID", desc: "Active vs passive RFID. When presence detection is enough." },
              { title: "GPS Indoors", desc: "Why GPS doesn&apos;t work reliably indoors and what alternatives exist." },
              { title: "Wi-Fi Positioning", desc: "Using existing Wi-Fi infrastructure for rough positioning." },
              { title: "When BLE Is Enough", desc: "Scenarios where BLE provides sufficient accuracy at lower cost." },
              { title: "When RFID Is Enough", desc: "Scenarios where simple zone-based or chokepoint detection meets the need." },
              { title: "When UWB Is the Right Fit", desc: "Scenarios demanding precision, low latency, and reliability." },
              { title: "Why CUWB", desc: "How CUWB delivers on UWB&apos;s promise with transparent pricing and no recurring fees." },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
                <li><a href="/learn/indoor-asset-tracking" className="hover:text-brand">Indoor Asset Tracking</a></li>
                <li><a href="/pricing" className="hover:text-brand">RTLS Cost Analysis</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
