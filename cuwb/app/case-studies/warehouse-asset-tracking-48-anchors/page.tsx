import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Warehouse Asset Tracking With UWB RTLS — 48 Anchors, 120 Tags | CUWB",
  description:
    "Anonymized case study: warehouse asset tracking deployment with 48 UWB anchors, 120 tags, local data operation. Results, lessons learned, and deployment details.",
};

export default function WarehouseCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink mb-4">
            Case Study
          </span>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Warehouse Asset Tracking With UWB RTLS
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            48 Anchors, 120 Tags, Local Data — How a distribution center achieved real-time
            asset visibility with CUWB.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            {/* Overview table */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
              <div className="rounded-lg border border-line bg-surface overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Industry", "Warehouse / Distribution"],
                      ["Environment", "250,000 sq ft distribution center"],
                      ["Area Size", "~23,000 m²"],
                      ["Anchor Count", "48 UWB anchors"],
                      ["Tag Count", "120 asset tags"],
                      ["Tag Type", "Standard asset tags"],
                      ["Update Rate", "1–5 Hz (configurable per tag)"],
                      ["Accuracy Target", "<30 cm (achieved)"],
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
              { title: "The Problem", desc: "The facility was losing significant productivity to manual search processes. Forklifts, pallet jugs, carts, and high-value fixtures regularly went missing across a multi-zone warehouse." },
              { title: "Solution", desc: "Full-coverage UWB RTLS with ceiling-mounted ChainPoE anchors and asset-mounted tags. Data served locally to an internal dashboard integrated with the WMS." },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Deployment Details</h2>
              <ul className="space-y-2 text-muted">
                <li>Anchor placement: grid pattern with densification in high-rack zones</li>
                <li>ChainPoE used for 80% of anchor runs, reducing cable pulls significantly</li>
                <li>Tags deployed on forklifts, pallet jugs, carts, and high-value equipment</li>
                <li>Local server infrastructure on-premises</li>
                <li>REST API integration with existing WMS</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Results</h2>
              <ul className="space-y-2 text-muted">
                <li>Average search time reduced from ~15 minutes to &lt;30 seconds</li>
                <li>Equipment utilization visibility enabled right-sizing of fleet</li>
                <li>Real-time zone reporting for receiving, staging, and shipping areas</li>
                <li>Zero recurring software fees vs. quoted $45K/year from alternative vendor</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Lessons Learned</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Pre-deployment site survey is essential for anchor planning in racking-dense areas</li>
                <li>ChainPoE dramatically simplified installation along main aisles</li>
                <li>Tag mounting consistency affects accuracy more than expected</li>
                <li>Start with highest-value assets and expand from there</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/solutions/warehouse-asset-tracking" className="hover:text-brand">Warehouse Solution Page</a></li>
                <li><a href="/learn/uwb-anchor-placement" className="hover:text-brand">Anchor Placement Guide</a></li>
                <li><a href="/pricing" className="hover:text-brand">RTLS Cost Analysis</a></li>
                <li><a href="/articles/chainpoe" className="hover:text-brand">ChainPoE Article</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
