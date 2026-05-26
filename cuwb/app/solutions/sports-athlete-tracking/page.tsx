import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Sports & Athlete Tracking With UWB | CUWB",
  description:
    "High-speed UWB athlete and player tracking for sports teams, venues, and performance analysis. Low latency, high update rates, and precise movement data.",
};

export default function SportsAthleteTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Sports"
      title="Sports & Athlete Tracking"
      description="High-frequency UWB position data for athlete tracking, sports performance analysis, and live venue experiences. Low latency, high update rates, local data."
      primaryCta={{ label: "Talk to an Engineer", href: "/contact" }}
      secondaryCta={{ label: "View High-Speed Tags", href: "/tags" }}
      heroFacts={[
        { title: "Accuracy", description: "Sub-centimeter (< 5 cm typical)" },
        { title: "Update rate", description: "Up to 100 Hz" },
        { title: "Latency", description: "< 10 ms typical" },
        { title: "Coverage", description: "Indoor & outdoor fields" },
        { title: "Multi-player", description: "30+ athletes simultaneously" },
      ]}
      decisionPoints={[
        { title: "Precision requirements", description: "Sub-centimeter accuracy captures fine movement details — not just general zone location." },
        { title: "Update rate & latency", description: "Up to 100 Hz and less than 20 ms latency for live broadcast, closed-loop feedback, and biomechanics." },
        { title: "Integration path", description: "REST API and UDP streaming for analytics platforms, broadcast systems, and custom apps." },
        { title: "Indoor & outdoor", description: "Works in arenas, stadiums, training facilities, and open fields regardless of weather." },
      ]}
      sections={[
        {
          kicker: "Why UWB",
          title: "Why UWB for sports and athlete tracking.",
          body: "Camera systems require line of sight and struggle with occlusion and low-light conditions. GPS doesn't work indoors. UWB provides consistent precision regardless of lighting, occlusion, or weather — at update rates camera systems can't match.",
          items: [
            { title: "Sub-centimeter accuracy", description: "Precision that captures fine movement details — not just general zone location." },
            { title: "Up to 100 Hz update rate", description: "High-frequency data for detailed motion analysis and smooth real-time visualization." },
            { title: "Low latency", description: "< 10 ms positioning delay suitable for live applications and closed-loop feedback." },
            { title: "Indoor & outdoor", description: "Works in arenas, stadiums, training facilities, and open fields regardless of weather." },
            { title: "No occlusion issues", description: "Unlike cameras, UWB works when players block each other's line of sight." },
            { title: "Local data operation", description: "All data stays on your infrastructure — no cloud dependency for real-time operations." },
          ],
        },
        {
          kicker: "Use Cases",
          title: "How sports teams use UWB tracking.",
          body: "From elite training programs to broadcast production, UWB delivers the positional data that powers performance insight and fan engagement.",
          items: [
            { title: "Athlete Performance Tracking", description: "Capture speed, acceleration, distance covered, and positional data for training and game analysis." },
            { title: "Player Load Monitoring", description: "Quantify workload, sprint counts, high-intensity distances, and fatigue indicators to optimize training." },
            { title: "Tactical Analysis & Visualization", description: "Replay player movements, analyze formations, evaluate spacing, and provide visual coaching feedback." },
            { title: "Broadcast Graphics Integration", description: "Feed real-time position data into broadcast graphics systems for on-air player tracking and stats overlays." },
            { title: "Fan Engagement & Live Experiences", description: "Power interactive apps, live stats displays, in-venue experiences, and second-screen content." },
            { title: "Referee & Ball Tracking", description: "Extend tracking beyond athletes to officials, balls, and other tracked objects in the playing area." },
          ],
        },
        {
          kicker: "Specifications",
          title: "Technical specifications for sports deployments.",
          body: "CUWB high-speed tags and anchors are designed for demanding motion-capture environments where data quality directly affects analysis validity.",
          dark: true,
          table: [
            ["Accuracy", "Sub-centimeter (typical < 5 cm in open-field conditions)"],
            ["Update rate", "Up to 100 Hz (configurable per tag)"],
            ["Latency", "< 10 ms typical"],
            ["Tag form factor", "Lightweight wearable tags; vests, belts, or custom mounting options"],
            ["Coverage", "Full field, court, arena, or venue — indoor and outdoor"],
            ["Multi-player", "Track 30+ athletes simultaneously in the same space"],
            ["Output format", "REST API (JSON), UDP streaming available"],
            ["Data operation", "Fully local — no cloud dependency"],
          ],
        },
      ]}
      faqs={[
        { q: "What update rate do I need for sports tracking?", a: "For most sports performance applications, 10–20 Hz provides excellent data. For detailed biomechanics, motion capture validation, or broadcast-quality graphics, 50–100 Hz may be preferred. CUWB supports configurable rates up to 100 Hz." },
        { q: "Does UWB work outdoors on sports fields?", a: "Yes. UWB works both indoors and outdoors. Outdoor sports fields typically have excellent UWB coverage due to open sight lines between tags and anchors. Weather (rain, snow) has minimal impact on UWB signal propagation at short ranges." },
        { q: "How many athletes can I track simultaneously?", a: "CUWB scales to track dozens of tags simultaneously in the same space. Each athlete's position is calculated independently. The system handles multi-player scenarios common in team sports without degradation." },
        { q: "Can I integrate UWB data with broadcast graphics?", a: "Yes. CUWB serves real-time position data via REST API and UDP streaming. Broadcast graphics systems, video overlay tools, and stats platforms can consume this data for on-air visualization, real-time statistics, and replay enhancement." },
        { q: "How does UWB compare to optical / camera-based sports tracking?", a: "Camera-based systems provide rich visual context but require line of sight, are affected by occlusion, and struggle in low-light conditions. UWB provides consistent precision regardless of lighting or occlusion, works in any weather, and delivers lower latency. Many elite programs use both technologies complementarily." },
      ]}
      whyCUWB={{
        title: "Built for sports teams that need precise, fast movement data.",
        body: "CUWB is engineered for demanding motion-capture environments where data quality, latency, and local control matter.",
        bullets: [
          { title: "100 Hz capable", text: "Highest update rates for demanding motion capture and closed-loop feedback" },
          { title: "Sub-centimeter accuracy", text: "Precise enough for biomechanics, tactical analysis, and broadcast graphics" },
          { title: "$0 recurring software fees", text: "No per-player subscription costs that scale with your roster" },
          { title: "Local operation", text: "Keep sensitive performance data on your own infrastructure" },
          { title: "API & UDP streaming", text: "Integrate with analytics platforms, broadcast systems, and custom apps" },
          { title: "Custom engineering", text: "Specialized wearable form factors available through Ciholas" },
        ],
        links: [{ label: "Accuracy & Precision Explained", href: "/articles/accuracyprecision" }],
      }}
      related={[
        { label: "Product", title: "High-Speed Tags", href: "/tags" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
        { label: "Guide", title: "UWB RTLS Guide", href: "/learn/uwb-rtls" },
        { label: "Product", title: "Software & APIs", href: "/software" },
        { label: "Article", title: "Accuracy & Precision Explained", href: "/articles/accuracyprecision" },
        { label: "Custom", title: "Custom UWB Engineering", href: "/custom-uwb" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
      ]}
      ctaTitle="Evaluate UWB for your sports application."
      ctaBody="Discuss requirements, review technical specifications, or talk to our engineering team."
      ctaButtons={[
        { label: "Talk to an Engineer", href: "/contact", primary: true },
        { label: "View High-Speed Tags", href: "/tags" },
        { label: "Accuracy & Precision", href: "/articles/accuracyprecision" },
      ]}
    />
  );
}
