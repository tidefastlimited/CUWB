import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: High-Speed Robotics Tracking With 100 Hz UWB Tags | CUWB",
  description:
    "Anonymized case study: robotics lab using 100 Hz UWB tags for real-time motion capture, robot navigation validation, and high-speed trajectory tracking.",
};

export default function RoboticsCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink mb-4">
            Case Study
          </span>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            High-Speed Robotics Tracking With 100 Hz UWB Tags
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Ultra-high-frequency UWB position data for robotics R&D, motion validation,
            and autonomous navigation.
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
                      ["Industry", "Robotics / R&D"],
                      ["Environment", "Indoor robotics laboratory and test arena"],
                      ["Area Size", "~5,000 sq ft (~450 m²)"],
                      ["Anchor Count", "12 UWB anchors"],
                      ["Tag Count", "8 high-speed tags + 4 standard tags"],
                      ["Tag Type", "High-speed UWB tags (100 Hz capable)"],
                      ["Update Rate", "100 Hz (high-speed tags), 10 Hz (standard)"],
                      ["Accuracy Target", "<10 cm (achieved)"],
                      ["Latency", "<10 ms (achieved)"],
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
              { title: "The Problem", desc: "The team needed centimeter-level position data at very high update rates to validate robot navigation algorithms, capture motion trajectories, and close real-time control loops. Existing solutions were either too slow, too expensive, or required cloud connectivity unsuitable for closed-loop control." },
              { title: "Solution", desc: "CUWB high-speed tags at 100 Hz outputting local position data via REST API directly into the robot&apos;s control system. Anchors positioned around the perimeter and overhead of the test arena for optimal geometry." },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Technical Implementation</h2>
              <ul className="space-y-2 text-muted">
                <li>12 anchors mounted on lab walls and ceiling frame</li>
                <li>8 high-speed tags on mobile robots and test objects</li>
                <li>100 Hz position stream via REST API to local compute</li>
                <li>Data fused with IMU for smooth trajectory output</li>
                <li>Sub-10ms end-to-end latency from measurement to application</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Results</h2>
              <ul className="space-y-2 text-muted">
                <li>Achieved consistent &lt;10 cm positioning accuracy at 100 Hz</li>
                <li>Latency low enough for closed-loop robot control applications</li>
                <li>All data processed locally — no cloud dependency</li>
                <li>API integration completed in under 2 weeks</li>
                <li>System scalable to larger arena configurations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Lessons Learned</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Anchor geometry matters enormously at high speeds — avoid collinear placements</li>
                <li>Local processing is essential for sub-20ms latency requirements</li>
                <li>100 Hz tags require adequate network bandwidth planning</li>
                <li>Multi-path from moving metal objects can be mitigated with anchor density</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/solutions/robotics-agv-tracking" className="hover:text-brand">Robotics &amp; AGV Solution</a></li>
                <li><a href="/rtls-api-integration" className="hover:text-brand">API Integration Guide</a></li>
                <li><a href="/tags" className="hover:text-brand">High-Speed Tags</a></li>
                <li><a href="/articles/accuracyprecision" className="hover:text-brand">Accuracy &amp; Precision</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
