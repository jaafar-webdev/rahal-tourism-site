import { getTranslations } from "next-intl/server";
import { BrandSection } from "./components/BrandSection";
import { CopyrightSection } from "./components/CopyrightSection";
import { FooterLinksSection } from "./components/FooterLinksSection";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-[#010101] text-white py-6 border-t border-gray-800">
      <div className=" mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <BrandSection brandText={t("brand")} />
          <FooterLinksSection
            privacyText={t("privacy_policy")}
            termsText={t("terms_of_service")}
            contactText={t("contact_us")}
            aboutText={t("about")}
          />
          <CopyrightSection
            brandText={t("brand")}
            rightsReservedText={t("rights_reserved")}
            designedWithLoveText={t("designed_with_love")}
          />
        </div>
      </div>
    </footer>
  );
}
