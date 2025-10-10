import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { I18nProvider } from "../context/I18nProvider";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans-arabic",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Rahal",
  description: "A tourism website built with Next.js",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClassName =
    locale === "ar" ? ibmPlexSansArabic.className : nunitoSans.className;

  return (
    <html dir={dir}>
      <body className={fontClassName}>
        <I18nProvider>
          <div className="px-3 pt-2 md:px-0 md:pt-0 md:absolute md:top-4 md:end-4 z-50">
            <div className="flex justify-start items-center gap-1">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
