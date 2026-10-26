export const SITE_URL = "https://abdelaziz-perso.github.io/reda-mbark-brand";

/** Must match next.config.ts `basePath` for GitHub Pages. */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH.length > 0
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "/reda-mbark-brand";

/** Prefix for raw asset URLs (textures, SVG logos, unoptimized img). */
export function publicPath(path: string) {
  if (!path.startsWith("/")) return path;
  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

export const PHONE_DISPLAY = "07 81 49 88 21";
export const PHONE_E164 = "+212781498821";
export const PHONE_TEL = "tel:+212781498821";
export const WHATSAPP_NUMBER = "212781498821";

export const INSTAGRAM_URL = "https://www.instagram.com/randm_brand/?hl=fr";
export const INSTAGRAM_HANDLE = "@randm_brand";

export const shell =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12";

export function homeHash(id: string) {
  return `${BASE_PATH}/#${id.replace(/^#/, "")}`;
}

export const navLinks = [
  { href: homeHash("accueil"), label: "Accueil" },
  { href: homeHash("collection"), label: "Collection" },
  { href: homeHash("nouveautes"), label: "Nouveautés" },
  { href: homeHash("apropos"), label: "À propos" },
  { href: homeHash("contact"), label: "Contact" },
] as const;
