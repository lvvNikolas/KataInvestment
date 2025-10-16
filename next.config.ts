import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Разрешаем изображения с Unsplash
  images: {
    unoptimized: true, // обязательно для next export
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Генерация полностью статического билда
  output: "export",

  // Можно убрать или поставить true, если хостинг требует / на конце
  trailingSlash: false,
};

export default nextConfig;