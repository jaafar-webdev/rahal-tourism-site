import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Footer from "@/features/public/footer/Footer";
import LanguageSwitcher from "@/features/public/layout-conponents/LanguageSwitcher";
import ThemeToggle from "@/features/public/layout-conponents/ThemeToggle";
import { ThemeProvider } from "@/features/public/layout-conponents/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const messages = await getMessages();
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClassName =
    locale === "ar" ? "font-ibm-plex-sans-arabic" : "font-nunito-sans";

  return (
    <main lang={locale} dir={dir} className={fontClassName}>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <NextIntlClientProvider messages={messages}>
          <div className="px-3 pt-2 md:px-0 md:pt-0 md:absolute md:top-4 md:end-4 z-50">
            <div className="flex justify-start items-center gap-1">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </ThemeProvider>
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
