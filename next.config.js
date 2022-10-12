/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/bannano-prelaunch',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
