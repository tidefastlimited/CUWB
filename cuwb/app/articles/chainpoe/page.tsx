import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChainPoE — Simplified UWB Anchor Installation | CUWB",
  description:
    "ChainPoE lets you daisy-chain UWB anchors together, reducing cable runs, switch ports, and installation cost. Learn how ChainPoE simplifies RTLS deployment.",
};

export default function ChainPoEArticlePage() {
  return (
    <div className="min-h-screen">
      {/* Definition block */}
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>ChainPoE</strong> is a daisy-chaining technology that allows up to 12 UWB anchors to share
            a single Ethernet cable run and switch port. This reduces cabling costs by up to <strong>90%</strong>
            compared to traditional star-topology PoE deployments.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-subtle mb-3">Article</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            ChainPoE: Simplified Anchor Installation
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Daisy-chain UWB anchors to reduce cabling complexity, switch port count,
            and installation labor. One of CUWB&apos;s key deployment differentiators.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">What Is ChainPoE?</h2>
              <p className="leading-relaxed text-muted">Content explaining ChainPoE technology and how it works.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">The Problem With Standard PoE</h2>
              <p className="leading-relaxed text-muted">
                Every anchor needs its own cable run back to a switch. In large deployments, that means many cables,
                many switch ports, and significant labor.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How ChainPoE Solves It</h2>
              <p className="leading-relaxed text-muted">Anchors are daisy-chained together. One drop serves multiple anchors.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Before / After Comparison</h2>
              <p className="leading-relaxed text-muted">Cable counts, switch ports, and labor comparison for 12, 24, and 48 anchor deployments.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Installation Cost Savings</h2>
              <p className="leading-relaxed text-muted">
                Quantified savings on cabling, switch hardware, and labor. See also:{" "}
                <a href="/pricing" className="text-brand hover:underline">RTLS Cost Analysis</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Sample Deployments</h2>
              <ul className="space-y-2 text-muted">
                <li>Small warehouse (12 anchors)</li>
                <li>Medium facility (24 anchors)</li>
                <li>Large deployment (48+ anchors)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/anchors" className="hover:text-brand">Anchors</a></li>
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning</a></li>
                <li><a href="/pricing" className="hover:text-brand">RTLS Cost</a></li>
                <li><a href="/cuwb-advantage" className="hover:text-brand">CUWB Advantage</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
