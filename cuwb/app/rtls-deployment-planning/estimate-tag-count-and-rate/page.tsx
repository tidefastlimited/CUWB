import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Estimate Tag Count and Update Rate for UWB RTLS | CUWB",
  description:
    "Guide to estimating how many UWB tags you need and what update rate fits your use case. Asset inventory, tracking requirements, and system capacity planning.",
};

export default function TagCountEstimatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment Planning</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Estimate Tag Count &amp; Update Rate
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            How many tags do you need? How fast should they report? A practical guide
            to scoping your UWB RTLS tag deployment.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">What to Tag</h2>
              <p className="leading-relaxed text-muted">Start by categorizing assets into priority tiers based on search frequency, value, and operational impact.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Tag Count Estimation Framework</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Inventory all trackable assets by category</li>
                <li>Apply utilization rules (not every asset needs a tag)</li>
                <li>Add buffer for future expansion (10–20%)</li>
                <li>Account for spare/replacement tags</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Update Rate Guidelines by Use Case</h2>
              <ul className="space-y-2 text-muted">
                <li><strong>Asset locating:</strong> 0.1–1 Hz (sufficient for finding stationary equipment)</li>
                <li><strong>Forklift / vehicle tracking:</strong> 1–5 Hz</li>
                <li><strong>Personnel safety:</strong> 1–5 Hz</li>
                <li><strong>WIP tracking:</strong> 0.5–2 Hz</li>
                <li><strong>Robotics / AGV navigation:</strong> 10–100 Hz</li>
                <li><strong>Sports performance:</strong> 10–100 Hz</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Trade-offs: Update Rate vs System Capacity</h2>
              <p className="leading-relaxed text-muted">Higher update rates consume more network bandwidth and system resources. Balance rate against actual need.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Tag Type Selection</h2>
              <p className="leading-relaxed text-muted">Standard tags vs high-speed tags vs rugged tags vs compact tags — matching form factor and capability to each use case.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Battery Life Considerations</h2>
              <p className="leading-relaxed text-muted">Higher update rates reduce battery life. Battery life estimates at common update rate settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/tags" className="hover:text-brand">Tag Options</a></li>
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning Hub</a></li>
                <li><a href="/learn/uwb-anchor-placement" className="hover:text-brand">Anchor Placement Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
