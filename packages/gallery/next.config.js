/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTm = require("next-transpile-modules")(["designer"])


module.exports = withTm()
