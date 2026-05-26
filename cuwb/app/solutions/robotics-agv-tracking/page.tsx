import type { Metadata } from "next";
import SolutionPage from "../../components/SolutionPage";

export const metadata: Metadata = {
  title: "Robotics & AGV Localization With UWB | CUWB",
  description:
    "High-speed, high-precision UWB localization for robotics, AGVs, and autonomous systems. Low latency, high update rates, and full API access for navigation and control.",
};

export default function RoboticsAGVTrackingPage() {
  return (
    <SolutionPage
      eyebrow="Solutions / Robotics"
      title="Robotics & AGV Localization"
      description="High-frequency UWB position data for robotics, AGVs, autonomous vehicles, and research applications. Centimeter precision, less than 20 ms latency, local data output."
      primaryCta={{ label: "Talk to an Engineer", href: "/contact" }}
      secondaryCta={{ label: "API Integration Guide", href: "/rtls-api-integration" }}
      heroFacts={[
        { title: "Accuracy", description: "Centimeter-level (< 5 cm typical)" },
        { title: "Latency", description: "< 10 ms typical" },
        { title: "Update rate", description: "Up to 100 Hz" },
        { title: "Output", description: "REST API + UDP streaming" },
        { title: "Dimensions", description: "2D and 3D support" },
      ]}
      decisionPoints={[
        { title: "Closed-loop control", description: "Sub-10ms latency and configurable up to 100 Hz — fast enough for real-time robot control loops." },
        { title: "GPS-denied environments", description: "Works indoors, underground, and anywhere GPS signals cannot reach. No line-of-sight required." },
        { title: "Integration depth", description: "REST API and UDP streaming designed for ROS, custom stacks, and motion controllers." },
        { title: "SLAM complement", description: "Use UWB as an absolute position reference to correct SLAM drift and initialize on startup." },
      ]}
      sections={[
        {
          kicker: "Why UWB",
          title: "Why UWB for robotics and AGV localization.",
          body: "GPS doesn't work indoors. SLAM drifts without external reference. UWB provides the centimeter-level accuracy, low latency, and high update rates that autonomous systems need in GPS-denied environments.",
          items: [
            { title: "Centimeter-level precision", description: "Position accuracy that enables precise docking, pick-and-place, and path following." },
            { title: "Sub-10ms latency", description: "Fast enough for real-time control loops and closed-loop feedback." },
            { title: "Up to 100 Hz update rate", description: "High-frequency position data for fast-moving robots and dynamic applications." },
            { title: "No GPS required", description: "Works indoors, underground, and anywhere GPS signals cannot reach." },
            { title: "Local data output", description: "Position data served from your local server — no cloud dependency, no internet needed." },
            { title: "Full API access", description: "REST API and UDP streaming for integration with ROS, custom stacks, and controllers." },
          ],
        },
        {
          kicker: "Applications",
          title: "Robotics and AGV applications.",
          body: "UWB localization is used across research, production, and autonomous vehicle programs where standard positioning infrastructure falls short.",
          items: [
            { title: "AGV Navigation & Fleet Management", description: "Provide absolute position data for automated guided vehicles. Supplement or replace SLAM with external reference positioning." },
            { title: "Robot Localization in GPS-Denied Environments", description: "Indoor warehouses, tunnels, and covered facilities where GPS is unavailable. UWB provides centimeter-level absolute position." },
            { title: "Multi-Robot Coordination", description: "Track multiple robots in shared spaces. Enable collision avoidance, formation control, and task coordination." },
            { title: "Motion Capture & Validation", description: "Validate robot kinematics, measure trajectory accuracy, and capture motion data for simulation and analysis." },
            { title: "Research & Development", description: "High-frequency position data for robotics research, algorithm development, and system prototyping." },
            { title: "Autonomous Vehicle Guidance", description: "External reference positioning for mobile platforms that require absolute location alongside onboard sensing." },
          ],
        },
        {
          kicker: "Specifications",
          title: "Technical specifications for robotics integration.",
          body: "CUWB high-speed tags and anchors are engineered for demanding motion environments where latency and update rate directly affect system performance.",
          dark: true,
          links: [{ label: "Accuracy & Precision Explained", href: "/articles/accuracyprecision" }],
          table: [
            ["Accuracy", "Centimeter-level (configurable; < 5 cm typical in good conditions)"],
            ["Latency", "< 10 ms (typical); lower depending on configuration"],
            ["Update rate", "Up to 100 Hz with supported tag types"],
            ["Output format", "REST API (JSON), UDP streaming available"],
            ["Dimensions", "2D (x, y) and 3D (x, y, z) support"],
            ["Coordinate system", "Configurable origin and orientation"],
            ["Multi-robot", "Hundreds of tags simultaneously, independent calculations"],
            ["Data operation", "Fully local — no cloud dependency, no internet required"],
          ],
        },
        {
          kicker: "Integration",
          title: "How to integrate UWB into your robotics stack.",
          body: "Integration follows four steps from anchor installation to consuming real-time position data in your control loop.",
          links: [{ label: "API Integration Guide", href: "/rtls-api-integration" }],
          steps: [
            { title: "Install anchors", body: "Mount anchors in the operational area where robots will navigate. Anchor placement determines coverage area and accuracy." },
            { title: "Mount a UWB tag", body: "Attach a high-speed tag to each robot. Tags support up to 100 Hz update rates and connect via serial or USB to the robot's onboard computer." },
            { title: "Consume position data", body: "Pull x, y, z coordinates via REST API or UDP stream. Feed directly into your motion planner, state estimator, or control loop." },
            { title: "Use locally", body: "All computation happens on your server — no cloud dependency, no internet requirement, no per-robot subscription fees." },
          ],
        },
      ]}
      faqs={[
        { q: "What update rate can I get for robotics applications?", a: "CUWB supports update rates up to 100 Hz with high-speed tag types. The actual achievable rate depends on the number of tags in the system, anchor density, and configured mode. For most robotics applications, 10–50 Hz provides excellent performance." },
        { q: "Can UWB replace SLAM for robot navigation?", a: "UWB provides absolute position references that complement SLAM. Many teams use UWB as an external ground truth to correct SLAM drift, initialize position on startup, or provide fallback when visual features are poor. UWB does not require line of sight to every anchor — it works well with partial occlusion." },
        { q: "How do I integrate UWB data into my robot's control loop?", a: "CUWB serves position data via REST API and optional UDP streaming. Your robot's onboard computer can consume position updates at your configured rate and feed them into your motion planner, controller, or state estimator. Latency is typically less than 20 ms, making it suitable for closed-loop control." },
        { q: "Does UWB work with multi-robot systems?", a: "Yes. CUWB scales to hundreds of tags simultaneously. Each robot gets its own independent position calculation. You can track multiple robots in the same space and use the combined position data for fleet management, collision avoidance, and task coordination." },
      ]}
      whyCUWB={{
        title: "Built for robotics teams that need fast, precise, local positioning.",
        body: "CUWB delivers the combination of accuracy, latency, update rate, and local control that autonomous systems demand.",
        bullets: [
          { title: "100 Hz capable", text: "High-speed tags for demanding motion-capture and control applications" },
          { title: "Engineer-friendly APIs", text: "REST and UDP output designed for technical integrators" },
          { title: "$0 recurring software fees", text: "No per-robot subscription costs" },
          { title: "Local operation", text: "No cloud latency, no internet dependency" },
          { title: "Custom engineering available", text: "Specialized firmware, enclosures, and form factors through Ciholas" },
          { title: "Published pricing", text: "Evaluate hardware cost before starting a program" },
        ],
        links: [{ label: "Read the High-Speed Robotics Case Study", href: "/case-studies/high-speed-robotics-tracking-100hz" }],
      }}
      related={[
        { label: "Proof", title: "High-Speed Robotics Case Study (100 Hz)", href: "/case-studies/high-speed-robotics-tracking-100hz" },
        { label: "Product", title: "High-Speed Tags", href: "/tags" },
        { label: "Integration", title: "API Integration Guide", href: "/rtls-api-integration" },
        { label: "Product", title: "Software & APIs", href: "/software" },
        { label: "Custom", title: "Custom UWB Engineering", href: "/custom-uwb" },
        { label: "Article", title: "Accuracy & Precision Explained", href: "/articles/accuracyprecision" },
        { label: "Analysis", title: "RTLS Cost Breakdown", href: "/pricing" },
        { label: "Planning", title: "Deployment Planning Hub", href: "/rtls-deployment-planning" },
      ]}
      ctaTitle="Evaluate UWB for your robotics application."
      ctaBody="Discuss your requirements, review technical specifications, or talk to our engineering team."
      ctaButtons={[
        { label: "Talk to an Engineer", href: "/contact", primary: true },
        { label: "View High-Speed Tags", href: "/tags" },
        { label: "Read Robotics Case Study", href: "/case-studies/high-speed-robotics-tracking-100hz" },
      ]}
    />
  );
}
