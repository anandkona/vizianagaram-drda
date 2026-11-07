/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/vizianagaram-drda" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,

  // Expose the same base path to client-side asset helpers.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },

  serverActions: {
    allowedOrigins: ["192.168.1.145", "192.168.1.145:3000", "localhost:3000"],
  },
  allowedDevOrigins: ["192.168.1.145"],
};

export default nextConfig;
