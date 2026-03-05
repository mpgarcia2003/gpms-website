/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
