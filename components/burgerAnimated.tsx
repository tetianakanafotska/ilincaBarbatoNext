import { BurgerLine1 } from "@/components/icons/burgerLines";
import { BurgerLine2 } from "@/components/icons/burgerLines";
import clsx from "clsx";
interface BurgerAnimationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setIsOpenServices: (open: boolean) => void;
}

function BurgerAnimation({
  isOpen,
  setIsOpen,
  setIsOpenServices,
}: BurgerAnimationProps) {
  return (
    <button
      className="h-12 w-12"
      onClick={() => {
        setIsOpen(!isOpen);
        setIsOpenServices(false);
      }}
    >
      <span className="sr-only">Open main menu</span>
      <BurgerLine1
        className={clsx(
          isOpen
            ? "transition ease transform duration-300 translate-y-2 rotate-45"
            : ""
        )}
      />
      <BurgerLine2 className={clsx(isOpen ? "opacity-0" : "py-1")} />
      <BurgerLine1
        className={clsx(
          isOpen
            ? "transition ease transform duration-300 -translate-y-[0.27rem] -rotate-45"
            : ""
        )}
      />
    </button>
  );
}

export default BurgerAnimation;
