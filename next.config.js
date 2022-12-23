/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'i.ibb.co',
      'images.unsplash.com',
      'cdn1.iconfinder.com',
      'img2.pngio.com',
      'i.dlpng.com',
    ],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
