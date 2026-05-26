import type { Metadata } from "next";
import ProductPage from "../components/ProductPage";

export const metadata: Metadata = {
  title: "RTLS Accessories | Mounts, Kits, and Deployment Hardware | CUWB",
  description:
    "Complete a CUWB RTLS deployment with mounts, brackets, cables, kits, and accessories. Public pricing and bill-of-materials visibility.",
};

export default function AccessoriesPage() {
  return (
    <ProductPage
      eyebrow="Products / Accessories"
      title="The bill of materials should not be hidden."
      description="CUWB accessories turn anchors, tags, and software into a complete deployable RTLS system: mounts, enclosures, cables, kits, ChainPoE components, and practical hardware planning."
      primaryCta={{ label: "Deployment Planning Hub", href: "/rtls-deployment-planning" }}
      secondaryCta={{ label: "Installation Cost Guide", href: "/pricing#chainpoe-savings" }}
      heroFacts={[
        { title: "Mounts", description: "Anchor and tag mounting" },
        { title: "Kits", description: "Evaluation and deployment bundles" },
        { title: "Cabling", description: "PoE and ChainPoE paths" },
        { title: "Pricing", description: "Public BOM visibility" },
        { title: "Planning", description: "Full deployment requirements" },
      ]}
      decisionPoints={[
        { title: "Complete cost", description: "Buyers need anchors, tags, mounts, networking, server resources, and spares in one view." },
        { title: "Physical install", description: "Ceilings, walls, vehicles, badges, and assets need different mounting hardware." },
        { title: "ChainPoE path", description: "Accessories can reduce cabling and switch requirements when planned correctly." },
        { title: "Deployment readiness", description: "A good accessories page helps buyers avoid missing pieces in the purchase order." },
      ]}
      sections={[
        {
          kicker: "Categories",
          title: "Everything around the core RTLS hardware.",
          body: "The SEO audit identifies accessories as an opportunity for bill-of-materials content, not just a product shelf.",
          items: [
            { meta: "Anchor", title: "Anchor mounts", description: "Ceiling mounts, wall brackets, structure clamps, and drop-ceiling hardware." },
            { meta: "Tag", title: "Tag mounts and enclosures", description: "Adhesive, screw-mount, clip-on, lanyard, magnetic, and ruggedized options." },
            { meta: "Network", title: "Cabling and PoE", description: "Ethernet cable, PoE injectors, switch planning, and ChainPoE components." },
            { meta: "Kit", title: "Starter and deployment kits", description: "Bundled hardware for evaluation, small areas, and larger facility rollouts." },
          ],
        },
        {
          kicker: "BOM",
          title: "A deployment is more than anchors and tags.",
          body: "Buyers evaluating RTLS cost need a full deployment view before purchase.",
          table: {
            headers: ["Deployment item", "Why it matters", "Planning page"],
            rows: [
              ["Anchors", "Coverage and positioning quality", "Anchor placement"],
              ["Tags", "Tracked assets, personnel, and vehicles", "Tag count and rate"],
              ["Mounts", "Physical stability and repeatability", "Deployment planning"],
              ["Network", "PoE budget, VLANs, bandwidth", "Network requirements"],
              ["Software host", "Local positioning and API access", "Software"],
              ["Spares", "Expansion and maintenance buffer", "RTLS cost"],
            ],
          },
          dark: true,
        },
        {
          kicker: "Installation",
          title: "Accessories can change installation economics.",
          body: "ChainPoE is not only an anchor feature. It shapes the accessory list, cabling plan, and labor estimate.",
          items: [
            { title: "Fewer switch ports", description: "Daisy-chain anchor runs to avoid one switch port per anchor." },
            { title: "Shorter cable paths", description: "Use inter-anchor cabling after the first powered anchor in a chain." },
            { title: "Cleaner mounting", description: "Match mounts and enclosures to the physical asset or facility surface." },
            { title: "Faster commissioning", description: "Fewer termination points make installation and troubleshooting simpler." },
          ],
          links: [
            { label: "ChainPoE guide", href: "/articles/chainpoe" },
            { label: "RTLS cost guide", href: "/pricing" },
          ],
        },
      ]}
      related={[
        { title: "Anchors", description: "UWB infrastructure with ChainPoE support.", href: "/anchors" },
        { title: "Tags", description: "Multiple form factors and update rates.", href: "/tags" },
        { title: "Software", description: "Local RTLS software with no recurring fees.", href: "/software" },
      ]}
    />
  );
}
