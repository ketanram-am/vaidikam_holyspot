/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // WebP only. AVIF halves the bytes again, but encoding these 2200px
    // sources took minutes per image and the request blocked until it
    // finished — an image that never arrives is worse on a phone than one
    // that is 30% larger.
    formats: ["image/webp"],
    // 375/390/414-wide phones at 2x and 3x land on 750/828/1080/1280.
    deviceSizes: [640, 750, 828, 1080, 1280, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
};

export default nextConfig;
