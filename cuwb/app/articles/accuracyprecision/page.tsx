import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB Accuracy & Precision — Understanding RTLS Performance | CUWB",
  description:
    "Understand UWB accuracy and precision in real-world conditions. Learn what affects positioning performance and what accuracy to expect in warehouse, manufacturing, and indoor environments.",
};

export default function AccuracyPrecisionArticlePage() {
  return (
    <div className="min-h-screen">
      {/* Definition block */}
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>UWB accuracy</strong> refers to how close a measured position is to the true position.{" "}
            <strong>UWB precision</strong> refers to the consistency of repeated measurements.
            CUWB typically achieves centimeter-level accuracy in well-deployed systems,
            with real-world performance depending on anchor geometry, obstructions, and environment.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-subtle mb-3">Article</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Accuracy &amp; Precision
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Understanding UWB RTLS accuracy and precision in real-world deployments.
            What to expect, what affects it, and how to optimize.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Accuracy vs Precision</h2>
              <p className="leading-relaxed text-muted">Clear definitions and why both matter for RTLS.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">What Accuracy Should You Expect?</h2>
              <p className="leading-relaxed text-muted">Realistic accuracy expectations for typical deployment environments.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">What Affects UWB Accuracy?</h2>
              <ul className="space-y-2 text-muted">
                <li>Anchor geometry and placement</li>
                <li>Multi-path and reflections</li>
                <li>Obstructions (metal, concrete, liquids)</li>
                <li>Tag orientation and mounting</li>
                <li>Environmental factors (temperature, interference)</li>
                <li>Operational mode (TWR vs TDoA)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Benchmark Methodology</h2>
              <p className="leading-relaxed text-muted">How CUWB measures and reports accuracy figures.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Test Environment Details</h2>
              <p className="leading-relaxed text-muted">Description of test setups used for validation.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Optimizing Accuracy in Your Deployment</h2>
              <p className="leading-relaxed text-muted">Practical tips for getting the best performance from your CUWB system.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
                <li><a href="/learn/uwb-anchor-placement" className="hover:text-brand">Anchor Placement</a></li>
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning</a></li>
                <li><a href="/cuwb-advantage" className="hover:text-brand">CUWB Advantage</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
