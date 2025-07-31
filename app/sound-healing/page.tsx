import Section from "@/components/Section";

export const metadata = {
  title: "Sound Healing | Ilinca Barbato",
  description:
    "Calm your nervous system with the tones of crystal and Tibetan singing bowls. A space to rest deeply and reconnect with self.",
  openGraph: {
    title: "Sound Healing — Restorative Sound Baths",
    description:
      "Calm your nervous system with the tones of crystal and Tibetan singing bowls. A space to rest deeply and reconnect with self.",
    url: "https://ilincabarbato.com/sound-healing",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750674490/il_kyvkjy.avif",
        width: 1200,
        height: 630,
        alt: "Ilinca Barbato Sound Healing",
      },
    ],
  },
};

const whofor = [
  <>
    You feel <strong>overwhelmed</strong>, <strong>anxious</strong>, or{" "}
    overstimulated
  </>,
  <>
    You have <strong>trouble sleeping</strong> or settling your thoughts
  </>,
  <>
    You're seeking a <strong>non-verbal</strong>, <strong>body-first</strong>{" "}
    form of care
  </>,
  <>
    You're healing from <strong>stress</strong>, <strong>grief</strong>, or{" "}
    <strong>burnout</strong>
  </>,
];

const whatexpect = [
  <>
    A quiet, <strong>candle-lit</strong> or <strong>softly lit</strong> space
  </>,
  <>
    A short <strong>check-in</strong> and <strong>intention setting</strong>
  </>,
  <>
    A <strong>40–50 min sound bath</strong> with singing bowls
  </>,
  <>
    A few minutes of <strong>silence</strong> and <strong>integration</strong>{" "}
    afterward
  </>,
  <>
    Optional <strong>reflection</strong>, <strong>tea</strong>, and{" "}
    <strong>grounding practices</strong>
  </>,
];

const SoundHealing = () => {
  // console.log(
  //   "Rendered on sound",
  //   typeof window === "undefined" ? "server" : "client"
  // );
  return (
    <main className="min-h-screen">
      <div className="h-svh flex pt-[19vh] lg:items-center lg:pt-0 md:px-[45px] px-[20px]">
        <img
          src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1750674490/il_kyvkjy.avif"
          alt=""
          className="absolute inset-0 w-full h-full -z-10 object-cover"
        />
        <div className="flex flex-col gap-6 lg:w-[30%] w-[70%]">
          <h1 className="lg:text-88 text-48 leading-[0.9]">Sound healing</h1>
          <span className=" italic">60 minutes, 90 Euros</span>

          <p>
            A space to rest deeply while the tones of crystal and Tibetan
            singing bowls guide your body into a calm, receptive state.
          </p>
          <div>
            <a
              className="button px-10 rounded-full inline-block text-center"
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2EOc7HrGHnc1yrFHy2Jpl0j3DIWterNq3BKxXCLimclABdrzYCNKpWiNtl7hO6fpQzh-mVpWU_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a session
            </a>
          </div>
        </div>
      </div>

      <p className="lg:text-48 text-[9vw] leading-[10vw] lg:leading-[1.2] lg:mb-25 mb-15 md:mx-[45px] mx-[20px] lg:mt-25 mt-20">
        <span className="lg:ml-50"></span>
        <span className="text-dark/40 ">(in this session)</span> you'll lie down
        and simply listen. As the bowls resonate around you, their frequencies
        interact with your nervous system, encouraging release and quiet within.
        Some people experience physical sensations and visuals — others simply
        rest.
      </p>

      <Section heading="who this is for" right>
        <div className="flex lg:flex-row flex-col justify-between mb-15 lg:gap-10 gap-2 mt-10">
          {whofor.map((item, i) => (
            <div key={i} className="bg-dark/5 rounded-tr-[2.5rem] lg:p-10 p-8">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section heading="what to expect">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-6 gap-2 mt-8">
          {whatexpect.map((item, i) => (
            <div
              key={i}
              className="bg-purple/60 rounded-tr-[2.5rem] lg:p-10 p-8"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>
      <div className="my-40  flex md:mx-[45px] mx-[20px] flex-col justify-center items-center gap-6">
        <p className="text-48 leading-[1] text-center">
          Just Lie Down and Listen
        </p>
        <p className="lg:w-[40%] w-full text-center">
          If you're looking for a place to land, release, and begin again
          gently, this is it. Come, lie down, and let the sound hold you.
        </p>
        <a
          className="button px-10 rounded-full inline-block text-center"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2EOc7HrGHnc1yrFHy2Jpl0j3DIWterNq3BKxXCLimclABdrzYCNKpWiNtl7hO6fpQzh-mVpWU_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Sound Healing Session
        </a>
      </div>
    </main>
  );
};

export default SoundHealing;
