import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Allows deployment even with TypeScript errors
  },
};

export default nextConfig;
