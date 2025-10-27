import { PrivacyNoteIcon, TermsNoteIcon } from "./icons";
import { ThemeConfig } from "./themeConfig";

interface PolicyNoteProps {
  type: "privacy" | "terms";
  noteText: string;
  themeConfig: ThemeConfig;
}

const PolicyNote = ({ type, noteText, themeConfig }: PolicyNoteProps) => {
  const Icon = type === "privacy" ? PrivacyNoteIcon : TermsNoteIcon;

  return (
    <div
      className={`${themeConfig.noteBg} rounded-xl p-6 border ${themeConfig.noteBg} mt-8`}
    >
      <div className="flex items-center space-x-3">
        <Icon className={`w-6 h-6 ${themeConfig.noteColor} flex-shrink-0`} />
        <p className={`${themeConfig.noteText} text-sm font-medium`}>
          {noteText}
        </p>
      </div>
    </div>
  );
};

export default PolicyNote;
