import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Warehouse Asset Tracking With UWB RTLS | CUWB",
  description:
    "Track pallets, forklifts, carts, fixtures, and tools in your warehouse with UWB RTLS. Reduce search time, improve utilization, and get real-time visibility with local data.",
};

export default function WarehouseAssetTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Warehouse"
      title="Warehouse Asset Tracking"
      description="Locate equipment and assets instantly. Track forklifts, carts, pallets, fixtures, and tools with real-time UWB positioning — local data, no recurring fees."
      primaryCta={{ label: "Estimate RTLS Cost", href: "/pricing" }}
      secondaryCta={{ label: "Anchor Placement Guide", href: "/learn/uwb-anchor-placement" }}
      heroFacts={[
        { title: "Accuracy", description: "< 30 cm real-time" },
        { title: "Assets", description: "Forklift / Pallet / Cart / Tool" },
        { title: "Software", description: "Local, no recurring fees" },
        { title: "Installation", description: "ChainPoE daisy-chain" },
        { title: "Integration", description: "REST API for WMS / MES" },
      ]}
      decisionPoints={[
        { title: "Asset visibility", description: "Real-time location of every mobile asset — not just where it was last scanned." },
        { title: "Cost clarity", description: "No per-tag or per-anchor recurring software fees. Hardware pricing published upfront." },
        { title: "Integration fit", description: "REST API feeds WMS, MES, ERP, or custom dashboards from a local server." },
        { title: "Data locality", description: "Fully local operation — no cloud dependency, no data egress, no internet required." },
      ]}
      sections={[
        {
          kicker: "Technology Comparison",
          title: "Why barcode, RFID, and GPS fall short.",
          body: "Each technology has its place. UWB is the right choice when you need continuous, real-time, sub-meter indoor positioning across an entire facility — not just at scan points or portals.",
          comparisonTable: {
            headers: ["Technology", "Accuracy", "Real-Time", "Indoor Coverage", "Cost Structure"],
            rows: [
              ["UWB RTLS", "< 30 cm", "Yes", "Full indoor", "Moderate hardware, no recurring fees"],
              ["BLE / BLE AoA", "1–3 m", "Limited", "Zone-level", "Lower hardware, subscription often required"],
              ["RFID (passive)", "Zone / portal", "No", "Chokepoints only", "Low per-tag, high reader cost"],
              ["GPS", "3–10 m+", "Yes", "Outdoor only", "Low per-device, recurring data plans"],
              ["Barcode / Manual", "Last scan", "No", "Point-in-time", "Low tech, high labor"],
            ],
            highlightFirst: true,
          },
        },
        {
          kicker: "System Overview",
          title: "How UWB RTLS works in a warehouse.",
          body: "Anchors mount to the ceiling and connect to your local network via Ethernet — with ChainPoE reducing switch ports and cable runs. Tags transmit UWB pulses at configurable rates. Position is computed locally on your server. Your WMS consumes real-time events via REST API.",
          items: [
            { title: "Forklifts & MHE", description: "Material handling equipment, forklifts, reach trucks, order pickers" },
            { title: "Pallets & Carts", description: "Pallet jacks, roll carts, staging carts, returnable containers" },
            { title: "Fixtures & Tools", description: "Maintenance tools, calibration fixtures, staging equipment" },
            { title: "High-Value Inventory", description: "Critical stock, returns, custom orders, perishable goods" },
          ],
        },
        {
          kicker: "Deployment Planning",
          title: "Example distribution center configuration.",
          body: "A 250,000 sq ft facility with 48 anchors and ChainPoE reduces required switch ports from 48 to ~4–8. 120 tags cover forklifts, pallet jugs, carts, and fixtures at 1–5 Hz — integrated via REST API to the WMS.",
          dark: true,
          links: [
            { label: "Anchor Placement Guide", href: "/learn/uwb-anchor-placement" },
            { label: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
          ],
          table: [
            ["Facility size", "250,000 sq ft (~23,000 m²)"],
            ["Ceiling height", "30–40 ft (9–12 m)"],
            ["Anchor count", "48 UWB anchors"],
            ["Anchor spacing", "~20–25 m grid, densified in high-value zones"],
            ["ChainPoE usage", "80% of runs — reduces switch ports from 48 to ~4–8"],
            ["Tag count", "120 tags across forklifts, pallet jugs, carts, and fixtures"],
            ["Update rate", "1–5 Hz configurable per tag"],
            ["Accuracy achieved", "< 30 cm"],
            ["Integration", "REST API → WMS dashboard"],
          ],
        },
        {
          kicker: "Outcomes",
          title: "Success metrics for warehouse asset tracking.",
          body: "Deploying UWB RTLS changes the operational baseline across search time, fleet utilization, recurring costs, and data sovereignty.",
          metrics: [
            { metric: "Search time", before: "~15 min per asset", after: "< 30 seconds" },
            { metric: "Equipment utilization", before: "Unknown", after: "Real-time visibility" },
            { metric: "Fleet right-sizing", before: "Over-purchased", after: "Data-driven decisions" },
            { metric: "Zone throughput", before: "Estimated", after: "Measured" },
            { metric: "Recurring SW fees", before: "$45K+/year", after: "$0 with CUWB" },
            { metric: "Data locality", before: "Cloud-dependent", after: "Local, on-premises" },
          ],
        },
        {
          kicker: "Checklist",
          title: "Warehouse UWB RTLS deployment checklist.",
          body: "A complete deployment requires planning across zones, cabling, networking, tagging strategy, API integration, and operator training.",
          links: [{ label: "Full Commissioning Checklist", href: "/rtls-deployment-planning/rtls-commissioning-checklist" }],
          checklist: [
            "Map warehouse zones: receiving, staging, storage, shipping, and maintenance",
            "Measure facility dimensions and ceiling height",
            "Identify obstructions: racking, columns, conveyors, mezzanines",
            "Estimate anchor count using the Anchor Estimator",
            "Plan ChainPoE cable runs to minimize switch port usage",
            "Select tag types for each asset class (vehicle, pallet, fixture, tool)",
            "Install anchors in grid pattern with densification in high-value zones",
            "Connect anchors to network and verify connectivity",
            "Commission and calibrate the system",
            "Deploy tags on assets and verify tracking accuracy",
            "Integrate position data via REST API into WMS/MES/dashboard",
            "Train operators and establish maintenance procedures",
          ],
        },
      ]}
      fitCheck={{
        bestTitle: "CUWB is best for warehouses that need:",
        notBestTitle: "May not be the right fit when:",
        bestFor: [
          { group: "Large warehouses", desc: "that need real-time location of every mobile asset." },
          { group: "Multi-zone operations", desc: "with receiving, staging, and shipping visibility needs." },
          { group: "Cost-conscious teams", desc: "avoiding recurring software fees from subscription RTLS vendors." },
          { group: "Integration-focused IT", desc: "needing REST API access to location data for WMS/MES dashboards." },
          { group: "Privacy-sensitive sites", desc: "requiring local data operation without cloud dependency." },
        ],
        notBestFor: [
          { group: "Simple inventory counts", desc: "where periodic barcode scanning is sufficient." },
          { group: "Very small facilities", desc: "where manual search is manageable and ROI is harder to justify." },
          { group: "Outdoor-only operations", desc: "where GPS tracking is the more appropriate technology." },
        ],
      }}
      faqs={[
        { q: "How many UWB anchors does a warehouse need?", a: "Anchor count depends on facility size, ceiling height, racking density, and required accuracy. A typical distribution center deploys 1 anchor per 800–1,200 m² of coverage. Use the CUWB Anchor Estimator for a project-specific estimate." },
        { q: "Can CUWB integrate with our existing WMS?", a: "Yes. CUWB provides a REST API that serves real-time position data. Your WMS, MES, ERP, or custom dashboard can consume location events, zone transitions, and dwell-time data through standard HTTP requests." },
        { q: "Does CUWB require cloud connectivity?", a: "No. CUWB runs entirely on your local network. Position computation happens on your server or VM. No data leaves your facility. This is important for sites with strict IT security, data privacy, or connectivity constraints." },
        { q: "What is ChainPoE and how does it help warehouse deployments?", a: "ChainPoE lets you daisy-chain up to 12 UWB anchors over a single Ethernet cable run, reducing cabling costs by up to 90% and significantly cutting cable pull labor. In a 48-anchor deployment, ChainPoE can reduce required switch ports from 48 to as few as 4–8." },
        { q: "How much does a warehouse UWB RTLS cost?", a: "Costs scale with facility size and tag count. CUWB publishes hardware prices upfront and charges no recurring software fees. See the RTLS Cost Guide for example configurations and TCO comparisons." },
      ]}
      whyCUWB={{
        title: "Built for warehouses that need precision and local control.",
        body: "CUWB is engineered for teams that need sub-30 cm accuracy, local data ownership, transparent hardware pricing, and zero recurring software fees.",
        bullets: [
          { title: "Sub-30 cm accuracy", text: "Locate assets within a few feet, not a general zone" },
          { title: "ChainPoE installation savings", text: "Fewer cables, fewer switch ports, less labor" },
          { title: "$0 recurring software fees", text: "Avoid $45K+/year in subscription costs" },
          { title: "Local data operation", text: "Your warehouse data stays on your infrastructure" },
          { title: "REST API integration", text: "Connect to WMS, MES, ERP, or custom dashboards" },
          { title: "Published pricing", text: "Evaluate fit and budget before talking to sales" },
        ],
        links: [{ label: "Explore the CUWB Advantage", href: "/cuwb-advantage" }],
      }}
      related={[
        { label: "Guide", title: "UWB RTLS Guide", href: "/learn/uwb-rtls" },
        { label: "Product", title: "Anchors", href: "/anchors" },
        { label: "Product", title: "Tags", href: "/tags" },
        { label: "Solution", title: "Forklift Tracking", href: "/solutions/forklift-tracking" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
        { label: "Proof", title: "Warehouse Case Study", href: "/case-studies/warehouse-asset-tracking-48-anchors" },
      ]}
      ctaTitle="Estimate your warehouse RTLS system."
      ctaBody="Start with cost planning, review deployment requirements, or talk to our engineering team."
      ctaButtons={[
        { label: "Estimate RTLS Cost", href: "/pricing", primary: true },
        { label: "Plan Anchor Layout", href: "/learn/uwb-anchor-placement" },
        { label: "Talk to an Engineer", href: "/contact" },
      ]}
    />
  );
}
