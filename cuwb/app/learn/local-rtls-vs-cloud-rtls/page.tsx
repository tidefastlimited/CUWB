import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local RTLS vs Cloud RTLS — Data Control, Latency, and Privacy | CUWB",
  description:
    "Compare local/on-premises RTLS with cloud-based RTLS solutions: data privacy, latency, reliability, compliance, and total cost of ownership. Why local operation matters.",
};

export default function LocalVsCloudPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>Local RTLS processes all data on your own infrastructure</strong> — no data leaves your facility.
            <strong>Cloud RTLS sends location data to vendor-managed servers</strong>, which introduces latency,
            dependency on internet connectivity, and questions about data sovereignty.
            For healthcare, defense, manufacturing, and privacy-sensitive operations, local RTLS is often the only viable option.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Learn</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">Local RTLS vs Cloud RTLS</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Understanding the trade-offs between on-premises and cloud-based real-time location systems.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            {[
              { title: "What Is Local RTLS?", desc: "All positioning computation, data storage, and API services run on servers you control within your own network. No location data is transmitted outside your facility." },
              { title: "What Is Cloud RTLS?", desc: "Anchor/tag data is sent to the vendor&apos;s cloud platform for processing. You access results via web dashboard or cloud API. Data resides on vendor infrastructure." },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}

            {[
              {
                title: "Data Privacy & Sovereignty",
                items: [
                  "<strong>Local:</strong> Your data never leaves your premises. Full GDPR/HIPAA/ITAR compliance control.",
                  "<strong>Cloud:</strong> Data processed and stored by vendor. Must trust their security, compliance, and data handling policies.",
                ],
              },
              {
                title: "Latency",
                items: [
                  "<strong>Local:</strong> Sub-10ms possible. Essential for robotics, closed-loop control, safety systems.",
                  "<strong>Cloud:</strong> Typically 100ms–2+ seconds round-trip. Depends on internet connection quality.",
                ],
              },
              {
                title: "Reliability & Availability",
                items: [
                  "<strong>Local:</strong> Works even without internet. Your system, your responsibility.",
                  "<strong>Cloud:</strong> Dependent on internet connectivity and vendor uptime. Any outage affects your operations.",
                ],
              },
              {
                title: "Integration Flexibility",
                items: [
                  "<strong>Local:</strong> Direct database/API access. Integrate with anything on your network. Custom dashboards, MES, WMS, SCADA.",
                  "<strong>Cloud:</strong> Limited to vendor-provided integrations and APIs. Data export may be restricted or delayed.",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{section.title}</h2>
                <ul className="space-y-1.5 text-muted">
                  {section.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Total Cost of Ownership</h2>
              <p className="leading-relaxed text-muted">
                Local: higher initial server cost, lower ongoing costs. Cloud: lower initial cost, recurring subscription fees that compound over time. See also:{" "}
                <a href="/pricing#software-fees" className="text-brand hover:underline">No Recurring Fees →</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Who Should Choose Local RTLS?</h2>
              <ul className="space-y-2 text-muted">
                <li>Healthcare facilities (HIPAA, patient data concerns)</li>
                <li>Defense and government contractors (ITAR, classified environments)</li>
                <li>Manufacturing with air-gapped networks</li>
                <li>Mining and underground operations (no connectivity)</li>
                <li>Organizations requiring low-latency closed-loop control</li>
                <li>Teams who want full data ownership and no vendor lock-in</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Who Might Choose Cloud RTLS?</h2>
              <ul className="space-y-2 text-muted">
                <li>Small deployments wanting minimal IT overhead</li>
                <li>Teams without internal IT/server resources</li>
                <li>Use cases where latency and data privacy are not concerns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">The CUWB Approach</h2>
              <p className="leading-relaxed text-muted">
                CUWB is designed as a local-first RTLS. All software runs on your infrastructure.{" "}
                <a href="/software" className="text-brand hover:underline">Learn more about CUWB Software →</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/software" className="hover:text-brand">CUWB Local Software</a></li>
                <li><a href="/rtls-api-integration" className="hover:text-brand">API Integration Guide</a></li>
                <li><a href="/pricing#software-fees" className="hover:text-brand">No Recurring Fees</a></li>
                <li><a href="/cuwb-advantage" className="hover:text-brand">CUWB Advantage</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
