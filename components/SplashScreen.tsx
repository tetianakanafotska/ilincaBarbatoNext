import { useEffect, useContext } from "react";
import {
  animate,
  useTransform,
  useMotionValue,
  motion,
  MotionValue,
  easeOut,
} from "motion/react";
import { SplashContext } from "@/lib/splashContext";

interface SplashContextType {
  hasSeenSplash: boolean;
  setHasSeenSplash: (value: boolean) => void;
}

function SplashScreen() {
  const { hasSeenSplash, setHasSeenSplash } = useContext(
    SplashContext
  ) as SplashContextType;

  const count = useMotionValue(0);
  const rounded: MotionValue<number> = useTransform(() =>
    Math.round(count.get())
  );

  useEffect(() => {
    const numberAnimation = animate(count, 100, {
      duration: 1,
      ease: easeOut,
    });
    return () => numberAnimation.stop();
  }, []);

  if (hasSeenSplash) return null;

  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.3, duration: 0.3 }}
      className="bg-white z-50 pb-10 fixed flex flex-col w-dvw h-dvh justify-center items-center inset-0"
      onAnimationComplete={() => setHasSeenSplash(true)}
    >
      <div className="flex text-18">
        <motion.div>{rounded}</motion.div>%
      </div>

      <div className="ml-5 w-[9rem]">
        <motion.span
          initial={{ width: "0px" }}
          animate={{ width: "9rem" }}
          transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden h-19 block"
        >
          <div className="w-[9rem] h-19 flex justify-start">
            <img
              src="/splash-paint.svg"
              alt="paint splash"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.span>
      </div>
    </motion.main>
  );
}

export default SplashScreen;
