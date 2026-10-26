import { WHATSAPP_NUMBER } from "@/lib/constants";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  info: "Bonjour R&M CLOTHING, je souhaite avoir plus d'informations sur vos produits.",
  collection: "Bonjour R&M CLOTHING, je souhaite découvrir votre collection.",
  product(name: string) {
    return `Bonjour R&M CLOTHING, je souhaite commander ${name}. Pouvez-vous me donner le prix et les tailles disponibles ?`;
  },
  order(details: { product: string; size: string; color: string; quantity: number }) {
    return [
      "Bonjour R&M CLOTHING,",
      "",
      "Je souhaite commander :",
      "",
      `Produit : ${details.product}`,
      `Taille : ${details.size}`,
      `Couleur : ${details.color}`,
      `Quantité : ${details.quantity}`,
      "",
      "Merci de me confirmer le prix et la disponibilité.",
    ].join("\n");
  },
};
