import type { Metadata } from "next";
import { competitors } from "./data";

export const metadata: Metadata = {
  title: "CUWB vs Competitors — UWB RTLS Comparison Hub | CUWB",
  description:
    "Compare CUWB against Pozyx, Sewio, KINEXON, Ubisense, Redpoint, WISER, Litum, and Zebra. Honest head-to-head comparisons: software fees, pricing, local data, ChainPoE, and buyer fit.",
};

export default function CompareHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="hero-field relative overflow-hidden border-b border-line bg-surface">
        <div className="absolute inset-0 signal-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Vendor Comparisons
            </div>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.94] text-foreground">
              CUWB vs Competitors
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Honest head-to-head comparisons against the most common UWB RTLS alternatives.
              Software fees, pricing transparency, local data, ChainPoE, and buyer fit — all in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-b border-line bg-background">
        <div className="mx-auto max-w-7xl px-6 py-[clamp(72px,10vw,132px)]">
          <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand mb-8">All comparisons</p>
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {competitors.map((c) => (
              <a
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group bg-background p-7 transition-colors hover:bg-surface"
              >
                <span className="block font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">{c.category}</span>
                <span className="mt-2 block text-xl font-[650] leading-snug text-foreground group-hover:text-brand">
                  CUWB vs {c.name}
                </span>
                <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{c.tagline}</p>
                <span className="mt-4 inline-block font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  See comparison →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-background">
        <div className="relative mx-auto max-w-4xl px-6 py-[clamp(72px,10vw,132px)] text-center">
          <div className="absolute inset-0 signal-grid opacity-55" />
          <div className="relative">
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Get a quote</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
              Know what you will pay before you commit.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
              CUWB publishes hardware pricing and includes software at no recurring charge.
              Talk to an engineer about your deployment.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-[18px] py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
              >
                Contact CUWB Engineering
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-[18px] py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
