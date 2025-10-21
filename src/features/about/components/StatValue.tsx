import CountUp from "react-countup";
import { stats } from "../data/stats-data";

interface StatValueProps {
  stat: (typeof stats)[0];
  inView: boolean;
}

const StatValue = ({ stat, inView }: StatValueProps) => {
  const formatValue = () => {
    if (stat.name === "reviews") {
      return (
        <>
          {inView ? (
            <CountUp end={stat.value} duration={2.5} decimal="." decimals={1} />
          ) : (
            "0.0"
          )}
          <span className="text-2xl">/5</span>
        </>
      );
    }

    return (
      <>
        {inView ? (
          <CountUp end={stat.value} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        {stat.name === "trips" && <span className="text-2xl">+</span>}
      </>
    );
  };

  return (
    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
      {formatValue()}
    </h3>
  );
};

export default StatValue;
