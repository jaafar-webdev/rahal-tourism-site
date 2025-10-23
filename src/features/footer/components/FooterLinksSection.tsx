import { useLocale } from "next-intl";
import { FooterLink } from "./FooterLink";

type FooterLinksSectionProps = {
  privacyText: string;
  termsText: string;
  contactText: string;
  aboutText: string;
};

export const FooterLinksSection = ({
  privacyText,
  termsText,
  contactText,
  aboutText,
}: FooterLinksSectionProps) => {
  const locale = useLocale();
  return (
    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
      <FooterLink href={`/${locale}/privacy-policy`}>{privacyText}</FooterLink>
      <FooterLink href={`/${locale}/terms-of-service`}>{termsText}</FooterLink>
      <FooterLink href={`/${locale}/contact`}>{contactText}</FooterLink>
      <FooterLink href={`/${locale}/about`}>{aboutText}</FooterLink>
    </div>
  );
};
