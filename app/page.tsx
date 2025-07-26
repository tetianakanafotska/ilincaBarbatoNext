import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import BookNow from "@/components/landing/BookNow";
import Testimonials from "@/components/landing/Testimonials";
import GroupEvents from "@/components/landing/GroupEvents";
import QrCode from "@/components/landing/QrCode";

export const metadata = {
  title: "Ilinca Barbato | Art Therapy & Sound Healing",
  description:
    "Therapeutic Art & Sound Healing by Ilinca Barbato. Discover creative and healing experiences in Berlin.",
  openGraph: {
    title: "Ilinca Barbato",
    description:
      "Therapeutic Art & Sound Healing by Ilinca Barbato. Discover creative and healing experiences in Berlin.",
    url: "https://ilincabarbato.com/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilinca Barbato Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilinca Barbato",
    description:
      "Therapeutic Art & Sound Healing by Ilinca Barbato. Discover creative and healing experiences in Berlin.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <main className="relative bg-white z-10">
      <Hero />
      <BookNow />
      <Benefits />
      <GroupEvents />
      <Testimonials />
      <QrCode />
    </main>
  );
}
