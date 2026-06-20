import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure turbopack to use the correct project root directory
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
