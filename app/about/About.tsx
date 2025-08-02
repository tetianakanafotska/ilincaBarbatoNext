"use client";

import Section from "@/components/Section";
import { useRouter } from "next/navigation";
import paintings from "@/lib/data/paintingsSale.json";
import { useLenis } from "lenis/react";
import { useScrollRestore } from "@/lib/hooks/useScrollRestore";

const About = () => {
  const lenis = useLenis();
  useScrollRestore(lenis);
  const router = useRouter();

  const onPaintingClick = (slug: string) => () => {
    const scrollY = lenis?.scroll ?? window.scrollY;

    sessionStorage.setItem("scrollPosition", scrollY.toString());

    router.push(`/paintings/${slug}`, { scroll: false });
  };

  return (
    <main>
      <div className="min-h-70dvh flex justify-between md:mx-[45px] mx-[20px] lg:pt-[25vh] pt-[13vh]">
        <div className="w-[70%] flex flex-col">
          <h1 className="lg:text-88 text-48 leading-[1]">
            Hi. I am Ilinca <span className="italic">Barbato</span>
          </h1>
          <div className="lg:ml-[30.5vw] md:mr-[5rem] mt-15 pb-10">
            <p className="mb-5">
              After years in the corporate world, I faced something many
              professionals do: a sudden layoff — and the quiet signs of
              burnout. Instead of rushing into the next thing, I turned to
              painting.
            </p>
            <p className="mb-5">
              Not to create something perfect, but to reconnect, release stress,
              and slow down. What started as a personal outlet quickly became a
              deeper discovery: art does heal.
            </p>
            <p>
              I trained as a certified art therapist and sound healing
              facilitator, and a clear mission came into focus: heal others.
            </p>
          </div>
        </div>
        <div className="w-[30%] aspect-auto mb-16">
          <img
            className="object-contain w-full h-full object-top-left"
            src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1750857483/about_fp3qfq.avif"
            alt="Ilinca Barbato. Work hard, relax harder."
          />
        </div>
      </div>
      <Section
        id="paintings"
        heading="discover my art"
        description="Paintings are for sale. Contact me for inquiries."
      >
        <div className="columns-1 sm:columns-2 -translate-y-15 lg:columns-3 gap-x-[20px] md:gap-x-[45px] lg:mb-18">
          {paintings.map((item) => (
            <figure
              key={item.id}
              onClick={onPaintingClick(item.slug)}
              className="break-inside-avoid mb-[20px] md:mb-[40px] cursor-pointer group"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={item.src}
                  className="w-full h-auto object-contain transition-transform duration-600"
                  alt={item.name}
                />
                <img
                  src="/scaleup.svg"
                  className="opacity-0 hover:scale-110 group-hover:opacity-100 transition-all duration-300 absolute bottom-5 right-5 w-8"
                />
              </div>
              <figcaption className="w-full mt-3 flex flex-col">
                <span>{item.name}</span>
                <span className="italic">{item.price}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default About;
