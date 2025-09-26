import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "@/app/globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
   subsets: ["arabic"],
   weight: ["400", "700"],
});

export const metadata: Metadata = {
   title: "Rahal",
   description: "A tourism website built with Next.js",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html>
         <body className={`${ibmPlexSansArabic.className} `}>
            {children}
         </body>
      </html>
   );
}
