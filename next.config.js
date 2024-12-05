const { env } = require("process");

/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icons8.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
