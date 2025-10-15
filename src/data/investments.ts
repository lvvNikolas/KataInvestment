export type Category =
  | "Venture"
  | "Technology"
  | "Bitcoin / Crypto"
  | "Metals & Resources";

export type Investment = {
  name: string;
  logo: string;        // путь из /public, напр. /logos/portfolio/liftoff.svg
  description: string;
  category: Category;
  region?: string;
  year?: number;
  status?: "Active" | "Exited";
  href?: string;       // сайт компании / кейс
};

export const categories: Category[] = [
  "Venture",
  "Technology",
  "Bitcoin / Crypto",
  "Metals & Resources",
];

export const investments: Investment[] = [
  {
    name: "Liftoff",
    logo: "media/portfolio/liftoff-logo-RGB-slate.png",
    description:
      "AI-enabled end-to-end platform helping mobile developers acquire and monetize users.",
    category: "Technology",
    region: "United States",
    year: 2025,
    status: "Active",
    href: "#",
  },
  {
    name: "BlockBridge",
    logo: "/logos/portfolio/blockbridge.svg",
    description:
      "Institutional digital asset brokerage and custody with secure on/off-ramp.",
    category: "Bitcoin / Crypto",
    region: "Switzerland",
    year: 2024,
    status: "Active",
    href: "#",
  },
  {
    name: "Nordic Alloys",
    logo: "/logos/portfolio/nordic-alloys.svg",
    description:
      "Supplier of high-grade nickel and copper concentrates for battery value chain.",
    category: "Metals & Resources",
    region: "Finland",
    year: 2023,
    status: "Active",
    href: "#",
  },
  {
    name: "Kata Ventures I",
    logo: "/logos/portfolio/kata-ventures.svg",
    description:
      "Early-stage venture fund backing B2B software and infrastructure founders.",
    category: "Venture",
    region: "EU",
    year: 2022,
    status: "Active",
    href: "#",
  },
  {
    name: "QuantLeaf",
    logo: "/logos/portfolio/quantleaf.svg",
    description:
      "ML platform for demand forecasting and dynamic pricing in retail supply chains.",
    category: "Technology",
    region: "UK",
    year: 2021,
    status: "Exited",
    href: "#",
  },
];