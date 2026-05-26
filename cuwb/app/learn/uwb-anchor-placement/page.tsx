import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many UWB Anchors Do You Need? — Placement Guide | CUWB",
  description:
    "Learn how to plan UWB anchor placement and calculate how many anchors your RTLS deployment needs. Factors include facility size, obstructions, ceiling height, and coverage requirements.",
};

export default function AnchorPlacementPage() {
  return (
    <div className="min-h-screen">
      <section className="border-y border-brand-border bg-brand-soft py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-brand-ink">
            The number of <strong>UWB anchors</strong> needed depends on facility size, desired accuracy (2D vs 3D),
            ceiling height, obstructions, and tag density. A typical warehouse deployment ranges from
            <strong> 12 to 48+ anchors</strong> depending on coverage area and precision requirements.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand mb-3">Deployment</p>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">How Many UWB Anchors Do You Need?</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            A practical guide to planning UWB anchor placement for your RTLS deployment.
          </p>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            {[
              { title: "Short Answer", desc: "Quick rules of thumb for anchor count by facility size and coverage type." },
              { title: "Factors That Affect Anchor Count", items: ["Facility size and layout", "Obstructions (racking, machinery, metal structures)", "2D vs 3D positioning requirements", "Ceiling height and mounting options", "Tag rate and density", "Required accuracy level"] },
              { title: "Facility Size Guidelines", desc: "Recommended anchor counts for small, medium, and large deployments." },
              { title: "Obstructions & Line of Sight", desc: "How metal racking, equipment, and structural elements affect UWB signal propagation and anchor placement." },
              { title: "2D vs 3D Positioning", desc: "How positioning mode affects anchor count and placement strategy." },
              { title: "Ceiling Height & Mounting Options", desc: "Mounting strategies for different ceiling types and heights." },
              { title: "ChainPoE Impact on Placement", desc: <>How <a href="/articles/chainpoe" className="text-brand hover:underline">ChainPoE</a> simplifies anchor daisy-chaining and affects placement flexibility.</> },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold text-foreground mb-2">{item.title}</h2>
                {"desc" in item && <p className="leading-relaxed text-muted">{item.desc}</p>}
                {"items" in item && (
                  <ul className="space-y-1.5 text-muted">
                    {(item.items as string[]).map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Planning Checklist</h2>
              <ol className="list-decimal list-inside space-y-1.5 text-muted">
                <li>Gather facility floor plan</li>
                <li>Identify obstructions and ceiling type</li>
                <li>Determine coverage area and accuracy needs</li>
                <li>Estimate initial anchor count</li>
                <li>Plan network and PoE runs</li>
                <li>Review with CUWB engineer</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Tools</h2>
              <p className="leading-relaxed text-muted">
                Use the <a href="/anchors" className="text-brand hover:underline">anchor estimator</a> and read the{" "}
                <a href="/rtls-deployment-planning" className="text-brand hover:underline">deployment planning guide</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Related Resources</h2>
              <ul className="space-y-1.5 text-muted">
                <li><a href="/anchors" className="hover:text-brand">Anchors</a></li>
                <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Planning Hub</a></li>
                <li><a href="/articles/chainpoe" className="hover:text-brand">ChainPoE</a></li>
                <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
