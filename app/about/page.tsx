import About from "./About";

export const metadata = {
  title: "About | Ilinca Barbato",
  description:
    "Certified art & sound therapist based in Berlin. Offering calming, restorative art therapy sessions in an individual or group format.",
  openGraph: {
    title: "About | Ilinca Barbato",
    description:
      "Certified art & sound therapist based in Berlin. Offering calming, restorative art therapy sessions in an individual or group format.",
    url: "https://ilincabarbato.com/about",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxdpltdkf/image/upload/v1750857483/about_fp3qfq.avif",
        width: 1200,
        height: 630,
        alt: "Ilinca Barbato",
      },
    ],
  },
};

export default function Page() {
  return <About />;
}
