/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['child_process'],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 
      'utf-8-validate',
      'bufferutil'
    ];
    return config;
  }
}

module.exports = nextConfig
