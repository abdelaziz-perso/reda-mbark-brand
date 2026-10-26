import type { CategoryId } from "@/data/products";

export type Category = {
  id: CategoryId;
  name: string;
  caption: string;
  image: string;
  fit: "cover" | "contain";
};

export const categories: Category[] = [
  {
    id: "tshirts",
    name: "T-SHIRTS",
    caption: "Coupes ajustées",
    image: "/images/rm/lifestyle-tee-black.webp",
    fit: "cover",
  },
  {
    id: "hoodies",
    name: "HOODIES",
    caption: "La couche noire",
    image: "/images/rm/lifestyle-hoodie.webp",
    fit: "cover",
  },
  {
    id: "bottoms",
    name: "BOTTOMS",
    caption: "Joggers et shorts",
    image: "/images/rm/product-jogger.png",
    fit: "contain",
  },
  {
    id: "accessories",
    name: "ACCESSORIES",
    caption: "Casquette et sac",
    image: "/images/rm/product-bag.png",
    fit: "contain",
  },
];

export const shopFilters = [
  { id: "all", label: "Tout" },
  { id: "tshirts", label: "T-shirts" },
  { id: "hoodies", label: "Hoodies" },
  { id: "joggers", label: "Joggers" },
  { id: "shorts", label: "Shorts" },
  { id: "caps", label: "Casquettes" },
  { id: "bags", label: "Sacs" },
] as const;

export type ShopFilterId = (typeof shopFilters)[number]["id"];

export const lookbook = [
  {
    src: "/images/rm/lifestyle-tee-black.webp",
    alt: "Homme en t-shirt noir R&M et casquette, en salle de sport",
    className: "col-span-2 row-span-2 min-h-[280px] sm:min-h-[420px]",
  },
  {
    src: "/images/rm/lifestyle-tee-white.webp",
    alt: "Dos d'un t-shirt blanc R&M porté à l'entraînement",
    className: "col-span-2 min-h-[220px] sm:col-span-1 sm:min-h-[240px] lg:col-span-2",
  },
  {
    src: "/images/rm/lifestyle-hoodie.webp",
    alt: "Homme en hoodie noir et jogger R&M",
    className: "col-span-2 min-h-[260px] sm:col-span-1 sm:min-h-[240px] lg:col-span-2",
  },
  {
    src: "/images/rm/product-cap.png",
    alt: "Casquette noire R&M",
    className: "min-h-[180px] bg-[#ececea]",
    contain: true,
  },
  {
    src: "/images/rm/product-bag.png",
    alt: "Sac de sport noir R&M",
    className: "min-h-[180px] bg-[#ececea]",
    contain: true,
  },
  {
    src: "/images/rm/lifestyle-gym.webp",
    alt: "Ambiance salle, tenue noire R&M",
    className: "col-span-2 min-h-[200px] sm:min-h-[240px]",
  },
];

export const instagramShots = [
  { src: "/images/rm/lifestyle-tee-black.webp", alt: "Look t-shirt noir et casquette R&M" },
  { src: "/images/rm/lifestyle-tee-white.webp", alt: "T-shirt blanc R&M de dos" },
  { src: "/images/rm/lifestyle-hoodie.webp", alt: "Hoodie et jogger noirs R&M" },
  { src: "/images/rm/product-cap.png", alt: "Casquette R&M" },
  { src: "/images/rm/product-short.png", alt: "Short training R&M" },
  { src: "/images/rm/product-bag.png", alt: "Sac de sport R&M" },
];
