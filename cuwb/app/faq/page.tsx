import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About CUWB UWB RTLS",
  description:
    "Frequently asked questions about CUWB UWB RTLS: system size, anchor count, accuracy, internet requirements, hardware needs, latency, integration, and more.",
};

const faqCategories = [
  {
    label: "System & Deployment",
    questions: [
      {
        q: "How big of an area can CUWB cover?",
        a: (
          <>
            CUWB scales from small lab deployments (single room) to facility-wide installations (100,000+ sq ft).
            Coverage depends on anchor placement, ceiling height, and environmental factors. A single anchor can cover
            up to 100m in open space (range varies with obstructions and environment). Use our{" "}
            <a href="/learn/uwb-anchor-placement" className="text-brand hover:underline">anchor placement guide</a> to estimate your needs.
          </>
        ),
      },
      {
        q: "How many anchors do I need?",
        a: (
          <>
            Anchor count depends on area size, accuracy requirements, ceiling height, obstructions, and whether you need
            2D or 3D positioning. A rough starting point is one anchor per 500–1,000 sq ft for basic coverage, but dense deployments
            for high precision may use more.{" "}
            <a href="/learn/uwb-anchor-placement" className="text-brand hover:underline">Read the detailed guide →</a>
          </>
        ),
      },
      {
        q: "What hardware do I need?",
        a: "A complete CUWB system includes UWB anchors (fixed positions), UWB tags (mobile devices), a PoE-capable network switch, Ethernet cabling, and a local server or VM to run CUWB software. Accessories include mounts, enclosures, and ChainPoE adapters.",
      },
      {
        q: "What environments can CUWB work in?",
        a: "CUWB is designed for indoor industrial environments: warehouses, manufacturing facilities, hospitals, mines, sports venues, R&D labs, and more. Metal-heavy environments require denser anchor placement. Outdoor-rated options are available for semi-outdoor or covered applications.",
      },
    ],
  },
  {
    label: "Performance",
    questions: [
      {
        q: "How accurate is UWB positioning?",
        a: (
          <>
            CUWB achieves centimeter-level accuracy under good conditions. Real-world accuracy depends on anchor density,
            environment, tag type, and operational mode. Typical deployments see 10–30 cm accuracy.{" "}
            <a href="/articles/accuracyprecision" className="text-brand hover:underline">Read the accuracy deep dive →</a>
          </>
        ),
      },
      {
        q: "What is the latency?",
        a: "CUWB position data latency is typically less than 20 ms when running locally. High-speed modes support update rates up to 100 Hz for robotics and motion capture applications. Cloud-based alternatives typically have 100ms–2+ second round-trip latency.",
      },
      {
        q: "What update rates are available?",
        a: "Update rates range from 0.1 Hz (for battery-conscious asset tracking) to 100 Hz (for high-speed robotics and sports). Higher update rates reduce battery life on wireless tags. Vehicle-powered or wired tags can sustain higher rates indefinitely.",
      },
    ],
  },
  {
    label: "Software & Data",
    questions: [
      {
        q: "Does CUWB require an internet connection?",
        a: "No. CUWB software runs locally on your server or VM. All positioning computation happens on your network. An internet connection is only needed for initial software download or optional remote support.",
      },
      {
        q: "Are there recurring software fees?",
        a: (
          <>
            <strong className="text-foreground">No.</strong> CUWB does not charge recurring software license fees.
            Software is included with hardware purchase. No per-tag fees, no annual subscriptions.{" "}
            <a href="/pricing#software-fees" className="text-brand hover:underline">Learn more →</a>
          </>
        ),
      },
      {
        q: "Can I integrate CUWB with my existing systems?",
        a: (
          <>
            Yes. CUWB exposes real-time position data through a REST API and WebSocket stream running locally on your network.
            Integrate with WMS, MES, ERP, SCADA, custom dashboards, databases, or any system that can consume HTTP data.{" "}
            <a href="/rtls-api-integration" className="text-brand hover:underline">Read the API guide →</a>
          </>
        ),
      },
      {
        q: "Where does my data live?",
        a: "All location data stays on your local infrastructure. CUWB does not relay data through cloud servers. You control retention, access, and export of all position history.",
      },
    ],
  },
  {
    label: "Technology Comparison",
    questions: [
      {
        q: "UWB vs BLE vs RFID — which should I use?",
        a: (
          <>
            Choose based on what you need: <strong className="text-foreground">UWB</strong> for precision tracking and low-latency position data;
            <strong className="text-foreground">BLE</strong> for proximity detection and lower-cost presence;{" "}
            <strong className="text-foreground">RFID</strong> for identification and simple zone-based detection.{" "}
            <a href="/learn/uwb-vs-ble-rfid-gps" className="text-brand hover:underline">Read the full comparison →</a>
          </>
        ),
      },
      {
        q: "What is ChainPoE?",
        a: (
          <>
            ChainPoE is Ciholas&apos; proprietary daisy-chaining technology that lets you connect multiple anchors on a single
            Ethernet cable run, reducing cabling costs by up to 90% and cutting installation cost significantly.{" "}
            <a href="/articles/chainpoe" className="text-brand hover:underline">Read the ChainPoE article →</a>
          </>
        ),
      },
      {
        q: "Can CUWB be customized?",
        a: (
          <>
            Yes. Ciholas offers custom firmware modifications, private-label hardware programs, custom enclosures,
            and end-to-end UWB product development for OEMs and integrators.{" "}
            <a href="/custom-uwb" className="text-brand hover:underline">Learn about custom UWB →</a>
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Support
          </div>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted max-w-3xl">
            Answers to common questions about CUWB UWB RTLS systems.
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact" className="text-brand hover:underline">Contact us →</a>
          </p>
        </div>
      </section>

      {/* ===== FAQ BY CATEGORY ===== */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {faqCategories.map((category) => (
            <div key={category.label} className="mb-14 last:mb-0">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-line" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand whitespace-nowrap">
                  {category.label}
                </span>
                <div className="h-px flex-1 bg-line" />
              </div>

              <div className="space-y-10">
                {category.questions.map((item) => (
                  <div key={item.q}>
                    <h2 className="text-lg font-semibold text-foreground mb-3">{item.q}</h2>
                    <p className="leading-relaxed text-muted">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STILL HAVE QUESTIONS ===== */}
      <section className="border-t border-line bg-surface">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand">
            Still have questions?
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-foreground">
            Talk to an engineer.
          </h2>
          <p className="mt-4 text-muted">
            If you didn&apos;t find your answer above, reach out directly.
            We&apos;d rather give you a technical answer than a sales pitch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(239,58,50,0.22)] transition-colors hover:bg-brand-hover"
            >
              Contact CUWB
            </a>
            <a
              href="/cuwb-advantage"
              className="inline-flex items-center justify-center rounded-md border border-line bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
            >
              The CUWB Advantage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
