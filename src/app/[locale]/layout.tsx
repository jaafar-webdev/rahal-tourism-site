import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "@/app/globals.css";
import { I18nProvider } from "../context/I18nProvider";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
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
  return (
    <html  dir={dir} data-theme="dark">
      <body className={ibmPlexSansArabic.className}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}