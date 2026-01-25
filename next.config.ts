import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    globalNotFound: true,
    // browserDebugInfoInTerminal: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //       pathname: '/images/**',
  //     },
  //   ],
  // }
};

export default nextConfig;
