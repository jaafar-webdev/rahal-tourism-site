import { useInView } from "react-intersection-observer";

export const useStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return { ref, inView };
};
