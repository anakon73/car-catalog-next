/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  // basePath: "/red",
  images: {
    domains: [
      "cdn3.riastatic.com",
      "www.fonstola.ru",
      "autofakty.com",
      "nextcar.ua",
    ],
  },
};

module.exports = nextConfig;
