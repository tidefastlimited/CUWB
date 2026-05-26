import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUWB — High-Performance UWB Real-Time Location Systems",
  description:
    "CUWB is a high-performance UWB RTLS for teams that need precise, low-latency location data, local control, clear hardware pricing, and no recurring CUWB software fees.",
  icons: {
    icon: "/cuwb-favicon.png",
    apple: "/cuwb-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Navigation with dropdowns */}
        <Navbar />

        {children}

        {/* Footer */}
        <footer className="border-t border-line bg-surface mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <Link href="/" className="inline-flex mb-10" aria-label="CUWB home">
              <Image
                src="/cuwb-logo.png"
                alt="CUWB"
                width={800}
                height={221}
                className="h-10 w-auto"
              />
            </Link>
            <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3 lg:grid-cols-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Products</h3>
                <ul className="space-y-2 text-muted">
                  <li><a href="/anchors" className="hover:text-brand">Anchors</a></li>
                  <li><a href="/tags" className="hover:text-brand">Tags</a></li>
                  <li><a href="/software" className="hover:text-brand">Software</a></li>
                  <li><a href="/accessories" className="hover:text-brand">Accessories</a></li>
                  <li><a href="/custom-uwb" className="hover:text-brand">Custom UWB</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Solutions</h3>
                <ul className="space-y-2 text-muted">
                  <li><a href="/solutions/warehouse-asset-tracking" className="hover:text-brand">Warehouse Tracking</a></li>
                  <li><a href="/solutions/manufacturing-rtls" className="hover:text-brand">Manufacturing RTLS</a></li>
                  <li><a href="/solutions/forklift-tracking" className="hover:text-brand">Forklift Tracking</a></li>
                  <li><a href="/solutions/work-in-progress-tracking" className="hover:text-brand">WIP Tracking</a></li>
                  <li><a href="/solutions/robotics-agv-tracking" className="hover:text-brand">Robotics & AGV</a></li>
                  <li><a href="/solutions/hospital-equipment-tracking" className="hover:text-brand">Hospital Equipment</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Cost & Pricing</h3>
                <ul className="space-y-2 text-muted">
                  <li><a href="/pricing" className="hover:text-brand">Pricing &amp; Cost Guide</a></li>
                  <li><a href="/cuwb-advantage" className="hover:text-brand">CUWB Advantage</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Resources</h3>
                <ul className="space-y-2 text-muted">
                  <li><a href="https://cuwb.io/docs/latest" className="hover:text-brand">Documentation</a></li>
                  <li><a href="https://cuwb.io/support" className="hover:text-brand">Support</a></li>
                  <li><a href="https://cuwb.io/articles" className="hover:text-brand">Articles</a></li>
                  <li><a href="/uwb" className="hover:text-brand">About UWB</a></li>
                  <li><a href="/learn/uwb-rtls" className="hover:text-brand">UWB RTLS Guide</a></li>
                  <li><a href="/learn/indoor-asset-tracking" className="hover:text-brand">Indoor Asset Tracking</a></li>
                  <li><a href="/learn/uwb-vs-ble-rfid-gps" className="hover:text-brand">Comparisons</a></li>
                  <li><a href="/learn/uwb-anchor-placement" className="hover:text-brand">Anchor Placement</a></li>
                  <li><a href="/rtls-deployment-planning" className="hover:text-brand">Deployment Hub</a></li>
                  <li><a href="/rtls-deployment-planning/uwb-network-requirements" className="hover:text-brand">Network Requirements</a></li>
                  <li><a href="/rtls-api-integration" className="hover:text-brand">API Integration</a></li>
                  <li><a href="/faq" className="hover:text-brand">FAQ</a></li>
                  <li><a href="https://cuwb.io/docs/latest/overview/legal" className="hover:text-brand">Legal</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Case Studies</h3>
                <ul className="space-y-2 text-muted">
                  <li><a href="/case-studies/warehouse-asset-tracking-48-anchors" className="hover:text-brand">Warehouse Case Study</a></li>
                  <li><a href="/case-studies/high-speed-robotics-tracking-100hz" className="hover:text-brand">Robotics Case Study</a></li>
                  <li><a href="/case-studies/medical-equipment-tracking-local-rtls" className="hover:text-brand">Hospital Case Study</a></li>
                  <li><a href="/case-studies/mine-equipment-personnel-tracking" className="hover:text-brand">Mining Case Study</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Company</h3>
                <ul className="space-y-2 text-muted">
                  <li><a href="/about" className="hover:text-brand">About CUWB</a></li>
                  <li><a href="/contact" className="hover:text-brand">Contact</a></li>
                  <li><a href="/cuwb-advantage" className="hover:text-brand">CUWB Advantage</a></li>
                  <li><a href="/custom-uwb" className="hover:text-brand">Custom UWB</a></li>
                  <li><a href="/faq" className="hover:text-brand">FAQ</a></li>
                  <li><a href="/articles/chainpoe" className="hover:text-brand">ChainPoE</a></li>
                  <li><a href="https://cuwb.io/partners" className="hover:text-brand">Partners</a></li>
                  <li><a href="https://www.ciholas.com/careers" className="hover:text-brand">Careers</a></li>
                  <li><a href="https://shop.cuwb.io" className="hover:text-brand">Shop</a></li>
                  <li><a href="https://www.ciholas.com" className="hover:text-brand">ciholas.com</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-line text-sm text-subtle text-center">
              © {new Date().getFullYear()} Ciholas. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
