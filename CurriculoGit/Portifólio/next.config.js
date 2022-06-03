/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withImg = require('next-images')

module.exports = nextConfig, withImg({
  esModule:true
})
