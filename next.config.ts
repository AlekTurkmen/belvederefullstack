import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // This ignores ESLint errors during Vercel builds
  },
};

export default nextConfig;
