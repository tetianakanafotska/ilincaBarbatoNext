import events from "@/lib/data/upcomingEvents.json";
import clsx from "clsx";
import ArrowLink from "@/components/icons/ArrowLink";

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  img: string;
  link: string;
};

export const metadata = {
  title: "Upcoming Events — Art & Sound Therapy",
  description:
    "Join live events combining art, sound, and shared healing. View upcoming workshops and book your spot.",
  openGraph: {
    title: "Upcoming Events — Art & Sound Therapy",
    description:
      "Join live events combining art, sound, and shared healing. View upcoming workshops and book your spot.",
    url: "https://ilincabarbato.com/upcoming-events",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Art & Sound Therapy Events",
      },
    ],
  },
};

function UpcomingEvents() {
  const now = new Date();

  const isPast = (dateStr: string): boolean => {
    return new Date(dateStr) < now;
  };

  const sortedEvents: Event[] = [...(events as Event[])].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const aIsPast = dateA < now;
    const bIsPast = dateB < now;

    if (!aIsPast && bIsPast) return -1;
    if (aIsPast && !bIsPast) return 1;

    if (!aIsPast && !bIsPast) {
      return dateA.getTime() - dateB.getTime();
    }

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="lg:pt-[16vh] pt-[13vh] md:mx-[45px] mx-[20px]">
      <h1 className="md:text-88 text-48 leading-[1]">Upcoming Events</h1>

      <div className="flex flex-wrap lg:mt-16 mt-9 lg:gap-14 gap-10 mb-20">
        {sortedEvents.map((event) => {
          const past = isPast(event.date);

          return (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              key={event.id}
              className={clsx(
                "flex flex-col group border-1 border-dark w-[25rem]",
                past ? "opacity-30 pointer-events-none" : "cursor-pointer"
              )}
            >
              <div className="p-5 flex justify-between items-center w-full border-b-1 border-dark">
                <span className="flex gap-2 items-center">
                  <img src="/calendar.svg" alt="" className="w-5" />
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="flex gap-2 items-center">
                  <img src="/clock.svg" alt="" className="w-5" />
                  {event.time}
                </span>
              </div>

              <div className="px-5 pt-5 pb-6 h-full flex flex-col">
                <h2 className="font-bold mb-3">{event.title}</h2>
                <p className="mb-4">{event.description}</p>

                <div className="flex-1 flex flex-col justify-end">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="object-cover mb-4 h-[250px] w-full"
                  />
                  <button
                    className={clsx(
                      "w-full button select-none !py-[20px]",
                      !past && "cursor-pointer"
                    )}
                  >
                    <span className="flex w-full justify-center items-center">
                      View event
                      <ArrowLink className="ml-2 h-[13px] inline rotate-225" />
                    </span>
                  </button>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}

export default UpcomingEvents;
