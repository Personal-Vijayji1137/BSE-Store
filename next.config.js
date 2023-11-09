/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['i.ytimg.com','i.postimg.cc','i.ibb.co'],
    },
}

module.exports = nextConfig
