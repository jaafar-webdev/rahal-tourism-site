import PolicyPageLayout from "@/features/public/PolicyPage/PolicyPageLayout";

export default function TermsOfServicePage() {
  const sections = [
    "acceptanceTitle",
    "useOfServicesTitle",
    "intellectualPropertyTitle",
    "limitationOfLiabilityTitle",
    "modificationsTitle",
  ];

  return (
    <PolicyPageLayout type="terms" sections={sections} themeColor="orange" />
  );
}
