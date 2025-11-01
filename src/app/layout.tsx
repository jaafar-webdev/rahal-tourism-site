import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans-arabic",
});

export const metadata: Metadata = {
  title: "Rahal Tourism",
  description: "Tourism website for exploring destinations",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${ibmPlexSansArabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
