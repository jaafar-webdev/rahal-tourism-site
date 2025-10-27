import { FaPlane, FaUsers, FaStar } from "react-icons/fa";

interface StatIconProps {
  statName: string;
}

const StatIcon = ({ statName }: StatIconProps) => {
  const getIcon = () => {
    switch (statName) {
      case "trips":
        return <FaPlane className="text-3xl text-blue-500" />;
      case "travelers":
        return <FaUsers className="text-3xl text-green-500" />;
      case "reviews":
        return <FaStar className="text-3xl text-yellow-500" />;
      default:
        return <FaStar className="text-3xl text-primary" />;
    }
  };

  return (
    <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-primary/10 transition-colors">
      {getIcon()}
    </div>
  );
};

export default StatIcon;
