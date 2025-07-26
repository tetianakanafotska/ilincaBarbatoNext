import Section from "@/components/Section";

export const metadata = {
  title: "Combined Therapy | Ilinca Barbato ",
  description:
    "Begin with sound to ground your body, then express through intuitive painting. A gentle and holistic space for self-discovery and emotional clarity.",
  openGraph: {
    title: "Combined Therapy — Sound & Art in Sequence",
    description:
      "Begin with sound to ground your body, then express through intuitive painting. A gentle and holistic space for self-discovery and emotional clarity.",
    url: "https://ilincabarbato.com/combined-therapy",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1749573391/IMG_1027_rqo0bi.avif",
        width: 1200,
        height: 630,
        alt: "Combined Therapy Session",
      },
    ],
  },
};

const whofor = [
  <>
    Feel <strong>emotionally stuck</strong> but don't want traditional talk
    therapy
  </>,
  <>
    Want to <strong>reconnect with your inner self</strong> through your senses,
    not your thoughts
  </>,
  <>
    Carry <strong>stress</strong>, <strong>grief</strong>, or inner noise that's
    hard to name
  </>,
  <>
    Crave a safe, creative space to <strong>process life transitions</strong> or
    unspoken experiences
  </>,
];

const whatexpect = [
  <>
    A cozy, welcoming space <strong>with everything provided</strong>
  </>,
  <>
    A <strong>30–40 minute sound bath</strong> to begin
  </>,
  <>
    A short transition into <strong>painting</strong>
  </>,
  <>
    <strong>Time to create freely</strong>, with support if needed
  </>,
  <>
    Optional <strong>reflection</strong> or <strong>conversation</strong> to
    close
  </>,
];

const CombinedTherapy = () => {
  return (
    <main className="min-h-screen">
      <div className="lg:min-h-screen lg:flex-row mt-[13vh] lg:mt-0 flex-col flex max-w-screen items-center mx-[20px] md:mx-[45px]">
        <div className="flex flex-col gap-6 lg:w-[35%] w-full mb-10">
          <h1 className="lg:text-88 text-48 leading-[0.9]">Combined therapy</h1>
          <span className=" italic">60 minutes, 90 Euros</span>

          <p>
            Sound and art therapy combined. A deep and insightful journey inward
            through vibration and expression.
          </p>
          <div>
            <a
              className="button rounded-full px-10 inline-block text-center"
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
            src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1749573391/IMG_1027_rqo0bi.avif"
            alt=""
            className="object-cover lg:w-[46vw] w-full aspect-[1.77]"
          />
          <span className="text-dark/40 text-14">
            [Snapshot] Group Combined Therapy Session, Boare Studio, Jun 15,
            2025
          </span>
        </div>
      </div>

      <p className="lg:text-48 text-[9vw] md:leading-[1.2] mx-[20px] md:mx-[45px] leading-[1.2] lg:mb-25 mb-15 mt-20 lg:mt-0">
        <span className="lg:ml-50"></span>
        <span className="text-dark/40 ">(the session begins with)</span> a deep
        sound bath, using crystal singing bowls and vibrational tones to soothe
        the nervous system, quiet the mind and bring you into your body. From
        that place, we shift into intuitive painting — a non-verbal, expressive
        process.
      </p>

      <Section heading="especially helpful if you..." right>
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
      <div className="my-40 md:mx-[45px] mx-[20px] flex flex-col justify-center items-center gap-10">
        <p className="text-48 lg:w-[50%] leading-[1] text-center">
          Feel, rest, and express — all in one session
        </p>
        <p className="lg:w-[40%] w-[80%] text-center">
          Step into a space where sound softens and art brings release.
        </p>
        <a
          className="button px-10 rounded-full inline-block text-center"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2EOc7HrGHnc1yrFHy2Jpl0j3DIWterNq3BKxXCLimclABdrzYCNKpWiNtl7hO6fpQzh-mVpWU_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Combined Therapy Session
        </a>
      </div>
    </main>
  );
};

export default CombinedTherapy;
