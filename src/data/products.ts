export type CategoryId = "tshirts" | "hoodies" | "bottoms" | "accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  description: string;
  price: number | null;
  currency: "MAD";
  colors: string[];
  sizes: string[];
  images: string[];
  featured?: boolean;
  isNew?: boolean;
  /** Reserved for a future GLB/GLTF clothing model. */
  modelUrl?: string;
};

export const products: Product[] = [
  {
    id: "tee-noir",
    slug: "t-shirt-noir-rm",
    name: "T-shirt Noir R&M",
    category: "tshirts",
    categoryLabel: "T-shirts",
    description:
      "T-shirt ajusté noir, siglé du monogramme R&M. Une base nette pour l'entraînement et le quotidien.",
    price: null,
    currency: "MAD",
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/rm/product-tee-black.png", "/images/rm/lifestyle-tee-black.webp"],
    featured: true,
    isNew: true,
  },
  {
    id: "tee-blanc",
    slug: "t-shirt-blanc-rm",
    name: "T-shirt Blanc R&M",
    category: "tshirts",
    categoryLabel: "T-shirts",
    description:
      "T-shirt ajusté blanc avec le monogramme R&M dans le dos. Une pièce claire, graphique et facile à porter.",
    price: null,
    currency: "MAD",
    colors: ["Blanc"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/rm/product-tee-white.webp", "/images/rm/lifestyle-tee-white.webp"],
    featured: true,
    isNew: true,
  },
  {
    id: "hoodie-noir",
    slug: "hoodie-noir-rm",
    name: "Hoodie Noir R&M",
    category: "hoodies",
    categoryLabel: "Hoodies",
    description:
      "Hoodie noir au monogramme R&M. Une couche sobre pour arriver, s'entraîner et repartir.",
    price: null,
    currency: "MAD",
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/rm/product-hoodie.png", "/images/rm/lifestyle-hoodie.webp"],
    featured: true,
    isNew: true,
  },
  {
    id: "jogger-noir",
    slug: "jogger-noir-rm",
    name: "Jogger Noir R&M",
    category: "bottoms",
    categoryLabel: "Bas",
    description:
      "Jogger noir siglé R&M, pensé pour accompagner le mouvement du training au quotidien.",
    price: null,
    currency: "MAD",
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/rm/product-jogger.png", "/images/rm/lifestyle-hoodie.webp"],
    featured: true,
  },
  {
    id: "short-training",
    slug: "short-training-rm",
    name: "Short Training R&M",
    category: "bottoms",
    categoryLabel: "Bas",
    description:
      "Short d'entraînement noir avec le monogramme R&M. Une coupe simple pour bouger sans bruit visuel.",
    price: null,
    currency: "MAD",
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/rm/product-short.png"],
  },
  {
    id: "casquette",
    slug: "casquette-rm",
    name: "Casquette R&M",
    category: "accessories",
    categoryLabel: "Accessoires",
    description: "Casquette noire brodée du monogramme R&M. Le détail qui signe la tenue.",
    price: null,
    currency: "MAD",
    colors: ["Noir"],
    sizes: ["Unique"],
    images: ["/images/rm/product-cap.png", "/images/rm/lifestyle-tee-black.webp"],
    isNew: true,
  },
  {
    id: "sac-sport",
    slug: "sac-de-sport-rm",
    name: "Sac de Sport R&M",
    category: "accessories",
    categoryLabel: "Accessoires",
    description: "Sac de sport noir au grand monogramme R&M. Pour emporter l'essentiel de la séance.",
    price: null,
    currency: "MAD",
    colors: ["Noir"],
    sizes: ["Unique"],
    images: ["/images/rm/product-bag.png"],
  },
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export const featuredProducts = products.filter((product) => product.featured || product.isNew);
