/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port: '',
        pathname: '/480/480/tech',
      }
    ],
  },
};

module.exports = nextConfig