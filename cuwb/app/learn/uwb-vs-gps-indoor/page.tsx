import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UWB vs GPS for Indoor Tracking — Why GPS Doesn't Work Indoors | CUWB",
  description:
    "Why GPS fails indoors and how UWB solves indoor positioning. Compare satellite-based GPS with UWB RTLS for indoor asset tracking, accuracy, and reliability.",
};

export default function UWBVsGPSPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            <strong>GPS does not work reliably indoors</strong> because satellite signals cannot penetrate
            buildings well enough for accurate positioning. <strong>UWB is purpose-built for indoor
            environments</strong>, delivering consistent accuracy where GPS fails completely.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Comparison</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">UWB vs GPS for Indoor Tracking</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Why GPS can&apos;t replace indoor RTLS and why UWB is the right technology
            for inside-the-building positioning.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Why GPS Fails Indoors</h2>
              <ul className="space-y-2 text-muted">
                <li>Satellite signals are blocked by roofs, walls, and building materials</li>
                <li>Multi-path reflections from structures cause large errors</li>
                <li>Indoor GPS accuracy degrades to 5–10+ meters (vs 1–3 m outdoors)</li>
                <li>Signal may be completely unavailable in interior spaces</li>
                <li>Cold start times are very long indoors</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Indoor GPS Alternatives That Don&apos;t Work Well</h2>
              <ul className="space-y-2 text-muted">
                <li><strong>Assisted GPS (A-GPS):</strong> Helps with time-to-fix but doesn&apos;t solve accuracy</li>
                <li><strong>Wi-Fi positioning:</strong> Rough room-level at best, depends on AP density</li>
                <li><strong>Cell tower triangulation:</strong> Very coarse, hundreds of meters error</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Why UWB Works Indoors</h2>
              <ul className="space-y-2 text-muted">
                <li>Designed specifically for short-range, high-precision indoor positioning</li>
                <li>Pulses penetrate walls and obstructions better than narrowband signals</li>
                <li>Time-of-flight measurement is inherently accurate regardless of environment</li>
                <li>Local anchors guarantee coverage in your facility</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">When GPS Is the Right Choice</h2>
              <ul className="space-y-2 text-muted">
                <li>Outdoor asset tracking (vehicles, containers, outdoor equipment)</li>
                <li>Open-pit mining or large outdoor industrial sites</li>
                <li>Applications where wide-area coverage matters more than precision</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Hybrid Approaches</h2>
              <p className="leading-relaxed text-muted">Using GPS outdoors and UWB indoors, with a handoff system at building entry/exit points.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/learn/uwb-vs-ble-rfid-gps" className="hover:text-brand">Full Multi-Technology Comparison</a></li>
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
                <li><a href="/rtls-deployment-planning/indoor-vs-outdoor-uwb-deployment" className="hover:text-brand">Indoor vs Outdoor Deployment</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
