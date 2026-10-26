"use client";

import { usePathname } from "next/navigation";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function MobilePurchaseBar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-black/92 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={whatsappUrl(whatsappMessages.collection)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-white text-[0.72rem] font-semibold tracking-[0.16em] text-black uppercase"
      >
        <WhatsAppIcon className="size-4" />
        Commander sur WhatsApp
      </a>
    </div>
  );
}
