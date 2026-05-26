import type { Metadata } from "next";
import ProductPage from "../components/ProductPage";

export const metadata: Metadata = {
  title: "UWB Anchors | CUWB RTLS Infrastructure",
  description:
    "CUWB UWB anchors with public pricing, ChainPoE support, and local network deployment. Plan RTLS infrastructure with transparent hardware costs.",
};

export default function AnchorsPage() {
  return (
    <ProductPage
      eyebrow="Products / Anchors"
      title="Anchor the system before you scale it."
      description="CUWB anchors form the fixed infrastructure for high-precision UWB RTLS: local network operation, ChainPoE installation savings, public hardware pricing, and deployment planning built around real facilities."
      primaryCta={{ label: "Anchor Placement Guide", href: "/learn/uwb-anchor-placement" }}
      secondaryCta={{ label: "View Hardware Pricing", href: "/pricing#hardware-pricing" }}
      heroFacts={[
        { title: "Power", description: "PoE and ChainPoE" },
        { title: "Network", description: "Local Ethernet operation" },
        { title: "Planning", description: "Anchor count and placement guides" },
        { title: "Pricing", description: "Published hardware costs" },
        { title: "Coverage", description: "Facility-specific layout" },
      ]}
      decisionPoints={[
        { title: "Anchor count", description: "Estimate coverage by area, ceiling height, obstructions, and accuracy requirements." },
        { title: "Install cost", description: "Use ChainPoE to reduce switch ports, home-run cable, and termination work." },
        { title: "Network fit", description: "Plan PoE budget, VLANs, bandwidth, and local server access before installation." },
        { title: "Deployment proof", description: "Map anchor layout to a real use case such as warehouse, manufacturing, robotics, or healthcare." },
      ]}
      sections={[
        {
          kicker: "Infrastructure",
          title: "Designed for practical facility layouts.",
          body: "Anchors are not decorative hardware. They determine coverage quality, installation complexity, and long-term scalability.",
          items: [
            { meta: "ChainPoE", title: "Daisy-chain anchor runs", description: "Reduce switch ports and cable home-runs by chaining anchors across ceiling or wall paths." },
            { meta: "PoE", title: "Clean power model", description: "Power anchors over Ethernet with fewer local power drops and cleaner installation work." },
            { meta: "Local", title: "Data stays on site", description: "Anchor traffic and positioning data stay on your local network." },
            { meta: "Budget", title: "Public pricing", description: "Buyers can estimate infrastructure cost before starting a sales process." },
          ],
        },
        {
          kicker: "ChainPoE",
          title: "Installation savings are part of the product.",
          body: "The SEO brief calls out ChainPoE as a concrete differentiator because it changes the deployment bill of materials, not just the spec sheet.",
          table: {
            headers: ["Deployment", "Standard PoE", "ChainPoE"],
            rows: [
              ["12 anchors", "12 switch ports", "1 to 2 switch ports"],
              ["24 anchors", "24 switch ports", "2 to 4 switch ports"],
              ["48 anchors", "48 switch ports", "4 to 8 switch ports"],
              ["Cable model", "Home-run to each anchor", "Daisy-chained between anchors"],
              ["Install effort", "More terminations", "Fewer terminations"],
            ],
          },
          links: [
            { label: "Read ChainPoE guide", href: "/articles/chainpoe" },
            { label: "Installation cost guide", href: "/pricing#chainpoe-savings" },
          ],
          dark: true,
        },
        {
          kicker: "Planning",
          title: "Answer infrastructure questions before purchase.",
          body: "Buyers comparing UWB RTLS vendors need anchor count, placement, network requirements, and commissioning clarity.",
          items: [
            { title: "Anchor placement", description: "Coverage area, obstructions, ceiling height, and 2D vs 3D positioning decisions." },
            { title: "Network requirements", description: "Switch specs, PoE budget, VLAN planning, and bandwidth expectations." },
            { title: "Obstructions", description: "How metal, concrete, machinery, and environment affect UWB propagation." },
            { title: "Commissioning", description: "A step-by-step handoff from physical install to operational location data." },
          ],
          links: [
            { label: "Deployment planning hub", href: "/rtls-deployment-planning" },
            { label: "Network requirements", href: "/rtls-deployment-planning/uwb-network-requirements" },
          ],
        },
      ]}
      related={[
        { title: "Tags", description: "Mobile UWB tags for assets, personnel, vehicles, and devices.", href: "/tags" },
        { title: "Software", description: "Local RTLS software with no recurring CUWB software fees.", href: "/software" },
        { title: "Accessories", description: "Mounts, cables, kits, and deployment hardware.", href: "/accessories" },
      ]}
    />
  );
}
