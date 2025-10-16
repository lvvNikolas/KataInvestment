// ==============================
// 📁 src/data/investments.ts
// ==============================

// === Категории (сектора) ===
export type Category =
  | "Technology"
  | "Finance"
  | "Healthcare"
  | "Consumer Goods"
  


export const categories: Category[] = [
  "Technology",
  "Finance",
  "Healthcare",
  "Consumer Goods",


];

// === Регионы (география) ===
export type Region =
  | "United States"
  | "EMEA"
  | "India"
  | "Asia"
  | "Latin America"
  | "China"
 

export const regions: Region[] = [
  "United States",
  "EMEA",
  "India",
  "Asia",
  "Latin America",
  "China",

];

// === Тип инвестиции ===
export type Investment = {
  name: string;
  logo: string;          // путь из /public, напр. /media/portfolio/liftoff-logo.png
  description: string;
  category: Category;    // сектор
  region?: Region;       // регион (строго типизирован)
  year?: number;
  status?: "Active" | "Exited";
  href?: string;         // ссылка на проект / сайт
};

// === Данные инвестиций ===
export const investments: Investment[] = [
  {
    name: "Liftoff",
    logo: "/media/portfolio/liftoff-logo-RGB-slate.png",
    description:
      "AI-enabled end-to-end platform helping mobile developers acquire and monetize users.",
    category: "Technology",
    region: "United States",
    year: 2025,
    status: "Active",
    href: "https://liftoff.io/",
  },
  {
    name: "DCar",
    logo: "/media/portfolio/dcar.png",
    description:
      "DCar is a dedicated auto media and classified app.",
    category: "Technology",
    region: "China",
    year: 2024,
    status: "Active",
    href: "https://www.dongchedi.com/",
  },
  {
    name: "Kayali",
    logo: "/media/portfolio/kayali-1.png",
    description:
      "Kayali is a global fragrance house known for its unique fragrances inspired by Middle Eastern heritage and the art of fragrance layering.",
    category: "Consumer Goods",
    region: "EMEA",
    year: 2025,
    status: "Active",
    href: "#",
  },
  {
    name: "QI Tech",
    logo: "/media/portfolio/QI-Tech-Logo.png",
    description:
      "QI Tech is a financial services platform providing credit, payments, banking, and anti-fraud services to businesses in Brazil.",
    category: "Finance",
    region: "Latin America",
    year: 2024,
    status: "Active",
    href: "https://qitech.com.br/",
  },
  {
    name: "Webull",
    logo: "/media/portfolio/webull.png",
    description:
      "Webull is a U.S.-focused, commission-free online brokerage company.",
    category: "Finance",
    region: "United States",
    year: 2021,
    status: "Active",
    href: "https://www.webull.com/",
  },
   {
    name: "Suvida",
    logo: "/media/portfolio/Suvida.png",
    description:
      "Suvida Healthcare is a value based primary care platform built to address the needs of underserved Latino seniors in the US.",
    category: "Healthcare",
    region: "United States",
    year: 2021,
    status: "Active",
    href: "https://www.suvidahealthcare.com/",
  },
   {
    name: "Duolingo ",
    logo: "/media/portfolio/Duolingo.png",
    description:
      "Duolingo is a global consumer language learning platform.",
    category: "Technology",
    region: "United States",
    year: 2020,
    status: "Active",
    href: "https://www.duolingo.com/",
  },
  {
    name: "Capital Foods",
    logo: "/media/portfolio/Capital-Foods.png",
    description:
      "Capital Foods is an Indian packaged foods company offering sauces, condiments, and ready-to-eat snacks.",
    category: "Consumer Goods",
    region: "India",
    year: 2018,
    status: "Active",
    href: "https://www.capitalfoods.co.in/",
  },
  {
    name: "Sura",
    logo: "/media/portfolio/sura.png",
    description:
      "Sura Asset Management is a pension and wealth management firm in Latin America.",
    category: "Finance",
    region: "Latin America",
    year: 2011,
    status: "Active",
    href: "https://www.sura-am.com/en",
  },
  {
    name: "Asia Medical",
    logo: "/media/portfolio/Asia-Medical.png",
    description:
      "Hong Kong Asia Medical Holding Ltd. is a privately-owned Chinese healthcare services provider & hospital operator specializing in cardiology.",
    category: "Healthcare",
    region: "China",
    year: 2018,
    status: "Active",
    href: "https://www.wahh.com.cn/",
  },
   {
    name: "Tory Burch",
    logo: "/media/portfolio/tory-burch.png",
    description:
      "Tory Burch is a global accessible luxury brand offering handbags, footwear, and ready-to-wear apparel.",
    category: "Consumer Goods",
    region: "United States",
    year: 2012,
    status: "Active",
    href: "https://www.toryburch.com",
  },
   {
    name: "BillDesk",
    logo: "/media/portfolio/BillDesk.png",
    description:
      "BillDesk is an online payments platform providing electronic payment solutions to consumers and businesses across India.",
    category: "Finance",
    region: "India",
    year: 2015,
    status: "Active",
    href: "https://www.billdesk.com/",
  },
  {
    name: "Arco",
    logo: "/media/portfolio/Arco-2021.png",
    description:
      "Arco is a ed-tech platform for K-12 private schools in Brazil.",
    category: "Technology",
    region: "Latin America",
    year: 2021,
    status: "Active",
    href: "https://www.arcoeducacao.com",
  },
  {
    name: "Zimmermann",
    logo: "/media/portfolio/zimmermann.png",
    description:
      "ZIMMERMANN is a global luxury fashion brand based in Sydney, Australia.",
    category: "Consumer Goods",
    region: "Asia",
    year: 2016,
    status: "Active",
    href: "https://www.zimmermann.com/us/",
  },
  {
    name: "VNLife",
    logo: "/media/portfolio/VN-Life-Logo.png",
    description:
      "VNLife is a digital ecosystem focused on banking enablement, digital payments, online travel, and new retail in Vietnam.",
    category: "Finance",
    region: "Asia",
    year: 2021,
    status: "Active",
    href: "#",
  },
  {
    name: "Asian Genco",
    logo: "/media/portfolio/Asian-Genco.png",
    description:
      "VAsian Genco is an Indian infrastructure development company, which is currently in liquidation mode.",
    category: "Technology",
    region: "India",
    year: 2010,
    status: "Active",
    href: "https://asiangenco.com/",
  },
   {
    name: "Airbnb",
    logo: "/media/portfolio/airbnb.jpg",
    description:
      "Airbnb is a tech-enabled community marketplace for listing and booking accommodations around the world.",
    category: "Technology",
    region: "United States",
    year: 2015,
    status: "Active",
    href: "https://ru.airbnb.com/",
  },
   {
    name: "EN Engineering",
    logo: "/media/portfolio/EN-Engineering.jpg",
    description:
      "EN Engineering provides comprehensive engineering, consulting, and automation services to utilities and industrial customers.",
    category: "Technology",
    region: "United States",
    year: 2015,
    status: "Active",
    href: "http://www.enengineering.com/",
  },
   {
    name: "Box",
    logo: "/media/portfolio/box-logo.jpg",
    description:
      "Box is an enterprise cloud-based content management and collaboration platform.",
    category: "Technology",
    region: "United States",
    year: 2012,
    status: "Active",
    href: "https://www.box.com/home",
  },
  {
    name: "Chess.com",
    logo: "/media/portfolio/Chess.com.png",
    description:
      "Chess.com is an online destination for playing, learning and watching Chess.",
    category: "Technology",
    region: "United States",
    year: 2021,
    status: "Active",
    href: "https://www.chess.com/",
  },
  {
    name: "Amherst Pierpont",
    logo: "/media/portfolio/Amherst-Pierpont.png",
    description:
      "Amherst Pierpont is an independent brokerage firm providing clients with access to a broad range of fixed-income products.",
    category: "Finance",
    region: "United States",
    year: 2010,
    status: "Active",
    href: "https://www.santandercib.com/sancap",
  },
];