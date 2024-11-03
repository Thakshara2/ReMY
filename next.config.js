/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure static file serving from the 'out' directory
  async rewrites() {
    return [
      {
        source: '/video/:path*',
        destination: '/api/static/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Handle Node.js modules in the browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
