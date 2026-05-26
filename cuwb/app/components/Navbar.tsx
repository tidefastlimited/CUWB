"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

interface DropdownGroup {
  groupLabel: string;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
  groups?: DropdownGroup[];
  align?: "center" | "right";
}

const navItems: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "Anchors", href: "/anchors", description: "UWB anchors with ChainPoE" },
      { label: "Tags", href: "/tags", description: "Asset & personnel tags" },
      { label: "Software", href: "/software", description: "Local software, no recurring fees" },
      { label: "Accessories", href: "/accessories", description: "Mounts, cables, kits" },
      { label: "Custom UWB", href: "/custom-uwb", description: "Private-label & engineering" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Warehouse Tracking", href: "/solutions/warehouse-asset-tracking", description: "Assets, pallets, carts, and inventory" },
      { label: "Manufacturing RTLS", href: "/solutions/manufacturing-rtls", description: "Production visibility and flow control" },
      { label: "Forklift Tracking", href: "/solutions/forklift-tracking", description: "Vehicle location, zones, and utilization" },
      { label: "WIP Tracking", href: "/solutions/work-in-progress-tracking", description: "Track jobs, fixtures, and work cells" },
      { label: "Robotics & AGV", href: "/solutions/robotics-agv-tracking", description: "Low-latency position data for motion" },
      { label: "Hospital Equipment", href: "/solutions/hospital-equipment-tracking", description: "Local equipment visibility for care teams" },
      { label: "Sports & Athlete Tracking", href: "/solutions/sports-athlete-tracking", description: "High-rate tracking for fast movement" },
      { label: "Mining Personnel & Equipment", href: "/solutions/mining-personnel-tracking", description: "Offline tracking for harsh facilities" },
    ],
  },
  {
    label: "Pricing / Cost",
    href: "/pricing",
  },
  {
    label: "Docs",
    href: "https://cuwb.io/docs/latest",
  },
  {
    label: "Compare",
    children: [
      { label: "All Comparisons", href: "/compare", description: "CUWB vs all major UWB RTLS vendors" },
      { label: "CUWB vs Pozyx", href: "/compare/cuwb-vs-pozyx", description: "Direct UWB — pricing, fees, ChainPoE" },
      { label: "CUWB vs Sewio", href: "/compare/cuwb-vs-sewio", description: "Enterprise UWB platform" },
      { label: "CUWB vs KINEXON", href: "/compare/cuwb-vs-kinexon", description: "Automation platform vs local API" },
      { label: "CUWB vs Ubisense", href: "/compare/cuwb-vs-ubisense", description: "Enterprise 3D UWB" },
      { label: "CUWB vs Redpoint", href: "/compare/cuwb-vs-redpoint", description: "UWB with worker safety focus" },
      { label: "CUWB vs WISER", href: "/compare/cuwb-vs-wiser", description: "Industrial UWB, wireless mesh" },
      { label: "CUWB vs Litum", href: "/compare/cuwb-vs-litum", description: "Multi-radio safety platform" },
      { label: "CUWB vs Zebra", href: "/compare/cuwb-vs-zebra", description: "Enterprise ecosystem vendor" },
    ],
  },
  {
    label: "Resources",
    groups: [
      {
        groupLabel: "Learn",
        items: [
          { label: "About UWB", href: "/uwb", description: "How ultra-wideband positioning works" },
          { label: "UWB RTLS Guide", href: "/learn/uwb-rtls", description: "Complete UWB overview" },
          { label: "Indoor Asset Tracking", href: "/learn/indoor-asset-tracking", description: "Methods, fit, and deployment tradeoffs" },
          { label: "UWB vs BLE vs RFID vs GPS", href: "/learn/uwb-vs-ble-rfid-gps", description: "Full technology comparison" },
          { label: "UWB vs BLE", href: "/learn/uwb-vs-ble", description: "Precision and infrastructure differences" },
          { label: "UWB vs RFID", href: "/learn/uwb-vs-rfid", description: "Live location versus checkpoint reads" },
          { label: "Local vs Cloud RTLS", href: "/learn/local-rtls-vs-cloud-rtls", description: "Latency, privacy, and cost comparison" },
          { label: "Accuracy & Precision", href: "/articles/accuracyprecision", description: "Measurement terms and RTLS expectations" },
        ],
      },
      {
        groupLabel: "Deploy",
        items: [
          { label: "Deployment Planning Hub", href: "/rtls-deployment-planning", description: "Plan your RTLS deployment end to end" },
          { label: "Anchor Placement Guide", href: "/learn/uwb-anchor-placement", description: "Plan coverage, geometry, and accuracy" },
          { label: "Network Requirements", href: "/rtls-deployment-planning/uwb-network-requirements", description: "PoE, VLAN, bandwidth, and host needs" },
          { label: "How Obstructions Affect UWB", href: "/rtls-deployment-planning/how-obstructions-affect-uwb", description: "Metal, concrete, height, and line of sight" },
          { label: "Commissioning Checklist", href: "/rtls-deployment-planning/rtls-commissioning-checklist", description: "Install, verify, calibrate, and hand off" },
          { label: "API Integration", href: "/rtls-api-integration", description: "REST API and data integration" },
        ],
      },
      {
        groupLabel: "Case Studies",
        items: [
          { label: "Warehouse RTLS — 48 Anchors, 120 Tags", href: "/case-studies/warehouse-asset-tracking-48-anchors", description: "Distribution center deployment" },
          { label: "High-Speed Robotics — 100 Hz", href: "/case-studies/high-speed-robotics-tracking-100hz", description: "R&D lab motion capture" },
          { label: "Hospital Equipment Tracking", href: "/case-studies/medical-equipment-tracking-local-rtls", description: "Local data, HIPAA-friendly" },
          { label: "Mine Personnel & Equipment", href: "/case-studies/mine-equipment-personnel-tracking", description: "Fully offline underground" },
          { label: "CUWB Advantage", href: "/cuwb-advantage", description: "Core differentiators vs alternatives" },
          { label: "ChainPoE Savings", href: "/articles/chainpoe", description: "Installation cost savings" },
        ],
      },
      {
        groupLabel: "Help",
        items: [
          { label: "Support", href: "https://cuwb.io/support", description: "Help from CUWB experts and engineers" },
          { label: "Articles", href: "https://cuwb.io/articles", description: "Insights, updates, and CUWB technical notes" },
          { label: "FAQ", href: "/faq", description: "Answers to common buyer questions" },
          { label: "Legal", href: "https://cuwb.io/docs/latest/overview/legal", description: "Legal terms for CUWB documentation" },
        ],
      },
    ],
  },
  {
    label: "Company",
    align: "right",
    children: [
      { label: "About CUWB", href: "/about", description: "Ciholas engineering and UWB experience" },
      { label: "Contact Sales", href: "/contact", description: "Talk through your RTLS project" },
      { label: "CUWB Advantage", href: "/cuwb-advantage", description: "Why teams choose CUWB" },
      { label: "Custom UWB", href: "/custom-uwb", description: "Firmware, hardware, private-label" },
      { label: "FAQ", href: "/faq", description: "Common buyer questions" },
      { label: "Ciholas", href: "https://www.ciholas.com", description: "Parent company" },
      { label: "Partners", href: "https://cuwb.io/partners", description: "Organizations supporting CUWB users" },
      { label: "Careers", href: "https://www.ciholas.com/careers", description: "Open roles at Ciholas" },
      { label: "Shop", href: "https://shop.cuwb.io", description: "Buy CUWB hardware and accessories" },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }

  function toggleMobileDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <nav ref={navRef} className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="CUWB home">
            <Image
              src="/cuwb-logo.png"
              alt="CUWB"
              width={800}
              height={221}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href || "#"}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    openDropdown === item.label
                      ? "text-foreground bg-panel"
                      : "text-muted hover:text-foreground hover:bg-panel"
                  }`}
                  onClick={(e) => {
                    if (item.children || item.groups) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.label}
                  {(item.children || item.groups) && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Panel */}
                {(item.children || item.groups) && openDropdown === item.label && (
                  <div
                    className={`absolute top-full pt-2 w-screen max-w-[calc(100vw-2rem)] ${
                      item.align === "right"
                        ? "right-0"
                        : "left-1/2 -translate-x-1/2"
                    }`}
                    style={{ maxWidth: item.groups ? "760px" : "680px" }}
                  >
                    <div className="bg-surface rounded-lg border border-line p-6" style={{ boxShadow: "var(--lift)" }}>
                      {item.groups ? (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                          {item.groups.map((group) => (
                            <div key={group.groupLabel}>
                              <p className="mb-2 px-3 font-mono text-[0.68rem] font-[650] uppercase tracking-[0.08em] text-subtle">
                                {group.groupLabel}
                              </p>
                              <div className="space-y-0.5">
                                {group.items.map((child) => (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    className="group flex flex-col gap-0.5 px-3 py-2 rounded-md transition-colors hover:bg-panel"
                                  >
                                    <span className="text-sm font-medium text-foreground group-hover:text-brand">
                                      {child.label}
                                    </span>
                                    <span className="text-xs text-muted leading-snug">
                                      {child.description}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                          {item.children!.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="group flex flex-col gap-0.5 px-3 py-2.5 rounded-md transition-colors hover:bg-panel"
                            >
                              <span className="text-sm font-medium text-foreground group-hover:text-brand">
                                {child.label}
                              </span>
                              <span className="text-xs text-muted leading-snug">
                                {child.description}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Shop — standalone link */}
            <a
              href="https://shop.cuwb.io"
              className="ml-2 rounded-md bg-brand px-4 py-2 font-medium text-white shadow-[0_10px_24px_rgba(239,58,50,0.18)] transition-colors hover:bg-brand-hover"
            >
              Shop
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-line pt-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {(item.children || item.groups) ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-panel"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 space-y-0.5 mt-1">
                        {item.groups
                          ? item.groups.map((group) => (
                              <div key={group.groupLabel} className="mt-3 first:mt-1">
                                <p className="px-3 pb-1 font-mono text-[0.65rem] font-[650] uppercase tracking-[0.08em] text-subtle">
                                  {group.groupLabel}
                                </p>
                                {group.items.map((child) => (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    className="block px-3 py-2 text-sm text-muted hover:text-brand rounded-md hover:bg-panel"
                                  >
                                    {child.label}
                                    <span className="block text-xs text-subtle mt-0.5">{child.description}</span>
                                  </a>
                                ))}
                              </div>
                            ))
                          : item.children!.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-muted hover:text-brand rounded-md hover:bg-panel"
                              >
                                {child.label}
                                <span className="block text-xs text-subtle mt-0.5">{child.description}</span>
                              </a>
                            ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-panel"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-line mt-2">
              <a
                href="https://shop.cuwb.io"
                className="block px-3 py-2.5 text-sm font-medium text-center text-white bg-brand rounded-md hover:bg-brand-hover"
              >
                Shop
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
