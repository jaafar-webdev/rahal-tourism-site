export const themeConfig = {
  blue: {
    gradient: "from-slate-50 to-blue-50/30",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "border-blue-200 hover:border-blue-400",
    numberBg: "bg-blue-100 group-hover:bg-blue-200",
    numberColor: "text-blue-600",
    titleHover: "group-hover:text-blue-700",
    accent: "bg-blue-500",
    noteBg: "bg-blue-50/50 border-blue-100",
    noteColor: "text-blue-500",
    noteText: "text-blue-800",
  },
  orange: {
    gradient: "from-slate-50 to-orange-50/30",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    border: "border-orange-200 hover:border-orange-400",
    numberBg: "bg-orange-100 group-hover:bg-orange-200",
    numberColor: "text-orange-600",
    titleHover: "group-hover:text-orange-700",
    accent: "bg-orange-500",
    noteBg: "bg-orange-50/50 border-orange-100",
    noteColor: "text-orange-500",
    noteText: "text-orange-800",
  },
};

export type ThemeConfig = (typeof themeConfig)[keyof typeof themeConfig];
