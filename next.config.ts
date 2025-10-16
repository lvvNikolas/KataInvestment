import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Конфигурация изображений
  images: {
    unoptimized: true, // обязательно, если делаем статический экспорт
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Генерация полностью статического сайта
  output: "export",

  // Опция слэша в конце пути
  trailingSlash: false,
};

export default nextConfig;