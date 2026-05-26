import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/learn/rtls-cost",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/learn/rtls-total-cost-of-ownership",
        destination: "/pricing#tco",
        permanent: true,
      },
      {
        source: "/learn/rtls-no-recurring-software-fees",
        destination: "/pricing#software-fees",
        permanent: true,
      },
      {
        source: "/learn/chainpoe-rtls-installation-cost",
        destination: "/pricing#chainpoe-savings",
        permanent: true,
      },
      {
        source: "/learn/uwb-rtls-pricing",
        destination: "/pricing#hardware-pricing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
