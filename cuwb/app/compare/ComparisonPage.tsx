import type { Competitor } from "./data";

const navSections = [
  { id: "comparison", label: "Comparison" },
  { id: "cuwb-strengths", label: "CUWB Strengths" },
  { id: "competitor-strengths", label: "Their Strengths" },
  { id: "decision", label: "Decision Guide" },
  { id: "get-quote", label: "Get Quote" },
];

export default function ComparisonPage({ c }: { c: Competitor }) {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="hero-field relative overflow-hidden border-b border-line bg-surface">
        <div className="absolute inset-0 signal-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="max-w-5xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Comparison
              </div>
              <div className="inline-flex items-center rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-xs font-[650] uppercase tracking-[0.08em] text-subtle">
                {c.category}
              </div>
            </div>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.94] tracking-normal text-foreground">
              CUWB vs {c.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {c.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-[18px] py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
              >
                Get a CUWB Quote
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-[18px] py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
              >
                See the Comparison
              </a>
            </div>
          </div>

          {/* Bottom line summary */}
          <div className="mt-12 rounded-lg border border-brand-border bg-brand-soft p-6">
            <p className="mb-2 font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-brand-ink">Bottom line</p>
            <p className="text-base leading-7 text-brand-ink">{c.bottomLine}</p>
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <div className="sticky top-[65px] z-30 border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-1 overflow-x-auto py-3" aria-label="Page sections">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-muted hover:text-brand whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-panel transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* SECTION 1: Head-to-head comparison table */}
      <section id="comparison" className="relative border-b border-line bg-background">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Section 01</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
              Head-to-head
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Key criteria compared side by side. CUWB advantages are marked.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="/pricing" className="text-sm font-semibold text-brand hover:underline">View CUWB pricing →</a>
              <a href="/anchors" className="text-sm font-semibold text-brand hover:underline">View anchor hardware →</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-panel">
                  <th className="px-4 py-3 text-left font-[650] text-foreground w-1/3">Criterion</th>
                  <th className="px-4 py-3 text-left font-[650] text-foreground w-[34%]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      CUWB
                    </span>
                  </th>
                  <th className="px-4 py-3 text-left font-[650] text-foreground">{c.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map((row) => (
                  <tr key={row.criterion} className="border-t border-line">
                    <td className="px-4 py-3 font-[650] text-[0.8rem] text-foreground align-top">{row.criterion}</td>
                    <td className="px-4 py-3 text-muted align-top">
                      <span className="block text-foreground">{row.cuwb}</span>
                      {row.cuwbAdvantage && (
                        <span className="mt-1 inline-flex items-center gap-1 font-mono text-[0.6rem] font-[650] uppercase tracking-[0.08em] text-brand">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          CUWB advantage
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted align-top">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: CUWB strengths (dark) */}
      <section id="cuwb-strengths" className="relative overflow-hidden border-b border-line bg-foreground text-background">
        <div className="absolute inset-0 dark-signal-grid opacity-45" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand-border">Section 02</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-background">
              Where CUWB is stronger
            </h2>
            <p className="mt-5 text-lg leading-[1.7] text-[#cbbfbc]">
              The most meaningful differentiators for buyers evaluating CUWB against {c.name}.
            </p>
          </div>

          <div className="space-y-px overflow-hidden rounded-lg border border-[#3b2927]">
            {c.cuwbStrengths.map((s, i) => (
              <div key={s.title} className="bg-[#1b1413] p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-[0.65rem] font-[650] text-brand shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-[650] text-[#f7eded]">{s.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#cbbfbc]">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Competitor strengths */}
      <section id="competitor-strengths" className="relative border-b border-line bg-surface">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-[clamp(72px,10vw,132px)] lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Section 03</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
              Where {c.name} is stronger
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Honest assessment. Every system has tradeoffs. These are the areas where {c.name} has a genuine advantage.
            </p>
          </div>

          <div className="space-y-3">
            {c.competitorStrengths.map((s) => (
              <div key={s.title} className="rounded-lg border border-line bg-background p-5">
                <p className="text-sm font-[650] text-foreground">{s.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Decision guide */}
      <section id="decision" className="relative border-b border-line bg-background">
        <div className="relative mx-auto max-w-7xl px-6 py-[clamp(72px,10vw,132px)]">
          <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Section 04</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
            Decision guide
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            When CUWB is the right fit — and when to consider {c.name} instead.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="border-b border-line bg-panel px-5 py-3">
                <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-brand">Choose CUWB when</p>
              </div>
              <ul className="divide-y divide-line">
                {c.chooseCuwb.map((item) => (
                  <li key={item} className="flex items-start gap-3 px-5 py-3.5">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="border-b border-line bg-panel px-5 py-3">
                <p className="font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">Consider {c.name} when</p>
              </div>
              <ul className="divide-y divide-line">
                {c.chooseCompetitor.map((item) => (
                  <li key={item} className="flex items-start gap-3 px-5 py-3.5">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED COMPARISONS */}
      <section className="relative overflow-hidden bg-polished-panel">
        <div className="absolute inset-0 signal-grid opacity-55" />
        <div className="relative mx-auto max-w-7xl px-6 py-[clamp(72px,10vw,132px)]">
          <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">More comparisons</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
            Compare all competitors.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Pozyx", href: "/compare/cuwb-vs-pozyx", category: "Direct UWB" },
              { name: "Sewio", href: "/compare/cuwb-vs-sewio", category: "Enterprise UWB" },
              { name: "KINEXON", href: "/compare/cuwb-vs-kinexon", category: "Automation Platform" },
              { name: "Ubisense", href: "/compare/cuwb-vs-ubisense", category: "Enterprise UWB" },
              { name: "Redpoint", href: "/compare/cuwb-vs-redpoint", category: "UWB + Safety" },
              { name: "WISER", href: "/compare/cuwb-vs-wiser", category: "Industrial UWB" },
              { name: "Litum", href: "/compare/cuwb-vs-litum", category: "Multi-Radio" },
              { name: "Zebra", href: "/compare/cuwb-vs-zebra", category: "Enterprise Ecosystem" },
            ]
              .filter((item) => item.href !== `/compare/${c.slug}`)
              .map((item) => (
                <a key={item.href} href={item.href} className="group bg-background p-6 transition-colors hover:bg-surface">
                  <span className="block font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">{item.category}</span>
                  <span className="mt-1 block text-base font-[650] text-foreground group-hover:text-brand">CUWB vs {item.name}</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-quote" className="border-t border-line bg-background">
        <div className="relative mx-auto max-w-4xl px-6 py-[clamp(72px,10vw,132px)] text-center">
          <div className="absolute inset-0 signal-grid opacity-55" />
          <div className="relative">
            <p className="font-mono text-xs font-[650] uppercase tracking-[0.08em] text-brand">Get a quote</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-bold leading-none text-foreground">
              Ready to evaluate CUWB?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Talk through your facility, use case, and requirements with a CUWB engineer.
              We will give you a system estimate with transparent hardware pricing and no hidden fees.
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
