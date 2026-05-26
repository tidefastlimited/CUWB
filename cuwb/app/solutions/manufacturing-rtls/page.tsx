import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Manufacturing RTLS — Work-in-Progress & Tool Tracking | CUWB",
  description:
    "Deploy UWB RTLS in manufacturing for work-in-progress tracking, tool tracking, and production visibility. Local data, no recurring software fees, high precision.",
};

export default function ManufacturingRTLSPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Manufacturing"
      title="Manufacturing RTLS"
      description="Real-time location visibility for manufacturing operations. Track work in progress, tools, fixtures, and equipment on the production floor with UWB precision."
      primaryCta={{ label: "Estimate RTLS Cost", href: "/pricing" }}
      secondaryCta={{ label: "WIP Tracking Deep Dive", href: "/solutions/work-in-progress-tracking" }}
      heroFacts={[
        { title: "Accuracy", description: "Sub-meter, station-level" },
        { title: "Data", description: "Local, no cloud dependency" },
        { title: "Software", description: "No recurring fees" },
        { title: "Integration", description: "REST API for MES / ERP" },
        { title: "Install", description: "ChainPoE reduces cabling" },
      ]}
      decisionPoints={[
        { title: "WIP visibility", description: "Station-level tracking of work items through multi-stage processes — no manual scanning required." },
        { title: "Metal environments", description: "UWB performs better than BLE or Wi-Fi in reflective environments. Anchor planning is critical." },
        { title: "MES/ERP integration", description: "REST API feeds station entry/exit events, dwell times, and cycle times into your manufacturing systems." },
        { title: "Cost model", description: "No per-tag or per-anchor recurring software fees — significant savings at scale across large WIP volumes." },
      ]}
      sections={[
        {
          kicker: "Use Cases",
          title: "How manufacturers use UWB RTLS.",
          body: "UWB RTLS on the production floor connects location data to manufacturing workflows — turning position into process visibility.",
          items: [
            { title: "Work-in-Progress (WIP) Tracking", description: "Track items through multi-stage manufacturing processes. Measure cycle times, identify bottlenecks, and get real-time production status." },
            { title: "Tool & Fixture Locating", description: "Find calibration tools, jigs, fixtures, and maintenance equipment instantly. Reduce setup time and eliminate duplicate purchases." },
            { title: "Production Flow Monitoring", description: "Visualize material flow across stations. Understand throughput, queue depth, and station utilization in real time." },
            { title: "Automotive Plant Logistics", description: "Track AGVs, carts, kitting containers, and sub-assemblies on the plant floor with centimeter-level precision." },
            { title: "Lean Manufacturing Support", description: "Provide data-driven visibility into material flow, enabling continuous improvement and waste reduction initiatives." },
            { title: "Safety Zone Monitoring", description: "Define geofenced hazard areas and alert when personnel or equipment enter restricted zones." },
          ],
        },
        {
          kicker: "Why UWB",
          title: "Why UWB RTLS fits manufacturing environments.",
          body: "Sub-meter accuracy, local data control, and no recurring software fees make UWB the right choice for engineering-led manufacturing teams.",
          items: [
            { title: "Sub-meter accuracy", description: "Locate assets within centimeters. Critical for station-level WIP tracking and tool locating." },
            { title: "Low latency", description: "Position updates in milliseconds. Suitable for closed-loop automation and real-time dashboards." },
            { title: "High update rates", description: "Configurable up to 100 Hz for robotics validation, motion capture, and AGV control." },
            { title: "Local data operation", description: "All positioning happens on your server. ITAR, GDPR, and compliance-friendly." },
            { title: "No recurring software fees", description: "Pay for hardware once. No per-tag, per-anchor, or per-seat subscription costs." },
            { title: "REST API access", description: "Integrate directly with MES, ERP, SCADA, or custom dashboards using standard HTTP endpoints." },
          ],
        },
        {
          kicker: "How It Works",
          title: "UWB RTLS on the production floor.",
          body: "From anchor deployment to MES integration, each layer of the system is designed for the realities of a manufacturing environment.",
          dark: true,
          links: [
            { label: "Obstruction Guidance", href: "/rtls-deployment-planning/how-obstructions-affect-uwb" },
            { label: "API Integration Guide", href: "/rtls-api-integration" },
          ],
          steps: [
            { title: "Anchor deployment", body: "UWB anchors mount above workstations, along assembly lines, and throughout the production area. Each connects to your local network. ChainPoE reduces cabling complexity in large facilities." },
            { title: "Tag strategy", body: "Tags deploy on WIP carriers, tools, fixtures, carts, AGVs, and equipment. Different tag types support different mounting requirements, power sources, and update rates." },
            { title: "Zone definition", body: "Production areas are defined as logical zones — receiving, staging, each workstation, quality hold, shipping. The system detects zone entry and exit events automatically." },
            { title: "Data flow", body: "Position events, zone transitions, and dwell times are served locally via REST API. Your MES consumes this data to update production status, calculate OEE metrics, and trigger workflow events." },
          ],
        },
        {
          kicker: "Deployment",
          title: "Manufacturing deployment considerations.",
          body: "Pre-deployment site surveys and anchor densification around critical zones are essential for strong accuracy in manufacturing environments.",
          links: [
            { label: "Anchor Placement Guide", href: "/learn/uwb-anchor-placement" },
            { label: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
          ],
          table: [
            ["Metal obstructions", "Dense racking, machinery, and metal enclosures require careful anchor planning. Review obstruction guidance."],
            ["Ceiling height", "Varying ceiling heights may require additional anchors or angled mounting."],
            ["Environmental factors", "Dust, temperature extremes, and vibration are common. CUWB hardware is designed for industrial environments."],
            ["Anchor density near stations", "Higher density around critical workstations improves accuracy where it matters most."],
            ["Power availability", "Anchors require PoE power. Plan network drops and switch capacity before installation."],
            ["Tag mounting", "Consistent tag orientation and mounting position significantly affects accuracy. Establish standards early."],
          ],
        },
      ]}
      fitCheck={{
        bestTitle: "CUWB is best for manufacturers that need:",
        notBestTitle: "May not be the right fit when:",
        bestFor: [
          { group: "Discrete manufacturers", desc: "needing real-time WIP visibility across assembly lines and work cells." },
          { group: "Automotive & aerospace", desc: "with complex multi-stage processes and strict traceability requirements." },
          { group: "Lean / Kaizen teams", desc: "that need data to drive process improvement decisions." },
          { group: "Engineering-led operations", desc: "wanting API access and local data control over cloud dependency." },
          { group: "Cost-conscious plants", desc: "avoiding per-tag or per-anchor recurring software license fees." },
        ],
        notBestFor: [
          { group: "Simple single-station shops", desc: "where visual line-of-sight is sufficient and WIP is minimal." },
          { group: "Teams wanting a full SaaS platform", desc: "with built-in dashboards, alerts, analytics, and mobile apps — CUWB is more DIY-integration." },
          { group: "Outdoor-only yard operations", desc: "where GPS or LoRaWAN may be more appropriate than indoor UWB." },
        ],
      }}
      faqs={[
        { q: "How does UWB RTLS enable WIP tracking?", a: "UWB tags are attached to work-in-progress items or their carriers. Anchors at each station detect when tagged items arrive and depart. The system logs station entry/exit events, measures dwell time at each stage, and computes total cycle time. This data feeds into your MES via REST API." },
        { q: "Does metal in manufacturing environments affect UWB accuracy?", a: "Metal obstructions can affect any RF-based positioning system. UWB performs better than BLE or Wi-Fi in reflective environments due to its wideband nature, but dense metal racking still requires careful anchor placement. Pre-deployment site surveys and anchor densification around critical zones are recommended." },
        { q: "Can CUWB integrate with our MES or ERP?", a: "Yes. CUWB provides a local REST API that serves position events, zone transitions, dwell times, and speed data. Your MES can consume these events to update production status, trigger workflows, or populate dashboards without sending data to external servers." },
        { q: "What is the typical tag battery life on a manufacturing floor?", a: "Battery life depends on update rate, tag type, and duty cycle. Standard asset tags running at 1–5 Hz typically last 1–3 years on replaceable batteries. Vehicle-mounted tags with external power options are also available for forklifts and AGVs." },
        { q: "How does CUWB compare to Sewio or KINEXON for manufacturing?", a: "CUWB differentiates through transparent hardware pricing, no recurring software fees, local-first operation, and strong engineering access. While competitors offer broader enterprise software platforms, CUWB is ideal for technical teams that want precise location data, integration flexibility, and lower total cost of ownership." },
      ]}
      whyCUWB={{
        title: "Built for engineering-led manufacturing teams.",
        body: "CUWB provides precise location data with local control and transparent pricing — without enterprise software lock-in.",
        bullets: [
          { title: "Sub-meter accuracy", text: "Station-level WIP tracking, not just zone detection" },
          { title: "$0 recurring software fees", text: "Avoid compounding per-tag subscription costs" },
          { title: "Local data operation", text: "ITAR-compliant, GDPR-friendly, no cloud dependency" },
          { title: "REST API integration", text: "Connect to MES, ERP, SCADA, or custom dashboards" },
          { title: "Ciholas engineering depth", text: "Custom firmware, private-label hardware, and product development available" },
          { title: "ChainPoE installation savings", text: "Fewer cables, fewer switch ports, lower installation cost" },
        ],
        links: [{ label: "Explore the CUWB Advantage", href: "/cuwb-advantage" }],
      }}
      related={[
        { label: "Solution", title: "WIP Tracking", href: "/solutions/work-in-progress-tracking" },
        { label: "Guide", title: "UWB RTLS Guide", href: "/learn/uwb-rtls" },
        { label: "Product", title: "Tags", href: "/tags" },
        { label: "Product", title: "Anchors", href: "/anchors" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Custom", title: "Custom UWB Engineering", href: "/custom-uwb" },
      ]}
      ctaTitle="Evaluate CUWB for your manufacturing facility."
      ctaBody="Start with deployment planning, compare technologies, or talk to our engineering team."
      ctaButtons={[
        { label: "Estimate RTLS Cost", href: "/pricing", primary: true },
        { label: "WIP Tracking Deep Dive", href: "/solutions/work-in-progress-tracking" },
        { label: "Talk to an Engineer", href: "/contact" },
      ]}
    />
  );
}
