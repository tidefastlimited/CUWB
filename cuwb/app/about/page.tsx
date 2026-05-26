import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CUWB — UWB RTLS From Ciholas",
  description:
    "CUWB is a high-performance UWB real-time location system from Ciholas, built for precise local location data, integration control, and transparent deployment planning.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
            About CUWB
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.96] text-foreground md:text-7xl">
            UWB RTLS built by engineers who work close to the hardware.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl">
            CUWB is developed by Ciholas for teams that need precise, low-latency location data,
            local control, clear hardware pricing, and integration flexibility.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
          {[
            ["Engineering depth", "RF, embedded, hardware, firmware, and software experience behind the CUWB system."],
            ["Local-first control", "Designed for teams that care about data locality, APIs, and operational independence."],
            ["Practical deployment", "Anchors, tags, accessories, ChainPoE, and planning content built around real installs."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-lg border border-line bg-surface p-6">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-panel">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Company fit
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Best for teams that want precision and control, not a black-box platform.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/cuwb-advantage"
              className="rounded-lg border border-line bg-surface px-5 py-4 text-sm text-muted transition-all hover:border-brand-border hover:text-brand"
            >
              <span className="block font-semibold text-foreground">CUWB Advantage</span>
              <span className="mt-2 block leading-6">See the core differentiators and buyer fit.</span>
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-line bg-surface px-5 py-4 text-sm text-muted transition-all hover:border-brand-border hover:text-brand"
            >
              <span className="block font-semibold text-foreground">Talk to CUWB</span>
              <span className="mt-2 block leading-6">Discuss your facility, application, and deployment path.</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
