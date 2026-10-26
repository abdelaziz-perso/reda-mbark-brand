import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-de-confidentialite/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        R&amp;M CLOTHING n&apos;ouvre pas de compte client sur ce site. Les échanges de commande passent par WhatsApp, téléphone ou Instagram, selon le canal que vous choisissez.
      </p>
      <p>
        Cette page sera complétée avec le détail des données éventuellement échangées via ces services tiers et avec vos droits d&apos;accès et de suppression.
      </p>
    </LegalPage>
  );
}
