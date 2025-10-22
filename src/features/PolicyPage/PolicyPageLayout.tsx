"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { themeConfig } from "./themeConfig";
import PolicyHeader from "./PolicyHeader";
import PolicySection from "./PolicySection";
import PolicyNote from "./PolicyNote";
import { Button } from "@/components/ui/Button";

interface PolicyPageLayoutProps {
  type: "privacy" | "terms";
  sections: string[];
  themeColor: "blue" | "orange";
}

export default function PolicyPageLayout({
  type,
  sections,
  themeColor,
}: PolicyPageLayoutProps) {
  const t = useTranslations(
    type === "privacy" ? "privacyPolicy" : "termsOfService"
  );

  const config = themeConfig[themeColor];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradient} py-8`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <PolicyHeader
          type={type}
          title={t("title")}
          lastUpdated={t("lastUpdated")}
          themeConfig={config}
        />

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 p-6 md:p-8">
          <div className="space-y-8">
            {type === "privacy" && (
              <section className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t("intro")}
                </p>
              </section>
            )}

            <div className="space-y-8">
              {sections.map((sectionKey, index) => (
                <PolicySection
                  key={sectionKey}
                  sectionKey={sectionKey}
                  index={index}
                  title={t(sectionKey)}
                  content={t(sectionKey.replace("Title", "Content"))}
                  themeConfig={config}
                />
              ))}
            </div>

            <PolicyNote
              type={type}
              noteText={t(type === "privacy" ? "contactInfo" : "agreementNote")}
              themeConfig={config}
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/ar" passHref>
            <Button variant="primary" size="lg">
              {useTranslations("PolicyPage")("Back_to_Homepage")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
