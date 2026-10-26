export function formatPrice(price: number | null, currency: "MAD" = "MAD") {
  if (price == null) return "Prix sur demande";
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function sizeLabel(sizes: string[]) {
  if (sizes.length <= 1) return sizes[0] ?? "Unique";
  return `${sizes[0]} – ${sizes[sizes.length - 1]}`;
}
