export type PortfolioTile = {
  title: string;
  tags: string[];          // ["BUYOUT","TECHNOLOGY"]
  image: string;           // /media/portfolio/ai-dream.jpg
  href?: string;           // ссылка на кейс/сайт
};

export const portfolioTiles: PortfolioTile[] = [
  {
    title: "A dream come true: establishing AI Dream in China",
    tags: ["AI DREAM", "BUYOUT"],
    image: "/media/portfolio/AIDream-RedGraphic-square.webp",
    href: "#",
  },
  {
    title: "Banking on software",
    tags: ["BUYOUT", "TECHNOLOGY"],
    image: "/media/portfolio/banking-software.jpg",
    href: "#",
  },
  {
    title: "Scaling specialty care with data",
    tags: ["HEALTHCARE", "GROWTH"],
    image: "/media/portfolio/healthcare-scale.jpg",
    href: "#",
  },
  {
    title: "Building resilient supply platforms",
    tags: ["INDUSTRIALS", "SPECIAL SITUATIONS"],
    image: "/media/portfolio/industrials-supply.jpg",
    href: "#",
  },
];