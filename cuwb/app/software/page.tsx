import type { Metadata } from "next";
import ProductPage from "../components/ProductPage";

export const metadata: Metadata = {
  title: "CUWB Software | Local RTLS Software With No Recurring Fees",
  description:
    "CUWB software runs locally with no recurring licensing fees. Full API access, REST endpoints, and integration flexibility for RTLS data.",
};

export default function SoftwarePage() {
  return (
    <ProductPage
      eyebrow="Products / Software"
      title="Local RTLS software without the subscription trap."
      description="CUWB software runs on your infrastructure, exposes location data through local APIs, and is included with hardware without recurring CUWB software licensing fees."
      primaryCta={{ label: "Read API Guide", href: "/rtls-api-integration" }}
      secondaryCta={{ label: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls" }}
      heroFacts={[
        { title: "Fees", description: "$0 recurring CUWB software fees" },
        { title: "API", description: "REST endpoints and local data" },
        { title: "Cloud", description: "No cloud dependency required" },
        { title: "Data", description: "Runs on your network" },
        { title: "Fit", description: "Technical and integration-led teams" },
      ]}
      decisionPoints={[
        { title: "Data control", description: "Position data stays on buyer-owned infrastructure and local systems." },
        { title: "Integration path", description: "API clarity matters for WMS, MES, ERP, SCADA, robotics, and dashboards." },
        { title: "Total cost", description: "No recurring software fees change the three to five year RTLS cost model." },
        { title: "Workflow depth", description: "The page must explain what software does without pretending to be a heavy enterprise suite." },
      ]}
      sections={[
        {
          kicker: "Local operation",
          title: "A software model built for control.",
          body: "The SEO audit identifies local RTLS software, no recurring fees, and API integration as major decision-stage opportunities.",
          items: [
            { meta: "Engine", title: "Positioning engine", description: "Computes real-time positions from UWB measurements on local infrastructure." },
            { meta: "API", title: "REST data access", description: "Expose positions, tag state, anchor health, and configuration to custom systems." },
            { meta: "Dashboard", title: "Local visualization", description: "Operate and inspect location data without a vendor cloud login." },
            { meta: "Export", title: "Data export", description: "Feed history and live streams into databases, dashboards, and industrial systems." },
          ],
        },
        {
          kicker: "Local vs cloud",
          title: "The deployment model affects latency, privacy, and cost.",
          body: "This is a core counter-position against subscription-heavy RTLS competitors.",
          table: {
            headers: ["Dimension", "CUWB local", "Typical cloud RTLS"],
            rows: [
              ["Data location", "Your facility", "Vendor cloud"],
              ["Internet required", "No", "Usually yes"],
              ["Recurring cost", "$0 CUWB software fees", "Monthly or annual licenses"],
              ["Custom integration", "Local API access", "Vendor-controlled options"],
              ["Compliance posture", "Buyer-controlled infrastructure", "Depends on vendor cloud"],
            ],
          },
          links: [
            { label: "Full local vs cloud comparison", href: "/learn/local-rtls-vs-cloud-rtls" },
            { label: "No recurring fees explained", href: "/pricing#software-fees" },
          ],
          dark: true,
        },
        {
          kicker: "Integration",
          title: "Location data should move into the systems buyers already use.",
          body: "Software pages need to address technical implementers, not just procurement teams.",
          items: [
            { title: "WMS and ERP", description: "Send asset location into warehouse and enterprise resource systems." },
            { title: "MES and SCADA", description: "Connect WIP location and movement data to manufacturing operations." },
            { title: "Robotics and AGV", description: "Stream high-rate position data to navigation, validation, and control workflows." },
            { title: "Custom dashboards", description: "Build buyer-specific visibility instead of forcing a generic cloud UI." },
          ],
          links: [
            { label: "RTLS API integration", href: "/rtls-api-integration" },
            { label: "Total cost of ownership", href: "/pricing#tco" },
          ],
        },
      ]}
      related={[
        { title: "Anchors", description: "UWB infrastructure with ChainPoE support.", href: "/anchors" },
        { title: "Tags", description: "Multiple form factors and update rates.", href: "/tags" },
        { title: "API Integration", description: "REST API details and integration patterns.", href: "/rtls-api-integration" },
      ]}
    />
  );
}
