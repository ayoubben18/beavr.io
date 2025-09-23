import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
    browserDebugInfoInTerminal: true,
  },
};

export default nextConfig;
