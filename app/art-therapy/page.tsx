import Section from "@/components/Section";

export const metadata = {
  title: "Art Therapy — Intuitive Painting for Healing",
  description:
    "Discover art therapy sessions that invite expression, calm, and insight through guided intuitive painting — no artistic experience needed.",
  openGraph: {
    title: "Art Therapy — Intuitive Painting for Healing",
    description:
      "Discover art therapy sessions that invite expression, calm, and insight through guided intuitive painting — no artistic experience needed.",
    url: "https://ilincabarbato.com/art-therapy",
    type: "website",
    images: [
      {
        url: "https://ilincabarbato.com/og-image.jpg", // full URL required
        width: 1200,
        height: 630,
        alt: "Art Therapy — Ilinca Barbato",
      },
    ],
  },
};

const whofor = [
  <>
    You feel <strong>emotions you can't quite name</strong> or explain
  </>,
  <>
    You're longing for a non-verbal way to
    <strong> process inner experiences</strong>
  </>,
  <>
    You've <strong>disconnected</strong> from your creativity or sense of self
  </>,
  <>
    You're in a transitional or <strong> emotionally tender season </strong>
  </>,
];

const whatexpect = [
  <>
    Guided exercises using <strong>painting, drawing, or collage</strong> to
    access deeper emotions
  </>,
  <>
    Space to <strong>share insights</strong>, journal, or simply rest and
    process in silence
  </>,
  <>
    <strong>No artistic skill required</strong> — only your presence and
    willingness to explore
  </>,
  <>
    Your preferred location —{" "}
    <strong>at your place or at the yoga studio</strong>
  </>,
];

const TherapeuticArt = () => {
  return (
    <main className="min-h-screen ">
      <div className="lg:min-h-screen mt-[13vh] md:mx-[45px] mx-[20px] lg:mt-0 max-w-screen flex lg:flex-row flex-col items-center ">
        <div className="flex flex-col gap-6 lg:w-[35%] w-full mb-10">
          <h1 className="lg:text-88 text-48 leading-[0.9]">Art therapy</h1>
          <span className=" italic">60 minutes, 90 Euros</span>
          <p>
            A gentle, intuitive journey tailored to your needs. All painting
            materials are included.
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

        <div className="flex flex-col lg:items-end gap-1 w-full lg:ml-10">
          <img
            src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1752143789/arttherapy_1_bwiaz1.avif"
            className="object-cover lg:w-[36vw] w-full aspect-[1.15]"
          />
          <span className="text-dark/40 text-14">
            A candid shot captured at Boare Studio, Jun 15, 2025
          </span>
        </div>
      </div>

      <div className="min-h-screen md:mx-[45px] mx-[20px] mt-20 lg:mt-0">
        <p className="lg:text-48 text-[9vw] md:leading-[1.2] leading-[10vw] lg:mb-25 mb-15">
          <span className="lg:ml-50"></span>
          <span className="text-dark/40 ">(art therapy)</span> is a gentle,
          guided process of painting intuitively — tuning into your body,
          emotions, and breath. Whether you're feeling overwhelmed, stuck or
          simply curious, this space gives shape to what words can't always
          reach.
        </p>
        <div className="flex lg:flex-row flex-col-reverse justify-between w-full mb-20">
          <p className="lg:w-[50%] pt-10 lg:py-0">
            Sessions may include gentle prompts, music, silence, or questions to
            help you connect deeply with what wants to be expressed. Every
            canvas becomes a mirror, a process, a letting-go.
          </p>
          <div className="flex flex-col gap-1 overflow-hidden lg:items-end">
            <img
              src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1752147382/mirror_mkrtik.avif"
              className="lg:w-[50%] object-cover aspect-[0.9]"
            />
            <span className="text-dark/40 text-14">
              Group Art Therapy Session, Jun 15, 2025
            </span>
          </div>
        </div>
      </div>

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
        <div className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-2 mt-8">
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
      <div className="my-40 md:mx-[45px] mx-[20px] flex flex-col justify-center items-center gap-10">
        <p className="text-48 leading-[1] text-center">
          You Don't Need to Be an Artist
        </p>
        <p className="lg:w-[40%] w-full text-center">
          You don't need to know how to paint. You just need to come with
          curiosity and a little willingness to explore. Your inner world
          already knows how to move through color and shape — we just give it
          space.
        </p>
        <a
          className="button px-10 rounded-full inline-block text-center"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2EOc7HrGHnc1yrFHy2Jpl0j3DIWterNq3BKxXCLimclABdrzYCNKpWiNtl7hO6fpQzh-mVpWU_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book an Art Therapy Session
        </a>
      </div>
    </main>
  );
};

export default TherapeuticArt;
