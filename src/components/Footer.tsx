import Link from "next/link";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, homeHash, shell } from "@/lib/constants";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";

const links = [
  { href: homeHash("accueil"), label: "Accueil" },
  { href: homeHash("collection"), label: "Collection" },
  { href: homeHash("apropos"), label: "À propos" },
  { href: homeHash("contact"), label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black pb-[calc(6.5rem+env(safe-area-inset-bottom))] text-white md:pb-0">
      <div className={`${shell} grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20`}>
        <div>
          <Logo className="h-16 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
            Vêtements et accessoires sportswear pour homme.
          </p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-col gap-3 text-sm">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="w-fit text-white/80 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 text-sm text-white/80">
          <p>
            Contact{" "}
            <a href={PHONE_TEL} className="text-white">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            WhatsApp{" "}
            <a href={whatsappUrl(whatsappMessages.info)} target="_blank" rel="noopener noreferrer" className="text-white">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            Instagram{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white">
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>
      </div>
      <div className={`${shell} flex flex-col gap-4 border-t border-white/10 py-6 text-xs tracking-wide text-white/55 sm:flex-row sm:items-center sm:justify-between`}>
        <p>© {year} R&amp;M CLOTHING</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
          <Link href="/conditions-de-vente">Conditions de vente</Link>
        </div>
      </div>
    </footer>
  );
}
