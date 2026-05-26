import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB RTLS Network Requirements — Switches, PoE, Bandwidth | CUWB",
  description:
    "Network infrastructure requirements for UWB RTLS deployment: switch specifications, PoE standards, bandwidth needs, VLAN configuration, and ChainPoE considerations.",
};

export default function NetworkRequirementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment Planning</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            UWB RTLS Network Requirements
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Everything your IT team needs to know about network infrastructure for a CUWB UWB RTLS deployment.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Switch Requirements</h2>
              <ul className="space-y-2 text-muted">
                <li>Gigabit Ethernet (1 Gbps minimum)</li>
                <li>PoE+ (802.3at) or PoE++ support</li>
                <li>Managed switch recommended for monitoring</li>
                <li>Adequate port count for anchors + uplinks</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">PoE Power Budget</h2>
              <p className="leading-relaxed text-muted">Power-over-Ethernet requirements per anchor and total budget calculations.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Bandwidth Requirements</h2>
              <p className="leading-relaxed text-muted">Data throughput per anchor, scaling with tag count and update rate. Typical bandwidth usage tables.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">ChainPoE Network Impact</h2>
              <p className="leading-relaxed text-muted">
                How daisy-chaining reduces switch port requirements.{" "}
                <a href="/articles/chainpoe" className="text-brand hover:underline">Learn more →</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">IP Addressing</h2>
              <p className="leading-relaxed text-muted">DHCP vs static IP recommendations, subnet sizing, and VLAN isolation options.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">NTP &amp; Time Synchronization</h2>
              <p className="leading-relaxed text-muted">Importance of accurate time sources for TDoA positioning modes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Firewall &amp; Security</h2>
              <p className="leading-relaxed text-muted">Ports, protocols, and security considerations for CUWB on the corporate network.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Server / Host Requirements</h2>
              <p className="leading-relaxed text-muted">Hardware specs for the local CUWB positioning engine server.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning Hub</a></li>
                <li><a href="/articles/chainpoe" className="hover:text-brand">ChainPoE</a></li>
                <li><a href="/anchors" className="hover:text-brand">Anchors</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
