import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions de vente",
  alternates: { canonical: "/conditions-de-vente/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Conditions de vente">
      <p>
        Les prix ne sont pas affichés tant qu&apos;ils ne sont pas confirmés. Une demande envoyée sur WhatsApp ne vaut pas commande ferme tant que R&amp;M CLOTHING n&apos;a pas confirmé le prix, la taille et la disponibilité.
      </p>
      <p>Les conditions de paiement, de livraison et de retour seront précisées ici avant l&apos;ouverture d&apos;un paiement en ligne.</p>
    </LegalPage>
  );
}
