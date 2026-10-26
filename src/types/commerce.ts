/** Future cart and order shapes. The live site orders through WhatsApp only. */

export type CartLine = {
  productId: string;
  size: string;
  color: string;
  quantity: number;
};

export type Cart = {
  lines: CartLine[];
};

export type OrderChannel = "whatsapp" | "checkout";

export type OrderStatus = "pending" | "confirmed" | "fulfilled" | "cancelled";

export type Order = {
  id: string;
  lines: CartLine[];
  channel: OrderChannel;
  status: OrderStatus;
  createdAt: string;
};
