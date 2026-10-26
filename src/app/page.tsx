import { BrandStory } from "@/components/BrandStory";
import { CategoryCard } from "@/components/CategoryCard";
import { Collection } from "@/components/Collection";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { Lookbook } from "@/components/Lookbook";
import { Marquee } from "@/components/Marquee";
import { Product3DShowcase } from "@/components/Product3DShowcase";
import { ShopByProduct } from "@/components/ShopByProduct";
import { WhyRM } from "@/components/WhyRM";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { SITE_URL, shell } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "R&M CLOTHING",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/rm/og.jpg`,
  description:
    "Collection de vêtements et accessoires sportswear pour homme : T-shirts, hoodies, joggers, shorts, casquettes et sacs.",
  telephone: "+212627188889",
  sameAs: ["https://www.instagram.com/randm_brand/?hl=fr"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Collection R&M",
    itemListElement: products.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `${SITE_URL}${product.images[0]}`,
      category: product.categoryLabel,
    })),
  },
};

export default function HomePage() {
  return (
    <main id="contenu">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Marquee />
      <Collection />
      <Product3DShowcase />
      <section className="bg-[#f3f3f1] pb-20 md:pb-32" aria-labelledby="univers-title">
        <div className={shell}>
          <h2 id="univers-title" className="font-display text-4xl tracking-[-0.04em] md:text-6xl">
            LES UNIVERS
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      <BrandStory />
      <Lookbook />
      <ShopByProduct />
      <WhyRM />
      <InstagramSection />
    </main>
  );
}
