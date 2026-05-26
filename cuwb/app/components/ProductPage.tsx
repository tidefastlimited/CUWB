type ProductLink = {
  label: string;
  href: string;
};

type ProductItem = {
  title: string;
  description: string;
  meta?: string;
};

type ProductRelatedItem = ProductItem & {
  href: string;
};

type ProductTable = {
  headers: string[];
  rows: string[][];
};

type ProductSection = {
  kicker: string;
  title: string;
  body?: string;
  items?: ProductItem[];
  table?: ProductTable;
  links?: ProductLink[];
  dark?: boolean;
};

type ProductPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ProductLink;
  secondaryCta: ProductLink;
  heroFacts: ProductItem[];
  decisionPoints: ProductItem[];
  sections: ProductSection[];
  related: ProductRelatedItem[];
};

export default function ProductPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  heroFacts,
  decisionPoints,
  sections,
  related,
}: ProductPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>
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

        <section className="border-b border-line bg-background">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-[0.62fr_1.38fr]">
            <div className="border-x border-line bg-panel px-6 py-10 lg:py-14">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                Buyer decision points
              </p>
              <h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight text-foreground">
                What this product needs to make clear.
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

        {sections.map((section, index) => (
          <section
            key={section.title}
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
                  <div className="mt-7 flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <a key={link.href} href={link.href} className="text-sm font-semibold text-brand hover:underline">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {section.table ? (
                  <div className="overflow-hidden rounded-lg border border-line bg-surface">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className={section.dark ? "bg-[#241918]" : "bg-panel"}>
                          {section.table.headers.map((header) => (
                            <th key={header} className={`px-5 py-3.5 text-left font-semibold ${section.dark ? "text-background" : "text-foreground"}`}>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")} className={section.dark ? "bg-[#1b1413]" : "bg-background"}>
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`${row[0]}-${cellIndex}`}
                                className={`px-5 py-3.5 ${
                                  section.dark
                                    ? cellIndex === 0
                                      ? "font-semibold text-background"
                                      : "text-[#cbbfbc]"
                                    : cellIndex === 0
                                      ? "font-semibold text-foreground"
                                      : "text-muted"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className={`grid gap-px overflow-hidden rounded-lg border ${section.dark ? "border-[#4a3330] bg-[#4a3330]" : "border-line bg-line"} sm:grid-cols-2`}>
                    {section.items?.map((item) => (
                      <div key={item.title} className={section.dark ? "bg-[#1b1413] p-5" : "bg-surface p-5"}>
                        {item.meta && (
                          <div className={`mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] ${section.dark ? "text-brand-border" : "text-brand"}`}>
                            {item.meta}
                          </div>
                        )}
                        <h3 className={`text-lg font-semibold ${section.dark ? "text-background" : "text-foreground"}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-2 text-sm leading-6 ${section.dark ? "text-[#cbbfbc]" : "text-muted"}`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        <section className="relative overflow-hidden bg-polished-panel">
          <div className="absolute inset-0 signal-grid opacity-55" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                Product family
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-none text-foreground md:text-5xl">
                Complete the CUWB system.
              </h2>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="bg-background p-6 transition-colors hover:bg-surface"
                >
                  <span className="block text-lg font-semibold text-foreground">{item.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">{item.description}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
