import { ThemeConfig } from "./themeConfig";

interface PolicySectionProps {
  sectionKey: string;
  index: number;
  title: string;
  content: string;
  themeConfig: ThemeConfig;
}

const PolicySection = ({
  sectionKey,
  index,
  title,
  content,
  themeConfig,
}: PolicySectionProps) => {
  return (
    <section
      key={sectionKey}
      className={`group md:border-l-4 ${themeConfig.border} pl-6 transition-all duration-300`}
    >
      <div className="flex items-start space-x-3">
        <div
          className={`flex-shrink-0 w-8 h-8 ${themeConfig.numberBg} rounded-full flex items-center justify-center transition-colors`}
        >
          <span className={`${themeConfig.numberColor} font-semibold text-sm`}>
            {index + 1}
          </span>
        </div>
        <div className="flex-1">
          <h2
            className={`text-2xl font-semibold text-gray-900 mb-3 ${themeConfig.titleHover} transition-colors`}
          >
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
