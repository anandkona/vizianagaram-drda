/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about/district", permanent: false },
      { source: "/citizen-services", destination: "/services", permanent: false },
      { source: "/livelihood", destination: "/livelihoods", permanent: false },
      { source: "/tourism/community", destination: "/community-tourism", permanent: false },
      { source: "/serp", destination: "/serp-corner", permanent: false },
    ];
  },
  serverActions: {
    allowedOrigins: ['192.168.1.145', '192.168.1.145:3000', 'localhost:3000'],
  },
  allowedDevOrigins: ['192.168.1.145'],
};

export default nextConfig;
