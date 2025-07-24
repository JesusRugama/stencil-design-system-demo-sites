/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });
    return config;
  },
  transpilePackages: ['@jesusrugama/stencil-design-system']
};

module.exports = nextConfig;
