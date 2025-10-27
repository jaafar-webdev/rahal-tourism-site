import { useTranslations } from "next-intl";
import StatIcon from "./StatIcon";
import StatValue from "./StatValue";
import { stats } from "../data/stats-data";

interface StatCardProps {
  stat: (typeof stats)[0];
  inView: boolean;
}

const StatCard = ({ stat, inView }: StatCardProps) => {
  const t = useTranslations("Stats");

  return (
    <div className="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col items-center text-center">
        <StatIcon statName={stat.name} />
        <StatValue stat={stat} inView={inView} />
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          {t(stat.name)}
        </p>
        <div className="mt-4 w-12 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default StatCard;
