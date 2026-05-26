import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor vs Outdoor UWB Deployment — Differences and Considerations | CUWB",
  description:
    "Key differences between indoor and outdoor UWB RTLS deployment: environmental factors, anchor placement, enclosure requirements, power, and regulatory considerations.",
};

export default function IndoorVsOutdoorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment Planning</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Indoor vs Outdoor UWB Deployment
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Key differences, considerations, and best practices for deploying UWB RTLS
            indoors versus outdoors.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Indoor Deployment Characteristics</h2>
              <ul className="space-y-2 text-muted">
                <li>Controlled environment (temperature, humidity)</li>
                <li>Multi-path from walls, racking, equipment</li>
                <li>Ceiling mounting typically available</li>
                <li>PoE power readily available</li>
                <li>Primary use case for most CUWB deployments</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Outdoor Deployment Characteristics</h2>
              <ul className="space-y-2 text-muted">
                <li>Weather exposure (rain, sun, temperature extremes)</li>
                <li>Fewer reflective surfaces (cleaner signal environment)</li>
                <li>Pole, wall, or structure mounting required</li>
                <li>Power may require solar, battery, or long cable runs</li>
                <li>Larger coverage areas possible with fewer obstructions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Comparison Table</h2>
              <p className="leading-relaxed text-muted">Side-by-side comparison across key dimensions: mounting, power, enclosures, accuracy, maintenance, cost.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Environmental Ratings</h2>
              <p className="leading-relaxed text-muted">IP ratings, operating temperature ranges, and what&apos;s needed for outdoor-rated anchors and tags.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Hybrid Deployments</h2>
              <p className="leading-relaxed text-muted">Many real-world deployments span indoor/outdoor boundaries: loading docks, covered yards, semi-outdoor manufacturing bays, mine portals.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Regulatory Considerations</h2>
              <p className="leading-relaxed text-muted">Outdoor UWB operation may have different regulatory requirements depending on region and frequency band usage.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning Hub</a></li>
                <li><a href="/anchors" className="hover:text-brand">Anchors</a></li>
                <li><a href="/rtls-deployment-planning/how-obstructions-affect-uwb" className="hover:text-brand">Obstructions Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
