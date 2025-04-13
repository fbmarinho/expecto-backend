// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.ctfassets.net"],
//   },
//   experimental: {
//     serverActions: true,
//   },
// };

// module.exports = nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.ctfassets.net"]
  }
};

export default nextConfig;