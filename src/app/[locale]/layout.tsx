import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  const messages = await getMessages();

  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClassName =
    locale === "ar" ? ibmPlexSansArabic.className : nunitoSans.className;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={fontClassName}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <NextIntlClientProvider messages={messages}>
            <div className="px-3 pt-2 md:px-0 md:pt-0 md:absolute md:top-4 md:end-4 z-50">
              <div className="flex justify-start items-center gap-1">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
