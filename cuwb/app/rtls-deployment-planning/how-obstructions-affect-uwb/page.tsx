import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Obstructions Affect UWB — Metal, Concrete, and Signal Propagation | CUWB",
  description:
    "Understand how metal racking, concrete walls, machinery, liquids, and other obstructions affect UWB signal propagation and RTLS accuracy. Mitigation strategies included.",
};

export default function ObstructionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment Planning</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            How Obstructions Affect UWB
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            How metal, concrete, machinery, and environmental factors affect UWB signal quality —
            and how to plan around them.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How UWB Signals Behave</h2>
              <p className="leading-relaxed text-muted">UWB uses very short-duration radio pulses that are inherently resistant to multi-path interference compared to narrowband technologies like Wi-Fi or Bluetooth. But obstructions still matter.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Metal Surfaces</h2>
              <p className="leading-relaxed text-muted">Metal is the most significant challenge for UWB deployments:</p>
              <ul className="space-y-2 text-muted">
                <li>Metal racking in warehouses reflects signals</li>
                <li>Metal machinery creates signal shadows</li>
                <li>Large metal surfaces cause multi-path effects</li>
                <li>Mitigation: anchor placement above/between obstructions, increased density near metal-heavy zones</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Concrete &amp; Masonry</h2>
              <p className="leading-relaxed text-muted">Concrete attenuates UWB signals but does not completely block them. Reinforced concrete (with rebar) is more challenging than plain concrete.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Liquids &amp; Wet Materials</h2>
              <p className="leading-relaxed text-muted">Water absorbs RF energy. Tags placed on or near water-filled containers, wet products, or human bodies may see reduced range or accuracy.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Crowded RF Environments</h2>
              <p className="leading-relaxed text-muted">UWB operates in a different frequency band than Wi-Fi and Bluetooth, so coexistence is generally good. However, extremely dense RF environments may require channel planning.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Mitigation Strategies</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Increase anchor density in obstructed areas</li>
                <li>Elevate anchors above obstructions where possible</li>
                <li>Avoid placing tags directly behind large metal objects</li>
                <li>Conduct a site survey before finalizing anchor placement</li>
                <li>Use 3D positioning mode when vertical obstructions are significant</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Site Survey Best Practices</h2>
              <p className="leading-relaxed text-muted">How to identify and document obstruction challenges during the planning phase.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning Hub</a></li>
                <li><a href="/learn/uwb-anchor-placement" className="hover:text-brand">Anchor Placement Guide</a></li>
                <li><a href="/articles/accuracyprecision" className="hover:text-brand">Accuracy &amp; Precision</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
