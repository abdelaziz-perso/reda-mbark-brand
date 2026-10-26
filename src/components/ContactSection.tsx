import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, shell } from "@/lib/constants";
import { InstagramIcon } from "@/components/InstagramIcon";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#111] py-20 text-white md:py-32">
      <div className={shell}>
        <h2 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">BESOIN D&apos;AIDE ?</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
          Une question sur un produit, une taille ou votre commande ? Contactez-nous directement.
        </p>
        <p className="mt-6 text-sm tracking-[0.16em] text-white/60">{PHONE_DISPLAY}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl(whatsappMessages.info)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 text-[0.72rem] font-semibold tracking-[0.16em] text-black uppercase"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex min-h-12 items-center justify-center border border-white/30 px-5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase"
          >
            Appeler
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
