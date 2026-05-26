import type { Metadata } from "next";
import ProductPage from "../components/ProductPage";

export const metadata: Metadata = {
  title: "UWB Tags | CUWB RTLS Asset and Personnel Tags",
  description:
    "CUWB UWB tags with multiple options, high update rates, and public pricing. Track assets, equipment, personnel, vehicles, and devices with precision.",
};

export default function TagsPage() {
  return (
    <ProductPage
      eyebrow="Products / Tags"
      title="Tags tuned to the motion you need to measure."
      description="CUWB tags track assets, personnel, vehicles, equipment, robots, and high-speed objects with update rates matched to the job, from low-power inventory visibility to fast engineering data."
      primaryCta={{ label: "Estimate Tag Count", href: "/rtls-deployment-planning/estimate-tag-count-and-rate" }}
      secondaryCta={{ label: "View Tag Pricing", href: "/pricing#hardware-pricing" }}
      heroFacts={[
        { title: "Rate", description: "0.1 Hz to 100 Hz" },
        { title: "Assets", description: "Tools, carts, pallets, fixtures" },
        { title: "People", description: "Badges and personnel tags" },
        { title: "Vehicles", description: "Forklifts, AGVs, equipment" },
        { title: "Battery", description: "Use-case dependent" },
      ]}
      decisionPoints={[
        { title: "Object type", description: "Asset, person, vehicle, robot, tool, or embedded device." },
        { title: "Motion speed", description: "Slow inventory and high-speed robotics need different update rates." },
        { title: "Battery budget", description: "Update rate, report mode, and form factor all affect runtime." },
        { title: "Mounting reality", description: "Tag choice depends on lanyards, adhesive mounts, screws, enclosures, or powered vehicles." },
      ]}
      sections={[
        {
          kicker: "Tag fit",
          title: "Choose by workflow, not by SKU.",
          body: "The SEO audit highlights tags as a product line because buyers search by use case: asset tracking tags, personnel tags, vehicle tags, and high-update-rate tags.",
          items: [
            { meta: "Asset", title: "Standard asset tags", description: "General tracking for pallets, carts, fixtures, tools, and equipment." },
            { meta: "Motion", title: "High-speed tags", description: "Higher update rates for robotics, athlete tracking, R&D, and motion capture." },
            { meta: "People", title: "Personnel badges", description: "Worker visibility, mustering, zone presence, and healthcare or mining workflows." },
            { meta: "Vehicle", title: "Vehicle tags", description: "Forklifts, AGVs, carts, and powered equipment with more stable power options." },
          ],
        },
        {
          kicker: "Performance",
          title: "Update rate changes the application.",
          body: "Higher is not automatically better. The right rate depends on what the buyer needs to see and how long the tag needs to run.",
          table: {
            headers: ["Use case", "Typical rate", "Buyer concern"],
            rows: [
              ["Asset locating", "0.1 to 1 Hz", "Battery life and coverage"],
              ["Forklift tracking", "1 to 5 Hz", "Utilization and safety zones"],
              ["WIP tracking", "0.5 to 2 Hz", "Workflow visibility"],
              ["Robotics and AGV", "10 to 100 Hz", "Low latency position input"],
              ["Sports and motion", "10 to 100 Hz", "Fast movement capture"],
            ],
          },
          dark: true,
        },
        {
          kicker: "Selection guide",
          title: "Make the tag decision explicit.",
          body: "A strong tag page helps buyers avoid overbuying, under-specifying, or using one tag type for every job.",
          items: [
            { title: "What are you tracking?", description: "Assets, people, powered vehicles, and small tools each need different mounting and runtime assumptions." },
            { title: "How fast does it move?", description: "Slow-moving equipment and fast robots sit at different points in the update-rate range." },
            { title: "Where will it live?", description: "Clean indoor, dusty, wet, impact-prone, and outdoor environments change enclosure needs." },
            { title: "How many do you need?", description: "Count operational assets, spares, replacements, and expansion capacity before purchase." },
          ],
          links: [
            { label: "Tag count and rate guide", href: "/rtls-deployment-planning/estimate-tag-count-and-rate" },
            { label: "RTLS cost guide", href: "/pricing" },
          ],
        },
      ]}
      related={[
        { title: "Anchors", description: "Fixed-position UWB infrastructure with ChainPoE support.", href: "/anchors" },
        { title: "Software", description: "Local RTLS software and API access for tag data.", href: "/software" },
        { title: "Accessories", description: "Mounts, enclosures, cables, and kits.", href: "/accessories" },
      ]}
    />
  );
}
