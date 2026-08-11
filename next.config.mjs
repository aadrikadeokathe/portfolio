/** @type {import('next').NextConfig} */

// GitHub Pages support:
// - For a USER site (aadrikadeokathe.github.io) leave NEXT_PUBLIC_BASE_PATH unset.
// - For a PROJECT repo (e.g. /portfolio) set NEXT_PUBLIC_BASE_PATH="/portfolio".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
