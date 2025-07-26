import BenefitBox from "@/components/landing/BenefitBox";
import Section from "@/components/Section";

const benefits = [
  {
    id: "1",
    name: "Discover Your Inner Voice",
    description:
      "These sessions aren't about following rules—they're about finding your unique creative rhythm and giving it space to breathe.",
    pic: "/man_flowers.svg",
  },
  {
    id: "2",
    name: "Creative Confidence That Sticks",
    description:
      "As you experiment and play, you'll build a quiet confidence that spills over into how you approach life's challenges.",
    pic: "/man_arms.svg",
  },
  {
    id: "3",
    name: "Release Without Judgment",
    description:
      "Your emotions will flow freely through your art, helping you untangle thought patterns you didn't realize you were holding onto.",
    pic: "/man_lying.svg",
  },
];

function Benefits() {
  return (
    <Section gradient>
      <div className="flex flex-col justify-around w-full lg:flex-row pb-20 lg:pb-50 ">
        {benefits.map((benefit) => (
          <BenefitBox key={benefit.id} {...benefit} />
        ))}
      </div>
    </Section>
  );
}

export default Benefits;
