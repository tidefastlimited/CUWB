import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Mining Personnel & Equipment Tracking With UWB RTLS | CUWB",
  description:
    "Track personnel and equipment in mining operations with rugged UWB RTLS. Local operation, no cloud dependency, high precision in tough industrial environments.",
};

export default function MiningPersonnelTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Mining"
      title="Mining Personnel & Equipment Tracking"
      description="Rugged UWB RTLS for mining operations. Track workers and equipment in tough industrial environments with local data, no cloud dependency, and no recurring software fees."
      primaryCta={{ label: "Talk to an Engineer", href: "/contact" }}
      secondaryCta={{ label: "Custom Engineering", href: "/custom-uwb" }}
      heroFacts={[
        { title: "Operation", description: "100% offline, no internet" },
        { title: "Coverage", description: "Underground & surface" },
        { title: "Tags", description: "Personnel / Vehicle / Equipment" },
        { title: "Software", description: "No recurring fees" },
        { title: "Install", description: "ChainPoE for underground runs" },
      ]}
      decisionPoints={[
        { title: "Offline operation", description: "CUWB runs entirely on your local network — no internet required. Essential for underground and remote sites." },
        { title: "Personnel mustering", description: "Real-time accountability of all workers underground. Know who is in each zone during emergencies." },
        { title: "Harsh environment performance", description: "UWB performs better than BLE or Wi-Fi in dusty, humid, confined spaces with metal infrastructure." },
        { title: "Installation cost", description: "ChainPoE allows daisy-chaining anchors — reducing cable pulls, switch ports, and commissioning time in underground mines." },
      ]}
      sections={[
        {
          kicker: "The Challenge",
          title: "Harsh environments demand rugged, reliable systems.",
          body: "Mining operations face unique challenges: underground environments with no cellular or GPS coverage, extreme dust and vibration, complex tunnel geometries, metal-heavy infrastructure, and strict safety requirements. Cloud-dependent RTLS systems are impractical in many mining contexts due to lack of connectivity, data sovereignty concerns, and latency requirements.",
          items: [
            { title: "Personnel Mustering", description: "Real-time accountability of all workers underground. Know who is in each zone and ensure complete evacuation during emergencies." },
            { title: "Vehicle & Equipment Tracking", description: "Locate haul trucks, loaders, drills, and support vehicles in real time. Optimize fleet utilization and reduce search time." },
            { title: "Zone-Based Safety Monitoring", description: "Define geofenced zones for hazardous areas. Alert when personnel enter restricted zones or when vehicles approach pedestrian areas." },
            { title: "Production Visibility", description: "Understand where equipment is deployed, how long it spends in each zone, and identify bottlenecks in the extraction process." },
          ],
        },
        {
          kicker: "Why CUWB",
          title: "Why CUWB fits mining operations.",
          body: "Local operation, no recurring fees, ChainPoE installation savings, and custom engineering options make CUWB well-suited for the cost and infrastructure realities of mining.",
          items: [
            { title: "Fully local operation", description: "No internet required. Positioning works entirely on your local network. Essential for underground and remote sites." },
            { title: "No cloud dependency", description: "Your location data never leaves your facility. No external servers, no data egress, no connectivity requirement." },
            { title: "No recurring software fees", description: "With large tag counts across personnel and fleets, avoiding per-tag subscription fees saves significantly at scale." },
            { title: "ChainPoE installation savings", description: "Daisy-chain anchors to reduce cable pulls, switch ports, and installation labor — critical where every cable run is expensive." },
            { title: "High precision in complex environments", description: "Sub-meter accuracy even in tunnels, drifts, and areas with reflective surfaces. Better multipath resistance than BLE or Wi-Fi." },
            { title: "API access for integration", description: "Feed location data into SCADA, dispatch systems, safety dashboards, or custom applications via REST API." },
          ],
        },
        {
          kicker: "Deployment Example",
          title: "Sample mining deployment configuration.",
          body: "An underground mine with multiple levels, tracking 150+ personnel and vehicles across drifts, stopes, and workshops — fully offline with ChainPoE infrastructure.",
          dark: true,
          links: [
            { label: "Read the Mining Case Study", href: "/case-studies/mine-equipment-personnel-tracking" },
            { label: "Learn About ChainPoE", href: "/articles/chainpoe" },
          ],
          table: [
            ["Environment", "Underground mine with multiple levels"],
            ["Coverage area", "~50,000 m² across drifts, stopes, and workshops"],
            ["Anchor count", "24–36 UWB anchors depending on geometry"],
            ["Tag count", "150+ tags (personnel wearable + vehicle + equipment)"],
            ["Update rate", "1–10 Hz configurable; higher rates for vehicles"],
            ["Accuracy target", "< 1 m (tunnel-level); sub-30 cm in open areas"],
            ["Network", "Local Ethernet with ChainPoE daisy-chaining"],
            ["Integration", "REST API → SCADA / Safety dashboard / Dispatch system"],
            ["Connectivity", "Fully offline — no internet required"],
          ],
        },
      ]}
      fitCheck={{
        bestTitle: "CUWB is best for mining operations that need:",
        notBestTitle: "May not be the right fit when:",
        bestFor: [
          { group: "Underground mining operations", desc: "that need local positioning without any internet or cloud connectivity requirement." },
          { group: "Safety-critical sites", desc: "requiring reliable personnel mustering and zone-based safety monitoring." },
          { group: "Remote industrial facilities", desc: "with limited connectivity and a need for self-contained location infrastructure." },
          { group: "Cost-conscious operations", desc: "avoiding per-tag recurring software fees that compound across large workforces." },
          { group: "Engineering-led teams", desc: "wanting API access to integrate location data into SCADA, dispatch, or custom systems." },
        ],
        notBestFor: [
          { group: "Surface-only open-pit operations", desc: "where GPS tracking may be sufficient for most use cases." },
          { group: "Teams wanting full worker-safety wearables", desc: "with built-in displays, buzzers, man-down detection, and OTA updates — evaluate tag capabilities against your requirements." },
          { group: "Extremely small operations", desc: "where manual sign-in sheets and radio communication are the current standard and ROI justification is difficult." },
        ],
      }}
      faqs={[
        { q: "Does UWB work underground without internet?", a: "Yes. CUWB operates entirely on your local network. No internet connection is required for positioning computation. Anchors connect via Ethernet (with ChainPoE option), tags communicate via UWB radio, and all processing happens on your local server. This makes UWB ideal for underground environments." },
        { q: "How does UWB perform in harsh mining environments?", a: "UWB performs well in challenging RF environments including dust, humidity, and confined spaces. The wideband nature of UWB signals provides better resistance to multipath interference than narrowband technologies like Wi-Fi or BLE. However, dense metal infrastructure requires careful anchor planning — pre-deployment site surveys are essential." },
        { q: "Can we track both personnel and vehicles?", a: "Yes. CUWB offers different tag types for different applications: wearable tags for personnel, vehicle-mounted tags for heavy equipment, and asset tags for tools and fixtures. Each tag type can run at different update rates appropriate to its use case." },
        { q: "What happens during an emergency or power loss?", a: "CUWB anchors require PoE power and network connectivity to operate. For critical safety deployments, backup power and redundant network paths should be planned as part of the overall system design. The system provides real-time position data while operational, which supports emergency response and personnel accounting." },
        { q: "How does ChainPoE help in mining installations?", a: "ChainPoE allows daisy-chaining anchors over a single cable run. In underground mines where every cable pull is expensive and difficult, this dramatically reduces installation complexity. Fewer switch ports are needed, less conduit is required, and commissioning time is reduced." },
      ]}
      whyCUWB={{
        title: "Built for mines that operate without connectivity.",
        body: "CUWB is engineered by Ciholas with deep UWB, RF, and rugged hardware experience — designed for environments where cloud dependency is not an option.",
        bullets: [
          { title: "100% offline operation", text: "Works underground without any internet connectivity" },
          { title: "$0 recurring software fees", text: "Significant savings on large-scale deployments with many tags" },
          { title: "ChainPoE simplification", text: "Fewer cables, fewer switch ports, easier underground installation" },
          { title: "Custom engineering available", text: "Rugged enclosures, specialized firmware, private-label solutions" },
          { title: "REST API integration", text: "Feed into SCADA, dispatch, or safety dashboards" },
          { title: "Published hardware pricing", text: "Evaluate total cost before committing to a program" },
        ],
        links: [
          { label: "Custom UWB Engineering", href: "/custom-uwb" },
          { label: "Learn About ChainPoE", href: "/articles/chainpoe" },
        ],
      }}
      related={[
        { label: "Advantage", title: "CUWB Advantage", href: "/cuwb-advantage" },
        { label: "Product", title: "Software & APIs", href: "/software" },
        { label: "Custom", title: "Custom UWB Engineering", href: "/custom-uwb" },
        { label: "Technology", title: "ChainPoE Installation Savings", href: "/articles/chainpoe" },
        { label: "Proof", title: "Mining Case Study", href: "/case-studies/mine-equipment-personnel-tracking" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
        { label: "Guide", title: "Indoor vs Outdoor Deployment", href: "/rtls-deployment-planning/indoor-vs-outdoor-uwb-deployment" },
      ]}
      ctaTitle="Evaluate CUWB for your mining operation."
      ctaBody="Discuss your environment, estimate deployment scope, or talk to our engineering team about custom requirements."
      ctaButtons={[
        { label: "Talk to an Engineer", href: "/contact", primary: true },
        { label: "Custom Engineering", href: "/custom-uwb" },
        { label: "Learn About ChainPoE", href: "/articles/chainpoe" },
      ]}
    />
  );
}
