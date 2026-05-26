import type { Metadata } from "next";
import ProductPage from "../components/ProductPage";

export const metadata: Metadata = {
  title: "UWB RTLS | Ultra-Wideband Real-Time Location Systems | CUWB",
  description:
    "CUWB uses Ultra-Wideband technology for high-precision real-time location systems. Learn about UWB positioning, accuracy, and indoor tracking.",
};

export default function UWBPage() {
  return (
    <ProductPage
      eyebrow="Products / UWB RTLS"
      title="The complete UWB RTLS system, made legible."
      description="CUWB combines anchors, tags, local software, accessories, API access, and deployment planning into a high-precision RTLS system for buyers who need control, low latency, and transparent cost."
      primaryCta={{ label: "Read UWB RTLS Guide", href: "/learn/uwb-rtls" }}
      secondaryCta={{ label: "Compare Technologies", href: "/learn/uwb-vs-ble-rfid-gps" }}
      heroFacts={[
        { title: "Accuracy", description: "Centimeter-level positioning" },
        { title: "Latency", description: "Built for fast motion data" },
        { title: "System", description: "Anchors, tags, software, API" },
        { title: "Control", description: "Local infrastructure" },
        { title: "Cost", description: "No recurring CUWB software fees" },
      ]}
      decisionPoints={[
        { title: "Technology fit", description: "UWB is strongest when precision, latency, and indoor reliability matter." },
        { title: "Deployment scope", description: "Buyers need anchor count, tag count, networking, mounting, and commissioning clarity." },
        { title: "Alternative comparison", description: "The page should connect to UWB vs BLE, RFID, GPS, and Wi-Fi searches." },
        { title: "Commercial clarity", description: "Transparent hardware pricing and no recurring fees are part of the system story." },
      ]}
      sections={[
        {
          kicker: "System",
          title: "CUWB is not just a radio spec.",
          body: "The SEO brief frames CUWB as a complete UWB RTLS system. That means product pages must connect hardware, software, cost, and deployment content.",
          items: [
            { meta: "Anchors", title: "Fixed infrastructure", description: "PoE and ChainPoE anchors create the geometry for high-precision positioning." },
            { meta: "Tags", title: "Tracked objects", description: "Tags attach to assets, people, vehicles, tools, robots, and custom devices." },
            { meta: "Software", title: "Local engine and API", description: "Position computation and data access run locally without recurring CUWB software fees." },
            { meta: "Accessories", title: "Deployment hardware", description: "Mounts, cabling, enclosures, kits, and physical installation components complete the BOM." },
          ],
        },
        {
          kicker: "Comparison",
          title: "UWB wins when precision and latency are not optional.",
          body: "Awareness and consideration searches often start as technology comparisons, so this page should point buyers to the right evaluation path.",
          table: {
            headers: ["Dimension", "UWB", "BLE", "RFID", "GPS"],
            rows: [
              ["Indoor accuracy", "2 to 30 cm", "3 to 5 m", "Checkpoint or zone", "Unavailable indoors"],
              ["Latency", "Low", "Moderate", "Event-based", "Slow indoors"],
              ["Best fit", "Precision tracking", "Presence", "Identification", "Outdoor tracking"],
              ["Infrastructure", "Anchors", "Beacons or AoA", "Readers and gates", "Satellites"],
              ["CUWB angle", "Local high-performance RTLS", "Alternative", "Alternative", "Outdoor-only alternative"],
            ],
          },
          links: [
            { label: "Full technology comparison", href: "/learn/uwb-vs-ble-rfid-gps" },
            { label: "UWB vs BLE", href: "/learn/uwb-vs-ble" },
            { label: "UWB vs RFID", href: "/learn/uwb-vs-rfid" },
          ],
          dark: true,
        },
        {
          kicker: "Use cases",
          title: "One system, multiple buyer modes.",
          body: "CUWB should route product evaluators to industry and application pages that match their search intent.",
          items: [
            { title: "Industrial operations", description: "Warehouse assets, manufacturing WIP, forklifts, equipment, and tools." },
            { title: "Engineering and R&D", description: "Robotics, AGV validation, measurement, testing, and custom data applications." },
            { title: "Healthcare teams", description: "Medical equipment tracking with local data and privacy-sensitive operation." },
            { title: "Sports and experience", description: "Low-latency athlete, object, performer, and visitor tracking." },
          ],
          links: [
            { label: "Warehouse tracking", href: "/solutions/warehouse-asset-tracking" },
            { label: "Robotics and AGV", href: "/solutions/robotics-agv-tracking" },
            { label: "Healthcare equipment", href: "/solutions/hospital-equipment-tracking" },
          ],
        },
      ]}
      related={[
        { title: "Anchors", description: "Fixed infrastructure with ChainPoE support.", href: "/anchors" },
        { title: "Tags", description: "Mobile UWB tags for assets, people, and vehicles.", href: "/tags" },
        { title: "Software", description: "Local RTLS software and API access.", href: "/software" },
      ]}
    />
  );
}
