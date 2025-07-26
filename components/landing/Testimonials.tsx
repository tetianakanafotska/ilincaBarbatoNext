"use client";

import VoiceBox from "@/components/landing/VoiceBox";
import Section from "@/components/Section";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import ArrowBack from "@/components/icons/ArrowBack";
import clsx from "clsx";

const voices = [
  {
    id: "1",
    name: "Anna, 34",
    text: "I never thought I was creative, but this made it easy and fun. I left feeling calm and kind of proud of myself.",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750595199/Screenshot_2025-06-22_at_14.10.14_ihrrka.avif",
  },
  {
    id: "2",
    name: "Leo, 41",
    text: "The session really surprised me. I didn’t expect making art to help me connect with my feelings so easily. It was healing in a way I wasn’t prepared for.",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1751297142/leo_lawepl.avif",
  },
  {
    id: "3",
    name: "Mira, 27",
    text: "It's such a nice break from everything. I can just be myself and make whatever I feel without worrying if it's good or not.",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750595200/Screenshot_2025-06-22_at_14.11.01_x2ifo9.avif",
  },
  {
    id: "4",
    name: "Daniela, 39",
    text: "My kid loved it, and honestly, so did I. It's great for both of us to have something creative to do together.",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750595198/Screenshot_2025-06-22_at_14.08.04_mxthx4.avif",
  },
  {
    id: "5",
    name: "Sasha, 22",
    text: "I feel really comfortable here. No pressure, no right or wrong—just time to relax and make art. It helps me feel better.",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750595197/Screenshot_2025-06-22_at_14.03.16_yus20q.avif",
  },
  {
    id: "6",
    name: "Tom, 45",
    text: "We did a group session with friends and had such a good time. It was fun, different, and brought us all a bit closer.",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750595197/leo41_ah1hc2.avif",
  },
];

function Testimonials() {
  const isLarge = useMediaQuery("(min-width: 1024px)");

  const slides = isLarge
    ? [voices.slice(0, 3), voices.slice(3, 6)]
    : voices.map((voice) => [voice]);

  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToSlide = (idx: number) => {
    setCurrent(idx);
    const container = containerRef.current;
    if (container) {
      const slide = container.children[idx] as HTMLElement;
      slide?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, offsetWidth } = container;
    const idx = Math.round(scrollLeft / offsetWidth);
    setCurrent(idx);
  };

  return (
    <Section gradient>
      <div className="relative flex flex-col shrink-0 overflow-x-hidden pb-30 lg:pb-50">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex w-screen snap-x snap-mandatory overflow-scroll no-scrollbar pb-12"
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex w-screen justify-center snap-start shrink-0"
            >
              {slide.map((voice) => (
                <VoiceBox key={voice.id} {...voice} />
              ))}
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              aria-label="Next slide"
              onClick={() =>
                scrollToSlide(Math.min(slides.length - 1, current + 1))
              }
            >
              <ArrowBack
                className={clsx(
                  "absolute top-[40%] md:right-[45px] right-[20px] w-3 transition opacity-40 hover:opacity-60",
                  current === slides.length - 1 && "hidden"
                )}
              />
            </button>
            <button
              aria-label="Previous slide"
              onClick={() => scrollToSlide(Math.max(0, current - 1))}
            >
              <ArrowBack
                className={clsx(
                  "absolute top-[40%] md:left-[45px] left-[20px] w-3 rotate-180 transition opacity-40 hover:opacity-60",
                  current === 0 && "hidden"
                )}
              />
            </button>
          </>
        )}

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <motion.span
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className="w-[8px] aspect-square rounded-full bg-dark/40 cursor-pointer"
              animate={{ opacity: current === idx ? 1 : 0.4 }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;
