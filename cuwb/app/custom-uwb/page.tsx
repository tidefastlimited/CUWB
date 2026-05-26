import type { Metadata } from "next";
import ProductPage from "../components/ProductPage";

export const metadata: Metadata = {
  title: "Custom UWB Engineering | Private Label, Firmware, and Hardware | CUWB",
  description:
    "Ciholas custom UWB engineering services: private-label hardware, custom firmware, enclosures, and UWB product development for OEMs and integrators.",
};

export default function CustomUWBPage() {
  return (
    <ProductPage
      eyebrow="Products / Custom UWB"
      title="Custom UWB work for teams that need more than a kit."
      description="Ciholas brings RF, embedded, mechanical, firmware, and manufacturing depth to private-label UWB, custom hardware, firmware changes, and UWB product development."
      primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
      secondaryCta={{ label: "CUWB Advantage", href: "/cuwb-advantage" }}
      heroFacts={[
        { title: "RF", description: "UWB radio engineering" },
        { title: "Firmware", description: "Embedded behavior changes" },
        { title: "Hardware", description: "Enclosures and form factors" },
        { title: "OEM", description: "Private-label programs" },
        { title: "Support", description: "Engineering-led engagement" },
      ]}
      decisionPoints={[
        { title: "Build or buy", description: "OEMs and integrators need to decide when custom UWB is faster than internal development." },
        { title: "Engineering access", description: "Custom projects need direct RF, firmware, mechanical, and software expertise." },
        { title: "Productization", description: "Private-label and custom hardware need manufacturing, QA, and support paths." },
        { title: "Fit boundary", description: "The page should clarify who needs custom work and who should use standard CUWB products." },
      ]}
      sections={[
        {
          kicker: "Services",
          title: "Four practical ways to work with Ciholas.",
          body: "The SEO brief identifies systems integrators, OEMs, and technical partners as a distinct buyer segment. This page speaks directly to them.",
          items: [
            { meta: "Private label", title: "White-label CUWB systems", description: "Bring CUWB hardware and software into your own product or service line." },
            { meta: "Firmware", title: "Custom device behavior", description: "Modify reporting modes, protocols, data formats, or power behavior." },
            { meta: "Hardware", title: "Custom physical design", description: "Adapt enclosures, connectors, antenna configuration, mounting, and environmental hardening." },
            { meta: "Product", title: "UWB product development", description: "Move from concept through prototype, validation, certification support, and production." },
          ],
        },
        {
          kicker: "Engineering depth",
          title: "Ciholas is vertically integrated.",
          body: "The strongest custom UWB message is engineering credibility: not reselling modules, but designing, manufacturing, and supporting UWB systems.",
          table: {
            headers: ["Capability", "What it enables", "Buyer value"],
            rows: [
              ["RF engineering", "UWB radio and antenna optimization", "Better fit for unusual environments"],
              ["Embedded systems", "Firmware and device behavior", "Application-specific operation"],
              ["Mechanical design", "Enclosures and mounting", "Product-ready hardware"],
              ["Manufacturing", "Production and quality control", "Repeatable supply"],
              ["Software and API", "Local data and integration", "Complete RTLS solution"],
            ],
          },
          dark: true,
        },
        {
          kicker: "Fit guide",
          title: "Custom work should have a clear reason.",
          body: "This keeps the positioning credible and helps standard-product buyers route themselves correctly.",
          items: [
            { title: "Systems integrators", description: "Need private-label or white-label UWB under their own customer relationship." },
            { title: "OEMs", description: "Need UWB embedded into an existing product, enclosure, or workflow." },
            { title: "Technical partners", description: "Need API, firmware, or feature behavior that standard products do not cover." },
            { title: "Special environments", description: "Need ruggedized hardware, alternate antennas, custom connectors, or non-standard form factors." },
          ],
          links: [
            { label: "Talk to engineering", href: "/contact" },
            { label: "View standard products", href: "/anchors" },
          ],
        },
      ]}
      related={[
        { title: "Software", description: "Local APIs and RTLS data integration.", href: "/software" },
        { title: "Anchors", description: "UWB infrastructure and ChainPoE hardware.", href: "/anchors" },
        { title: "Tags", description: "UWB tag form factors and update rates.", href: "/tags" },
      ]}
    />
  );
}
