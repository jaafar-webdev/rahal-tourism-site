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
  return (
    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
      <FooterLink href="/privacy-policy">{privacyText}</FooterLink>
      <FooterLink href="/terms-of-service">{termsText}</FooterLink>
      <FooterLink href="/contact">{contactText}</FooterLink>
      <FooterLink href="/about">{aboutText}</FooterLink>
    </div>
  );
};
