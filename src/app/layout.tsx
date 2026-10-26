import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobilePurchaseBar } from "@/components/MobilePurchaseBar";
import { ProductQuickView } from "@/components/ProductQuickView";
import { QuickOrderModal } from "@/components/QuickOrderModal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteProvider } from "@/components/SiteProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const title = "R&M CLOTHING | Vêtements de Sport & Fitness Homme";
const description =
  "Découvrez R&M CLOTHING, une collection de vêtements et accessoires sportswear pour homme : T-shirts, hoodies, joggers, shorts, casquettes et sacs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | R&M CLOTHING",
  },
  description,
  applicationName: "R&M CLOTHING",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "R&M CLOTHING",
    title,
    description,
    images: [
      {
        url: "/images/rm/og.jpg",
        width: 1200,
        height: 630,
        alt: "R&M CLOTHING, sportswear homme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/rm/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f3f3f1] font-sans text-[#111]">
        <SiteProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[90] focus:bg-white focus:px-4 focus:py-3 focus:text-black"
          >
            Aller au contenu
          </a>
          <ScrollProgress />
          <Header />
          {children}
          <ContactSection />
          <Footer />
          <WhatsAppButton />
          <MobilePurchaseBar />
          <QuickOrderModal />
          <ProductQuickView />
        </SiteProvider>
      </body>
    </html>
  );
}
