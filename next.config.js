/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['strapi-joy.s3.amazonaws.com'],
  },
};
