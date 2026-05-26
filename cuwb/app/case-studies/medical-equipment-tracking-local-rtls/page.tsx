import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Medical Equipment Tracking With Local RTLS Infrastructure | CUWB",
  description:
    "Anonymized case study: hospital deploying UWB RTLS for medical equipment tracking with local data infrastructure, no cloud dependency, and HIPAA-friendly architecture.",
};

export default function HospitalCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-ink mb-4">
            Case Study
          </span>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Medical Equipment Tracking With Local RTLS Infrastructure
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            How a hospital reduced equipment search time and improved utilization using
            locally-operated UWB RTLS with no recurring software fees.
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
                      ["Industry", "Healthcare / Hospital"],
                      ["Environment", "Acute care hospital — multiple floors and wings"],
                      ["Area Size", "~150,000 sq ft across 3 floors (~14,000 m²)"],
                      ["Anchor Count", "36 UWB anchors"],
                      ["Tag Count", "200+ equipment tags"],
                      ["Tag Type", "Standard asset tags + compact tags for small devices"],
                      ["Update Rate", "1 Hz (sufficient for equipment tracking)"],
                      ["Accuracy Target", "Room-level certainty (<1 m)"],
                      ["Integration", "Local REST API to biomedical dashboard"],
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
              { title: "The Problem", desc: "Nurses and clinical staff spent an estimated 15–20 minutes per shift searching for mobile medical equipment: IV pumps, patient monitors, wheelchairs, stretchers, and portable ultrasound devices. The hospital was also renting supplemental equipment due to perceived shortages that were actually misplacement issues." },
              { title: "Solution", desc: "UWB RTLS deployed across three hospital floors with all data processed locally. No patient or staff location data leaves the hospital network. Integration with the biomedical engineering dashboard for equipment status and utilization reporting." },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Why Local Data Mattered</h2>
              <ul className="space-y-2 text-muted">
                <li>HIPAA compliance — patient-adjacent data stays on-premises</li>
                <li>IT policy — no unauthorized cloud data egress</li>
                <li>Reliability — system works even if internet connection is disrupted</li>
                <li>Control — hospital IT retains full authority over all location data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Deployment Approach</h2>
              <ul className="space-y-2 text-muted">
                <li>Phased rollout: pilot floor → expansion to remaining floors</li>
                <li>Anchors mounted in corridors and above key equipment rooms</li>
                <li>Tags attached to high-search-volume equipment first</li>
                <li>Biomedical engineering team trained on local management interface</li>
                <li>Network isolated on dedicated VLAN per hospital IT requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Results</h2>
              <ul className="space-y-2 text-muted">
                <li>Average equipment find time reduced by ~70%</li>
                <li>Rental equipment costs reduced by identifying underutilized owned assets</li>
                <li>Biomedical engineering gained real-time equipment location map</li>
                <li>Zero recurring software fees saved estimated $30K–$50K/year vs. quoted alternatives</li>
                <li>Full HIPAA compliance maintained with local-only data architecture</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Lessons Learned</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Start with the most-misplaced equipment types for fastest ROI demonstration</li>
                <li>Hospital IT involvement early is critical for network and security alignment</li>
                <li>Room-level accuracy is sufficient for most equipment tracking needs</li>
                <li>Staff adoption improves when location data integrates into existing workflows</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/solutions/hospital-equipment-tracking" className="hover:text-brand">Hospital Equipment Solution</a></li>
                <li><a href="/software" className="hover:text-brand">Local Software</a></li>
                <li><a href="/pricing#software-fees" className="hover:text-brand">No Recurring Fees</a></li>
                <li><a href="/learn/indoor-asset-tracking" className="hover:text-brand">Indoor Asset Tracking Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
