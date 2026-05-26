import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Forklift Tracking System — Real-Time UWB Forklift Location | CUWB",
  description:
    "Track forklifts in real-time with UWB RTLS. Improve safety, reduce collision risk, optimize fleet utilization, and integrate with warehouse management systems.",
};

export default function ForkliftTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Forklift"
      title="Forklift Tracking System"
      description="Real-time UWB-based forklift tracking for warehouses and distribution centers. Improve safety, optimize fleet utilization, and gain operational visibility."
      primaryCta={{ label: "Estimate RTLS Cost", href: "/pricing" }}
      secondaryCta={{ label: "Plan Anchor Layout", href: "/learn/uwb-anchor-placement" }}
      heroFacts={[
        { title: "Accuracy", description: "< 30 cm real-time" },
        { title: "Latency", description: "< 10 ms" },
        { title: "Power", description: "Vehicle-powered tags available" },
        { title: "Software", description: "No recurring fees" },
        { title: "Integration", description: "REST API for WMS / TMS" },
      ]}
      decisionPoints={[
        { title: "Safety & collision risk", description: "Sub-30 cm precision enables geofence alerts, speed monitoring, and zone-based safety enforcement." },
        { title: "Fleet utilization", description: "Understand usage patterns, right-size your fleet, and justify purchases with location data." },
        { title: "Battery vs powered tags", description: "Vehicle-mounted tags can draw from the forklift electrical system — eliminating battery maintenance." },
        { title: "WMS integration", description: "REST API connects real-time position to nearest-vehicle lookup, zone reports, and speed dashboards." },
      ]}
      sections={[
        {
          kicker: "Benefits",
          title: "Why track forklifts with UWB.",
          body: "Real-time forklift position enables safety monitoring, fleet optimization, and workflow integration that zone-level systems can't provide.",
          items: [
            { title: "Safety", description: "Reduce collisions and near-misses with real-time position awareness. Enable speed monitoring and zone-based alerts." },
            { title: "Utilization", description: "Understand fleet usage patterns. Identify underutilized assets, right-size your fleet, and justify new purchases with data." },
            { title: "Efficiency", description: "Locate the nearest available forklift instantly. Reduce wait times and improve picking throughput." },
            { title: "Compliance", description: "Enforce speed limits, zone restrictions, and safety policies with geofence-based monitoring." },
          ],
        },
        {
          kicker: "Technology Comparison",
          title: "UWB vs alternatives for forklift tracking.",
          body: "GPS doesn't work indoors. BLE provides zone-level presence, not precise position. Only UWB delivers the sub-30 cm accuracy and low latency needed for real-time forklift safety and fleet management.",
          comparisonTable: {
            headers: ["Technology", "Accuracy", "Latency", "Indoor Coverage", "Best For"],
            rows: [
              ["UWB RTLS", "< 30 cm", "< 10 ms", "Full coverage", "Precision tracking & safety"],
              ["GPS", "3–10 m+", "1–5 s", "No", "Outdoor yard operations"],
              ["BLE / BLE AoA", "1–3 m", "1–5 s", "Zone-level", "Presence detection"],
              ["RFID (passive)", "Portal only", "Scan event", "Chokepoints", "Checkpoint logging"],
              ["Camera / CV", "Variable", "100–500 ms", "Line-of-sight", "Supplementary monitoring"],
            ],
            highlightFirst: true,
          },
        },
        {
          kicker: "Deployment",
          title: "Tag and anchor setup for forklift tracking.",
          body: "Tags attach to the forklift overhead guard or roof. Anchors mount to the ceiling in a grid covering all operating areas. ChainPoE daisy-chaining reduces cable runs and switch port requirements.",
          dark: true,
          links: [
            { label: "Anchor Placement Guide", href: "/learn/uwb-anchor-placement" },
            { label: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
          ],
          steps: [
            { title: "Tag mounting", body: "Tags attach to the forklift overhead guard or roof. Vehicle-mounted tags can draw power from the forklift electrical system, eliminating battery replacement." },
            { title: "Anchor placement", body: "Anchors mount to the ceiling in a grid pattern covering all areas where forklifts operate. ChainPoE daisy-chaining reduces cable runs and switch port requirements." },
            { title: "Update rate", body: "Configurable per tag. Standard forklift tracking uses 1–5 Hz. Collision avoidance or high-speed applications may use 10+ Hz." },
            { title: "Data output", body: "Real-time position, speed, heading, zone status, and geofence events via REST API to your WMS, TMS, or safety dashboard." },
          ],
        },
        {
          kicker: "Integration",
          title: "Data and integration options.",
          body: "CUWB serves all location data from a local server via REST API — no cloud latency, no data egress costs, no internet dependency.",
          links: [{ label: "API Integration Guide", href: "/rtls-api-integration" }],
          table: [
            ["Real-time position", "x, y, z coordinates updated at configured rate (1–100 Hz)"],
            ["Speed & heading", "Calculated velocity and direction of travel"],
            ["Zone status", "Current zone assignment with entry/exit timestamps"],
            ["Geofence alerts", "Instant notifications when vehicles enter restricted zones"],
            ["Dwell time", "Time spent in each zone for utilization analysis"],
            ["Historical data", "Position history for playback, reporting, and incident review"],
          ],
        },
      ]}
      faqs={[
        { q: "How is a UWB tag mounted on a forklift?", a: "Tags are typically mounted on the overhead guard or roof of the forklift. Vehicle-mounted tags can be powered by the forklift's electrical system or use long-life internal batteries. Mounting position should be consistent across all vehicles for optimal accuracy." },
        { q: "What update rate do I need for forklift tracking?", a: "Most warehouse forklift applications work well at 1–5 Hz. Higher rates (10+ Hz) are useful for collision avoidance systems or high-speed vehicles. CUWB supports configurable per-tag update rates so you can optimize based on each vehicle's role." },
        { q: "Can UWB data feed into our WMS or TMS?", a: "Yes. CUWB's REST API serves real-time position data that your WMS, TMS, or custom dashboard can consume. This enables features like nearest-vehicle lookup, zone utilization reports, and speed monitoring dashboards." },
        { q: "How does UWB compare to camera-based forklift tracking?", a: "Cameras provide visual context but require line of sight, are affected by lighting conditions, and raise privacy concerns. UWB provides precise position data regardless of lighting or occlusion, works in aisles and blind corners, and does not capture visual imagery. The two technologies can complement each other." },
      ]}
      whyCUWB={{
        title: "Built for warehouses that need precise, low-latency vehicle tracking.",
        body: "CUWB delivers centimeter-level accuracy and less than 20 ms latency needed for real forklift safety and fleet intelligence.",
        bullets: [
          { title: "Sub-30 cm precision", text: "Know exactly which aisle each forklift occupies" },
          { title: "Low latency positioning", text: "Sub-10ms updates enable real-time safety applications" },
          { title: "$0 recurring software fees", text: "Avoid per-vehicle subscription costs" },
          { title: "Vehicle-powered tags available", text: "Eliminate battery maintenance on fleet equipment" },
          { title: "REST API integration", text: "Connect to WMS, TMS, or custom safety dashboards" },
          { title: "ChainPoE installation savings", text: "Fewer cables, fewer switch ports, less installation labor" },
        ],
        links: [{ label: "Explore the CUWB Advantage", href: "/cuwb-advantage" }],
      }}
      related={[
        { label: "Solution", title: "Warehouse Asset Tracking", href: "/solutions/warehouse-asset-tracking" },
        { label: "Product", title: "Tags", href: "/tags" },
        { label: "Product", title: "Anchors", href: "/anchors" },
        { label: "Comparison", title: "UWB vs BLE vs RFID vs GPS", href: "/learn/uwb-vs-ble-rfid-gps" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
        { label: "Proof", title: "Warehouse Case Study", href: "/case-studies/warehouse-asset-tracking-48-anchors" },
      ]}
      ctaTitle="Evaluate forklift tracking for your facility."
      ctaBody="Estimate costs, plan anchor layout, or talk to our engineering team."
      ctaButtons={[
        { label: "Estimate RTLS Cost", href: "/pricing", primary: true },
        { label: "Plan Anchor Layout", href: "/learn/uwb-anchor-placement" },
        { label: "Talk to an Engineer", href: "/contact" },
      ]}
    />
  );
}
