import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales/" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        Cette page est un emplacement pour les mentions légales de R&amp;M CLOTHING. Les informations d&apos;identification de l&apos;éditeur seront publiées ici.
      </p>
      <p>Le site présente la collection et permet de demander une commande par téléphone, WhatsApp ou Instagram.</p>
    </LegalPage>
  );
}
