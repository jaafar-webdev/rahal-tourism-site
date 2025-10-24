import PolicyPageLayout from "@/features/PolicyPage/PolicyPageLayout";

export default function PrivacyPolicyPage() {
  const sections = [
    "informationTitle",
    "howWeUseTitle",
    "dataSecurityTitle",
    "yourRightsTitle",
    "changesToPolicyTitle",
  ];

  return (
    <PolicyPageLayout type="privacy" sections={sections} themeColor="blue" />
  );
}
