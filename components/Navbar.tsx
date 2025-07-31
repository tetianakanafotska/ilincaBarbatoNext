"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useScrollDirection from "@/lib/hooks/useScrollDirection";
import BurgerAnimation from "@/components/burgerAnimated";
import ArrowLink from "@/components/icons/ArrowLink";
import clsx from "clsx";
import TransitionLink from "@/lib/TransitionLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();

  const darkMode = pathname.startsWith("/paintings/");

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsOpenServices(false);
  };

  const hoverBg = darkMode ? "hover:bg-white/15" : "hover:bg-dark/7";

  return (
    <nav
      className={clsx(
        "fixed z-20 text-16 top-0 w-dvw md:px-[45px] px-[20px] transition duration-300",
        darkMode && "bg-0 text-white",
        scrollDirection === "down" && !isOpen && !darkMode
          ? "-translate-y-full"
          : "translate-y-0",
        scrollDirection !== "down" &&
          scrollPosition > 100 &&
          !darkMode &&
          "bg-white/50 backdrop-blur-lg"
      )}
    >
      {/* Desktop Menu */}
      <div className="pt-5 pb-2 leading-[1.2] hidden md:flex items-center justify-between">
        <TransitionLink href="/" className="cursor-pointer link-underline">
          ILINCA BARBATO
        </TransitionLink>

        <div className="space-x-[89px] items-center flex">
          <div className="relative group">
            <a className="inline-block cursor-pointer link-underline">
              SERVICES
            </a>
            <div
              className={clsx(
                "absolute overflow-hidden left-0 rounded-tr-2xl mt-3 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out",
                darkMode ? "bg-0 text-white" : "bg-white"
              )}
            >
              <TransitionLink
                href="/art-therapy"
                className={clsx("px-4 py-3 flex flex-col group/link", hoverBg)}
              >
                Art Therapy
              </TransitionLink>
              <TransitionLink
                href="/sound-healing"
                className={clsx("px-4 py-3 flex flex-col group/link", hoverBg)}
              >
                Sound Healing
              </TransitionLink>
              <TransitionLink
                href="/combined-therapy"
                className={clsx("px-4 py-3 flex flex-col group/link", hoverBg)}
              >
                Combined Therapy
              </TransitionLink>
            </div>
          </div>

          <TransitionLink
            href="/about"
            className={clsx(
              pathname === "/about"
                ? "underline underline-offset-4 decoration-[1px]"
                : "link-underline"
            )}
          >
            ABOUT
          </TransitionLink>
          <TransitionLink
            href="/upcoming-events"
            className={clsx(
              pathname === "/upcoming-events"
                ? "underline underline-offset-4 decoration-[1px]"
                : "link-underline"
            )}
          >
            GROUP EVENTS
          </TransitionLink>

          <a
            href="mailto:ilinca.barbato@yahoo.com"
            className={clsx(
              "rounded-full",
              darkMode ? "button-dark-mode" : "button"
            )}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Mobile Menu Header */}
      <div className="py-2 flex items-center justify-between md:hidden leading-[1]">
        <Link href="/" onClick={handleClose}>
          ILINCA BARBATO
        </Link>

        <div
          className={clsx(
            "md:hidden",
            darkMode ? (isOpen ? "text-dark" : "text-white") : "text-dark"
          )}
        >
          <BurgerAnimation
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsOpenServices={setIsOpenServices}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute inset-0 -z-10 bg-white text-dark w-screen h-screen flex justify-center pt-[36vh]">
          <div className="flex flex-col gap-5 items-center">
            <Link href="/about" onClick={handleClose}>
              ABOUT
            </Link>
            <Link href="/upcoming-events" onClick={handleClose}>
              GROUP EVENTS
            </Link>

            <button
              className="flex gap-2 items-center"
              onClick={() => setIsOpenServices((prev) => !prev)}
            >
              SERVICES
              <ArrowLink
                className={clsx(
                  "w-[7px] align-middle transition-all ease duration-300",
                  isOpenServices ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            {isOpenServices && (
              <div className="flex z-50 flex-col gap-5 justify-center items-center">
                <Link href="/art-therapy" onClick={handleClose}>
                  Art Therapy
                </Link>
                <Link href="/sound-healing" onClick={handleClose}>
                  Sound Healing
                </Link>
                <Link href="/combined-therapy" onClick={handleClose}>
                  Combined Therapy
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
