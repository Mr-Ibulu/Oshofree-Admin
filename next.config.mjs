// @ts-check
import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  basePath: "/Oshofree-Admin",
};

// module.exports = nextConfig
export default withPlaiceholder(nextConfig);
