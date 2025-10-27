import { PrivacyIcon, TermsIcon } from "./icons";
import { ThemeConfig } from "./themeConfig";

interface PolicyHeaderProps {
  type: "privacy" | "terms";
  title: string;
  lastUpdated: string;
  themeConfig: ThemeConfig;
}

const PolicyHeader = ({
  type,
  title,
  lastUpdated,
  themeConfig,
}: PolicyHeaderProps) => {
  const Icon = type === "privacy" ? PrivacyIcon : TermsIcon;

  return (
    <div className="text-center mb-8">
      <div
        className={`inline-flex items-center justify-center w-16 h-16 ${themeConfig.iconBg} rounded-full mb-4`}
      >
        <Icon className={`w-8 h-8 ${themeConfig.iconColor}`} />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
      <div
        className={`w-20 h-1 ${themeConfig.accent} mx-auto rounded-full`}
      ></div>
      <p className="text-gray-600 mt-4 text-lg">{lastUpdated}</p>
    </div>
  );
};

export default PolicyHeader;
