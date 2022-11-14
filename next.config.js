/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'i.ibb.co'],
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'pseudo'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
