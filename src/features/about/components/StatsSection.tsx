"use client";

import { useTranslations } from "next-intl";
import { stats } from "../data/stats-data";
import { useStats } from "../hooks/useStats";
import StatCard from "./StatCard";

const StatsSection = () => {
  const t = useTranslations("Stats");
  const { ref, inView } = useStats();

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;