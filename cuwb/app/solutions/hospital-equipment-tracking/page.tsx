import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Hospital Equipment Tracking With UWB RTLS | CUWB",
  description:
    "Track medical equipment, wheelchairs, IV pumps, and high-value hospital assets with UWB RTLS. Local data operation, no recurring software fees, HIPAA-friendly architecture.",
};

export default function HospitalEquipmentTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Healthcare"
      title="Hospital Equipment Tracking"
      description="Find mobile medical equipment faster. Improve utilization. Reduce rentals and replacement purchases. UWB RTLS with local data and no recurring software fees."
      primaryCta={{ label: "Estimate RTLS Cost", href: "/pricing" }}
      secondaryCta={{ label: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls" }}
      heroFacts={[
        { title: "Accuracy", description: "< 30 cm, room-level" },
        { title: "Privacy", description: "HIPAA-friendly local architecture" },
        { title: "Software", description: "No recurring fees" },
        { title: "Interference", description: "Safe near medical devices" },
        { title: "Integration", description: "REST API for CMMS / Biomed" },
      ]}
      decisionPoints={[
        { title: "Equipment findability", description: "Sub-30 cm accuracy resolves equipment to the room and bedside level — not just the wing or floor." },
        { title: "Data locality & HIPAA", description: "All positioning runs locally on your infrastructure. Patient-adjacent data never leaves your facility." },
        { title: "Cost structure", description: "No per-tag subscription costs that compound annually. Avoid the $30K–$120K in fees typical over a 5-year deployment." },
        { title: "Integration fit", description: "REST API connects location data to CMMS, biomedical management systems, and custom clinical dashboards." },
      ]}
      sections={[
        {
          kicker: "The Problem",
          title: "Nurses spend too much time searching for equipment.",
          body: "Clinical staff lose significant productive time searching for mobile medical equipment. Wheelchairs disappear into patient rooms. IV pumps accumulate in stockrooms. Patient monitors get moved between units without documentation. The consequences compound: delayed patient care, increased rental costs, redundant purchases, and frustrated clinical staff.",
          items: [
            { title: "Wheelchairs & Stretchers", description: "Patient transport equipment that frequently moves between departments and gets left in hallways or rooms." },
            { title: "IV Pumps & Infusion Devices", description: "High-utilization mobile devices that are often hoarded in stockrooms or hidden on units." },
            { title: "Patient Monitors", description: "Portable telemetry and monitoring equipment needed across multiple care areas." },
            { title: "Portable Imaging", description: "Mobile X-ray, ultrasound, and point-of-care imaging devices." },
            { title: "Biomedical Devices", description: "Specialized diagnostic and therapeutic equipment with high replacement cost." },
            { title: "Infusion Therapy Equipment", description: "Specialty pumps and accessories that cycle between pharmacy, nursing units, and storage." },
          ],
        },
        {
          kicker: "Why UWB",
          title: "Why UWB RTLS fits hospital environments.",
          body: "UWB provides the precision and safety profile needed in clinical settings, with a local architecture that keeps patient-adjacent data under your control.",
          items: [
            { title: "Room & sub-room accuracy", description: "Know exactly which room an IV pump is in — not just which wing. Sub-30 cm positioning resolves equipment to the bedside level." },
            { title: "No interference with medical devices", description: "UWB operates at ultra-low power levels and does not interfere with patient monitors, imaging equipment, or wireless medical telemetry." },
            { title: "Local data operation", description: "All positioning happens on your servers. Patient-adjacent location data stays inside your facility. Supports HIPAA-compliant architectures." },
            { title: "No recurring software fees", description: "Avoid per-tag subscription costs that compound annually. Pay for hardware once; run indefinitely." },
            { title: "Real-time availability", description: "See which assets are available, in-use, or idle right now — not where they were last scanned during a quarterly count." },
            { title: "API-driven integration", description: "Feed location data into CMMS, biomedical management systems, or custom clinical dashboards via REST API." },
          ],
        },
        {
          kicker: "Privacy & Data Locality",
          title: "Your data stays on your infrastructure.",
          body: "CUWB runs entirely locally. Position computation happens on your server or VM. Your location data — including any patient-adjacent or staff location information — never leaves your facility unless you explicitly configure external data flows. This architecture supports HIPAA compliance, GDPR requirements, and institutional IT security policies.",
          dark: true,
          links: [
            { label: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls" },
          ],
          table: [
            ["Data processing", "On your local server or VM — no external services required"],
            ["Data egress", "None by default — all position data stays on your network"],
            ["HIPAA architecture", "Local-first design supports compliance with patient-adjacent data policies"],
            ["GDPR fit", "No data leaves your jurisdiction without explicit configuration"],
            ["IT security", "No cloud dependency, no external API keys, no vendor data access"],
            ["Connectivity", "Fully operational without internet — suitable for isolated clinical networks"],
          ],
        },
        {
          kicker: "Deployment Example",
          title: "Sample hospital deployment configuration.",
          body: "A multi-floor acute-care hospital tracking 200–400 assets across 4 floors with room and sub-room level accuracy, fully local operation, and REST API integration to CMMS.",
          links: [{ label: "Read the Hospital Case Study", href: "/case-studies/medical-equipment-tracking-local-rtls" }],
          table: [
            ["Environment", "Multi-floor acute-care hospital"],
            ["Coverage area", "~150,000 sq ft across 4 floors"],
            ["Anchor count", "32–48 UWB anchors (varies by floor plan)"],
            ["Tag count", "200–400 asset tags"],
            ["Tag types", "Standard asset tags for equipment; wearable tags available for staff"],
            ["Update rate", "1–5 Hz configurable per tag"],
            ["Accuracy target", "< 30 cm (room and sub-room level)"],
            ["Integration", "REST API → CMMS / Biomed dashboard / Custom portal"],
            ["Data operation", "Fully local — no cloud dependency"],
          ],
        },
      ]}
      fitCheck={{
        bestTitle: "CUWB is best for hospitals that need:",
        notBestTitle: "May not be the right fit when:",
        bestFor: [
          { group: "Biomedical engineering teams", desc: "that need to locate equipment quickly for maintenance and utilization analysis." },
          { group: "Hospitals with local IT policies", desc: "requiring patient data to stay on-premises rather than in cloud systems." },
          { group: "Cost-conscious facilities", desc: "looking to reduce rental costs and duplicate purchases through better visibility." },
          { group: "Privacy-sensitive organizations", desc: "needing HIPAA-compatible architecture with data locality controls." },
          { group: "Technical hospital IT teams", desc: "that want API access to integrate location data into existing clinical workflows." },
        ],
        notBestFor: [
          { group: "Teams wanting a full healthcare RTLS platform", desc: "with built-in nurse call integration, staff duress badges, infant protection, and vendor-managed software." },
          { group: "Small clinics with minimal assets", desc: "where manual inventory processes are sufficient and ROI justification is difficult." },
          { group: "Organizations requiring BLE-based badge features", desc: "like staff messaging screens, buzzers, or NFC check-in — CUWB is UWB-focused." },
        ],
      }}
      faqs={[
        { q: "Is UWB safe for use around medical equipment?", a: "UWB operates at very low power levels (typically below -41 dBm/MHz) and uses ultra-wideband pulses that do not interfere with medical devices, Wi-Fi networks, or cellular systems. UWB has been used in hospitals and clinical environments without reported interference issues." },
        { q: "Does CUWB comply with HIPAA requirements?", a: "CUWB runs entirely locally on your infrastructure. Location data never leaves your facility unless you explicitly configure it to do so. This local-first architecture supports HIPAA compliance by keeping patient-adjacent location data under your organization's direct control." },
        { q: "How accurate is UWB for room-level tracking?", a: "UWB provides sub-30 cm accuracy in typical hospital environments, which means it can reliably determine which room an asset occupies, its position within that room, and even which side of a hallway it is on. This exceeds the zone-level accuracy of most BLE RTLS systems." },
        { q: "Can we track both equipment and personnel?", a: "Yes. CUWB supports multiple tag types including asset tags and wearable tags. However, CUWB's strength is in precise location data delivery via API rather than pre-built healthcare workflow software. For full staff safety and nurse-call integration, evaluate whether your team can build those workflows on top of CUWB's location data." },
        { q: "How does CUWB compare to CenTrak, Midmark, or Kontakt.io for healthcare?", a: "Healthcare-focused RTLS vendors offer broader workflow software and deeper healthcare ecosystem integration. CUWB differentiates through higher precision, no recurring software fees, local data operation, and transparent hardware pricing. CUWB is ideal when precision, cost control, and data locality matter more than a turnkey healthcare platform." },
      ]}
      whyCUWB={{
        title: "Built for technical healthcare teams who want control.",
        body: "CUWB provides high-precision location data with local operation, transparent pricing, and no recurring software fees.",
        bullets: [
          { title: "Sub-30 cm accuracy", text: "Room and sub-room level equipment locating" },
          { title: "HIPAA-friendly local architecture", text: "Data stays on your infrastructure" },
          { title: "$0 recurring software fees", text: "Avoid compounding subscription costs" },
          { title: "No medical device interference", text: "UWB operates safely alongside clinical equipment" },
          { title: "REST API integration", text: "Connect to CMMS, biomed systems, or custom dashboards" },
          { title: "Published hardware pricing", text: "Evaluate ROI before talking to sales" },
        ],
        links: [{ label: "Explore the CUWB Advantage", href: "/cuwb-advantage" }],
      }}
      related={[
        { label: "Guide", title: "Indoor Asset Tracking Guide", href: "/learn/indoor-asset-tracking" },
        { label: "Product", title: "Tags", href: "/tags" },
        { label: "Product", title: "Anchors", href: "/anchors" },
        { label: "Product", title: "Software & APIs", href: "/software" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Comparison", title: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls" },
        { label: "Proof", title: "Hospital Case Study", href: "/case-studies/medical-equipment-tracking-local-rtls" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
      ]}
      ctaTitle="Evaluate CUWB for your hospital."
      ctaBody="Review deployment requirements, estimate costs, or talk to our engineering team about your facility's needs."
      ctaButtons={[
        { label: "Estimate RTLS Cost", href: "/pricing", primary: true },
        { label: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls" },
        { label: "Talk to an Engineer", href: "/contact" },
      ]}
    />
  );
}
