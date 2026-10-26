export const SITE_URL = "https://abdelaziz-perso.github.io/reda-mbark-brand";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix for raw asset URLs (textures, SVG logos). next/image already applies basePath. */
export function publicPath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}

export const PHONE_DISPLAY = "06 27 18 88 89";
export const PHONE_E164 = "+212627188889";
export const PHONE_TEL = "tel:+212627188889";
export const WHATSAPP_NUMBER = "212627188889";

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
