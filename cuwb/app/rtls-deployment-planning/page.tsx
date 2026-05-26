import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTLS Deployment Planning — UWB Installation Guide | CUWB",
  description:
    "Plan your UWB RTLS deployment: anchor placement, network requirements, installation checklist, obstructions, commissioning, and ChainPoE setup. Complete planning hub.",
};

export default function DeploymentPlanningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            RTLS Deployment Planning
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Everything you need to plan and execute a UWB RTLS deployment.
            Anchor placement, network requirements, installation checklist, and commissioning guide.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Deployment Planning Hub</h2>
              <p className="leading-relaxed text-muted">Your central resource for planning a CUWB RTLS deployment.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How Many Anchors Do I Need?</h2>
              <p className="leading-relaxed text-muted">
                <a href="/learn/uwb-anchor-placement" className="text-brand hover:underline">Read the anchor placement guide →</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Anchor Placement Guide</h2>
              <p className="leading-relaxed text-muted">Coverage area, obstructions, ceiling height, 2D vs 3D, and layout examples.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Network Requirements</h2>
              <ul className="space-y-2 text-muted">
                <li>Switch specifications</li>
                <li>PoE requirements</li>
                <li><a href="/articles/chainpoe" className="hover:text-brand">ChainPoE</a> daisy-chaining</li>
                <li>IP addressing and VLAN considerations</li>
                <li>Bandwidth requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How Obstructions Affect UWB</h2>
              <p className="leading-relaxed text-muted">Metal racking, concrete, machinery, and environmental factors.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Estimate Tag Count &amp; Tag Rate</h2>
              <p className="leading-relaxed text-muted">How many tags you need and what update rate fits your use case.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">RTLS Commissioning Checklist</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Install network infrastructure</li>
                <li>Mount anchors</li>
                <li>Configure anchor positions</li>
                <li>Deploy tags</li>
                <li>Calibrate and validate accuracy</li>
                <li>Integrate with target systems</li>
                <li>Hand off to operations</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Indoor vs Outdoor UWB Deployment</h2>
              <p className="leading-relaxed text-muted">Differences and special considerations for outdoor or semi-outdoor coverage areas.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Installation Cost Factors</h2>
              <p className="leading-relaxed text-muted">
                Labor, cabling, equipment, and time estimates. See also:{" "}
                <a href="/pricing" className="text-brand hover:underline">RTLS Cost Guide</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-anchor-placement" className="hover:text-brand">Anchor Placement Guide</a></li>
                <li><a href="/anchors" className="hover:text-brand">Anchors</a></li>
                <li><a href="/tags" className="hover:text-brand">Tags</a></li>
                <li><a href="/articles/chainpoe" className="hover:text-brand">ChainPoE Article</a></li>
                <li><a href="/pricing" className="hover:text-brand">RTLS Cost</a></li>
                <li><a href="/contact" className="hover:text-brand">Book a Deployment Review</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
