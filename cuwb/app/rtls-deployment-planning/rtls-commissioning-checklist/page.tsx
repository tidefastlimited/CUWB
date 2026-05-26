import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTLS Commissioning Checklist — Step-by-Step Deployment Guide | CUWB",
  description:
    "Complete UWB RTLS commissioning checklist: hardware installation, network configuration, anchor registration, calibration, validation testing, and handoff procedures.",
};

export default function CommissioningChecklistPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment Planning</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            RTLS Commissioning Checklist
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            A step-by-step checklist for commissioning your CUWB UWB RTLS deployment,
            from hardware install to operational handoff.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Phase 1: Pre-Installation</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Confirm site survey complete and anchor positions documented</li>
                <li>Verify network infrastructure installed and tested</li>
                <li>Confirm all hardware received and inspected</li>
                <li>Document baseline power and network status</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Phase 2: Hardware Installation</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Mount anchors per site survey plan</li>
                <li>Connect cabling (or ChainPoE daisy-chains)</li>
                <li>Verify PoE power to all anchors</li>
                <li>Mount network switches and confirm connectivity</li>
                <li>Install and configure local server</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Phase 3: Software Configuration</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Deploy CUWB software on local server</li>
                <li>Register all anchors in the system</li>
                <li>Enter anchor coordinates (from site survey)</li>
                <li>Configure network settings (IPs, VLANs)</li>
                <li>Set up user accounts and access controls</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Phase 4: Calibration &amp; Validation</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Perform anchor position verification</li>
                <li>Run accuracy validation tests at multiple locations</li>
                <li>Test tag registration and reporting</li>
                <li>Validate API data output format and latency</li>
                <li>Test integration with target systems (WMS, dashboard, etc.)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Phase 5: Operational Handoff</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Train operations staff on dashboard and tools</li>
                <li>Document system architecture and configurations</li>
                <li>Establish ongoing maintenance procedures</li>
                <li>Define escalation path for issues</li>
                <li>Schedule follow-up review (30 days post-go-live)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Common Commissioning Issues</h2>
              <p className="leading-relaxed text-muted">Troubleshooting guide for typical problems encountered during commissioning.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning Hub</a></li>
                <li><a href="/rtls-deployment-planning/uwb-network-requirements" className="hover:text-brand">Network Requirements</a></li>
                <li><a href="/rtls-api-integration" className="hover:text-brand">API Integration</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
