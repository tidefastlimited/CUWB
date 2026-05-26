type Item = {
  meta?: string;
  title: string;
  description: string;
};

type Bullet = {
  title: string;
  text: string;
};

type Metric = {
  metric: string;
  before?: string;
  after: string;
};

type Step = {
  title: string;
  body: string;
};

type ComparisonTable = {
  headers: string[];
  rows: string[][];
  highlightFirst?: boolean;
};

type SectionLink = { label: string; href: string };

type Section = {
  kicker: string;
  title: string;
  body?: string;
  dark?: boolean;
  links?: SectionLink[];
  // Right side — provide one of these:
  items?: Item[];
  table?: [string, string][];
  comparisonTable?: ComparisonTable;
  checklist?: string[];
  metrics?: Metric[];
  steps?: Step[];
  paragraphs?: string[];
  bullets?: Bullet[];
};

type FitCheck = {
  bestTitle: string;
  notBestTitle: string;
  bestFor: Array<{ group: string; desc: string }>;
  notBestFor: Array<{ group: string; desc: string }>;
};

type FAQ = { q: string; a: string };
type Related = { label: string; title: string; href: string };
type CtaButton = { label: string; href: string; primary?: boolean };

type SolutionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: SectionLink;
  secondaryCta: SectionLink;
  heroFacts: Array<{ title: string; description: string }>;
  decisionPoints: Array<{ title: string; description: string }>;
  sections: Section[];
  fitCheck?: FitCheck;
  faqs?: FAQ[];
  whyCUWB: {
    title: string;
    body?: string;
    bullets: Bullet[];
    links?: SectionLink[];
  };
  related: Related[];
  ctaTitle: string;
  ctaBody: string;
  ctaButtons: CtaButton[];
};

