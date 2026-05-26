import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Mine Equipment And Personnel Tracking With UWB | CUWB",
  description:
    "Anonymized case study: underground mining operation using rugged UWB RTLS for personnel mustering, vehicle tracking, and safety monitoring with fully offline local operation.",
};

export default function MiningCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink mb-4">
            Case Study
          </span>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Mine Equipment And Personnel Tracking With UWB
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Rugged UWB RTLS operating fully underground with no internet dependency.
            Personnel accountability, vehicle tracking, and zone-based safety monitoring.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
              <div className="rounded-lg border border-line bg-surface overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Industry", "Mining / Heavy Industrial"],
                      ["Environment", "Underground mine — multiple levels, harsh conditions"],
                      ["Area Size", "~500,000 sq ft across 3 levels (~46,000 m²)"],
                      ["Anchor Count", "60 UWB anchors (ruggedized)"],
                      ["Tag Count", "85 personnel tags + 35 vehicle/equipment tags"],
                      ["Tag Types", "Personnel badges + rugged vehicle tags"],
                      ["Update Rate", "1 Hz personnel, 2 Hz vehicles"],
                      ["Connectivity", "Fully offline — no internet at any point"],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-t border-line last:border-b-0">
                        <td className="px-4 py-2.5 font-medium text-foreground w-1/3">{label}</td>
                        <td className="px-4 py-2.5 text-muted">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {[
              { title: "The Problem", desc: "The mining operation needed reliable personnel accountability underground where GPS doesn&apos;t work, cellular coverage is nonexistent, and cloud-dependent systems are non-viable. Safety regulations require knowing who is underground at all times and locating them quickly in an emergency." },
              { title: "Solution", desc: "UWB RTLS deployed entirely underground with local servers. All positioning, data storage, and visualization operate on the mine&apos;s own network with zero external connectivity requirement. Ruggedized hardware rated for the environment." },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Why Offline Operation Was Non-Negotiable</h2>
              <ul className="space-y-2 text-muted">
                <li>No cellular or internet service underground</li>
                <li>Safety-critical system cannot depend on external connectivity</li>
                <li>Data sovereignty — operational data stays within the mine</li>
                <li>Emergency response must work regardless of surface conditions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Deployment Details</h2>
              <ul className="space-y-2 text-muted">
                <li>Anchors mounted on mine walls and ceilings along haulage ways and work areas</li>
                <li>Fiber backbone connecting anchor clusters to surface control room</li>
                <li>Personnel tags issued as part of PPE (integrated with hard hats)</li>
                <li>Vehicle tags on heavy equipment, light vehicles, and shuttle cars</li>
                <li>Zone definitions for active work areas, rescue chambers, and exit routes</li>
                <li>Surface control room displays real-time underground map</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Results</h2>
              <ul className="space-y-2 text-muted">
                <li>Real-time personnel mustering with 100% underground accountability</li>
                <li>Vehicle location visible on operations dashboard at all times</li>
                <li>Zone alerts notify control room when personnel enter restricted areas</li>
                <li>Emergency mustering time reduced from 20+ minutes to &lt;3 minutes</li>
                <li>System has operated reliably through power fluctuations and environmental extremes</li>
                <li>Zero recurring software fees over 3-year deployment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Lessons Learned</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Mine environments demand ruggedized mounting and environmental protection</li>
                <li>Fiber backhaul between levels is worth the investment for reliability</li>
                <li>Battery life on personnel tags is critical — plan for charging/swap stations</li>
                <li>Zone-based alerting is more practical than continuous precise tracking for safety use cases</li>
                <li>Test extensively before full deployment — underground RF behavior differs from surface</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/solutions/mining-personnel-tracking" className="hover:text-brand">Mining Solution Page</a></li>
                <li><a href="/software" className="hover:text-brand">Local Software</a></li>
                <li><a href="/custom-uwb" className="hover:text-brand">Custom Engineering (Ruggedization)</a></li>
                <li><a href="/cuwb-advantage" className="hover:text-brand">CUWB Advantage</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
