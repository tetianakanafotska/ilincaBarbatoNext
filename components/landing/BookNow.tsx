"use client";

import BookBox from "@/components/landing/BookBox";
import Section from "@/components/Section";

const services = [
  {
    id: "Art therapy",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1752771861/art_ttjtj6.avif",
    name: "Art therapy",
    description:
      "A gentle space to explore your emotions through color and brushstroke. Each session is guided and rooted in self-expression, not technique.",
    price: "€ 90",
    duration: "60 minutes",
    link: "/art-therapy",
  },
  {
    id: "Sound healing",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1752771646/sound_v3kjez.avif",
    name: "Sound healing",
    description:
      "Lie back and receive the calming, healing tones of crystal and Tibetan bowls. A deeply nourishing reset for your body, mind, and nervous system.",
    price: "€ 90",
    duration: "60 minutes",
    link: "/sound-healing",
  },
  {
    id: "Combined therapy",
    pic: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1752767057/combined_cxgy8w.avif",
    name: "Combined therapy",
    description:
      "Begin with a sound bath to ground, then move into intuitive painting to freely express what's stirred within. A deep and beautiful inner experience.",
    price: "€ 90",
    duration: "60 minutes",
    link: "/combined-therapy",
  },
];

function BookNow() {
  return (
    <Section
      heading="choose your therapy"
      description="Each session offers a safe space to slow down, feel, and reconnect through sound or creative expression"
    >
      <div className="lg:flex-row bg-white flex gap-5 justify-between flex-col pb-20 lg:pb-50">
        {services.map((service) => (
          <BookBox key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default BookNow;
