import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Work-in-Progress (WIP) Tracking With UWB RTLS | CUWB",
  description:
    "Track work-in-progress through your manufacturing process with UWB RTLS. Real-time visibility into production flow, bottleneck identification, and cycle time optimization.",
};

export default function WorkInProgressTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / WIP"
      title="Work-in-Progress Tracking"
      description="Real-time visibility into production flow with UWB RTLS. Track items through stations, identify bottlenecks, and optimize cycle times — no manual scanning required."
      primaryCta={{ label: "Manufacturing RTLS Overview", href: "/solutions/manufacturing-rtls" }}
      secondaryCta={{ label: "Estimate RTLS Cost", href: "/pricing" }}
      heroFacts={[
        { title: "Tracking", description: "Automatic zone events" },
        { title: "Data", description: "Cycle time & dwell time" },
        { title: "Software", description: "No recurring fees" },
        { title: "Integration", description: "REST API for MES / ERP" },
        { title: "Operation", description: "Local, no cloud dependency" },
      ]}
      decisionPoints={[
        { title: "Automatic event capture", description: "Zone entry/exit events are logged automatically — no manual barcode scanning or operator interaction required." },
        { title: "Cycle time visibility", description: "Measure exactly how long each item spends at each station, in queues, and in hold areas. Find bottlenecks that visual inspection misses." },
        { title: "MES integration", description: "Station arrival/departure events feed directly into your MES via REST API to update production status in real time." },
        { title: "Cost model", description: "No per-tag subscription costs that compound across large WIP volumes. Pay for hardware once." },
      ]}
      sections={[
        {
          kicker: "The Problem",
          title: "You can't improve what you can't see.",
          body: "In multi-stage manufacturing, work items move between stations, wait in queues, pass through quality holds, and eventually ship. Without real-time visibility, teams rely on estimates, manual checks, and periodic counts. Barcode scanning at each station requires manual compliance, captures only point-in-time data, and doesn't reveal how long items actually spend waiting between stations.",
          metrics: [
            { metric: "Cycle time visibility", before: "Estimated / manual", after: "Measured in real-time" },
            { metric: "Bottleneck detection", after: "Automatic identification of constrained stations" },
            { metric: "Throughput optimization", after: "Data-driven process improvement" },
            { metric: "Production status", after: "Real-time dashboard for every work item" },
            { metric: "Recurring SW fees", before: "$30K+/year typical", after: "$0 with CUWB" },
            { metric: "Scanning compliance", before: "Manual, often missed", after: "Automatic zone events" },
          ],
        },
        {
          kicker: "How It Works",
          title: "How UWB enables WIP tracking.",
          body: "UWB WIP tracking replaces manual scanning with automatic zone detection. Each zone transition becomes a timestamped event your MES can consume.",
          items: [
            { title: "Zone-based tracking", description: "Define logical zones around each workstation, staging area, quality hold, and shipping dock. Zone entry/exit is detected automatically." },
            { title: "Station arrival/departure events", description: "Each zone transition generates a timestamped event — which item, which station, when. Your MES consumes these events to update production status in real time." },
            { title: "Dwell time measurement", description: "The system measures exactly how long each item spends at each station, in queues, and in hold areas. This data reveals bottlenecks that visual inspection misses." },
            { title: "Carrier-level or unit-level tagging", description: "Tag pallets, skids, carts, or bins for carrier-level tracking. For higher-value processes, tag individual units for granular visibility." },
          ],
        },
        {
          kicker: "Implementation",
          title: "Implementation approach.",
          body: "A WIP tracking deployment maps physical production areas to logical zones, then connects zone events to your manufacturing execution system via REST API.",
          dark: true,
          links: [
            { label: "API Integration Guide", href: "/rtls-api-integration" },
            { label: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
          ],
          table: [
            ["Tagging strategy", "Attach tags to carriers (pallets, carts, bins) or individual units depending on required granularity"],
            ["Anchor placement", "Install anchors at each workstation, intersection points, and zone boundaries"],
            ["Zone definition", "Map logical zones in software matching physical stations and areas"],
            ["Event configuration", "Define which zone transitions generate events and what data is included"],
            ["Integration", "REST API feeds events to MES, ERP, or custom production dashboard"],
            ["Update rate", "1–5 Hz typical for WIP; lower rates reduce network load while maintaining accuracy"],
          ],
        },
      ]}
      faqs={[
        { q: "How does UWB enable WIP tracking?", a: "UWB tags are attached to work items or their carriers (pallets, carts, fixtures). Anchors at each workstation detect when tagged items arrive and depart. The system logs station entry/exit events, measures dwell time at each stage, and computes total cycle time. This data feeds into your MES or custom dashboard via REST API." },
        { q: "Do I need to tag every individual unit?", a: "Not necessarily. Many WIP deployments tag carriers (pallets, skids, carts, bins) rather than individual units. If you need unit-level granularity, smaller tags can be attached to individual items. The approach depends on your process, value density, and accuracy requirements." },
        { q: "How does zone-based WIP tracking work?", a: "You define logical zones around each workstation, staging area, quality hold station, and shipping dock. The CUWB system detects when tagged items enter and exit each zone automatically. Zone transitions become events that your MES can consume for real-time production status." },
        { q: "What metrics can I derive from UWB WIP data?", a: "Typical metrics include: cycle time per stage, total throughput time, station utilization rate, queue depth at each workstation, bottleneck identification, WIP inventory count by zone, and OEE-relevant availability data." },
      ]}
      whyCUWB={{
        title: "Built for production visibility without manual scanning overhead.",
        body: "CUWB delivers automatic zone events, local data control, and no recurring fees — exactly what WIP visibility programs need at scale.",
        bullets: [
          { title: "Sub-meter accuracy", text: "Know exactly which station each item occupies" },
          { title: "$0 recurring software fees", text: "Avoid per-tag subscription costs across large WIP volumes" },
          { title: "Local operation", text: "ITAR-compliant, no cloud dependency, no internet required" },
          { title: "REST API integration", text: "Feed events directly into MES, ERP, or custom dashboards" },
          { title: "Automatic event generation", text: "No manual barcode scanning required — zone transitions log themselves" },
          { title: "Flexible tagging", text: "Tag carriers or individual units depending on required granularity" },
        ],
        links: [{ label: "Manufacturing RTLS Overview", href: "/solutions/manufacturing-rtls" }],
      }}
      related={[
        { label: "Solution", title: "Manufacturing RTLS", href: "/solutions/manufacturing-rtls" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
        { label: "Guide", title: "UWB RTLS Guide", href: "/learn/uwb-rtls" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
        { label: "Product", title: "Tags", href: "/tags" },
        { label: "Product", title: "Anchors", href: "/anchors" },
        { label: "Product", title: "Software & APIs", href: "/software" },
      ]}
      ctaTitle="Evaluate WIP tracking for your production line."
      ctaBody="Discuss your process, estimate deployment scope, or talk to our engineering team."
      ctaButtons={[
        { label: "Manufacturing RTLS Overview", href: "/solutions/manufacturing-rtls", primary: true },
        { label: "Estimate RTLS Cost", href: "/pricing" },
        { label: "Talk to an Engineer", href: "/contact" },
      ]}
    />
  );
}
