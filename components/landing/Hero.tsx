"use client";

import ArrowLink from "@/components/icons/ArrowLink";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import Section from "@/components/Section";

export default function Hero() {
  const isSmall = useMediaQuery("(max-width: 640px)");
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["start end", "start start"],
  });

  const yPercent = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const yPercent2 = useTransform(scrollYProgress2, [0, 1], [30, 0]);

  const objectPosition = useTransform(yPercent, (v) => `0% ${v}%`);
  const objectPosition2 = useTransform(yPercent2, (v) => `0% ${v}%`);

  return (
    <>
      <header className="bg-white mb-10 relative overflow-hidden md:h-screen h-[110vh] w-screen flex md:flex-row flex-col-reverse">
        <div
          className="md:w-[42.5%] relative w-dvw overflow-hidden h-full"
          ref={containerRef2}
        >
          <motion.img
            src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1753502247/hero_short_1_qx9iu4.avif"
            alt="portrait of Ilinca Barbato"
            width={1299}
            height={1671}
            className="object-cover w-full h-full"
            style={{ objectPosition: isSmall ? objectPosition2 : "center" }}
          />
          <div className="flex w-full flex-wrap text-16 font-bold bg-white/30 backdrop-blur-xs items-center  lg:pl-[45px] pl-[20px] absolute h-[80px] leading-[1.2] bottom-0">
            <span className="whitespace-nowrap ">
              ILINCA BARBATO, <br /> CERTIFIED ART & SOUND THERAPIST
            </span>
          </div>
        </div>
        <div className="flex-1 max-w-screen md:px-8 xl:px-0 md:block h-full flex flex-col mb-6 px-[20px] md:pt-[31.8vh] pt-[11vh] md:mx-0">
          <h1 className="md:text-[8vw] xl:text-[6.1vw] text-[10vw] leading-[110%]">
            <div className="relative xl:-left-[13%] w-full xl:w-[calc(100%+3.35vw+100px)]">
              <span className="inline pr-4 xl:pr-0">
                THERAPEUTIC <i>ART</i>
              </span>
              <im
                src="/ampersand.svg"
                alt="ampersand"
                className="inline align-baseline md:w-[5vw] xl:w-[3.85vw] w-[6.4vw] xl:mx-[50px] mr-3 h-auto"
              />
              <span className="relative xl:left-[18.5%]">
                <i>SOUND</i> HEALING
              </span>
            </div>
          </h1>

          <h2 className="xl:w-[54%] w-full leading-[150%] xl:translate-x-[8.1vw] md:pt-13 pt-5 md:text-18 md:mb-0 mb-5">
            Relax and heal through personalized art and sound therapy, exploring
            your emotions, unlocking creativity and rediscovering your inner
            balance
          </h2>
          <div>
            <a
              className="button px-10 rounded-full lg:hidden inline-block text-center"
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2EOc7HrGHnc1yrFHy2Jpl0j3DIWterNq3BKxXCLimclABdrzYCNKpWiNtl7hO6fpQzh-mVpWU_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Therapy
            </a>
          </div>
        </div>
        <span className="lg:flex text-16 hidden text-dark leading-[0.8] gap-2 z-50 absolute bottom-[43px] overflow-hidden lg:left-[calc(100%-178px)] left-[20px]">
          SCROLL DOWN <ArrowLink className="w-[7px] animate-scroll-down" />
        </span>
      </header>
      <Section>
        <div className="flex flex-col justify-between bg-white pt-10 md:pt-16 md:text-48 text-[9vw] md:leading-[59px] leading-[120%] pb-[10vh] lg:pb-[8vh]">
          <p className="mb-[6vh] ">
            <span className="md:ml-[13rem] text-dark/40">
              (art has always been){" "}
            </span>
            my mirror — revealing emotions I couldn’t name and truths I was only
            beginning to understand. Through sound and creative expression, I
            offer a space for you to do the same — to explore your story,
            connect with your body, and meet yourself.
          </p>
          <div
            className=" leading-[1] relative lg:place-self-end"
            ref={containerRef}
          >
            <motion.img
              src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1752852231/smile_tonttr.avif"
              className=" object-cover lg:w-[280px] aspect-[0.85]"
              style={{ objectPosition }}
            />

            <span className="absolute bottom-1 right-1 text-white/70 text-xs">
              @lime_art_photo
            </span>
            <span className="text-dark/40 absolute left-0 -bottom-5 text-14">
              A session at Agape Zoe Festival, May 2025
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
