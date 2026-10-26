import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenu" className="bg-[#f3f3f1] px-6 pt-36 pb-24">
      <p className="text-[0.68rem] tracking-[0.22em] text-neutral-500 uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl tracking-[-0.04em]">Page introuvable</h1>
      <p className="mt-4 max-w-md text-neutral-600">Cette page ne fait pas partie de la collection R&amp;M CLOTHING.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center bg-black px-5 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
