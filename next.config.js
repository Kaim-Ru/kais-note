/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/kais-note' : '';

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
