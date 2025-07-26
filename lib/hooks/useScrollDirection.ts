import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const difference = currentOffset - prevOffset;

      if (Math.abs(difference) < 70) {
        return;
      }

      setScrollDirection(difference > 0 ? "down" : "up");
      setPrevOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevOffset]);

  return scrollDirection;
};

export default useScrollDirection;
