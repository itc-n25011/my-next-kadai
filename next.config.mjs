/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io', // ここで画像の取得を許可します
      },
    ],
  },
};

export default nextConfig;