function SectionRight({ s }: { s: Section }) {
  const dark = s.dark ?? false;

  if (s.items) {
    return (
      <div className={`grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2 ${dark ? "border-[#4a3330] bg-[#4a3330]" : "border-line bg-line"}`}>
        {s.items.map((item) => (
          <div key={item.title} className={dark ? "bg-[#1b1413] p-5" : "bg-surface p-5"}>
            {item.meta && (
              <div className={`mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] ${dark ? "text-brand-border" : "text-brand"}`}>
                {item.meta}
              </div>
            )}
            <h3 className={`text-lg font-semibold ${dark ? "text-background" : "text-foreground"}`}>{item.title}</h3>
            <p className={`mt-2 text-sm leading-6 ${dark ? "text-[#cbbfbc]" : "text-muted"}`}>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if (s.table) {
    return (
      <div className={`overflow-hidden rounded-lg border ${dark ? "border-[#4a3330]" : "border-line"} bg-surface`}>
        <table className="w-full text-sm">
          <tbody>
            {s.table.map(([label, value]) => (
              <tr key={label} className={`border-t first:border-t-0 ${dark ? "border-[#4a3330]" : "border-line"}`}>
                <td className={`px-4 py-2.5 font-medium w-1/3 align-top ${dark ? "bg-[#1b1413] text-background" : "bg-surface text-foreground"}`}>{label}</td>
                <td className={`px-4 py-2.5 ${dark ? "bg-[#1b1413] text-[#cbbfbc]" : "bg-surface text-muted"}`}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (s.comparisonTable) {
    const ct = s.comparisonTable;
    return (
      <div className={`overflow-hidden rounded-lg border ${dark ? "border-[#4a3330]" : "border-line"} bg-surface`}>
        <table className="w-full text-sm">
          <thead>
            <tr className={dark ? "bg-[#241918]" : "bg-panel"}>
              {ct.headers.map((h) => (
                <th key={h} className={`px-4 py-3 text-left font-semibold ${dark ? "text-background" : "text-foreground"}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ct.rows.map((row, i) => (
              <tr key={row[0]} className={`border-t border-line ${i === 0 && ct.highlightFirst ? "bg-brand-soft" : dark ? "bg-[#1b1413]" : ""}`}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`px-4 py-2.5 ${ci === 0 ? "font-medium" : ""} ${i === 0 && ct.highlightFirst ? "text-brand-ink" : ci === 0 ? "text-foreground" : "text-muted"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (s.checklist) {
    return (
      <ol className="space-y-3">
        {s.checklist.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-md border font-mono text-xs font-semibold ${dark ? "border-[#4a3330] bg-[#1b1413] text-background" : "border-line bg-surface text-foreground"}`}>
              {i + 1}
            </span>
            <span className={`leading-relaxed pt-0.5 ${dark ? "text-[#d8ccca]" : "text-muted"}`}>{step}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (s.metrics) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {s.metrics.map((m) => (
          <div key={m.metric} className={`rounded-lg border p-5 ${dark ? "border-[#4a3330] bg-[#1b1413]" : "border-line bg-surface"}`}>
            <p className={`font-mono text-xs font-semibold uppercase tracking-[0.08em] ${dark ? "text-brand-border" : "text-subtle"}`}>{m.metric}</p>
            {m.before && <p className="mt-1 text-sm text-muted line-through decoration-muted">{m.before}</p>}
            <p className={`mt-1 text-base font-semibold ${dark ? "text-background" : "text-foreground"}`}>{m.after}</p>
          </div>
        ))}
      </div>
    );
  }

  if (s.steps) {
    return (
      <div className="space-y-4">
        {s.steps.map((step) => (
          <div key={step.title} className={`rounded-lg border p-5 ${dark ? "border-[#4a3330] bg-[#1b1413]" : "border-line bg-surface"}`}>
            <p className={`font-semibold ${dark ? "text-background" : "text-foreground"}`}>{step.title}</p>
            <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-[#cbbfbc]" : "text-muted"}`}>{step.body}</p>
          </div>
        ))}
      </div>
    );
  }

  if (s.paragraphs) {
    return (
      <div className="space-y-4">
        {s.paragraphs.map((p, i) => (
          <p key={i} className={`leading-relaxed ${dark ? "text-[#d8ccca]" : "text-muted"}`}>{p}</p>
        ))}
      </div>
    );
  }

  if (s.bullets) {
    return (
      <ul className="space-y-3">
        {s.bullets.map((b) => (
          <li key={b.title} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <div>
              <span className={`font-semibold ${dark ? "text-background" : "text-foreground"}`}>{b.title}</span>
              {b.text && <span className={dark ? " text-[#cbbfbc]" : " text-muted"}> — {b.text}</span>}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export default function SolutionPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  heroFacts,
  decisionPoints,
  sections,
  fitCheck,
  faqs,
  whyCUWB,
  related,
  ctaTitle,
  ctaBody,
  ctaButtons,
}: SolutionPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* HERO */}
        <section className="hero-field relative overflow-hidden border-b border-line bg-surface">
          <div className="absolute inset-0 signal-grid" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="max-w-5xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {eyebrow}
              </div>
              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.86] tracking-normal text-foreground">
                {title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                {description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
                >
                  {primaryCta.label}
                </a>
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {heroFacts.map((fact) => (
                <div key={fact.title} className="bg-background p-5">
                  <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-subtle">
                    {fact.title}
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-5 text-foreground">
                    {fact.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION POINTS */}
        <section className="border-b border-line bg-background">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-[0.62fr_1.38fr]">
            <div className="border-x border-line bg-panel px-6 py-10 lg:py-14">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                Buyer decision points
              </p>
              <h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight text-foreground">
                What this solution needs to make clear.
              </h2>
            </div>
            <div className="border-r border-line">
              {decisionPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="grid gap-4 border-t border-line bg-surface px-6 py-6 first:border-t-0 md:grid-cols-[5rem_0.7fr_1fr]"
                >
                  <span className="font-mono text-sm font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold text-foreground">{point.title}</span>
                  <span className="text-sm leading-6 text-muted">{point.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        {sections.map((section, index) => (
          <section
            key={section.kicker}
            className={`relative overflow-hidden border-b border-line ${
              section.dark
                ? "bg-foreground text-background"
                : index % 2 === 0
                  ? "bg-background"
                  : "bg-surface"
            }`}
          >
            {section.dark && <div className="absolute inset-0 dark-signal-grid opacity-45" />}
            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
              <div>
                <p className={`font-mono text-xs font-semibold uppercase tracking-[0.08em] ${section.dark ? "text-brand-border" : "text-brand"}`}>
                  {section.kicker}
                </p>
                <h2 className={`mt-4 text-4xl font-bold leading-none md:text-5xl ${section.dark ? "text-background" : "text-foreground"}`}>
                  {section.title}
                </h2>
                {section.body && (
                  <p className={`mt-5 text-lg leading-8 ${section.dark ? "text-[#d8ccca]" : "text-muted"}`}>
                    {section.body}
                  </p>
                )}
                {section.links && (
                  <div className="mt-7 flex flex-wrap gap-4">
                    {section.links.map((link) => (
                      <a key={link.href} href={link.href} className="text-sm font-semibold text-brand hover:underline">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <SectionRight s={section} />
              </div>
            </div>
          </section>
        ))}

        {/* FIT CHECK */}
        {fitCheck && (
          <section className="border-b border-line bg-panel">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
                    Best fit
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-foreground">{fitCheck.bestTitle}</h2>
                  <ul className="mt-6 space-y-4">
                    {fitCheck.bestFor.map((item) => (
                      <li key={item.group} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <div>
                          <span className="font-semibold text-foreground">{item.group}</span>
                          <span className="text-muted"> — {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-subtle">
                    Honest guidance
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-foreground">{fitCheck.notBestTitle}</h2>
                  <ul className="mt-6 space-y-4">
                    {fitCheck.notBestFor.map((item) => (
                      <li key={item.group} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                        <div>
                          <span className="font-medium text-foreground">{item.group}</span>
                          <span className="text-muted"> — {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faqs && faqs.length > 0 && (
          <section className="border-b border-line bg-background">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">FAQ</p>
                <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                  Frequently asked questions.
                </h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-line pb-6 last:border-b-0">
                    <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-muted leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WHY CUWB */}
        <section className="relative overflow-hidden border-b border-line bg-foreground text-background">
          <div className="absolute inset-0 dark-signal-grid opacity-45" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-border">
                Why CUWB
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-background md:text-5xl">
                {whyCUWB.title}
              </h2>
              {whyCUWB.body && (
                <p className="mt-5 text-lg leading-8 text-[#d8ccca]">{whyCUWB.body}</p>
              )}
              {whyCUWB.links && (
                <div className="mt-7 flex flex-wrap gap-4">
                  {whyCUWB.links.map((link) => (
                    <a key={link.href} href={link.href} className="text-sm font-semibold text-brand hover:underline">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-[#4a3330] bg-[#4a3330] sm:grid-cols-2">
              {whyCUWB.bullets.map((b) => (
                <div key={b.title} className="bg-[#1b1413] p-5">
                  <h3 className="text-lg font-semibold text-background">{b.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#cbbfbc]">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="relative overflow-hidden bg-polished-panel">
          <div className="absolute inset-0 signal-grid opacity-55" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                Continue exploring
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                Related resources.
              </h2>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <a key={item.href} href={item.href} className="group bg-background p-6 transition-colors hover:bg-surface">
                  <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-subtle">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-base font-semibold text-foreground group-hover:text-brand">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line bg-background">
          <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <div className="absolute inset-0 signal-grid opacity-55" />
            <div className="relative">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                Next steps
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                {ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
                {ctaBody}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {ctaButtons.map((btn) =>
                  btn.primary ? (
                    <a
                      key={btn.href}
                      href={btn.href}
                      className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-background shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
                    >
                      {btn.label}
                    </a>
                  ) : (
                    <a
                      key={btn.href}
                      href={btn.href}
                      className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
                    >
                      {btn.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
