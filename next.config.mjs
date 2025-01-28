/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/#home',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/skills',
        destination: '/#skills',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/#resume',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
