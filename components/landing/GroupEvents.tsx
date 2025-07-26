import Link from "next/link";
import Section from "../../components/Section";

function GroupEvents() {
  return (
    <Section
      heading="group events"
      description="A beautiful place to bring your friends to. Keep an eye on our events page for the latest gatherings"
      right
    >
      <div className="flex lg:flex-row flex-col gap-8 pt-8 pb-40 lg:pb-60">
        <div className="flex flex-1/2 flex-col gap-10 pr-[18vw] ">
          <h4 className="text-48 leading-[1]">
            Creativity is better when shared
          </h4>
          <p className="text-16">
            We host regular group art sessions and special events, bringing
            people together to explore and inspire.
          </p>
          <div>
            <Link
              href="/upcoming-events"
              className="button cursor-pointer rounded-full px-10 w-auto inline-block text-center"
            >
              Discover group events
            </Link>
          </div>
        </div>
        <div className="flex-1/2 relative leading-[1] lg:justify-end justify-start h-[40vh] flex shrink-0 ">
          <img
            src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1748167681/group_events_rew9rl.avif"
            alt="group event"
            className="md:w-[90%] w-full object-cover object-top"
          />
          <span className="absolute bottom-2 right-2 text-white/70 text-xs">
            @lime_art_photo
          </span>
          <span className="absolute lg:-bottom-6 -bottom-10 text-dark/40 text-14">
            Group Art Therapy Session, Agape Zoe Festival, May 2025
          </span>
        </div>
      </div>
    </Section>
  );
}

export default GroupEvents;
