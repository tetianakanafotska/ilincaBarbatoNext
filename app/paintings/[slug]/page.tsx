"use client";

import { useParams } from "next/navigation";
import paintings from "@/lib/data/paintingsSale.json";
import Error from "@/components/Error";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import ArrowBack from "@/components/icons/ArrowBack";
import { useState } from "react";
import TransitionLink from "@/lib/TransitionLink";
import Image from "next/image";

export default function PaintingDetail() {
  const { slug } = useParams();
  const painting = paintings.find((p) => p.slug === slug);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!painting) return <Error />;

  return (
    <motion.main
      className="min-h-dvh bg-white lg:h-screen text-[#EAEAEA] flex xl:flex-row flex-col gap-10 relative"
      animate={{ backgroundColor: "#151515" }}
      transition={{
        backgroundColor: { duration: 0.2 },
      }}
    >
      <TransitionLink
        href="/about"
        className="absolute w-30 h-10 hover:scale-102 transition duration-300 cursor-pointer group lg:top-25 top-18 lg:left-[45px] left-[20px] z-10"
      >
        <ArrowBack className="lg:w-3 w-2 rotate-180" />
      </TransitionLink>
      <div className="lg:w-[41.7%] max-h-screen max-w-full lg:pl-24 lg:mt-[10%] mt-[25%] lg:mx-0 mx-[15%] mb-[5%] flex-grow-0 flex flex-col items-end justify-end overflow-hidden">
        <motion.img
          src={painting.src}
          alt={painting.name}
          height={10}
          onClick={() => setIsZoomed(true)}
          className="object-contain cursor-zoom-in w-full max-h-full"
        />
      </div>

      <div className="flex flex-1 flex-col lg:mt-[15%] mx-[45px] md:mx-[7%]">
        <h1>{painting.name}</h1>
        <p className="lg:my-5 my-2 opacity-50">
          {painting.description} <br /> {painting.size}
        </p>

        <span className="mb-8 italic">{painting.price}</span>

        <a
          href={`mailto:ilinca.barbato@yahoo.com?subject=Interested in "${encodeURIComponent(
            painting.name
          )}"`}
          className="button-dark-mode rounded-full inline-block w-fit mb-15"
        >
          Love it? Let's talk
        </a>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              key="zoomed-image"
              src={painting.src}
              alt={painting.name}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
