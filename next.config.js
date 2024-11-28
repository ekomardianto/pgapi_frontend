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
  
  env: {
    NEXT_PUBLIC_BACKEND_API_BASEURL: process.env.NEXT_PUBLIC_BACKEND_API_BASEURL,
  },
};

module.exports = nextConfig;
